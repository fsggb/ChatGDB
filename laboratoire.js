// Laboratoire de l'administrateur : comparer des modèles, tester la dictée, la voix et la recherche par le sens.
// Tout passe par le relais Cloudflare (adresse et jeton signé demandés au serveur ScoutHub, jamais enregistrés).
// ChatGDB peut piloter cette page : paramètres d'adresse (voir PARAMETRES), API window.labo, résultats dans #resultats-json.
(async () => {
  "use strict";
  const $ = id => document.getElementById(id);
  const el = (tag, props = {}, ...enfants) => { const e = Object.assign(document.createElement(tag), props); e.append(...enfants); return e; };
  const etat = (t, ko) => { $("etat").textContent = t || ""; $("etat").classList.toggle("ko", !!ko); };
  const arrondi = (n, d = 1) => Math.round(n * 10 ** d) / 10 ** d;
  let CLAUDE = [["claude-haiku-5-5", "Claude Haiku 5.5", 0.10, 0.50], ["claude-sonnet-5-5", "Claude Sonnet 5.5", 2, 10], ["claude-opus-5-5", "Claude Opus 5.5", 4, 20]];
  const RAPIDES = ["llama-3.1-8b", "qwen3-30b", "gpt-oss-20b", "granite", "gemma-4"];
  const PARAMETRES = "onglet, q (question), systeme, modeles (liste séparée par des virgules : morceaux de nom, « claude », « rapides » ou « tous »), temp, max, force=1, lancer=1 ; voix : texte ; recherche : r (question)";

  // ---------- connexion ----------
  { const connu = Hub.cachedUser(); if (connu) Hub.renderBar && Hub.renderBar(connu); }
  const user = await Hub.requireUser({ admin: true }); if (!user) return;
  let conf = null, catalogue = [], dernierEtat = null;
  async function relais(force) {
    if (conf && !force && Date.now() < conf.expire) return conf;
    const o = await Hub.call("rapide", {});
    if (!o.relais || !o.jeton) throw new Error("Le relais Cloudflare n’est pas configuré sur le serveur.");
    conf = { base: o.relais.replace(/\/chat\/?$/, "").replace(/\/$/, ""), chat: o.relais, jeton: o.jeton, expire: Date.now() + 12 * 60000 };
    return conf;
  }
  async function appel(chemin, corps, essai = 0) {
    const c = await relais(essai > 0);
    const res = await fetch(chemin === "/chat" ? c.chat : c.base + chemin, { method: "POST", headers: { "content-type": "application/json", "x-scouthub-jeton": c.jeton }, body: JSON.stringify(corps || {}) });
    if (res.status === 401 && essai < 1) return appel(chemin, corps, essai + 1);
    return res;
  }
  async function ia(chemin, corps) {
    const res = await appel("/ia" + chemin, corps); let o;
    try { o = await res.json(); } catch { throw new Error("Réponse invalide (" + res.status + ")."); }
    if (!res.ok || o.ok === false || o.type === "error") throw new Error(o.error && o.error.message || o.error || "Erreur " + res.status);
    if (o.etat) majBudget(o.etat);
    if (typeof o.restant === "number" && dernierEtat) majBudget({ ...dernierEtat, utilises: dernierEtat.budget - o.restant });
    return o;
  }
  function majBudget(e) {
    dernierEtat = e;
    const part = Math.min(1, e.utilises / e.budget);
    $("budget-txt").textContent = "Aujourd’hui : " + arrondi(e.utilises, 0) + " / " + e.budget + " Neurons";
    const b = $("budget-barre"); b.style.width = Math.round(part * 100) + "%"; b.className = part >= 0.8 ? "rouge" : part >= 0.5 ? "chaud" : "";
    $("b-etat").textContent = "";
    $("b-etat").append(el("p", { textContent: arrondi(e.utilises, 1) + " Neurons utilisés sur " + e.budget + " (" + Math.round(part * 100) + " %), " + e.appels + " appels aujourd’hui (jour UTC " + e.jour + ")." }), el("p", { className: "mu", textContent: "Coupure automatique à " + Math.round(e.coupure * 100) + " %, soit " + Math.round(e.budget * e.coupure) + " Neurons." }));
  }

  // ---------- journal et résultats lisibles par ChatGDB ----------
  const RES = { essais: [] };
  const lireJ = () => { try { return JSON.parse(localStorage.getItem("labo.journal") || "[]"); } catch { return []; } };
  function noter(type, resume, detail) {
    const e = { t: new Date().toISOString(), type, resume, detail };
    RES.essais.push(e); RES.essais = RES.essais.slice(-30);
    $("resultats-json").textContent = JSON.stringify(RES, null, 1);
    try { localStorage.setItem("labo.journal", JSON.stringify([...lireJ(), e].slice(-50))); } catch { /* ignoré */ }
    dessinerJournal();
  }
  function dessinerJournal() {
    const l = $("j-liste"); l.textContent = "";
    const j = lireJ().reverse();
    if (!j.length) l.append(el("p", { className: "mu", textContent: "Aucun essai pour le moment." }));
    j.forEach(e => l.append(el("div", { className: "entree-journal" }, el("small", { textContent: new Date(e.t).toLocaleString("fr-FR") + " · " + e.type }), el("div", { textContent: e.resume }))));
  }
  $("j-export").onclick = async () => { try { await navigator.clipboard.writeText(JSON.stringify(lireJ(), null, 1)); etat("Journal copié."); } catch { etat("Copie refusée par le navigateur.", true); } };
  $("j-vider").onclick = () => { try { localStorage.removeItem("labo.journal"); } catch { /* ignoré */ } dessinerJournal(); };

  // ---------- onglets ----------
  function onglet(nom) {
    document.querySelectorAll("#onglets button").forEach(b => b.setAttribute("aria-selected", String(b.dataset.onglet === nom)));
    document.querySelectorAll(".panneau").forEach(p => { p.hidden = p.id !== "p-" + nom; });
    if (nom === "fiches" && typeof listerFiches === "function" && !onglet.fichesVues) { onglet.fichesVues = true; listerFiches(); }
    try { history.replaceState(null, "", "#" + nom); } catch { /* ignoré */ }
  }
  $("onglets").addEventListener("click", e => { const b = e.target.closest("button"); if (b) onglet(b.dataset.onglet); });

  // ---------- comparer ----------
  function dessinerModeles() {
    const z = $("c-modeles"); z.textContent = "";
    const tout = [...CLAUDE.map(([id, nom, a, b]) => ({ id, nom, claude: true, info: "$" + a + " / $" + b + " par M" })), ...catalogue.map(m => ({ id: m.id, nom: m.nom, info: arrondi((m.entree + m.sortie) / 2000, 0) + " N/1000 jetons" }))];
    tout.forEach(m => { const c = el("input", { type: "checkbox", value: m.id }); c.dataset.claude = m.claude ? "1" : ""; z.append(el("label", {}, c, document.createTextNode(m.nom), el("small", { textContent: m.info }))); });
    $("b-tarifs").textContent = "";
    catalogue.forEach(m => $("b-tarifs").append(el("tr", {}, el("td", { textContent: m.nom }), el("td", { className: "n", textContent: m.entree.toLocaleString("fr-FR") }), el("td", { className: "n", textContent: m.sortie.toLocaleString("fr-FR") }))));
  }
  const cases = () => [...$("c-modeles").querySelectorAll("input")];
  function choisir(lot) {
    cases().forEach(c => {
      const nom = c.parentElement.textContent.toLowerCase(), id = c.value.toLowerCase();
      c.checked = lot === "tous" ? !c.dataset.claude : lot === "claude" ? !!c.dataset.claude : lot === "rapides" ? RAPIDES.some(r => id.includes(r)) : false;
    });
    estimer();
  }
  document.querySelector(".raccourcis").addEventListener("click", e => { const b = e.target.closest("button"); if (b) choisir(b.dataset.lot); });
  $("c-modeles").addEventListener("change", estimer);
  function estimer() {
    const n = cases().filter(c => c.checked).length;
    $("c-estim").textContent = n ? n + " modèle(s) sélectionné(s)" : "";
  }
  // Appel d'un modèle Claude par le relais (réponse en flux, lue jusqu'au bout)
  async function claude(id, systeme, q, temp, max) {
    // Pas de température : les modèles Claude 5.5 refusent toute valeur autre que celle par défaut
    const corps = { model: id, max_tokens: max, messages: [{ role: "user", content: q }] };
    if (systeme) corps.system = systeme;
    const t0 = performance.now(), res = await appel("/chat", corps);
    if (!res.ok) { let m = "Erreur " + res.status; try { const o = await res.json(); m = o.error && o.error.message || m; } catch { /* ignoré */ } throw new Error(m); }
    const lecteur = res.body.getReader(), dec = new TextDecoder(); let tampon = "", texte = "", entree = 0, sortie = 0;
    for (;;) {
      const { value, done } = await lecteur.read(); if (done) break;
      tampon += dec.decode(value, { stream: true });
      let i; while ((i = tampon.indexOf("\n\n")) >= 0) {
        const bloc = tampon.slice(0, i); tampon = tampon.slice(i + 2);
        const d = bloc.split("\n").find(l => l.startsWith("data:")); if (!d) continue;
        let o; try { o = JSON.parse(d.slice(5)); } catch { continue; }
        if (o.type === "content_block_delta" && o.delta && o.delta.type === "text_delta") texte += o.delta.text;
        else if (o.type === "message_start" && o.message.usage) entree = (o.message.usage.input_tokens || 0) + (o.message.usage.cache_creation_input_tokens || 0) + (o.message.usage.cache_read_input_tokens || 0);
        else if (o.type === "message_delta" && o.usage) sortie = o.usage.output_tokens || sortie;
        else if (o.type === "error") throw new Error(o.error && o.error.message || "Erreur Claude");
      }
    }
    const p = CLAUDE.find(c => c[0] === id), dollars = (entree * p[2] + sortie * p[3]) / 1e6;
    return { texte, entree, sortie, dollars, ms: Math.round(performance.now() - t0), nom: p[1] };
  }
  function carte(nom) { const c = el("div", { className: "carte" }); c.dataset.modele = nom; c.append(el("header", {}, el("h3", { textContent: nom }), el("span", { className: "mu", textContent: "en cours…" }))); return c; }
  async function comparer(o) {
    const ids = o.modeles, q = String(o.q || "").trim();
    if (!q) { etat("Écrivez une question.", true); return []; }
    if (!ids.length) { etat("Choisissez au moins un modèle.", true); return []; }
    etat("Comparaison en cours…"); const zone = $("c-resultats"); zone.textContent = "";
    const cible = ids.map(id => {
      const c = CLAUDE.find(x => x[0] === id) || null, m = catalogue.find(x => x.id === id);
      const k = carte((c ? c[1] : m ? m.nom : id)); zone.append(k); return { id, claude: !!c, k };
    });
    const systeme = String(o.systeme || "").trim(), temp = +o.temp || 0, max = +o.max || 800;
    const sorties = await Promise.all(cible.map(async ({ id, claude: estClaude, k }) => {
      try {
        let r;
        if (estClaude) r = await claude(id, systeme, q, temp, max);
        else {
          const messages = [...(systeme ? [{ role: "system", content: systeme }] : []), { role: "user", content: q }];
          const a = await ia("/chat", { model: id, messages, temperature: temp, max_tokens: max, force: !!o.force });
          r = { texte: a.texte, raison: a.raisonnement, entree: a.entree, sortie: a.sortie, neurons: a.neurons, ms: a.ms, nom: a.nom, outils: a.outils };
        }
        k.querySelector("span").textContent = (r.ms / 1000).toFixed(1) + " s";
        k.append(el("p", { className: "texte", textContent: r.texte || "(réponse vide)" }));
        if (r.raison) k.append(el("details", { className: "raison" }, el("summary", { textContent: "Raisonnement du modèle" }), el("p", { className: "texte", textContent: r.raison })));
        if (r.outils && r.outils.length) k.append(el("p", { className: "raison", textContent: "Appels d’outils : " + JSON.stringify(r.outils).slice(0, 400) }));
        k.append(el("p", { className: "meta", textContent: r.entree + " jetons lus, " + r.sortie + " écrits · " + (r.dollars != null ? "≈ " + r.dollars.toFixed(5) + " $" : r.neurons + " Neurons") }));
        return { modele: id, nom: r.nom, texte: r.texte, ms: r.ms, entree: r.entree, sortie: r.sortie, neurons: r.neurons, dollars: r.dollars };
      } catch (e) {
        k.classList.add("erreur"); k.querySelector("span").textContent = "erreur"; k.append(el("p", { textContent: e.message }));
        return { modele: id, erreur: e.message };
      }
    }));
    etat("Comparaison terminée."); noter("comparaison", q.slice(0, 80) + " → " + sorties.map(s => (s.nom || s.modele) + (s.erreur ? " (erreur)" : " " + (s.ms / 1000).toFixed(1) + " s")).join(", "), { q, systeme, sorties });
    return sorties;
  }
  const lire = () => ({ modeles: cases().filter(c => c.checked).map(c => c.value), q: $("c-q").value, systeme: $("c-systeme").value, temp: $("c-temp").value, max: $("c-max").value, force: $("c-force").checked });
  $("c-lancer").onclick = async () => { $("c-lancer").disabled = true; try { await comparer(lire()); } catch (e) { etat(e.message, true); } finally { $("c-lancer").disabled = false; } };

  // ---------- dictée ----------
  function versWav(buffer) {         // AudioBuffer -> WAV 16 kHz mono 16 bits (accepté partout par Whisper)
    const taux = 16000, n = Math.floor(buffer.duration * taux), ctx = new OfflineAudioContext(1, n, taux);
    const src = ctx.createBufferSource(); src.buffer = buffer; src.connect(ctx.destination); src.start();
    return ctx.startRendering().then(r => {
      const pcm = r.getChannelData(0), out = new DataView(new ArrayBuffer(44 + pcm.length * 2));
      const ecrire = (o, s) => [...s].forEach((c, i) => out.setUint8(o + i, c.charCodeAt(0)));
      ecrire(0, "RIFF"); out.setUint32(4, 36 + pcm.length * 2, true); ecrire(8, "WAVEfmt "); out.setUint32(16, 16, true); out.setUint16(20, 1, true); out.setUint16(22, 1, true);
      out.setUint32(24, taux, true); out.setUint32(28, taux * 2, true); out.setUint16(32, 2, true); out.setUint16(34, 16, true); ecrire(36, "data"); out.setUint32(40, pcm.length * 2, true);
      for (let i = 0; i < pcm.length; i++) out.setInt16(44 + i * 2, Math.max(-1, Math.min(1, pcm[i])) * 32767, true);
      return { blob: new Blob([out], { type: "audio/wav" }), duree: r.duration };
    });
  }
  const base64 = blob => new Promise((ok, ko) => { const f = new FileReader(); f.onload = () => ok(String(f.result).split(",")[1]); f.onerror = () => ko(new Error("Lecture de l’audio impossible.")); f.readAsDataURL(blob); });
  let enreg = null, reco = null, texteNav = "", debutNav = 0, finNav = 0, chrono = 0, debutEnreg = 0;
  async function transcrire(blob) {
    $("d-w-meta").textContent = "Transcription…"; $("d-w-texte").textContent = "";
    try {
      const audio = await blob.arrayBuffer().then(b => new (window.AudioContext || window.webkitAudioContext)().decodeAudioData(b));
      if (audio.duration > 130) throw new Error("Audio trop long (130 s au plus).");
      const w = await versWav(audio), o = await ia("/dictee", { audio: await base64(w.blob), duree: w.duree, langue: "fr", force: $("c-force").checked });
      $("d-w-texte").textContent = o.texte || "(rien reconnu)"; $("d-w-meta").textContent = (o.ms / 1000).toFixed(1) + " s pour " + w.duree.toFixed(1) + " s de voix · " + o.neurons + " Neurons";
      noter("dictée", "Whisper : " + (o.texte || "").slice(0, 80), { whisper: o.texte, ms: o.ms, duree: w.duree, navigateur: texteNav });
    } catch (e) { $("d-w-meta").textContent = "Erreur : " + e.message; }
  }
  $("d-enreg").onclick = async () => {
    try {
      const flux = await navigator.mediaDevices.getUserMedia({ audio: true });
      const morceaux = []; enreg = new MediaRecorder(flux);
      enreg.ondataavailable = e => morceaux.push(e.data);
      enreg.onstop = () => { flux.getTracks().forEach(t => t.stop()); clearInterval(chrono); transcrire(new Blob(morceaux, { type: enreg.mimeType })); };
      texteNav = ""; $("d-n-texte").textContent = ""; $("d-n-meta").textContent = "—";
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SR) {
        reco = new SR(); reco.lang = "fr-FR"; reco.continuous = true; reco.interimResults = false; debutNav = performance.now();
        reco.onresult = ev => { texteNav = [...ev.results].map(r => r[0].transcript).join(" ").trim(); $("d-n-texte").textContent = texteNav; finNav = performance.now(); };
        reco.onend = () => { $("d-n-meta").textContent = texteNav ? "reçu " + ((finNav - debutNav) / 1000).toFixed(1) + " s après le début" : "rien reconnu"; };
        try { reco.start(); } catch { reco = null; }
      } else $("d-n-meta").textContent = "Dictée du navigateur indisponible ici.";
      enreg.start(); debutEnreg = performance.now();
      chrono = setInterval(() => { $("d-duree").textContent = "Enregistrement : " + ((performance.now() - debutEnreg) / 1000).toFixed(0) + " s"; }, 500);
      $("d-enreg").disabled = true; $("d-stop").disabled = false;
    } catch (e) { etat("Micro indisponible : " + e.message, true); }
  };
  $("d-stop").onclick = () => { try { enreg && enreg.state !== "inactive" && enreg.stop(); reco && reco.stop(); } catch { /* ignoré */ } $("d-enreg").disabled = false; $("d-stop").disabled = true; $("d-duree").textContent = ""; };
  $("d-fichier").onchange = e => { const f = e.target.files[0]; if (f) transcrire(f); };

  // ---------- voix ----------
  async function lireVoix(texte) {
    $("v-meta").textContent = "Synthèse…";
    const o = await ia("/voix", { texte, langue: "fr", force: $("c-force").checked });
    const tete = o.audio.slice(0, 5), type = tete === "UklGR" ? "audio/wav" : "audio/mpeg";
    const a = $("v-audio"); a.src = "data:" + type + ";base64," + o.audio; a.hidden = false; a.play().catch(() => {});
    $("v-meta").textContent = (o.ms / 1000).toFixed(1) + " s de calcul · " + o.neurons + " Neurons";
    noter("voix", "MeloTTS : " + texte.slice(0, 60), { ms: o.ms, neurons: o.neurons });
  }
  $("v-lancer").onclick = async () => { try { await lireVoix($("v-texte").value); } catch (e) { $("v-meta").textContent = "Erreur : " + e.message; } };

  // ---------- recherche par le sens ----------
  let fiches = [], vecteurs = null;
  const norm = t => String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const texteFiche = f => f.titre + ". " + (f.resume || "") + " " + (f.mots_cles || []).join(", ");
  async function chargerFiches() {
    if (fiches.length) return;
    const r = await fetch(new URL("connaissances/index.json", location.href)); if (!r.ok) throw new Error("Base de connaissances introuvable.");
    const i = await r.json(); fiches = i.fiches; RES.genere = i.genere;
    try { const v = JSON.parse(localStorage.getItem("labo.vec." + i.genere) || "null"); if (v && v.length === fiches.length) vecteurs = v; } catch { /* ignoré */ }
    $("r-etat").textContent = fiches.length + " fiches" + (vecteurs ? ", indexées" : ", non indexées (≈ 35 Neurons une fois)");
  }
  async function indexer() {
    await chargerFiches(); const v = [];
    for (let i = 0; i < fiches.length; i += 40) {
      $("r-etat").textContent = "Indexation " + Math.min(i + 40, fiches.length) + " / " + fiches.length + "…";
      const o = await ia("/vecteurs", { textes: fiches.slice(i, i + 40).map(texteFiche), force: true }); v.push(...o.vecteurs);
    }
    vecteurs = v; try { localStorage.setItem("labo.vec." + RES.genere, JSON.stringify(v.map(x => x.map(n => Math.round(n * 1e4) / 1e4)))); } catch { /* trop gros : gardé en mémoire */ }
    $("r-etat").textContent = fiches.length + " fiches indexées."; noter("indexation", fiches.length + " fiches indexées", {});
  }
  const cos = (a, b) => { let s = 0, x = 0, y = 0; for (let i = 0; i < a.length; i++) { s += a[i] * b[i]; x += a[i] * a[i]; y += b[i] * b[i]; } return s / (Math.sqrt(x * y) || 1); };
  function motsCles(q) {
    const t = norm(q).split(" ").filter(w => w.length > 2);
    return fiches.map((f, i) => { const h = norm(f.titre) + " " + norm((f.mots_cles || []).join(" ")) + " " + norm(f.resume); return [i, t.reduce((s, w) => s + (norm(f.titre).includes(w) ? 3 : 0) + (norm((f.mots_cles || []).join(" ")).includes(w) ? 2 : 0) + (h.includes(w) ? 1 : 0), 0)]; }).filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]).map(x => x[0]);
  }
  async function chercher(q) {
    await chargerFiches(); const k = motsCles(q).slice(0, 8); let sens = [], hyb = [];
    if (vecteurs) {
      const o = await ia("/vecteurs", { textes: [q], force: true }), vq = o.vecteurs[0];
      sens = fiches.map((_, i) => [i, cos(vq, vecteurs[i])]).sort((a, b) => b[1] - a[1]).slice(0, 8).map(x => x[0]);
      const sc = new Map(); [k, sens].forEach(l => l.forEach((i, r) => sc.set(i, (sc.get(i) || 0) + 1 / (10 + r))));
      hyb = [...sc].sort((a, b) => b[1] - a[1]).slice(0, 8).map(x => x[0]);
    }
    const colonne = (titre, liste, note) => el("div", { className: "carte" }, el("h3", { textContent: titre }), note ? el("p", { className: "mu", textContent: note }) : "", el("ol", {}, ...liste.slice(0, 6).map(i => el("li", {}, fiches[i].titre, el("br"), el("small", { textContent: fiches[i].theme + " · " + fiches[i].id })))));
    const z = $("r-resultats"); z.textContent = "";
    z.append(colonne("Mots-clés (actuel)", k, k.length ? "" : "Aucun résultat."), colonne("Par le sens (bge-m3)", sens, vecteurs ? "" : "Indexez d’abord les fiches."), colonne("Hybride", hyb, vecteurs ? "" : "Indexez d’abord les fiches."));
    noter("recherche", q + " → mots-clés : " + (k[0] != null ? fiches[k[0]].id : "—") + " ; sens : " + (sens[0] != null ? fiches[sens[0]].id : "—") + " ; hybride : " + (hyb[0] != null ? fiches[hyb[0]].id : "—"), { q, motscles: k.slice(0, 5).map(i => fiches[i].id), sens: sens.slice(0, 5).map(i => fiches[i].id), hybride: hyb.slice(0, 5).map(i => fiches[i].id) });
  }
  $("r-indexer").onclick = async () => { try { await indexer(); } catch (e) { $("r-etat").textContent = "Erreur : " + e.message; } };
  $("r-lancer").onclick = async () => { try { await chercher($("r-q").value); } catch (e) { etat(e.message, true); } };
  $("r-q").addEventListener("keydown", e => { if (e.key === "Enter") $("r-lancer").click(); });

  // ---------- brouillons de fiches ----------
  async function fichesAppel(chemin, corps) {
    const res = await appel("/fiches/" + chemin, corps || {}); let o; try { o = await res.json(); } catch { throw new Error("Réponse invalide (" + res.status + ")."); }
    if (!res.ok || o.ok === false) throw new Error(o.error && o.error.message || "Erreur " + res.status);
    return o;
  }
  async function listerFiches() {
    $("f-etat").textContent = "Chargement…"; const z = $("f-liste"); z.textContent = "";
    try {
      const o = await fichesAppel("liste");
      $("f-etat").textContent = o.brouillons.length ? o.brouillons.length + " brouillon(s) à relire." : "Aucun brouillon en attente.";
      o.brouillons.forEach(b => {
        const texte = el("pre", { className: "texte", hidden: true }), statut = el("p", { className: "meta" });
        const voir = el("button", { type: "button", textContent: "Voir" }), ok = el("button", { type: "button", className: "primaire", textContent: "Valider" }), non = el("button", { type: "button", textContent: "Refuser" });
        voir.onclick = async () => { if (texte.hidden && !texte.textContent) { try { texte.textContent = (await fichesAppel("lire", { id: b.id })).texte; } catch (e) { statut.textContent = e.message; } } texte.hidden = !texte.hidden; };
        ok.onclick = async () => { ok.disabled = non.disabled = true; try { const r = await fichesAppel("valider", { id: b.id }); statut.textContent = r.message; noter("fiche validée", b.id, r); } catch (e) { statut.textContent = e.message; ok.disabled = non.disabled = false; } };
        non.onclick = async () => { ok.disabled = non.disabled = true; try { await fichesAppel("refuser", { id: b.id }); statut.textContent = "Brouillon refusé et supprimé."; noter("fiche refusée", b.id, {}); } catch (e) { statut.textContent = e.message; ok.disabled = non.disabled = false; } };
        z.append(el("div", { className: "carte" }, el("header", {}, el("h3", { textContent: b.titre }), el("span", { className: "mu", textContent: b.theme })), el("p", { textContent: b.resume }), el("p", { className: "meta", textContent: b.id }), el("div", { className: "ligne" }, voir, ok, non), statut, texte));
      });
    } catch (e) { $("f-etat").textContent = "Erreur : " + e.message; }
  }
  $("f-actualiser").onclick = listerFiches;

  // ---------- boîte à outils de développement ----------
  const OUTILS = [
    ["1. RTK : économiser les jetons", "Résume les sorties des commandes (git, ls, npm…) avant que Claude les lise : bien moins de jetons consommés.", ["winget install --id rtk-ai.rtk -e", "rtk init -g"]],
    ["2. Graphify : la carte du projet", "Transforme le projet (code, documents, PDF) en carte de connaissances que Claude consulte au lieu de tout relire. Ensuite, taper /graphify dans Claude Code.", ["pip install graphifyy   # deux « y »", "graphify install"]],
    ["3a. UI/UX Pro Max : règles de design et d’animation", "Dépôt de particulier : lire son SKILL.md avant d’installer.", ["npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max -g -a claude-code -y"]],
    ["3b. Framer Motion : animations web", "Dépôt de particulier : lire son SKILL.md avant d’installer.", ["npx skills add patricio0312rev/skills --skill framer-motion-animator -g -a claude-code -y"]],
    ["3c. Find-skills : trouver d’autres skills", "Dépôt de particulier : lire son SKILL.md avant d’installer.", ["npx skills add vercel-labs/skills --skill find-skills -g -a claude-code -y", "npx skills find \"three.js 3d\""]]
  ];
  OUTILS.forEach(([titre, desc, cmds]) => {
    const bloc = el("div", { className: "outil" }, el("h3", { textContent: titre }), el("p", { className: "mu", textContent: desc }));
    cmds.forEach(c => {
      const b = el("button", { type: "button", textContent: "Copier" });
      b.onclick = async () => { try { await navigator.clipboard.writeText(c.replace(/\s+#.*$/, "")); b.textContent = "Copié"; setTimeout(() => { b.textContent = "Copier"; }, 1500); } catch { etat("Copie refusée par le navigateur.", true); } };
      bloc.append(el("div", { className: "ligne" }, el("pre", { textContent: c }), b));
    });
    $("o-liste").append(bloc);
  });

  // ---------- démarrage ----------
  dessinerJournal();
  try {
    const o = await ia("/modeles", {}); catalogue = o.modeles;
    // Dernières versions de Claude, demandées au relais (il envoie d'ailleurs toujours chaque requête à la dernière version de la famille)
    try { const r = await (await appel("/claude/modeles", {})).json(); if (r.modeles && r.modeles.length) CLAUDE = r.modeles.map(m => [m.id, m.nom, m.prix[0], m.prix[1]]); } catch { /* liste de secours */ }
    dessinerModeles();
  } catch (e) { etat("Laboratoire indisponible : " + e.message, true); dessinerModeles(); }
  try { await chargerFiches(); } catch { /* l'onglet Recherche le dira */ }

  // ---------- pilotage par adresse et par programme ----------
  const P = new URLSearchParams(location.search);
  function choisirModeles(liste) {
    const voulus = String(liste || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
    cases().forEach(c => {
      const id = c.value.toLowerCase(), nom = c.parentElement.textContent.toLowerCase();
      c.checked = voulus.some(v => v === "tous" ? !c.dataset.claude : v === "claude" ? !!c.dataset.claude : v === "rapides" ? RAPIDES.some(r => id.includes(r)) : id.includes(v) || nom.includes(v)) ;
    });
    estimer();
  }
  window.labo = {
    parametres: PARAMETRES,
    etat: () => dernierEtat,
    resultats: () => RES,
    modeles: () => catalogue.map(m => m.id).concat(CLAUDE.map(c => c[0])),
    onglet,
    async comparer({ q, systeme = "", modeles = "rapides", temp = 0, max = 800, force = false }) { onglet("comparer"); $("c-q").value = q; $("c-systeme").value = systeme; choisirModeles(modeles); return comparer({ ...lire(), q, systeme, temp, max, force }); },
    async voix(texte) { onglet("voix"); $("v-texte").value = texte; return lireVoix(texte); },
    async chercher(q) { onglet("recherche"); $("r-q").value = q; return chercher(q); },
    indexer
  };
  const debut = (location.hash || "").slice(1);
  onglet(P.get("onglet") || (document.getElementById("p-" + debut) ? debut : "comparer"));
  if (P.get("systeme")) $("c-systeme").value = P.get("systeme");
  if (P.get("q")) $("c-q").value = P.get("q");
  if (P.get("temp")) $("c-temp").value = P.get("temp");
  if (P.get("max")) $("c-max").value = P.get("max");
  if (P.get("force") === "1") $("c-force").checked = true;
  if (P.get("modeles")) choisirModeles(P.get("modeles"));
  if (P.get("texte")) $("v-texte").value = P.get("texte");
  if (P.get("r")) $("r-q").value = P.get("r");
  if (P.get("lancer") === "1") {
    const n = P.get("onglet") || "comparer";
    try { if (n === "comparer") await comparer(lire()); else if (n === "voix") await lireVoix($("v-texte").value); else if (n === "recherche") await chercher($("r-q").value); } catch (e) { etat(e.message, true); }
  }
})();
