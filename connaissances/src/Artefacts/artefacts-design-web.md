---
id: artefacts-design-web
titre: Règles de design web pour les artefacts de ChatGDB
theme: Artefacts
type: synthese
sources:
  - titre: ui-ux-pro-max-skill (SKILL.md et references/quick-reference.md), licence MIT
    url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
mots_cles: design, typographie, espacement, couleur, contraste, mode sombre, accessibilité, responsive, polices, artefact, HTML
liens: app-chatgdb, artefacts-animation-web, artefacts-checklist
resume: Règles courtes de design pour une page HTML autonome générée par ChatGDB, tirées du skill ui-ux-pro-max (licence MIT) et complétées par des usages courants du web. Répond à « comment rendre un artefact lisible, accessible et propre sur téléphone et ordinateur ».
---

## Priorités (ordre du skill)
1. Accessibilité, 2. toucher et interaction, 3. performance, 4. cohérence de style, 5. mise en page responsive, 6. typographie et couleur, 7. animation, 8. formulaires. On ne sacrifie pas un niveau haut pour un niveau bas.

## Typographie
- Texte courant : 16 px minimum, jamais sous 12 px ; interligne de 1,5 à 1,75.
- Longueur de ligne : 65 à 75 caractères sur ordinateur, 35 à 60 sur mobile.
- Échelle d'exemple : 12 / 14 / 16 / 18 / 24 / 32 px.
- Poids : titres 600-700, texte 400, étiquettes 500.
- Polices : 1 ou 2 familles au plus (usage courant) ; prévoir une pile de secours système (usage courant) car une police externe peut ne pas se charger.

## Espacement
- Échelle par multiples de 4 ou 8 px. Page standard : 16 à 64 px ; aérée : 24 à 96 ; dense (tableau de bord) : 8 à 32.
- Cibles tactiles : 44 x 44 px, 8 px d'espace entre deux cibles ; 24 x 24 px est le minimum absolu sur le web (WCAG 2.2).
- Largeur maximale du conteneur centrée, en unités fluides plutôt qu'en px fixes.

## Couleurs, contrastes, thèmes
- Contraste 4,5:1 pour le texte normal, 3:1 pour le grand texte et les éléments d'interface.
- Définir des variables sémantiques (fond, texte, accent) au lieu de valeurs hexadécimales dans chaque composant.
- Le mode sombre a ses propres couleurs, à contrôler séparément ; ne pas simplement inverser. Fournir `prefers-color-scheme` (usage courant).
- Ne jamais donner une information par la couleur seule (ajouter icône ou texte).

## Accessibilité
- Focus clavier visible (anneau de 2 à 4 px), jamais supprimé.
- Texte alternatif sur les images, libellé sur les boutons-icônes, navigation au clavier.
- Libellés de formulaire visibles ; le « placeholder » ne remplace pas un libellé ; erreur près du champ.

## Responsive
- Mobile d'abord, balise viewport, aucun défilement horizontal, zoom jamais bloqué.
- Points de rupture d'exemple : 375 / 768 / 1024 / 1440 px.

## À éviter
- Emoji comme icônes (préférer SVG), mélange de styles, gris sur gris, texte minuscule.
- Effets de survol comme seul accès à une fonction (inutilisable au toucher).
- Images lourdes sans réserve de place (décalage de mise en page).

## Non retenu
- Les 74 associations de polices et le moteur de recherche `search.py` du skill : non lus, hors sujet pour des pages autonomes.

## Questions auxquelles la fiche répond
- Quelle taille de texte et quel interligne choisir ?
- Quel contraste minimal respecter, et comment gérer le mode sombre ?
- Quelle taille donner aux boutons sur téléphone ?
- Qu'est-ce qui rend un artefact peu accessible ?
