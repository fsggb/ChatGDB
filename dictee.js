// Dictée vocale de ChatGDB et du laboratoire : HYBRIDE (instantanée comme la dictée du navigateur, précise comme l'IA).
// Claude, via son API, ne transcrit pas la parole. Ce moteur combine deux sources :
//   1. la dictée du navigateur (Chrome, Edge, Safari) : les mots s'affichent PENDANT que vous parlez, sans attendre ;
//   2. Whisper (IA, serveur de la fédération) : à chaque pause, la phrase est envoyée et son texte, plus juste (noms propres, accords, ponctuation),
//      REMPLACE aussitôt le texte provisoire de cette phrase.
// Sans dictée de navigateur (Firefox, Brave), un aperçu provisoire est demandé à l'IA toutes les 1,2 s pendant la phrase, puis remplacé par le texte final.
// Si l'IA échoue (réseau, limite), le texte du navigateur est conservé : rien n'est perdu. Rien n'est envoyé à l'IA tant que personne ne parle.
// Utilisation : const d = await GDBDictee.demarrer({ transcrire: async (wavBase64, secondes, { apercu }) => ({ texte }), onTexte: (texteComplet, info) => {}, mode: "hybride" });
//               await d.arreter();   // la dernière phrase est corrigée avant de fermer le micro
(() => {
  "use strict";
  const SEG_MAX = 20, VOIX_MIN = 0.22, SEUIL_ABS = 0.010, COUPE_DOUCE = 14, APERCU_MS = 1200, DECALAGE_NAV = 1100;
  const SRC = window.SpeechRecognition || window.webkitSpeechRecognition;
  const supporte = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (window.AudioContext || window.webkitAudioContext));
  const mots = t => String(t || "").trim().split(/\s+/).filter(Boolean);
  // PCM (Float32, taux du micro) -> WAV 16 kHz mono 16 bits en base64
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
  const concat = morceaux => { const total = morceaux.reduce((n, m) => n + m.length, 0), pcm = new Float32Array(total); let o = 0; morceaux.forEach(m => { pcm.set(m, o); o += m.length; }); return pcm; };

  async function demarrer(opt) {
    if (!supporte()) throw new Error("Ce navigateur ne permet pas d’enregistrer le micro.");
    const mode = opt.mode || "hybride";                        // hybride | ia | navigateur
    if (mode === "navigateur" && !SRC) throw new Error("Ce navigateur n’a pas de dictée intégrée (Firefox, Brave) : choisissez le mode « IA seule » ou « Hybride ».");
    const PAUSE = mode === "ia" ? 0.5 : 0.7;
    let flux;
    try { flux = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } }); }
    catch (e) { throw new Error(e && /NotAllowed|Permission/i.test(e.name) ? "Micro refusé : autorisez-le dans le navigateur (icône à gauche de l’adresse)." : e && e.name === "NotFoundError" ? "Aucun micro trouvé sur cet appareil." : "Micro indisponible : " + (e && e.message || e)); }
    const AC = window.AudioContext || window.webkitAudioContext, ctx = new AC(); try { if (ctx.state === "suspended") await ctx.resume(); } catch { /* ignoré */ }
    const src = ctx.createMediaStreamSource(flux), proc = ctx.createScriptProcessor(4096, 1, 1), muet = ctx.createGain(); muet.gain.value = 0;
    src.connect(proc); proc.connect(muet); muet.connect(ctx.destination);
    const E = { taux: ctx.sampleRate, seg: null, pre: [], silence: 0, bruit: 0.004, niveau: 0, actif: true, nb: 0, attente: 0, debut: performance.now(), voixVue: false, derniereVoix: performance.now(), fin: null,
      committed: [], provStart: 0, attenteSegs: [], chaine: Promise.resolve(), segId: 0, segDebut: 0, segPremier: true, dernierTexte: "", lastAp: 0, apEnCours: false };
    // ---- dictée du navigateur (texte instantané)
    const useNav = mode !== "ia" && !!SRC; let srBase = [], srCur = [], srRec = null, srOk = useNav, srErreurs = 0, tl = [];
    const srMots = () => srBase.concat(srCur), nSRa = t => { let n = 0; for (const [tt, c] of tl) { if (tt <= t) n = c; else break; } return n; };
    function demarrerNav() {
      if (!useNav) return;
      try {
        srRec = new SRC(); srRec.lang = opt.langueNav || "fr-FR"; srRec.continuous = true; srRec.interimResults = true; srRec.maxAlternatives = 1;
        srRec.onresult = e => { srErreurs = 0; srCur = mots(Array.from(e.results).map(r => r[0].transcript).join(" ")); const n = srMots().length; if (!tl.length || tl[tl.length - 1][1] !== n) tl.push([performance.now(), n]); emettre(); };
        srRec.onend = () => { srBase = srBase.concat(srCur); srCur = []; if (E.actif && srOk) { try { srRec.start(); } catch { /* relance au prochain essai */ setTimeout(() => { if (E.actif && srOk) { try { srRec.start(); } catch { /* abandon */ } } }, 300); } } };
        srRec.onerror = e => { if (e.error === "no-speech" || e.error === "aborted") return; srErreurs++; if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "language-not-supported" || srErreurs >= 3) { srOk = false; try { srRec.stop(); } catch { /* ignoré */ } emettre(); } };
        srRec.start();
      } catch { srOk = false; }
    }
    // ---- texte complet = phrases corrigées par l'IA + texte provisoire (navigateur, ou aperçu IA) de ce qui n'est pas encore corrigé
    function provisoire() {
      if (srOk) return srMots().slice(E.provStart).join(" ");
      return E.attenteSegs.map(s => s.apercu || "").concat(E.seg && E.seg.apercu ? [E.seg.apercu] : []).filter(Boolean).join(" ");
    }
    function emettre(final) {
      const t = [E.committed.join(" "), provisoire()].filter(Boolean).join(" ");
      if (t === E.dernierTexte && !final) return; E.dernierTexte = t;
      if (E.segDebut && !E.segPremier && provisoire()) { E.segPremier = true; opt.onMetrique && opt.onMetrique({ type: "premier-mot", ms: Math.round(performance.now() - E.segDebut) }); }      // délai entre le début de la parole et le premier mot affiché
      try { opt.onTexte && opt.onTexte(t, { final: !!final, provisoire: !!provisoire() }); } catch { /* ignoré */ }
    }
    const etat = (phase, extra) => { try { opt.onEtat && opt.onEtat({ phase, niveau: E.niveau, secondes: (performance.now() - E.debut) / 1000, enAttente: E.attente, navigateur: srOk, ...extra }); } catch { /* ignoré */ } };
    // ---- IA : une phrase = une requête, lancée tout de suite ; les résultats sont validés dans l'ordre
    async function requete(wav, secondes, apercu) {
      for (let essai = 0; essai < (apercu ? 1 : 2); essai++) {
        try { const r = await opt.transcrire(wav, secondes, { apercu }); return { texte: String(r && r.texte || "").trim() }; }
        catch (e) {
          const msg = String(e && e.message || e), fatal = /limite|suspendue|refus|401|403|429|session|expirée|invalide/i.test(msg);
          if (apercu) return { texte: null };
          if (fatal || essai === 1) { opt.onErreur && opt.onErreur(msg); if (fatal && !E.erreurFatale) { E.erreurFatale = true; E.avertie = true; } return { erreur: msg }; }
          await new Promise(ok => setTimeout(ok, 1200));
        }
      }
      return { erreur: "échec" };
    }
    function finSegment() {
      const seg = E.seg; E.seg = null; E.silence = 0; if (!seg || seg.voix < VOIX_MIN) return;       // bruit bref : ignoré
      seg.id = ++E.segId; seg.tEnd = performance.now(); E.attenteSegs.push(seg); E.attente++; etat("transcription");
      const pcm = concat(seg.morceaux), wav = versWavBase64(pcm, E.taux), secondes = pcm.length / E.taux;
      seg.promesse = mode === "navigateur" ? Promise.resolve({ texte: "" }) : requete(wav, secondes, false);        // « navigateur seul » : aucune requête à l'IA
      E.chaine = E.chaine.then(async () => {
        const r = await seg.promesse, i = E.attenteSegs.indexOf(seg); if (i >= 0) E.attenteSegs.splice(i, 1);
        let texte = r.texte;
        const n = srOk ? Math.min(srMots().length, nSRa(seg.tEnd + DECALAGE_NAV)) : 0, nav = srOk ? srMots().slice(E.provStart, Math.max(E.provStart, n)).join(" ") : "";
        if (!texte) texte = nav || (r.erreur ? seg.apercu || "" : "");             // l'IA n'a rien (ou a échoué) : on garde ce que le navigateur a entendu
        if (srOk && n > E.provStart) E.provStart = n;
        if (texte) { E.committed.push(texte); E.nb++; }
        E.attente--; opt.onMetrique && opt.onMetrique({ type: "phrase", ms: Math.round(performance.now() - seg.tEnd), texte, source: r.texte ? "ia" : "navigateur" });
        emettre(); etat(E.actif ? "ecoute" : "fin");
      });
    }
    function apercuIA() {                                         // sans dictée de navigateur : texte provisoire de la phrase en cours, redemandé à l'IA pendant qu'on parle
      const seg = E.seg; if (srOk || mode === "navigateur" || !seg || E.apEnCours || seg.voix < 0.5 || performance.now() - E.lastAp < APERCU_MS) return;
      E.apEnCours = true; E.lastAp = performance.now(); const pcm = concat(seg.morceaux);
      requete(versWavBase64(pcm, E.taux), pcm.length / E.taux, true).then(r => { E.apEnCours = false; if (r.texte && (E.seg === seg || E.attenteSegs.includes(seg))) { seg.apercu = r.texte; emettre(); } });
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
        E.seg = { morceaux: E.pre.slice(), duree: E.pre.reduce((n, m) => n + m.length, 0) / E.taux, voix: 0, apercu: "" }; E.pre = []; E.silence = 0; E.segDebut = performance.now(); E.segPremier = false;
      } else { E.seg.morceaux.push(d); E.seg.duree += dur; }
      if (parle) { E.silence = 0; E.seg.voix += dur; E.voixVue = true; E.derniereVoix = performance.now(); etat("parole"); } else E.silence += dur;
      apercuIA();
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
        finSegment(); await E.chaine;                                       // la dernière phrase est corrigée avant de fermer
        const reste = srOk ? srMots().slice(E.provStart).join(" ") : "";      // mots entendus par le navigateur après la dernière phrase corrigée
        if (reste) { E.committed.push(reste); E.provStart = srMots().length; }
        try { if (srRec) { srRec.onend = null; srRec.stop(); } } catch { /* ignoré */ }
        flux.getTracks().forEach(t => t.stop()); try { await ctx.close(); } catch { /* ignoré */ }
        emettre(true); etat("fin"); try { opt.onFin && opt.onFin(); } catch { /* ignoré */ }
      })();
      return E.fin;
    }
    // Nouveau point de départ (la personne a modifié le champ à la main) : le texte dicté jusque-là est considéré comme définitif
    function reinitialiser() { E.committed = []; E.provStart = srMots().length; E.attenteSegs.forEach(s => { s.apercu = ""; }); if (E.seg) E.seg.apercu = ""; E.dernierTexte = ""; }
    demarrerNav(); etat("ecoute");
    return { arreter, reinitialiser, actif: () => E.actif, phrases: () => E.nb, niveau: () => E.niveau, texte: () => E.dernierTexte, navigateur: () => srOk };
  }
  window.GDBDictee = { supporte, demarrer, versWavBase64, navigateurDisponible: () => !!SRC };
})();
