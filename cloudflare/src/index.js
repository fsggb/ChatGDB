// Worker de l'outil ChatGDB : sert uniquement les fichiers statiques de ChatGDB. Il n'est joignable que par la liaison
// de service du Worker « intranet » (workers_dev désactivé), qui a déjà vérifié que la personne est membre connecté.
import FICHIERS from "./files.json";
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon", ".webmanifest": "application/manifest+json", ".mp4": "video/mp4", ".pdf": "application/pdf" };
const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
export default {
  async fetch(req) {
    if (req.method !== "GET" && req.method !== "HEAD") return new Response("Méthode refusée.", { status: 405 });
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p.endsWith("/")) p += "index.html";
    const cle = p.replace(/^\//, ""), f = FICHIERS[cle];
    if (!f) return new Response("Introuvable.", { status: 404 });
    const ext = cle.slice(cle.lastIndexOf(".")).toLowerCase();
    return new Response(req.method === "HEAD" ? null : (f.type === "text" ? f.data : b64(f.data)), { headers: { "content-type": MIME[ext] || "application/octet-stream", "x-content-type-options": "nosniff" } });
  }
};
