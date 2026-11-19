---
id: comp-polices-et-hierarchie
titre: Polices, tailles et hiérarchie typographique (choix, échelle, interlignage, lisibilité)
theme: Compétences
type: synthese
sources:
  - titre: Usage professionnel de la composition typographique (échelles modulaires, mesure, interlignage)
  - titre: Recommandations d'accessibilité des contenus (contraste, corps minimum, lisibilité pour les dyslexiques et malvoyants)
mots_cles: polices, police, serif, sans-serif, empattement, bâton, script, monospace, Georgia, Inter, Times, Arial, Calibri, association de polices, hiérarchie typographique, échelle modulaire, corps, taille, interligne, interlignage, longueur de ligne, justifié, drapeau, césure, crénage, approche, graisse, petites capitales, chiffres elzéviriens, contraste, dyslexie, accessibilité, format.font, format.size, para.lineSpacing, styles.modify, design.themeFonts
liens: comp-typographie-francaise, comp-redaction-claire, comp-mise-en-page-principes, comp-couleur-et-identite-fsggb, comp-word-document-professionnel, comp-powerpoint-presentation-elegante, comp-pdf-export-accessibilite, app-word, app-excel, app-powerpoint
resume: Comment choisir et associer deux polices, fixer les tailles de chaque niveau avec une échelle modulaire, régler interligne, longueur de ligne et alignement, et garantir contraste et lisibilité. Elle donne des tableaux de valeurs (papier, écran, affiche, diapositive) et les commandes Word, Excel et PowerPoint vérifiées.
---

## Le rôle de la typographie dans un document

Le lecteur d'un document de fédération (convocation, livret, affiche, diaporama) ne doit pas avoir à se demander ce qui est important : la forme le lui dit avant qu'il ait lu un mot. La typographie sert trois fonctions, dans cet ordre :

1. **Lisibilité** : reconnaître les lettres, les mots, les lignes sans effort.
2. **Hiérarchie** : repérer immédiatement le titre, les intertitres, le texte, les notes.
3. **Identité** : donner au document un ton cohérent avec la fédération (sobre, classique, chaleureux).

Une hiérarchie typographique réussie repose sur très peu de moyens : **deux polices au plus, cinq à six tailles, deux graisses, une couleur d'accent**. L'abondance est l'ennemie du style. Les règles de ponctuation et d'espacement sont dans `comp-typographie-francaise`, la disposition sur la page dans `comp-mise-en-page-principes`, les couleurs dans `comp-couleur-et-identite-fsggb`.

## 1. Les familles de polices

| Famille | Caractéristique | Impression produite | Exemples courants | Usage conseillé |
|---|---|---|---|---|
| Serif (à empattement) | petits traits aux extrémités des lettres | classique, institutionnel, littéraire | Georgia, Times New Roman, Garamond, Palatino, Cambria | textes longs sur papier, titres élégants |
| Sans-serif (bâton) | pas d'empattement, traits réguliers | moderne, neutre, lisible à l'écran | Inter, Arial, Calibri, Helvetica, Verdana, Segoe UI | écran, diapositives, textes courts, tableaux |
| Script / manuscrite | imite l'écriture à la plume | personnel, festif | à réserver à une signature | rarement, en petite quantité |
| Monospace | chaque lettre occupe la même largeur | technique | Courier New, Consolas | code, tableaux de chiffres alignés ; à éviter ailleurs |
| Display / fantaisie | forme singulière | affirmée mais fatigante | polices décoratives | un titre d'affiche, jamais un texte |

### Polices sûres et polices du système

Un document n'est beau que si la police est bien présente sur l'ordinateur du lecteur. Quand elle manque, le logiciel la remplace, et la mise en page se déforme.

- **Polices sûres** (présentes sur presque tous les Windows et Mac) : Arial, Times New Roman, Georgia, Verdana, Calibri, Cambria, Courier New, Trebuchet MS, Palatino Linotype.
- **Polices de l'interface ScoutHub** : une serif de titre (Georgia ou Times) et une sans-serif de texte (Inter). Inter n'est pas toujours installée sur un poste : prévoir Arial (ou Calibri) comme secours.
- **Polices ajoutées** : un fichier TTF, OTF ou WOFF peut être ajouté à Word par `font.add` ; la liste des polices ajoutées est donnée par `font.list` ; les polices manquantes sont signalées par `font.missing`.
- **PDF** : pour un document destiné à un envoi à l'extérieur, l'export en PDF fige les polices (voir `comp-pdf-export-accessibilite`).

Règle : **ne pas utiliser de police exotique dans un document qui sera modifié par d'autres.** Pour un fichier à ouvrir et modifier par plusieurs personnes, se limiter aux polices sûres.

## 2. Combien de polices et lesquelles

### 2.1 Deux polices au plus

- **Une police** (avec ses graisses et ses italiques) suffit pour un document très sobre.
- **Deux polices** : l'une pour les titres, l'autre pour le texte.
- **Trois** : jamais. Une troisième police ne s'admet que pour un élément de logotype.

Raison : chaque police apporte sa personnalité ; en ajouter une affaiblit l'ensemble. Les contrastes de hiérarchie se font avec la taille, la graisse et la couleur, pas avec des polices supplémentaires.

### 2.2 Associations éprouvées (une serif et une sans)

| Titres | Texte | Caractère | Remarque |
|---|---|---|---|
| Georgia | Inter ou Arial | institutionnel, chaleureux | choix de la fédération |
| Times New Roman | Arial | académique, classique | ancien et sûr |
| Cambria | Calibri | bureautique, neutre | associations de série (Word) |
| Garamond | Verdana | littéraire | le Garamond est étroit ; texte plus gros |
| Palatino | Helvetica ou Arial | élégant | à employer pour un livret |
| Georgia (titres) | Georgia (texte) | très sobre | une seule police, hiérarchie par la taille |
| Arial (titres gras) | Times New Roman | inversion | titres bâton, texte serif : lisible sur papier |

Principe d'association : choisir deux polices **nettement différentes** (une serif et une sans) plutôt que deux polices voisines, qui paraissent une erreur. Ne pas associer deux sans-serif proches (Arial et Helvetica) ni deux serif proches (Times et Georgia).

### 2.3 Que choisir par défaut

Pour un document de fédération :

- **Titres** : Georgia, graisse normale ou gras, couleur bleu nuit `#000761`.
- **Texte** : Inter ou, à défaut, Arial ou Calibri, couleur `#12142b`.
- **Accents** : or `#c6a24e` pour un filet ou un chiffre, jamais pour un texte courant (contraste insuffisant : voir la section 10).

Pour un document destiné à l'impression d'un texte long (livret, compte rendu de dix pages) : texte en Georgia 11 pt, titres en Georgia gras ou en Inter gras.

## 3. Taille du corps de texte selon le support

La taille se mesure en points typographiques (1 pt = 1/72 pouce = 0,353 mm). Une taille lisible dépend de la **distance de lecture**.

| Support | Distance de lecture | Corps de texte | Corps minimum absolu | Remarque |
|---|---|---|---|---|
| Papier A4, lecture courante | 30–40 cm | 10 à 12 pt | 9 pt (notes) | 11 pt pour une lettre ; 10 pt en colonnes étroites |
| Papier A5 (livret) | 30 cm | 10 à 11 pt | 9 pt | |
| Écran d'ordinateur (page web, PDF) | 50–70 cm | 16 à 18 px (12 à 13,5 pt) | 14 px | l'écran demande plus gros que le papier |
| Smartphone | 30 cm | 16 à 18 px | 15 px | pas de zone de texte tassée |
| Affiche A3 | 1 à 2 m | titre 60–90 pt, texte 20–28 pt | 18 pt | texte lisible à 1,5 m |
| Affiche A2 / A1 | 2 à 4 m | titre 90–180 pt, texte 28–48 pt | 24 pt | |
| Diapositive (salle de 20 personnes) | 5 à 10 m | titre 36–44 pt, texte 24–32 pt | 24 pt | jamais en dessous de 20 pt |
| Diapositive (grande salle) | 10 à 20 m | titre 44 pt, texte 28–36 pt | 28 pt | |
| Tableau Excel imprimé | 30–40 cm | 10 à 11 pt | 9 pt | |
| Étiquette, programme de poche | 25 cm | 9 à 10 pt | 8 pt | police bâton |

Règle de proportion : le corps se choisit **en fonction de la police**, car les polices n'ont pas la même hauteur d'œil. Georgia 11 pt a un œil nettement plus grand que Garamond 11 pt ; on compense en passant Garamond à 12 pt. De même, Arial 10 pt est plus petite à l'œil que Verdana 10 pt.

## 4. L'échelle modulaire : choisir des tailles cohérentes

### 4.1 Le principe

Au lieu de choisir des tailles au hasard (12, 14, 17, 21…), on part d'une taille de base (le corps du texte) et on la multiplie par un **rapport constant** pour obtenir chaque niveau supérieur, et on la divise pour obtenir les niveaux inférieurs. Les tailles qui en résultent s'accordent entre elles, comme les notes d'une gamme.

Rapports usuels et usage :

| Rapport | Nom d'usage | Effet | Usage |
|---|---|---|---|
| 1,2 | tierce mineure | sobre, très resserré | document administratif dense, tableau, courrier |
| 1,25 | tierce majeure | équilibré | document courant, rapport, livret |
| 1,333 | quarte juste | marqué | brochure, présentation écran |
| 1,5 | quinte juste | très contrasté | affiche, diapositive, page de titre |

### 4.2 Tableaux de tailles pour un corps de 11 pt (document A4)

Les valeurs sont arrondies au demi-point.

| Niveau | Rapport 1,2 | Rapport 1,25 | Rapport 1,333 | Rapport 1,5 |
|---|---|---|---|---|
| Note, légende (÷ r) | 9 pt | 9 pt | 8,5 pt | 7,5 pt |
| Corps | 11 pt | 11 pt | 11 pt | 11 pt |
| Intertitre niveau 3 (× r) | 13 pt | 14 pt | 14,5 pt | 16,5 pt |
| Intertitre niveau 2 (× r²) | 16 pt | 17 pt | 19,5 pt | 25 pt |
| Titre de section niveau 1 (× r³) | 19 pt | 21,5 pt | 26 pt | 37 pt |
| Titre de document (× r⁴) | 23 pt | 27 pt | 35 pt | 55 pt |

Recommandation pour le papier A4 : **corps 11 pt, rapport 1,25** : note 9 pt, corps 11 pt, intertitre 3 : 14 pt, intertitre 2 : 17 pt, titre 1 : 21,5 pt (arrondir à 22 pt), titre de document : 27 pt (arrondir à 28 pt).

### 4.3 Tableaux pour d'autres corps

Corps 10 pt (livret, colonnes) :

| Niveau | 1,2 | 1,25 | 1,333 |
|---|---|---|---|
| Note | 8 pt | 8 pt | 7,5 pt |
| Corps | 10 pt | 10 pt | 10 pt |
| Intertitre 3 | 12 pt | 12,5 pt | 13,5 pt |
| Intertitre 2 | 14,5 pt | 15,5 pt | 17,5 pt |
| Titre 1 | 17 pt | 19,5 pt | 23,5 pt |
| Titre de document | 20,5 pt | 24,5 pt | 31,5 pt |

Corps 12 pt (lecture confortable, public âgé) :

| Niveau | 1,2 | 1,25 | 1,333 |
|---|---|---|---|
| Note | 10 pt | 9,5 pt | 9 pt |
| Corps | 12 pt | 12 pt | 12 pt |
| Intertitre 3 | 14,5 pt | 15 pt | 16 pt |
| Intertitre 2 | 17,5 pt | 19 pt | 21,5 pt |
| Titre 1 | 21 pt | 23,5 pt | 28,5 pt |
| Titre de document | 25 pt | 29,5 pt | 38 pt |

Diapositive, corps 28 pt (rapport 1,25 et 1,333) :

| Niveau | 1,25 | 1,333 |
|---|---|---|
| Légende, source | 22 pt | 21 pt |
| Corps | 28 pt | 28 pt |
| Sous-titre | 35 pt | 37 pt |
| Titre | 44 pt | 50 pt |
| Titre de page de garde | 55 pt | 66 pt |

Affiche A3 (rapport 1,5, corps 24 pt) : légende 16 pt, corps 24 pt, sous-titre 36 pt, titre 54 pt, grand titre 81 pt (arrondir à 80 pt).

### 4.4 Règles d'usage de l'échelle

1. Choisir **un seul rapport** pour tout le document.
2. Ne jamais utiliser deux tailles trop voisines (12 pt et 13 pt) : l'œil n'y voit qu'une erreur. Un écart de 20 % au moins est nécessaire pour qu'une différence de taille ait un sens.
3. Employer au plus **six tailles** dans un document (titre, titre 1, titre 2, titre 3, corps, note).
4. Les titres de niveau 3 et suivants peuvent rester à la taille du corps, en gras ou en petites capitales, pour économiser un niveau.
5. Un intertitre en gras de la taille du corps (11 pt) fonctionne bien dans une lettre ; il est plus discret.

### 4.5 Hiérarchie par la graisse et la couleur

La taille n'est pas la seule variable. Pour hiérarchiser :

| Niveau | Taille (A4, 11 pt, 1,25) | Graisse | Couleur | Casse | Espacement avant / après |
|---|---|---|---|---|---|
| Titre de document | 28 pt | gras (Georgia) | bleu nuit `#000761` | normale | 0 / 12 pt |
| Titre 1 | 22 pt | gras | `#000761` | normale | 18 / 6 pt |
| Titre 2 | 17 pt | gras | `#000761` | normale | 14 / 4 pt |
| Titre 3 | 14 pt | gras | `#12142b` | normale | 10 / 3 pt |
| Corps | 11 pt | normale | `#12142b` | normale | 0 / 6 pt |
| Citation | 10,5 pt | italique | `#12142b` | normale | 6 / 6 pt |
| Légende | 9 pt | italique | gris foncé `#595959` | normale | 3 / 8 pt |
| Note | 9 pt | normale | `#12142b` | normale | 0 / 2 pt |

Règle de l'espacement : **l'espace avant un titre est supérieure à l'espace après**, pour rattacher le titre au texte qui le suit et le détacher de ce qui précède (loi de proximité).

## 5. Interlignage (interligne)

L'interlignage est la distance verticale entre deux lignes de texte, mesurée de ligne de base à ligne de base. Exprimé en pourcentage du corps :

| Support / usage | Interligne | Pour un corps de 11 pt | Raison |
|---|---|---|---|
| Texte courant, papier | 120 à 140 % | 13,2 à 15,4 pt | confort de lecture |
| Texte long, ligne longue (> 75 caractères) | 140 à 150 % | 15,4 à 16,5 pt | l'œil retrouve la ligne suivante |
| Texte en colonnes étroites (< 45 caractères) | 110 à 120 % | 12,1 à 13,2 pt | lignes courtes, besoin moindre |
| Titres (sur une ou deux lignes) | 100 à 115 % | | un titre est une masse compacte |
| Tableaux | 100 à 115 % | | densité de cellules |
| Diapositives | 110 à 130 % | | texte large, aéré |
| Affiche | 100 à 120 % | | gros corps |
| Accessibilité (malvoyants, dyslexiques) | 150 % | 16,5 pt | recommandation de lisibilité |

Règles :

1. **Ni trop serré ni trop lâche** : en dessous de 110 %, les jambages et les hampes se touchent ; au-dessus de 160 %, le paragraphe se décompose en lignes isolées.
2. L'interlignage dépend de la **longueur de ligne** : plus la ligne est longue, plus l'interligne est grand.
3. Il dépend aussi de la **police** : une police à grand œil (Verdana) demande un interligne plus grand qu'une police à petit œil (Garamond).
4. Les valeurs de Word : « simple » correspond à environ 115 à 120 % pour la plupart des polices ; « 1,15 » à environ 135 % ; « 1,5 » à environ 175 %. Pour maîtriser, employer la valeur exacte en points (`exactly`) ou un multiple.
5. L'espacement entre paragraphes remplace la ligne vide : on règle `after` (6 pt environ), on ne tape pas deux fois sur Entrée.

## 6. Longueur de ligne (justification de la mesure)

La **mesure** est le nombre de caractères par ligne (espaces comprises).

| Support | Mesure idéale | Plage acceptable | Largeur correspondante (corps 11 pt, police Georgia) |
|---|---|---|---|
| Texte courant, une colonne | 60 à 70 caractères | 45 à 75 | environ 12 à 13 cm |
| Texte en 2 colonnes (A4) | 35 à 45 caractères | 30 à 50 | environ 7 à 8 cm par colonne |
| Texte en 3 colonnes | 25 à 35 caractères | 25 à 40 | environ 5 à 6 cm |
| Écran, page web | 60 à 75 caractères | 50 à 80 | 600 à 700 px |
| Diapositive | 35 à 55 caractères | 30 à 60 | selon le corps |
| Affiche | 30 à 50 caractères | 20 à 60 | |

Raisons :

- Une ligne trop longue (> 90 caractères) fatigue : l'œil perd la ligne suivante au retour.
- Une ligne trop courte (< 30 caractères) hache la lecture et casse les mots en trop de fins de ligne.

**Comment l'obtenir sur une page A4** (21 cm) : une marge de 25 mm de chaque côté laisse 16 cm de texte, soit environ 85 à 90 caractères en 11 pt : trop long. Trois solutions :

1. Augmenter les marges (30 mm à gauche et 45 mm à droite, ou 45 mm des deux côtés) ;
2. Passer en deux colonnes ;
3. Augmenter le corps à 12 pt et l'interligne à 140 %.

Commandes : `layout.margins` avec `{"left":85,"right":85}` (valeurs en points : 85 pt ≈ 30 mm), `layout.columns` avec `{"count":2,"space":28,"separator":false}` (gouttière de 28 pt ≈ 10 mm).

## 7. Alignement du texte

| Alignement | Avantage | Défaut | Quand l'employer |
|---|---|---|---|
| **À gauche (drapeau à droite)** | espaces régulières, lecture aisée, aucune rivière | bord droit irrégulier | texte courant, courriel, diapositive, colonne étroite, accessibilité |
| **Justifié** | bloc net, aspect d'imprimé | rivières blanches, espaces irrégulières, coupures | texte long en colonne large, avec césure activée |
| **Centré** | solennité, symétrie | lecture fatigante au-delà de trois lignes | titre, invitation, citation courte, faire-part |
| **À droite** | marque de date, signature | lecture difficile | date, référence, signature de lettre |

Règles :

1. **Le justifié exige la césure.** Sans césure, le texte justifié en colonne étroite crée des trous. Avec la césure, activée par `layout.hyphenation`, la justification est propre à partir de 55 caractères par ligne.
2. **Pas de justifié sous 45 caractères** (colonnes étroites, diapositives) : préférer l'alignement à gauche.
3. **Ne centrer que des textes courts** (trois lignes au plus). Un paragraphe entier centré est illisible.
4. Aligner tout ce qui doit l'être sur **un même axe** : titres, textes et images sur la même marge gauche.
5. Pour un public dyslexique ou malvoyant, **alignement à gauche exclusivement**, pas de justification.
6. Dans les tableaux : texte à gauche, nombres à droite (ou alignés sur la virgule), titres de colonnes alignés comme leurs données.

## 8. Césure, approche et crénage

### 8.1 Césure

Voir `comp-typographie-francaise` section 12. En résumé : césure automatique avec au plus deux traits d'union consécutifs, jamais sur les noms propres, jamais dans un titre ni dans une légende courte. Commande : `layout.hyphenation` avec `{"value":true,"limit":2,"caps":false}`.

### 8.2 Approche (espacement des lettres)

L'approche est l'espace uniforme entre les lettres d'un mot. Elle se règle par `format.spacing` (en points), valeur positive pour écarter, négative pour resserrer.

| Cas | Valeur | Raison |
|---|---|---|
| Texte courant | 0 pt (ne pas toucher) | la police est déjà dessinée pour cela |
| Grand titre (> 28 pt) | −0,5 à −1 pt | les gros corps paraissent trop lâches |
| Majuscules (titre, étiquette) | +0,5 à +1,5 pt (jusqu'à 5 % du corps) | les capitales demandent de l'air |
| Petites capitales | +0,3 à +0,5 pt | idem |
| Texte en très petit corps (≤ 8 pt) | +0,2 pt | meilleure lisibilité |
| Ligne creuse à corriger | −0,2 pt maximum | pour rattraper un mot isolé ; invisible à ce niveau |

Règle : ne jamais dépasser ±5 % d'écart de l'approche dans un paragraphe de texte courant, sans quoi les lettres se touchent ou se dispersent.

### 8.3 Crénage

Le crénage (kerning) règle l'espacement d'une **paire** de lettres (AV, To, Ty). Les logiciels modernes l'appliquent automatiquement avec les polices de qualité. Pour les grands titres, vérifier à l'œil les paires problématiques (« AV », « LT », « Tr ») : un espace trop grand donne l'impression de deux mots. Par Word, `format.spacing` agit sur la sélection ; il n'existe pas de commande native pour le crénage de paires isolées : passer par l'interface de la police (`format.fontDialog`).

### 8.4 Échelle des caractères et position

`format.scale` avec `{"percent":100}` : l'échelle horizontale des lettres. **Ne pas déformer une police** (par exemple 90 % ou 110 %) : les traits perdent leur proportion et le résultat est visible. Toujours 100 %.

## 9. Graisses, italiques, petites capitales, chiffres

### 9.1 Graisses

- Une police professionnelle propose normal, gras, parfois léger, demi-gras, noir. Dans Word on ne dispose généralement que de normal et gras.
- **Deux graisses** par document : normal et gras. Un document avec cinq graisses est confus.
- Le gras sert aux titres et à la mise en évidence ; l'excès d'un texte en gras annule l'effet.
- Éviter le « faux gras » : un logiciel qui fabrique un gras sur une police qui n'en a pas déforme les lettres. Choisir une police livrée avec sa famille complète.
- Pour un texte clair sur fond foncé, **passer d'un cran en dessous** de graisse ou rester en normal : le blanc sur sombre paraît plus épais.

### 9.2 Italique

- Réserver à l'accent, aux titres d'œuvres, aux mots étrangers (voir `comp-typographie-francaise`).
- Ne jamais mettre un paragraphe entier en italique, sauf une citation longue ou une légende.
- L'italique n'est pas une oblique : une police qui n'a pas de vraie italique ne doit pas être inclinée artificiellement.

### 9.3 Petites capitales

Majuscules de la hauteur des minuscules, par `format.smallCaps` (commande native de Word, avec une `format.allCaps` pour les capitales). Elles conviennent à :

- une signature, un nom d'auteur, un en-tête de page ;
- les siècles et sigles dans le texte courant (XIXe siècle) ;
- un surtitre de rubrique, avec une approche de +0,5 pt.

À éviter pour les textes de plus de quelques mots.

### 9.4 Chiffres elzéviriens et tabulaires

- **Chiffres elzéviriens** (de style, de hauteurs variables, comme dans Georgia) : s'intègrent mieux dans un texte, à côté des minuscules. Idéal pour du texte.
- **Chiffres alignés** (hauteur identique) : conviennent aux tableaux, titres, affiches.
- **Chiffres tabulaires** (largeur identique) : indispensables dans les colonnes de montants (budgets) pour que les chiffres s'alignent verticalement. Les polices à chiffres proportionnels (Georgia) font ressortir un « 1 » étroit, qui décale la colonne.
- Pour les tableaux de chiffres : Inter, Calibri ou Arial (chiffres tabulaires) ; éviter Georgia en colonne de montants.
- Dans un texte en Georgia, les chiffres elzéviriens sont une qualité ; ne pas les « corriger ».

## 10. Couleur du texte et fonds

| Combinaison | Texte | Fond | Rapport de contraste | Verdict |
|---|---|---|---|---|
| Texte courant FSGGB | `#12142b` | `#fafafc` | 17,4 : 1 | excellent |
| Titres bleu nuit | `#000761` | `#fafafc` | 16,7 : 1 | excellent |
| Blanc sur bleu nuit | `#fafafc` | `#000761` | 16,7 : 1 | excellent |
| Or sur bleu nuit | `#c6a24e` | `#000761` | 7,2 : 1 | très bon pour un titre ou un chiffre |
| Or sur fond clair | `#c6a24e` | `#fafafc` | 2,3 : 1 | **insuffisant** pour du texte ; réserver aux filets et aux ornements |
| Or foncé sur fond clair | `#8a6d1f` | `#fafafc` | 4,7 : 1 | acceptable (corps ≥ 14 pt gras ou texte courant) |
| Gris moyen | `#767676` | `#ffffff` | 4,5 : 1 | limite pour du petit texte |
| Gris foncé (légendes) | `#595959` | `#ffffff` | 7,0 : 1 | bon |

Règles :

1. **Rapport de contraste minimum** : 4,5 : 1 pour le texte courant, 3 : 1 pour un texte large (≥ 18 pt ou ≥ 14 pt gras). Viser 7 : 1 pour le texte long.
2. Le texte courant est **noir ou presque** (bleu très sombre `#12142b`) sur fond blanc ou très clair. Un gris léger sur du blanc fatigue.
3. Jamais de texte sur une image sans bandeau d'aplat ni dégradé de lisibilité (voir `comp-mise-en-page-principes`).
4. **Pas de rouge sur du vert, ni sur du bleu** : confusion pour les daltoniens (8 % des hommes).
5. Pas plus de **deux couleurs de texte** : le texte principal et une couleur d'accent.
6. Ne jamais coder une information par la seule couleur : doubler par un mot, une icône, un trait.
7. Pour l'impression en noir et blanc, vérifier que la hiérarchie tient en niveaux de gris.

La charte de couleurs complète est dans `comp-couleur-et-identite-fsggb`.

## 11. Lisibilité et accessibilité

### 11.1 Dyslexie et troubles de la lecture

- Police bâton simple, à grand œil (Verdana, Arial, Calibri) ; éviter les polices à italique prononcée ou avec des formes proches (b/d, p/q).
- Corps 12 à 14 pt sur papier.
- Interligne 150 %, espace entre paragraphes de 12 pt.
- Approche légèrement augmentée (+0,3 à +0,5 pt).
- Alignement **à gauche**, sans justification ni césure.
- Lignes de 50 à 60 caractères.
- Fond légèrement teinté (crème) plutôt que blanc éclatant : commande de lecture `view.paperColor` avec `{"value":"cream"}` pour l'affichage à l'écran.
- Pas de soulignement, pas d'italique long, pas de capitales longues.

### 11.2 Malvoyance

- Corps de **14 pt au moins** (16 à 18 pt recommandé), gras discret.
- Contraste ≥ 7 : 1.
- Document redimensionnable : le texte ne doit pas être figé en image. L'agrandissement à l'écran : `view.zoom` avec `{"value":150}`, `view.readTextSize` avec `{"value":125}`.
- Gros caractères sur papier : corps 18 pt.

### 11.3 Corps minimum

| Support | Texte courant | Minimum toléré | Jamais en dessous de |
|---|---|---|---|
| Papier A4 | 11 pt | 10 pt | 9 pt (notes) |
| Écran | 16 px | 14 px | 12 px |
| Diapositive | 28 pt | 24 pt | 20 pt |
| Affiche | 24 pt | 18 pt | 14 pt (mentions légales) |

### 11.4 Structure pour les lecteurs d'écran

- Utiliser les **styles de titres** (Titre 1, Titre 2, Titre 3) et non un gras manuel : les lecteurs d'écran naviguent par les titres.
- Un seul Titre 1 par document ; pas de saut de niveau (un Titre 3 ne suit pas un Titre 1).
- Langue du document renseignée (`review.language` avec `{"lang":"fr-FR"}`).
- Texte alternatif sur les images (voir `comp-pdf-export-accessibilite`).

## 12. Erreurs fréquentes

| Défaut | Pourquoi c'est une faute | Correction |
|---|---|---|
| Plus de deux polices | cacophonie | revenir à une serif + une sans |
| Tout en gras | le gras ne distingue plus rien | gras pour les titres seulement |
| Tout en capitales (phrases) | lecture lente (forme des mots perdue) | capitales pour un titre court uniquement |
| Soulignement de titres | héritage de la machine à écrire | un filet sous le titre, ou rien |
| Taille arbitraire (12, 13, 14…) | pas de rythme | échelle modulaire |
| Interligne simple sur ligne longue | l'œil se perd | 140 à 150 % |
| Texte centré en paragraphe | lecture impossible | alignement à gauche |
| Justifié sans césure | trous et rivières | césure ou alignement à gauche |
| Corps trop petit (9 pt de texte) | fatigue, exclusion | 11 pt au moins |
| Texte or sur blanc | contraste de 2,3 : 1 | texte bleu nuit, or en filet |
| Police déformée (échelle ≠ 100 %) | proportions altérées | choisir une police plus étroite |
| Mise en forme manuelle partout | incohérence, retouches sans fin | styles de paragraphe |
| Espaces multiples pour aligner | casse à la moindre modification | tabulations, retraits, tableaux |
| Lignes vides pour espacer | espacement fragile | `para.spacing` |
| Police fantaisie en texte | illisible | réserver à un titre d'affiche |
| Titre orphelin en bas de page | rattache mal | `para.keepNext` |
| Mélange italique + gras + souligné | surcharge | une seule marque |

## 13. Gabarit prêt à l'emploi : document A4 de la fédération

| Réglage | Valeur |
|---|---|
| Papier | A4 portrait |
| Marges | haut 25 mm, bas 20 mm, gauche 25 mm, droite 25 mm |
| Police de titre | Georgia |
| Police de texte | Inter, à défaut Arial |
| Corps | 11 pt |
| Interligne | 1,15 à 1,3 (environ 135–150 %) |
| Espacement après paragraphe | 6 pt |
| Alignement du texte | à gauche |
| Titre 1 | Georgia gras 22 pt, `#000761`, avant 18 pt, après 6 pt |
| Titre 2 | Georgia gras 17 pt, `#000761`, avant 14 pt, après 4 pt |
| Titre 3 | Inter gras 14 pt, `#12142b`, avant 10 pt, après 3 pt |
| Note, légende | Inter 9 pt, `#595959` |
| Filet d'accent | or `#c6a24e`, 1,5 pt |

Pour un livret de 12 à 40 pages, voir `comp-word-document-professionnel`.

## 14. Avec les outils de ScoutHub

Tous les identifiants ci-dessous ont été vérifiés dans les listes de commandes natives de Word, Excel et PowerPoint.

### 14.1 Word

| But | Commande | Paramètres |
|---|---|---|
| Choisir la police de la sélection | `format.font` | `{"name":"Georgia"}` |
| Taille en points | `format.size` | `{"size":11}` |
| Gras / italique | `format.bold`, `format.italic` | `{"value":true}` |
| Couleur du texte | `format.color` | `{"color":"12142B"}` |
| Petites capitales | `format.smallCaps` | aucun |
| Approche | `format.spacing` | `{"points":0.5}` |
| Échelle de caractères | `format.scale` | `{"percent":100}` |
| Appliquer un style | `para.style` | `{"style":"Heading 1"}` ou `para.heading1`, `para.heading2`, `para.heading3` |
| Style normal | `para.normal` | aucun |
| Créer un style | `styles.create` | `{"name":"Intertitre fédération","basedOn":"Normal"}` |
| Enregistrer la mise en forme dans un style | `styles.updateToMatch` | `{"style":"Heading 1"}` |
| Interligne (multiple) | `para.lineSpacing` | `{"value":1.25}` |
| Interligne exact | `para.lineSpacing` | `{"exactly":15}` |
| Interligne prédéfini | `para.single`, `para.oneAndHalf`, `para.double` | aucun |
| Espacement entre paragraphes | `para.spacing` | `{"before":0,"after":6}` |
| Alignement | `para.align` | `{"value":"left"}` (ou `para.alignLeft`, `para.justify`) |
| Retraits | `para.indents` | `{"left":0,"firstLine":0}` |
| Marges | `layout.margins` | `{"top":71,"bottom":57,"left":71,"right":71}` (points : 25 mm ≈ 71 pt, 20 mm ≈ 57 pt) |
| Colonnes | `layout.columns` | `{"count":2,"space":28}` |
| Césure | `layout.hyphenation` | `{"value":true,"limit":2}` |
| Veuves et orphelines | `para.widowControl` | `{"value":true}` |
| Titre avec le texte suivant | `para.keepNext` | `{"value":true}` |
| Paragraphe indivisible | `para.keepLines` | `{"value":true}` |
| Polices du thème | `design.themeFonts` | `{"heading":"Georgia","body":"Arial"}` |
| Échelle globale des tailles | `design.scaleFontSizes` | `{"percent":10}` ou `{"delta":1}` |
| Espacement global | `design.paragraphSpacing` | `{"value":"compact"}` |
| Polices ajoutées | `font.add`, `font.list`, `font.remove` | voir ci-dessus |
| Polices manquantes | `font.missing` | aucun |
| Remplacer une police | pas de commande native pour remplacer une police dans Word : modifier le style (`styles.updateToMatch`) | |

La stratégie professionnelle est de **ne jamais mettre en forme à la main** chaque paragraphe : définir les styles une fois, puis les appliquer (`para.style`). Les clés exactes des propriétés de caractères et de paragraphes de `styles.modify` (`CharProps`, `ParaProps`) ne sont pas détaillées dans la liste des commandes : les relire avec `api_commandes` avant de les employer, ou mieux, suivre cette méthode sûre en quatre temps, qui n'emploie que des paramètres documentés :

1. Appliquer le style de base au paragraphe d'exemple : `para.style` avec `{"style":"Heading 1"}`.
2. Régler ce paragraphe : `format.font` avec `{"name":"Georgia"}`, `format.size` avec `{"size":22}`, `format.bold` avec `{"value":true}`, `format.color` avec `{"color":"000761"}`, puis `para.spacing` avec `{"before":18,"after":6}` et `para.keepNext` avec `{"value":true}`.
3. Enregistrer le réglage dans le style : `styles.updateToMatch` avec `{"style":"Heading 1"}`.
4. Répéter pour `Heading 2`, `Heading 3` et `Normal`, puis appliquer les styles au reste du texte avec `para.style`.

Séquence `api_lot` pour le style Titre 1 de la fédération (le paragraphe à régler est sélectionné) :

```
[
 {"commande":"para.style","parametres":{"style":"Heading 1"}},
 {"commande":"format.font","parametres":{"name":"Georgia"}},
 {"commande":"format.size","parametres":{"size":22}},
 {"commande":"format.bold","parametres":{"value":true}},
 {"commande":"format.color","parametres":{"color":"000761"}},
 {"commande":"para.spacing","parametres":{"before":18,"after":6}},
 {"commande":"para.keepNext","parametres":{"value":true}},
 {"commande":"styles.updateToMatch","parametres":{"style":"Heading 1"}}
]
```

Séquence pour un titre mis en forme à la volée :

```
[
 {"commande":"para.heading1","parametres":{}},
 {"commande":"text.insert","parametres":{"text":"Camp d’été des louveteaux"}},
 {"commande":"text.newParagraph","parametres":{}},
 {"commande":"para.normal","parametres":{}}
]
```

### 14.2 Excel

| But | Commande | Paramètres |
|---|---|---|
| Police d'une plage | `home.fontName` | `{"range":"A1:F1","name":"Arial"}` |
| Taille | `home.fontSize` | `{"range":"A1","size":14}` |
| Couleur du texte | `home.fontColor` | `{"range":"A1","color":"#000761"}` |
| Couleur de fond | `home.fillColor` | `{"range":"A1:F1","color":"#000761"}` |
| Alignement | `home.alignLeft`, `home.alignCenter`, `home.alignRight` | `{"range":"A1"}` |
| Retour à la ligne | `home.wrapText` | `{"range":"A1","on":true}` |
| Format de nombre | `home.numberFormat` | `{"range":"C2:C20","format":"Currency"}` |
| Style de cellule | `home.cellStyle` | `{"range":"A1","name":"Title"}` |
| Largeur de colonne | `home.columnWidth` | `{"cols":"A:A","chars":24}` |
| Hauteur de ligne | `home.rowHeight` | `{"rows":"1:1","points":24}` |

Valeurs conseillées pour un tableau : corps 10 ou 11 pt, ligne d'en-tête en gras sur fond bleu nuit avec texte blanc, hauteur de ligne 18 à 20 pt, nombres alignés à droite, texte à gauche. Voir `comp-excel-tableaux-elegants`.

### 14.3 PowerPoint

| But | Commande | Paramètres |
|---|---|---|
| Police | `format.font` | `{"family":"Georgia"}` |
| Taille | `format.size` | `{"size":28}` |
| Couleur | `format.color` | `{"color":"#12142B"}` |
| Approche | `format.spacing` | `{"pt":0.5}` |
| Alignement | `format.align` | `{"align":"left"}` |
| Interligne | `format.lineSpacing` | `{"lines":1.2}` |
| Paragraphe | `format.paragraph` | `{"align":"left","spaceBefore":0,"spaceAfter":6,"lineSpacing":1.2}` |
| Ajustement du texte | `format.autofit` | `{"mode":"none"}` (à éviter : « shrink » réduit le texte sans rendre compte) |
| Polices du thème | `design.fonts` | `{"major":"Georgia","minor":"Arial"}` |
| Polices utilisées | `font.used` | aucun |
| Remplacer une police | `font.replace` | `{"from":"Calibri","to":"Arial"}` |

Principe : en PowerPoint, définir les polices et couleurs **dans le thème** (`design.fonts`, `design.colors`), puis laisser les gabarits les appliquer. Voir `comp-powerpoint-presentation-elegante`.

## Liste de contrôle avant de livrer

1. Deux polices au plus (une serif, une sans), polices sûres ou ajoutées.
2. Aucune police manquante (`font.missing` vide).
3. Corps de texte adapté au support (A4 : 10 à 12 pt ; diapositive : 24 pt et plus ; affiche : 24 pt et plus).
4. Une échelle modulaire unique, six tailles au plus, rapport de 1,2 à 1,5 selon le support.
5. Titres définis par des styles, pas par du formatage manuel.
6. Titres plus grands, plus gras ou plus colorés que le texte, de façon cohérente d'un niveau à l'autre.
7. Espacement avant un titre supérieur à l'espacement après.
8. Interligne de 120 à 150 % pour le texte courant ; 100 à 115 % pour les titres.
9. Longueur de ligne entre 45 et 75 caractères (ou 30 à 45 en deux colonnes).
10. Texte aligné à gauche, ou justifié avec césure et lignes d'au moins 55 caractères.
11. Titres jamais en bas de page, ni veuve ni orpheline.
12. Approche inchangée dans le texte courant ; grands titres resserrés ; capitales espacées.
13. Deux graisses au plus ; pas de soulignement ; pas de faux gras.
14. Chiffres tabulaires pour les colonnes de montants.
15. Contraste d'au moins 4,5 : 1 (7 : 1 pour le texte long) ; jamais d'or sur fond clair pour du texte.
16. Aucune information portée par la seule couleur.
17. Corps jamais inférieur à 9 pt (papier), 20 pt (diapositive), 14 pt (affiche).
18. Document accessible : styles de titres, langue renseignée, hiérarchie sans saut de niveau.
19. Imprimé en niveaux de gris, le document reste hiérarchisé.
20. Les règles de ponctuation sont vérifiées avec `comp-typographie-francaise`.

## Questions auxquelles la fiche répond

- Quelles polices choisir pour un document de la fédération et comment les associer ?
- Combien de polices peut-on employer et pourquoi pas plus de deux ?
- Quelle taille de texte pour une lettre, un livret, un écran, une affiche, une diapositive ?
- Comment calculer les tailles des titres avec une échelle modulaire ?
- Quel interligne choisir selon la longueur de ligne et le support ?
- Combien de caractères par ligne et comment l'obtenir sur une page A4 ?
- Justifier ou aligner à gauche, et quand activer la césure ?
- Comment régler approche, crénage, petites capitales et chiffres de tableau ?
- Quels contrastes de couleur sont acceptables, notamment avec l'or de la fédération ?
- Comment rendre un document lisible pour un lecteur dyslexique ou malvoyant ?
- Quelles commandes Word, Excel et PowerPoint règlent police, taille, interligne et alignement ?
