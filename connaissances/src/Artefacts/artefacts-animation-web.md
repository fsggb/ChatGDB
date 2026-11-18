---
id: artefacts-animation-web
titre: Règles d'animation web et équivalents CSS natifs
theme: Artefacts
type: synthese
sources:
  - titre: ui-ux-pro-max-skill (SKILL.md et references/quick-reference.md), licence MIT
    url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
  - titre: patricio0312rev/skills, frontend/framer-motion-animator/SKILL.md, licence MIT
    url: https://github.com/patricio0312rev/skills
mots_cles: animation, Framer Motion, transition, ressort, prefers-reduced-motion, transform, opacity, stagger, défilement, IntersectionObserver, CSS
liens: app-chatgdb, artefacts-design-web, artefacts-checklist
resume: Quand animer, quelles durées, quelles propriétés, comment respecter la préférence de mouvement réduit, et comment traduire les idées de Framer Motion en CSS et JavaScript natifs pour des pages HTML autonomes.
---

## Quand animer, quand s'abstenir
- Animer pour expliquer un changement (apparition, état, continuité), pas pour décorer.
- 1 à 2 éléments animés au plus par vue. Pas d'animation en boucle sur du texte à lire.
- Retour visuel d'un appui en moins de 100 ms.
- Respecter `prefers-reduced-motion` : réduire ou supprimer les mouvements.

## Durées et courbes
- Appui, survol : 100 à 150 ms. Transition standard : 200 à 300 ms. Entrée de bloc : environ 500 ms. Apparition au défilement : environ 600 ms.
- Sortie plus rapide que l'entrée (60 à 70 % de sa durée).
- Une durée unique pour tout est un défaut. Courbe douce d'exemple : `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Liste qui apparaît : décalage de 30 à 50 ms par élément (le skill Framer Motion utilise 50 à 100 ms).
- Appui : échelle 0,95 ; survol : 1,05. Entrée type : opacité 0 vers 1 et décalage de 20 px.

## Performance
- N'animer que `transform` et `opacity`. Éviter `width`, `height`, `top`, `left`.
- Budget d'environ 16 ms par image.

## Framer Motion simplement
Bibliothèque React : on décrit l'état de départ (`initial`), d'arrivée (`animate`), de sortie (`exit`). Les « variants » sont des états nommés propagés aux enfants, `staggerChildren` les décale, `whileHover` et `whileTap` gèrent survol et appui, `useInView` déclenche au défilement, les « ressorts » donnent un mouvement naturel (exemple du skill : rigidité 300, amortissement 24).
Disponibilité : les artefacts sont des pages autonomes ; une bibliothèque externe n'y est pas toujours chargeable et Framer Motion demande React. Ne pas la supposer disponible ; préférer le natif.

## Équivalents natifs
- Entrée : classe CSS `.entree { opacity:0; transform:translateY(20px); transition: opacity .5s, transform .5s }` puis ajout de `.visible` en JS.
- Décalage de liste : `style="--i:3"` et `transition-delay: calc(var(--i) * 50ms)`.
- Survol et appui : `:hover { transform: scale(1.05) }`, `:active { transform: scale(.95) }`.
- Défilement : `IntersectionObserver` (seuil, marge négative de 100 px) qui ajoute `.visible`, avec `unobserve` pour jouer une seule fois (équivalent de `once`).
- Ressort : `transition-timing-function: linear(...)` ou courbe `cubic-bezier(.34,1.56,.64,1)` pour un léger dépassement (usage courant).
- Sortie : transition puis retrait de l'élément sur `transitionend`.
- Mouvement réduit :
  `@media (prefers-reduced-motion: reduce){ *{ animation-duration:.01ms !important; transition-duration:.01ms !important } }` (usage courant).

## Non retenu
- Installation npm, `layoutId`, parallaxe et glisser-déposer : dépendent de React ou sont trop lourds pour un artefact. Les commandes d'installation du skill ne sont jamais exécutées.

## Questions auxquelles la fiche répond
- Quelle durée pour un survol, une entrée, une sortie ?
- Comment faire apparaître des éléments au défilement sans bibliothèque ?
- Comment respecter les utilisateurs sensibles au mouvement ?
