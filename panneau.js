// Panneau latéral ChatGDB pour les applications réservées à l'administrateur (sauf ChatGDB lui-même).
// À inclure par <script src=".../ChatGDB/panneau.js" data-contexte="laboratoire"></script> après config.js et common.js.
// Un bouton flottant ouvre ChatGDB dans un volet à droite (page de ChatGDB dans un cadre, même site, même connexion).
// Le contexte transmis est une valeur fixe de la liste de ChatGDB (jamais du texte libre).
(() => {
  "use strict";
  const script = document.currentScript;
  if (!script || window.top !== window) return;
  let user = null; try { user = window.Hub && Hub.cachedUser(); } catch { /* ignoré */ }
  if (!user || user.role !== "admin") return;       // la page elle-même vérifie le rôle auprès du serveur ; le panneau n'est qu'une commodité
  const contexte = /^[a-z]{3,20}$/.test(script.dataset.contexte || "") ? script.dataset.contexte : "";
  const base = new URL("./", script.src);
  const CLE = "scouthub.panneau.ouvert";
  const lire = () => { try { return sessionStorage.getItem(CLE) === "1"; } catch { return false; } };
  const ecrire = v => { try { sessionStorage.setItem(CLE, v ? "1" : "0"); } catch { /* ignoré */ } };

  const style = document.createElement("style");
  style.textContent = `
  .pc-bouton{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));z-index:2147483000;display:flex;align-items:center;gap:8px;border:0;border-radius:99px;background:#000761;color:#fff;font:600 14px/1 system-ui,sans-serif;padding:11px 16px 11px 12px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.28)}
  .pc-bouton img{width:22px;height:22px;border-radius:6px;background:#fff}
  .pc-bouton:focus-visible{outline:3px solid #c6a24e;outline-offset:2px}
  .pc-volet{position:fixed;top:0;right:0;bottom:0;width:min(440px,100vw);z-index:2147483001;display:flex;flex-direction:column;background:#fff;border-left:1px solid #c9cfe0;box-shadow:-6px 0 24px rgba(0,0,0,.18);transform:translateX(102%);transition:transform .22s ease}
  .pc-volet.ouvert{transform:none}
  .pc-volet header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:max(8px,env(safe-area-inset-top,0px)) 10px 8px 14px;background:#000761;color:#fff;font:600 14px/1.2 system-ui,sans-serif}
  .pc-volet header button{border:0;background:rgba(255,255,255,.14);color:#fff;border-radius:8px;font:inherit;padding:6px 10px;cursor:pointer}
  .pc-volet iframe{flex:1;width:100%;border:0;background:#fff}
  @media (min-width:1180px){body.pc-ouvert{padding-right:440px!important}body.pc-ouvert .pc-bouton{display:none}}
  @media (prefers-reduced-motion:reduce){.pc-volet{transition:none}}
  @media (prefers-color-scheme:dark){.pc-volet{background:#0f1524;border-left-color:#2a3550}.pc-volet iframe{background:#0f1524}}`;
  document.head.append(style);

  const bouton = document.createElement("button");
  bouton.type = "button"; bouton.className = "pc-bouton"; bouton.setAttribute("aria-haspopup", "dialog"); bouton.setAttribute("aria-expanded", "false");
  const icone = document.createElement("img"); icone.src = new URL("assets/ChatGDB.png", base).href; icone.alt = "";
  bouton.append(icone, document.createTextNode("ChatGDB"));
  const volet = document.createElement("aside");
  volet.className = "pc-volet"; volet.setAttribute("role", "complementary"); volet.setAttribute("aria-label", "Assistant ChatGDB");
  const entete = document.createElement("header");
  const titre = document.createElement("span"); titre.textContent = "ChatGDB";
  const fermer = document.createElement("button"); fermer.type = "button"; fermer.textContent = "Fermer"; fermer.setAttribute("aria-label", "Fermer le panneau ChatGDB");
  entete.append(titre, fermer);
  let cadre = null;
  volet.append(entete);
  document.body.append(volet, bouton);

  function afficher(ouvrir) {
    if (ouvrir && !cadre) {
      cadre = document.createElement("iframe"); cadre.title = "ChatGDB";
      cadre.src = new URL("index.html?panneau=1" + (contexte ? "&contexte=" + contexte : ""), base).href;
      volet.append(cadre);
    }
    volet.classList.toggle("ouvert", ouvrir); document.body.classList.toggle("pc-ouvert", ouvrir);
    bouton.setAttribute("aria-expanded", String(ouvrir)); ecrire(ouvrir);
    if (!ouvrir) bouton.focus({ preventScroll: true });
  }
  bouton.onclick = () => afficher(true);
  fermer.onclick = () => afficher(false);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && volet.classList.contains("ouvert") && !document.body.classList.contains("pc-ouvert")) afficher(false); });
  if (lire()) afficher(true);
})();
