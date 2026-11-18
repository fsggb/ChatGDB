---
id: artefacts-checklist
titre: Liste de contrôle avant de livrer un artefact
theme: Artefacts
type: synthese
sources:
  - titre: ui-ux-pro-max-skill, licence MIT
    url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
  - titre: patricio0312rev/skills (framer-motion-animator), licence MIT
    url: https://github.com/patricio0312rev/skills
mots_cles: checklist, contrôle, artefact, livraison, accessibilité, animation, responsive
liens: app-chatgdb, artefacts-design-web, artefacts-animation-web
resume: Douze points vérifiables à passer avant de remettre une page HTML générée, issus des règles de design et d'animation de la base.
---

## À vérifier
1. Page autonome : aucune bibliothèque externe supposée disponible (usage courant).
2. Texte courant à 16 px ou plus, interligne 1,5 environ.
3. Contraste de 4,5:1 pour le texte, 3:1 pour le grand texte.
4. Couleurs en variables ; mode sombre contrôlé (usage courant).
5. Aucune information portée par la couleur seule.
6. Boutons et liens d'au moins 44 x 44 px sur mobile, 8 px d'écart.
7. Focus clavier visible, tout utilisable au clavier.
8. Images avec texte alternatif, boutons-icônes avec libellé.
9. Pas de défilement horizontal à 375 px de large ; zoom non bloqué.
10. Animations limitées à `transform` et `opacity`, 1 à 2 éléments animés par vue.
11. `prefers-reduced-motion` géré.
12. Rien d'essentiel caché derrière un survol ; icônes en SVG, pas en emoji.
13. Ouvrir la page à vide : aucune erreur dans la console (usage courant).

## Questions auxquelles la fiche répond
- Que vérifier avant de livrer une page ?
