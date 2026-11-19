---
id: comp-couleur-et-identite-fsggb
titre: Couleur et identité visuelle FSGGB (palette, contrastes, écran et impression)
theme: Compétences
type: synthese
sources:
  - titre: WCAG 2.1, critères de contraste (rapports 4,5:1 et 3:1) et formule de luminance relative
  - titre: Théorie de la couleur appliquée au graphisme (teinte, saturation, luminosité, harmonies, règle 60-30-10)
  - titre: Pratiques de préparation à l'impression (RVB, CMJN, encrage total, noir riche)
  - titre: Variables de couleur de l'interface ScoutHub (hub.css)
mots_cles: couleur, palette, identité visuelle, FSGGB, bleu nuit, or, 000761, c6a24e, fafafc, 12142b, contraste, WCAG, accessibilité, daltonisme, RVB, CMJN, noir riche, encrage, photocopie, noir et blanc, économie d'encre, harmonie, 60-30-10, teinte, saturation, luminosité, dégradé, ombre, bandeau, logo, marge de protection, branches, couleurs de groupe, thème, design.themeColors, pageLayout.themeColors, shape.fill, format.color, home.fillColor
liens: comp-mise-en-page-principes, comp-polices-et-hierarchie, comp-affiche-flyer-invitation, comp-photo-retouche-et-export, comp-powerpoint-presentation-elegante, comp-excel-tableaux-elegants, comp-pdf-export-accessibilite, app-word, app-excel, app-powerpoint, app-illustrator
resume: Comment utiliser la couleur sobrement et correctement dans les documents de la fédération : théorie utile, palette bleu nuit et or déclinée en teintes, gris et couleurs d'état, paires de contraste calculées, différences écran et impression, daltonisme, couleurs de branches, bandeaux types et commandes natives pour appliquer couleurs et thèmes dans Word, Excel et PowerPoint.
---

## Principe : une couleur qui travaille

Dans un document de fédération, la couleur a **trois missions** : identifier (on reconnaît la FSGGB), hiérarchiser (le regard va à l'important) et organiser (on distingue des familles : branches, statuts). Elle n'a **jamais** pour mission de décorer. Règle de sobriété : un bleu profond, un or discret, du blanc, du gris. Si l'on hésite à ajouter une couleur, on n'en ajoute pas. Voir **comp-mise-en-page-principes** pour la place du blanc et **comp-polices-et-hierarchie** pour le texte.

## Théorie utile

Une couleur se décrit par trois variables, plus simples à manier que les valeurs RVB :

| Variable | Sens | Effet |
|---|---|---|
| **Teinte** (angle de 0 à 360°) | la « famille » : rouge 0°, jaune 60°, vert 120°, cyan 180°, bleu 240°, magenta 300° | l'identité |
| **Saturation** (0 à 100 %) | pureté ou intensité | haute = vive et agressive ; basse = sobre, grisée |
| **Luminosité** (0 à 100 %) | clair ou foncé | détermine le contraste et la lisibilité |

Le bleu nuit FSGGB #000761 a une teinte de 236°, une saturation de 100 % et une luminosité de 19 % : un bleu très foncé, presque une encre. L'or #c6a24e (teinte 42°, saturation 51 %, luminosité 54 %) est un jaune-brun adouci, chaud, nettement moins saturé qu'un jaune vif : c'est ce qui le rend « noble » et non criard.

**Retenir :** pour contraster, jouer sur la **luminosité** plus que sur la teinte. Deux couleurs de teintes différentes mais de même luminosité (un rouge et un vert) sont illisibles ensemble pour beaucoup de lecteurs (voir daltonisme).

### Harmonies

| Harmonie | Principe | Exemple FSGGB | Usage |
|---|---|---|---|
| **Monochrome** | une teinte, plusieurs luminosités | bleu nuit, bleu moyen #666aa0, bleu pâle #e6e6ef | documents sérieux, tableaux, graphiques sobres |
| **Analogue** | teintes voisines (± 30°) | bleu nuit, bleu moyen #0b5cab, sarcelle | variété douce sans rupture |
| **Complémentaire** | teintes opposées (180°) | bleu nuit (236°) et or (42° : proche du jaune-orangé, quasi opposé) | accent fort : bandeau + filet, titre + puce |
| **Triadique** | trois teintes à 120° | à éviter pour la fédération | trop vif |

La paire bleu nuit et or est naturellement **complémentaire** : le bleu recule et se lit comme la masse, l'or avance et attire l'œil comme point focal. C'est pourquoi l'or est réservé aux **accents**.

### Règle 60-30-10

Répartir les surfaces en trois : **60 %** de couleur dominante (le fond : blanc cassé #fafafc), **30 %** de couleur secondaire (le bleu nuit : titres, bandeaux, texte important), **10 %** d'accent (l'or : filets, puces, un chiffre, un bouton). Sur une page de texte courant, le texte lui-même (#12142b) compte comme du neutre. Un document qui utilise plus de 10 % d'or paraît clinquant ; sous 3 %, il paraît triste : viser 5 à 8 %.

## La palette FSGGB

Les valeurs principales sont celles de l'interface ScoutHub (`hub.css`). Les équivalents CMJN sont **approximatifs** (conversion simple, valable pour un premier jet) : l'imprimeur doit les valider avec un profil de couleur (voir la section impression).

### Couleurs de marque

| Rôle | Nom | HEX | RVB | CMJN approx. (%) | Usage |
|---|---|---|---|---|---|
| Principale | Bleu nuit | #000761 | 0, 7, 97 | 100, 93, 0, 62 | titres, bandeaux, logo, liens, en-têtes de tableau |
| Principale variante | Bleu nuit clair | #1a2080 | 26, 32, 128 | 80, 75, 0, 50 | survol, second plan sur fond foncé |
| Accent | Or | #c6a24e | 198, 162, 78 | 0, 18, 61, 22 | filets, puces, initiales, étoiles ; jamais texte sur clair |
| Accent foncé | Or profond | #a8863a | 168, 134, 58 | 0, 20, 65, 34 | texte d'accent en grand corps uniquement (3,3:1) |
| Accent texte | Or bronze | #7a5f1f | 122, 95, 31 | 0, 22, 75, 52 | texte d'accent en petit corps sur clair (5,8:1) |
| Accent clair | Or clair | #e6c97a | 230, 201, 122 | 0, 13, 47, 10 | texte d'accent sur bleu nuit (10,8:1) |
| Fond doux | Crème or | #f7f0dc | 247, 240, 220 | 0, 3, 11, 3 | encadrés, fond d'une ligne de tableau |
| Fond de page | Blanc cassé | #fafafc | 250, 250, 252 | 1, 1, 0, 1 | fond d'écran ; en impression, laisser le papier blanc |
| Fond bleuté | Bleu givre | #eef0fb | 238, 240, 251 | 5, 4, 0, 2 | cartes, zébrures, bandeaux légers |
| Texte | Encre | #12142b | 18, 20, 43 | 58, 53, 0, 83 | texte courant |

### Tons du bleu nuit (mélange avec le blanc)

| Valeur | HEX | Usage |
|---|---|---|
| 100 % | #000761 | texte, bandeau |
| 80 % | #333981 | titres secondaires (contraste 9,9:1 sur #fafafc) |
| 60 % | #666aa0 | pictogrammes, éléments décoratifs (4,9:1) |
| 40 % | #999cc0 | filets, éléments d'arrière-plan (2,6:1 : jamais de texte) |
| 20 % | #cccddf | fonds de séparation |
| 10 % | #e6e6ef | zébrures, panneaux |

### Tons de l'or

| Valeur | HEX | Usage |
|---|---|---|
| 100 % | #c6a24e | filets, puces |
| 80 % | #d1b571 | accents sur fond foncé |
| 40 % | #e8dab8 | filet fin, cadre léger |
| 20 % | #f4ecdc | fond d'encadré |
| 10 % | #f9f6ed | fond très discret |

### Gris neutres (à légère teinte bleue)

| Rôle | HEX | RVB | Usage |
|---|---|---|---|
| Gris texte secondaire | #555a72 | 85, 90, 114 | légendes, notes (6,5:1 sur #fafafc) |
| Gris atténué | #6b6f85 | 107, 111, 133 | informations tertiaires (4,75:1 sur #fafafc ; **4,4:1 sur #eef0fb : insuffisant**, ne pas l'y utiliser) |
| Gris filet | #cfd3e2 | 207, 211, 226 | filets de tableau (jamais de texte) |
| Gris fin | #e2e4ee | 226, 228, 238 | filets très discrets, bordures de cartes |

### Couleurs d'état sobres

| État | Couleur | HEX | Fond associé | Contraste du texte sur #fafafc |
|---|---|---|---|---|
| Succès, validé | vert sapin | #1a7f37 | #dff3e4 | 4,9:1 ; sur le fond clair associé 4,4:1 : prendre du texte #12142b dessus |
| Attention | ambre brûlé | #b45309 | #fff4e0 | 4,8:1 (4,6:1 sur le fond associé) |
| Erreur, danger, sécurité | rouge brique | #c0262d | #fdecec | 5,7:1 (5,2:1 sur son fond) |
| Information | bleu franc | #0b5cab | #e3effa | 6,4:1 |

Règle : **ne jamais exprimer un état par la couleur seule** ; ajouter un mot, un symbole (« ✓ », « ! ») ou une forme (voir daltonisme).

## Contraste et accessibilité

Le rapport de contraste se calcule entre la **luminance relative** du texte et celle du fond : (L1 + 0,05) / (L2 + 0,05), L1 étant la plus claire. Les seuils de la norme WCAG 2.1 niveau AA :

| Cas | Seuil minimal |
|---|---|
| Texte courant (moins de 18 pt, ou moins de 14 pt gras) | **4,5:1** |
| Grand texte (18 pt et plus, ou 14 pt gras et plus) | **3:1** |
| Éléments graphiques et contrôles essentiels (icônes, bordures de champs) | **3:1** |
| Niveau AAA (confort élevé) | 7:1 (4,5:1 pour grand texte) |

### Paires validées (calculées pour cette fiche)

| Texte | Fond | Rapport | Verdict |
|---|---|---|---|
| Bleu nuit #000761 | Blanc cassé #fafafc | 16,8:1 | AAA : titres et corps |
| Bleu nuit #000761 | Blanc #ffffff | 17,5:1 | AAA |
| Encre #12142b | #fafafc | 17,4:1 | AAA : texte courant |
| Encre #12142b | Crème #f7f0dc | 15,9:1 | AAA |
| Encre #12142b | Bleu givre #eef0fb | 15,9:1 | AAA |
| Blanc cassé #fafafc | Bleu nuit #000761 | 16,8:1 | AAA : texte sur bandeau |
| Crème #f7f0dc | Bleu nuit #000761 | 15,3:1 | AAA |
| Or #c6a24e | Bleu nuit #000761 | 7,2:1 | AAA : filet ou titre or sur fond foncé |
| Or clair #e6c97a | Bleu nuit #000761 | 10,8:1 | AAA |
| Blanc #ffffff | Bleu nuit clair #1a2080 | 13,4:1 | AAA |
| Encre #12142b | Or #c6a24e | 7,5:1 | AAA : texte foncé sur aplat or |
| Bleu nuit #000761 | Or #c6a24e | 7,2:1 | AAA |
| Gris #555a72 | #fafafc | 6,5:1 | AA : légendes |
| Gris #6b6f85 | #fafafc | 4,75:1 | AA limite : seulement 9 à 10 pt sur fond blanc |
| Or bronze #7a5f1f | #fafafc | 5,8:1 | AA : mots d'accent en petit corps |
| Or bronze #7a5f1f | Crème #f7f0dc | 5,3:1 | AA |
| Or profond #a8863a | #fafafc | 3,3:1 | **grand texte uniquement** (≥ 18 pt) |
| Rouge #c0262d | #fafafc | 5,7:1 | AA |

### Paires refusées

| Texte | Fond | Rapport | Pourquoi |
|---|---|---|---|
| Or #c6a24e | #fafafc | 2,3:1 | insuffisant, même en grand titre : l'or est un trait, pas un texte |
| Or #c6a24e | blanc | 2,4:1 | idem |
| Bleu 40 % #999cc0 | #fafafc | 2,6:1 | décor seulement |
| Gris #6b6f85 | Bleu givre #eef0fb | 4,4:1 | juste sous le seuil |
| Gris filet #cfd3e2 | #fafafc | 1,4:1 | filet, jamais texte |
| Blanc | Or #c6a24e | 2,4:1 | texte blanc sur aplat or : à proscrire (utiliser texte foncé) |

**Méthode** : pour toute nouvelle paire, calculer le rapport ; si moins de 4,5:1, assombrir le texte ou éclaircir le fond (changer la luminosité, pas la teinte) ; vérifier les états au survol et le texte posé sur une image (voir voile ci-dessous). Ne jamais se fier à l'œil seul : l'écran du concepteur ment.

## Les couleurs de la liturgie et du scoutisme

La fédération est catholique : les couleurs liturgiques (blanc ou or pour les grandes fêtes, rouge pour la Pentecôte et les martyrs, vert pour le temps ordinaire, violet pour l'Avent et le Carême, rose pour les dimanches Gaudete et Laetare) peuvent habiller discrètement un livret de messe, un programme de célébration ou un chant, **sans** couvrir la page.

Règles de respect :
- Utiliser la couleur liturgique du jour en **filet, en bandeau étroit ou en initiale**, jamais en aplat plein page ni sur le texte de la prière.
- Choisir des tons profonds et assourdis (violet #4b2e83, vert #2f6b3a, rouge #8c1c24) et vérifier le contraste (texte blanc dessus : violet 10,4:1, rouge 9,1:1, vert 6,4:1, calculés ; viser au moins 4,5:1).
- Pas de couleurs fluo ni de dégradés pour tout ce qui concerne la messe, l'adoration, la prière ou les sacrements.
- Pour la fête de la Saint-Georges, le rouge et le blanc de la croix de saint Georges se limitent à un détail graphique.
- Les couleurs des branches (voir ci-dessous) ne s'imposent pas aux documents liturgiques : la sobriété prévaut.

Côté scoutisme : insignes, foulards et branches ont leurs couleurs ; les reproduire fidèlement sans les modifier. Ne jamais reproduire de logo d'une autre association ou fédération sans autorisation écrite.

## Écran et impression

| | Écran | Papier |
|---|---|---|
| Mode | RVB, lumière ajoutée (fond noir, 3 primaires lumineuses) | CMJN, encre soustractive (fond blanc, 4 encres) |
| Gamut | large (très saturé) | plus étroit : les bleus profonds et verts vifs sont ternes |
| Rendu du bleu nuit | #000761 : profond et saturé | 100/93/0/62 : proche, mais plus plat ; vérifier l'épreuve |
| Fond clair | #fafafc : légèrement bleuté | papier blanc : ne pas imprimer ce fond (gaspillage et bords blancs irréguliers) |

Règles pratiques :
- Composer en **RVB** (Word, PowerPoint, Excel, web) ; convertir en CMJN seulement pour une impression professionnelle (voir **comp-pdf-export-accessibilite** et **comp-photo-retouche-et-export**). Dans Illustrator, la commande `file.documentColorMode` `{"mode":"cmyk","convert":true}` convertit le document, `swatch.new` crée des nuances (voir section outils).
- **Noir de texte** : en CMJN, utiliser du noir pur **K 100** (ou le bleu-noir de la marque en CMJN 58/53/0/83) pour les petits textes (moins de 14 pt) : un noir composé de quatre encres bave au moindre décalage de repérage.
- **Noir riche** : pour de grands aplats noirs, C 60 / M 40 / J 40 / N 100 donne une profondeur sans dépasser l'**encrage total** (somme des quatre encres) de **240 à 300 %** selon le papier (sur papier non couché de bureau, 240 % ; sur papier couché, 300 %). Le bleu nuit CMJN 100/93/0/62 totalise 255 % : acceptable en aplat sur papier couché, à limiter sur papier ordinaire.
- **Bords** : l'impression de bureau ne peut pas aller au bord de la feuille (marge de 4 à 5 mm) : pas d'aplat pleine page.
- **Fond de page** : ne pas colorer le fond d'un document destiné à être imprimé ; un fond de couleur consomme jusqu'à 10 fois plus d'encre et gondole le papier. Utiliser des bandeaux de petite surface.
- **Économie d'encre** : préférer les filets et les fonds très clairs (#eef0fb) aux aplats ; texte foncé sur fond blanc ; éviter les images en fond.

### Impression noir et blanc et photocopie

Beaucoup de documents de camp seront photocopiés. Vérifier :
1. En niveaux de gris, tous les textes restent lisibles (le bleu nuit devient un gris très foncé, l'or un gris moyen, environ 35 % de noir).
2. **Ne pas distinguer par la couleur seule** (rouge et vert deviennent identiques) : ajouter une forme, une étiquette, un motif ou un symbole.
3. Les fonds clairs (#eef0fb, #f7f0dc) disparaissent ou tournent au gris sale à la photocopie : n'y placer que du texte très foncé et prévoir un filet autour.
4. Les filets fins gris (< 0,5 pt, #cfd3e2) disparaissent : en documents photocopiés, utiliser 0,75 pt et un gris plus foncé #6b6f85.
5. Test rapide : aperçu en niveaux de gris, ou imprimer en « noir et blanc » une fois avant de tirer 50 exemplaires.

## Daltonisme

Environ 8 % des hommes et 0,5 % des femmes perçoivent mal le rouge et le vert. Règles :
- **Ne jamais coder une information par rouge contre vert seuls** ; ajouter une icône, une lettre ou un libellé (« Validé », « À faire »).
- Opposer des **luminosités** différentes (un clair et un foncé) plutôt que des teintes voisines.
- Paires sûres : bleu #0b5cab contre orange #b45309 ; bleu nuit contre or ; foncé contre clair. Paires dangereuses : rouge et vert, vert et marron, bleu et violet de même luminosité.
- Pour un graphique à plusieurs séries : au plus 4 couleurs à fort écart de luminosité (bleu nuit #000761, bleu moyen #666aa0, or #c6a24e, gris #6b6f85) et des étiquettes directes plutôt qu'une légende à retrouver.
- Vérifier avec un simulateur ou en niveaux de gris : si les séries se confondent en gris, elles se confondront pour un daltonien.

## Fonds foncés

- Texte clair sur fond foncé : **blanc cassé #fafafc ou crème #f7f0dc**, jamais du blanc pur #ffffff sur du bleu très saturé en petit corps (halo). Compenser en augmentant l'interligne de 5 % et le corps de 0,5 pt (le texte clair sur fond foncé paraît plus fin).
- Éviter les fonds foncés pour un texte long (plus de 6 lignes) : fatigue de lecture, mauvaise impression, encre.
- Fond bleu nuit : filets et titres or #c6a24e ou or clair #e6c97a ; texte courant crème ; liens en or clair.
- Mode sombre à l'écran : fond #12142b (non #000000), texte #fafafc, accents or #e6c97a ; réduire la saturation des couleurs d'état.

## Dégradés et ombres : modération

- **Dégradé** : réservé à un grand bandeau ou à une image de couverture, entre deux nuances proches (bleu nuit #000761 vers #1a2080) ; jamais d'arc-en-ciel ; pas dans les documents bureautiques courants ; peu fiable à l'impression de bureau (bandes visibles).
- **Ombre** : légère et diffuse (décalage 0 à 2 pt, flou 6 à 8 pt, opacité 15 à 20 %) pour détacher une carte ; jamais d'ombre dure ni sur du texte. Aucune ombre dans un document destiné à la photocopie.
- **Transparence** : préférer une couleur pleine déjà éclaircie à une transparence (comportement variable à l'export PDF).
- **Effets** (contours lumineux, biseaux, reflets) : à proscrire.

## Tableaux et graphiques colorés

- **Tableau** : en-tête bleu nuit avec texte #fafafc gras ; zébrures #f4f5fb ou #eef0fb ; filets #cfd3e2 ; ligne de total en gras avec filet bleu nuit ; une seule cellule en accent (or clair #f7f0dc) pour la valeur à retenir. Pas de couleur par colonne.
- **Mise en évidence** : une seule couleur d'alerte (rouge brique #c0262d en texte ou ambre #b45309) + symbole ; pas d'arc-en-ciel conditionnel.
- **Graphique** : une couleur d'accent pour la série à commenter (bleu nuit), les autres en gris #cfd3e2 ; pas de 3D ; étiquettes directes ; axes en #555a72 ; quadrillage #e2e4ee de 0,5 pt.
- **Palette de 6 couleurs de graphique** (monochrome étendue + or) : #000761, #666aa0, #c6a24e, #6b6f85, #0b5cab, #a8863a ; pour plus de séries, distinguer par un motif ou par des graphiques séparés.
- Séquentiel (valeurs continues) : du #eef0fb au #000761 ; divergent : du bleu #0b5cab au crème #f7f0dc à l'ambre #b45309 en passant par un centre neutre.

## Couleurs de branches ou de groupes : une méthode

Chaque branche d'une unité (par exemple louveteaux, éclaireurs, pionniers, compagnons, ou toute organisation propre au groupe) peut avoir un repère couleur dans les documents. Pour ne pas casser l'identité :

1. **Réutiliser les couleurs officielles** de la branche si la fédération en a fixé ; sinon en définir une sur le même principe pour chacune.
2. **Fixer la luminosité et la saturation** communes (par exemple luminosité 35 à 40 %, saturation 55 à 65 %) pour que les teintes soient d'une même famille : un jeu de 4 à 6 teintes à 60° d'écart ou plus. Exemples de tons assourdis compatibles avec la palette : bleu #0b5cab, vert #2f6b3a, ambre #b45309, rouge #8c1c24, violet #4b2e83, sarcelle #1f6f78. Texte blanc dessus (calculé) : 6,7:1, 6,4:1, 5,0:1, 9,1:1, 10,4:1 et 5,8:1.
3. **Vérifier chaque couleur** : texte blanc dessus ≥ 4,5:1 ; couleur en bandeau sur #fafafc ≥ 3:1.
4. **Utiliser la couleur de branche seulement comme repère** (bandeau étroit de 8 à 12 mm, pastille, filet vertical), pas comme couleur de texte ni de fond de page ; le bleu nuit et l'or de la fédération restent dominants.
5. **Doubler la couleur d'un nom ou d'une icône** : jamais seule (photocopie, daltonisme).
6. Tenir un **tableau de correspondance** (branche, nom, HEX, RVB, CMJN, ordre) et le coller en tête du modèle.

## Logo et marges de protection

- Le logo n'est jamais redessiné, étiré, tourné, recoloré hors de ses versions officielles (couleur, bleu nuit seul, blanc sur fond foncé, noir et blanc).
- **Zone de protection** : un espace vide autour du logo au moins égal à la hauteur d'une lettre majuscule de son nom (ou à 25 % de sa largeur) ; aucun texte ni image dans cet espace.
- **Taille minimale** : 15 mm de large en impression, 80 px à l'écran ; en dessous, passer à la version simplifiée.
- Position : en haut à gauche d'un document ou centré en couverture ; **une seule occurrence** par page.
- **Fonds** : version couleur sur fond clair ; version blanche (ou crème) sur bleu nuit ; ne jamais placer le logo sur une photo chargée sans voile.
- Format : vectoriel (SVG, PDF, AI) pour l'impression ; PNG à 300 ppp avec fond transparent en dernier recours.
- Vérifier les droits : ne reprendre que des logos dont la fédération détient les droits ou dont l'usage est autorisé.

## Typographie de marque

- **Titres** : une serif lisible (Georgia, Source Serif 4) en bleu nuit ; **texte** : sans empattement (Inter, avec Segoe UI, Arial en repli) en #12142b. Voir **comp-polices-et-hierarchie**.
- Filets ou initiales en or ; petites capitales espacées (+ 5 à 8 %) pour les en-têtes et surtitres.
- Une seule couleur de texte courant ; le bleu nuit peut aussi servir au texte important.
- Éviter l'italique sur fond foncé en petit corps ; éviter le texte souligné pour autre chose que des liens.

## Modèles de bandeaux

Quatre bandeaux types (largeur de la zone de texte ; marges internes 4 mm) :

| Bandeau | Hauteur | Fond | Texte | Filet | Usage |
|---|---|---|---|---|---|
| Titre de document | 18 à 22 mm | bleu nuit #000761 | titre 20 pt serif #fafafc ; sous-titre 11 pt or clair #e6c97a | filet or 1,5 pt sous le bandeau | couverture de rapport, fiche |
| Section | 9 à 11 mm | bleu givre #eef0fb | 13 pt gras bleu nuit | filet or 2 pt à gauche (vertical) | titre de partie |
| À retenir | auto, marge 4 mm | crème #f7f0dc | 10,5 pt #12142b ; mot-clé en gras | filet or 2 pt à gauche | encadré de synthèse |
| Alerte sécurité | auto, marge 4 mm | #fdecec | 10,5 pt #12142b, mot « Sécurité » en gras #c0262d | filet rouge #c0262d 2 pt à gauche | consigne importante (dans les fiches d'activité) |

## Avec les outils de ScoutHub

Les valeurs de couleur sont des chaînes hexadécimales ; **le format varie selon l'application** (vérifier la liste avec `api_commandes`).

### Word (identifiants vérifiés)

| Besoin | Commande et paramètres |
|---|---|
| Couleur du texte | `format.color` `{"color":"000761"}` (RRGGBB sans #, ou `"auto"`) |
| Surlignage de caractères | `format.highlight` `{"color":"yellow"}` (noms fixes) ; ou fond personnalisé `format.shading` `{"color":"F7F0DC"}` |
| Fond de paragraphe | `para.shading` `{"color":"EEF0FB","paragraph":true}` |
| Filet de paragraphe | `para.borders` `{"kind":"bottom","width":1.5,"color":"C6A24E"}` |
| Fond de tableau ou de cellule | `table.shading` `{"color":"000761"}` ; bordures `table.borders` `{"kind":"all","width":0.5,"color":"CFD3E2"}` |
| Forme ou encadré | `shape.fill` `{"color":"F7F0DC"}` ; `insert.shape` `{"kind":"rectangle","width":…,"height":…,"fill":"000761","stroke":"C6A24E"}` |
| Couleur de page | `design.pageColor` `{"color":"FAFAFC"}` (à éviter à l'impression) |
| Bordure de page | `design.pageBorders` `{"kind":"box","width":1,"color":"000761"}` |
| Thème, polices de thème | `design.themes` (liste), `design.theme` `{"name":"…"}`, `design.themeFonts` `{"heading":"Georgia","body":"Inter"}` |
| Couleurs de thème | `design.themeColors` (sans paramètre : ouvre le choix) ; pas de commande pour fixer les douze couleurs en JSON dans Word |
| Jeu de styles | `design.styleSet` `{"name":"default|basic|lines|shaded|casual|centered|minimalist|title"}` |
| Styles | `styles.modify` `{"style":"…","chr":{…},"para":{…}}` : modifier une fois le style de titre plutôt que colorer chaque titre |

Séquence : bandeau de titre en Word (paragraphe bleu nuit à texte clair, filet or).
```
[
 {"commande":"select.paragraph","parametres":{}},
 {"commande":"para.shading","parametres":{"color":"000761","paragraph":true}},
 {"commande":"format.color","parametres":{"color":"FAFAFC"}},
 {"commande":"format.size","parametres":{"size":20}},
 {"commande":"format.bold","parametres":{"value":true}},
 {"commande":"para.borders","parametres":{"kind":"bottom","width":1.5,"color":"C6A24E"}}
]
```

### Excel (identifiants vérifiés)

| Besoin | Commande et paramètres |
|---|---|
| Couleur du texte | `home.fontColor` `{"range":"A1:D1","color":"#FAFAFC"}` ; aussi `{"theme":4,"tint":-0.25}` |
| Fond de cellules | `home.fillColor` `{"range":"A1:D1","color":"#000761"}` ou `"none"` |
| Couleur d'onglet | `sheet.tabColor` `{"color":"#000761"}` |
| Mise en forme conditionnelle | `home.conditionalFormat` `{"range":"…","rule":{"type":"cellIs|colorScale|dataBar|iconSet|…"}}` |
| Thème du classeur | `pageLayout.theme` `{"name":"Craft|Slate|Meadow|Ember|Ocean|Orchid|Graphite","colors":[12 hex],"majorFont":"Georgia","minorFont":"Inter"}` |
| Couleurs de thème | `pageLayout.themeColors` `{"name":"…"}` ou `{"colors":[12 hex]}` |
| Polices de thème | `pageLayout.themeFonts` `{"major":"Georgia","minor":"Inter"}` |
| Couleurs de graphique | `chart.changeColors` `{"palette":"monochrome"}` ou `{"colors":["#000761","#666aa0","#c6a24e"]}` ; `chart.shapeFill` `{"series":0,"color":"#000761"}` |

Séquence : en-tête de tableau Excel aux couleurs de la fédération.
```
[
 {"commande":"home.fillColor","parametres":{"range":"A1:E1","color":"#000761"}},
 {"commande":"home.fontColor","parametres":{"range":"A1:E1","color":"#FAFAFC"}},
 {"commande":"home.fillColor","parametres":{"range":"A3:E3","color":"#EEF0FB"}},
 {"commande":"sheet.tabColor","parametres":{"color":"#C6A24E"}}
]
```
Pour douze couleurs de thème, l'ordre est celui de la structure de thème (voir `pageLayout.themeColors`) : fournir bleu nuit, or, fond, texte puis neutres ; vérifier le résultat avec une lecture d'état. Voir **comp-excel-tableaux-elegants**.

### PowerPoint (identifiants vérifiés)

| Besoin | Commande et paramètres |
|---|---|
| Couleurs de thème | `design.colors` `{"colors":{"dk1":"#12142B","lt1":"#FAFAFC","dk2":"#000761","lt2":"#F7F0DC","accent1":"#000761","accent2":"#C6A24E","accent3":"#666AA0","accent4":"#0B5CAB","accent5":"#6B6F85","accent6":"#B45309","hlink":"#0B5CAB","folHlink":"#555A72"}}` |
| Polices de thème | `design.fonts` `{"major":"Georgia","minor":"Inter"}` |
| Fond de diapositive | `design.background` `{"color":"#FAFAFC","all":true}` |
| Remplissage de forme | `shape.fill` `{"color":"#000761"}` ou `{"gradient":{"stops":[[0,"#000761"],[1,"#1A2080"]],"kind":"linear","angle":90}}` |
| Contour | `shape.line` `{"color":"#C6A24E","width":1.5}` |
| Couleur du texte | `format.color` `{"color":"#FAFAFC"}` ou `accent1` |
| Effets (ombre) | `shape.effects` `{"shadow":{"color":"#000761","blur":8,"dist":1,"dir":90}}` : à réserver aux cartes (et faible opacité) |
| Variantes de thème | `design.variants` ; `design.themes` (galerie) |

Séquence : régler le thème de la fédération avant de créer les diapositives (`design.colors` puis `design.fonts`) ; les formes prennent alors les couleurs d'accent automatiquement (`format.color` avec `accent2`). Voir **comp-powerpoint-presentation-elegante**.

### Illustrator (VectorCraft)

`paint.setFill` `{"color":"#000761"}` ou `{"c":…,"m":…,"y":…,"k":…}` pour du CMJN ; `swatch.new` `{"name":"Bleu nuit FSGGB","color":"#000761"}` ; `swatch.newGroup` `{"name":"FSGGB","colors":["#000761","#c6a24e"]}` ; `file.documentColorMode` `{"mode":"cmyk","convert":true}`.

## Liste de contrôle avant de livrer

1. La palette se limite au bleu nuit, à l'or, au fond clair, au texte #12142b et à un ou deux gris.
2. La règle 60-30-10 est respectée : l'or reste sous 10 % de la surface.
3. Le texte courant a un contraste d'au moins 4,5:1, les grands textes 3:1 ; les paires refusées (or sur clair) sont absentes.
4. L'or n'est jamais utilisé comme couleur de texte sur fond clair.
5. Aucun texte gris #6b6f85 sur fond #eef0fb.
6. L'information n'est jamais portée par la couleur seule (mot, symbole, forme associés).
7. Le document est lisible en niveaux de gris et à la photocopie.
8. Pas de rouge contre vert ; les séries d'un graphique diffèrent par la luminosité.
9. Pas de fond coloré plein page dans un document à imprimer ; fonds clairs en petites surfaces.
10. Texte noir en K 100 (ou bleu-noir) et encrage total ≤ 240 à 300 % si CMJN.
11. Aucun dégradé, ombre dure, biseau ou reflet ; ombres légères uniquement sur les cartes d'écran.
12. Les couleurs liturgiques éventuelles sont en filet ou bandeau étroit, tons assourdis.
13. Chaque couleur de branche ou de groupe est vérifiée en contraste et doublée d'un libellé.
14. Le logo est la version officielle, avec zone de protection et taille minimale respectées.
15. Titres en serif bleu nuit, texte en sans-serif #12142b ; polices cohérentes avec le thème.
16. Les couleurs sont appliquées par styles ou par thème, pas à la main sur chaque élément.
17. Le thème de l'application (Word, Excel, PowerPoint) porte les couleurs de la fédération.
18. Épreuve ou aperçu vérifié (`ui.render` ou export PDF).

## Questions auxquelles la fiche répond

- Quelles sont les couleurs de la fédération et leurs codes HEX, RVB et CMJN ?
- Comment décliner le bleu nuit et l'or en teintes, gris et couleurs d'état ?
- Quelles paires texte et fond respectent le contraste 4,5:1 ou 3:1 ?
- Pourquoi l'or ne doit-il pas servir de couleur de texte sur fond clair ?
- Quelle différence entre RVB et CMJN, et comment préparer un noir riche ou un noir de texte ?
- Comment vérifier un document en noir et blanc ou à la photocopie ?
- Comment tenir compte du daltonisme dans un tableau ou un graphique ?
- Comment attribuer des couleurs aux branches sans casser l'identité ?
- Comment utiliser les couleurs liturgiques avec respect dans un livret ?
- Quelles commandes appliquent couleurs et thèmes dans Word, Excel et PowerPoint ?
