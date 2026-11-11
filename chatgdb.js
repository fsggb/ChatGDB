// ChatGDB : assistant IA de la fédération, en pleine page.
// Le serveur (backend/Code.gs, action « chat ») appelle Claude avec la recherche web native ; la clé reste côté serveur.
// Tant que le serveur ne l'ouvre pas pour ce compte, l'interface reste complète mais l'envoi est refusé poliment.
(async () => {
  "use strict";
  const { $ } = Hub;
  const CFG = Object.assign({ live: false, windowHours: 5, windowCredits: 30, weekCredits: 60, earn: { minutes: 5, credits: 1, weekCap: 40 } }, window.SCOUTHUB_CHATGDB || {});
  const store = {
    get: (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  // ---------- utilisateur ----------
  const user = Hub.cachedUser() || (Hub.token ? await Hub.requireUser() : null);
  if (!user) { $("guest").hidden = false; return; }
  Hub.call("me").then(o => { Hub.user = o.user; Hub.cacheUser(o.user); }).catch(() => Hub.toLogin());
  const app = $("app"); app.hidden = false;
  const first = (user.name || user.email.split("@")[0]).split(/[ ._-]+/)[0];
  const pretty = s => s.charAt(0).toUpperCase() + s.slice(1);
  $("me-name").textContent = user.name || pretty(user.email.split("@")[0].replace(/[._-]+/g, " "));
  $("me-role").textContent = Hub.ROLE_LABELS[user.role] || "Membre";
  $("me-avatar").textContent = first.charAt(0).toUpperCase();

  // ---------- utilitaires ----------
  const esc = t => String(t == null ? "" : t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ic = (n, cls = "") => `<svg class="ic ${cls}"><use href="#i-${n}"/></svg>`;
  const el = (tag, props = {}, ...kids) => { const n = Object.assign(document.createElement(tag), props); n.append(...kids); return n; };
  const host = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };
  let toastTimer = 0;
  const toast = t => { const n = $("toast"); n.textContent = t; n.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => n.hidden = true, 2600); };
  const copy = async t => { try { await navigator.clipboard.writeText(t); } catch { const a = el("textarea", { value: t }); document.body.append(a); a.select(); try { document.execCommand("copy"); } catch {} a.remove(); } toast("Copié dans le presse-papiers."); };
  const download = (name, text, mime) => { const a = el("a", { href: URL.createObjectURL(new Blob([text], { type: mime + ";charset=utf-8" })), download: name }); document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 3000); };
  const safeName = s => (String(s).replace(/[^\wÀ-ſ .-]+/g, "").trim() || "fichier").slice(0, 60);

  // ---------- logo ChatGDB (celui de la boutique) ----------
  const LOGO = { uri: "assets/ChatGDB.png" };

  // ---------- Markdown sûr : tout est échappé d'abord, seuls quelques motifs sont rendus ----------
  let curSources = [];
  const inline = t => {
    let h = esc(t);
    h = h.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>").replace(/~~([^~]+)~~/g, "<del>$1</del>");
    h = h.replace(/!\[([^\]]*)\]\((https:\/\/[^\s)]+)\)/g, '<img class="mdimg" src="$2" alt="$1" loading="lazy" referrerpolicy="no-referrer">');
    h = h.replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    h = h.replace(/<a href="(https:\/\/fsggb\.github\.io\/[^"]*)" target="_blank" rel="noopener noreferrer">/g, '<a class="applink" href="$1" target="_blank" rel="noopener noreferrer"><svg class="ic"><use href="#i-external"/></svg>');
    if (curSources.length) h = h.replace(/\[(\d{1,2})\](?!\()/g, (m, n) => +n >= 1 && +n <= curSources.length ? `<a class="cite" data-n="${n}" href="#" title="${esc(curSources[n - 1].title)}">${n}</a>` : m);
    return h;
  };
  function md(src) {
    const lines = String(src || "").replace(/\r/g, "").split("\n"); let out = "", i = 0;
    const cells = l => l.trim().replace(/^\||\|$/g, "").split("|").map(c => c.trim());
    while (i < lines.length) {
      const l = lines[i]; let m;
      if ((m = /^```\s*([\w+-]*)/.exec(l))) { const code = []; i++; while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]); i++; out += `<div class="pre"><div class="pre-h"><span>${esc(m[1] || "code")}</span><button type="button" data-copy>${ic("copy", "sm")} Copier</button></div><pre><code>${esc(code.join("\n"))}</code></pre></div>`; continue; }
      if (/^\s*\|.*\|\s*$/.test(l) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
        const head = cells(l); i += 2; const rows = [];
        while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) rows.push(cells(lines[i++]));
        out += "<table><thead><tr>" + head.map(h => `<th>${inline(h)}</th>`).join("") + "</tr></thead><tbody>" + rows.map(r => "<tr>" + r.map(c => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") + "</tbody></table>"; continue;
      }
      if ((m = /^(#{1,6})\s+(.*)$/.exec(l))) { const n = Math.min(5, Math.max(3, m[1].length + 2)); out += `<h${n}>${inline(m[2])}</h${n}>`; i++; continue; }
      if (/^\s*(---+|\*\*\*+)\s*$/.test(l)) { out += "<hr>"; i++; continue; }
      if (/^>\s?/.test(l)) { const q = []; while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, "")); out += `<blockquote>${md(q.join("\n"))}</blockquote>`; continue; }
      if (/^\s*([-*]|\d+[.)])\s+/.test(l)) {
        const ordered = /^\s*\d+[.)]/.test(l), items = [];
        while (i < lines.length && /^\s*([-*]|\d+[.)])\s+/.test(lines[i])) {
          const t = lines[i++].replace(/^\s*([-*]|\d+[.)])\s+/, ""), task = /^\[( |x|X)\]\s+(.*)$/.exec(t);
          items.push(task ? `<li style="list-style:none;margin-left:-1.2em">${task[1] === " " ? "☐" : "☑"} ${inline(task[2])}</li>` : `<li>${inline(t)}</li>`);
        }
        out += `<${ordered ? "ol" : "ul"}>${items.join("")}</${ordered ? "ol" : "ul"}>`; continue;
      }
      if (!l.trim()) { i++; continue; }
      const p = []; while (i < lines.length && lines[i].trim() && !/^(```|#{1,6}\s|>\s?|\s*([-*]|\d+[.)])\s+|\s*\|)/.test(lines[i])) p.push(lines[i++]);
      out += `<p>${inline(p.join("\n")).replace(/\n/g, "<br>")}</p>`;
    }
    return out;
  }

  // ---------- artefacts : <artifact id="" type="" title="">…</artifact> ----------
  const GA = window.GDBApps || { names: () => [] };
  const KINDS = {
    markdown: { ico: "file", label: "Document", ext: "md", mime: "text/markdown" },
    html: { ico: "globe", label: "Page web interactive", ext: "html", mime: "text/html" },
    svg: { ico: "image", label: "Image vectorielle", ext: "svg", mime: "image/svg+xml" },
    csv: { ico: "table", label: "Tableau", ext: "csv", mime: "text/csv" },
    code: { ico: "code", label: "Code", ext: "txt", mime: "text/plain" },
    app: { ico: "layers", label: "Application ScoutHub", ext: "json", mime: "application/json" }
  };
  function parse(text) {
    const segs = []; let last = 0, n = 0; const re = /<artifact\b([^>]*)>([\s\S]*?)(?:<\/artifact>|$)/g; let m;
    while ((m = re.exec(text || ""))) {
      if (m.index > last) segs.push({ t: "text", v: text.slice(last, m.index) });
      const at = {}; m[1].replace(/(\w+)="([^"]*)"/g, (_, k, v) => at[k] = v);
      const type = KINDS[at.type] ? at.type : "code";
      segs.push({ t: "art", id: at.id || "a" + (++n), type, title: at.title || KINDS[type].label, lang: at.lang || "", content: m[2].replace(/^\n/, "").replace(/\n$/, "") });
      last = re.lastIndex; if (m[0].length === 0) break;
    }
    if (last < (text || "").length) segs.push({ t: "text", v: text.slice(last) });
    return segs;
  }
  const versionsOf = (conv, id) => { const v = []; conv.messages.forEach(m => { if (m.role !== "user") parse(m.text).forEach(s => { if (s.t === "art" && s.id === id) { s.msg = m; v.push(s); } }); }); return v; };

  // ---------- conversation d'exemple (non stockée, lecture seule) ----------
  const EXAMPLE = { id: "exemple", title: "Exemple : préparer un week-end de troupe", example: true, updated: Infinity, messages: [
    { role: "user", text: "Prépare-moi une check-list de matériel pour un week-end de troupe, et un petit planning que je puisse cocher." },
    { role: "assistant", text: `Voici deux documents prêts à adapter. La check-list est organisée par thème ; le planning est interactif : vous pouvez cocher les créneaux réalisés.

<artifact id="checklist" type="markdown" title="Check-list de matériel : week-end de troupe">
# Check-list de matériel : week-end de troupe

## Couchage
- [ ] Sac de couchage adapté à la saison
- [ ] Tapis de sol
- [ ] Oreiller ou vêtement roulé

## Cuisine d'équipe
- [ ] Marmites et réchauds
- [ ] Bidons d'eau et pastilles de purification
- [ ] Produits de vaisselle et éponges

## Sécurité
- [ ] Trousse de premiers secours complète
- [ ] Fiches sanitaires de chaque jeune
- [ ] Téléphone chargé et numéros d'urgence

> Pensez à vérifier la météo la veille du départ.
</artifact>

<artifact id="planning" type="html" title="Planning du week-end">
<!doctype html><html lang="fr"><meta charset="utf-8"><style>
body{font-family:Georgia,serif;margin:0;padding:24px;color:#0a0c25;background:#fff}h1{font-size:22px;color:#000761;margin:0 0 4px}p{color:#6a6c79;margin:0 0 16px}
table{border-collapse:collapse;width:100%}th,td{border:1px solid #e7e4dc;padding:9px 12px;text-align:left}th{background:#faf6ea;color:#ab8b4e;font-size:12px;letter-spacing:.06em;text-transform:uppercase}
tr.done td{color:#9a9ca8;text-decoration:line-through}input{width:18px;height:18px;accent-color:#000761}#n{margin-top:14px;font-weight:600;color:#000761}</style>
<h1>Planning du week-end</h1><p>Cochez les créneaux réalisés.</p>
<table><thead><tr><th></th><th>Horaire</th><th>Activité</th></tr></thead><tbody>
<tr><td><input type="checkbox"></td><td>Samedi 9 h</td><td>Montage du camp</td></tr>
<tr><td><input type="checkbox"></td><td>Samedi 14 h</td><td>Grand jeu en forêt</td></tr>
<tr><td><input type="checkbox"></td><td>Samedi 20 h</td><td>Veillée</td></tr>
<tr><td><input type="checkbox"></td><td>Dimanche 10 h</td><td>Messe ou temps spirituel</td></tr>
<tr><td><input type="checkbox"></td><td>Dimanche 15 h</td><td>Rangement et départ</td></tr></tbody></table>
<div id="n">0 / 5 créneaux réalisés</div>
<script>var c=document.querySelectorAll("input");c.forEach(function(i){i.onchange=function(){i.closest("tr").className=i.checked?"done":"";document.getElementById("n").textContent=document.querySelectorAll("input:checked").length+" / 5 créneaux réalisés"}})</script></html>
</artifact>

Dites-moi si vous voulez ajouter une colonne ou changer les horaires.` },
    { role: "user", text: "Ajoute une colonne « Responsable » au planning." },
    { role: "assistant", text: `C'est fait : j'ai ajouté la colonne. Elle est modifiable directement dans la page, et la version précédente reste consultable dans l'artefact.

<artifact id="planning" type="html" title="Planning du week-end (avec responsables)">
<!doctype html><html lang="fr"><meta charset="utf-8"><style>
body{font-family:Georgia,serif;margin:0;padding:24px;color:#0a0c25;background:#fff}h1{font-size:22px;color:#000761;margin:0 0 4px}p{color:#6a6c79;margin:0 0 16px}
table{border-collapse:collapse;width:100%}th,td{border:1px solid #e7e4dc;padding:9px 12px;text-align:left}th{background:#faf6ea;color:#ab8b4e;font-size:12px;letter-spacing:.06em;text-transform:uppercase}
td[contenteditable]{background:#fffdf4}input{width:18px;height:18px;accent-color:#000761}</style>
<h1>Planning du week-end</h1><p>Cliquez dans la colonne « Responsable » pour la remplir.</p>
<table><thead><tr><th></th><th>Horaire</th><th>Activité</th><th>Responsable</th></tr></thead><tbody>
<tr><td><input type="checkbox"></td><td>Samedi 9 h</td><td>Montage du camp</td><td contenteditable></td></tr>
<tr><td><input type="checkbox"></td><td>Samedi 14 h</td><td>Grand jeu en forêt</td><td contenteditable></td></tr>
<tr><td><input type="checkbox"></td><td>Samedi 20 h</td><td>Veillée</td><td contenteditable></td></tr>
<tr><td><input type="checkbox"></td><td>Dimanche 10 h</td><td>Messe ou temps spirituel</td><td contenteditable></td></tr>
<tr><td><input type="checkbox"></td><td>Dimanche 15 h</td><td>Rangement et départ</td><td contenteditable></td></tr></tbody></table></html>
</artifact>` }
  ] };

  // ---------- état, préférences, conversations ----------
  const PREFS_KEY = "scouthub.chatgdb.prefs";
  const prefs = Object.assign({ custom: "", web: true, style: "concise", modele: "claude-haiku-5-5", effort: "low", profondeur: "standard" }, store.get(PREFS_KEY, {}));
  const KEY = "scouthub.chatgdb.v3:" + user.email;
  let convs = store.get(KEY, []).filter(c => c && Array.isArray(c.messages));
  convs.forEach(c => c.messages.forEach((m, i) => { if (!m.id) m.id = "m" + (c.id || "x") + "-" + i; }));
  let current = null, openArtId = null, openArtVer = 0, tab = "prev", busy = false, live = !!CFG.live, abort = null, pending = [], webOn = prefs.web;
  let isAdmin = false, biblioApi = "", voiceServer = false, creditsInfo = null, view = "chat", liveSteps = [], baseSteps = [], pollTimer = 0, rid = "", closedMsg = "";
  const persist = () => store.set(KEY, convs.slice(0, 100));
  const uid = () => "m" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  // ---------- fichiers joints conservés (IndexedDB) : l'IA revoit les vraies images à chaque tour ----------
  const mem = new Map();
  const idb = (() => {
    let db = null;
    const open = () => db || (db = new Promise((ok, ko) => { try { const r = indexedDB.open("chatgdb:" + user.email, 1); r.onupgradeneeded = () => r.result.createObjectStore("f", { keyPath: "k" }); r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); } catch (e) { ko(e); } }));
    const run = (mode, fn) => open().then(d => new Promise((ok, ko) => { const t = d.transaction("f", mode), r = fn(t.objectStore("f")); t.oncomplete = () => ok(r && r.result); t.onerror = () => ko(t.error); }));
    return {
      put: rec => { mem.set(rec.k, rec); return run("readwrite", s => s.put(rec)).catch(() => {}); },
      get: k => mem.has(k) ? Promise.resolve(mem.get(k)) : run("readonly", s => s.get(k)).catch(() => undefined),
      delConv: conv => { [...mem.keys()].forEach(k => k.startsWith(conv + "|") && mem.delete(k)); return run("readwrite", s => s.delete(IDBKeyRange.bound(conv + "|", conv + "|￿"))).catch(() => {}); },
      clear: () => { mem.clear(); return run("readwrite", s => s.clear()).catch(() => {}); }
    };
  })();
  const fkey = (conv, msg, j) => conv + "|" + msg + "|" + j;

  // ---------- thème, panneau ----------
  const setTheme = t => { app.dataset.theme = t; prefs.theme = t; store.set("scouthub.chatgdb.theme", t); $("theme").innerHTML = ic(t === "dark" ? "sun" : "moon"); };
  setTheme(store.get("scouthub.chatgdb.theme", "light"));
  $("theme").onclick = () => { setTheme(app.dataset.theme === "dark" ? "light" : "dark"); store.set(PREFS_KEY, prefs); };
  const mobile = () => matchMedia("(max-width:900px)").matches;
  app.dataset.side = mobile() ? "closed" : "open";
  const setSide = o => { app.dataset.side = o ? "open" : "closed"; $("scrim").hidden = !(o && mobile()); };
  matchMedia("(max-width:900px)").addEventListener("change", e => setSide(!e.matches));
  $("side-toggle").onclick = () => setSide(app.dataset.side !== "open"); $("scrim").onclick = () => setSide(false);
  $("nav-search").querySelector("kbd").textContent = "Ctrl K"; $("new").querySelector("kbd").textContent = "Ctrl Maj O";

  // ---------- vues : conversation, artefacts, toutes les conversations ----------
  function setView(v) {
    view = v; app.dataset.view = v;
    ["chat", "artifacts", "chats"].forEach(k => { $("view-" + k).hidden = k !== v; });
    $("nav-artifacts").classList.toggle("on", v === "artifacts"); $("nav-chats").classList.toggle("on", v === "chats");
    if (v !== "chat") closeArt();
    if (v === "artifacts") drawArtifacts(); if (v === "chats") drawChats();
    if (mobile()) setSide(false);
  }

  // ---------- crédits et consommation ----------
  const USD = n => (n || 0).toLocaleString("fr-FR", { minimumFractionDigits: 4, maximumFractionDigits: 4 }) + " $";
  const NUM = n => (n || 0).toLocaleString("fr-FR");
  function credits(c) {
    creditsInfo = c || creditsInfo;
    const w = c ? c.fenetre : { max: CFG.windowCredits, utilise: 0, reste: CFG.windowCredits, renouvellement: "" };
    const k = c ? c.semaine : { max: CFG.weekCredits, utilise: 0, reste: CFG.weekCredits, renouvellement: "", bonus: 0 };
    const inf = !!(c && c.illimite);
    const fill = (bar, txt, o) => { const pct = inf ? 100 : (o.max ? Math.round(o.reste / o.max * 100) : 0); $(bar).style.width = pct + "%"; $(bar).classList.toggle("low", !inf && pct <= 15); $(txt).textContent = inf ? "Illimité" : o.reste + " / " + o.max; };
    fill("cm-bar", "cm-txt", w); fill("d-win", "d-win-txt", w); fill("d-week", "d-week-txt", k);
    $("d-hours").textContent = CFG.windowHours;
    $("d-win-reset").textContent = inf ? "Compte administrateur : aucune limite." : "Se renouvelle " + (w.renouvellement || `${CFG.windowHours} h après votre première question`);
    $("d-week-reset").textContent = inf ? "" : "Se renouvelle " + (k.renouvellement || "chaque semaine") + (k.bonus ? " · dont " + k.bonus + " crédit(s) gagnés" : "");
    $("d-earn").textContent = `Utiliser les applications de ScoutHub rapporte des crédits : ${CFG.earn.credits} crédit toutes les ${CFG.earn.minutes} minutes d’activité, jusqu’à ${CFG.earn.weekCap} par semaine.`;
    const u = c && c.usage, box = $("u-me"); box.textContent = "";
    if (u) {
      [["Cette semaine", USD(u.semaine.dollars)], ["Questions (semaine)", NUM(u.semaine.appels)], ["Jetons lus", NUM(u.semaine.entree)], ["Jetons écrits", NUM(u.semaine.sortie)], ["Recherches web", NUM(u.semaine.recherches)], ["Total depuis le début", USD(u.total.dollars)]].forEach(([a, b]) => box.append(el("div", { className: "stat", innerHTML: "<b>" + esc(b) + "</b><span>" + esc(a) + "</span>" })));
      $("u-cap").textContent = inf ? "Votre usage est illimité ; il est compté ci-dessus comme celui des autres." : "Plafond : " + USD(c.plafondDollars) + " par semaine et par personne au grand maximum (crédits de base et crédits gagnés compris). Les montants sont les coûts réels facturés par l’API, estimés d’après les tarifs publics.";
    }
    refreshModelUi();
  }
  document.querySelectorAll("dialog [data-close]").forEach(b => b.onclick = () => b.closest("dialog").close());

  // ---------- coût estimé d'une question selon les réglages (même calcul que le serveur) ----------
  const PRICE = { "claude-haiku-5-5": [0.10, 0.50], "claude-sonnet-5-5": [2, 10] };
  const MODELS = [["claude-haiku-5-5", "Haiku 5.5", "Rapide et très économe"], ["claude-sonnet-5-5", "Sonnet 5.5", "Plus fin, environ 20 fois plus de crédits"]];
  const EFFORTS = [["low", "Faible"], ["medium", "Moyenne"], ["high", "Élevée"]];
  function estCredits(p = prefs, web = webOn) {
    const pr = PRICE[p.modele] || PRICE["claude-haiku-5-5"], approf = p.profondeur === "approfondie", out = { low: 700, medium: 1500, high: 3000 }[p.effort] * (approf ? 2 : 1);
    const rech = web ? (approf ? 8 : 2) : 0, pages = web ? (approf ? 4 : 1) : 0, inp = 1500 + 400 + rech * 3000 + pages * 9000;
    return Math.max(1, Math.ceil(((inp * pr[0] + out * pr[1]) / 1e6 + rech * 0.01) / 0.001 - 1e-9));
  }
  const costText = () => { const n = estCredits(); return `Une question coûte environ ${n} crédit${n > 1 ? "s" : ""} (≈ ${USD(n * 0.001)}) avec ces réglages${webOn ? ", recherche web comprise" : ""}.`; };

  // ---------- sélecteur de modèle dans la zone de saisie (comme dans Claude) ----------
  const pop = $("model-pop");
  function refreshModelUi() {
    const m = MODELS.find(x => x[0] === prefs.modele) || MODELS[0], e = EFFORTS.find(x => x[0] === prefs.effort) || EFFORTS[0];
    $("model-label").textContent = m[1] + " · " + e[1].toLowerCase();
    $("web").setAttribute("aria-pressed", String(webOn));
    const mk = (box, items, cur, onPick, row) => { box.textContent = ""; items.forEach(([v, l, d]) => { const b = el("button", { type: "button", className: "opt", role: "radio", innerHTML: "<b>" + esc(l) + "</b>" + (d ? "<small>" + esc(d) + "</small>" : "") }); b.setAttribute("aria-checked", String(v === cur)); b.onclick = () => { onPick(v); refreshModelUi(); }; box.append(b); }); };
    mk($("pop-model"), MODELS, prefs.modele, v => { prefs.modele = v; store.set(PREFS_KEY, prefs); });
    mk($("pop-effort"), EFFORTS, prefs.effort, v => { prefs.effort = v; store.set(PREFS_KEY, prefs); });
    mk($("pop-depth"), [["standard", "Standard"], ["approfondie", "Approfondie"]], prefs.profondeur, v => { prefs.profondeur = v; store.set(PREFS_KEY, prefs); });
    mk($("pop-style"), [["concise", "Courtes"], ["detail", "Détaillées"]], prefs.style, v => { prefs.style = v; store.set(PREFS_KEY, prefs); });
    $("pop-cost").textContent = costText(); $("set-cost").textContent = costText();
  }
  function togglePop() { if (!pop.hidden) { pop.hidden = true; $("model-chip").setAttribute("aria-expanded", "false"); return; } refreshModelUi(); pop.hidden = false; const r = $("model-chip").getBoundingClientRect(); pop.style.left = Math.max(8, Math.min(innerWidth - pop.offsetWidth - 8, r.right - pop.offsetWidth)) + "px"; pop.style.top = Math.max(8, r.top - pop.offsetHeight - 8) + "px"; $("model-chip").setAttribute("aria-expanded", "true"); }
  $("model-chip").onclick = ev => { ev.stopPropagation(); togglePop(); };
  $("pop-settings").onclick = () => { pop.hidden = true; openSettings("modele"); };
  document.addEventListener("click", e => { if (!pop.hidden && !pop.contains(e.target)) { pop.hidden = true; $("model-chip").setAttribute("aria-expanded", "false"); } closeCtx(); if (!menu.hidden && !menu.contains(e.target) && !$("acct").contains(e.target)) menu.hidden = true; });

  // ---------- compte, paramètres ----------
  const menu = $("menu");
  $("menu-name").textContent = $("me-name").textContent; $("menu-mail").textContent = user.email;
  $("acct").onclick = ev => { ev.stopPropagation(); menu.hidden = !menu.hidden; };
  $("m-out").onclick = () => Hub.logout();
  $("m-settings").onclick = () => { menu.hidden = true; openSettings("general"); };
  $("m-usage").onclick = () => { menu.hidden = true; openSettings("usage"); };
  $("credits-open").onclick = () => openSettings("usage");
  let setTab = "general";
  function openSettings(t) {
    $("set-theme").value = app.dataset.theme; $("set-custom").value = prefs.custom; $("set-web").checked = prefs.web; $("set-style").value = prefs.style; $("set-model").value = prefs.modele; $("set-effort").value = prefs.effort; $("set-depth").value = prefs.profondeur;
    $("set-nav-mem").hidden = !isAdmin; showTab(t || setTab); if (!$("dlg-settings").open) $("dlg-settings").showModal();
    if (t === "usage") loadUsage();
  }
  function showTab(t) {
    setTab = t; document.querySelectorAll("#set-nav button").forEach(b => b.classList.toggle("on", b.dataset.t === t));
    document.querySelectorAll(".set-body section").forEach(s => s.hidden = s.dataset.p !== t);
    if (t === "usage") loadUsage(); if (t === "memoire") { memForm(null); memLoad(); }
  }
  $("set-nav").addEventListener("click", e => { const b = e.target.closest("button[data-t]"); if (b) showTab(b.dataset.t); });
  $("set-save").onclick = () => {
    prefs.custom = $("set-custom").value.trim().slice(0, 600); prefs.web = $("set-web").checked; prefs.style = $("set-style").value; prefs.modele = $("set-model").value; prefs.effort = $("set-effort").value; prefs.profondeur = $("set-depth").value;
    webOn = prefs.web; setTheme($("set-theme").value); store.set(PREFS_KEY, prefs); refreshModelUi(); $("dlg-settings").close(); toast("Paramètres enregistrés.");
  };
  ["set-model", "set-effort", "set-depth", "set-web", "set-style"].forEach(id => $(id).addEventListener("change", () => { const p = { ...prefs, modele: $("set-model").value, effort: $("set-effort").value, profondeur: $("set-depth").value }; $("set-cost").textContent = costText.call(null).replace(/\d+ crédit/, estCredits(p, $("set-web").checked) + " crédit"); }));
  $("set-clear").onclick = async () => { if (confirm("Supprimer toutes vos conversations ChatGDB et leurs pièces jointes sur cet appareil ?")) { convs = []; persist(); await idb.clear(); $("dlg-settings").close(); show(null); } };
  async function loadUsage() {
    Hub.call("credits").then(o => { if (o.credits) credits(o.credits); }).catch(() => {});
    $("u-admin").hidden = !isAdmin; if (!isAdmin) return;
    const st = $("conso-status"); st.textContent = "Chargement…"; st.classList.remove("error");
    try {
      const { stats: s } = await Hub.call("consommation"); st.textContent = "Mois en cours : " + s.mois + (s.memoire.configuree ? " · " + s.memoire.notes + " élément(s) en mémoire" : " · mémoire non configurée");
      const box = $("conso-stats"); box.textContent = "";
      [["Questions", s.appels], ["Recherches web", s.recherches], ["Jetons lus", NUM(s.entree)], ["Jetons écrits", NUM(s.sortie)], ["Coût estimé", USD(s.cout)]].forEach(([k, v]) => box.append(el("div", { className: "stat", innerHTML: "<b>" + esc(v) + "</b><span>" + esc(k) + "</span>" })));
      const days = $("conso-days"); days.textContent = ""; const mx = Math.max(0.0001, ...s.jours.map(d => d.cout));
      s.jours.forEach(d => days.append(el("i", { title: d.jour + " : " + d.appels + " question(s), " + USD(d.cout), style: "height:" + Math.max(4, Math.round(d.cout / mx * 100)) + "%" })));
      const tb = $("conso-users"); tb.textContent = "";
      s.utilisateurs.forEach(u => tb.append(el("tr", { innerHTML: "<td>" + esc(u.email) + "</td><td>" + u.appels + "</td><td>" + u.recherches + "</td><td>" + NUM(u.entree) + " / " + NUM(u.sortie) + "</td><td>" + USD(u.cout) + "</td>" })));
    } catch (e) { st.textContent = e.message; st.classList.add("error"); }
  }

  // ---------- mémoire et compétences (administrateur) ----------
  let memSel = "";
  const memStatus = (t, err) => { $("mem-status").textContent = t || ""; $("mem-status").classList.toggle("error", !!err); };
  function memForm(n) { memSel = n ? n.id : ""; $("mem-genre").value = n && n.genre === "competence" ? "competence" : "note"; $("mem-titre").value = n ? n.titre : ""; $("mem-mots").value = n ? n.mots : ""; $("mem-contenu").value = n ? n.contenu : ""; $("mem-del").hidden = !n; document.querySelectorAll("#mem-items li").forEach(li => li.classList.toggle("on", li.dataset.id === memSel)); }
  async function memLoad() {
    memStatus("Chargement…"); const ul = $("mem-items"); ul.textContent = "";
    try {
      const { notes } = await Hub.call("memoire", { op: "liste" }); memStatus(notes.length ? "" : "Aucune note ni compétence pour l’instant : créez la première.");
      notes.forEach(n => { const li = el("li", { innerHTML: esc(n.titre) + "<small>" + (n.genre === "competence" ? "Compétence · " : "") + esc(n.resume || "") + "</small>" }); li.dataset.id = n.id; li.onclick = async () => { try { memStatus("Chargement…"); const { note } = await Hub.call("memoire", { op: "lire", id: n.id }); memForm(note); memStatus(""); } catch (e) { memStatus(e.message, true); } }; ul.append(li); });
    } catch (e) { memStatus(e.message, true); }
  }
  $("mem-new").onclick = () => memForm(null);
  $("mem-form").addEventListener("submit", async ev => { ev.preventDefault(); try { memStatus("Enregistrement…"); const { note } = await Hub.call("memoire", { op: "ecrire", id: memSel, genre: $("mem-genre").value, titre: $("mem-titre").value, mots: $("mem-mots").value, contenu: $("mem-contenu").value }); memStatus("Enregistré."); await memLoad(); memSel = note.id; document.querySelectorAll("#mem-items li").forEach(li => li.classList.toggle("on", li.dataset.id === memSel)); $("mem-del").hidden = false; } catch (e) { memStatus(e.message, true); } });
  $("mem-del").onclick = async () => { if (!memSel || !confirm("Supprimer cet élément de la mémoire ?")) return; try { await Hub.call("memoire", { op: "supprimer", id: memSel }); memForm(null); memLoad(); } catch (e) { memStatus(e.message, true); } };

  // ---------- menu contextuel d'une conversation ----------
  let ctxEl = null;
  function closeCtx() { if (ctxEl) { ctxEl.remove(); ctxEl = null; document.querySelectorAll(".conv.open").forEach(c => c.classList.remove("open")); } }
  function openCtx(btn, c) {
    closeCtx(); const r = btn.getBoundingClientRect(); ctxEl = el("div", { className: "ctx", role: "menu" });
    const add = (icon, label, fn, cls = "") => { const b = el("button", { type: "button", className: cls, innerHTML: ic(icon, "sm") + esc(label) }); b.onclick = ev => { ev.stopPropagation(); closeCtx(); fn(); }; ctxEl.append(b); };
    if (!c.example) { add("pin", c.pinned ? "Désépingler" : "Épingler", () => { c.pinned = !c.pinned; persist(); drawList(); drawChats(); if (current === c) $("pin").classList.toggle("on", !!c.pinned); });
      add("pencil", "Renommer", () => rename(c)); add("trash", "Supprimer", () => removeConv(c), "danger"); }
    add("share", "Exporter", () => exportConv(c));
    document.body.append(ctxEl); ctxEl.style.left = Math.min(innerWidth - 190, r.left) + "px"; ctxEl.style.top = Math.min(innerHeight - ctxEl.offsetHeight - 8, r.bottom + 4) + "px";
  }
  function rename(c) { const t = (prompt("Nom de la conversation :", c.title) || "").trim(); if (t) { c.title = t.slice(0, 80); persist(); if (current === c) $("title").textContent = c.title; drawList(); drawChats(); } }
  function removeConv(c) { if (!confirm("Supprimer cette conversation ?")) return; convs = convs.filter(k => k !== c); persist(); idb.delConv(c.id); if (current === c) show(null); else { drawList(); drawChats(); } }
  function exportConv(c) {
    const txt = "# " + c.title + "\n\n" + c.messages.map(m => (m.role === "user" ? "**Vous**\n\n" : "**ChatGDB**\n\n") + m.text.replace(/<artifact[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/artifact>/g, (_, t, x) => `\n\n### ${t}\n\n${x}\n`) + (m.sources && m.sources.length ? "\n\nSources :\n" + m.sources.map((s, i) => `${i + 1}. ${s.title} — ${s.url}`).join("\n") : "")).join("\n\n---\n\n");
    download(safeName(c.title) + ".md", txt, "text/markdown");
  }

  // ---------- listes : récentes, toutes les conversations, artefacts, recherche ----------
  const when = ts => { const now = new Date(), day = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime(); return ts >= day ? "Aujourd’hui" : ts >= day - 864e5 ? "Hier" : ts >= day - 6 * 864e5 ? "7 derniers jours" : "Plus ancien"; };
  const sorted = () => convs.slice().sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.updated - a.updated);
  function convRow(c, onOpen) {
    const row = el("div", { className: "conv" + (current && current.id === c.id && view === "chat" ? " on" : ""), role: "button", tabIndex: 0 });
    if (c.pinned) row.append(el("span", { className: "pinned-ic", innerHTML: ic("pin") }));
    row.append(el("span", { textContent: c.title, title: c.title }));
    const mb = el("button", { className: "menu-btn", type: "button", ariaLabel: "Options de la conversation", title: "Options", innerHTML: "⋯" }); mb.onclick = ev => { ev.stopPropagation(); row.classList.add("open"); openCtx(mb, c); }; row.append(mb);
    row.onclick = onOpen; row.onkeydown = e => { if (e.key === "Enter") onOpen(); }; return row;
  }
  function drawList() {
    const box = $("convs"); box.textContent = ""; const l = sorted().slice(0, 14);
    l.forEach(c => box.append(convRow(c, () => { show(c); })));
    box.append(convRow(EXAMPLE, () => show(EXAMPLE)));
    if (!convs.length) box.prepend(el("p", { className: "empty", textContent: "Vos conversations apparaîtront ici." }));
  }
  function drawChats() {
    const q = $("q").value.trim().toLowerCase(), box = $("chat-list"); box.textContent = "";
    const list = sorted().filter(c => !q || (c.title + " " + c.messages.map(m => m.text).join(" ")).toLowerCase().includes(q));
    $("chats-count").textContent = convs.length ? list.length + " conversation" + (list.length > 1 ? "s" : "") + (q ? " trouvée" + (list.length > 1 ? "s" : "") : "") : "";
    if (!list.length) { box.append(el("div", { className: "empty-page", textContent: convs.length ? "Aucune conversation ne correspond." : "Aucune conversation pour l’instant. Posez votre première question !" })); return; }
    const groups = [["Épinglées", c => c.pinned], ...["Aujourd’hui", "Hier", "7 derniers jours", "Plus ancien"].map(g => [g, c => !c.pinned && when(c.updated) === g])];
    groups.forEach(([label, f]) => { const items = list.filter(f); if (!items.length) return; box.append(el("div", { className: "group" }, el("h2", { textContent: label })));
      const rows = el("div", { className: "rows" }); items.forEach(c => { const r = el("button", { className: "rowitem", type: "button" }, el("b", { textContent: c.title }), el("small", { textContent: new Date(c.updated).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + " · " + c.messages.length + " messages" }));
        const mb = el("span", { className: "icon-btn", role: "button", tabIndex: 0, ariaLabel: "Options", innerHTML: "⋯" }); mb.onclick = ev => { ev.stopPropagation(); openCtx(mb, c); }; r.append(mb); r.onclick = () => show(c); rows.append(r); }); box.append(rows); });
  }
  $("q").addEventListener("input", drawChats);
  function artifactsOf(c) {
    const ids = [], seen = new Set(); c.messages.forEach(m => { if (m.role !== "user") parse(m.text).forEach(s => { if (s.t === "art" && !seen.has(s.id)) { seen.add(s.id); ids.push(s.id); } }); });
    return ids.map(id => { const v = versionsOf(c, id); return { id, conv: c, last: v[v.length - 1], n: v.length }; }).filter(x => x.last);
  }
  function drawArtifacts() {
    const q = $("art-q").value.trim().toLowerCase(), box = $("art-list"); box.textContent = ""; let total = 0;
    [...sorted(), EXAMPLE].forEach(c => {
      const items = artifactsOf(c).filter(a => !q || a.last.title.toLowerCase().includes(q)); if (!items.length) return; total += items.length;
      const h = el("h2", { innerHTML: esc(c.title) + " <small>· " + items.length + " artefact" + (items.length > 1 ? "s" : "") + "</small>" }); h.onclick = () => show(c);
      const tiles = el("div", { className: "tiles" });
      items.forEach(a => { const k = KINDS[a.last.type]; const t = el("button", { className: "tile", type: "button" }, el("span", { className: "ico", innerHTML: ic(k.ico) }), el("span", {}, el("b", { textContent: a.last.title }), el("small", { textContent: k.label + (a.n > 1 ? " · " + a.n + " versions" : "") }))); t.onclick = () => { show(c); openArt(c, a.id, a.n - 1); }; tiles.append(t); });
      box.append(el("div", { className: "group" }, h, tiles));
    });
    if (!total) box.append(el("div", { className: "empty-page", textContent: q ? "Aucun artefact ne correspond." : "Aucun artefact pour l’instant : demandez à ChatGDB de rédiger un document, un tableau ou une page." }));
  }
  $("art-q").addEventListener("input", drawArtifacts);
  $("nav-artifacts").onclick = () => setView("artifacts"); $("nav-chats").onclick = () => setView("chats");
  const dsearch = $("dlg-search");
  function openSearch() { $("sq").value = ""; drawSearch(); if (!dsearch.open) dsearch.showModal(); setTimeout(() => $("sq").focus(), 0); }
  function drawSearch() {
    const q = $("sq").value.trim().toLowerCase(), box = $("sres"); box.textContent = "";
    const hit = (t, q) => t.toLowerCase().includes(q), snip = (t, q) => { const i = t.toLowerCase().indexOf(q); return (i > 30 ? "…" : "") + t.slice(Math.max(0, i - 30), i + 80).replace(/\s+/g, " "); };
    const cs = [...sorted(), EXAMPLE], res = [], arts = [];
    cs.forEach(c => { if (!q) { if (res.length < 8) res.push([c, ""]); return; } const m = c.messages.find(m => hit(m.text.replace(/<[^>]+>/g, " "), q)); if (hit(c.title, q) || m) res.push([c, m && !hit(c.title, q) ? snip(m.text.replace(/<[^>]+>/g, " "), q) : ""]); artifactsOf(c).forEach(a => { if (q && hit(a.last.title, q)) arts.push(a); }); });
    if (res.length) { box.append(el("div", { className: "sh", textContent: q ? "Conversations" : "Récentes" })); res.slice(0, 12).forEach(([c, s]) => { const b = el("button", { type: "button" }, el("span", { className: "t" }, el("b", { textContent: c.title }), el("small", { textContent: s || new Date(c.updated === Infinity ? Date.now() : c.updated).toLocaleDateString("fr-FR") }))); b.onclick = () => { dsearch.close(); show(c); }; box.append(b); }); }
    if (arts.length) { box.append(el("div", { className: "sh", textContent: "Artefacts" })); arts.slice(0, 8).forEach(a => { const b = el("button", { type: "button" }, el("span", { className: "ico", innerHTML: ic(KINDS[a.last.type].ico) }), el("span", { className: "t" }, el("b", { textContent: a.last.title }), el("small", { textContent: a.conv.title }))); b.onclick = () => { dsearch.close(); show(a.conv); openArt(a.conv, a.id, a.n - 1); }; box.append(b); }); }
    if (!res.length && !arts.length) box.append(el("p", { className: "muted", style: "padding:14px", textContent: "Aucun résultat." }));
  }
  $("sq").addEventListener("input", drawSearch); $("nav-search").onclick = openSearch;
  dsearch.addEventListener("click", e => { if (e.target === dsearch) dsearch.close(); });

  // ---------- fil de discussion ----------
  const SUGG = [
    ["pencil", "Rédiger", "Rédige une lettre aux parents pour annoncer le camp d’été."],
    ["compass", "Orientation", "Prépare un itinéraire de raid et ouvre-le dans Cartes IGN."],
    ["tree", "Froissartage", "Comment concevoir un banc dans CathIA et sortir le plan coté ?"],
    ["book", "La fédération", "Présente-moi les trois branches de la fédération."],
    ["library", "Bibliothèque", "Quels livres de la bibliothèque conseilles-tu à un nouveau chef de troupe ?"],
    ["help", "Besoin d’aide", "Je n’arrive pas à utiliser une application : aide-moi à écrire au service informatique."]
  ];
  function welcome() {
    const box = el("div", { className: "welcome" });
    box.append(el("img", { className: "logo", src: LOGO.uri, alt: "" }), el("h2", { textContent: "Bonjour " + first + ", comment puis-je vous aider ?" }), el("p", { textContent: "L’assistant de la Fédération des Scouts et Guides Godefroy de Bouillon." }));
    const cards = el("div", { className: "cards" });
    SUGG.forEach(([i, h, t]) => { const c = el("button", { className: "card", type: "button" }, el("span", { className: "ci", innerHTML: ic(i) }), el("b", { textContent: h }), el("small", { textContent: t })); c.onclick = () => { $("input").value = t; autosize(); $("input").focus(); }; cards.append(c); });
    const caps = el("div", { className: "caps" });
    [["globe", "Recherche sur fsggb.fr et le web"], ["image", "Voit vos images"], ["file", "Lit vos PDF"], ["code", "Crée documents, pages et tableaux"], ["library", "Connaît la bibliothèque"]].forEach(([i, t]) => caps.append(el("span", { className: "cap", innerHTML: ic(i) + esc(t) })));
    box.append(cards, caps); return box;
  }
  function attsOf(m) {
    if (!m.atts || !m.atts.length) return null;
    const box = el("div", { className: "thumbs" });
    m.atts.forEach(a => box.append(a.t ? el("img", { className: "thumb", src: a.t, alt: a.n }) : el("span", { className: "filechip", innerHTML: ic("file") + esc(a.n) })));
    return box;
  }
  function stepsBlock(steps, liveMode) {
    if (!steps || !steps.length) return null;
    const d = el("details", { className: "steps" + (liveMode ? " live" : "") }); if (liveMode) d.open = true;
    d.append(el("summary", { innerHTML: ic("steps") + (liveMode ? "ChatGDB travaille… " + steps.length + " étape" + (steps.length > 1 ? "s" : "") : "Étapes de la réponse (" + steps.length + ")") + ic("chevd", "chev sm") }));
    const ol = el("ol"); steps.forEach(s => ol.append(el("li", { className: s.k, textContent: s.t }))); d.append(ol); return d;
  }
  function botBody(m, conv) {
    const body = el("div", { className: "body" });
    if (m.degrade) body.append(el("div", { className: "degrade", textContent: m.degrade }));
    const sb = stepsBlock(m.steps && m.steps.length > 2 ? m.steps : null, false); if (sb) body.append(sb);
    curSources = m.sources || [];
    const wrap = el("div", { className: "md" });
    parse(m.text).forEach(s => {
      if (s.t === "text") { if (s.v.trim()) wrap.insertAdjacentHTML("beforeend", md(s.v)); return; }
      const k = KINDS[s.type], vers = versionsOf(conv, s.id), idx = Math.max(0, vers.findIndex(x => x.msg === m));
      const card = el("button", { className: "afc" + (openArtId === s.id ? " on" : ""), type: "button" },
        el("span", { className: "ico", innerHTML: ic(k.ico) }), el("span", {}, el("b", { textContent: s.title }), el("small", { textContent: k.label + (vers.length > 1 ? " · version " + (idx + 1) + " sur " + vers.length : "") })), el("span", { className: "go", innerHTML: "Ouvrir" + ic("chev") }));
      card.onclick = () => openArt(conv, s.id, idx); wrap.append(card);
    });
    body.append(wrap);
    if (m.sources && m.sources.length) { const src = el("div", { className: "sources" }); m.sources.forEach((s, i) => src.append(el("a", { className: "src", id: "src-" + i, href: s.url, target: "_blank", rel: "noopener noreferrer", innerHTML: `<i>${i + 1}</i><span><b>${esc(s.title)}</b><small>${esc(host(s.url))}</small></span>` }))); body.append(src); }
    curSources = [];
    (m.proposals || []).forEach(p => body.append(proposalCard(p, m)));
    (m.aides || []).forEach(a => body.append(aideCard(a, m, conv)));
    (m.depots || []).forEach(d => body.append(depotCard(d, m, conv)));
    return body;
  }
  function drawThread(scroll = true) {
    const th = $("thread"); th.textContent = "";
    if (!current || !current.messages.length) { th.append(welcome()); return; }
    if (current.example) th.append(el("div", { className: "example-note", textContent: "Exemple de conversation : elle montre ce que ChatGDB saura produire (documents, pages interactives, tableaux, images). Les réponses de cet exemple ne viennent pas de l’IA." }));
    current.messages.forEach((m, i) => {
      const msg = el("div", { className: "msg " + (m.role === "user" ? "user" : "bot") });
      msg.append(m.role === "user" ? el("span", { className: "who", textContent: first.charAt(0).toUpperCase() }) : el("span", { className: "who" }, el("img", { src: LOGO.uri, alt: "" })));
      const last = i === current.messages.length - 1, acts = el("div", { className: "actions" });
      const btn = (i2, label, title, fn) => { const b = el("button", { type: "button", title, ariaLabel: title, innerHTML: ic(i2) + (label ? esc(label) : "") }); b.onclick = fn; acts.append(b); return b; };
      if (m.role === "user") {
        const body = el("div", { className: "body" }), a = attsOf(m); if (a) body.append(a);
        body.append(el("div", { className: "bubble", textContent: m.text }));
        btn("copy", "", "Copier", () => copy(m.text));
        if (!current.example && live && !busy) btn("pencil", "", "Modifier le message", () => editMsg(i, body));
        body.append(acts); msg.append(body);
      } else {
        const body = botBody(m, current);
        btn("copy", "Copier", "Copier la réponse", () => copy(m.text.replace(/<\/?artifact[^>]*>/g, "")));
        const up = btn("up", "", "Bonne réponse", () => { m.fb = m.fb === "up" ? "" : "up"; persist(); up.classList.toggle("on", m.fb === "up"); dn.classList.remove("on"); toast("Merci pour votre retour."); });
        const dn = btn("down", "", "Réponse insuffisante", () => { m.fb = m.fb === "down" ? "" : "down"; persist(); dn.classList.toggle("on", m.fb === "down"); up.classList.remove("on"); toast("Merci, nous en tenons compte."); });
        up.classList.toggle("on", m.fb === "up"); dn.classList.toggle("on", m.fb === "down");
        if (!current.example && last && live && !busy) btn("refresh", "Réessayer", "Régénérer la réponse", () => regenerate());
        body.append(acts); msg.append(body);
      }
      th.append(msg);
    });
    if (busy) th.append(liveNode());
    if (scroll) th.scrollTop = th.scrollHeight;
  }
  function liveNode() {
    const n = el("div", { className: "msg bot", id: "live-msg" }, el("span", { className: "who" }, el("img", { src: LOGO.uri, alt: "" })));
    const body = el("div", { className: "body" }), sb = stepsBlock(liveSteps, true); if (sb) body.append(sb);
    body.append(el("span", { className: "typing" }, el("i"), el("i"), el("i"), document.createTextNode(webOn ? "ChatGDB réfléchit ou cherche…" : "ChatGDB réfléchit…")));
    n.append(body); return n;
  }
  function updateLive() { const old = $("live-msg"); if (old) { const n = liveNode(); old.replaceWith(n); $("thread").scrollTop = $("thread").scrollHeight; } }
  // clics dans le fil : copie de code, citations, images
  $("thread").addEventListener("click", e => {
    const t = e.target;
    const cp = t.closest("[data-copy]"); if (cp) { copy(cp.closest(".pre").querySelector("code").textContent); return; }
    const ci = t.closest(".cite"); if (ci) { e.preventDefault(); const s = ci.closest(".body").querySelector("#src-" + (+ci.dataset.n - 1)); if (s) { s.scrollIntoView({ block: "center", behavior: "smooth" }); s.classList.add("flash"); setTimeout(() => s.classList.remove("flash"), 1400); } return; }
    if (t.matches("img.mdimg, img.thumb, .pshot img")) { $("lb-img").src = t.src; $("dlg-image").showModal(); }
  });
  $("thread").addEventListener("error", e => { if (e.target.matches && e.target.matches("img.mdimg")) e.target.remove(); }, true);
  $("dlg-image").addEventListener("click", e => { if (e.target.id === "dlg-image") e.target.close(); });

  function show(c) {
    setView("chat"); current = c; $("title").textContent = c ? c.title : "Nouvelle conversation"; $("badge").hidden = !(c && c.example);
    $("pin").hidden = !c || c.example; $("pin").classList.toggle("on", !!(c && c.pinned)); $("export").hidden = !c;
    closeArt(); drawList(); drawThread(false); $("thread").scrollTop = 0; notice(closedMsg && !live ? closedMsg : ""); updateSend();
  }
  $("new").onclick = () => { show(null); $("input").focus(); };
  $("title").onclick = () => { if (current && !current.example) rename(current); };
  $("pin").onclick = () => { if (!current) return; current.pinned = !current.pinned; persist(); $("pin").classList.toggle("on", current.pinned); drawList(); };
  $("export").onclick = () => { if (current) exportConv(current); };

  // ---------- propositions : mémoire, aide, dépôt en bibliothèque (rien ne part sans confirmation) ----------
  function proposalCard(p, m) {
    const box = el("div", { className: "proposal" }, el("b", { innerHTML: ic("brain") + "Retenir dans la mémoire " + (p.genre === "competence" ? "(compétence)" : "(note)") + " : " + esc(p.titre) }), el("p", { textContent: p.contenu }));
    if (p.state === "ok") box.append(el("div", { className: "row" }, el("span", { className: "muted", textContent: "Enregistré dans la mémoire." })));
    else if (p.state === "no") box.append(el("div", { className: "row" }, el("span", { className: "muted", textContent: "Ignoré." })));
    else {
      const ok = el("button", { className: "btn primary small", type: "button", textContent: "Enregistrer" }), no = el("button", { className: "btn small", type: "button", textContent: "Ignorer" });
      ok.onclick = async () => { ok.disabled = true; try { await Hub.call("memoire", { op: "ecrire", genre: p.genre, titre: p.titre, mots: p.mots, contenu: p.contenu }); p.state = "ok"; persist(); drawThread(false); toast("Enregistré dans la mémoire."); } catch (e) { ok.disabled = false; toast(e.message); } };
      no.onclick = () => { p.state = "no"; persist(); drawThread(false); };
      box.append(el("div", { className: "row" }, no, ok));
    }
    return box;
  }
  async function convImages(conv) {   // captures et images de la conversation, pour joindre à une demande d'aide
    const out = [];
    for (const m of conv.messages) if (m.role === "user" && m.atts) for (let j = 0; j < m.atts.length; j++) { const a = m.atts[j]; if (a.k !== "image") continue; const rec = await idb.get(fkey(conv.id, m.id, j)); if (rec) out.push({ n: a.n, t: a.t, m: rec.m, d: rec.h || rec.d }); }
    return out;
  }
  function aideCard(a, m, conv) {
    const box = el("div", { className: "proposal aide" }, el("b", { innerHTML: ic("send-mail") + "Message au service informatique" }));
    if (a.state === "ok") { box.append(el("p", { textContent: "Message envoyé au service informatique. Il vous répondra par e-mail." })); return box; }
    box.append(el("p", { textContent: "Relisez et corrigez : le message part tel quel, avec les captures cochées, quand vous cliquez sur « Envoyer »." }));
    const t = el("input", { type: "text", value: a.titre, maxLength: 140, ariaLabel: "Objet" }), msg = el("textarea", { value: a.message, maxLength: 8000, ariaLabel: "Message" });
    t.oninput = () => { a.titre = t.value; }; msg.oninput = () => { a.message = msg.value; };
    box.append(t, msg);
    if (a.captures) box.append(el("p", { className: "tag", textContent: "Capture conseillée : " + a.captures }));
    const shots = el("div", { className: "pshots" }); box.append(shots);
    convImages(conv).then(imgs => { a._imgs = imgs; imgs.slice(0, 6).forEach((im, i) => { const w = el("label", { className: "pshot" }, el("img", { src: im.t || ("data:" + im.m + ";base64," + im.d), alt: im.n })); const c = el("input", { type: "checkbox", checked: a.sel ? a.sel.includes(i) : true, ariaLabel: "Joindre " + im.n }); c.onchange = () => { a.sel = [...shots.querySelectorAll("input")].map((x, k) => x.checked ? k : -1).filter(k => k >= 0); }; w.prepend(c); shots.append(w); }); });
    const ok = el("button", { className: "btn primary small", type: "button", innerHTML: ic("send-mail", "sm") + "Envoyer au service informatique" });
    ok.onclick = async () => {
      if (a.titre.trim().length < 4 || a.message.trim().length < 20) return toast("Complétez l’objet et le message.");
      ok.disabled = true; toast("Envoi…");
      try {
        const imgs = (a._imgs || []).filter((_, i) => !a.sel || a.sel.includes(i)).slice(0, 4).map(x => ({ m: x.m, d: x.d }));
        await Hub.call("aide_envoyer", { titre: a.titre, message: a.message, nom: $("me-name").textContent, images: imgs, contexte: `${navigator.userAgent} · écran ${screen.width}×${screen.height} · ${new Date().toLocaleString("fr-FR")} · rôle ${user.role}` });
        a.state = "ok"; persist(); drawThread(false); toast("Message envoyé au service informatique.");
      } catch (e) { ok.disabled = false; toast(e.message); }
    };
    box.append(el("div", { className: "row" }, ok)); return box;
  }
  // --- dépôt en bibliothèque (administrateur) : Drive + GitHub, puis fiche en mémoire ---
  async function libCall(action, data) {
    if (!biblioApi) throw new Error("La bibliothèque n’est pas configurée côté serveur (BIBLIO_API).");
    let res; try { res = await fetch(biblioApi, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action, token: Hub.token, ...data }) }); } catch { throw new Error("Serveur de la bibliothèque injoignable."); }
    let out; try { out = await res.json(); } catch { throw new Error("Réponse invalide de la bibliothèque."); }
    if (!out.ok) throw new Error(out.error || "Erreur de la bibliothèque."); return out;
  }
  const utf8b64 = s => { const b = new TextEncoder().encode(s); let t = ""; for (let i = 0; i < b.length; i += 0x8000) t += String.fromCharCode(...b.subarray(i, i + 0x8000)); return btoa(t); };
  const pdfHtml = src => "<html><head><meta charset='utf-8'><style>body{font-family:Georgia,serif;margin:36px;color:#0a0c25;line-height:1.55}h3,h4,h5{color:#000761}table{border-collapse:collapse}td,th{border:1px solid #bbb;padding:5px 9px}code,pre{background:#f4f1e8}pre{padding:10px;white-space:pre-wrap}</style></head><body>" + md(src).replace(/<div class="pre-h">[\s\S]*?<\/div>/g, "") + "</body></html>";
  async function findAttachment(conv, name) {
    for (const m of conv.messages) if (m.role === "user" && m.atts) for (let j = 0; j < m.atts.length; j++) { const a = m.atts[j]; if (a.n === name || (name && a.n.toLowerCase().includes(name.toLowerCase())) || (name && name.toLowerCase().includes(a.n.toLowerCase()))) { const rec = await idb.get(fkey(conv.id, m.id, j)); if (rec) return { a, rec }; } }
    return null;
  }
  let depotCtx = null;
  function openDepot(ctx) {
    depotCtx = ctx; $("dp-dossier").value = ctx.dossier || ""; $("dp-nom").value = ctx.nom || ""; $("dp-fiche").value = ctx.fiche || ""; $("dp-status").textContent = ""; $("dp-ok").disabled = false;
    $("dp-fmt-row").hidden = !ctx.convertible; $("dp-fmt").value = ctx.convertible ? "pdf" : "orig"; $("dlg-depot").showModal();
  }
  $("dp-ok").onclick = async () => {
    const c = depotCtx, st = $("dp-status"), dossier = $("dp-dossier").value.trim(), nomIn = $("dp-nom").value.trim(); if (!dossier || !nomIn) { st.textContent = "Indiquez la rubrique et le nom du fichier."; return; }
    $("dp-ok").disabled = true; st.classList.remove("error"); st.textContent = "Préparation du fichier…";
    try {
      const pdf = c.convertible && $("dp-fmt").value === "pdf"; let payload = { chemin: dossier, nom: nomIn };
      if (c.source === "piece") { const f = await findAttachment(c.conv, c.piece); if (!f) throw new Error("La pièce jointe n’est plus disponible : joignez-la de nouveau à la conversation."); payload.mime = f.rec.m || "application/octet-stream"; payload.base64 = f.rec.kind === "text" || f.a.k === "text" ? utf8b64(f.rec.text) : f.rec.d; if (/^text\//.test(payload.mime) === false && f.a.k === "text") payload.mime = "text/plain"; }
      else if (pdf) payload.html = c.type === "html" ? c.contenu : pdfHtml(c.contenu);
      else { payload.base64 = utf8b64(c.contenu); payload.mime = c.mime || "text/plain"; }
      st.textContent = "Envoi vers Drive et GitHub… (les gros fichiers peuvent prendre une minute)";
      const out = await libCall("deposer", payload);
      let msg = "Enregistré dans la bibliothèque (" + (out.chemin ? out.chemin + "/" : "") + out.nom + ")" + (out.github ? ", copié dans GitHub" : ", GitHub non configuré") + ".";
      const fiche = $("dp-fiche").value.trim();
      if (fiche) { await Hub.call("memoire", { op: "ecrire", genre: "note", titre: c.titre || out.nom, mots: c.mots || "", contenu: "Document de la bibliothèque : « " + out.nom + " » (rubrique : " + (out.chemin || "racine") + " ; identifiant Drive : " + out.id + ").\n\n" + fiche }); msg += " Fiche ajoutée à la mémoire."; }
      if (c.onDone) c.onDone(); $("dlg-depot").close(); toast(msg); drawThread(false);
    } catch (e) { st.classList.add("error"); st.textContent = e.message; $("dp-ok").disabled = false; }
  };
  const ficheDe = d => [d.resume ? "## Résumé\n" + d.resume : "", d.points ? "## Points clés\n" + d.points : "", d.questions ? "## Questions auxquelles il répond\n" + d.questions : ""].filter(Boolean).join("\n\n");
  function depotCard(d, m, conv) {
    const box = el("div", { className: "proposal" }, el("b", { innerHTML: ic("library") + "Ajouter à la bibliothèque : " + esc(d.nom) }), el("p", { textContent: d.resume }));
    box.append(el("div", { className: "fields" }, el("span", { className: "tag", textContent: "Rubrique proposée : " + (d.dossier || "(à choisir)") + " · " + (d.source === "genere" ? "document rédigé par ChatGDB" : "pièce jointe « " + (d.piece || d.nom) + " »") })));
    if (d.state === "ok") box.append(el("div", { className: "row" }, el("span", { className: "muted", textContent: "Ajouté à la bibliothèque (Drive et GitHub)." })));
    else if (d.state === "no") box.append(el("div", { className: "row" }, el("span", { className: "muted", textContent: "Ignoré." })));
    else {
      const ok = el("button", { className: "btn primary small", type: "button", innerHTML: ic("library", "sm") + "Relire et ajouter" }), no = el("button", { className: "btn small", type: "button", textContent: "Ignorer" });
      ok.onclick = () => openDepot({ source: d.source === "genere" ? "genere" : "piece", conv, piece: d.piece || d.nom, dossier: d.dossier, nom: d.nom, contenu: d.contenu, titre: d.titre, mots: d.mots, fiche: ficheDe(d), convertible: d.source === "genere", type: "markdown", onDone: () => { d.state = "ok"; persist(); } });
      no.onclick = () => { d.state = "no"; persist(); drawThread(false); };
      box.append(el("div", { className: "row" }, no, ok));
    }
    return box;
  }

  // ---------- volet des artefacts ----------
  function openArt(conv, id, ver) {
    const vers = versionsOf(conv, id); if (!vers.length) return;
    openArtId = id; openArtVer = Math.max(0, Math.min(ver, vers.length - 1)); tab = "prev";
    app.dataset.art = "open"; $("art").hidden = false; renderArt(conv); drawThread(false);
  }
  // application ouverte par l'IA pendant son travail (hors conversation) : cadre visible, que la personne peut aussi utiliser
  function mountLive(url, title) {
    openArtId = null; app.dataset.art = "open"; $("art").hidden = false;
    $("art-ico").innerHTML = '<use href="#i-layers"/>'; $("art-name").textContent = title || "Application"; $("art-kind").textContent = "Application ScoutHub · pilotée par ChatGDB";
    $("art-ver").hidden = true; $("art-lib").hidden = true; $("tab-prev").parentElement.hidden = true;
    const body = $("art-body"); body.textContent = ""; const f = GA.makeFrame(url, title); body.append(f); GA.setFrame(f); return f;
  }
  function closeArt() { openArtId = null; app.dataset.art = "closed"; $("art").hidden = true; $("art").classList.remove("full"); }
  function renderArt(conv = current) {
    const vers = versionsOf(conv, openArtId), a = vers[openArtVer]; if (!a) return closeArt();
    const k = KINDS[a.type];
    $("art-ico").innerHTML = `<use href="#i-${k.ico}"/>`; $("art-name").textContent = a.title; $("art-kind").textContent = k.label;
    $("art-lib").hidden = !(isAdmin && biblioApi && !conv.example);
    const sel = $("art-ver"); sel.hidden = vers.length < 2; sel.textContent = "";
    vers.forEach((_, i) => sel.append(el("option", { value: i, textContent: "Version " + (i + 1), selected: i === openArtVer })));
    $("tab-prev").setAttribute("aria-selected", String(tab === "prev")); $("tab-code").setAttribute("aria-selected", String(tab === "code"));
    $("tab-prev").parentElement.hidden = false;
    const body = $("art-body"); body.textContent = "";
    if (tab === "code") { body.append(el("pre", { className: "raw", textContent: a.content })); return; }
    if (a.type === "markdown") { curSources = []; body.append(el("div", { className: "md", innerHTML: md(a.content) })); }
    else if (a.type === "app") {
      const u = GA.urlOf && GA.urlOf(GA.parseSpec(a.content));
      if (!u) body.append(el("p", { className: "muted", style: "padding:18px", textContent: "Application inconnue ou non autorisée." }));
      else { const f = GA.makeFrame(u.href, a.title); body.append(el("div", { className: "appbar" }, el("span", { textContent: "L’application est utilisable ici." }), el("a", { className: "btn", href: u.href, target: "_blank", rel: "noopener", textContent: "Ouvrir en pleine page" })), f); GA.setFrame(f); }
    }
    else if (a.type === "html") {
      const csp = '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; img-src data: blob: https:; style-src \'unsafe-inline\'; script-src \'unsafe-inline\'; font-src data:">';
      body.append(el("iframe", { title: a.title, sandbox: "allow-scripts", srcdoc: csp + a.content, referrerPolicy: "no-referrer" }));
    } else if (a.type === "svg") body.append(el("div", { className: "svgwrap" }, el("img", { alt: a.title, src: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(a.content) })));
    else if (a.type === "csv") {
      const rows = a.content.split(/\r?\n/).filter(Boolean).map(line => { const out = []; let cur = "", q = false; for (let i = 0; i < line.length; i++) { const ch = line[i]; if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; } else if (ch === '"') q = true; else if (ch === "," || ch === ";") { out.push(cur); cur = ""; } else cur += ch; } out.push(cur); return out; });
      body.append(el("div", { className: "md", innerHTML: "<table><thead><tr>" + (rows[0] || []).map(c => `<th>${esc(c)}</th>`).join("") + "</tr></thead><tbody>" + rows.slice(1).map(r => "<tr>" + r.map(c => `<td>${esc(c)}</td>`).join("") + "</tr>").join("") + "</tbody></table>" }));
    } else body.append(el("pre", { className: "raw", textContent: a.content }));
  }
  $("tab-prev").onclick = () => { tab = "prev"; renderArt(); }; $("tab-code").onclick = () => { tab = "code"; renderArt(); };
  $("art-ver").onchange = e => { openArtVer = +e.target.value; renderArt(); };
  $("art-close").onclick = () => { closeArt(); drawThread(false); };
  $("art-full").onclick = () => $("art").classList.toggle("full");
  $("art-copy").onclick = () => { const a = versionsOf(current, openArtId)[openArtVer]; if (a) copy(a.content); };
  $("art-dl").onclick = () => { const a = versionsOf(current, openArtId)[openArtVer]; if (!a) return; const k = KINDS[a.type]; download(safeName(a.title) + "." + (a.type === "code" && /^[\w+-]{1,6}$/.test(a.lang) ? a.lang : k.ext), a.content, k.mime); };
  $("art-lib").onclick = () => { const a = versionsOf(current, openArtId)[openArtVer]; if (!a) return; const k = KINDS[a.type]; openDepot({ source: "artefact", conv: current, dossier: "", nom: safeName(a.title) + (a.type === "markdown" || a.type === "html" ? ".pdf" : "." + k.ext), contenu: a.content, type: a.type, mime: k.mime, titre: a.title, convertible: a.type === "markdown" || a.type === "html", fiche: "Document rédigé avec ChatGDB : " + a.title + "." }); };

  // ---------- pièces jointes : images (réduites, conservées), PDF volumineux, fichiers texte ----------
  const MAX_ATT = 8, MAX_PDF = 20 * 1048576, MAX_TXT = 200000;
  const readAs = (f, how) => new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = () => ko(r.error); r[how](f); });
  async function shrink(file, max, q) {
    const url = await readAs(file, "readAsDataURL"), img = await new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ko; i.src = url; });
    const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement("canvas"); c.width = Math.max(1, Math.round(img.width * k)); c.height = Math.max(1, Math.round(img.height * k));
    const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL("image/jpeg", q);
  }
  async function addFiles(files) {
    for (const f of [...files]) {
      if (pending.length >= MAX_ATT) { toast("Huit pièces jointes au maximum."); break; }
      try {
        if (/^image\//.test(f.type) && f.type !== "image/svg+xml") {
          const big = await shrink(f, 1568, .85), mid = await shrink(f, 1024, .75), thumb = await shrink(f, 160, .7);
          pending.push({ k: "image", n: f.name || "image", m: "image/jpeg", d: big.split(",")[1], h: mid.split(",")[1], t: thumb });
        } else if (f.type === "application/pdf" || /\.pdf$/i.test(f.name)) {
          if (f.size > MAX_PDF) { toast("« " + f.name + " » dépasse 20 Mo : découpez-le en plusieurs PDF."); continue; }
          pending.push({ k: "pdf", n: f.name, m: "application/pdf", d: (await readAs(f, "readAsDataURL")).split(",")[1] });
        } else if (/^text\/|json|xml|svg|csv/.test(f.type) || /\.(txt|md|csv|json|html|xml|svg)$/i.test(f.name)) {
          if (f.size > MAX_TXT) { toast("« " + f.name + " » est trop volumineux (200 Ko)."); continue; }
          pending.push({ k: "text", n: f.name, text: await readAs(f, "readAsText") });
        } else toast("Type de fichier non pris en charge : " + f.name);
      } catch { toast("Impossible de lire « " + (f.name || "fichier") + " »."); }
    }
    drawAtts(); updateSend();
  }
  function drawAtts() {
    const box = $("atts"); box.hidden = !pending.length; box.textContent = "";
    pending.forEach((a, i) => {
      const chip = el("div", { className: "att" }, a.t ? el("img", { src: a.t, alt: "" }) : el("span", { className: "fi", innerHTML: ic("file") }), el("span", { textContent: a.n + (a.k === "pdf" ? " (" + (a.d.length * 0.75 / 1048576).toFixed(1) + " Mo)" : ""), title: a.n }));
      const x = el("button", { type: "button", ariaLabel: "Retirer", innerHTML: ic("close") }); x.onclick = () => { pending.splice(i, 1); drawAtts(); updateSend(); }; chip.append(x); box.append(chip);
    });
  }
  $("attach").onclick = () => $("file").click();
  $("file").onchange = e => { addFiles(e.target.files); e.target.value = ""; };
  document.addEventListener("paste", e => { const fs = [...(e.clipboardData?.files || [])]; if (fs.length) { e.preventDefault(); addFiles(fs); } });
  let dragDepth = 0;
  document.addEventListener("dragenter", e => { if ([...(e.dataTransfer?.types || [])].includes("Files")) { dragDepth++; $("drop-hint").hidden = false; } });
  document.addEventListener("dragleave", () => { if (--dragDepth <= 0) { dragDepth = 0; $("drop-hint").hidden = true; } });
  document.addEventListener("dragover", e => { if ([...(e.dataTransfer?.types || [])].includes("Files")) e.preventDefault(); });
  document.addEventListener("drop", e => { e.preventDefault(); dragDepth = 0; $("drop-hint").hidden = true; if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files); });

  // ---------- composeur ----------
  const input = $("input"), send = $("send");
  $("web").onclick = () => { webOn = !webOn; prefs.web = webOn; store.set(PREFS_KEY, prefs); refreshModelUi(); };
  function notice(text, err) { const n = $("notice"); n.hidden = !text; n.textContent = text || ""; n.classList.toggle("err", !!err); }
  function updateSend() {
    send.classList.toggle("stop", busy); send.innerHTML = ic(busy ? "stop" : "send"); send.setAttribute("aria-label", busy ? "Arrêter" : "Envoyer");
    send.disabled = !busy && (!(input.value.trim() || pending.length) || (current && current.example));
  }
  function autosize() { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 200) + "px"; $("count").textContent = input.value.length > 6000 ? input.value.length + " / 8000" : ""; updateSend(); }
  input.addEventListener("input", autosize);
  input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); if (!busy) $("form").requestSubmit(); } });
  // dictée vocale : on enregistre dans le navigateur (fonctionne partout, y compris Brave), le serveur transcrit.
  let recorder = null, recStream = null, recTimer = 0;
  const micBtn = $("mic");
  const hasRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition; let rec = null;
  const micState = on => { micBtn.classList.toggle("rec", on); micBtn.title = on ? "Arrêter la dictée" : "Dicter"; micBtn.setAttribute("aria-label", on ? "Arrêter la dictée" : "Dicter votre message"); };
  // WAV 16 kHz mono 16 bits : format lu partout par le serveur de transcription
  async function toWav(blob) {
    const ctxA = new (window.AudioContext || window.webkitAudioContext)(); const buf = await ctxA.decodeAudioData(await blob.arrayBuffer()); ctxA.close && ctxA.close();
    const rate = 16000, len = Math.max(1, Math.round(buf.duration * rate)), off = new OfflineAudioContext(1, len, rate), src = off.createBufferSource(); src.buffer = buf; src.connect(off.destination); src.start();
    const pcm = (await off.startRendering()).getChannelData(0), view = new DataView(new ArrayBuffer(44 + pcm.length * 2)), w = (o, s) => [...s].forEach((c, i) => view.setUint8(o + i, c.charCodeAt(0)));
    w(0, "RIFF"); view.setUint32(4, 36 + pcm.length * 2, true); w(8, "WAVEfmt "); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true); view.setUint32(24, rate, true); view.setUint32(28, rate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true); w(36, "data"); view.setUint32(40, pcm.length * 2, true);
    for (let i = 0; i < pcm.length; i++) view.setInt16(44 + i * 2, Math.max(-1, Math.min(1, pcm[i])) * 0x7fff, true);
    return new Blob([view], { type: "audio/wav" });
  }
  const b64 = blob => new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(String(r.result).split(",")[1]); r.onerror = ko; r.readAsDataURL(blob); });
  async function transcribe(blob) {
    micBtn.disabled = true; toast("Transcription en cours…");
    try { const wav = await toWav(blob), out = await Hub.call("transcrire", { audio: await b64(wav) }); input.value = (input.value ? input.value.trimEnd() + " " : "") + out.text; autosize(); input.focus(); }
    catch (e) { toast(/decode|EncodingError/i.test(e.message || e.name) ? "Enregistrement illisible : réessayez." : e.message); }
    finally { micBtn.disabled = false; }
  }
  function nativeDictation() {
    if (rec) { rec.stop(); return; }
    rec = new SR(); rec.lang = "fr-FR"; rec.interimResults = false; rec.continuous = true; const base = input.value ? input.value + " " : "";
    rec.onresult = e => { input.value = base + [...e.results].map(r => r[0].transcript).join(" "); autosize(); };
    rec.onend = () => { rec = null; micState(false); }; rec.onerror = e => { rec = null; micState(false); toast(e.error === "not-allowed" ? "Micro refusé : autorisez-le dans le navigateur." : "La dictée de ce navigateur ne fonctionne pas ; l’administrateur doit activer la dictée serveur (GEMINI_IA)."); };
    micState(true); try { rec.start(); } catch { rec = null; micState(false); }
  }
  async function toggleMic() {
    if (!voiceServer && SR) return nativeDictation();
    if (recorder) { recorder.stop(); return; }
    try { recStream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { toast("Micro refusé : autorisez-le dans le navigateur."); return; }
    const type = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find(t => MediaRecorder.isTypeSupported(t)) || "";
    const chunks = []; recorder = new MediaRecorder(recStream, type ? { mimeType: type } : {});
    recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    recorder.onstop = () => { clearTimeout(recTimer); recStream.getTracks().forEach(t => t.stop()); const blob = new Blob(chunks, { type: recorder.mimeType || type }); recorder = null; micState(false); if (blob.size < 1500) { toast("Enregistrement trop court."); return; } transcribe(blob); };
    recorder.start(); micState(true); toast("Parlez… (recliquez pour terminer, 90 s au plus)"); recTimer = setTimeout(() => recorder && recorder.stop(), 90000);
  }
  if (hasRec || SR) { micBtn.hidden = false; micBtn.onclick = toggleMic; }


  // ---------- appel au serveur ----------
  async function chatCall(payload, signal) {
    const API = window.SCOUTHUB_API; if (!API) throw new Error("Le serveur ScoutHub n’est pas configuré.");
    let res; try { res = await fetch(API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "chat", token: Hub.token, ...payload }), signal }); }
    catch (e) { if (e.name === "AbortError") throw e; throw new Error("Serveur injoignable."); }
    let out; try { out = await res.json(); } catch { throw new Error("Réponse invalide du serveur."); }
    if (!out.ok) { if (/Session expirée/.test(out.error)) Hub.toLogin(); throw new Error(out.error || "Erreur."); }
    return out;
  }
  // Historique envoyé : les vraies images de TOUS les messages précédents (version réduite pour les anciens), les PDF du dernier message qui en a, les fichiers texte.
  async function history() {
    const list = current.messages.slice(-24), out = []; let imgBudget = 8, pdfDone = false, lastUser = -1; list.forEach((m, i) => { if (m.role === "user") lastUser = i; });
    for (let i = list.length - 1; i >= 0; i--) {
      const m = list[i]; if (m.role !== "user") { out.push({ role: "assistant", text: m.text }); continue; }
      const o = { role: "user", text: m.text }, images = [], docs = [], notes = [];
      for (let j = 0; j < (m.atts || []).length; j++) {
        const a = m.atts[j], rec = await idb.get(fkey(current.id, m.id, j));
        if (!rec) { notes.push(a.n + " (non conservé sur cet appareil)"); continue; }
        if (a.k === "image") { if (imgBudget > 0) { imgBudget--; images.push({ m: rec.m, d: i === lastUser ? rec.d : (rec.h || rec.d) }); } else notes.push(a.n); }
        else if (a.k === "pdf") { if (!pdfDone && list.length - i <= 8) docs.push({ n: a.n, m: rec.m, d: rec.d }); else notes.push(a.n + " (PDF lu plus haut dans la conversation)"); }
        else if (a.k === "text") o.text += `\n\n[Fichier joint : ${a.n}]\n${rec.text}`;
      }
      if (docs.length) pdfDone = true;
      if (images.length) o.images = images; if (docs.length) o.docs = docs;
      if (notes.length) o.text += "\n\n[Autres pièces jointes : " + notes.join(", ") + "]";
      out.push(o);
    }
    return out.reverse();
  }
  function startPoll() { liveSteps = baseSteps = []; rid = uid(); clearInterval(pollTimer); pollTimer = setInterval(async () => { try { const o = await Hub.call("progression", { rid }); if (o.steps && o.steps.length + baseSteps.length !== liveSteps.length) { liveSteps = baseSteps.concat(o.steps); updateLive(); } } catch { /* l'étape suivante réessaiera */ } }, 1800); }
  async function ask() {
    busy = true; abort = new AbortController(); startPoll(); updateSend(); drawThread(); notice();
    try {
      const msgs = await history(), apps = GA.names(), reprise = [], acc = { proposals: [], aides: [], depots: [], steps: [], sources: [], searches: [] }; let out;
      for (;;) {
        out = await chatCall({ rid, style: prefs.style, custom: prefs.custom, web: webOn, modele: prefs.modele, effort: prefs.effort, profondeur: prefs.profondeur, messages: msgs, ...(apps.length ? { apps } : {}), ...(reprise.length ? { reprise } : {}) }, abort.signal);
        if (out.credits) credits(out.credits);
        if (!out.attente) break;
        // l'IA veut manipuler une application : on l'exécute ici, dans le cadre visible, puis on lui rend le résultat
        ["proposals", "aides", "depots", "steps", "sources", "searches"].forEach(k => acc[k].push(...(out[k] || [])));
        baseSteps = acc.steps.slice(); liveSteps = baseSteps; updateLive();
        const results = (out.attente.resultats || []).slice();
        for (const c of out.attente.appels || []) {
          if (abort.signal.aborted) throw new DOMException("Interrompu", "AbortError");
          const i = c.input || {}, st = { k: "outil", t: "Application " + (i.app || "") + " : " + (i.action || "") + (i.cible != null ? " n°" + i.cible : "") + (i.texte ? " « " + String(i.texte).slice(0, 40) + " »" : "") };
          acc.steps.push(st); baseSteps = acc.steps.slice(); liveSteps = baseSteps; updateLive();
          const r = await GA.exec(i, { mount: mountLive, unmount: closeArt });
          results.push({ tool_use_id: c.id, texte: r.texte, image: r.image });
        }
        reprise.push({ assistant: out.attente.assistant, resultats: results });
        reprise.forEach((t, k) => { if (k < reprise.length - 2) t.resultats.forEach(x => { if (x.image) { delete x.image; x.texte += "\n(capture plus ancienne retirée)"; } }); });
        rid = uid();
      }
      out = { ...out, steps: acc.steps.concat(out.steps || []), proposals: acc.proposals.concat(out.proposals || []), aides: acc.aides.concat(out.aides || []), depots: acc.depots.concat(out.depots || []), sources: (out.sources || []).length ? out.sources : acc.sources, searches: acc.searches.concat(out.searches || []) };
      current.messages.push({ id: uid(), role: "assistant", text: String(out.text || ""), sources: out.sources || [], searches: out.searches || [], steps: out.steps || [], degrade: out.degrade ? out.degrade.raison : "", proposals: (out.proposals || []).map(p => ({ ...p, state: "" })), aides: (out.aides || []).map(a => ({ ...a, state: "" })), depots: (out.depots || []).map(d => ({ ...d, state: "" })), time: Date.now() });
      if (out.credits) credits(out.credits);
      current.updated = Date.now();
    } catch (e) { if (e.name !== "AbortError") notice(e.message, true); }
    finally {
      clearInterval(pollTimer); busy = false; abort = null; liveSteps = []; persist(); drawList(); drawThread(); updateSend();
      const last = current.messages[current.messages.length - 1];
      if (last && last.role !== "user") { const a = parse(last.text).filter(s => s.t === "art").pop(); if (a) openArt(current, a.id, versionsOf(current, a.id).length - 1); }
    }
  }
  function regenerate() { if (busy || !live) return; if (current.messages.at(-1).role !== "user") current.messages.pop(); ask(); }
  function editMsg(i, body) {
    const m = current.messages[i], bub = body.querySelector(".bubble"), acts = body.querySelector(".actions"); if (acts) acts.hidden = true;
    const box = el("div", { className: "edit-box" }), ta = el("textarea", { value: m.text }), ok = el("button", { className: "btn primary", type: "button", textContent: "Envoyer" }), no = el("button", { className: "btn", type: "button", textContent: "Annuler" });
    no.onclick = () => drawThread(false);
    ok.onclick = () => { const t = ta.value.trim(); if (!t) return; current.messages.length = i; current.messages.push({ id: m.id, role: "user", text: t, atts: m.atts, time: Date.now() }); ask(); };
    box.append(ta, el("div", {}, no, ok)); bub.replaceWith(box); ta.focus();
  }
  $("form").addEventListener("submit", async ev => {
    ev.preventDefault();
    if (busy) { if (abort) abort.abort(); return; }
    const text = input.value.trim(); if (!text && !pending.length) return;
    if (!live) return notice((closedMsg || "ChatGDB n’est pas encore activé.") + " Votre message n’a pas été envoyé.");
    if (!current || current.example) { current = { id: uid(), title: (text || pending[0].n).slice(0, 60), updated: Date.now(), messages: [] }; convs.unshift(current); $("title").textContent = current.title; $("badge").hidden = true; $("pin").hidden = false; $("export").hidden = false; }
    const sent = pending; pending = []; drawAtts();
    const msg = { id: uid(), role: "user", text: text || "Voici une pièce jointe.", atts: sent.map(a => ({ n: a.n, k: a.k, t: a.t || "" })), time: Date.now() };
    await Promise.all(sent.map((a, j) => idb.put({ k: fkey(current.id, msg.id, j), n: a.n, kind: a.k, m: a.m, d: a.d, h: a.h, text: a.text })));
    current.messages.push(msg); current.updated = Date.now(); input.value = ""; autosize(); ask();
  });
  send.addEventListener("click", e => { if (busy) { e.preventDefault(); if (abort) abort.abort(); } });

  document.addEventListener("keydown", e => {
    const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
    if (mod && k === "k") { e.preventDefault(); openSearch(); }
    else if (mod && e.shiftKey && k === "o") { e.preventDefault(); $("new").click(); }
    else if (e.key === "Escape") { if (!pop.hidden) { pop.hidden = true; return; } closeCtx(); if (!menu.hidden) { menu.hidden = true; return; } if ($("art").classList.contains("full")) $("art").classList.remove("full"); else if (!$("art").hidden) $("art-close").click(); }
  });

  // ---------- état du serveur : ouvert pour ce compte ? crédits, dictée, bibliothèque ----------
  Hub.call("credits").then(o => {
    if (o.chat) live = true; voiceServer = !!o.voix; if (o.credits) credits(o.credits); biblioApi = o.biblio || "";
    if (o.admin) { isAdmin = true; $("set-nav-mem").hidden = false; }
    if (!o.chat) closedMsg = o.raison === "cle" ? "ChatGDB attend la clé Claude du serveur (propriété ANTHROPIC_IA des propriétés du script ScoutHub)."
      : "ChatGDB est réservé aux administrateurs pour le moment. Vous êtes connecté en tant que « " + (Hub.ROLE_LABELS[o.role] || o.role) + " » (" + (o.email || user.email) + ").";
  }).catch(e => { closedMsg = /Action inconnue/.test(e.message) ? "Le serveur ScoutHub n’est pas à jour : collez le dernier Code.gs dans Apps Script et redéployez en « Nouvelle version »." : "Impossible de joindre le serveur ScoutHub : " + e.message; })
    .finally(() => { $("soon").hidden = live; if (!live && !current?.example) notice(closedMsg || "ChatGDB n’est pas encore activé."); updateSend(); if (current) renderArtSafe(); });
  function renderArtSafe() { if (openArtId) renderArt(); }

  // ?q=… : question préremplie (par exemple depuis la Bibliothèque) ; ?aide=1 : demande d'aide guidée
  const qs = new URLSearchParams(location.search), preset = qs.get("q"), aide = qs.get("aide");
  if (preset) input.value = preset.slice(0, 2000);
  else if (aide) input.value = "J’ai un problème avec une application et j’aimerais écrire au service informatique. Aide-moi à préparer le message.";
  if (preset || aide) { try { history.replaceState(null, "", location.pathname); } catch {} }
  credits(); refreshModelUi(); show(null); autosize(); input.focus();
})();
