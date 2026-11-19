---
id: comp-powerpoint-presentation-elegante
titre: Présentations élégantes et efficaces (message, structure, diapositives, images, schémas, diaporama)
theme: Compétences
type: synthese
sources:
  - titre: Usages professionnels de la conception de présentations (rhétorique de l'exposé oral, conception de diapositives, accessibilité)
mots_cles: PowerPoint, DeckCraft, présentation, diaporama, diapositive, maître des diapositives, layout, thème, titre-affirmation, image pleine page, voile, schéma, SmartArt, graphique, animation, transition, notes de l'orateur, mode présentateur, export PDF, accessibilité, api_lot, slide.new, réunion de parents, soirée de camp
liens: app-powerpoint, comp-excel-tableaux-elegants, comp-polices-et-hierarchie, comp-couleur-et-identite-fsggb, comp-mise-en-page-principes, comp-photo-retouche-et-export, comp-pdf-export-accessibilite, comp-redaction-claire, suite-craft-mcp
resume: Comment concevoir une présentation qui sert un message : durée et nombre de diapositives, structure narrative, une idée par diapositive, règles chiffrées de texte, grille et marges 16:9, maître et thème, images, schémas, graphiques, animations sobres, notes, diaporama, accessibilité et export PDF. Donne les commandes natives de DeckCraft avec leurs paramètres exacts et cinq séquences api_lot.
---

## Principe général

Une présentation n'est pas un document projeté. Un document se lit seul, dense et complet ; des diapositives **accompagnent une voix** : elles montrent ce que la parole ne peut pas dire (une image, un chiffre, un plan, un schéma) et donnent un repère à l'auditoire. Si la diapositive suffit sans l'orateur, c'est un document mal découpé ; si elle est illisible à 5 mètres, c'est une page photocopiée.

Trois conséquences :
1. **Le message d'abord**, les diapositives ensuite : on écrit ce qu'on veut faire comprendre ou faire décider avant d'ouvrir le logiciel.
2. **Une idée par diapositive**, formulée en une phrase qui sert de titre.
3. **Le texte est un repère, pas un discours** : l'orateur dit le reste (et le note dans les notes de l'orateur).

Pour les couleurs et polices de la fédération voir `comp-couleur-et-identite-fsggb` et `comp-polices-et-hierarchie` ; pour les principes de mise en page voir `comp-mise-en-page-principes` ; pour les photos voir `comp-photo-retouche-et-export` ; pour l'écriture des phrases voir `comp-redaction-claire`.

## 1. Le message d'abord

### Quatre questions avant de commencer

| Question | Exemple |
|---|---|
| **Objectif** : que doit-on savoir, ressentir ou décider à la fin ? | « Les parents valident le projet de camp et inscrivent leur enfant avant le 15 mai » |
| **Public** : qui, combien, quel niveau de connaissance, quel état d'esprit ? | 30 parents, certains découvrent le scoutisme, un peu d'inquiétude sur la sécurité |
| **Durée** : combien de minutes de parole, combien de questions ? | 15 minutes + 10 de questions |
| **Lieu et support** : salle, vidéoprojecteur, éclairage, envoi par courriel ? | Salle paroissiale, vidéoprojecteur, lumière non occultable |

Formuler ensuite **le message en une phrase de 20 mots maximum** : c'est la phrase que le public doit pouvoir répéter en sortant. Toute diapositive qui ne sert pas cette phrase est supprimée ou mise en annexe.

### Nombre de diapositives selon la durée

Repère : **1 diapositive par minute en moyenne**, moins pour un exposé commenté, plus pour une succession d'images (soirée photos). Une diapositive passe 30 secondes au minimum et rarement plus de 2 minutes.

| Durée de parole | Diapositives (hors annexes) | Remarques |
|---|---|---|
| 5 minutes | 5 à 7 | Une idée forte, pas de plan |
| 10 minutes | 8 à 12 | Plan implicite |
| 15 minutes | 12 à 15 | Plan d'une diapositive |
| 20 minutes | 15 à 20 | Un temps d'interaction au milieu |
| 30 minutes | 20 à 25 | Séparateurs de sections |
| 45 minutes | 25 à 35 | Pauses, démonstration |
| Soirée photos | 1 diapositive par 8 à 10 secondes, 60 à 100 images | Peu de texte, une légende par image |

Le public retient 3 messages au plus : structurer en 3 parties (ou 3 arguments) donne un exposé que l'on mémorise.

## 2. Structure narrative

| Étape | Rôle | Diapositives (exposé de 15 min) |
|---|---|---|
| **Accroche** | Capter l'attention : une question, une image forte, un chiffre étonnant, une courte anecdote vraie | 1 (30 à 60 s) |
| **Contexte / enjeu** | Pourquoi ce sujet intéresse ce public | 1 |
| **Plan** | Annoncer 3 parties (diapositive de plan) | 1 |
| **Développement** | 3 parties de 3 à 4 diapositives : une affirmation, une preuve (image, chiffre, schéma) | 9 à 12 |
| **Démonstration** | Un exemple concret, un plan, un déroulé de journée | inclus |
| **Conclusion** | Reprendre le message en une phrase et résumer en 3 points | 1 |
| **Appel à action** | Dire précisément quoi faire, avant quand, avec qui, comment (date, lieu, contact) | 1 |
| **Remerciements / questions** | Contact, coordonnées | 1 |

Règle d'or : **dire le plan, le faire, puis résumer** (annonce, développement, rappel). Pour un public non spécialiste, le plan tient en 3 mots par partie.

Pour une réunion de parents de camp, un plan type : 1. Le camp en images (accroche) ; 2. Le projet (lieu, dates, programme, encadrement) ; 3. Sécurité et vie quotidienne (santé, repas, communication) ; 4. Inscription (coût, date limite, documents) ; 5. Questions.

## 3. Une idée par diapositive : les titres-affirmations

Le titre d'une diapositive est une **phrase complète qui énonce l'idée**, pas une étiquette.

| Étiquette (à éviter) | Affirmation (à faire) |
|---|---|
| Hébergement | Nous campons sur un terrain boisé à 300 mètres d'un point d'eau |
| Budget | Le camp coûte 227 € par enfant, tout compris |
| Sécurité | Six chefs, dont deux secouristes, encadrent 24 scouts |
| Calendrier | Les inscriptions ferment le 15 mai |

Longueur : **60 caractères maximum**, 2 lignes au plus à 36 pt. Pas de point final. Typographie française : majuscule initiale seule, espaces insécables avant `: ; ? !`, guillemets « » (voir `comp-typographie-francaise`). Le corps de la diapositive **prouve** le titre : si le titre n'est pas démontré par ce qui suit, le réécrire.

## 4. Texte minimal : règles chiffrées

| Règle | Valeur | Raison |
|---|---|---|
| Titre | **32 à 44 pt** (36 pt par défaut), gras ou serif | Se lit à 8 m |
| Corps de texte | **24 pt minimum** (28 pt recommandé) | Lisible au fond d'une salle de 15 m |
| Légendes, sources | 14 à 16 pt (jamais moins de 12) | Information secondaire |
| Lignes par diapositive | **6 au maximum** (idéal 3 à 4) | Au-delà, on lit au lieu d'écouter |
| Mots par ligne | **6 en repère** (jusqu'à 8) | Une ligne se lit d'un coup d'œil |
| Puces par liste | 3 à 5, une seule idée par puce | Mémoire de travail |
| Niveaux de puces | 1, au plus 2 | Un 2e niveau signale souvent une diapositive de trop |
| Interligne | 1,0 à 1,15 pour les titres ; 1,15 à 1,3 pour le corps | Respiration |
| Alignement | **À gauche** (jamais justifié) | Pas de « rivières » blanches |
| Casse | Majuscule initiale ; pas de titre tout en majuscules | Lisibilité |
| Polices | 2 au maximum (serif pour les titres : Georgia ; sans-serif pour le texte : Inter ou Calibri) | Cohérence |
| Gras | 1 mot clé par ligne au plus ; jamais de souligné ni d'italique long | Hiérarchie |
| Phrases | Verbe + complément, sans phrases complètes sauf citation | Brièveté |
| Contraste | Rapport d'au moins 7:1 pour un texte projeté (fond bleu nuit `#000761` + texte blanc : proche de 17:1) | Salle éclairée, projecteur faible |

Une diapositive à 100 mots est un document : la découper ou la mettre en annexe. Remplacer toute liste de plus de 6 éléments par un schéma, un tableau ou plusieurs diapositives.

## 5. Grilles et marges

### Format

Format **16:9, 960 × 540 pt** (13,333 × 7,5 pouces, 33,87 × 19,05 cm), standard des vidéoprojecteurs actuels. Utiliser le 4:3 (720 × 540 pt) seulement pour un vieux projecteur ou une impression en portrait.

### Marges et zones de sécurité (16:9, 960 × 540 pt)

| Zone | Valeur | Remarque |
|---|---|---|
| Marge extérieure | **5 % des bords** : 48 pt à gauche et à droite, 27 pt en haut et en bas | Rien d'important dans la marge : un projecteur ou un écran peut rogner les bords |
| Zone utile | x de 48 à 912 pt (864 pt de large), y de 27 à 513 pt (486 pt de haut) | Tout le texte et les objets s'y trouvent |
| Titre | x = 48, y = 36, largeur 864, hauteur 84 (jusqu'à 2 lignes à 36 pt) | Ancré en haut ou au milieu, toujours à la même place |
| Corps | x = 48, y = 140, largeur 864, hauteur 340 | Laisser 40 pt libres avant le bas |
| Pied de page | y = 500 à 520 ; 12 pt ; numéro de page à droite | Discrets |
| Image pleine page | 0, 0, 960, 540 (le débordement est voulu : « perdu ») ; le texte reste dans la zone utile | |

### Grille

Grille de **12 colonnes** dans la zone utile : colonne de 56 pt, gouttière de 16 pt (12 × 56 + 11 × 16 = 848, et 8 pt de réserve de chaque côté). Pour 2 colonnes de texte : chaque colonne mesure 408 pt, gouttière 48 pt (x = 48 et x = 504). Pour 3 cartes : largeur 264 pt, gouttières de 36 pt (x = 48, 348, 648). Pour 4 cartes : largeur 198 pt, gouttières de 24 pt (x = 48, 270, 492, 714). Tout aligné sur ces repères (guides) : un décalage de 2 pt se voit.

Règle des tiers pour une image : placer le sujet sur l'une des lignes à un tiers (320 pt ou 640 pt de la gauche), jamais pile au centre sauf pour un portrait de face. Espace négatif : au moins 30 % de la diapositive vide.

## 6. Maître des diapositives, mises en page et thème

### Le maître : tout se règle une fois

On ne met **jamais** en forme diapositive par diapositive ; on règle le **maître** et ses **mises en page** (layouts), les diapositives en héritent.

| Réglage | Valeur |
|---|---|
| Fond | `#fafafc` (clair) ou `#000761` (sections et titre) |
| Titre | Georgia 36 pt gras, `#000761` sur fond clair ; blanc sur fond bleu nuit |
| Texte | Inter (ou Calibri) 28 pt, `#12142b` |
| Puces | Rond plein `•` en or `#c6a24e`, retrait de 18 pt |
| Filet or | 3 pt, à y = 126 pt, largeur 96 pt, x = 48 (sous le titre) |
| Pied de page | Nom de l'unité, 12 pt, gris `#5B6078` ; numéro de diapositive à droite |
| Logo | En bas à droite, hauteur 24 pt (le logo officiel est fourni par la fédération, jamais recréé) |

### Mises en page à prévoir (8 suffisent)

| Mise en page | Usage |
|---|---|
| Titre | Première diapositive : titre 44 pt, sous-titre 24 pt, fond bleu nuit |
| Section | Séparateur : un chiffre et un titre de partie, fond bleu nuit |
| Titre et contenu | La diapositive standard (titre + 3 à 5 puces) |
| Deux contenus | Comparaison, avant/après, deux colonnes |
| Titre seul | Pour un schéma, un graphique ou un tableau placé à la main |
| Image pleine page | Photo plein cadre avec légende en bas |
| Chiffres clés | 3 ou 4 cartes de chiffres |
| Fin / contact | Appel à action et coordonnées |

### Thème : couleurs et polices

Définir **un thème de 12 couleurs** et deux polices : l'ensemble de la présentation en hérite, et un changement de couleur se fait en un seul endroit.

| Rôle du thème | Couleur |
|---|---|
| Texte 1 (dk1) | `#12142B` |
| Arrière-plan 1 (lt1) | `#FFFFFF` |
| Texte 2 (dk2) | `#000761` |
| Arrière-plan 2 (lt2) | `#FAFAFC` |
| Accent 1 | `#000761` (bleu nuit) |
| Accent 2 | `#C6A24E` (or) |
| Accent 3 | `#5B6078` (gris texte) |
| Accent 4 | `#1E7B4B` (vert) |
| Accent 5 | `#A32020` (rouge) |
| Accent 6 | `#8A5A00` (ocre) |
| Lien | `#000761` ; lien visité `#5B6078` |

Polices du thème : titres en Georgia, texte en Inter (à défaut Calibri). Une troisième police n'a aucune raison d'être.

## 7. Alignements et distribution

- Aligner tout ce qui se ressemble sur les **mêmes bords** : titre, corps, légende, logo partagent le bord gauche x = 48.
- Plusieurs objets de même rôle (3 cartes, 4 icônes) : **même taille**, alignés en haut ou au milieu, **distribués** régulièrement (espaces égaux), jamais « au jugé ».
- Espacement : multiples de 8 pt (8, 16, 24, 32, 48).
- Centrer sur la diapositive uniquement les compositions symétriques (titre de page de garde, chiffre unique) ; sinon tout à gauche.
- Verrouiller ou grouper ce qui ne doit plus bouger (décor, filets).
- Ne jamais étirer une image sans conserver ses proportions (verrouiller le rapport).

## 8. Images

| Règle | Valeur | Raison |
|---|---|---|
| Résolution pour projection plein écran | **1920 × 1080 px** minimum (idéal 2560 × 1440 pour recadrer) | Net sur un écran Full HD |
| Résolution pour un détail de diapositive | Largeur en pixels ≥ 2 × largeur affichée en points × (96/72) | Éviter l'effet pixellisé |
| Impression A4 de la présentation | 150 à 300 ppp (voir `comp-photo-retouche-et-export`) | Qualité du papier |
| Format | JPEG qualité 80 à 90 % pour les photos ; PNG pour les logos et schémas | Poids et netteté |
| Poids total d'une présentation envoyée par courriel | Moins de 10 Mo (compresser les images) | Limite de pièces jointes |
| Une image = une idée | Pas de collage de 6 photos ; sinon 2 × 2 avec marges égales | Lisibilité |
| Photos d'enfants | Autorisation de droit à l'image, pas de noms associés, visages de dos ou de loin si l'autorisation manque | Protection des mineurs |

### Image pleine page avec voile de lisibilité

Pour écrire sur une photo, il faut un **voile** : une couche sombre semi-transparente entre la photo et le texte.

- Photo en plein cadre 960 × 540 pt, recadrée au ratio 16:9.
- Voile : rectangle plein cadre en bleu nuit `#000761` à **40 à 60 % d'opacité** (60 % si la photo est claire), ou dégradé de bleu nuit opaque en bas vers transparent en haut sur 40 % de la hauteur.
- Texte blanc, 32 à 44 pt, dans le tiers inférieur ou le tiers gauche, loin des visages.
- Contraste vérifié sur la zone la plus claire sous le texte : au moins 4,5:1 (7:1 conseillé pour une projection).
- À défaut de transparence réglable : assombrir directement l'image (luminosité −30 à −45 %).

### Icônes

Style uniforme (tous en contour ou tous pleins), une seule couleur (bleu nuit ou or), 48 pt en carré, alignées sur la grille, légende de 16 à 18 pt dessous. Pas d'icônes décoratives en grand nombre : une icône doit **aider à comprendre** (étapes, thèmes). Les icônes de DeckCraft sont libres de droits.

## 9. Schémas, graphiques, tableaux

### Schémas (processus, cycle, hiérarchie)

| Message | Schéma | Éléments |
|---|---|---|
| Étapes dans l'ordre (inscription, journée type) | **Processus** | 3 à 5 étapes, une phrase de 3 à 6 mots chacune |
| Retour périodique (cycle d'un projet, année scoute) | **Cycle** | 3 à 6 étapes |
| Organisation (équipe, chaîne de décision) | **Hiérarchie** | 2 niveaux, 7 cases au plus |
| Priorités | **Pyramide** | 3 à 4 niveaux |
| Comparer deux dimensions | **Matrice** 2 × 2 | 4 cases |
| Liste de 3 à 6 notions | **Liste en blocs** | Blocs de même taille |

Règles : 3 à 5 éléments (jamais plus de 7), texte de 20 pt minimum, formes de même taille, flèches de même style, une seule couleur par rôle (bleu nuit pour les étapes, or pour l'étape clé). Utiliser les graphiques SmartArt de l'application : ils se réorganisent quand on ajoute une étape et gardent les alignements.

### Graphiques

Voir la fiche `comp-excel-tableaux-elegants` pour le choix du type. Pour une diapositive : **un message par graphique**, titre-affirmation, 2 à 3 séries au plus, étiquettes directes plutôt que légende, axe des valeurs à zéro, pas de 3D, pas de quadrillage dense, chiffres du graphique à **18 pt minimum**, police du thème, couleurs bleu nuit et or. Camembert : à éviter (voir la fiche citée).

### Tableaux

Maximum 5 colonnes et 6 lignes lisibles ; corps de 20 pt minimum ; en-tête bleu nuit texte blanc ; lignes séparées par un filet gris clair `#D9DBE6` ; nombres alignés à droite ; première colonne en gras. Au-delà, mettre le tableau en annexe ou en document remis.

## 10. Animations et transitions

Règle : **l'animation sert à révéler au rythme de la parole, jamais à décorer.**

| Quand | Quoi | Durée |
|---|---|---|
| Transition entre diapositives | **Fondu** ou **aucune** ; la même partout (appliquer à toutes) | 300 à 500 ms |
| Liste révélée point par point | Entrée **Apparition** ou **Fondu**, au clic, par paragraphe | 300 ms |
| Mettre en valeur un élément d'un schéma | Entrée en fondu, ou emphase par une couleur | 300 à 500 ms |
| Morphose (transformation) | Seulement pour passer d'une vue à une autre (ex. plan global puis zoom sur une partie) | 700 ms |

À éviter : rebonds, rotations, zooms, sons, effets 3D, transitions différentes à chaque diapositive, animation automatique qui impose un rythme que l'orateur ne tient pas. Sur un envoi par courriel, supprimer les animations qui cachent du contenu.

## 11. Notes de l'orateur

Les **notes** contiennent ce que l'on dit : le texte de l'accroche, les chiffres exacts, les transitions (« avant de passer aux inscriptions, une question : ... »), les durées. Règles : phrases courtes, 80 à 150 mots par diapositive, le chiffre exact et sa source, les mots à ne pas oublier en gras. Imprimer les notes (format « notes ») pour s'entraîner. Les notes partent dans le fichier : ne rien y écrire qui ne doive être vu par le destinataire.

## 12. Diaporama : projection ou envoi

| Cas | Choix |
|---|---|
| **Projection en salle** | Corps ≥ 24 pt ; fond sombre (bleu nuit) si salle obscurcie, fond clair si salle éclairée ; animations sobres ; mode présentateur sur l'ordinateur (notes, minuteur, diapositive suivante) ; tester l'ordinateur, le câble et la résolution avant ; fichier sur clé USB **et** copie en PDF |
| **Envoi par courriel (lecture seule)** | Texte plus complet (diapositives auto-explicatives), corps ≥ 18 pt, pas d'animations, export **PDF** (voir `comp-pdf-export-accessibilite`) ; poids < 10 Mo |
| **Document remis (impression)** | 2 ou 3 diapositives par page A4 ou « notes » ; noir et blanc possible ; ajouter les coordonnées |
| **Boucle d'accueil** (kiosque) | Pas de son, 6 à 10 secondes par diapositive, boucle |

Chronométrage : répéter à voix haute avec un minuteur ; l'exposé doit durer **90 % du temps imparti** (laisser une marge). Prévoir les diapositives « à sauter » si l'on est en retard. **Mode présentateur** : notes, diapositive suivante et horloge sur l'écran de l'orateur, le public ne voit que la diapositive. Touches : `Entrée` ou flèche droite pour avancer, `B` pour écran noir, `Échap` pour sortir (comportement habituel des diaporamas).

## 13. Accessibilité

- **Texte alternatif** sur chaque image et chaque graphique (une phrase qui dit ce qu'on y voit) ; marquer les images purement décoratives comme telles.
- **Contraste** d'au moins 4,5:1 (7:1 conseillé pour un projecteur).
- **Ordre de lecture** logique : titre, puis corps, puis éléments secondaires (l'ordre des objets dans le volet de sélection est l'ordre de lecture d'un lecteur d'écran).
- **Titres uniques** sur chaque diapositive (utiliser le placeholder titre, pas une zone de texte).
- **Pas d'information par la couleur seule** : doubler par une forme, un mot, un motif.
- **Polices lisibles**, sans effets de contour ni d'ombre sur le texte.
- Tableaux simples avec ligne d'en-tête ; pas de cellules fusionnées.
- Vidéos : sous-titres ; audio : transcription dans les notes.
- Lancer le **vérificateur d'accessibilité** (`review.accessibility`) avant l'envoi.

## 14. Export PDF

Pour l'envoi : `file.export` en PDF, une diapositive par page (disposition « diapositives »), format 16:9 conservé, polices incorporées, images compressées (150 ppp suffisent à l'écran). Vérifier : liens actifs, titres de diapositives dans les signets, pas de contenu coupé. Le PDF ne contient ni animations ni notes (sauf mise en page « notes »). Voir `comp-pdf-export-accessibilite` pour les balises et l'accessibilité du PDF.

## 15. Erreurs fréquentes

| Défaut | Correction |
|---|---|
| Texte de 12 à 16 pt, paragraphes entiers | 24 pt minimum, 6 lignes maximum, découper |
| Titre en étiquette (« Budget ») | Titre-affirmation (« 227 € par enfant, tout compris ») |
| Plusieurs idées par diapositive | Une idée, plusieurs diapositives |
| Fond chargé, motifs, dégradés, ombres | Fond uni, filet or discret |
| Texte sur photo sans voile | Voile à 40-60 % ou texte dans un bandeau uni |
| Plus de deux polices, trois couleurs vives | Thème : Georgia + Inter, bleu nuit et or |
| Alignements approximatifs | Guides, distribution, multiples de 8 pt |
| Image étirée ou pixellisée | Rapport verrouillé, ≥ 1920 × 1080 px |
| Cliparts, WordArt, images aléatoires | Photos réelles du groupe (avec autorisation), icônes uniformes |
| Animations de chaque élément, transitions variées | Fondu partout ou aucune |
| Lire ses diapositives mot à mot | Notes pour l'orateur, diapositive = repère |
| Aucun repère de temps ni de plan | Plan en début, 1 diapositive par minute |
| Dernière diapositive « Merci » vide | Appel à action avec date, lieu, contact |
| Chiffres sans source | Source en 14 pt sous le chiffre |
| Pas de copie de secours | PDF + clé USB + copie dans la messagerie |

## Avec les outils de ScoutHub

PowerPoint dans ScoutHub est **DeckCraft**. ChatGDB utilise les actions `api_commandes` (recherche), `api_executer` (une commande), `api_lot` (suite d'au plus 60 commandes, arrêt à la première erreur, sauf `continuer: true`) et `api_inspecter`. Toutes les valeurs de position et de taille sont en **points** (diapositive 16:9 = 960 × 540 pt).

### Commandes natives vérifiées

| Besoin | Identifiant | Paramètres exacts |
|---|---|---|
| Nouvelle présentation | `file.new` | `{theme?, template?, size?: [w,h] pt, blank?}` |
| Modèles de départ | `file.templates` | `{}` |
| Taille de diapositive | `design.slideSize` | `{preset: widescreen\|standard…, orientation?, scale?}` ou `{w, h, orientation?, scale?}` |
| Nouvelle diapositive | `slide.new` | `{layout?: title\|titleAndContent\|sectionHeader\|twoContent\|comparison\|titleOnly\|blank\|contentWithCaption\|pictureWithCaption (ou nom), at?, title?, body?}` |
| Changer la mise en page | `slide.layout` | `{layout, index?}` |
| Réinitialiser la diapositive | `slide.reset` | `{index?}` |
| Dupliquer, déplacer, supprimer | `slide.duplicate`, `slide.move`, `edit.delete` | `{index?}` ; `{from?, ids?, to}` ; `{ids?, scope?: slides}` |
| Aller à une diapositive | `slide.go` | `{index}` ou `{id}` |
| Masquer une diapositive | `slide.hide` | `{index?, hidden?}` |
| Section | `section.add` | `{name?, at?}` |
| Notes de l'orateur | `slide.notes` | `{text \| body, index?}` |
| Zone de texte | `insert.textBox` | `{rect?: [x,y,w,h], text?}` |
| Forme | `shape.insert` | `{preset: rect\|roundRect\|ellipse\|triangle\|rightArrow\|star5…, rect: [x,y,w,h], text?}` |
| Liste des formes | `shape.presets` | `{}` |
| Image | `insert.picture` | `{path \| data (base64), name?, rect?: [x,y,w,h]}` |
| Recadrer l'image | `picture.crop` | `{left?, top?, right?, bottom?, ids?}` (fractions 0 à 1) |
| Corrections d'image | `picture.adjust` | `{brightness?: -1..1, contrast?: -1..1, saturation?: 0..4, grayscale?, transparency?: 0..1, reset?, ids?}` |
| Icône | `insert.icon` ; `insert.icons` (galerie) | `{name, rect?}` ; `{}` |
| Tableau | `insert.table` | `{rows, cols, rect?}` |
| Style de tableau | `table.style`, `table.options`, `table.cellFill`, `table.borders`, `table.cellAlign`, `table.columnWidth` | `{style, id?}` ; `{headerRow?, totalRow?, bandedRows?, firstColumn?, lastColumn?, bandedColumns?, id?}` ; `{color \| none, cells?, id?}` ; `{which, color?, width?, dash?, cells?, id?}` ; `{anchor?, align?, cells?, id?}` ; `{col, width, keepTotal?, id?}` |
| Graphique | `insert.chart` | `{type?: column\|bar\|line\|pie\|doughnut\|area\|scatter\|stackedColumn…, rect?, categories?: [..], series?: [{name, values}]}` |
| Données, type, éléments du graphique | `chart.data`, `chart.type`, `chart.options` | `{categories?, series?, id?}` ; `{type, id?}` ; `{title?, legend?, dataLabels?, gridlines?, palette?, textColor?, …}` |
| Schéma SmartArt | `insert.smartArt` | `{kind: list\|process\|cycle\|hierarchy\|pyramid\|matrix, items?: [texte] (tabulations = sous-points), nodes?: [{text, level}]}` → `{id}` |
| Style, couleurs, disposition SmartArt | `smartArt.style`, `smartArt.colors`, `smartArt.layout`, `smartArt.nodes`, `smartArt.addNode` | `{id?, style: flat\|subtle\|intense\|outline\|polished\|inset\|cartoon\|powder\|brick}` ; `{id?, colors: colorful\|accent1…accent6…}` ; `{id?, kind: list\|blockList\|process\|chevron\|cycle\|hierarchy\|pyramid\|matrix\|timeline…}` |
| Connecteur entre formes | `shape.connect` | `{from, to, fromSite?, toSite?, id?, preset?}` → `{id}` |
| Remplissage | `shape.fill` | `{color \| none \| background \| gradient: {stops: [[0..1, couleur]], kind?, angle?}}` |
| Contour | `shape.line` | `{color?, none?, width?, dash?, cap?, join?, …}` |
| Effets | `shape.effects` | `{shadow?, glow?, softEdges?, reflection?, bevel?, threeD?}` |
| Position et taille | `shape.setBounds`, `shape.move`, `shape.resize`, `shape.sizePosition` | `{x, y, w, h, ids?}` ; `{dx?, dy?}` ou `{x?, y?}` + `ids?` ; `{w?, h?, lockAspect?, ids?}` ; `{x?, y?, w?, h?, rot?, scaleW?, scaleH?, lockAspect?, ids?}` |
| Nommer, texte alternatif | `shape.rename`, `shape.altText` | `{name, id?}` ; `{text, decorative?, ids?}` |
| Sélectionner des objets | `edit.select`, `selection.select` | `{ids: [id], add?, toggle?}` ; `{ids \| id, toggle?, add?}` |
| Aligner | `arrange.align` | `{edge: left\|center\|right\|top\|middle\|bottom, to?: slide\|selection, ids?}` |
| Distribuer | `arrange.distribute` | `{dir: horizontal\|vertical, to?: slide\|selection, ids?}` |
| Grouper | `arrange.group`, `arrange.ungroup` | `{ids?}` |
| Ordre d'empilement | `arrange.bringToFront`, `arrange.sendToBack` | `{ids?}` |
| Guides | `guide.add`, `guide.list`, `view.guides`, `view.gridOptions` | `{vertical, pos?}` ; `{}` ; `{on?}` ; `{spacing?, snap?, smartGuides?, gridlines?, guides?}` |
| Texte : remplacer, saisir | `text.set`, `text.edit`, `text.insert` | `{id?, text, cell?}` ; `{id?, at?, end?, cell?, notes?}` ; `{text}` |
| Police, corps, couleur | `format.font`, `format.size`, `format.color`, `format.bold` | `{family}` ; `{size}` ; `{color: #RRGGBB\|accent1..6\|tx1…}` ; `{on?}` |
| Alignement du texte | `format.align`, `format.anchor` | `{align: left\|center\|right\|justify…}` ; `{anchor: top\|middle\|bottom}` |
| Interligne, paragraphe | `format.lineSpacing`, `format.paragraph` | `{lines?, pt?}` ; `{align?, indentLeft?, indentFirst?, spaceBefore?, spaceAfter?, lineSpacing?}` |
| Puces | `format.bullets` | `{on?, char?, color?, size?}` |
| Marges internes, ajustement | `format.margins`, `format.autofit`, `format.columns` | `{left?, top?, right?, bottom?}` ; `{mode: none\|shrink\|resize}` ; `{count?, spacing?}` |
| Thème | `design.theme`, `design.themes`, `design.colors`, `design.fonts` | `{name}` ; `{}` ; `{colors: {dk1, lt1, dk2, lt2, accent1…accent6, hlink, folHlink}}` ou `{name}` ; `{major, minor}` ou `{name}` |
| Fond | `design.background` | `{color? \| gradient? \| picture? (base64) \| pattern? \| style?: 1..12 \| reset?, all?, index?, transparency?: 0..1, …}` |
| Pied de page | `design.headerFooter` | `{date?, dateText?, slideNumber?, footer?, footerText?, hideOnTitle?, all?}` |
| Maître et mises en page | `view.slideMaster`, `view.closeMaster`, `master.insertLayout`, `master.renameLayout`, `master.insertPlaceholder`, `master.placeholders` | `{master?, layout?}` ; `{}` ; `{name?}` ; `{name, master?, layout?}` ; `{kind: content\|text\|picture\|chart\|table\|media, rect?}` ; `{title?, footers?}` |
| Transitions | `transition.set`, `transition.timing`, `transition.applyAll`, `transition.list` | `{kind: none\|morph\|fade\|push\|wipe\|split\|reveal\|cut…, option?, duration? (ms), index?}` ; `{duration?, onClick?, after?, index?}` ; `{}` ; `{}` |
| Animations | `animation.set`, `animation.add`, `animation.timing`, `animation.options`, `animation.list` | `{effect: fade\|fly\|zoom\|wipe\|appear…, class?: entrance\|emphasis\|exit\|path, option?, ids?}` ; `{effect, class?, start?: onClick\|withPrevious\|afterPrevious, duration?, delay?, ids?}` ; `{index?, start?, duration?, delay?, repeat?}` ; `{option?, textBuild?: asOne\|byParagraph\|byWord\|byLetter}` ; `{}` |
| Diaporama | `show.start`, `show.fromStart`, `show.setup`, `show.presenter`, `show.end` | `{from?, custom?}` ; `{}` ; `{type?: speaker\|browsed\|kiosk, loop?, noNarration?, noAnimation?, useTimings?, …}` ; `{on?}` |
| Accessibilité | `review.accessibility` | `{}` → liste `[{slide, shape, issue}]` |
| Inspecter | `document.inspect`, `slide.inspect`, `shape.inspect` | `{}` ; `{index?}` ; `{id}` |
| Rendu d'une diapositive | `file.render` | `{slide?, scale?, edit?, transparentBackground?}` → `{png (base64), width, height}` |
| Export | `file.export` | `{path, format?: png\|jpeg\|pptx\|deckcraft\|outline\|rtf\|pdf\|gif, slide?, all?, scale?, layout?: slides\|notes\|handouts, perPage?, paper?, orientation?, …}` |
| Enregistrer | `file.save`, `file.saveAs` | `{path?, format?: deckcraft\|pptx}` ; `{path, format?}` |
| Imprimer | `app.print` | `{layout?, perPage?, slides?, includeHidden?, frame?, paper?, orientation?}` |
| Rechercher une commande | `commands.list` | `{filter?}` |

**À savoir** : (1) les commandes `shape.*`, `format.*`, `picture.*` sans `ids` agissent sur la **sélection** ; pour viser une forme précise, lire son identifiant avec `slide.inspect` (la réponse liste les formes avec `ids`, genres, cadres et textes) et le passer dans `ids` ou dans `edit.select`. (2) Le style d'un texte se règle **une fois dans le maître et le thème** ; ne formater à la main que les exceptions. (3) Deux paramètres cités plus haut ne sont pas détaillés en entier dans la liste synthétique de DeckCraft (par exemple la transparence d'un remplissage de forme, certaines options de `shape.fill`) : lire la ligne complète par `api_commandes` avec `requete: "fill"` avant de les utiliser, sans jamais en deviner. (4) Il n'y a pas de commande d'« enregistrement de minutage » dans la liste : utiliser `show.setup` avec `useTimings` et l'interface pour répéter.

Dans les séquences ci-dessous, `ID_…` désigne l'identifiant de forme à lire dans `slide.inspect`. Cela donne un **déroulé en deux temps** : un premier lot crée, `slide.inspect` rend les `ids`, un second lot met en forme.

### Séquence 0. Préparer le thème et le format (une fois par présentation)

```json
{"action": "api_lot", "commandes": [
 {"commande": "file.new", "parametres": {"blank": false}},
 {"commande": "design.slideSize", "parametres": {"w": 960, "h": 540, "scale": "none"}},
 {"commande": "design.colors", "parametres": {"colors": {"dk1": "#12142B", "lt1": "#FFFFFF", "dk2": "#000761", "lt2": "#FAFAFC",
    "accent1": "#000761", "accent2": "#C6A24E", "accent3": "#5B6078", "accent4": "#1E7B4B", "accent5": "#A32020", "accent6": "#8A5A00",
    "hlink": "#000761", "folHlink": "#5B6078"}}},
 {"commande": "design.fonts", "parametres": {"major": "Georgia", "minor": "Inter"}},
 {"commande": "design.headerFooter", "parametres": {"slideNumber": true, "footer": true, "footerText": "Groupe Saint-Louis, camp d'été 2026", "hideOnTitle": true, "all": true}},
 {"commande": "guide.add", "parametres": {"vertical": true, "pos": 48}},
 {"commande": "guide.add", "parametres": {"vertical": true, "pos": 912}},
 {"commande": "guide.add", "parametres": {"vertical": false, "pos": 27}},
 {"commande": "guide.add", "parametres": {"vertical": false, "pos": 513}}
]}
```

Si Inter n'est pas disponible sur la machine, mettre `"minor": "Calibri"`. La couleur et la taille du titre et du corps se règlent ensuite dans le maître (`view.slideMaster`, sélection du titre, puis `format.size`, `format.color`, `format.bold`), puis `view.closeMaster`.

### Séquence 1. Diapositive de titre

```json
{"action": "api_lot", "commandes": [
 {"commande": "slide.new", "parametres": {"layout": "title", "at": 0,
    "title": "Camp d'été 2026 : dix jours en forêt",
    "body": "Réunion d'information pour les familles, 15 mars 2026"}},
 {"commande": "design.background", "parametres": {"color": "#000761", "index": 0}},
 {"commande": "shape.insert", "parametres": {"preset": "rect", "rect": [48, 300, 96, 4]}},
 {"commande": "slide.inspect", "parametres": {"index": 0}}
]}
```

Deuxième temps (les `ID_…` viennent de `slide.inspect`) :

```json
{"action": "api_lot", "commandes": [
 {"commande": "shape.fill", "parametres": {"color": "#C6A24E"}},
 {"commande": "edit.select", "parametres": {"ids": ["ID_TITRE"]}},
 {"commande": "shape.setBounds", "parametres": {"ids": ["ID_TITRE"], "x": 48, "y": 150, "w": 864, "h": 130}},
 {"commande": "format.size", "parametres": {"size": 44}},
 {"commande": "format.bold", "parametres": {"on": true}},
 {"commande": "format.color", "parametres": {"color": "#FFFFFF"}},
 {"commande": "format.align", "parametres": {"align": "left"}},
 {"commande": "edit.select", "parametres": {"ids": ["ID_SOUS_TITRE"]}},
 {"commande": "shape.setBounds", "parametres": {"ids": ["ID_SOUS_TITRE"], "x": 48, "y": 330, "w": 864, "h": 60}},
 {"commande": "format.size", "parametres": {"size": 24}},
 {"commande": "format.color", "parametres": {"color": "#C6A24E"}},
 {"commande": "format.align", "parametres": {"align": "left"}},
 {"commande": "slide.notes", "parametres": {"index": 0, "text": "Accueil : se présenter, rappeler la durée (15 minutes), annoncer le plan en trois parties."}}
]}
```

Le rectangle fraîchement inséré est la sélection active au moment du `shape.fill` ; sinon le passer par `edit.select`. Titre en blanc sur fond bleu nuit, filet or de 96 × 4 pt sous le titre, sous-titre en or : contraste vérifié.

### Séquence 2. Diapositive titre et texte (titre-affirmation + 4 puces)

```json
{"action": "api_lot", "commandes": [
 {"commande": "slide.new", "parametres": {"layout": "titleAndContent",
    "title": "Nous campons à 300 mètres d'un point d'eau",
    "body": "Terrain boisé de 3 hectares\nSanitaires et douches à 150 mètres\nPoste de secours sous la tente de l'intendance\nAccès pompiers par un chemin de 4 mètres"}},
 {"commande": "slide.notes", "parametres": {"text": "Insister sur l'eau et la sécurité ; montrer la carte au besoin."}},
 {"commande": "slide.inspect", "parametres": {}}
]}
```

Deuxième temps (ids lus dans `slide.inspect`) :

```json
{"action": "api_lot", "commandes": [
 {"commande": "shape.setBounds", "parametres": {"ids": ["ID_TITRE"], "x": 48, "y": 36, "w": 864, "h": 84}},
 {"commande": "edit.select", "parametres": {"ids": ["ID_TITRE"]}},
 {"commande": "format.size", "parametres": {"size": 36}},
 {"commande": "format.bold", "parametres": {"on": true}},
 {"commande": "format.color", "parametres": {"color": "#000761"}},
 {"commande": "format.align", "parametres": {"align": "left"}},
 {"commande": "shape.setBounds", "parametres": {"ids": ["ID_CORPS"], "x": 48, "y": 150, "w": 864, "h": 330}},
 {"commande": "edit.select", "parametres": {"ids": ["ID_CORPS"]}},
 {"commande": "format.size", "parametres": {"size": 28}},
 {"commande": "format.color", "parametres": {"color": "#12142B"}},
 {"commande": "format.align", "parametres": {"align": "left"}},
 {"commande": "format.lineSpacing", "parametres": {"lines": 1.15}},
 {"commande": "format.paragraph", "parametres": {"spaceAfter": 12}},
 {"commande": "format.bullets", "parametres": {"on": true, "char": "•", "color": "#C6A24E", "size": 100}},
 {"commande": "format.autofit", "parametres": {"mode": "none"}}
]}
```

`autofit` à `none` : on ne laisse pas le logiciel réduire la police ; si le texte déborde, on **coupe** le texte (6 lignes maximum).

### Séquence 3. Image pleine page avec voile et légende

```json
{"action": "api_lot", "commandes": [
 {"commande": "slide.new", "parametres": {"layout": "blank"}},
 {"commande": "insert.picture", "parametres": {"path": "/chemin/camp-2025.jpg", "name": "Photo du camp 2025", "rect": [0, 0, 960, 540]}},
 {"commande": "picture.adjust", "parametres": {"brightness": -0.35, "contrast": 0.05}},
 {"commande": "shape.altText", "parametres": {"text": "Les éclaireurs montent une tente sur un terrain forestier au lever du jour"}},
 {"commande": "insert.textBox", "parametres": {"rect": [48, 380, 640, 110], "text": "Chaque été, dix jours pour apprendre à vivre ensemble"}},
 {"commande": "slide.inspect", "parametres": {}}
]}
```

Deuxième temps pour le texte (`ID_LEGENDE` lu dans l'inspection) : `edit.select {ids:["ID_LEGENDE"]}`, `format.size {size: 40}`, `format.bold {on: true}`, `format.color {color: "#FFFFFF"}`, `format.align {align: "left"}`, `format.anchor {anchor: "bottom"}`, `format.margins {left: 0, right: 0}`. Le **voile** : ici l'assombrissement de l'image (`brightness: -0.35`) garantit un contraste suffisant sans objet supplémentaire. Pour un voile par rectangle bleu nuit semi-transparent, insérer `shape.insert {preset: "rect", rect: [0, 0, 960, 540]}`, lui donner `shape.fill {color: "#000761"}`, puis régler la **transparence** avec la commande décrite par `api_commandes` (`requete: "transparency"`) ou par l'interface (Format de la forme, Transparence 40 à 60 %) ; enfin `arrange.sendBackward` pour passer le rectangle derrière le texte et devant la photo. Le texte reste dans la zone utile (x 48 à 912, y 27 à 513).

### Séquence 4. Comparaison en deux colonnes

```json
{"action": "api_lot", "commandes": [
 {"commande": "slide.new", "parametres": {"layout": "titleOnly", "title": "Deux formules pour les familles, un seul projet"}},
 {"commande": "shape.insert", "parametres": {"preset": "rect", "rect": [48, 150, 408, 50], "text": "Formule en autonomie"}},
 {"commande": "shape.insert", "parametres": {"preset": "rect", "rect": [504, 150, 408, 50], "text": "Formule avec transport"}},
 {"commande": "insert.textBox", "parametres": {"rect": [48, 215, 408, 260], "text": "Rendez-vous sur le terrain\nTarif : 180 €\nÀ la charge des familles : trajet\nDépart le dimanche 12 juillet à 14 h"}},
 {"commande": "insert.textBox", "parametres": {"rect": [504, 215, 408, 260], "text": "Départ en autocar depuis l'église\nTarif : 200 €\nTrajet encadré par les chefs\nDépart le dimanche 12 juillet à 9 h"}},
 {"commande": "slide.inspect", "parametres": {}}
]}
```

Deuxième temps : en-têtes de colonne (`ID_ENTETE_G`, `ID_ENTETE_D`) : `shape.fill {color: "#000761"}` (avec `edit.select`), `format.color {color: "#FFFFFF"}`, `format.size {size: 24}`, `format.bold`, `format.align {align: "left"}`, `format.margins {left: 16}`. Colonnes de texte (`ID_TEXTE_G`, `ID_TEXTE_D`) : `format.size {size: 24}`, `format.color {color: "#12142B"}`, `format.bullets {on: true, char: "•", color: "#C6A24E"}`, `format.paragraph {spaceAfter: 10}`. Aligner : `arrange.align {edge: "top", to: "selection", ids: [...]}` sur les deux en-têtes puis sur les deux blocs. Les deux colonnes ont la **même largeur (408 pt)**, la gouttière est de 48 pt (456 à 504) : si on n'a pas de contenu égal des deux côtés, réécrire pour obtenir 4 lignes de part et d'autre. Variante sans calcul de positions : `slide.new {layout: "comparison", title: "…"}` puis `text.set` sur chaque zone.

### Séquence 5. Diapositive de chiffres clés (3 cartes)

```json
{"action": "api_lot", "commandes": [
 {"commande": "slide.new", "parametres": {"layout": "titleOnly", "title": "Le camp en trois chiffres"}},
 {"commande": "insert.textBox", "parametres": {"rect": [48, 190, 264, 110], "text": "24"}},
 {"commande": "insert.textBox", "parametres": {"rect": [48, 305, 264, 60], "text": "scouts de 11 à 14 ans"}},
 {"commande": "insert.textBox", "parametres": {"rect": [348, 190, 264, 110], "text": "10"}},
 {"commande": "insert.textBox", "parametres": {"rect": [348, 305, 264, 60], "text": "jours, du 12 au 21 juillet"}},
 {"commande": "insert.textBox", "parametres": {"rect": [648, 190, 264, 110], "text": "227 €"}},
 {"commande": "insert.textBox", "parametres": {"rect": [648, 305, 264, 60], "text": "par enfant, tout compris"}},
 {"commande": "shape.insert", "parametres": {"preset": "rect", "rect": [48, 170, 264, 3]}},
 {"commande": "shape.insert", "parametres": {"preset": "rect", "rect": [348, 170, 264, 3]}},
 {"commande": "shape.insert", "parametres": {"preset": "rect", "rect": [648, 170, 264, 3]}},
 {"commande": "slide.inspect", "parametres": {}}
]}
```

Deuxième temps : pour chaque grand chiffre (`ID_CHIFFRE_1…3`) : `format.size {size: 66}`, `format.bold`, `format.color {color: "#000761"}`, `format.align {align: "left"}`, `format.font {family: "Georgia"}` ; pour chaque libellé (`ID_LIBELLE_1…3`) : `format.size {size: 20}`, `format.color {color: "#5B6078"}` ; pour chaque filet fin : `shape.fill {color: "#C6A24E"}` et `shape.line {none: true}`. Régler `arrange.distribute {dir: "horizontal", to: "slide", ids: [...]}` pour contrôler l'espacement égal (gouttière de 36 pt) ; chiffres de 66 pt : jamais plus de 6 caractères. Le même principe donne 4 cartes (largeur 198 pt, x = 48, 270, 492, 714).

### Séquence 6. Schéma de processus (SmartArt) et graphique

```json
{"action": "api_lot", "commandes": [
 {"commande": "slide.new", "parametres": {"layout": "titleOnly", "title": "L'inscription tient en quatre étapes"}},
 {"commande": "insert.smartArt", "parametres": {"kind": "process",
    "items": ["Remplir la fiche", "Joindre le certificat", "Verser l'acompte", "Recevoir la confirmation"]}},
 {"commande": "slide.new", "parametres": {"layout": "titleOnly", "title": "Le transport pèse 38 % du budget"}},
 {"commande": "insert.chart", "parametres": {"type": "bar", "rect": [48, 150, 864, 340],
    "categories": ["Transport", "Alimentation", "Terrain", "Activités", "Assurance"],
    "series": [{"name": "Dépenses prévues (€)", "values": [2400, 2550, 600, 650, 180]}]}},
 {"commande": "chart.options", "parametres": {"title": null, "legend": null, "dataLabels": true, "gridlines": false}}
]}
```

`insert.smartArt` rend un `{id}` : le passer à `smartArt.colors {id, colors: "accent1"}` et `smartArt.style {id, style: "flat"}`, puis régler la taille du cadre avec `shape.setBounds {ids: [id], x: 48, y: 170, w: 864, h: 260}`. Pour le graphique, l'ordre des catégories suit celui des données : fournir les catégories **déjà triées**. Régler ensuite les couleurs de la série avec `chart.options` (clé `palette`, voir `api_commandes` avec `requete: "chart"`).

### Séquence 7. Transitions sobres, accessibilité, export

```json
{"action": "api_lot", "commandes": [
 {"commande": "transition.set", "parametres": {"kind": "fade", "duration": 400}},
 {"commande": "transition.applyAll", "parametres": {}},
 {"commande": "design.headerFooter", "parametres": {"slideNumber": true, "all": true}},
 {"commande": "review.accessibility", "parametres": {}},
 {"commande": "show.setup", "parametres": {"type": "speaker", "noNarration": true}},
 {"commande": "file.export", "parametres": {"path": "/chemin/camp-2026-diaporama.pdf", "format": "pdf", "all": true, "layout": "slides", "paper": "a4", "orientation": "landscape"}},
 {"commande": "file.save", "parametres": {"path": "/chemin/camp-2026.pptx", "format": "pptx"}}
]}
```

`review.accessibility` rend la liste des problèmes `[{slide, shape, issue}]` : corriger chacun (texte alternatif manquant, contraste) avant l'export. Les chemins sont ceux de l'environnement de l'application : dans ChatGDB, le fichier reste dans la conversation (carte « Ouvrir » / « Télécharger »).

### Déroulé complet conseillé pour ChatGDB

1. Poser le message en une phrase et le plan ; décider du nombre de diapositives (durée ÷ 1).
2. `file.new` ; séquence 0 (thème, format, guides, pied de page).
3. Pour chaque diapositive : `slide.new` avec **titre-affirmation**, puis contenu ; `slide.notes` avec le texte parlé.
4. Mettre en forme en **deux temps** (`slide.inspect` puis lot avec `ids`), en réglant d'abord le maître plutôt que chaque forme.
5. Contrôler visuellement : `file.render` (une diapositive) ou une capture ; vérifier lisibilité à distance (reculer, ou zoom à 30 %).
6. `review.accessibility`, puis `file.export` en PDF et `file.save`.

## Particularités dans le navigateur (ScoutHub) : à lire avant d'exécuter une séquence
Les séquences `api_lot` de cette fiche ont été **exécutées sur l'application réelle** pour en vérifier les paramètres ; elles supposent le contexte indiqué dans leur titre. Dans le navigateur :
- **Pas de chemins de fichiers.** Les commandes qui prennent un `path` pour LIRE un fichier (`insert.picture` avec `path`, ouverture de fichiers) répondent « files are opened through the browser on the web ». Pour une image, la personne l'insère par l'interface (Insertion ▸ Image) ou la commande reçoit `data` (image en base64) quand l'application l'accepte. Ne jamais inventer un chemin comme `/chemin/image.jpg`.
- **Enregistrer** = l'action `enregistrer` de ChatGDB (jamais `file.save` avec un chemin : « saving to a path is not available in the browser »). Le document est alors gardé dans la conversation et la personne le retrouve sous ta réponse avec les boutons « Ouvrir » et « Télécharger ».
- **Export PDF** : `file.exportPdf` fonctionne dans Word et Excel (le PDF est ajouté sous ta réponse avec un bouton « Télécharger ») ; PowerPoint n'exporte pas de PDF par commande dans le navigateur (`file.export` exige un chemin) : demander à la personne Fichier ▸ Exporter, ou livrer le .pptx.
- **Identifiants** : une séquence qui écrit `ID_…` ou `Nom de feuille` en majuscules est un **modèle** : remplace par la valeur réelle lue avec `api_inspecter` / `slide.inspect` avant d'exécuter. Une feuille Excel ou une diapositive citée doit exister (crée-la d'abord avec « classeur » ou `home.insertSheet`).

## Liste de contrôle avant de livrer

- [ ] Le message tient en une phrase de 20 mots maximum et chaque diapositive le sert.
- [ ] Nombre de diapositives cohérent avec la durée (environ 1 par minute).
- [ ] Structure : accroche, plan, 3 parties, conclusion, appel à action avec date, lieu, contact.
- [ ] Chaque titre est une affirmation de 60 caractères maximum, sans point final, avec la typographie française.
- [ ] Une idée par diapositive ; au plus 6 lignes de 6 mots en repère ; aucune diapositive de plus de 40 mots.
- [ ] Corps ≥ 24 pt (28 recommandé), titres 32 à 44 pt, légendes ≥ 14 pt (jamais moins de 12).
- [ ] Format 16:9 (960 × 540 pt) ; marges de 48 pt (côtés) et 27 pt (haut et bas) respectées ; rien d'important hors de la zone utile.
- [ ] Alignements sur la grille : bords gauche communs, cartes de même taille, espaces égaux (multiples de 8 pt).
- [ ] Mise en forme faite dans le maître et le thème (couleurs, polices, puces, pied de page), pas diapositive par diapositive.
- [ ] Deux polices au maximum ; palette bleu nuit, or, gris ; fond uni ; aucun dégradé, aucune ombre décorative.
- [ ] Images en 1920 × 1080 px minimum, proportions verrouillées, droit à l'image des enfants vérifié ; voile ou bandeau sous tout texte posé sur une photo.
- [ ] Schémas : 3 à 5 éléments, formes de même taille, texte ≥ 20 pt ; graphiques à message unique, titre-affirmation, axe à zéro, étiquettes directes.
- [ ] Tableaux de 5 colonnes et 6 lignes au plus, corps ≥ 20 pt.
- [ ] Transition identique partout (fondu 300 à 500 ms) ; animations seulement pour révéler au rythme de la parole.
- [ ] Notes de l'orateur rédigées (80 à 150 mots), chiffres et sources notés.
- [ ] Répétition chronométrée : durée de l'exposé ≈ 90 % du temps imparti ; mode présentateur testé.
- [ ] Texte alternatif sur toutes les images et graphiques ; contraste ≥ 4,5:1 ; ordre de lecture logique ; `review.accessibility` sans erreur.
- [ ] Export PDF vérifié (liens, pagination, poids < 10 Mo pour l'envoi) ; copie de secours sur clé et en pièce jointe.
- [ ] Aucune donnée personnelle superflue (noms d'enfants, coordonnées privées) ; aucun contenu copié sans droit.

## Questions auxquelles la fiche répond

- Combien de diapositives prévoir pour 5, 10, 15 ou 30 minutes ?
- Comment structurer un exposé (accroche, plan, démonstration, conclusion, appel à action) ?
- Quelle taille de police, combien de lignes et de mots par diapositive ?
- Quelles marges et quelle grille pour une diapositive 16:9 ?
- Comment régler le maître des diapositives, le thème de couleurs et de polices aux couleurs de la fédération ?
- Comment placer du texte lisible sur une photo pleine page (voile, contraste) ?
- Quand et comment utiliser un schéma, un graphique ou un tableau dans une diapositive ?
- Quelles animations et transitions sont acceptables ?
- Comment préparer une projection en salle, un envoi par courriel et une version imprimée ?
- Comment rendre une présentation accessible et l'exporter en PDF ?
- Quelles commandes natives de DeckCraft utiliser pour créer des diapositives avec api_lot ?
- Quelles sont les erreurs les plus fréquentes dans une présentation ?
