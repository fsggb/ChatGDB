// Génère cloudflare/src/files.json : instantané du dossier « build » (le même que celui publié sur GitHub Pages), embarqué dans le Worker.
// Usage : (construire build/ comme dans .github/workflows/pages.yml) puis node cloudflare/construire.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";
const RACINE = new URL("../build/", import.meta.url).pathname;
const TEXTE = new Set([".html", ".js", ".css", ".svg", ".json", ".webmanifest"]);
const fichiers = {};
(function lire(rel) {
  for (const nom of readdirSync(join(RACINE, rel))) {
    const r = rel ? rel + "/" + nom : nom, chemin = join(RACINE, r);
    if (statSync(chemin).isDirectory()) { lire(r); continue; }
    const ext = extname(nom).toLowerCase();
    fichiers[r] = TEXTE.has(ext) ? { type: "text", data: readFileSync(chemin, "utf8") } : { type: "b64", data: readFileSync(chemin).toString("base64") };
  }
})("");
writeFileSync(new URL("./src/files.json", import.meta.url), JSON.stringify(fichiers));
console.log(Object.keys(fichiers).length + " fichiers embarqués");
