---
id: comp-vectoriel-et-pao
titre: Vectoriel et PAO - logos, pictogrammes, gabarits InDesign, préflight et PDF imprimeur
theme: Compétences
type: synthese
sources:
  - titre: Pratique professionnelle du dessin vectoriel et de la publication assistée par ordinateur (grilles, typographie, préparation pour l'imprimeur)
  - titre: Normes PDF/X (ISO 15930) pour l'échange de fichiers d'impression, notions générales
mots_cles: vectoriel, Illustrator, VectorCraft, InDesign, PAO, logo, pictogramme, grille, épaisseur constante, rayon, alignement optique, positif, négatif, monochrome, pathfinder, booléen, vectorisation du texte, couleurs globales, nuancier, dégradé, plans de travail, gabarit, page type, grille de colonnes, blocs chaînés, styles de paragraphe, fond perdu, traits de coupe, préflight, PDF/X-1a, PDF/X-4, imposition, livret, multiple de 4, CMJN, noir, api_lot
liens: app-illustrator, app-indesign, app-photoshop, comp-photo-retouche-et-export, comp-pdf-export-accessibilite, comp-mise-en-page-principes, comp-polices-et-hierarchie, comp-couleur-et-identite-fsggb, comp-affiche-flyer-invitation, comp-typographie-francaise, suite-craft-mcp
resume: Règles de construction d'un logo ou d'un pictogramme vectoriel net, de montage d'un document InDesign (gabarits, grilles, styles, images liées) et de préparation d'un PDF pour l'imprimeur (fond perdu, traits de coupe, PDF/X, noir, imposition, livret). Donne les commandes natives VectorCraft vérifiées et quatre séquences api_lot (logo, pictogramme, bandeau, étiquette).
---

## L'idée directrice

Le vectoriel décrit une image par des **formes mathématiques** (points, courbes, aplats) : il se redimensionne sans perte, de l'insigne de 15 mm au calicot de 3 m. Il convient aux logos, pictogrammes, plans, schémas, cartes et mises en page. La PAO (publication assistée par ordinateur) assemble texte, images et vecteurs sur des pages avec des **règles répétables** : grille, gabarit, styles. Ce qui distingue un travail professionnel :

1. **Des constructions simples et régulières** (peu de points, courbes lisses, mesures rationnelles).
2. **Un système** (une grille, un nuancier, des styles) plutôt que des réglages au cas par cas.
3. **Un fichier prêt pour l'imprimeur** dès la première livraison : fond perdu, traits de coupe, couleurs maîtrisées, polices et images contrôlées.

Pour les principes généraux de mise en page, voir comp-mise-en-page-principes ; pour les polices et la hiérarchie typographique, comp-polices-et-hierarchie ; pour les couleurs de la fédération, comp-couleur-et-identite-fsggb ; pour l'export PDF accessible et le poids, comp-pdf-export-accessibilite.

## 1. Logo et pictogrammes

### Principes d'un bon logo de fédération

- **Simple** : reconnaissable en 1 seconde, lisible à 15 mm de large (ou 60 px à l'écran).
- **Sobre** : pas d'ombre portée, pas de relief artificiel, pas de dégradé superflu ; un bleu profond et un or discret suffisent (bleu nuit `#000761`, or `#c6a24e`).
- **Déclinable** en quatre versions : couleur (positive), négative (sur fond foncé), monochrome noir, monochrome blanc.
- **Vectoriel natif** : jamais une photo ou une image vectorisée automatiquement et grossièrement.
- **Zone d'exclusion** : espace vide minimal autour du logo, égal à la hauteur d'une lettre capitale du logotype (à défaut, 1/4 de la hauteur du logo).

### Les versions à fournir

| Version | Fond | Couleurs | Usage |
|---|---|---|---|
| Positive couleur | Clair ou blanc | Bleu nuit `#000761` et or `#c6a24e` | Documents courants |
| Négative | Foncé (bleu nuit) | Blanc et or (ou blanc seul) | Fond coloré, bandeaux |
| Monochrome noir | Clair | Noir 100 % K | Photocopie, tampon, fax, gravure |
| Monochrome blanc | Foncé ou photo | Blanc | Sur photo, broderie |
| Pictogramme seul | Au choix | — | Favicon, médaille, petit format |

On exporte chacune en SVG (écran), en PDF vectoriel (impression) et en PNG à fond transparent (bureautique, 1 000 px de large ou plus).

### Construction sur grille

1. Choisir un **module** : par exemple un carré de 10 pt (un pictogramme de 24 modules = 240 pt de côté).
2. Poser des **repères** (guides) tous les modules clés : bords, centre, marges de sécurité de 2 modules.
3. Construire avec des **formes de base** (cercles, rectangles, polygones), puis assembler par opérations booléennes.
4. Aligner les **points d'ancrage** sur la grille ; les courbes en deux ancres par quart de cercle, poignées horizontales ou verticales.
5. **Épaisseur de trait constante** dans tout le pictogramme : pour un pictogramme de 24 modules, 2 modules (8 % de la largeur) ; coins arrondis (extrémités et jonctions arrondies) ou tous droits, jamais mélangés.
6. **Rayons** : un rayon de coin unique ou deux valeurs liées (par exemple 1× et 2× l'épaisseur).
7. **Espaces** : espacement entre éléments égal à l'épaisseur du trait ou à un multiple.

### Alignement optique

Les mathématiques sont régulières, l'œil ne l'est pas. On corrige :

| Forme | Correction | Raison |
|---|---|---|
| Cercle à côté d'un carré | Dépasser de 3 à 5 % de la hauteur au-dessus et en dessous | Un cercle paraît plus petit |
| Triangle | Descendre son centre de gravité, le centrer à 55 % de la hauteur | Le centre géométrique semble trop haut |
| Texte et symbole côte à côte | Aligner la hauteur de capitale, pas la hauteur totale | Les jambages faussent l'alignement |
| Forme à pointes (étoile) | L'agrandir de 5 à 8 % par rapport à un cercle voisin | Les pointes perdent de la masse |
| Trait fin et trait épais | Épaisseurs liées au même module | Cohérence visuelle |

### Tailles minimales et contraste

- Logo complet : 25 mm de large minimum en impression, 120 px à l'écran.
- Pictogramme seul : 8 mm ou 32 px.
- Trait positif minimum : 0,25 pt ; trait en réserve (blanc sur fond) minimum 0,5 pt.
- Texte en réserve (blanc sur fond couleur) : corps 8 pt minimum et fonte à graisse moyenne ou grasse (les empattements fins se bouchent).
- Contraste entre logo et fond : rapport au moins de 4,5:1 pour tout élément porteur de sens.

## 2. Construction de formes (booléennes, Pathfinder)

| Opération | Effet | Cas d'usage |
|---|---|---|
| Union (Unite) | Fusionne les formes en une seule | Silhouette de tente à partir d'un triangle et d'un rectangle |
| Soustraction (Minus Front) | Retire les formes de devant de la forme de derrière | Découper une porte dans une tente |
| Intersection (Intersect) | Garde la zone commune | Bords d'un blason |
| Exclusion (Exclude) | Garde ce qui n'est pas commun | Motifs en anneaux |
| Diviser (Divide) | Découpe en pièces séparées | Colorer chaque morceau |
| Détourer / Rogner (Trim, Crop) | Retire les parties masquées | Nettoyer des recouvrements |
| Fusionner (Merge) | Fusionne les pièces de même couleur | Après un Divide |
| Trait de contour (Outline) | Convertit en contours | Remplacer des aplats par des lignes |

Bonnes pratiques : **dupliquer la forme avant l'opération** (garder une copie masquée) ; viser le moins de points possible ; après une opération, vérifier l'absence de **points parasites** et de **traits de l'épaisseur 0** ; passer en mode contours (`view.outline`) pour détecter les chevauchements. Les traits à convertir en formes pleines (pour une épaisseur qui ne varie pas à la mise à l'échelle) passent par un « tracé du contour » (`object.path.outlineStroke`).

## 3. Typographie en vectoriel

- Texte courant et titres restent **en texte vivant** (modifiable) tant que le fichier circule.
- **Vectoriser** (convertir en tracés, « Create Outlines ») uniquement pour le logo et pour le fichier remis à un imprimeur qui n'a pas les polices : la commande transforme chaque lettre en forme. **Conserver toujours une copie du fichier avec le texte vivant** ; un fichier vectorisé n'est plus corrigeable.
- Alignement optique du texte : kerning optique ou manuel sur les paires problématiques (AV, TY, LT) ; espacement des lettres (approche) de 0 à 50 / 1000 em pour des titres, positif pour des capitales (+ 40 à + 100).
- Titre en capitales : approche + 40 à + 80 (/1000 em) pour aérer ; ne pas souligner.
- Ne mélanger **jamais plus de deux familles** (voir comp-polices-et-hierarchie) : Georgia ou Times en titre, Inter en texte, comme dans l'interface ScoutHub.

## 4. Couleurs, nuanciers et dégradés

### Couleurs globales

Une **couleur globale** est un échantillon lié : si on modifie le nuancier, tous les objets qui l'utilisent changent. Règle : **toute couleur utilisée plus d'une fois est un échantillon global nommé** (« FSGGB Bleu nuit », « FSGGB Or », « Fond clair », « Texte »). On n'a jamais de couleur « libre » dans un document de fédération.

| Nom d'échantillon | Valeur écran (RVB) | Remarque |
|---|---|---|
| FSGGB Bleu nuit | `#000761` | Titres, fonds forts |
| FSGGB Or | `#c6a24e` | Filets, accents (jamais pour du texte courant) |
| FSGGB Fond clair | `#fafafc` | Fonds de pages |
| FSGGB Texte | `#12142b` | Texte courant |

### Modes colorimétriques

- **Écran / bureautique** : RVB, profil sRGB.
- **Imprimeur** : CMJN, avec profil demandé (ISO Coated v2 ou PSO Coated v3 en Europe sur papier couché ; PSO Uncoated v3 sur papier non couché). Faire **épreuver** les couleurs de la fédération ; une approximation du bleu nuit en CMJN est de l'ordre de C100 M95 J0 N45, mais seul l'imprimeur peut la valider sur son papier.
- **Noir** : texte courant et filets fins en **noir 100 % N seul** (0/0/0/100), pour éviter les défauts de repérage ; grands aplats noirs en noir riche (par exemple C60 M40 J40 N100) ; **couverture totale d'encre** limitée à 300 % (papier couché) ou 260–280 % (papier non couché).
- **Tons directs** (Pantone) uniquement si la fédération en possède un pour son identité ; sinon CMJN.

### Dégradés

Deux couleurs voisines, angle de 90° ou 135°, pas plus de trois arrêts. Éviter les dégradés bleu nuit vers noir sur grande surface (bandes visibles à l'impression) : ajouter un grain léger ou limiter l'écart.

### Plans de travail multiples

Un fichier Illustrator peut contenir plusieurs plans de travail (artboards) : une version par plan (positive, négative, monochrome, pictogramme), tous du même module. On nomme chaque plan (« logo-positif », « logo-negatif »). Avantage : un seul fichier source, export en lot (un fichier par plan).

## 5. Gabarits InDesign

### Page type, grille et marges

Un document InDesign professionnel repose sur un **gabarit** (page type, master) unique ou deux (pages courantes, pages de titre).

| Format | Marges (haut / bas / intérieur / extérieur) | Colonnes | Gouttière | Grille de lignes de base |
|---|---|---|---|---|
| A4 portrait, document courant | 20 / 20 / 25 / 20 mm | 2 à 3 | 5 mm (≈ 14 pt) | 12 pt (corps 9,5–10 pt) |
| A5 portrait, livret ou brochure | 15 / 18 / 18 / 15 mm | 1 à 2 | 4,2 mm (12 pt) | 12 pt (corps 9,5 pt) |
| A4 paysage, plan ou tableau | 15 / 15 / 15 / 15 mm | 3 ou 4 | 5 mm | 12 pt |
| Affiche A3 | 12 / 12 / 12 / 12 mm | 4 ou 6 | 6 mm | 18 pt |
| Tract DL (99 × 210 mm) | 10 / 10 / 10 / 10 mm | 1 | — | 12 pt |

Règles :
- **Marges intérieures plus larges** (reliure) pour un livret ; **pages en vis-à-vis** cochée.
- **Grille de lignes de base** de 12 pt pour un corps de 9,5–10 pt ; tous les textes s'alignent dessus (corps × 1,2 environ).
- **Numérotation automatique** : balise « numéro de page automatique » sur le gabarit ; ne jamais taper un numéro à la main.
- **Éléments du gabarit** : filet, titre courant, numéro de page, logo discret ; ils ne doivent pas déranger le contenu.

### Blocs de texte chaînés

- Pour un texte qui coule sur plusieurs colonnes ou pages, **chaîner** les blocs (le petit carré en bas à droite) ; le texte suit sans copier-coller.
- Vérifier qu'aucun bloc ne finit par un **+ rouge** (texte en excès non affiché).
- Mettre en place un **bloc principal** (texte sur la page du gabarit) pour que les nouvelles pages contiennent déjà un bloc chaîné.
- Éviter les **veuves** (dernière ligne seule en haut de page) et **orphelines** (première ligne seule en bas) : option « Garder les lignes ensemble », minimum 2 lignes en haut et en bas.
- Césure : activée avec **minimum 3 lettres avant et après**, **2 césures consécutives maximum**, mots de 6 lettres et plus ; désactivée dans les titres.

### Styles : le cœur de la PAO

| Famille de styles | Exemples | Règle |
|---|---|---|
| Styles de paragraphe | Titre 1, Titre 2, Corps, Légende, Citation, Liste | Tout texte a un style ; **aucun formatage local** |
| Styles de caractère | Gras, Italique, Lien, Mot-clé | Pour des exceptions dans un paragraphe |
| Styles d'objet | Cadre photo, Encadré, Filet | Contour, ombre, marges internes |
| Styles de tableau et de cellule | Tableau sobre : en-tête bleu nuit, lignes à filet fin | Cohérence |
| Styles de lignes | Filet fin or | Réutilisables |

Valeurs de départ (document A4, police Inter ou équivalente, voir comp-polices-et-hierarchie) :

| Style | Police | Corps / interligne | Autres réglages |
|---|---|---|---|
| Titre 1 | Georgia Bold | 26 / 30 pt | Couleur FSGGB Bleu nuit, espace après 12 pt |
| Titre 2 | Georgia Bold | 16 / 20 pt | Espace avant 14 pt, après 6 pt |
| Corps | Inter Regular | 10 / 14 pt | Justifié gauche (drapeau), espace après 6 pt |
| Légende | Inter Italic | 8,5 / 11 pt | Couleur FSGGB Texte à 80 % |
| Liste | Inter Regular | 10 / 14 pt | Retrait de 5 mm, puce courte |

Ne pas justifier en colonnes étroites (< 45 caractères) : trous blancs ; justifier seulement à partir de 55 caractères par ligne (voir comp-typographie-francaise pour les espaces insécables et les guillemets).

### Tableaux

Utiliser les tableaux InDesign avec **en-tête de ligne répété**, **styles de cellule**, filets horizontaux fins (0,25 pt) et pas de filets verticaux ; alignement des nombres à droite ou sur la virgule. Pour un tableau issu d'Excel : le **coller en texte** puis le convertir en tableau, ou le **placer comme fichier lié** (voir ci-dessous).

### Images liées

- Placer les images **liées** (pas incorporées) : le panneau Liens indique les fichiers manquants ou modifiés.
- Résolution effective **de 250 à 300 ppp** pour l'impression ; 150 ppp pour un document à lire à l'écran ; vérifier dans le panneau Liens la colonne « PPP effectif ».
- Images en **CMJN** (ou RVB converti à l'export selon la règle de l'imprimeur) ; jamais de profil inconnu.
- Pas de **ligne fine** détourée sur une photo qui touche le bord : elle doit **déborder** dans le fond perdu.
- Répertoire du projet : `Liens/` à côté du fichier `.indd`, aucun lien vers le bureau ni vers un lecteur externe.

## 6. Préflight (contrôle en amont)

Activer le **préflight** continu (profil [Base] ou un profil personnalisé), vérifier :

| Contrôle | Valeur attendue |
|---|---|
| Polices manquantes | Aucune (sinon : remplacer ou fournir) |
| Images manquantes ou modifiées | Aucune |
| Résolution des images | ≥ 250 ppp (≥ 150 en lecture écran) |
| Espaces colorimétriques | Pas de RVB en impression CMJN (sauf conversion décidée) |
| Texte en excès | Aucun (+ rouge) |
| Fond perdu | 3 mm dans tous les éléments qui touchent le bord |
| Épaisseur de trait | ≥ 0,25 pt |
| Surimpression non voulue | Aucune |
| Pages blanches | Aucune sauf voulue |
| Couverture totale d'encre | ≤ 300 % |

Faire le contrôle **avant chaque export**, puis rassembler le dossier du projet (commande « Assembler » ou « Package »).

## 7. Fond perdu, marges de sécurité, traits de coupe

- **Fond perdu** : 3 mm débordant de chaque côté du format fini pour les éléments qui vont au bord (photos, aplats). Pour une reliure par pliage ou un dos épais, l'imprimeur peut demander 5 mm.
- **Zone de sécurité** : 5 mm à l'intérieur du format fini où ne doit se trouver **aucun texte ni élément important** (tolérance de coupe de ± 1 à 2 mm).
- **Traits de coupe** : placés à l'extérieur du fond perdu, **décalage de 3 mm** (offset) et longueur de 5 mm ; épaisseur de 0,25 pt, en repérage. Pour un fichier Illustrator : « Create Trim Marks ».
- **Repères de pliage** : traits courts hors du fond perdu, jamais dans la page.
- Format fini + fond perdu pour un A4 : 216 × 303 mm ; pour un A5 : 154 × 216 mm ; pour une carte 85 × 55 mm : 91 × 61 mm.

## 8. Export du PDF pour l'imprimeur

| Réglage | Valeur | Raison |
|---|---|---|
| Norme | PDF/X-4 si l'imprimeur le permet (transparence conservée, profils ICC) ; **PDF/X-1a** si exigé (CMJN et tons directs seulement, transparence aplatie) | Échanges fiables |
| Compatibilité | Acrobat 5 (PDF 1.4) ou plus récente selon la norme | Lecture par les logiciels de RIP |
| Qualité des images | 300 ppp (images en couleurs et en niveaux de gris), 1 200 ppp (images au trait) | Impression nette |
| Compression | JPEG qualité maximale (ou « Automatique, qualité maximale ») ; ZIP pour le trait | Pas de défaut visible |
| Sous-échantillonnage | Bicubique à 300 ppp au-delà de 450 ppp | Évite des fichiers énormes |
| Polices | **Incorporées** (sous-ensemble 100 %) ; ou texte vectorisé | Aucun remplacement |
| Traits de coupe et fond perdu | Cochés : traits de coupe, fond perdu 3 mm de chaque côté | Découpe propre |
| Couleurs | Conversion vers le profil de destination de l'imprimeur, **conserver les valeurs du CMJN** | Fidélité |
| Noir du texte | **Noir 100 % N** pour le corps de texte et les filets fins | Pas de décalage |
| Surimpression | Pas d'aplatissement automatique du noir ; vérifier les aperçus | — |
| Marques | Pas de pages « informations » superflues | — |
| Nom du fichier | `AAAA-MM-JJ_nom-du-document_v1_imprimeur.pdf` | Versionnage clair |

Contrôle après export : ouvrir le PDF dans un lecteur, vérifier les **polices** (propriétés du document), les **couleurs** (pas de texte noir en 4 couleurs), le **nombre de pages**, l'aperçu des **surimpressions** ; zoomer sur les petits textes.

## 9. Imposition et livret

### Imposition

L'**imposition** place les pages d'un document sur une grande feuille d'impression dans l'ordre de pliage et de coupe. L'imprimeur la fait en général lui-même ; on fournit des **pages simples dans l'ordre de lecture**, avec fond perdu, **non imposées** (sauf demande contraire). Raison : l'imprimeur choisit selon la presse, le papier et le façonnage.

### Livret (brochure piquée ou agrafée)

- Le nombre de pages est un **multiple de 4** (8, 12, 16, 20, 24…) : une feuille recto verso pliée fournit 4 pages. Si le contenu est insuffisant, ajouter des pages de notes, une page de garde ou une page d'agenda plutôt que des pages blanches.
- **Couverture** : page 1 (première de couverture), page 2 (deuxième, intérieur) et les deux dernières pages ; une couverture peut être sur papier plus épais, le cahier intérieur est dessus.
- **Format** : A5 (livret de camp) obtenu par une feuille A4 pliée en deux ; **piqûre à cheval** (agrafes au dos) jusqu'à environ 64–80 pages.
- **Marge de reliure** : pour un livret piqué, la marge intérieure peut descendre à 15 mm ; au-delà de 40 pages, demander à l'imprimeur de compenser le **décalage de pliage** (rentrée de plus en plus forte vers le centre).
- Pagination : ne pas numéroter la couverture ; la première page numérotée est la page 3 ou 5 selon le choix.
- En bureautique (Word), l'impression en **livret** existe (voir `file.printPdf` avec `pagesPerSheet: "booklet"`, comp-pdf-export-accessibilite).

## Avec les outils de ScoutHub

**InDesign** : aucune commande native ne figure dans les références disponibles ; ce travail se fait par l'interface selon les procédures ci-dessus. **VectorCraft / Illustrator** : les commandes ci-dessous ont été vérifiées dans la liste des commandes natives et leurs paramètres sont recopiés tels quels. Les coordonnées sont en points (1 mm = 2,835 pt). Utiliser `api_commandes` pour découvrir les paramètres supplémentaires d'une commande.

### Commandes utiles (vérifiées)

| Identifiant | Paramètres | Usage |
|---|---|---|
| `file.new` | `preset?`, `name?`, `width?: pt ou "210 mm"`, `height?`, `units?: "Millimeters"\|"Points"\|…` | Nouveau document |
| `document.setup` | `units?`, `bleed?: pt (tous côtés) ou [haut, bas, gauche, droite]` (0 à 72 pt) | Fond perdu, unités |
| `artboard.new` | `x?, y?, width?, height?, name?, color?` | Plan de travail supplémentaire |
| `artboard.rename` | `index?, name` | Nommer un plan |
| `guide.add` | `vertical: bool, pos: pt, artboard?: index` | Repère de grille |
| `shape.rectangle` | `x, y, width, height, radius?, rotation?` → `{id}` | Rectangle (arrondi si `radius`) |
| `shape.ellipse` | `x, y, width, height, rotation?` → `{id}` | Ellipse, cercle |
| `shape.polygon` | `cx, cy, radius, sides=6, rotation?` | Polygone régulier |
| `shape.star` | `cx, cy, radius1, radius2, points=5, rotation?` | Étoile |
| `shape.line` | `x1, y1, x2, y2` | Segment |
| `path.create` | `anchors: [{x, y, in?, out?}], closed?: bool, d?` → `{id}` | Tracé libre |
| `paint.setFill` | `color?: "#rrggbb"\|{c,m,y,k}\|…`, `none?: true`, `swatch?: nom` | Remplissage |
| `paint.setStroke` | mêmes paramètres que `paint.setFill` | Contour |
| `stroke.set` | `weight?: pt, cap?: butt\|round\|square, join?: miter\|round\|bevel, align?: center\|inside\|outside` | Épaisseur et extrémités |
| `swatch.new` | `name?, color?` | Créer un échantillon |
| `swatch.setSpot` | `name, spot?: true` | Ton direct |
| `text.create` | `x, y, text, size?: pt, font?: famille, style?, color?` → `{id}` | Texte libre |
| `text.setStyle` | `ids?\|id?, font?, style?, size?, leading?, tracking?: 1/1000 em, justify?…` | Caractère |
| `select.none`, `select.set` | `{}` ; `{ids: [id…]}` | Sélection |
| `object.group`, `object.ungroup` | `{ids?}` | Grouper |
| `object.align` | `horizontal?: left\|center\|right, vertical?: top\|center\|bottom, to?: selection\|artboard\|key` | Aligner |
| `object.distributeSpacing` | `axis?: horizontal\|vertical, spacing?` | Répartir |
| `object.setBounds` | `x?, y?, width?, height?, reference?: 0..8, proportional?` | Taille et position |
| `object.pathfinder.unite` | `ids?` | Union |
| `object.pathfinder.minusFront` | `ids?` | Soustraction |
| `object.pathfinder.intersect` | `ids?` | Intersection |
| `object.pathfinder.exclude`, `.divide`, `.trim`, `.merge`, `.crop`, `.outline`, `.minusBack` | `ids?` | Autres opérations |
| `object.compoundPath.make` | `ids?` | Tracé transparent composé |
| `object.clippingMask.make` | `ids?` | Masque d'écrêtage |
| `object.path.outlineStroke` | `{}` | Trait en forme pleine |
| `object.path.offsetPath` | `offset: pt, joins?` | Décalage de tracé |
| `type.createOutlines` | `{}` | Vectoriser le texte sélectionné |
| `object.createTrimMarks` | `style?: roman\|japanese, offset?: pt (9), length?: pt (18)` | Traits de coupe |
| `file.documentColorMode` | `{mode: "cmyk"\|"rgb", convert?: true}` | Mode colorimétrique du document |
| `edit.colors.toCMYK` | `fill?, stroke?, includeImages?, ids?` | Convertir en CMJN |
| `document.exportPdf` | `path?, preset?, artboards?, range?, standard?: none\|pdfA2b\|pdfX1a` | PDF imprimeur |
| `document.export` | `path?, format?: svg\|pdf\|png\|jpg\|webp\|…` | Export |
| `document.exportForScreens` | `folder?, zip?, artboards?` | Un fichier par plan de travail |
| `file.saveAs` | `path?, format?: vectorcraft\|pdf\|svg\|ai\|eps` | Enregistrer |
| `links.check`, `links.list` | `ids?` ; `show?: all\|missing\|modified` | Contrôle des images liées |

Remarque sur le nuancier : pour rendre une couleur globale, créer l'échantillon par `swatch.new` puis l'appliquer par `swatch` dans `paint.setFill` (`{"swatch":"FSGGB Bleu nuit"}`).

### Séquence 1 : logo simple (écusson bleu nuit et or)

Les couleurs sont fixées avant la création des formes (aucun objet sélectionné). Après le lot, lire l'état avec `api_inspecter` pour confirmer les identifiants et la position.

```json
[
 {"commande":"file.new","parametres":{"name":"logo-fsggb","width":300,"height":300}},
 {"commande":"select.none","parametres":{}},
 {"commande":"swatch.new","parametres":{"name":"FSGGB Bleu nuit","color":"#000761"}},
 {"commande":"swatch.new","parametres":{"name":"FSGGB Or","color":"#c6a24e"}},
 {"commande":"paint.setFill","parametres":{"color":"#000761"}},
 {"commande":"paint.setStroke","parametres":{"none":true}},
 {"commande":"shape.ellipse","parametres":{"x":30,"y":30,"width":240,"height":240}},
 {"commande":"paint.setFill","parametres":{"none":true}},
 {"commande":"paint.setStroke","parametres":{"color":"#c6a24e"}},
 {"commande":"stroke.set","parametres":{"weight":4}},
 {"commande":"shape.ellipse","parametres":{"x":45,"y":45,"width":210,"height":210}},
 {"commande":"paint.setFill","parametres":{"color":"#c6a24e"}},
 {"commande":"paint.setStroke","parametres":{"none":true}},
 {"commande":"shape.star","parametres":{"cx":150,"cy":150,"radius1":60,"radius2":26,"points":5}}
]
```

Variantes : versions négative, monochrome noir et blanc par `file.saveAs` d'un plan de travail par version (`artboard.new`). Exporter ensuite avec `document.export` (`format: "svg"` et `"png"`).

### Séquence 2 : pictogramme « tente » sur grille

Grille de 24 modules de 10 pt (carré de 240 pt), repères à 24, 120 et 216 pt, trait constant de 20 pt (2 modules), extrémités et jonctions arrondies.

```json
[
 {"commande":"file.new","parametres":{"name":"pictogramme-tente","width":240,"height":240}},
 {"commande":"guide.add","parametres":{"vertical":true,"pos":24}},
 {"commande":"guide.add","parametres":{"vertical":true,"pos":120}},
 {"commande":"guide.add","parametres":{"vertical":true,"pos":216}},
 {"commande":"guide.add","parametres":{"vertical":false,"pos":24}},
 {"commande":"guide.add","parametres":{"vertical":false,"pos":120}},
 {"commande":"guide.add","parametres":{"vertical":false,"pos":216}},
 {"commande":"select.none","parametres":{}},
 {"commande":"paint.setFill","parametres":{"none":true}},
 {"commande":"paint.setStroke","parametres":{"color":"#000761"}},
 {"commande":"stroke.set","parametres":{"weight":20,"cap":"round","join":"round"}},
 {"commande":"path.create","parametres":{"anchors":[{"x":36,"y":190},{"x":120,"y":50},{"x":204,"y":190}],"closed":true}},
 {"commande":"path.create","parametres":{"anchors":[{"x":120,"y":190},{"x":120,"y":130}],"closed":false}}
]
```

Vérifier avec `api_inspecter` (ou une capture) que la forme est centrée et que les points tombent sur les repères ; l'axe vertical est en mode « origine en haut » ou « en bas » selon le document : si la tente apparaît à l'envers, inverser les ordonnées (`y` → `240 − y`).

### Séquence 3 : bandeau d'en-tête de 1 200 × 300 pt

Fond bleu nuit, filet or de 2 pt, titre en Georgia, sous-titre en Inter (si une police manque, le texte utilise une police de remplacement : contrôler avec `text.setStyle`).

```json
[
 {"commande":"file.new","parametres":{"name":"bandeau-camp","width":1200,"height":300}},
 {"commande":"select.none","parametres":{}},
 {"commande":"paint.setFill","parametres":{"color":"#000761"}},
 {"commande":"paint.setStroke","parametres":{"none":true}},
 {"commande":"shape.rectangle","parametres":{"x":0,"y":0,"width":1200,"height":300}},
 {"commande":"paint.setFill","parametres":{"color":"#c6a24e"}},
 {"commande":"shape.rectangle","parametres":{"x":60,"y":200,"width":120,"height":2}},
 {"commande":"paint.setFill","parametres":{"color":"#ffffff"}},
 {"commande":"text.create","parametres":{"x":60,"y":130,"text":"Camp d'été 2026","size":56,"font":"Georgia","style":"Bold","color":"#ffffff"}},
 {"commande":"text.create","parametres":{"x":60,"y":175,"text":"Louveteaux et Jeannettes, du 18 au 28 juillet","size":22,"font":"Inter","style":"Regular","color":"#c6a24e"}}
]
```

Ensuite : `document.export` avec `{"path":"bandeau-camp.png","format":"png"}`. Contrôle : le rapport de contraste blanc sur `#000761` dépasse largement 4,5:1 ; l'or sur bleu nuit est correct pour du texte gras de 22 pt et plus (rapport d'environ 6:1).

### Séquence 4 : étiquette 90 × 50 mm avec fond perdu et traits de coupe

90 mm = 255,1 pt ; 50 mm = 141,7 pt ; fond perdu 3 mm = 8,5 pt. On dessine le fond sur 272,1 × 158,7 pt à partir de −8,5.

```json
[
 {"commande":"file.new","parametres":{"name":"etiquette-materiel","width":"90 mm","height":"50 mm","units":"Millimeters"}},
 {"commande":"document.setup","parametres":{"bleed":8.5}},
 {"commande":"select.none","parametres":{}},
 {"commande":"paint.setFill","parametres":{"color":"#fafafc"}},
 {"commande":"paint.setStroke","parametres":{"none":true}},
 {"commande":"shape.rectangle","parametres":{"x":-8.5,"y":-8.5,"width":272.1,"height":158.7}},
 {"commande":"paint.setFill","parametres":{"color":"#000761"}},
 {"commande":"shape.rectangle","parametres":{"x":-8.5,"y":-8.5,"width":272.1,"height":40}},
 {"commande":"text.create","parametres":{"x":16,"y":16,"text":"Matériel du camp","size":14,"font":"Georgia","style":"Bold","color":"#ffffff"}},
 {"commande":"text.create","parametres":{"x":16,"y":70,"text":"Unité : Louveteaux","size":11,"font":"Inter","style":"Regular","color":"#12142b"}},
 {"commande":"text.create","parametres":{"x":16,"y":90,"text":"Caisse n° 07 : cuisine","size":11,"font":"Inter","style":"Regular","color":"#12142b"}},
 {"commande":"select.all","parametres":{}},
 {"commande":"object.createTrimMarks","parametres":{"offset":8.5,"length":14}},
 {"commande":"document.exportPdf","parametres":{"path":"etiquette-materiel.pdf","standard":"pdfX1a"}}
]
```

Contrôler que `standard: "pdfX1a"` n'est accepté qu'avec des couleurs en CMJN ; si la commande signale du RVB, appeler `edit.colors.toCMYK` (`{"fill":true,"stroke":true,"includeImages":true}`) puis `file.documentColorMode` (`{"mode":"cmyk","convert":true}`) avant l'export. Les unités du document étant des millimètres, les valeurs ci-dessus sont celles à vérifier au premier essai : si les mesures semblent fausses, recréer le document en points (`width: 255.1, height: 141.7`).

## Erreurs fréquentes

| Défaut | Conséquence | Correction |
|---|---|---|
| Logo importé en image bitmap | Flou à l'agrandissement | Refaire en vectoriel |
| Couleurs libres | Écarts entre documents | Échantillons globaux nommés |
| Texte non vectorisé dans le fichier de l'imprimeur sans polices | Police de remplacement | Incorporer ou vectoriser |
| Texte noir en quadrichromie | Contours colorés, mauvais repérage | Noir 100 % N |
| Pas de fond perdu | Liseré blanc à la coupe | 3 mm de fond perdu |
| Texte à 2 mm du bord | Coupé | Zone de sécurité de 5 mm |
| Livret de 10 pages | Pages blanches | Multiple de 4 |
| Images à 72 ppp | Impression floue | 300 ppp réels |
| Tableau tapé avec des espaces | Alignement instable | Tableau ou tabulations |
| Bloc de texte avec « + » rouge | Texte tronqué | Chaîner ou ajuster |

## Liste de contrôle avant de livrer

1. Le logo est vectoriel, lisible à 25 mm de large, décliné en versions positive, négative, noire et blanche.
2. Le pictogramme est construit sur une grille, avec une épaisseur de trait constante et des rayons cohérents.
3. Les corrections d'alignement optique (cercle, triangle, texte) sont faites.
4. Toutes les couleurs répétées sont des échantillons globaux nommés (bleu nuit `#000761`, or `#c6a24e`).
5. Pas plus de deux familles de polices ; texte vectorisé seulement dans la copie destinée à l'imprimeur, et un original vivant est conservé.
6. Le gabarit InDesign comprend marges, colonnes, gouttières et grille de lignes de base de 12 pt ; la numérotation est automatique.
7. Tous les textes portent un style de paragraphe ; aucun formatage local.
8. Aucun bloc de texte ne présente de « + » rouge ; veuves et orphelines évitées.
9. Les images sont liées, à 250–300 ppp effectifs, et aucun lien n'est manquant ou modifié.
10. Le préflight ne signale aucune erreur (polices, images, RVB, excès de texte).
11. Fond perdu de 3 mm, zone de sécurité de 5 mm, traits de coupe décalés de 3 mm.
12. Le noir du texte est du noir 100 % N ; la couverture d'encre est inférieure ou égale à 300 %.
13. Le PDF est en PDF/X-4 (ou PDF/X-1a si demandé), polices incorporées, images à 300 ppp.
14. Le nombre de pages d'un livret est un multiple de 4 ; la couverture n'est pas numérotée.
15. Le PDF final a été rouvert et vérifié (polices, couleurs, pages, petits textes).
16. Le nom du fichier suit la règle `AAAA-MM-JJ_nom_v1_imprimeur.pdf`.
17. Le dossier du projet est assemblé (fichier source, liens, polices autorisées à partager).
18. Les mentions légales (nom de la fédération, imprimeur, mention du papier si demandée) sont présentes.

## Questions auxquelles la fiche répond

- Comment construire un logo ou un pictogramme propre sur grille avec un trait constant ?
- Comment corriger l'alignement optique d'un cercle, d'un triangle ou d'un texte ?
- Quelles versions du logo faut-il fournir et dans quels formats ?
- Quelles opérations booléennes (Pathfinder) utiliser pour une silhouette ?
- Comment gérer les couleurs globales, le CMJN, le noir du texte et la couverture d'encre ?
- Quels réglages de gabarit InDesign (marges, colonnes, gouttière, grille de base) pour un A4 ou un A5 ?
- Comment structurer les styles de paragraphe, les blocs chaînés et les images liées ?
- Que contrôler au préflight avant d'envoyer à l'imprimeur ?
- Quel fond perdu, quels traits de coupe et quel PDF (PDF/X-1a, PDF/X-4) fournir ?
- Pourquoi un livret doit-il avoir un nombre de pages multiple de 4 ?
- Quelles commandes natives VectorCraft/Illustrator utiliser, avec quels paramètres ?
- Comment construire en api_lot un logo, un pictogramme, un bandeau et une étiquette ?
