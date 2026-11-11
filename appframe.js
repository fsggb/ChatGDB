// Applications de ScoutHub ouvertes dans un cadre intégré (volet d'artefact) et pilotées par ChatGDB.
// Le serveur (outil « application ») demande une action ; elle est exécutée ICI, dans le navigateur, sur le cadre visible de la personne.
// Sécurité : seules les applications du même site (fsggb.github.io) sont ouvertes, jamais ScoutCloud ni ChatGDB lui-même ;
// les boutons destructeurs ou d'envoi sont refusés, les mots de passe jamais saisis, les liens externes jamais suivis.
(() => {
  "use strict";
  const BASE = new URL("../", location.href);                       // …/ScoutHub/
  const BLOCK = /^(scoutcloud|chatgdb|aide|boutique)/i;
  const DANGER = /supprim|effac|vider|corbeille|envoy|payer|paiement|command|d[ée]connex|r[ée]initialis|quitter|d[ée]sinstall|retirer le compte/i;
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "");
  const registry = () => (window.SCOUTHUB_APPS || []).map(a => {
    let u; try { u = new URL(a.url, BASE); } catch { return null; }
    return u.origin === location.origin && !BLOCK.test(a.name) && u.pathname.indexOf("/ChatGDB/") < 0 ? { name: a.name, url: u } : null;
  }).filter(Boolean);
  const names = () => registry().map(a => a.name);
  // spec = { app, params, chemin } → adresse sûre, ou null
  function urlOf(spec) {
    if (!spec) return null;
    const a = registry().find(x => norm(x.name) === norm(spec.app)); if (!a) return null;
    const u = new URL(a.url.href);
    const chemin = String(spec.chemin || "").replace(/^\/+/, "");
    if (chemin) { if (/\.\.|[?#:\\]/.test(chemin)) return null; u.pathname = u.pathname.replace(/[^/]*$/, "") + chemin; }
    const p = String(spec.params || "").replace(/^\?/, "");
    if (p) { const extra = new URLSearchParams(p); extra.forEach((v, k) => u.searchParams.set(k, v.slice(0, 600))); }
    return u.origin === location.origin ? u : null;
  }
  const parseSpec = text => { try { const o = JSON.parse(text); return o && typeof o === "object" ? o : null; } catch { return null; } };
  const wait = ms => new Promise(r => setTimeout(r, ms));

  let frame = null, els = [];
  const sandbox = "allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads";
  function makeFrame(url, title) {
    const f = document.createElement("iframe");
    f.title = title || "Application"; f.setAttribute("sandbox", sandbox); f.allow = "clipboard-write; fullscreen"; f.referrerPolicy = "no-referrer"; f.src = url;
    return f;
  }
  const loaded = (f, ms = 15000) => new Promise(res => { let done = false; const end = () => { if (!done) { done = true; res(); } }; f.addEventListener("load", end, { once: true }); setTimeout(end, ms); });
  const docOf = () => { try { return frame && frame.contentDocument && frame.contentDocument.body ? frame.contentDocument : null; } catch { return null; } };

  function label(e) {
    const t = e.getAttribute("aria-label") || e.getAttribute("title") || (e.innerText || "").trim() || e.getAttribute("placeholder") || e.getAttribute("alt") || e.value || e.id || "";
    return String(t).replace(/\s+/g, " ").trim().slice(0, 70);
  }
  function snapshot() {
    const d = docOf(), w = d && d.defaultView; if (!d) return "(aucune application ouverte, ou page inaccessible)";
    els = [];
    const out = [];
    d.querySelectorAll('a[href],button,input,select,textarea,summary,[role=button],[role=tab],[role=menuitem],[role=switch],[contenteditable=""],[contenteditable="true"],[onclick]').forEach(e => {
      if (els.length >= 70) return;
      const r = e.getBoundingClientRect(), cs = w.getComputedStyle(e);
      if (r.width < 4 || r.height < 4 || cs.visibility === "hidden" || cs.display === "none" || r.bottom < 0 || r.top > w.innerHeight || r.right < 0 || r.left > w.innerWidth) return;
      if (e.disabled || e.closest("[hidden],[inert]")) return;
      els.push(e);
      const tag = e.tagName.toLowerCase(), type = (e.getAttribute("type") || "").toLowerCase();
      let kind = tag === "a" ? "lien" : tag === "select" ? "liste" : tag === "textarea" ? "zone de texte" : tag === "input" ? (type === "checkbox" ? "case" : type === "radio" ? "choix" : type === "password" ? "mot de passe (jamais saisi)" : "champ") : "bouton";
      let line = "[" + els.length + "] " + kind + " « " + label(e) + " »";
      if (tag === "input" || tag === "textarea" || tag === "select") { if (type === "checkbox" || type === "radio") line += e.checked ? " (cochée)" : " (non cochée)"; else if (type !== "password" && e.value) line += " = " + String(e.value).slice(0, 60); }
      if (e.getAttribute("aria-pressed") === "true" || e.classList.contains("on") || e.getAttribute("aria-selected") === "true") line += " (actif)";
      out.push(line);
    });
    const text = (d.body.innerText || "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, 4500);
    const hasCanvas = !!d.querySelector("canvas");
    return "Page : " + (d.title || "(sans titre)") + " — " + frame.contentWindow.location.pathname + frame.contentWindow.location.search.slice(0, 200) + "\nTexte visible :\n" + (text || "(aucun)") + "\n\nÉléments interactifs visibles :\n" + (out.join("\n") || "(aucun)") + (hasCanvas ? "\n\n(La page contient un canvas : une capture peut l'afficher vide.)" : "");
  }

  let h2cPromise = null;
  function loadH2c() {
    if (window.html2canvas) return Promise.resolve(window.html2canvas);
    return h2cPromise || (h2cPromise = new Promise((res, rej) => {
      const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"; s.onload = () => res(window.html2canvas); s.onerror = () => { h2cPromise = null; rej(new Error("bibliothèque de capture indisponible")); }; document.head.append(s);
    }));
  }
  async function capture() {
    const d = docOf(), w = d && d.defaultView; if (!d) throw new Error("aucune application ouverte");
    const h2c = await loadH2c();
    const scale = Math.min(1, 1000 / Math.max(1, w.innerWidth));
    const cv = await Promise.race([
      h2c(d.documentElement, { width: w.innerWidth, height: w.innerHeight, windowWidth: w.innerWidth, windowHeight: w.innerHeight, x: w.scrollX, y: w.scrollY, scale, useCORS: true, logging: false, backgroundColor: "#ffffff" }),
      wait(20000).then(() => { throw new Error("la capture a pris trop de temps"); })
    ]);
    return { m: "image/jpeg", d: cv.toDataURL("image/jpeg", 0.62).split(",")[1] };
  }

  function dispatchClick(e, d) {
    const w = d.defaultView, r = e.getBoundingClientRect(), o = { bubbles: true, cancelable: true, view: w, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 };
    e.scrollIntoView({ block: "center", inline: "center" });
    ["pointerdown", "mousedown", "pointerup", "mouseup"].forEach(t => e.dispatchEvent(new (t.startsWith("pointer") ? w.PointerEvent : w.MouseEvent)(t, o)));
    e.click();
  }
  function setValue(e, v) {
    const w = e.ownerDocument.defaultView, proto = e.tagName === "TEXTAREA" ? w.HTMLTextAreaElement.prototype : e.tagName === "SELECT" ? w.HTMLSelectElement.prototype : w.HTMLInputElement.prototype;
    const set = Object.getOwnPropertyDescriptor(proto, "value").set; set.call(e, v);
    e.dispatchEvent(new w.Event("input", { bubbles: true })); e.dispatchEvent(new w.Event("change", { bubbles: true }));
  }

  // Exécute une demande de l'IA ; renvoie { texte, image? }. ctx.mount(url, titre) affiche le cadre dans le volet et le renvoie.
  async function exec(input, ctx) {
    const a = String((input && input.action) || "");
    try {
      if (a === "ouvrir") {
        const u = urlOf({ app: input.app, params: input.params, chemin: input.chemin });
        if (!u) return { texte: "Refusé : application inconnue ou non autorisée « " + String(input.app || "") + " ». Applications disponibles : " + names().join(", ") + "." };
        frame = ctx.mount(u.href, String(input.app)); await loaded(frame); await wait(1500);
        return { texte: "Application ouverte : " + u.pathname + u.search + "\n\n" + snapshot() };
      }
      if (a === "fermer") { ctx.unmount(); frame = null; els = []; return { texte: "Application fermée." }; }
      const d = docOf(); if (!d) return { texte: "Aucune application ouverte : utilise d'abord l'action « ouvrir »." };
      const w = d.defaultView;
      if (a === "lire") return { texte: snapshot() };
      if (a === "capture") {
        const text = snapshot();
        try { return { texte: "Capture de l'application (zone visible).\n\n" + text, image: await capture() }; }
        catch (e) { return { texte: "Capture impossible (" + e.message + "). État en texte :\n\n" + text }; }
      }
      if (a === "defiler") { w.scrollBy({ top: Math.max(-3000, Math.min(3000, +input.dy || 400)), behavior: "instant" }); await wait(500); return { texte: snapshot() }; }
      if (a === "cliquer") {
        let e = null;
        if (input.cible != null) { e = els[(+input.cible) - 1]; if (!e || !e.isConnected) return { texte: "Élément " + input.cible + " introuvable : fais d'abord « lire » pour obtenir la liste à jour." }; }
        else if (isFinite(+input.x) && isFinite(+input.y)) { e = d.elementFromPoint(+input.x, +input.y); if (!e) return { texte: "Rien à cet endroit." }; }
        else return { texte: "Indique cible (numéro) ou x et y." };
        const lab = label(e) + " " + (e.closest("button,a,[role=button]") ? label(e.closest("button,a,[role=button]")) : "");
        if (DANGER.test(lab)) return { texte: "Refusé : « " + label(e) + " » est une action réservée à la personne (suppression, envoi, paiement ou déconnexion)." };
        const link = e.closest("a[href]"); if (link) { let t; try { t = new URL(link.getAttribute("href"), w.location.href); } catch { t = null; } if (!t || t.origin !== location.origin || /ScoutCloud|ChatGDB/i.test(t.pathname) || link.target === "_blank") return { texte: "Refusé : ce lien sort de l'application." }; }
        if (e.tagName === "INPUT" && (e.type || "").toLowerCase() === "password") return { texte: "Refusé : champ de mot de passe." };
        dispatchClick(e, d); await wait(900);
        return { texte: "Cliqué sur « " + label(e) + " ».\n\n" + snapshot() };
      }
      if (a === "saisir") {
        const e = els[(+input.cible) - 1]; if (!e || !e.isConnected) return { texte: "Élément introuvable : fais d'abord « lire »." };
        if ((e.type || "").toLowerCase() === "password") return { texte: "Refusé : jamais de mot de passe." };
        e.focus(); setValue(e, String(input.texte == null ? "" : input.texte).slice(0, 4000));
        if (input.valider) ["keydown", "keypress", "keyup"].forEach(t => e.dispatchEvent(new w.KeyboardEvent(t, { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true })));
        await wait(900);
        return { texte: "Saisi dans « " + label(e) + " ».\n\n" + snapshot() };
      }
      return { texte: "Action inconnue : " + a };
    } catch (e) { return { texte: "Erreur pendant l'action : " + (e && e.message || e) }; }
  }

  window.GDBApps = { names, urlOf, parseSpec, makeFrame, exec, setFrame: f => { frame = f; }, hasFrame: () => !!frame };
})();
