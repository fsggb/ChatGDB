/* Calcul exact pour l'IA : exécute un petit programme (JavaScript, ou Python via Pyodide chargé à la demande) dans un « Worker »
   isolé de la page (aucun accès à la page, aux cookies ni au stockage), avec une limite de temps. Sert à chiffrer, déchiffrer,
   compter, convertir, calculer : tout ce où une IA se trompe si elle le fait « de tête ». */
(function () {
  "use strict";
  const PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
  const SRC_JS = `
    self.onmessage = async e => {
      const out = [];
      const fmt = v => { try { return typeof v === "string" ? v : JSON.stringify(v); } catch (_) { return String(v); } };
      const console = { log: (...a) => out.push(a.map(fmt).join(" ")), error: (...a) => out.push(a.map(fmt).join(" ")), warn: (...a) => out.push(a.map(fmt).join(" ")) };
      try {
        const AsyncFn = Object.getPrototypeOf(async function () {}).constructor;
        const r = await new AsyncFn("console", e.data.code)(console);
        postMessage({ ok: true, out: out.join("\\n"), valeur: r === undefined ? undefined : fmt(r) });
      } catch (err) { postMessage({ ok: false, out: out.join("\\n"), erreur: String(err && err.message || err) }); }
    };`;
  const SRC_PY = `
    self.onmessage = async e => {
      try {
        if (!self.pyodide) { importScripts("${PYODIDE}pyodide.js"); self.pyodide = await loadPyodide({ indexURL: "${PYODIDE}" }); }
        let out = "";
        self.pyodide.setStdout({ batched: s => { out += s + "\\n"; } }); self.pyodide.setStderr({ batched: s => { out += s + "\\n"; } });
        const r = await self.pyodide.runPythonAsync(e.data.code);
        postMessage({ ok: true, out: out.trimEnd(), valeur: r === undefined || r === null ? undefined : String(r) });
      } catch (err) { postMessage({ ok: false, out: "", erreur: String(err && err.message || err) }); }
    };`;
  function lancer(langage, code, ms) {
    return new Promise(res => {
      const py = /^py/i.test(langage || ""), url = URL.createObjectURL(new Blob([py ? SRC_PY : SRC_JS], { type: "text/javascript" }));
      const w = new Worker(url); let fini = false;
      const fin = r => { if (fini) return; fini = true; clearTimeout(t); w.terminate(); URL.revokeObjectURL(url); res(r); };
      const t = setTimeout(() => fin({ ok: false, out: "", erreur: "temps dépassé (" + Math.round(ms / 1000) + " s)" }), ms);
      w.onmessage = e => fin(e.data); w.onerror = e => fin({ ok: false, out: "", erreur: String(e.message || "erreur") });
      w.postMessage({ code: String(code || "").slice(0, 20000) });
    });
  }
  async function executer(e) {
    const code = String(e && e.code || "").trim(); if (!code) return "Aucun code reçu.";
    const py = /^py/i.test(String(e.langage || "")), r = await lancer(e.langage, code, py ? 90000 : 8000);
    const t = (r.out ? "Sortie :\n" + r.out : "") + (r.valeur !== undefined ? (r.out ? "\n" : "") + "Valeur : " + r.valeur : "");
    return (r.ok ? (t || "(exécuté, aucune sortie : affiche le résultat avec console.log ou print)") : "Erreur : " + r.erreur + (r.out ? "\nSortie avant l'erreur :\n" + r.out : "")).slice(0, 6000);
  }
  const OUTIL = { name: "executer_code", description: "Exécute un petit programme dans le navigateur pour obtenir un résultat EXACT : chiffrer ou déchiffrer un texte avec un code (César, Vigenère, Polybe, Morse…), compter, convertir, calculer des distances, des pentes, des durées, des heures. À utiliser dès qu'un calcul ou une transformation de texte doit être rigoureux : ne le fais jamais de tête. Écris le programme, affiche le résultat (console.log en JavaScript, print en Python), puis donne ce résultat et vérifie-le (par exemple en déchiffrant ce que tu as chiffré). Sans accès à la page ni aux données de la personne. Python (langage « python ») met une dizaine de secondes à démarrer la première fois.",
    input_schema: { type: "object", properties: { langage: { type: "string", enum: ["javascript", "python"], description: "javascript (rapide, par défaut) ou python (bibliothèque standard et paquets Pyodide)." }, code: { type: "string", description: "Le programme complet." } }, required: ["code"] } };
  window.GDBCalcul = { executer, OUTIL };
})();
