---
id: comp-plans-cao
titre: Plans et CAO - plans de camp, cotation, cartouche, impression, plans de sécurité et croquis de montage
theme: Compétences
type: synthese
sources:
  - titre: Pratique professionnelle du dessin technique et de la CAO 2D (échelles, calques, cotation, mise en page, impression)
  - titre: Conventions générales du dessin technique (séries d'épaisseurs de trait de la norme ISO, formats de papier A de la série ISO 216)
mots_cles: plan, CAO, CADCraft, AutoCAD, SoLeadWorks, échelle, 1:200, 1:500, 1:50, 1:100, calques, épaisseur de trait, type de ligne, cotation, style de cote, hauteur de texte, hachures, bloc, symbole, tente, latrines, feu, cartouche, cadre, A3, A4, échelle graphique, nord, légende, impression, PDF, plan d'évacuation, sécurité, portique, table à feu, croquis de montage, ltscale, plot, units, limits, scout.atelier.dessin, api_lot
liens: app-cadcraft, app-soleadworks, comp-mise-en-page-principes, comp-polices-et-hierarchie, comp-couleur-et-identite-fsggb, comp-pdf-export-accessibilite, comp-affiche-flyer-invitation, comp-typographie-francaise, suite-craft-mcp
resume: Méthode pour dessiner des plans de camp, d'installation et de bâtiment lisibles et exacts : unités, échelles, calques, cotation, hauteur de texte, cartouche et mise en page A3/A4, impression PDF, plan de sécurité et croquis de montage de portiques et de tables à feu. Donne les commandes natives CADCraft et SoLeadWorks vérifiées et quatre séquences api_lot.
---

## L'idée directrice

Un plan est un **document de décision** : il sert à installer un camp sans se disputer, à montrer à un propriétaire où sont les tentes, à guider une évacuation, à débiter des perches. Il doit donc être **exact** (dimensions justes), **lisible à l'échelle d'impression** (textes et traits dimensionnés pour le papier) et **identifiable** (cartouche, échelle, nord, date, auteur). Cinq principes :

1. **Dessiner en vraies grandeurs**, à l'échelle 1:1 dans les unités du terrain ; l'échelle ne s'applique qu'à l'impression.
2. **Un calque par type d'objet**, nommé, coloré et pourvu d'une épaisseur de trait.
3. **Dimensionner les textes et les cotes pour le papier**, pas pour l'écran.
4. **Un cadre, un cartouche, une échelle, un nord, une légende** : sans ces cinq éléments un plan n'est pas livrable.
5. **Un plan par usage** (installation, sécurité, bâtiment, montage), pas un plan fourre-tout.

Pour la mise en page générale voir comp-mise-en-page-principes ; pour l'export PDF et l'archivage comp-pdf-export-accessibilite ; pour l'identité visuelle (bleu nuit `#000761`, or `#c6a24e`) comp-couleur-et-identite-fsggb.

## 1. Unités et échelles

### Unités de dessin

| Type de plan | Unité de dessin conseillée | Précision d'affichage | Pourquoi |
|---|---|---|---|
| Plan de camp, terrain, installation | **Mètre** (1 unité = 1 m) | 2 décimales | Les distances se raisonnent en mètres |
| Plan de bâtiment, de salle | **Millimètre** ou centimètre | 0 décimale (mm) | Les cotes de plans se donnent en mm ou cm |
| Croquis de montage, mobilier, perches | **Millimètre** | 0 décimale | Précision des assemblages |

Règle : choisir l'unité **au début** et ne jamais la mélanger dans un fichier. Le métrage affiché (nombre de décimales) se règle avec la commande `units` ; la valeur de référence d'insertion (`insunits`) aide à placer un bloc à la bonne taille.

### Échelles courantes

L'échelle 1:n signifie que 1 mm sur le papier représente n mm sur le terrain.

| Plan | Échelle | Format papier | Surface réelle utile (cadre déduit) | Utilité |
|---|---|---|---|---|
| Plan général du camp (terrain de grande taille) | 1:500 | A3 paysage | environ 190 × 128 m | Vue d'ensemble, parking, accès |
| Plan d'installation du camp | 1:200 | A3 paysage | environ 76 × 51 m | Tentes, cuisine, sanitaires, feu |
| Plan d'installation du camp | 1:200 | A4 paysage | environ 51 × 36 m | Petit camp |
| Plan de zone (cuisine, coin de patrouille) | 1:100 | A3 | environ 38 × 25 m | Détail d'une zone |
| Plan de bâtiment ou de salle | 1:50 | A3 | environ 19 × 13 m | Gîte, salle paroissiale, local |
| Plan de bâtiment (grand) | 1:100 | A3 | environ 38 × 26 m | Bâtiment de plusieurs pièces |
| Croquis de montage | 1:20 à 1:10 | A4 | environ 5 × 3,6 m à 2,6 × 1,8 m | Portique, table à feu |
| Détail d'assemblage | 1:5 à 1:2 | A4 | quelques dizaines de cm | Brêlage, tenon, mortaise |

Les surfaces réelles utiles sont calculées avec le cadre (marge de 10 mm, 20 mm côté reliure, cartouche en bas à droite).

Règle : **ne retenir qu'une échelle par feuille** (sauf détails clairement encadrés et annotés). Choisir l'échelle normalisée la plus grande qui fait tenir le plan dans le cadre.

## 2. Calques

### Principe

Un calque (layer) regroupe des objets de même nature ; on peut le masquer, le verrouiller, le geler ou le rendre non imprimable. Un plan **sans calques** est impossible à corriger.

### Nommage

Préfixe numérique pour trier + nom court sans accent ni espace :

| Calque | Couleur (n° d'index) | Épaisseur | Type de ligne | Contenu |
|---|---|---|---|---|
| `00_CADRE` | 7 (blanc / noir) | 0,50 mm | Continu | Cadre de la feuille, cartouche |
| `01_TEXTE` | 7 | 0,18 mm | Continu | Textes généraux |
| `10_TERRAIN` | 8 (gris) | 0,35 mm | Continu | Limite du terrain, clôtures |
| `11_COURBES` | 8 | 0,13 mm | Continu | Courbes de niveau |
| `12_VEGETATION` | 3 (vert) | 0,18 mm | Continu | Arbres, haies, bois |
| `13_EAU` | 5 (bleu) | 0,25 mm | Continu | Ruisseau, point d'eau |
| `14_ROUTES` | 9 | 0,35 mm | Continu | Chemins, accès, parking |
| `20_TENTES` | 1 (rouge) | 0,35 mm | Continu | Tentes, abris |
| `21_CUISINE` | 30 (orange) | 0,35 mm | Continu | Cuisine, tables, rangements |
| `22_SANITAIRES` | 4 (cyan) | 0,35 mm | Continu | Latrines, lavabos |
| `23_FEU` | 2 (jaune) | 0,50 mm | Continu | Feu, foyers |
| `30_SECURITE` | 3 | 0,35 mm | Tirets | Itinéraires, point de rassemblement |
| `40_COTES` | 6 (magenta) | 0,13 mm | Continu | Cotation |
| `41_HACHURES` | 8 | 0,09 mm | Continu | Hachures |
| `50_AXES` | 1 | 0,13 mm | Mixte (axe) | Axes, repères |
| `99_NONIMPRIME` | 8 | — | Continu | Constructions, repères non imprimés (non imprimable) |

Règles :
- Le calque **0** reste vide : il sert à définir les blocs.
- Les couleurs servent à **distinguer à l'écran** ; à l'impression on imprime en noir et blanc ou en couleurs maîtrisées ; l'épaisseur passe par le **calque** (ou la table de styles d'impression) et non par l'objet.
- Épaisseurs de la série normalisée : **0,13 – 0,18 – 0,25 – 0,35 – 0,50 – 0,70 – 1,00 mm**. Un rapport de 1,4 entre deux épaisseurs voisines est visible. En pratique : 0,13 pour le fin (cotes, hachures), 0,25 pour le moyen, 0,50 pour le fort (contours principaux).
- **Calque « 99_NONIMPRIME »** pour les repères ou les rappels de construction ; désactiver son impression.

### Types de ligne

| Ligne | Nom courant | Usage |
|---|---|---|
| Continue | Continu | Contours visibles |
| Tirets | DASHED | Parties cachées, limite d'implantation future, itinéraire |
| Mixte (trait-point) | CENTER | Axes de symétrie |
| Points | DOT | Limites de propriété |
| Trait fantôme | PHANTOM | Positions alternatives |

Après avoir chargé un type de ligne (`linetype` avec `load`), régler **l'échelle des types de ligne** (`ltscale`) : en repère de départ, `ltscale` égal au dénominateur d'échelle pour un dessin en millimètres (1:50 → 50) et au dénominateur divisé par 1 000 pour un dessin en mètres (1:200 → 0,2) ; puis **vérifier à l'écran à l'échelle d'impression** et ajuster (multiplier ou diviser par 2) jusqu'à ce que les tirets mesurent 3 à 5 mm sur le papier.

## 3. Cotation

### Principes de bonne cotation

- **Coter une fois** (une cote par distance) ; chaque dimension est visible, jamais répétée.
- **Cotes hors du dessin**, alignées en lignes parallèles, la plus petite cote la plus près de l'objet.
- **Chaîne de cotes** : cotes en série partant d'un point d'origine (cotes continues) ; la cote **totale** la plus éloignée.
- **Pas de cote sur une ligne cachée** ; pas de cote à travers un texte.
- **Cotes en unités du plan** : mètres pour un plan de camp (« 12,50 »), millimètres pour un plan de bâtiment (« 3 250 »). Indiquer l'unité dans le cartouche, pas derrière chaque cote.
- **Associatives** : les cotes se lient aux objets (si l'objet change, la cote suit).

### Style de cote selon l'échelle

Le style de cote définit les tailles **sur le papier** ; le facteur d'échelle global (`DIMSCALE`) les agrandit pour le dessin en vraie grandeur.

| Élément | Valeur sur le papier | Remarque |
|---|---|---|
| Hauteur du texte de cote | 2,5 mm (2,0 mm minimum) | Même hauteur que le texte du plan |
| Taille de la flèche ou du trait oblique | 2,5 mm (flèche) ou 2 mm (trait d'architecte) | Pointes pleines |
| Écart de la ligne d'attache à l'objet | 1 mm | Jamais collée à l'objet |
| Dépassement de la ligne d'attache | 2 mm | Au-delà de la ligne de cote |
| Écart entre deux lignes de cote | 7 mm (variable `DIMDLI`) | Pour des chaînes superposées |
| Premier niveau de cote | 10 mm de l'objet | Pas de cote dans l'objet |
| Texte au-dessus de la ligne (`DIMTAD` = 1) | Au-dessus, à 1 mm | Lisible en lecture horizontale |
| Épaisseur de la ligne de cote | 0,13 mm | Cotes plus fines que le contour |
| Précision | 0 décimale (mm), 1 ou 2 décimales (m) | Pas de fausse précision |

Facteur d'échelle global : **`DIMSCALE` = dénominateur de l'échelle d'impression** (1:200 → 200), avec les tailles du style en **unités de dessin** correspondant au papier (en mètres : 2,5 mm = 0,0025 m ; en millimètres : 2,5). Contrôler en **aperçu avant impression** : une cote doit mesurer 2,5 mm de haut sur le papier.

### Hauteur de texte à l'échelle

Hauteur du texte dans le dessin = hauteur voulue sur le papier × dénominateur d'échelle × (facteur d'unité).

| Texte | Sur le papier | 1:200 (dessin en m) | 1:50 (dessin en mm) | 1:20 (dessin en mm) |
|---|---|---|---|---|
| Texte courant, cotes | 2,5 mm | 0,50 m | 125 mm | 50 mm |
| Étiquette de zone | 3,5 mm | 0,70 m | 175 mm | 70 mm |
| Titre de plan | 5 mm | 1,00 m | 250 mm | 100 mm |
| Grand titre de feuille | 7 mm | 1,40 m | 350 mm | 140 mm |
| Minimum absolu | 2,0 mm | 0,40 m | 100 mm | 40 mm |

Règle : jamais en dessous de **2,0 mm** de hauteur de majuscule imprimée (lisibilité en A3 et en photocopie). Police : **une police sans empattement simple** (Inter ou équivalente), un seul style de texte pour tout le plan, deux hauteurs au maximum.

### Cote de rayon, de diamètre, d'angle

- **Diamètre** (`Ø`) pour un cercle ; **rayon** (`R`) pour un arc de moins de 180°.
- **Angle** : cote angulaire avec l'arc de cote, valeur en degrés entiers.
- **Pente** : exprimée en pourcentage.

## 4. Textes, hachures, blocs et symboles

### Textes

- **Texte sur une ligne** (`text`) pour les étiquettes courtes ; **texte multiligne** (`mtext`) pour les paragraphes, avec largeur définie.
- Écrire en **minuscules et capitales accentuées** normales (pas de tout en capitales sauf titres courts) ; typographie française (voir comp-typographie-francaise).
- Aucun texte **à l'envers** : angle de lecture de 0° ou 90° (de bas en haut) ; jamais 180° ni 270°.
- Texte **horizontal** de préférence.

### Hachures

Les hachures montrent les matières ou les emprises.

| Élément | Motif | Échelle de motif (dessin en mm, 1:50) | Calque |
|---|---|---|---|
| Mur coupé | ANSI31 (hachures obliques à 45°) | 50 (= dénominateur) ; selon l'unité | `41_HACHURES` |
| Emprise d'une zone (cuisine) | Aplat léger gris 20 % ou hachure espacée | 100 | `41_HACHURES` |
| Pelouse | Pointillé ou aplat vert clair | — | `12_VEGETATION` |
| Eau | Aplat bleu clair | — | `13_EAU` |

Règles : contours **fermés** avant de hachurer ; hachures **sur leur calque**, d'épaisseur fine (0,09–0,13 mm) ; espacement visible mais discret (2 à 3 mm sur le papier) ; **pas de hachure sous un texte** (ou masque de texte).

### Blocs et symboles

Un **bloc** est un objet nommé réutilisable (tente, table, arbre). Mettre à jour le bloc met à jour toutes ses occurrences.

Règles de création :
1. Dessiner **sur le calque 0**, à l'échelle réelle (1 unité = 1 m pour un plan de camp).
2. **Point d'insertion** logique (le centre ou un coin de repère).
3. **Nom clair** : `SYM_TENTE_2P`, `SYM_TABLE_240`, `SYM_LATRINES`, `SYM_FEU`, `SYM_EAU`, `SYM_SORTIE`.
4. **Fichier de bibliothèque** commun à tous les plans de la fédération (un fichier de blocs par domaine).
5. **Symboles propres** : dessinés par nous, simples et reconnaissables ; ne copier aucun jeu de symboles d'un logiciel ou d'une norme sous droits.

| Symbole | Dimension indicative (m) | Représentation |
|---|---|---|
| Tente 2 places | 2,0 × 1,3 | Rectangle avec ligne de faîtage |
| Tente de patrouille | 3,0 × 3,0 | Carré avec croix |
| Grande tente collective | 6,0 × 4,0 | Rectangle avec porte |
| Table de 8 places | 2,4 × 0,8 | Rectangle |
| Table à feu | 1,2 × 1,2 | Carré avec foyer |
| Latrines | 1,0 × 1,2 | Carré avec cabine |
| Foyer / feu | Ø 1,0 | Cercle avec flammes simples |
| Point d'eau | Ø 0,6 | Cercle avec goutte |
| Arbre | Ø 4,0 à 8,0 | Cercle avec croix |

Ces dimensions sont des **ordres de grandeur** à adapter au matériel réellement utilisé.

## 5. Cartouche et mise en page

### Feuille, cadre, cartouche

| Élément | Valeur |
|---|---|
| Feuille A3 | 420 × 297 mm, paysage |
| Feuille A4 | 297 × 210 mm, paysage (ou 210 × 297 portrait) |
| Cadre | À 10 mm des bords, 20 mm côté reliure (à gauche) pour une feuille perforée |
| Trait du cadre | 0,50 mm |
| Cartouche | En bas à droite, collé au cadre, largeur 180 mm, hauteur 40 mm (A3) |
| Épaisseur des filets du cartouche | 0,35 mm (extérieur), 0,18 mm (intérieur) |

### Contenu du cartouche (de gauche à droite et de haut en bas)

| Rubrique | Exemple |
|---|---|
| Titre du plan | Plan d'installation du camp d'été |
| Camp ou unité | Troupe Saint-Jean, camp d'été 2026 |
| Lieu | Domaine de la Haute-Rivière |
| Échelle | 1:200 (et échelle graphique à côté) |
| Format | A3 |
| Date | 2026-06-15 (AAAA-MM-JJ) |
| Auteur | Nom du responsable |
| Indice de version | A, B, C ou v1, v2 |
| Numéro de feuille | 1/3 |
| Fédération | FSGGB (logo discret) |

### Éléments obligatoires du plan

- **Échelle graphique** : barre alternée noir et blanc, par exemple 0 – 5 – 10 – 20 m (à 1:200, 10 m = 50 mm sur le papier). Garder l'échelle graphique : elle suit l'impression réduite (A4 depuis A3).
- **Nord** : une flèche simple avec « N » ; hauteur de 15 à 20 mm ; en haut à droite ou en bas à gauche ; **orienter** le plan avec le nord vers le haut si possible.
- **Légende** : encadré en bas à gauche ou en marge ; symbole + libellé, interligne de 7 mm ; pas plus de 10 à 12 entrées.
- **Titre de zone** sur les parties importantes.
- **Couleur** : bleu nuit pour le cartouche, or pour le filet ; le reste sobre.

### Mise en page (présentation / layout)

Dessiner le plan dans l'**espace objet** (en vraie grandeur) ; composer la feuille dans une **présentation** (layout) avec un **cadre de présentation** (viewport) réglé sur l'échelle (par exemple 1:200), le cartouche et le cadre étant dessinés en espace papier. Pour verrouiller l'échelle : `viewport.set` avec `locked: true`. Alternative simple (sans présentation) : dessiner le cadre et le cartouche **à l'échelle** dans l'espace objet, c'est-à-dire multipliés par le dénominateur (voir séquence 1).

## 6. Impression et export PDF

| Réglage | Valeur | Raison |
|---|---|---|
| Format | A3 ou A4, orientation paysage | Standard |
| Échelle d'impression | Celle du plan (1:200, 1:50…), jamais « ajuster » pour un plan coté | « Ajuster à la page » fausse l'échelle |
| Zone d'impression | Fenêtre ou présentation | Contrôle |
| Épaisseurs de ligne | Activées (`lineweights`) | Hiérarchie du dessin |
| Table de styles d'impression | Monochrome (noir) pour la version de travail, couleur pour la version de présentation | Photocopie |
| Qualité | Normale (vectorielle) | Un PDF vectoriel est net à tous les zooms |
| Centrage | Oui | Marge régulière |
| Nom du fichier | `AAAA-MM-JJ_plan-installation-camp_A3_v1.pdf` | Versionnage |

Contrôles après export : ouvrir le PDF ; **mesurer** la barre d'échelle graphique avec une règle sur une impression de test (10 m à 1:200 doivent faire 50 mm) ; vérifier que les textes mesurent 2,5 mm ; vérifier la lisibilité en niveaux de gris ; poids du PDF attendu : 100 Ko à 2 Mo pour un plan vectoriel.

## 7. Plans de sécurité et d'évacuation

Un plan de sécurité est un **plan à part**, simplifié, lisible à 2 mètres.

### Éléments à faire figurer

1. **Tous les accès** et sorties du camp ou du bâtiment.
2. **Itinéraires d'évacuation** en **vert** avec flèches, largeur de trait 1,0 mm.
3. **Point de rassemblement** repéré par un symbole et une lettre (« A ») ; un point principal et un point de repli.
4. **Emplacement des moyens de secours** : trousse de premiers secours, extincteurs, seau de sable ou d'eau, téléphone, borne ou point d'eau.
5. **Zones à risque** : feu, cuisine, cours d'eau, route, ligne électrique, arbres morts ; en **rouge** hachuré.
6. **Distances** : distances minimales entre feu et tentes et entre cuisine et sanitaires (voir le règlement du camp et les consignes du propriétaire ou de la préfecture pour les valeurs en vigueur).
7. **Voie d'accès des secours** : largeur d'environ 3 m, dégagée en permanence (à confirmer auprès des secours locaux).
8. **Numéros d'urgence** (15, 17, 18, 112) et **numéro du responsable**, dans un encadré.
9. **Légende** et mention « Vous êtes ici » pour une version affichée.

### Règles de graphisme

- Couleurs : vert pour l'évacuation et les secours, rouge pour les dangers ; pas plus de 4 couleurs.
- Symboles **simples**, dessinés par nous (pas de pictogrammes copiés de normes ou de produits sous droits) ; tailles de 10 à 15 mm sur le papier.
- **Orienter** le plan comme la personne qui le lit (« vous êtes ici » en bas).
- Affichage en **A3**, au moins une copie à la cuisine, une à l'accueil, une dans la trousse de secours.
- Mise à jour à chaque changement d'implantation (indice de version, date).

## 8. Croquis de montage (portiques, tables à feu, constructions)

Un croquis de montage est un **dessin technique d'exécution** : on doit pouvoir couper et assembler sans autre explication.

### Contenu

| Vue | Échelle | Contenu |
|---|---|---|
| Vue de face | 1:20 | Hauteurs, largeurs, haubanage |
| Vue de côté | 1:20 | Profondeur, inclinaison des perches |
| Vue de dessus | 1:20 | Implantation, entraxes |
| Détail d'assemblage | 1:5 | Brêlage carré, tenon et mortaise, entailles |
| Nomenclature | — | Tableau : repère, désignation, longueur, diamètre, quantité |

### Cotes et matériaux (valeurs d'exemple à adapter)

| Élément | Cote d'exemple | Remarque |
|---|---|---|
| Perche verticale de portique | Ø 80–100 mm, longueur 3,0 m | Une partie en terre ou une assise calée |
| Traverse | Ø 70–80 mm, longueur 2,0 à 2,4 m | Assemblée par brêlage carré |
| Hauteur libre sous la traverse | 2,0 à 2,2 m | Passage d'adulte |
| Haubans | 4 cordes Ø 8 mm, angle de 45° | Stabilité |
| Table à feu : plateau | 1,0 × 1,0 m, hauteur 0,8 à 0,9 m | Surface plane isolée |
| Table à feu : pieds | 4 perches Ø 80 mm | Contreventement en croix |
| Équerre 3-4-5 | 0,9 m – 1,2 m – 1,5 m | Pour tracer l'angle droit |

Chaque cote est reportée en **millimètres**, avec la tolérance (± 10 mm) pour les perches naturelles. Les assemblages (brêlage carré, tenon et mortaise, mi-bois, queue d'aronde) sont décrits dans les fiches de froissartage de la base de connaissances. La **nomenclature** liste chaque pièce avec repère (A, B, C…), désignation, section, longueur coupée, quantité.

### Règle de sécurité

Un portique ou une table à feu doit être **dimensionné avec une marge** et **vérifié** avant mise en service : stabilité au vent, résistance à la charge, distance de dégagement autour du feu. Le dessin ne remplace pas le jugement du chef ni les règles de sécurité du camp.

## 9. Conventions de dessin et erreurs fréquentes

### Conventions

- Dessiner d'abord **les grandes formes** (terrain, bâtiments), puis les détails.
- **Un objet = une ligne** : pas de lignes doublées ; utiliser la commande de suppression des doublons (`overkill`) en fin de travail.
- **Polylignes fermées** pour les surfaces (utiles pour les surfaces et les hachures).
- **Accrochages** actifs (extrémité, milieu, centre, intersection) pour la précision ; mode orthogonal pour les angles droits.
- Nettoyer (`purge`) pour supprimer calques, blocs et styles inutiles avant livraison.

### Erreurs fréquentes

| Erreur | Conséquence | Correction |
|---|---|---|
| Dessin à l'échelle d'impression (1 m dessiné = 5 mm) | Impossible à corriger | Toujours en vraie grandeur |
| Texte à hauteur fixe de 2,5 unités | Illisible ou énorme | Hauteur = papier × dénominateur |
| Tout sur le calque 0 | Pas de contrôle | Un calque par nature |
| Cotes saisies à la main | Valeurs fausses | Cotes associatives |
| Échelle « ajustée à la page » | Échelle fausse | Échelle normalisée, vérifiée |
| Pas de nord, ni d'échelle graphique | Plan inexploitable | Éléments obligatoires |
| Symboles recopiés d'un tiers | Violation des droits | Symboles propres |
| Trop de couleurs | Lecture difficile | 4 couleurs et une hiérarchie de traits |
| Objets hors du cadre | Impression tronquée | `zoom` étendu pour contrôler |
| Fichier sans indice de version | Confusion | Cartouche à jour |

## Avec les outils de ScoutHub

Les commandes natives ci-dessous ont été vérifiées dans les listes de CADCraft et de SoLeadWorks. Les identifiants sont ceux de la liste ; utiliser `api_commandes` avec un mot-clé pour voir les paramètres complémentaires. Les coordonnées sont en unités de dessin (mètres dans les séquences ci-dessous).

### CADCraft : commandes utiles (vérifiées)

| Identifiant | Paramètres | Usage |
|---|---|---|
| `new` | `metric?: bool`, `template?` | Nouveau dessin |
| `units` | `lunits?: 1..5, luprec?: 0..8, aunits?, auprec?, insunits?` | Unités et précision |
| `limits` | `min: [x,y], max: [x,y]` | Limites du dessin |
| `layer.new` | `name, color?, linetype?, lineweight? (mm), current?: bool` | Créer un calque |
| `layer.set` | `name, on?, frozen?, locked?, plot?, color?, linetype?, lineweight?, description?, newName?` | Modifier un calque |
| `layer.current` | `{name}` | Calque courant |
| `layer.delete`, `laymrg` | `{name}` ; `{from:[…], to}` | Supprimer, fusionner |
| `linetype` | `current?, load?: nom, file?` | Types de ligne |
| `ltscale` | `{scale}` | Échelle des types de ligne |
| `line` | `points: [[x,y],…], closed?` | Lignes |
| `pline` | `vertices: [[x,y]…], closed?, width?` | Polyligne |
| `rectang` | `p1, p2` ou `dimensions: [l, w]`, `rotation?`, `fillet?` | Rectangle |
| `circle` | `center, radius` ou `diameter` | Cercle |
| `arc`, `ellipse`, `polygon`, `point` | voir `api_commandes` | Autres formes |
| `text` | `at, text, height?, rotation?, justify?` | Texte sur une ligne |
| `mtext` | `at, text, height?, width?, attach?\|justify?, style?` | Texte multiligne |
| `style` | `name, font?, height?, widthFactor?, current?` | Style de texte |
| `dimstyle` | `name, current?, <champs ou variables DIM* : DIMSCALE, DIMASZ, DIMTAD, DIMLUNIT, DIMDLI…>` | Style de cote |
| `dimlinear` | `p1, p2, at, rotation?, text?` | Cote linéaire |
| `dimaligned` | `p1, p2, at, text?` | Cote alignée |
| `dimcontinue`, `dimbaseline` | `points: [[x,y]…]` | Chaîne et cotes parallèles |
| `dimradius`, `dimdiameter`, `dimangular` | voir `api_commandes` | Cotes de rayon, diamètre, angle |
| `mleader` | `points, text?` | Annotation avec ligne de repère |
| `hatch` | `points?` ou `handles?`, `pattern?: "ANSI31"`, `scale?`, `angle?` | Hachures |
| `select` | `handles` ou `window: [[x,y],[x,y]]` ou `clear: true` | Sélection |
| `block` | `name, base: [x,y], handles?, keep?` | Définir un bloc |
| `insert` | `name, at: [x,y], scale?, rotation?, attribs?` | Insérer un bloc |
| `table` | `at, rows, cols, rowHeight?, colWidth?, cells?: [[texte]], title?, header?: [texte]` | Tableau (légende, nomenclature) |
| `move`, `copy`, `rotate`, `scale`, `mirror`, `offset` | voir `api_commandes` | Modifier |
| `pagesetup` | `layout?, paper?: "A4"\|"A3"…, landscape?, margins?, scale?, plotArea?, center?` | Mise en page |
| `layout` | `option: new\|copy\|delete\|rename\|set\|list, name?` | Présentations |
| `mview`, `viewport.set` | `option?` ; `scale?: "1:50", locked?` | Cadre de présentation |
| `plot` | `path?, layout?, device?` | Imprimer |
| `exportpdf` | `path?, layout?, paper?, landscape?, fit?, scale?, center?, lineweights?` | Exporter en PDF |
| `export` | `path?, format?: dxf\|dwg\|svg\|png\|pdf` | Export général |
| `saveas`, `qsave` | `path` ; `path?` | Enregistrer |
| `zoom` | `mode: extents\|all\|window\|…` | Cadrage |
| `overkill`, `purge` | voir `api_commandes` | Nettoyage |

### SoLeadWorks (3D, meubles scouts) : commandes utiles (vérifiées)

| Identifiant | Paramètres | Usage |
|---|---|---|
| `file.new` | `{name?}` | Nouvelle conception |
| `document.units` | `units: mm\|cm\|m\|in\|ft` | Unités d'affichage |
| `scout.meuble.types` | — | Liste des modèles de meubles |
| `scout.meuble.create` | `type: etabli\|banc\|fauteuil\|bancdos\|bancdiag\|table\|prepa\|cuisine\|etagere\|vaisselier\|feu`, `name?`, `coin?`, `at?: [x, y] mm`, `rotation?: 0\|90\|180\|270` | Créer un meuble |
| `scout.coin.create` | `name?`, `layout?: standard\|empty` | Coin de patrouille complet |
| `scout.piece.equerre` | `unit?: mm (300), d?, at?` | Équerre 3-4-5 |
| `scout.atelier.dessin` | `meuble?\|coin?`, `format?: A3\|A4`, `echelle?: n pour 1:n (0 = automatique)`, `vues?: [face, arriere, droite, gauche, dessus, dessous, iso]`, `cotes?: bool`, `cotes_pieces?: bool`, `tableau?` | Dessin technique avec cotes |
| `scout.atelier.nomenclature` | `meuble?\|coin?`, `path?` (fichier .csv) | Nomenclature des pièces |
| `scout.export.html` | `path?`, `author?`, `title?` | Export HTML imprimable en A3 |
| `file.export_view_dxf` | `camera?`, `hidden?: omit\|dashed`, `path?` | Vue en DXF (à reprendre dans CADCraft) |
| `file.save`, `file.export` | `path` ; `path, format?` | Enregistrer et exporter |

Règle d'usage : le **plan de camp et le plan de sécurité** se dessinent dans CADCraft ; le **croquis de montage** d'un meuble ou d'un portique se produit dans SoLeadWorks avec `scout.atelier.dessin` (échelle automatique ou fixée) puis se reprend en DXF.

### Séquence 1 : cadre et cartouche (A3, échelle 1:200, dessin en mètres)

Le cadre est dessiné à l'échelle : 1 mm de papier = 0,2 m. La feuille A3 mesure donc 84 × 59,4 m ; marges : 2 m (10 mm), 4 m à gauche (20 mm) ; cartouche de 36 × 8 m (180 × 40 mm). Texte de 0,5 m (2,5 mm) et titre de 0,7 m.

```json
[
 {"commande":"new","parametres":{"metric":true}},
 {"commande":"units","parametres":{"lunits":2,"luprec":2,"insunits":6}},
 {"commande":"limits","parametres":{"min":[0,0],"max":[84,59.4]}},
 {"commande":"layer.new","parametres":{"name":"00_CADRE","color":7,"lineweight":0.5,"current":true}},
 {"commande":"rectang","parametres":{"p1":[0,0],"p2":[84,59.4]}},
 {"commande":"rectang","parametres":{"p1":[4,2],"p2":[82,57.4]}},
 {"commande":"layer.new","parametres":{"name":"01_TEXTE","color":7,"lineweight":0.18,"current":true}},
 {"commande":"line","parametres":{"points":[[46,2],[46,10],[82,10]]}},
 {"commande":"line","parametres":{"points":[[46,6],[82,6]]}},
 {"commande":"line","parametres":{"points":[[64,2],[64,6]]}},
 {"commande":"text","parametres":{"at":[47,8.2],"text":"Plan d'installation du camp d'été","height":0.7}},
 {"commande":"text","parametres":{"at":[47,3.8],"text":"Échelle 1:200 - A3","height":0.5}},
 {"commande":"text","parametres":{"at":[65,3.8],"text":"2026-06-15 - indice A","height":0.5}},
 {"commande":"text","parametres":{"at":[47,6.8],"text":"FSGGB - Troupe Saint-Jean - Camp d'été 2026","height":0.5}}
]
```

Les lignes du cadre sont à 0,50 mm (calque `00_CADRE`) ; le cartouche a des filets plus fins. Ajouter ensuite le nord et l'échelle graphique : barre de 10 m (50 mm sur le papier) avec `line` et `rectang` sur le calque `01_TEXTE`.

### Séquence 2 : plan simple avec calques

```json
[
 {"commande":"layer.new","parametres":{"name":"10_TERRAIN","color":8,"lineweight":0.35}},
 {"commande":"layer.new","parametres":{"name":"20_TENTES","color":1,"lineweight":0.35}},
 {"commande":"layer.new","parametres":{"name":"21_CUISINE","color":30,"lineweight":0.35}},
 {"commande":"layer.new","parametres":{"name":"22_SANITAIRES","color":4,"lineweight":0.35}},
 {"commande":"layer.new","parametres":{"name":"23_FEU","color":2,"lineweight":0.5}},
 {"commande":"layer.current","parametres":{"name":"10_TERRAIN"}},
 {"commande":"pline","parametres":{"vertices":[[8,12],[78,12],[78,52],[8,52]],"closed":true}},
 {"commande":"layer.current","parametres":{"name":"20_TENTES"}},
 {"commande":"rectang","parametres":{"p1":[14,40],"dimensions":[3,3]}},
 {"commande":"rectang","parametres":{"p1":[20,40],"dimensions":[3,3]}},
 {"commande":"rectang","parametres":{"p1":[26,40],"dimensions":[3,3]}},
 {"commande":"layer.current","parametres":{"name":"21_CUISINE"}},
 {"commande":"rectang","parametres":{"p1":[52,38],"dimensions":[6,4]}},
 {"commande":"layer.current","parametres":{"name":"22_SANITAIRES"}},
 {"commande":"rectang","parametres":{"p1":[70,16],"dimensions":[1,1.2]}},
 {"commande":"layer.current","parametres":{"name":"23_FEU"}},
 {"commande":"circle","parametres":{"center":[40,26],"diameter":1}},
 {"commande":"layer.current","parametres":{"name":"01_TEXTE"}},
 {"commande":"text","parametres":{"at":[14,44],"text":"Tentes de patrouille","height":0.5}},
 {"commande":"text","parametres":{"at":[52,43],"text":"Cuisine","height":0.5}},
 {"commande":"text","parametres":{"at":[37,28],"text":"Feu de camp","height":0.5}},
 {"commande":"zoom","parametres":{"mode":"extents"}}
]
```

Les dimensions des tentes et de la cuisine sont des exemples ; les adapter au matériel réel. Le point `p1` est un coin du rectangle et `dimensions` donne longueur et largeur.

### Séquence 3 : cotation

Style de cote à l'échelle 1:200 pour un dessin en mètres. Les valeurs de taille sont celles du papier en mètres (2,5 mm = 0,0025 m), multipliées par `DIMSCALE` 200. La variable de hauteur de texte de cote est la variable standard `DIMTXT` ; si le style ne l'accepte pas, interroger `api_commandes` avec le mot-clé `dimstyle`.

```json
[
 {"commande":"layer.new","parametres":{"name":"40_COTES","color":6,"lineweight":0.13,"current":true}},
 {"commande":"dimstyle","parametres":{"name":"CAMP-200","current":true,"DIMSCALE":200,"DIMASZ":0.0025,"DIMTXT":0.0025,"DIMTAD":1,"DIMDLI":0.007}},
 {"commande":"dimlinear","parametres":{"p1":[8,12],"p2":[78,12],"at":[43,9]}},
 {"commande":"dimlinear","parametres":{"p1":[8,12],"p2":[8,52],"at":[5,32]}},
 {"commande":"dimlinear","parametres":{"p1":[14,40],"p2":[17,40],"at":[15.5,38]}},
 {"commande":"dimcontinue","parametres":{"points":[[20,40],[23,40],[26,40],[29,40]]}}
]
```

Vérifier à l'aperçu : texte de cote de 2,5 mm de haut sur le papier. Pour un plan de bâtiment à 1:50 en millimètres, utiliser `DIMSCALE` 50 et des tailles de 2,5 (flèche et texte).

### Séquence 4 : légende (symboles et tableau)

On dessine les symboles hors du plan, on les sélectionne par fenêtre et on les transforme en blocs.

```json
[
 {"commande":"layer.current","parametres":{"name":"20_TENTES"}},
 {"commande":"rectang","parametres":{"p1":[6,3],"dimensions":[2,1.3]}},
 {"commande":"select","parametres":{"window":[[5.5,2.5],[8.5,4.5]]}},
 {"commande":"block","parametres":{"name":"SYM_TENTE_2P","base":[6,3]}},
 {"commande":"layer.current","parametres":{"name":"23_FEU"}},
 {"commande":"circle","parametres":{"center":[10,3.7],"diameter":1}},
 {"commande":"select","parametres":{"window":[[9,2.7],[11,4.7]]}},
 {"commande":"block","parametres":{"name":"SYM_FEU","base":[10,3.7]}},
 {"commande":"layer.current","parametres":{"name":"01_TEXTE"}},
 {"commande":"table","parametres":{"at":[14,5],"rows":3,"cols":2,"rowHeight":1.2,"colWidth":6,"title":"Légende","header":["Symbole","Signification"],"cells":[["","Tente de patrouille"],["","Feu de camp"],["","Cuisine"]]}}
]
```

Insérer ensuite chaque bloc dans la colonne « Symbole » avec `insert` (`{"name":"SYM_TENTE_2P","at":[15,3.9]}`). Si la sélection par fenêtre ne retient pas l'objet, lister les objets avec `entities` et sélectionner par `handles`.

## Liste de contrôle avant de livrer

1. Les unités sont fixées dès le départ (mètres pour le terrain, millimètres pour le bâtiment) et ne sont jamais mélangées.
2. Le dessin est en vraie grandeur ; l'échelle d'impression est une échelle normalisée (1:200, 1:100, 1:50…).
3. Chaque type d'objet est sur son calque nommé, avec couleur, épaisseur et type de ligne.
4. Les épaisseurs de la série 0,13 – 0,25 – 0,35 – 0,50 mm sont respectées.
5. Les textes mesurent 2,5 mm de haut sur le papier (2,0 mm au minimum) et sont lisibles horizontalement.
6. Un seul style de texte et au plus deux hauteurs de texte sont utilisés.
7. Les cotes sont associatives, hors du dessin, en chaînes ordonnées, avec `DIMSCALE` égal au dénominateur d'échelle.
8. Hachures sur leur calque, contours fermés, pas de hachure sous un texte.
9. Les symboles (tentes, tables, latrines, feu) sont des blocs nommés, dessinés par nous.
10. Cadre à 10 mm des bords (20 mm côté reliure), cartouche rempli (titre, unité, échelle, date AAAA-MM-JJ, auteur, indice).
11. Nord, échelle graphique et légende présents.
12. Le plan de sécurité est un plan séparé : itinéraires en vert, danger en rouge, point de rassemblement, secours, numéros d'urgence.
13. Le croquis de montage comporte vues, cotes en millimètres, nomenclature et tolérances.
14. Export PDF en vectoriel, échelle contrôlée avec une règle sur une impression de test (10 m à 1:200 = 50 mm).
15. Le PDF a été relu en niveaux de gris et à l'écran à 100 %.
16. Nom du fichier `AAAA-MM-JJ_plan-xxx_A3_v1.pdf` ; fichier source enregistré avec le même indice.
17. Fichier nettoyé (`overkill`, `purge`) et calque non imprimable pour les constructions.
18. Les valeurs de sécurité (distances, voies de secours) sont conformes au règlement du camp et aux consignes locales.

## Questions auxquelles la fiche répond

- Quelle échelle choisir pour un plan de camp, un plan de bâtiment, un croquis de montage ?
- Quelles unités de dessin utiliser et comment les régler ?
- Comment nommer, colorer et pondérer les calques ?
- Quelle hauteur de texte et quelles tailles de flèches pour qu'une cote soit lisible à l'échelle ?
- Comment régler un style de cote avec DIMSCALE et les cotes en chaîne ?
- Comment dessiner le cadre et le cartouche d'une feuille A3 ou A4 ?
- Quels éléments obligatoires sur un plan (nord, échelle graphique, légende) ?
- Comment exporter un PDF à l'échelle et vérifier cette échelle ?
- Que doit contenir un plan de sécurité et d'évacuation ?
- Comment faire un croquis de montage de portique ou de table à feu avec cotes et nomenclature ?
- Quelles commandes natives CADCraft et SoLeadWorks utiliser, avec quels paramètres ?
- Quelles erreurs éviter dans un plan ?
