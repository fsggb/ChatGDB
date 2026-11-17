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
    const base = a.url.pathname.replace(/[^/]*$/, ""), chemin = String(spec.chemin || "").replace(/^\/+/, "");
    // pas de « % » (« %2e%2e » serait normalisé en « .. » après le filtre), pas de « .. », de « ? », de « # », de « : », de « \\ »
    if (chemin) { if (/%|\.\.|[?#:\\]/.test(chemin)) return null; u.pathname = base + chemin; }
    if (!u.pathname.startsWith(base)) return null;
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
  // Le cadre doit rester dans le dossier d'une application autorisée (jamais admin.html, compte.html… du portail), même après un clic ou une redirection
  const inApp = loc => registry().some(a => loc.origin === location.origin && loc.pathname.startsWith(a.url.pathname.replace(/[^/]*$/, "")) && !/%2e/i.test(loc.href));
  const docOf = () => { try { if (!frame || !frame.contentDocument || !frame.contentDocument.body) return null; return inApp(frame.contentWindow.location) ? frame.contentDocument : null; } catch { return null; } };

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
    return "Vue : " + w.innerWidth + " × " + w.innerHeight + " px (x vers la droite, y vers le bas). Page : " + (d.title || "(sans titre)") + " — " + frame.contentWindow.location.pathname + frame.contentWindow.location.search.slice(0, 200) + "\nTexte visible :\n" + (text || "(aucun)") + "\n\nÉléments interactifs visibles :\n" + (out.join("\n") || "(aucun)") + (hasCanvas ? "\n\n(La page contient un canvas : une capture peut l'afficher vide.)" : "");
  }

  let h2cPromise = null;
  function loadH2c() {
    if (window.html2canvas) return Promise.resolve(window.html2canvas);
    return h2cPromise || (h2cPromise = new Promise((res, rej) => {
      const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"; s.integrity = "sha384-ZZ1pncU3bQe8y31yfZdMFdSpttDoPmOZg2wguVK9almUodir1PghgT0eY7Mrty8H"; s.crossOrigin = "anonymous"; s.onload = () => res(window.html2canvas); s.onerror = () => { h2cPromise = null; rej(new Error("bibliothèque de capture indisponible")); }; document.head.append(s);
    }));
  }
  // ---------- Vue réelle de l'écran (applications dessinées en WebGL : une capture logicielle les voit blanches) ----------
  // La personne autorise une fois le partage de cet onglet ; les captures suivantes viennent de la vraie image, recadrée sur l'application.
  let ecran = null, video = null;
  async function voir() {
    if (ecran && ecran.active) return true;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) throw new Error("ce navigateur ne permet pas le partage d’écran");
    ecran = await navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: "browser", frameRate: 5 }, audio: false, preferCurrentTab: true, selfBrowserSurface: "include", surfaceSwitching: "exclude" });
    const piste = ecran.getVideoTracks()[0];
    try { if (window.CropTarget && frame && piste.cropTo) await piste.cropTo(await CropTarget.fromElement(frame)); piste.recadre = !!window.CropTarget; } catch { piste.recadre = false; }
    piste.addEventListener("ended", () => { ecran = null; video = null; window.dispatchEvent(new Event("gdb-vue")); });
    video = document.createElement("video"); video.muted = true; video.playsInline = true; video.srcObject = ecran; await video.play();
    window.dispatchEvent(new Event("gdb-vue"));
    return true;
  }
  const voitEcran = () => !!(ecran && ecran.active && video);
  async function captureEcran() {
    await wait(250);
    const piste = ecran.getVideoTracks()[0], vw = video.videoWidth, vh = video.videoHeight; if (!vw || !vh) throw new Error("image d’écran indisponible");
    let sx = 0, sy = 0, sw = vw, sh = vh;
    if (!piste.recadre && frame) {   // onglet entier : on garde la zone de l'application
      const r = frame.getBoundingClientRect(), k = vw / window.innerWidth;
      sx = Math.max(0, r.left * k); sy = Math.max(0, r.top * k); sw = Math.min(vw - sx, r.width * k); sh = Math.min(vh - sy, r.height * k);
    }
    const w = frame ? frame.clientWidth : sw, h = frame ? frame.clientHeight : sh, scale = Math.min(1, 1000 / Math.max(1, w));
    const cv = document.createElement("canvas"); cv.width = Math.round(w * scale); cv.height = Math.round(h * scale);
    const g = cv.getContext("2d"); g.drawImage(video, sx, sy, sw, sh, 0, 0, cv.width, cv.height);
    reperes(g, cv, w, h, scale);
    return { m: "image/jpeg", d: cv.toDataURL("image/jpeg", 0.62).split(",")[1] };
  }
  function reperes(g, cv, w, h, scale) {
    g.save(); g.strokeStyle = "rgba(232,89,12,.35)"; g.fillStyle = "rgba(232,89,12,.9)"; g.font = "bold " + Math.max(9, 11 * scale) + "px sans-serif"; g.lineWidth = 1;
    for (let x = 100; x < w; x += 100) { g.beginPath(); g.moveTo(x * scale, 0); g.lineTo(x * scale, cv.height); g.stroke(); g.fillText(String(x), x * scale + 2, 11); }
    for (let y = 100; y < h; y += 100) { g.beginPath(); g.moveTo(0, y * scale); g.lineTo(cv.width, y * scale); g.stroke(); g.fillText(String(y), 2, y * scale - 2); }
    g.restore();
  }
  async function capture() {
    if (voitEcran()) { try { return await captureEcran(); } catch { /* on se rabat sur la capture logicielle */ } }
    const d = docOf(), w = d && d.defaultView; if (!d) throw new Error("aucune application ouverte");
    const h2c = await loadH2c();
    const scale = Math.min(1, 1000 / Math.max(1, w.innerWidth));
    const cv = await Promise.race([
      h2c(d.documentElement, { width: w.innerWidth, height: w.innerHeight, windowWidth: w.innerWidth, windowHeight: w.innerHeight, x: w.scrollX, y: w.scrollY, scale, useCORS: true, logging: false, backgroundColor: "#ffffff" }),
      wait(20000).then(() => { throw new Error("la capture a pris trop de temps"); })
    ]);
    const g = cv.getContext("2d");
    // Les canvas (2D ou 3D) que html2canvas laisse vides : recopiés tels quels quand le navigateur le permet
    d.querySelectorAll("canvas").forEach(c => { try { const r = c.getBoundingClientRect(); if (r.width > 20 && r.height > 20) g.drawImage(c, r.left * scale, r.top * scale, r.width * scale, r.height * scale); } catch { /* canvas protégé */ } });
    // Un grand canvas resté uni = application dessinée en WebGL, invisible pour une capture logicielle
    let vide = false;
    d.querySelectorAll("canvas").forEach(c => { const r = c.getBoundingClientRect(); if (r.width * r.height < w.innerWidth * w.innerHeight * 0.25) return; try { const px = g.getImageData(Math.round((r.left + r.width / 2) * scale), Math.round((r.top + r.height / 3) * scale), 40, 40).data; let diff = 0; for (let i = 4; i < px.length; i += 4) diff += Math.abs(px[i] - px[0]) + Math.abs(px[i + 1] - px[1]); if (diff < 50) vide = true; } catch { vide = true; } });
    reperes(g, cv, w.innerWidth, w.innerHeight, scale);
    window.dispatchEvent(new CustomEvent("gdb-vue", { detail: { besoin: vide } }));
    return { m: "image/jpeg", d: cv.toDataURL("image/jpeg", 0.62).split(",")[1], vide };
  }

  // Curseur visible : une flèche dessinée par-dessus le cadre, qui glisse jusqu'au point visé avant chaque action
  let cursor = null;
  function cursorAt(x, y, clic) {
    if (!frame || !frame.isConnected) return Promise.resolve();
    if (!cursor) {
      cursor = document.createElement("div"); cursor.setAttribute("aria-hidden", "true");
      cursor.style.cssText = "position:fixed;z-index:2147483647;pointer-events:none;width:22px;height:22px;left:0;top:0;transition:transform .45s cubic-bezier(.3,.7,.3,1);filter:drop-shadow(0 1px 2px rgba(0,0,0,.45))";
      cursor.innerHTML = '<svg viewBox="0 0 22 22" width="22" height="22"><path d="M3 2l14 9-6.2 1.3L14 19l-2.6 1.2-3.1-6.5L3 18z" fill="#fff" stroke="#111" stroke-width="1.4" stroke-linejoin="round"/></svg><span style="position:absolute;left:-9px;top:-9px;width:18px;height:18px;border-radius:50%;border:2px solid #e8590c;opacity:0;transition:opacity .2s,transform .35s;transform:scale(.4)"></span>';
      document.body.append(cursor);
    }
    const r = frame.getBoundingClientRect();
    cursor.style.display = "block";
    cursor.style.transform = "translate(" + (r.left + x) + "px," + (r.top + y) + "px)";
    return wait(480).then(() => { if (clic) { const o = cursor.lastChild; o.style.opacity = "1"; o.style.transform = "scale(1.4)"; setTimeout(() => { o.style.opacity = "0"; o.style.transform = "scale(.4)"; }, 260); } });
  }
  const hideCursor = () => { if (cursor) cursor.style.display = "none"; };
  // Événements souris complets à des coordonnées : fonctionne aussi sur les canvas (dessin, 3D) des applications inconnues
  function pointer(d, type, x, y, extra) {
    const w = d.defaultView, t = d.elementFromPoint(x, y) || d.body;
    const o = Object.assign({ bubbles: true, cancelable: true, composed: true, view: w, clientX: x, clientY: y, screenX: x, screenY: y, pointerId: 1, pointerType: "mouse", isPrimary: true }, extra || {});
    const P = type.startsWith("pointer") ? w.PointerEvent : type === "wheel" ? w.WheelEvent : w.MouseEvent;
    t.dispatchEvent(new P(type, o)); return t;
  }
  function dispatchClick(e, d) {
    const w = d.defaultView, r = e.getBoundingClientRect(), o = { bubbles: true, cancelable: true, view: w, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 };
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
      if (a === "fermer") { hideCursor(); ctx.unmount(); frame = null; els = []; return { texte: "Application fermée." }; }
      const d = docOf(); if (!d) { if (frame) { try { frame.src = "about:blank"; } catch {} } return { texte: "Aucune application ouverte, ou la page est sortie du dossier de l'application (refusé) : utilise d'abord l'action « ouvrir »." }; }
      const w = d.defaultView;
      if (a === "lire") return { texte: snapshot() };
      if (a === "capture") {
        const text = snapshot();
        try {
          const im = await capture();
          const note = im.vide ? "ATTENTION : cette application est dessinée en WebGL et la capture logicielle la voit vide (ce n'est pas l'application qui est vide). Demande à la personne de cliquer sur « Laisser ChatGDB voir l’application » au-dessus de l'application (partage de l'onglet, une fois) ; en attendant, appuie-toi sur « lire », sur la fiche de l'application et sur des actions par coordonnées.\n\n" : voitEcran() ? "Capture réelle de l'écran (partage autorisé par la personne).\n\n" : "";
          delete im.vide; return { texte: note + "Capture de l'application (zone visible).\n\n" + text, image: im };
        }
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
        const bouton = input.bouton === "droit" ? 2 : 0, double = !!input.double;
        if (input.cible == null) {
          const x = +input.x, y = +input.y; await cursorAt(x, y, true);
          const B = { button: bouton, buttons: bouton === 2 ? 2 : 1 };
          pointer(d, "pointermove", x, y); pointer(d, "mousemove", x, y);
          for (let i = 0; i < (double ? 2 : 1); i++) { pointer(d, "pointerdown", x, y, B); pointer(d, "mousedown", x, y, B); pointer(d, "pointerup", x, y, { button: bouton, buttons: 0 }); pointer(d, "mouseup", x, y, { button: bouton, buttons: 0 }); pointer(d, bouton === 2 ? "contextmenu" : "click", x, y, { button: bouton, detail: i + 1 }); }
          if (double) pointer(d, "dblclick", x, y, { detail: 2 });
          await wait(900);
          return { texte: (double ? "Double-clic" : bouton === 2 ? "Clic droit" : "Clic") + " en (" + x + ", " + y + ") sur « " + label(e) + " ».\n\n" + snapshot() };
        }
        e.scrollIntoView({ block: "center", inline: "center" }); await wait(120);
        { const r = e.getBoundingClientRect(); await cursorAt(r.left + r.width / 2, r.top + r.height / 2, true); }
        dispatchClick(e, d); if (double) e.dispatchEvent(new w.MouseEvent("dblclick", { bubbles: true, cancelable: true, view: w, detail: 2 })); await wait(900);
        return { texte: "Cliqué sur « " + label(e) + " ».\n\n" + snapshot() };
      }
      if (a === "survoler") { const x = +input.x, y = +input.y; if (!isFinite(x) || !isFinite(y)) return { texte: "Indique x et y." }; await cursorAt(x, y); pointer(d, "pointermove", x, y); pointer(d, "mousemove", x, y); pointer(d, "mouseover", x, y); await wait(500); return { texte: "Souris en (" + x + ", " + y + ").\n\n" + snapshot() }; }
      if (a === "glisser") {
        const x1 = +input.x, y1 = +input.y, x2 = +input.x2, y2 = +input.y2;
        if (![x1, y1, x2, y2].every(isFinite)) return { texte: "Indique x, y (départ) et x2, y2 (arrivée)." };
        const t0 = d.elementFromPoint(x1, y1); if (t0 && DANGER.test(label(t0))) return { texte: "Refusé : élément réservé à la personne." };
        await cursorAt(x1, y1, true); pointer(d, "pointerdown", x1, y1, { buttons: 1 }); pointer(d, "mousedown", x1, y1, { buttons: 1 });
        const n = 12; for (let i = 1; i <= n; i++) { const x = x1 + (x2 - x1) * i / n, y = y1 + (y2 - y1) * i / n; pointer(d, "pointermove", x, y, { buttons: 1 }); pointer(d, "mousemove", x, y, { buttons: 1 }); if (cursor) { const r = frame.getBoundingClientRect(); cursor.style.transition = "none"; cursor.style.transform = "translate(" + (r.left + x) + "px," + (r.top + y) + "px)"; } await wait(30); }
        if (cursor) cursor.style.transition = "transform .45s cubic-bezier(.3,.7,.3,1)";
        pointer(d, "pointerup", x2, y2, { buttons: 0 }); pointer(d, "mouseup", x2, y2, { buttons: 0 }); await wait(700);
        return { texte: "Glissé de (" + x1 + ", " + y1 + ") à (" + x2 + ", " + y2 + ").\n\n" + snapshot() };
      }
      if (a === "touche") {
        const k = String(input.touche || "").slice(0, 40); if (!k) return { texte: "Indique la touche, ex. « Escape », « Enter », « Ctrl+Z », « Delete »." };
        const parts = k.split("+"), key = parts.pop(), mod = parts.map(m => m.toLowerCase());
        if (/^(w|q|f4)$/i.test(key) && (mod.includes("ctrl") || mod.includes("alt") || mod.includes("meta"))) return { texte: "Refusé : raccourci de fermeture." };
        const t = d.activeElement && d.activeElement !== d.body ? d.activeElement : (d.querySelector("canvas") || d.body);
        const o = { key: key.length === 1 ? key : key, code: key.length === 1 ? "Key" + key.toUpperCase() : key, bubbles: true, cancelable: true, ctrlKey: mod.includes("ctrl"), shiftKey: mod.includes("shift"), altKey: mod.includes("alt"), metaKey: mod.includes("meta") };
        ["keydown", "keyup"].forEach(ty => t.dispatchEvent(new w.KeyboardEvent(ty, o)));
        await wait(700); return { texte: "Touche « " + k + " » envoyée.\n\n" + snapshot() };
      }
      if (a === "saisir") {
        const e = els[(+input.cible) - 1]; if (!e || !e.isConnected) return { texte: "Élément introuvable : fais d'abord « lire »." };
        if ((e.type || "").toLowerCase() === "password") return { texte: "Refusé : jamais de mot de passe." };
        if (e.tagName === "SELECT" || DANGER.test(label(e))) return { texte: "Refusé : « " + label(e) + " » est réservé à la personne (liste de choix, suppression, envoi, paiement ou déconnexion)." };
        e.focus(); setValue(e, String(input.texte == null ? "" : input.texte).slice(0, 4000));
        if (input.valider) ["keydown", "keypress", "keyup"].forEach(t => e.dispatchEvent(new w.KeyboardEvent(t, { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true })));
        await wait(900);
        return { texte: "Saisi dans « " + label(e) + " ».\n\n" + snapshot() };
      }
      return { texte: "Action inconnue : " + a };
    } catch (e) { return { texte: "Erreur pendant l'action : " + (e && e.message || e) }; }
  }

  window.GDBApps = { names, urlOf, parseSpec, makeFrame, exec, setFrame: f => { frame = f; }, hasFrame: () => !!frame, hideCursor, voir, voitEcran };
})();
