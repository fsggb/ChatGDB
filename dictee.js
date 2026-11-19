// Dictée vocale de ChatGDB et du laboratoire : écoute continue du micro, détection de la parole, transcription par Whisper (serveur ScoutHub).
// Claude, via son API, ne transcrit pas la parole : ce moteur enregistre le micro, découpe la parole en phrases (pause de 0,8 s ou 24 s au plus),
// envoie chaque phrase à Whisper et rend le texte au fur et à mesure. Rien n'est envoyé tant que personne ne parle (bruit de fond mesuré en continu).
// Utilisation : const d = await GDBDictee.demarrer({ transcrire: async (wavBase64, secondes) => ({ texte }), onTexte, onEtat, onErreur, maxSecondes });
//               await d.arreter();   // la dernière phrase est envoyée avant de fermer le micro
(() => {
  "use strict";
  const PAUSE = 0.8, SEG_MAX = 24, VOIX_MIN = 0.25, SEUIL_ABS = 0.010, COUPE_DOUCE = 16;
  const supporte = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (window.AudioContext || window.webkitAudioContext));
  // PCM (Float32, taux du micro) -> WAV 16 kHz mono 16 bits en base64 (moyenne par paquets : filtre simple contre le repliement)
  function versWavBase64(pcm, taux) {
    const ratio = taux / 16000, n = Math.max(1, Math.floor(pcm.length / ratio)), buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    const ecrire = (o, t) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
    ecrire(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); ecrire(8, "WAVEfmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, 16000, true); v.setUint32(28, 32000, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); ecrire(36, "data"); v.setUint32(40, n * 2, true);
    for (let i = 0; i < n; i++) {
      const k0 = Math.floor(i * ratio), k1 = Math.max(k0 + 1, Math.floor((i + 1) * ratio)); let s = 0; for (let k = k0; k < k1; k++) s += pcm[k] || 0;
      v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, s / (k1 - k0))) * 32767, true);
    }
    const u = new Uint8Array(buf); let b = ""; for (let i = 0; i < u.length; i += 0x8000) b += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
    return btoa(b);
  }
  async function demarrer(opt) {
    if (!supporte()) throw new Error("Ce navigateur ne permet pas d’enregistrer le micro.");
    let flux;
    try { flux = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } }); }
    catch (e) { throw new Error(e && /NotAllowed|Permission/i.test(e.name) ? "Micro refusé : autorisez-le dans le navigateur (icône à gauche de l’adresse)." : e && e.name === "NotFoundError" ? "Aucun micro trouvé sur cet appareil." : "Micro indisponible : " + (e && e.message || e)); }
    const AC = window.AudioContext || window.webkitAudioContext, ctx = new AC(); try { if (ctx.state === "suspended") await ctx.resume(); } catch { /* ignoré */ }
    const src = ctx.createMediaStreamSource(flux), proc = ctx.createScriptProcessor(4096, 1, 1), muet = ctx.createGain(); muet.gain.value = 0;
    src.connect(proc); proc.connect(muet); muet.connect(ctx.destination);
    const E = { taux: ctx.sampleRate, seg: null, pre: [], silence: 0, bruit: 0.004, niveau: 0, actif: true, file: Promise.resolve(), nb: 0, attente: 0, debut: performance.now(), voixVue: false, derniereVoix: performance.now(), fin: null };
    const etat = (phase, extra) => { try { opt.onEtat && opt.onEtat({ phase, niveau: E.niveau, secondes: (performance.now() - E.debut) / 1000, enAttente: E.attente, ...extra }); } catch { /* ignoré */ } };
    async function envoyer(seg) {
      const total = seg.morceaux.reduce((n, m) => n + m.length, 0), pcm = new Float32Array(total); let o = 0; seg.morceaux.forEach(m => { pcm.set(m, o); o += m.length; });
      const wav = versWavBase64(pcm, E.taux), secondes = total / E.taux;
      E.attente++; etat("transcription");
      for (let essai = 0; essai < 2; essai++) {
        try {
          const r = await opt.transcrire(wav, secondes), texte = String(r && r.texte || "").trim();
          if (texte) { E.nb++; opt.onTexte && opt.onTexte(texte); }
          break;
        } catch (e) {
          const msg = String(e && e.message || e), fatal = /limite|suspendue|refus|401|403|429|session|expirée|invalide/i.test(msg);
          if (fatal || essai === 1) { opt.onErreur && opt.onErreur(msg); if (fatal) { E.actif = false; setTimeout(() => arreter(), 0); } break; }
          await new Promise(ok => setTimeout(ok, 1500));       // une coupure réseau brève : un second essai
        }
      }
      E.attente--; etat(E.actif ? "ecoute" : "fin");
    }
    function finSegment() {
      const seg = E.seg; E.seg = null; E.silence = 0; if (!seg || seg.voix < VOIX_MIN) return;         // bruit bref : ignoré
      E.file = E.file.then(() => envoyer(seg));
    }
    proc.onaudioprocess = e => {
      if (!E.actif) return;
      const d = new Float32Array(e.inputBuffer.getChannelData(0)); let s = 0; for (let i = 0; i < d.length; i++) s += d[i] * d[i];
      const rms = Math.sqrt(s / d.length), dur = d.length / E.taux, seuil = Math.max(SEUIL_ABS, E.bruit * 2.5), parle = rms > (E.seg ? seuil * 0.7 : seuil);
      E.niveau = Math.min(1, rms * 9) * 0.5 + E.niveau * 0.5;
      if (!E.seg) {
        if (!parle) E.bruit = Math.min(0.03, E.bruit * 0.9 + rms * 0.1);
        E.pre.push(d); if (E.pre.length > 3) E.pre.shift();
        if (!parle) { etat("ecoute"); verifierSilence(); return; }
        E.seg = { morceaux: E.pre.slice(), duree: E.pre.reduce((n, m) => n + m.length, 0) / E.taux, voix: 0 }; E.pre = []; E.silence = 0;
      } else { E.seg.morceaux.push(d); E.seg.duree += dur; }
      if (parle) { E.silence = 0; E.seg.voix += dur; E.voixVue = true; E.derniereVoix = performance.now(); etat("parole"); } else E.silence += dur;
      if (E.silence >= PAUSE || E.seg.duree >= SEG_MAX || (E.seg.duree >= COUPE_DOUCE && !parle && E.silence >= 0.25)) finSegment();
      if (opt.maxSecondes && (performance.now() - E.debut) / 1000 >= opt.maxSecondes) { E.actif = false; setTimeout(() => arreter(), 0); }
    };
    let avert = false;
    function verifierSilence() {
      const t = (performance.now() - E.derniereVoix) / 1000;
      if (!E.voixVue && t > 8 && !avert) { avert = true; opt.onErreur && opt.onErreur("Je n’entends aucune voix : rapprochez-vous du micro, ou vérifiez qu’il n’est pas coupé."); }
      if (t > 90) { E.actif = false; setTimeout(() => arreter(), 0); }       // personne ne parle depuis 90 s : le micro est libéré
    }
    async function arreter() {
      if (E.fin) return E.fin;
      E.fin = (async () => {
        E.actif = false;
        try { proc.onaudioprocess = null; src.disconnect(); proc.disconnect(); } catch { /* ignoré */ }
        finSegment(); await E.file;                                     // la dernière phrase est envoyée avant de fermer
        flux.getTracks().forEach(t => t.stop()); try { await ctx.close(); } catch { /* ignoré */ }
        etat("fin");
      })();
      return E.fin;
    }
    etat("ecoute");
    return { arreter, actif: () => E.actif, phrases: () => E.nb, niveau: () => E.niveau };
  }
  window.GDBDictee = { supporte, demarrer, versWavBase64 };
})();
