/* Charte d'utilisation de ChatGDB : à valider une fois, étape par étape, avant d'envoyer le premier message.
   CONTENU PROVISOIRE : l'administrateur doit fournir le texte définitif (ÉTAPES ci-dessous, à remplacer tel quel) ;
   la mécanique (plein écran, étapes, case à cocher obligatoire, blocage de la saisie) ne change pas.
   Changer CHARTE_VERSION fait revalider tout le monde (utile si le texte change vraiment). */
(function () {
  "use strict";
  var CHARTE_VERSION = 1;
  var CLE = "scoutgdb.charte.v" + CHARTE_VERSION;

  var ETAPES = [
    { titre: "Bienvenue sur ChatGDB", texte: "ChatGDB est l'assistant IA de la fédération. Avant de commencer, quatre points rapides à connaître.",
      points: ["Vous pouvez lui poser toutes vos questions : scoutisme, pédagogie, outils numériques, vie pratique.", "Il arrive qu'il se trompe : vérifiez les informations importantes."],
      case_: "J'ai compris la présentation" },
    { titre: "Un outil, pas un remplaçant", texte: "L'IA complète votre réflexion, elle ne la remplace pas.",
      points: ["Pour un jeu, une activité ou un projet : l'idée de départ vient de vous.", "ChatGDB vous aide à la compléter, vérifier et mettre en forme, et vous propose des alternatives.", "Pour la sécurité des jeunes, la santé ou le droit, il ne remplace jamais un responsable."],
      case_: "J'ai compris : un outil, pas une prothèse de cerveau" },
    { titre: "Jeux et sorties : vigilance", texte: "Pour un jeu, un raid ou une sortie, ChatGDB est attentif à la distance, au dénivelé et à la lumière du jour.",
      points: ["Il vous alerte si un parcours est trop long, trop raide, ou si l'arrivée est trop proche du coucher du soleil.", "Ces alertes aident à décider : la décision finale reste toujours la vôtre."],
      case_: "J'ai compris ces alertes" },
    { titre: "Respect et confidentialité", texte: "Les règles habituelles de la fédération s'appliquent aussi ici.",
      points: ["Ne partagez pas de données sensibles sur d'autres personnes sans leur accord.", "Un contenu généré par l'IA à partager publiquement doit être relu avant d'être diffusé."],
      case_: "J'ai compris et j'accepte ces règles" }
  ];

  function accepte() { try { return localStorage.getItem(CLE) === "1"; } catch (e) { return false; } }
  function marquerAccepte() { try { localStorage.setItem(CLE, "1"); } catch (e) { /* navigateur privé : revalidation à chaque session, tant pis */ } }

  var overlay = null;
  function construire(onFini) {
    var pas = 0;
    overlay = document.createElement("div");
    overlay.id = "charte-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Charte d'utilisation de ChatGDB");
    function rendre() {
      var e = ETAPES[pas], dernier = pas === ETAPES.length - 1;
      overlay.innerHTML =
        '<div class="charte-card" tabindex="-1">' +
        '<div class="charte-steps">' + ETAPES.map(function (_, i) { return '<i class="charte-dot' + (i === pas ? ' on' : i < pas ? ' done' : '') + '"></i>'; }).join("") + '</div>' +
        '<h2>' + esc(e.titre) + '</h2>' +
        '<p class="charte-txt">' + esc(e.texte) + '</p>' +
        (e.points && e.points.length ? '<ul class="charte-pts">' + e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>' : '') +
        '<label class="charte-ck"><input type="checkbox" id="charte-ck"><span></span>' + esc(e.case_) + '</label>' +
        '<div class="charte-foot">' +
        (pas > 0 ? '<button type="button" class="btn-ghost" id="charte-retour">Retour</button>' : '<span></span>') +
        '<button type="button" class="btn-primary" id="charte-suite" disabled>' + (dernier ? "Commencer" : "Suivant") + '</button>' +
        '</div></div>';
      var ck = overlay.querySelector("#charte-ck"), bt = overlay.querySelector("#charte-suite");
      ck.addEventListener("change", function () { bt.disabled = !ck.checked; });
      bt.addEventListener("click", function () {
        if (dernier) { marquerAccepte(); fermer(); onFini(); return; }
        pas++; rendre();
      });
      var retour = overlay.querySelector("#charte-retour"); if (retour) retour.addEventListener("click", function () { pas--; rendre(); });
      overlay.querySelector(".charte-card").focus();
    }
    rendre();
    return overlay;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fermer() { if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); overlay = null; }

  // Affiche la charte si elle n'est pas déjà acceptée, puis appelle onFini() (immédiatement si déjà acceptée).
  function verifier(onFini) {
    if (accepte()) { onFini(); return; }
    document.body.appendChild(construire(onFini));
  }
  window.GDBCharte = { accepte: accepte, verifier: verifier };
})();
