---
id: comp-word-document-professionnel
titre: Construire un document Word élégant et propre (styles, page, colonnes, tableaux, commandes WordCraft)
theme: Compétences
type: synthese
sources:
  - titre: Usages professionnels de la composition de documents de bureau (styles, grilles, typographie de labeur)
  - titre: Lexique des règles typographiques en usage à l'Imprimerie nationale (ouvrage de référence, cité pour la typographie française)
mots_cles: Word, WordCraft, document professionnel, styles, Titre 1, Normal, thème, marges, colonnes, gouttière, en-tête, pied de page, pagination, table des matières, table des figures, légende, note de bas de page, renvoi, signet, tableau, en-tête répété, zébrure, habillage, texte alternatif, interligne, veuves et orphelines, césure, export PDF, api_lot, para.style, layout.columns, insert.spreadsheet, references.toc
liens: comp-typographie-francaise, comp-polices-et-hierarchie, comp-mise-en-page-principes, comp-couleur-et-identite-fsggb, comp-pdf-export-accessibilite, comp-word-types-de-documents, app-word, suite-craft-mcp
resume: Méthode complète pour produire dans WordCraft un document net et durable : structure d'abord, styles ensuite, page, colonnes, en-têtes, listes, sommaire, tableaux, images, vérifications et PDF. Chaque besoin est relié à l'identifiant exact de la commande native et à ses paramètres, avec des séquences api_lot prêtes à rejouer, et la liste de ce que WordCraft ne fait pas nativement.
---

## Le principe : un document est une structure habillée par des styles
Un document professionnel ne se reconnaît pas à ses effets mais à sa constance : mêmes titres au même corps, mêmes espaces, mêmes marges de la première à la dernière page. Cette constance ne s'obtient qu'avec des **styles** (un nom qui regroupe police, corps, couleur, espacement, règles de coupure). Un titre mis en gras et en 18 pt à la main est un texte quelconque que Word ne reconnaît pas : il n'entre ni dans le sommaire, ni dans le volet de navigation, ni dans un PDF balisé, et chaque correction doit être refaite titre par titre. Règle absolue : **jamais de mise en forme manuelle répétée** (gras + taille pour un titre, Entrée vides pour espacer, espaces ou tabulations pour aligner, retour à la ligne pour couper un paragraphe).

### L'ordre de travail (ne pas l'inverser)
1. **Fond** : rédiger ou coller le texte brut, sans aucune mise en forme (`edit.pasteText`, ou `text.insert`). Relire et corriger le contenu avant toute mise en page : refaire une page parfaite parce que trois lignes ont changé est le gaspillage le plus fréquent.
2. **Structure** : appliquer les styles de paragraphe (Titre 1, Titre 2, Normal, Liste…) à tout le texte. À ce stade le document est « laid mais juste », et son plan est lisible dans le volet de navigation.
3. **Page** : format, orientation, marges, sections, colonnes.
4. **Styles** : régler une seule fois la police, le corps, l'interligne et l'espacement de chaque style (ou changer la police du thème). Tout le document se met à jour d'un coup.
5. **Composants** : tableaux, images, légendes, listes numérotées, notes, en-têtes et pieds, sommaire.
6. **Contrôle** : mise à jour des champs, vérification, propriétés, enregistrement en .docx, export PDF.

Pourquoi cet ordre : chaque étape dépend de la précédente (les marges changent les sauts de page, les sauts de page changent la pagination du sommaire). Voir la fiche comp-mise-en-page-principes pour la grille et la fiche comp-typographie-francaise pour les espaces insécables, guillemets et majuscules accentuées.

## Les styles : lesquels, avec quelles valeurs
Valeurs de référence pour un document A4 courant (lettre, rapport, projet) : polices Georgia pour les titres et Calibri pour le texte (sobre, lisible, présente partout), ou toute autre paire décrite dans comp-polices-et-hierarchie. Couleurs de la fédération : bleu nuit `000761`, texte `12142B`, or `C6A24E` en accent. L'or ne contraste qu'environ 2,4:1 avec le blanc : **jamais en texte courant**, seulement en filet, liseré ou gros titre décoratif ; sur fond bleu nuit il atteint environ 7:1 et peut porter du texte.

| Style | Police et corps | Couleur | Avant / après | Interligne | Particularités |
|---|---|---|---|---|---|
| Normal | Calibri 11 pt | 12142B | 0 / 6 pt | 1,15 | veuves et orphelines activées, alignement à gauche |
| Titre (page de titre) | Georgia 28 pt | 000761 | 0 / 6 pt | 1,0 | filet or 1,5 pt en dessous |
| Sous-titre | Calibri 14 pt | 4A4D68 | 0 / 18 pt | 1,0 | maigre, jamais en gras |
| Titre 1 | Georgia 18 pt gras | 000761 | 18 / 6 pt | 1,0 | conserver avec le suivant |
| Titre 2 | Georgia 14 pt gras | 000761 | 12 / 4 pt | 1,0 | conserver avec le suivant |
| Titre 3 | Calibri 12 pt gras | 12142B | 10 / 3 pt | 1,0 | conserver avec le suivant |
| Citation | Georgia 11,5 pt italique | 4A4D68 | 8 / 8 pt | 1,15 | retrait 28 pt de chaque côté, filet gauche or 2,25 pt |
| Légende | Calibri 9 pt | 4A4D68 | 3 / 10 pt | 1,0 | sous une figure, au-dessus d'un tableau |
| Liste (puces) | Calibri 11 pt | 12142B | 0 / 3 pt | 1,15 | retrait 18 pt, suspendu 18 pt, tiret « – » ou puce |
| Notes de bas de page | Calibri 9 pt | 12142B | 0 / 2 pt | 1,0 | séparées du corps par un filet court |
| En-tête / pied | Calibri 9 pt | 4A4D68 | 0 / 0 pt | 1,0 | position 12,5 mm du bord |

Justification des valeurs : l'échelle 11 – 14 – 18 – 28 suit un rapport d'environ 1,25 (assez marqué pour que la hiérarchie se voie sans gras excessif) ; l'espace **avant** un titre est toujours supérieur à l'espace **après** (le titre se rattache à ce qu'il annonce, pas à ce qui précède) ; l'interligne de 1,15 donne environ 15,5 pt pour du 11 pt, confortable pour une ligne de 80 à 90 caractères ; les titres restent à 1,0 car une interligne ample sur 2 lignes de titre les disloque.

**Longueur de ligne.** Calibri 11 pt sur 160 mm (marges de 25 mm) donne environ 85 à 90 caractères : c'est le haut de la fourchette lisible (45 à 90). Pour un rapport long, passer à 30 mm de marge (150 mm, environ 80 caractères), ou à Georgia 11 pt plus large, ou à deux colonnes.

### Définir ou modifier un style
Deux voies avec les commandes natives.
- **Par l'exemple (la plus sûre)** : sélectionner un paragraphe, lui donner son aspect (`format.font`, `format.size`, `format.bold`, `format.color`, `para.spacing`, `para.lineSpacing`, `para.keepNext`, `para.borders`), puis `styles.updateToMatch` avec `{"style":"Heading 1"}`. Le style prend l'aspect du paragraphe, et tous les paragraphes du même style le suivent. Pour un style neuf : `styles.create` avec `{"name":"Encadré scout","basedOn":"Normal","fromSelection":true}`.
- **Par propriétés** : `styles.modify` accepte `style`, `chr` (propriétés de caractère), `para` (propriétés de paragraphe), `name`, `next` (style appliqué au paragraphe suivant, par exemple Normal après un titre). Les clés internes de `chr` et `para` ne figurent pas dans la liste des commandes : ne pas les deviner. Les relever en lisant le résultat de `styles.manage` (champ `format`) ou de `format.state`, ou utiliser la voie par l'exemple.
- Retrouver les noms exacts : `styles.list` et `styles.manage`. Ne pas supposer qu'un nom français existe : `para.heading1`, `para.heading2`, `para.heading3` et `para.normal` sont sûrs ; pour les autres, `para.style` accepte un nom ou un identifiant relevé dans `styles.list`.
- Un style **de caractère** (`format.charStyle`) sert à un mot en emphase sans toucher au paragraphe ; il remplace le gras manuel dispersé.

### Ce qu'il ne faut jamais faire
- Réaliser un titre par gras + taille ; sauter des lignes avec Entrée (utiliser `para.spacing`) ; aligner avec des espaces (utiliser `para.tabs` ou un retrait) ; couper une page avec Entrée répétée (utiliser `insert.pageBreak` ou `para.pageBreakBefore`) ; mélanger plus de deux familles de polices ; souligner autre chose qu'un lien ; justifier une colonne étroite sans césure.
- Effacer la mise en forme du texte collé : `edit.pasteText` d'abord. Un texte venu d'un site ou d'un courriel apporte sa police et ses styles parasites.

## Thèmes
Le thème règle les polices (titres/texte) et la palette. `design.themeFonts` avec `{"heading":"Georgia","body":"Calibri"}` change d'un coup la police de tous les titres et du texte courant qui s'y réfèrent. `design.styleSet` (`default`, `basic`, `lines`, `shaded`, `casual`, `centered`, `minimalist`, `title`) change l'ensemble des styles ; `minimalist` est le plus sobre. `design.paragraphSpacing` (`default`, `none`, `compact`, `tight`, `open`, `relaxed`, `double`) règle l'espacement global ; `design.scaleFontSizes` avec `{"percent":10}` agrandit tout de 10 %. `design.theme` avec un nom pris dans `design.themes`. `design.themeColors` n'a pas de paramètre : la **palette du thème ne se personnalise pas par commande** ; on pose donc les couleurs de la fédération dans les styles eux-mêmes (`format.color`). Pour qu'un document reste fidèle chez le destinataire, rester sur des polices répandues et contrôler `font.missing` (liste des polices remplacées à l'affichage).

## La page
| Besoin | Valeur | Raison |
|---|---|---|
| Format | A4 (595,3 × 841,9 pt) | usage français ; `layout.size` `{"name":"A4"}` |
| Marges d'une lettre | 25 haut / 20 bas / 25 gauche / 20 droite (mm) | bloc adresse et reliure légère |
| Marges d'un rapport | 25 / 25 / 25 / 25 | ligne de 160 mm, pied confortable |
| Marges d'une page dense (CV, programme) | 15 à 20 | gagner de la place sans étouffer |
| Marge de reliure (gutter) | +7 à +10 mm | pour impression recto verso reliée |
| Orientation paysage | seulement pour un tableau large | un lecteur ne tourne pas l'écran pour un texte |

**Conversion millimètres → points** (WordCraft travaille en points) : 1 mm = 2,835 pt. Valeurs utiles : 10 mm = 28,3 pt ; 12,5 mm = 35,4 ; 15 mm = 42,5 ; 20 mm = 56,7 ; 22 mm = 62,4 ; 25 mm = 70,9 ; 30 mm = 85,0 ; 35 mm = 99,2. Largeur utile : 160 mm = 453,5 pt (marges 25) ; 170 mm = 481,9 pt (marges 20).

Commandes : `layout.size`, `layout.margins` (`preset` ou `top`, `bottom`, `left`, `right`, `gutter`, `mirror`), `layout.orientation` (`portrait|landscape`), `layout.break` (`page|column|textWrapping|nextPage|continuous|evenPage|oddPage`), `layout.verticalAlign` (`top|center|justify|bottom`, utile pour centrer une page de titre), `layout.pageSetup` (remplace la section entière, en-têtes et pieds compris : à éviter sans nécessité), `layout.section` et `document.layout` (lecture). **Section** : toute partie qui a sa propre page (marges, orientation, colonnes, en-tête, numérotation) est une section, séparée par `layout.break` `nextPage` ; `continuous` change les colonnes sans changer de page.

Pages face à face (livret, brochure) : `layout.margins` `{"mirror":true,"gutter":28.3}` puis `layout.differentOddEven`. Cadre décoratif ou fond : `design.pageBorders`, `design.pageColor`, `design.watermark` (par exemple « PROJET » en gris clair `C9CBD9`, diagonal) à retirer avant la diffusion (`{"remove":true}`).

## Les colonnes
Les colonnes se justifient pour un bulletin, un livret, une fiche à lire en diagonale ; elles gênent pour une lettre, un tableau ou un texte juridique.
- **Nombre** : 2 colonnes sur A4 portrait ; 3 seulement avec un corps de 9,5 à 10 pt. Au-delà, passer en paysage.
- **Gouttière** (espace entre colonnes) : 8 mm (22,7 pt) ; 10 mm si un filet sépare. Avec des marges de 20 mm, chaque colonne mesure 81 mm, environ 40 caractères en 10,5 pt.
- **Filet séparateur** : `separator:true`, discret ; le remplacer par un grand blanc dans un document aéré.
- **Alignement** : à gauche (drapeau) tant que la césure n'est pas activée ; justifié seulement avec césure (`layout.hyphenation`), sinon les « rivières » de blanc défigurent la colonne.
- **Titre** de document en 1 colonne au-dessus, corps en 2 : on coupe avec une section continue.
- **Équilibrer** la dernière page : terminer le texte par `layout.break` `continuous`.
- **Saut de colonne** : `text.columnBreak`, pour qu'un encadré démarre en haut de colonne ; jamais avec des Entrée.
- Un titre ne doit pas finir en bas d'une colonne : `para.keepNext` dans les styles de titre.
- Colonnes inégales (étroite pour une marge de notes) : `widths` dans `layout.columns`.

## En-têtes, pieds de page, pagination
Règles : l'en-tête situe (titre court du document, nom de l'unité), le pied numérote ; on ne répète pas la même information en haut et en bas ; 9 pt, gris-bleu `4A4D68`, filet fin sous l'en-tête (`para.borders` `bottom`, 0,5 pt `C9CBD9`). Position : 12,5 mm du bord (35,4 pt), `hf.position` `{"header":35.4,"footer":35.4}`.
- **Première page différente** : `layout.differentFirstPage` (bascule). Indispensable pour une lettre à en-tête et une page de titre sans numéro.
- **Pages paires/impaires** : `layout.differentOddEven` ; titre du document sur les pages paires, titre de chapitre sur les impaires ; numéro à l'extérieur.
- **Pagination** : champs `PAGE` et `NUMPAGES` via `insert.field`. `insert.pageNumber` avec `"format":"x of y"` écrit « of » en anglais : en français, composer « Page X sur Y » avec des champs. `layout.pageNumberFormat` règle chiffres romains pour un sommaire (`lowerRoman`) et le redémarrage (`start`:1 pour la première page du corps).
- **Sections** : `layout.linkToPrevious` coupe ou rétablit le lien avec la section précédente (sans cela, changer l'en-tête du corps modifie aussi celui de la page de titre).
- Accès : `insert.createHeader`, `insert.createFooter` (placent le curseur dans la zone), `insert.editHeader`, `insert.editFooter`, `insert.closeHeader` (retour au corps), `insert.removeHeader`, `insert.removeFooter`, `insert.header` et `insert.footer` avec un `text` ou un `preset`.

## Numérotation des titres et des listes
- **Titres numérotés (1 / 1.1 / 1.1.1)** : `list.multilevelPreset` `{"preset":"headings"}` crée une liste à neuf niveaux liée à Titre 1–9 : chaque paragraphe de ces styles se numérote seul, et le sommaire reprend les numéros. Autres préréglages : `outlineHeadings` (I. / A. / 1.), `chapter`, `article`. Ne jamais taper « 1.2 » à la main.
- **Plan des listes** : `para.numbering` (`numbered`, `numberedParen`, `upperLetter`, `lowerLetter`, `lowerRoman`, `outline`), `para.bullets`, `para.multilevel` (`legal` ou `outline`), `para.listLevel` (niveau 0 à 8), `para.promote`/`para.demote`, `para.restartNumbering`, `para.setNumberingValue`. Définir son propre plan : `list.define` (par niveau `format`, `text` comme `%1.` ou `%1.%2)`, `start`, `restartAfter`), puis `list.get` pour contrôler.
- **Usage français** : niveau 1 « 1. », niveau 2 « a) », niveau 3 « – ». Une liste de 3 à 7 éléments ; une liste d'une seule ligne par élément ; une phrase d'introduction terminée par deux-points ; pas de point final si les éléments sont des fragments, point final et majuscule si ce sont des phrases complètes.
- Retrait des puces : 18 pt pour le texte, 18 pt de retrait suspendu (`para.indents` `{"left":36,"firstLine":-18}` pour le niveau 1).

## Sommaire, figures, notes, renvois, signets
- **Sommaire** : `references.toc` avec `levels` (2 ou 3 au plus), `title` (« Sommaire »), `pageNumbers`, `rightAlign`, `tabLeader` `dot`, `hyperlinks`. Le placer après la page de titre, jamais avant la fin de la rédaction ; le mettre à jour avec `references.updateToc` ou `references.updateFields` (`{"all":true}`) avant l'export. Un document de moins de 4 pages n'a pas de sommaire.
- **Légendes** : `references.caption` avec `label` (`Figure`, `Table`), `text`, `position` (`below` pour une figure, `above` pour un tableau), `separator`. Un chiffre dans un renvoi ne se tape pas : `insert.crossReference`.
- **Table des figures / tableaux** : `references.tableOfFigures` `{"label":"Figure","tabLeader":"dot"}` puis `references.updateFigures`.
- **Notes de bas de page** : `references.footnote` `{"text":"..."}` ; 9 pt, brèves (2 lignes), pour une source ou une précision, pas pour un développement. Appel placé avant la ponctuation. `references.noteOptions` règle numérotation et position ; `references.convertNotes` bascule en notes de fin.
- **Renvois** : `insert.crossReference` avec `to` (`heading`, `bookmark`, `figure`, `table`) et `target` ; sans paramètre, il liste les cibles. **Signets** : `insert.bookmark` `{"name":"Programme"}` ; lien interne : `insert.link` `{"bookmark":"Programme"}`.
- **Champs** : `insert.field` (`instr`, `result`), `insert.docProperty` (`Title`, `Author`…) ; `fields.toggleCode`, `fields.lock`, `fields.unlink` (fige un champ).

## Tableaux
Un tableau sert à **comparer des données** (horaires, budgets, responsables), jamais à positionner du texte : mettre un récit ou une mise en page en deux « colonnes » dans un tableau crée un document inaccessible, qui casse à la moindre édition. Pour des colonnes de texte : `layout.columns`. Pour aligner une adresse ou un prix : `para.tabs`. Exception admise : un formulaire (fiche sanitaire).
- **Création** : `insert.table` (`rows`, `cols`, `style`) ou, avec contenu, `insert.spreadsheet` avec `values` (lignes de longueur égale, 1 000 lignes × 63 colonnes au plus), `header` (répète l'en-tête sur chaque page) et `style`. `table.fromText` convertit du texte à tabulations.
- **Largeurs** : somme égale à la largeur utile (453,5 ou 481,9 pt) ; première colonne texte large, colonnes de nombres étroites ; `table.columnWidth` `{"width":pt}` (colonnes sélectionnées) ; `table.autofit` `fixed` pour figer ; `table.properties` (`align`, `widthPct`, `indent`, `allowBreak`, `headerRow`, `valign`).
- **Alignements** : texte à gauche, nombres à droite (ou sur la virgule), en-têtes alignés comme leurs données ; `table.cellAlign` (`topLeft`…`bottomRight`) ; centrage vertical des cellules sur une rangée haute.
- **Cellules** : marges `table.cellMargins` `{"top":3,"bottom":3,"left":5.4,"right":5.4}` ; hauteur minimale 20 pt (`table.rowHeight` `{"height":20,"rule":"atLeast"}`) ; interdire la coupure d'une rangée sur deux pages (`allowBreak:false`).
- **Bordures sobres** : traits horizontaux fins, 0,5 pt `C9CBD9`, pas de traits verticaux, trait de fermeture 1 pt `000761` sous la dernière rangée ; `table.borders` (`all`, `outside`, `inside`, `none`, `top`, `bottom`, `left`, `right`, `width`, `color`).
- **En-tête** : fond `000761`, texte blanc gras 10,5 pt (`table.shading`, `format.color`, `format.bold`) ; `table.repeatHeader` répète la rangée sur chaque page ; `table.look` `{"headerRow":true,"bandedRows":true}`.
- **Zébrures** : une rangée sur deux à `F3F4F9` (`table.shading` par rangée ou style de tableau via `table.newStyle` / `table.modifyStyle`) ; au plus 5 rangées de suite sans zébrure.
- **Fusion** : `table.merge` sur cellules sélectionnées (titre de groupe sur toute la largeur), `table.split` ; fuir les fusions complexes qui interdisent le tri et la lecture vocale.
- **Totaux** : `table.formula` `{"formula":"=SUM(ABOVE)"}`, rangée en gras avec trait au-dessus.
- **Accessibilité** : `table.altText` `{"title":"...","text":"..."}`, en-tête de colonne réel.

## Images et formes
- **Insertion** : `insert.picture` `{"path"|"data","width":pt,"alt":"..."}` ; `picture.size` (`width`, `lockAspect`) ; largeur maximale = largeur utile. Résolution 200 ppp à la taille imprimée (130 ppp suffisent à l'écran), `picture.compress` `{"maxPixels":n}` pour alléger. Format : JPEG pour une photo, PNG pour un logo ou un dessin.
- **Habillage** : `arrange.wrap` (`inline` pour une figure seule dans le fil du texte, `square` ou `topAndBottom` pour une image à côté d'un texte, `behindText` pour un fond, éviter `tight`/`through` qui font des lignes irrégulières) ; `arrange.wrapText` (`bothSides|left|right|largest`) ; `arrange.position` (préréglage `topRight`… ou `x`/`y`) ; `arrange.align` ; `arrange.moveWithText` `true`.
- **Légende** et **texte alternatif** : toute image porte `alt` (une phrase qui décrit ce qui compte, ou `picture.altText` `{"decorative":true}` pour un filet décoratif) ; `object.altText` pour formes et zones de texte.
- **Retouches simples** : `picture.crop`, `picture.border` (jamais de cadre épais), `picture.style` (`simpleFrame`, `rounded`…). Pas d'ombre ni de reflets.
- **Formes** : `insert.shape` (`rectangle`, `line`, `arrow`…, `fill`, `stroke`), `shape.fill`, `shape.outline`, `insert.textBox` pour un encadré fixe ; un encadré qui suit le texte se fait plutôt par `para.borders` + `para.shading` sur un style (retraits de 10 pt).
- **Lettrine** : `insert.dropCap` `{"position":"dropped","lines":3,"font":"Georgia"}` pour l'ouverture d'un article de bulletin, une seule par page.

## Espacement, coupures, justification
- **Avant/après** : `para.spacing` `{"before":0,"after":6}` ; l'espace après un paragraphe et l'espace avant le suivant peuvent s'additionner selon le logiciel : régler surtout l'espace **après** pour le texte, l'espace **avant** pour les titres, et vérifier au rendu.
- **Interligne** : `para.lineSpacing` `{"value":1.15}` (multiple), `{"atLeast":pt}` ou `{"exactly":pt}` (exact : réserver aux cellules de tableau ; il coupe les accents si trop serré).
- **Veuves et orphelines** : `para.widowControl` `{"value":true}` (jamais une seule ligne seule en haut ou en bas de page) ; `para.keepLines` pour un bloc court (adresse, cartouche) ; `para.keepNext` pour un titre ou une légende de tableau ; `para.pageBreakBefore` pour un Titre 1 qui commence une page.
- **Justification** : `para.alignLeft` par défaut ; `para.justify` seulement avec `layout.hyphenation` `{"value":true,"limit":2,"caps":false}` et langue du document réglée en français (`select.all` puis `review.language` `{"lang":"fr-FR"}`). Sans dictionnaire de coupure français installé (`proof.packs`, `proof.installPack`), rester à gauche. `text.optionalHyphen` pour une coupure à la main, `text.nbHyphen` pour un trait d'union insécable, `text.nbsp` pour l'espace insécable devant `: ; ! ?` et dans « 12 h 30 ».
- **Tabulations** : `para.tabs` `{"set":[{"pos":453.5,"align":"right","leader":"dot"}]}` pour un prix ou un horaire aligné à droite avec points de conduite ; jamais d'espaces répétés.

## Révision, propriétés, PDF
- **Suivi** : `review.trackChanges` `{"value":true}` ; `review.newComment` `{"text":"..."}` ; `review.accept`, `review.reject`, `review.acceptAll`, `review.rejectAll` ; comparer deux versions : `review.compare`. Avant de diffuser, plus aucune marque : `file.inspect` signale commentaires, révisions, texte masqué ; `file.privacyOptions` retire noms et dates.
- **Propriétés** : `file.properties` `{"title":"…","author":"…","subject":"…","keywords":"…"}` ; le titre sert d'intitulé de fenêtre du PDF et aux lecteurs d'écran.
- **Export** : `file.exportPdf` `{"path":"…","strict":true}` (échoue si un caractère ou une image manque), puis `file.strictReport`. Le PDF garde texte sélectionnable, liens et signets ; ses options de balisage ne sont pas réglables : voir la fiche comp-pdf-export-accessibilite. `file.accessibility` vérifie titres, textes alternatifs, tableaux. Enregistrer aussi en .docx (`file.save`).
- **Vérifier la mise en page** : `file.exportPng` `{"path":"…","page":1,"scale":1}` puis lire l'image ; `document.layout` donne le résumé des pages.

## Avec les outils de ScoutHub
Les actions `api_commandes`, `api_executer` et `api_lot` pilotent WordCraft. Les commandes agissent sur la **sélection ou le paragraphe du curseur** : toujours sélectionner avant de mettre en forme (`select.paragraph`, `select.all`, `select.text` `{"text":"…","occurrence":n}`). Lire l'état avec `api_inspecter` ou `document.inspect`. Les unités sont des **points**. Les séquences ci-dessous sont à rejouer telles quelles ; après chacune, contrôler avec `document.layout` ou une image de page. Les espaces insécables s'écrivent ` ` dans le JSON.

### Index des besoins
| Besoin | Identifiant et paramètres réels |
|---|---|
| Nouveau document | `file.new` `{"template":"blank|sample|letter|resume|report"}` |
| Texte | `text.insert` `{"text","raw","paragraphs"}`, `text.newParagraph`, `edit.pasteText` |
| Style | `para.style` `{"style"}`, `para.heading1…3`, `para.normal`, `styles.create`, `styles.modify`, `styles.updateToMatch`, `styles.list` |
| Police | `format.font` `{"name"}`, `format.size` `{"size"}`, `format.color` `{"color":"RRGGBB"}`, `format.bold`, `format.italic` |
| Paragraphe | `para.spacing`, `para.lineSpacing`, `para.indents`, `para.align`, `para.keepNext`, `para.keepLines`, `para.widowControl`, `para.tabs`, `para.borders`, `para.shading` |
| Page | `layout.size`, `layout.margins`, `layout.orientation`, `layout.break`, `layout.columns`, `layout.verticalAlign` |
| En-tête et pied | `insert.createHeader`, `insert.createFooter`, `layout.differentFirstPage`, `layout.differentOddEven`, `layout.pageNumberFormat`, `layout.linkToPrevious`, `hf.position`, `insert.field`, `insert.closeHeader` |
| Listes | `list.multilevelPreset`, `list.define`, `para.numbering`, `para.bullets`, `para.listLevel`, `para.restartNumbering` |
| Tableaux | `insert.table`, `insert.spreadsheet`, `table.shading`, `table.borders`, `table.look`, `table.properties`, `table.columnWidth`, `table.cellMargins`, `table.repeatHeader`, `table.altText`, `table.formula` |
| Références | `references.toc`, `references.updateToc`, `references.caption`, `references.tableOfFigures`, `references.footnote`, `insert.crossReference`, `insert.bookmark`, `references.updateFields` |
| Images | `insert.picture`, `picture.size`, `arrange.wrap`, `picture.altText`, `picture.compress` |
| Sortie | `file.properties`, `file.accessibility`, `file.exportPdf`, `file.save`, `file.exportPng` |

### Séquence 1 : fondations (A4, thème, styles Normal et Titre 1)
```json
[
{"commande":"file.new","parametres":{"template":"blank"}},
{"commande":"layout.size","parametres":{"name":"A4"}},
{"commande":"layout.margins","parametres":{"top":70.9,"bottom":70.9,"left":70.9,"right":70.9}},
{"commande":"design.themeFonts","parametres":{"heading":"Georgia","body":"Calibri"}},
{"commande":"text.insert","parametres":{"text":"Texte courant","raw":true}},
{"commande":"select.paragraph","parametres":{}},
{"commande":"para.normal","parametres":{}},
{"commande":"format.size","parametres":{"size":11}},
{"commande":"format.color","parametres":{"color":"12142B"}},
{"commande":"para.spacing","parametres":{"before":0,"after":6}},
{"commande":"para.lineSpacing","parametres":{"value":1.15}},
{"commande":"para.widowControl","parametres":{"value":true}},
{"commande":"styles.updateToMatch","parametres":{"style":"Normal"}},
{"commande":"para.heading1","parametres":{}},
{"commande":"format.font","parametres":{"name":"Georgia"}},
{"commande":"format.size","parametres":{"size":18}},
{"commande":"format.bold","parametres":{"value":true}},
{"commande":"format.color","parametres":{"color":"000761"}},
{"commande":"para.spacing","parametres":{"before":18,"after":6}},
{"commande":"para.lineSpacing","parametres":{"value":1}},
{"commande":"para.keepNext","parametres":{"value":true}},
{"commande":"styles.updateToMatch","parametres":{"style":"Heading 1"}},
{"commande":"select.all","parametres":{}},
{"commande":"text.delete","parametres":{}},
{"commande":"para.normal","parametres":{}}
]
```
Répéter le motif pour Titre 2 (14 pt, 12/4) et Titre 3 (Calibri 12 gras, 10/3) en suivant le tableau des styles. Contrôler avec `styles.list`.

### Séquence 2 : page de titre
```json
[
{"commande":"text.insert","parametres":{"text":"Camp d'été 2027","raw":true}},
{"commande":"select.paragraph","parametres":{}},
{"commande":"para.style","parametres":{"style":"Title"}},
{"commande":"format.font","parametres":{"name":"Georgia"}},
{"commande":"format.size","parametres":{"size":28}},
{"commande":"format.color","parametres":{"color":"000761"}},
{"commande":"para.borders","parametres":{"kind":"bottom","width":1.5,"color":"C6A24E","style":"single"}},
{"commande":"para.align","parametres":{"value":"left"}},
{"commande":"caret.docEnd","parametres":{}},
{"commande":"text.newParagraph","parametres":{}},
{"commande":"text.insert","parametres":{"text":"Projet pédagogique de l'unité Saint-Louis","raw":true}},
{"commande":"select.paragraph","parametres":{}},
{"commande":"para.style","parametres":{"style":"Subtitle"}},
{"commande":"format.size","parametres":{"size":14}},
{"commande":"format.color","parametres":{"color":"4A4D68"}},
{"commande":"layout.verticalAlign","parametres":{"value":"center"}},
{"commande":"caret.docEnd","parametres":{}},
{"commande":"layout.break","parametres":{"kind":"nextPage"}},
{"commande":"layout.verticalAlign","parametres":{"value":"top"}},
{"commande":"layout.pageNumberFormat","parametres":{"format":"decimal","start":1}},
{"commande":"para.normal","parametres":{}}
]
```
Raison : la page de titre est sa propre section, centrée à la verticale ; la page suivante repart à 1 et en haut. Variante : `insert.coverPage` `{"title","subtitle","author"}`.

### Séquence 3 : titre sur une colonne, corps sur deux colonnes
```json
[
{"commande":"text.insert","parametres":{"text":"Le bulletin du groupe","raw":true}},
{"commande":"select.paragraph","parametres":{}},
{"commande":"para.heading1","parametres":{}},
{"commande":"caret.docEnd","parametres":{}},
{"commande":"text.newParagraph","parametres":{}},
{"commande":"layout.break","parametres":{"kind":"continuous"}},
{"commande":"para.normal","parametres":{}},
{"commande":"layout.columns","parametres":{"count":2,"space":22.7,"separator":true,"apply":"section"}},
{"commande":"text.insert","parametres":{"text":"Premier article.\nSecond article.","raw":true,"paragraphs":true}},
{"commande":"text.columnBreak","parametres":{}},
{"commande":"text.insert","parametres":{"text":"Début de la seconde colonne.","raw":true}},
{"commande":"layout.break","parametres":{"kind":"continuous"}},
{"commande":"layout.columns","parametres":{"count":1,"apply":"section"}}
]
```
Vérifier avec `layout.section` que la section 1 a 1 colonne, la section 2 en a 2, la section 3 en a 1.

### Séquence 4 : tableau élégant (horaire)
```json
[
{"commande":"insert.spreadsheet","parametres":{"values":[["Heure","Activité","Responsable"],["7 h 30","Lever, toilette, prière","Équipe de service"],["8 h 00","Petit déjeuner","Cuisine"],["9 h 00","Grand jeu","Chefs de troupe"]],"header":true}},
{"commande":"select.text","parametres":{"text":"Heure"}},
{"commande":"table.selectRow","parametres":{}},
{"commande":"table.shading","parametres":{"color":"000761"}},
{"commande":"format.color","parametres":{"color":"FFFFFF"}},
{"commande":"format.bold","parametres":{"value":true}},
{"commande":"table.repeatHeader","parametres":{}},
{"commande":"table.selectTable","parametres":{}},
{"commande":"table.borders","parametres":{"kind":"inside","width":0.5,"color":"C9CBD9"}},
{"commande":"table.cellMargins","parametres":{"top":3,"bottom":3,"left":5.4,"right":5.4}},
{"commande":"table.properties","parametres":{"align":"left","widthPct":100,"allowBreak":false}},
{"commande":"table.look","parametres":{"headerRow":true,"bandedRows":true}},
{"commande":"table.altText","parametres":{"title":"Horaire de la journée","text":"Heure, activité et responsable de chaque temps de la journée."}}
]
```
Les largeurs se règlent colonne par colonne : `select.text` dans la colonne, `table.selectColumn`, `table.columnWidth` `{"width":70}` (heure), puis 281,9 et 130 (total 481,9 pt). Pour les bordures horizontales seules : `table.borders` `{"kind":"none"}` puis `{"kind":"bottom","width":0.5,"color":"C9CBD9"}` sur toute la sélection.

### Séquence 5 : liste numérotée multiniveau
```json
[
{"commande":"para.multilevel","parametres":{"kind":"outline"}},
{"commande":"text.insert","parametres":{"text":"Préparer le matériel","raw":true}},
{"commande":"text.newParagraph","parametres":{}},
{"commande":"para.listLevel","parametres":{"level":1}},
{"commande":"text.insert","parametres":{"text":"Tentes et sardines","raw":true}},
{"commande":"text.newParagraph","parametres":{}},
{"commande":"text.insert","parametres":{"text":"Pharmacie","raw":true}},
{"commande":"text.newParagraph","parametres":{}},
{"commande":"para.listLevel","parametres":{"level":0}},
{"commande":"text.insert","parametres":{"text":"Organiser le transport","raw":true}}
]
```
Pour des titres numérotés : `list.multilevelPreset` `{"preset":"headings"}` avant de rédiger. Pour redémarrer à 1 : `para.restartNumbering`. Pour une numérotation propre : `list.define` `{"levels":[{"format":"decimal","text":"%1."},{"format":"lowerLetter","text":"%2)"},{"format":"bullet","text":"–"}]}` puis `list.get`.

### Séquence 6 : en-tête, pied, pagination « Page X sur Y » (page 1 sans numéro)
```json
[
{"commande":"layout.differentFirstPage","parametres":{}},
{"commande":"insert.createHeader","parametres":{}},
{"commande":"text.insert","parametres":{"text":"Unité Saint-Louis · Camp d'été 2027","raw":true}},
{"commande":"select.paragraph","parametres":{}},
{"commande":"format.size","parametres":{"size":9}},
{"commande":"format.color","parametres":{"color":"4A4D68"}},
{"commande":"para.borders","parametres":{"kind":"bottom","width":0.5,"color":"C9CBD9"}},
{"commande":"insert.closeHeader","parametres":{}},
{"commande":"insert.createFooter","parametres":{}},
{"commande":"text.insert","parametres":{"text":"Page ","raw":true}},
{"commande":"insert.field","parametres":{"instr":"PAGE"}},
{"commande":"text.insert","parametres":{"text":" sur ","raw":true}},
{"commande":"insert.field","parametres":{"instr":"NUMPAGES"}},
{"commande":"select.paragraph","parametres":{}},
{"commande":"para.alignRight","parametres":{}},
{"commande":"format.size","parametres":{"size":9}},
{"commande":"hf.position","parametres":{"header":35.4,"footer":35.4}},
{"commande":"insert.closeHeader","parametres":{}}
]
```
`layout.differentFirstPage` bascule : lire `document.layout` avant de l'appeler une seconde fois. À jouer sur un document de plusieurs pages ; contrôler que la page 1 est vide de pied et que les pages suivantes montrent « Page 2 sur 6 ».

### Séquence 7 : sommaire, légende, table des figures, note de bas de page
```json
[
{"commande":"caret.docStart","parametres":{}},
{"commande":"references.toc","parametres":{"levels":2,"title":"Sommaire","pageNumbers":true,"rightAlign":true,"tabLeader":"dot","hyperlinks":true}},
{"commande":"select.text","parametres":{"text":"Sécurité"}},
{"commande":"references.footnote","parametres":{"text":"Décret relatif aux accueils collectifs de mineurs, à vérifier avant diffusion."}},
{"commande":"insert.picture","parametres":{"path":"carte.png","width":340,"alt":"Carte du site du camp avec les zones de tentes et la cuisine"}},
{"commande":"references.caption","parametres":{"label":"Figure","text":"Plan du site du camp","position":"below"}},
{"commande":"references.tableOfFigures","parametres":{"label":"Figure","tabLeader":"dot"}},
{"commande":"references.updateFields","parametres":{"all":true}}
]
```

### Séquence 8 : sortie propre
```json
[
{"commande":"select.all","parametres":{}},
{"commande":"review.language","parametres":{"lang":"fr-FR"}},
{"commande":"file.properties","parametres":{"title":"Projet pédagogique du camp d'été 2027","author":"Unité Saint-Louis","subject":"Camp d'été","keywords":"camp, projet pédagogique"}},
{"commande":"references.updateFields","parametres":{"all":true}},
{"commande":"font.missing","parametres":{}},
{"commande":"file.accessibility","parametres":{}},
{"commande":"review.wordCount","parametres":{}},
{"commande":"file.save","parametres":{"path":"projet-camp-2027.docx"}},
{"commande":"file.exportPdf","parametres":{"path":"projet-camp-2027.pdf","strict":true}}
]
```
Le lot s'arrête à la première erreur : c'est voulu (une police manquante ou une image absente doit se voir avant l'envoi).

### Ce que WordCraft ne fait pas nativement
- **Palette de thème personnalisée** : `design.themeColors` n'a pas de paramètre ; coloriser dans les styles.
- **Clés de `chr`, `para` et `section`** (styles.modify, layout.pageSetup) non documentées dans la liste : passer par `styles.updateToMatch` ou par les commandes d'une seule propriété.
- **Fusion de cellules par coordonnées** : `table.merge` demande une sélection préalable (`select.text`, `table.selectCell`, `select.range`).
- **Options d'accessibilité du PDF** (balisage, PDF/A, métadonnées XMP) : aucun paramètre dans `file.exportPdf` ; contrôler par `file.accessibility` puis relire le PDF avec la fiche comp-pdf-export-accessibilite.
- **Correcteur et césure en français** : paquets de langue à installer (`proof.packs`, `proof.installPack`) et seulement si le téléchargement est autorisé dans l'application ; sinon pas de justification.
- **Réglage de l'espacement entre paragraphes de même style** (suppression automatique) : pas de commande ; gérer par `para.spacing`.
- **Millimètres** : toutes les valeurs sont en points ; `file.options` `{"units":"millimeters"}` ne change que l'affichage.
- **Dessin de la grille ou des repères** : pas de commande de repères ; s'appuyer sur `table.*` et `arrange.position`.
Dans ces cas, le dire à la personne et agir à la souris dans l'interface plutôt que d'inventer une commande.

## Défauts typiques et correctifs
| Défaut | Cause | Correctif |
|---|---|---|
| Titres de tailles voisines mais différentes | gras + taille manuels | appliquer le style, réécrire le style |
| Trou blanc en bas de page | saut de page manuel ou Entrée | supprimer, `para.pageBreakBefore` dans le style |
| Titre seul en bas de page | pas de « conserver avec le suivant » | `para.keepNext` dans le style de titre |
| Tableau coupé en deux rangées | rangée autorisée à se couper | `allowBreak:false` |
| Colonnes déséquilibrées | pas de saut continu final | `layout.break` `continuous` |
| Sommaire faux | champ non mis à jour | `references.updateFields` `{"all":true}` |
| Numérotation « 1, 1, 1 » | numérotation tapée ou liste coupée | `list.multilevelPreset` ou `para.restartNumbering` |
| Page de titre numérotée | pas de section ni de première page différente | séquence 2 ou 6 |
| Police remplacée à l'ouverture | police absente chez le destinataire | `font.missing`, polices communes, PDF |
| Image floue | 72 ppp ou agrandissement | 200 ppp à la taille finale |

## Particularités dans le navigateur (ScoutHub) : à lire avant d'exécuter une séquence
Les séquences `api_lot` de cette fiche ont été **exécutées sur l'application réelle** pour en vérifier les paramètres ; elles supposent le contexte indiqué dans leur titre. Dans le navigateur :
- **Pas de chemins de fichiers.** Les commandes qui prennent un `path` pour LIRE un fichier (`insert.picture` avec `path`, ouverture de fichiers) répondent « files are opened through the browser on the web ». Pour une image, la personne l'insère par l'interface (Insertion ▸ Image) ou la commande reçoit `data` (image en base64) quand l'application l'accepte. Ne jamais inventer un chemin comme `/chemin/image.jpg`.
- **Enregistrer** = l'action `enregistrer` de ChatGDB (jamais `file.save` avec un chemin : « saving to a path is not available in the browser »). Le document est alors gardé dans la conversation et la personne le retrouve sous ta réponse avec les boutons « Ouvrir » et « Télécharger ».
- **Export PDF** : `file.exportPdf` fonctionne dans Word et Excel (le PDF est ajouté sous ta réponse avec un bouton « Télécharger ») ; PowerPoint n'exporte pas de PDF par commande dans le navigateur (`file.export` exige un chemin) : demander à la personne Fichier ▸ Exporter, ou livrer le .pptx.
- **Identifiants** : une séquence qui écrit `ID_…` ou `Nom de feuille` en majuscules est un **modèle** : remplace par la valeur réelle lue avec `api_inspecter` / `slide.inspect` avant d'exécuter. Une feuille Excel ou une diapositive citée doit exister (crée-la d'abord avec « classeur » ou `home.insertSheet`).

## Liste de contrôle avant de livrer
- [ ] Tout titre est dans un style Titre 1–3 ; aucun titre fabriqué à la main.
- [ ] Une seule famille de polices pour le texte, une pour les titres au plus ; corps du texte 10,5 à 11 pt.
- [ ] Interligne 1,15 ; espacement avant/après réglé dans les styles, aucune ligne vide.
- [ ] Format A4, marges 20 à 25 mm, orientation voulue sur chaque section.
- [ ] Longueur de ligne de 45 à 90 caractères ; deux colonnes avec gouttière 8 mm.
- [ ] Pas de veuve ni d'orpheline ; aucun titre en bas de page ou de colonne.
- [ ] Texte à gauche, ou justifié seulement avec césure et langue française réglée.
- [ ] Espaces insécables devant `: ; ! ?` et dans les nombres et horaires ; guillemets « » ; majuscules accentuées (comp-typographie-francaise).
- [ ] Page de titre sans en-tête ni numéro ; pagination qui démarre à 1 sur le corps.
- [ ] Pied « Page X sur Y » en champs, mis à jour.
- [ ] Sommaire (si plus de 4 pages) et tables mis à jour juste avant l'export.
- [ ] Tableaux : en-tête répété, nombres alignés à droite, traits fins, rangées non coupées, texte alternatif.
- [ ] Chaque image porte un texte alternatif, une légende et une résolution de 200 ppp.
- [ ] Couleurs de la fédération seulement, or jamais en texte courant, contraste d'au moins 4,5:1.
- [ ] Aucun commentaire, aucune révision, aucun texte masqué (`file.inspect`).
- [ ] Propriétés (titre, auteur) renseignées ; langue du document fr-FR.
- [ ] `font.missing` vide ; `file.accessibility` sans erreur.
- [ ] PDF exporté en mode strict et relu page par page ; .docx enregistré.

## Questions auxquelles la fiche répond
- Dans quel ordre construire un document Word pour qu'il reste propre ?
- Quelles valeurs de corps, d'interligne et d'espacement donner à Normal, Titre 1, 2 et 3 ?
- Comment faire une page de titre sans numéro, puis démarrer la pagination à 1 ?
- Comment faire un titre sur une colonne et un texte sur deux colonnes avec filet et gouttière ?
- Quelle commande pour la table des matières, les légendes, les notes de bas de page et les renvois, et avec quels paramètres ?
- Comment faire un tableau sobre avec en-tête répété, zébrures et totaux ?
- Comment numéroter les titres (1 / 1.1) et faire une liste à plusieurs niveaux ?
- Comment éviter les titres isolés en bas de page, les veuves et les orphelines ?
- Que ne sait pas faire WordCraft par commande, et que faire alors ?
- Quelle vérification et quel export PDF avant d'envoyer un document ?
