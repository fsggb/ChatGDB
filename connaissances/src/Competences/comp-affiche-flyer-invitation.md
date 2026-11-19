---
id: comp-affiche-flyer-invitation
titre: Affiches, flyers, invitations et cartes (formats, hiérarchie, exports, six maquettes)
theme: Compétences
type: synthese
sources:
  - titre: Pratiques professionnelles de conception d'affiches et de supports courts (hiérarchie, lisibilité à distance)
  - titre: Préparation de fichiers pour l'impression (fonds perdus, traits de coupe, PDF/X, résolution)
  - titre: Spécification du QR code (modules, zone de silence) et usages courants
mots_cles: affiche, flyer, tract, invitation, carte de voeux, programme, badge, étiquette, A3, A4, A5, A6, DL, carré, 4:5, réseaux sociaux, hiérarchie, accroche, quand où quoi, appel à action, QR code, mentions, voile, bandeau, fonds perdus, traits de coupe, PDF/X, 300 ppp, CMJN, RVB, camp, messe d'action de grâce, recrutement, design.slideSize, shape.insert, document.setup, document.exportPdf, object.createTrimMarks, file.exportPdf
liens: comp-mise-en-page-principes, comp-couleur-et-identite-fsggb, comp-polices-et-hierarchie, comp-typographie-francaise, comp-redaction-claire, comp-photo-retouche-et-export, comp-vectoriel-et-pao, comp-pdf-export-accessibilite, comp-powerpoint-presentation-elegante, app-powerpoint, app-illustrator, app-word, app-indesign
resume: Comment concevoir une affiche, un flyer, une invitation, une carte ou un badge lisibles en trois secondes : formats, hiérarchie, tailles de titre selon la distance, image, QR code, mentions, texte sur image, exports et six maquettes cotées en millimètres (camp, messe d'action de grâce, recrutement, vœux, programme, badge), avec les commandes natives de PowerPoint, Illustrator et Word.
---

## Le principe : lire en trois secondes

Une affiche ou un flyer est lu **debout, en passant, de loin**. Le lecteur donne trois secondes ; ce qui n'est pas compris à ce moment-là est perdu. La conception consiste donc à choisir **ce qu'on enlève**. Un support réussi tient en une phrase : « Tel événement, tel jour, à tel endroit, voici comment s'inscrire. » Tout le reste (programme détaillé, règlement, trousseau) va sur une autre feuille ou derrière le QR code. Voir **comp-mise-en-page-principes** pour les règles générales de grille et de blanc, **comp-couleur-et-identite-fsggb** pour la palette, **comp-polices-et-hierarchie** pour les polices.

## Formats

| Format | mm | Pixels écran (≈ 96 ppp) | Usage | Texte minimal |
|---|---|---|---|---|
| A3 | 297 × 420 | 1123 × 1587 | affiche de porte, de panneau | corps 14 pt |
| A4 | 210 × 297 | 794 × 1123 | affiche d'intérieur, flyer grand, programme | corps 10 pt |
| A5 | 148 × 210 | 559 × 794 | flyer, invitation, programme court | corps 9,5 pt |
| A6 | 105 × 148 | 397 × 559 | carte, invitation, flyer de poche | corps 9 pt |
| DL | 99 × 210 | 374 × 794 | invitation étroite, flyer de boîte aux lettres | corps 9 pt |
| Carré | 148 × 148 (ou 150 × 150) | 559 × 559 | carte de vœux, pochette | corps 9 pt |
| Réseaux, carré | 1080 × 1080 px | 1080 × 1080 | publication carrée | 28 px au minimum |
| Réseaux, 4:5 | 1080 × 1350 px | 1080 × 1350 | publication verticale (meilleure place dans le fil) | 28 px au minimum |
| Story, 9:16 | 1080 × 1920 px | 1080 × 1920 | story : garder les 250 px du haut et du bas libres | 32 px |

Règles de choix :
- **Orientation portrait** pour l'affiche (ratio de la feuille d'impression et de la plupart des panneaux) ; paysage seulement pour un support horizontal imposé (écran de paroisse).
- Le format est dicté par **le moyen de diffusion**, pas par le contenu : un flyer glissé dans une poche ou un livre se fait en A6 ou DL ; une affiche de porte d'église en A3 ; un envoi par courriel en A5 réduit pour l'écran.
- Choisir **un format standard** : il se plie, s'imprime sur les imprimantes courantes et se met dans des cadres ; un format sur mesure coûte plus cher.
- Vérifier la zone de lecture du support : une porte vitrée est vue en reflet ; un panneau de liège est vu à 1 à 2 m ; une vitrine à 3 m.

## La hiérarchie en trois secondes

Quatre niveaux, dans cet ordre de poids visuel décroissant :

| Niveau | Contenu | Poids | Exemple |
|---|---|---|---|
| 1. Accroche | le titre : une promesse ou un nom d'événement | le plus grand élément (40 à 60 % de la largeur) | « Camp d'été 2027 » |
| 2. Information clé | **Quand, où, quoi** (dates, lieu, public) | deuxième taille, en bloc compact | « Du 12 au 24 juillet · Verdon · 11-14 ans » |
| 3. Appel à action | ce qu'on doit faire et comment | contrasté (bouton, filet, couleur d'accent) | « Inscriptions avant le 15 mars : QR ci-contre » |
| 4. Mentions | organisateur, contact, mentions légales | petit (8 à 9 pt), tout en bas | « FSGGB · groupe Saint-Louis · contact@… » |

Règles :
- **Un seul message principal** ; une seule image dominante ; un seul appel à action.
- **Quand, où, quoi** se lisent ensemble : même bloc, même alignement, séparés des autres par un vide. Ne jamais éparpiller la date.
- L'**ordre de lecture** suit le schéma en Z : titre en haut à gauche ou au centre haut, image au milieu, information clé en dessous à gauche, appel à action en bas à droite.
- Un **test de flou** : plisser les yeux ou réduire l'image à 10 % : on doit encore voir le titre, l'image, et le bloc date/lieu. Sinon, la hiérarchie est trop plate.
- Rapport de taille entre le niveau 1 et le niveau 2 : au moins **2:1** ; entre 2 et 4 : au moins 3:1.

## Grille et zones

Grille de base pour une affiche A3 portrait :
- Marges de 15 mm (A4 : 10 à 12 mm ; A5 : 8 mm ; A6 : 6 mm) ; zone de sécurité : rien d'essentiel à moins de 5 mm de la coupe.
- Découpage vertical en **trois bandes** :
  - bande haute (25 à 35 % de la hauteur) : logo, accroche ;
  - bande centrale (35 à 45 %) : image ;
  - bande basse (25 à 30 %) : quand, où, quoi, appel à action, mentions.
- Alternative **« Z à deux colonnes »** : image à gauche sur 55 % de la largeur, bloc texte à droite sur 45 %.
- 6 colonnes pour A3, 4 pour A4, 2 pour A6, gouttière 5 mm.
- Alignement : un seul axe de texte (fer à gauche de préférence). Le texte centré ne se réserve qu'aux invitations et cartes.
- Respiration : le blanc occupe 30 à 45 % de la surface ; une affiche pleine d'éléments est une affiche invisible.

## Tailles de titre selon la distance de lecture

On lit confortablement un texte dont la **hauteur de capitale** est d'environ **1/150 de la distance** (7 mm par mètre). Le corps en points se déduit : la capitale mesure environ 0,7 fois le corps, 1 pt vaut 0,353 mm, donc **corps (pt) ≈ distance (m) × 28**.

| Distance de lecture | Capitale mini | Corps du titre | Usage |
|---|---|---|---|
| 0,5 m (main) | 3,5 mm | 14 pt | flyer, carte |
| 1 m | 7 mm | 28 pt | affiche d'intérieur, carton |
| 2 m | 14 mm | 56 pt | affiche sur panneau |
| 3 m | 21 mm | 85 pt | vitrine, porte |
| 5 m | 35 mm | 140 pt | affiche de salle, banderole |
| 10 m | 70 mm | 280 pt | banderole extérieure |

Les informations secondaires (date, lieu) se lisent à **la moitié de la distance** du titre : pour une affiche vue à 2 m, titre à 56 pt, date et lieu à 28 pt minimum, mentions à 9 pt (lues de près). Le texte d'un flyer ne descend pas sous 9 pt ; sous la tente ou en plein air, ne pas descendre sous 10 pt.

Choix typographiques : serif de titre en gras ou semi-gras (Georgia ou Source Serif 4), sans-serif pour le reste (Inter) ; une seule famille de titre ; casse : titres en bas de casse avec majuscule initiale (plus lisibles que les capitales sur plus de trois mots) ; capitales seulement pour des surtitres courts avec espacement + 5 à 8 %. Interligne des titres : 100 à 110 % (serré), du texte : 130 à 145 %.

## Une image forte

- **Une seule image dominante** : un visage, un geste, un feu de camp, des mains au travail : un sujet clair, une action, une lumière chaude. Éviter les collages et les photos de groupe où personne n'est identifiable.
- **Cadrage** : sujet sur un tiers, regard orienté vers le texte, pas de tête coupée ; laisser une zone calme (ciel, mur, fond flou) pour y poser le titre.
- **Qualité** : 300 ppp à la taille finale. Calcul : une image qui couvre une affiche A3 de 297 mm de large demande 297 / 25,4 × 300 = 3508 px de large ; une A5, 1748 px ; une A6, 1240 px. À l'écran : 1080 px de large suffisent.
- **Pas d'agrandissement** d'une image de petite taille (pixels visibles) ; pas de capture d'écran floue ; ne pas étirer les proportions.
- **Légalité et respect** :
  - n'utiliser que des photos dont on a le droit (prises par le groupe, banque d'images libre avec licence compatible, ou autorisation écrite) ;
  - **mineurs : autorisation des parents** pour tout visage identifiable (droit à l'image) ; sinon prendre de dos, en plan large ou flouter ;
  - mentionner l'auteur et la licence si exigé (« Photo : prénom nom, CC BY »).
- Texte alternatif pour les versions numériques : une phrase qui décrit l'essentiel.

## Texte sur image

Un texte posé sur une photo doit toujours atteindre **4,5:1** de contraste (3:1 pour les très gros titres). Trois solutions, de la plus sobre à la plus lourde :

1. **Zone calme** : poser le texte dans une partie de l'image naturellement unie (ciel sombre, mur) en vérifiant le contraste.
2. **Voile** : un rectangle de couleur au-dessus de l'image, **bleu nuit #000761 à 55 à 70 % d'opacité** (ou noir à 50 %) sous le texte clair ; un voile dégradé de bas en haut sur le tiers inférieur est plus discret.
3. **Bandeau plein** : un aplat bleu nuit de 18 à 25 mm de haut (selon le format), avec texte #fafafc ; c'est la solution la plus robuste et la plus fidèle à l'identité.

À éviter : contour de lettres, ombre portée dure, texte sur zone contrastée en détail (feuillage, foule), texte en couleur sur photo colorée. Garder les visages libres de texte.

## QR code

- **Taille minimale** : 20 × 20 mm pour une lecture à 20 cm ; la règle de lecture est **distance ÷ 10** : lu à 1 m, il faut 10 cm. Tailles conseillées : A6 et DL : 22 à 25 mm ; A5 : 25 à 30 mm ; A4 : 35 à 40 mm ; A3 : 60 à 80 mm.
- **Zone de silence** : 4 modules de blanc (environ 4 à 5 mm) autour ; aucun texte, bordure ni image dans cette marge. Un QR sur fond foncé exige un QR clair inversé testé, ou mieux, un cadre blanc.
- **Contraste** : motif foncé sur fond clair (bleu nuit sur blanc convient ; or sur blanc non). Ne pas arrondir ni déformer.
- **Contenu** : une **URL courte** (moins de 60 caractères, donc moins de modules) ; vérifier qu'elle est en https ; rediriger depuis un lien stable pour pouvoir changer la destination.
- **Niveau de correction** : M (15 %) par défaut ; éviter un logo au milieu (il oblige au niveau H, et le code devient plus dense).
- **Test obligatoire** : scanner l'épreuve imprimée à taille réelle, avec deux téléphones différents et à la distance de lecture, avant d'imprimer le tirage.
- Toujours **donner l'adresse en clair** près du QR (« Inscriptions : fsggb.fr/camp ») pour ceux qui ne scannent pas ; ne jamais cacher une information indispensable derrière le QR seul.
- Dans ScoutHub, les applications Word, PowerPoint et Illustrator n'ont **pas de commande native de génération de QR code** : produire le code ailleurs (service de génération de la fédération, en vectoriel SVG ou PNG 1000 px) puis l'insérer comme image.

## Mentions obligatoires et usuelles

À vérifier selon le support (l'organisateur reste responsable) :
- **Organisateur** : nom de l'association ou du groupe, coordonnées (courriel, téléphone, adresse) ;
- **Dates et horaires précis**, lieu avec adresse ou point de rendez-vous, accès ;
- **Prix** et modalités de paiement, date limite d'inscription ;
- **Public** : âges, branche ;
- **Mention d'impression** : « Ne pas jeter sur la voie publique » (usage courant sur les imprimés de diffusion) et nom de l'imprimeur si le tirage est professionnel ;
- **Droit à l'image et crédits** si des photos sont utilisées ;
- Pour une collecte ou un don : mention éventuelle de reçu fiscal selon le statut de l'association.
- Pour une affiche de messe ou de célébration : nom de la paroisse, lieu, heure, célébrant si pertinent.

## Ton

- **Sobre, chaleureux, direct** : « Rejoins-nous », « Nous t'attendons », mais jamais de slogans criards ni d'humour douteux.
- Tutoiement ou vouvoiement cohérent avec le public (jeunes : tu ; parents et paroisse : vous).
- Verbes d'action, phrases de moins de 12 mots, pas de jargon interne ; voir **comp-redaction-claire**.
- Typographie française : espaces insécables avant « : ; ! ? », guillemets « », « 8 h 30 », dates « le 12 juillet 2027 » (voir **comp-typographie-francaise**).
- Éviter : points d'exclamation multiples, capitales sur tout le texte, trois polices, effets de texte.

## Exports

| Destination | Format | Résolution | Couleur | Fond perdu | Remarques |
|---|---|---|---|---|---|
| Imprimerie | PDF/X (X-1a ou X-4) | 300 ppp (images) | CMJN | 3 mm | traits de coupe, polices incorporées |
| Imprimante de bureau | PDF | 150 à 300 ppp | RVB acceptable | aucun | marge blanche 8 mm |
| Écran, courriel | PDF compressé ou PNG | 96 à 150 ppp | RVB | aucun | poids < 2 Mo |
| Réseaux | PNG ou JPEG | 1080 px de large | RVB | aucun | texte minimum 28 px |
| Impression photo (carte) | PDF ou TIFF | 300 ppp | CMJN ou RVB selon l'imprimeur | 3 mm | demander le profil |

Procédure pour l'imprimerie :
1. Document au **format fini** + **fond perdu 3 mm** de chaque côté qui touche le bord ;
2. images et logos en **300 ppp** (vectoriel pour les logos) ;
3. textes en **polices incorporées** ou vectorisées ;
4. **noir de texte en K 100** (voir **comp-couleur-et-identite-fsggb**) ;
5. encrage total ≤ 240 à 300 % ;
6. **traits de coupe** à 3 mm (traits de 0,25 pt, longueur 5 mm) ;
7. export **PDF/X**, une page par face (recto puis verso) ;
8. relire le PDF exporté à 100 % et vérifier la zone de sécurité de 5 mm.

Sur imprimante de bureau : pas de fond perdu ; garder 8 mm de cadre blanc ; privilégier RVB.

## Formats numériques et déclinaisons

Une même campagne se décline : affiche A3 (impression) → flyer A6 (distribution) → image 4:5 (réseaux) → story 9:16 → bannière d'en-tête de courriel (1200 × 400 px) → diapositive 16:9 (projection en messe ou en réunion).
- **Conserver** : titre, image, couleurs, mêmes mots pour la date et le lieu.
- **Adapter** : la quantité de texte (moins sur les petits formats), la taille du QR, la position du bloc date.
- Partir du **format maître** (A3) et réduire : jamais l'inverse (une A6 agrandie en A3 se pixellise).
- Garder un **fichier source unique** (Illustrator ou PowerPoint) avec une page par format.
- Nommage : `2027-07_camp-ete_A3_v2.pdf` (aaaa-mm, sujet, format, version).

## Erreurs fréquentes

| Erreur | Correction |
|---|---|
| Trop de texte, de polices, de couleurs | un message, deux polices, trois couleurs |
| Date et lieu en petit, noyés | bloc quand/où/quoi à 50 % de la taille du titre |
| Titre en capitales sur 3 lignes | bas de casse, 2 lignes maximum |
| Texte sur photo illisible | voile à 60 %, ou bandeau |
| Image pixellisée | 300 ppp, ne pas agrandir |
| Pas de fond perdu, texte au ras de la coupe | fond perdu 3 mm, sécurité 5 mm |
| QR trop petit, sans marge, non testé | taille et marge selon le tableau, test réel |
| Pas d'appel à action ou de contact | ajouter « Inscriptions », adresse en clair |
| Or utilisé en couleur de texte | texte bleu nuit ; or en filet seulement |
| Étirement ou déformation du logo | version officielle, zone de protection |
| Aucune date limite ni prix | toutes les informations pratiques essentielles |
| Fautes de frappe, dates fausses | double relecture par une autre personne |
| Image non autorisée (droit à l'image) | autorisation écrite, photo libre de droits |

## Six maquettes décrites zone par zone

Les dimensions sont en mm, depuis le coin supérieur gauche du format **fini** ; fond perdu en plus. Polices : titre Georgia (ou Source Serif 4) gras, texte Inter. Couleurs : bleu nuit #000761, or #c6a24e (accents), crème #f7f0dc, blanc cassé #fafafc, texte #12142b.

### 1. Affiche de camp (A3 portrait, 297 × 420 mm)

| Zone | Position (x, y, l × h) | Contenu et style |
|---|---|---|
| Fond | 0, 0, 297 × 420 | image du camp en plein format (300 ppp : 3508 × 4961 px) |
| Voile | 0, 250, 297 × 170 | bleu nuit #000761, dégradé de 0 % à 85 % du haut vers le bas |
| Logo | 15, 15, 40 × 20 | version blanche, zone de protection 8 mm |
| Accroche | 15, 215, 267 × 60 | « Camp d'été 2027 », Georgia gras 80 pt, crème #f7f0dc, interligne 100 % |
| Filet | 15, 281, 60 × 0 | or #c6a24e, 3 pt |
| Quand / où / quoi | 15, 288, 180 × 50 | « Du 12 au 24 juillet · Gorges du Verdon » en 32 pt gras ; « Pour les 11-14 ans » en 24 pt (Inter) ; texte #fafafc |
| Appel à action | 15, 348, 180 × 25 | « Inscriptions avant le 15 mars » en 28 pt or clair #e6c97a |
| QR | 220, 335, 62 × 62 (avec marge blanche de 5 mm incluse) | QR bleu nuit sur blanc ; légende « fsggb.fr/camp » en 14 pt dessous |
| Mentions | 15, 392, 267 × 14 | 9 pt : organisateur, contact, « Ne pas jeter sur la voie publique » |

Marges 15 mm, zone de sécurité 5 mm, fond perdu 3 mm. Lecture à 2 à 3 m : titre à 80 pt (au-dessus des 56 à 85 pt du tableau des distances).

### 2. Invitation de messe d'action de grâce (A5 portrait, 148 × 210 mm, sur carton 250 g)

Composition centrée, très aérée, sans photo (ou avec un petit motif graphique sobre : croix, épi, étoile).

| Zone | Position (x, y, l × h) | Contenu et style |
|---|---|---|
| Fond | 0, 0, 148 × 210 | crème #f7f0dc ou blanc ; filet de cadre or #c6a24e de 0,75 pt à 8 mm du bord |
| Motif | 59, 22, 30 × 30 | croix ou emblème en bleu nuit, vectoriel |
| Surtitre | 20, 62, 108 × 8 | « Messe d'action de grâce » en petites capitales 11 pt, espacées de + 8 %, or bronze #7a5f1f |
| Titre | 15, 74, 118 × 34 | « Cinquante ans du groupe Saint-Louis », Georgia 28 pt, centré, bleu nuit |
| Filet | 54, 114, 40 × 0 | or, 1,5 pt |
| Quand / où | 20, 124, 108 × 36 | « Dimanche 21 novembre 2027 à 10 h 30 » (14 pt gras) ; « Église Saint-Louis, 12 rue de l'Église » (12 pt) ; « Verre de l'amitié à l'issue de la messe » (11 pt) |
| Appel | 20, 168, 108 × 14 | « Merci de confirmer votre présence avant le 7 novembre » 11 pt |
| Contact | 20, 186, 108 × 10 | adresse et courriel en 9 pt gris #555a72 |

Marges 15 à 20 mm. Texte entièrement centré (exception justifiée), 3 niveaux seulement. Typographie : aucune capitale pour le corps du texte ; espaces insécables avant les deux-points. Le ton est respectueux, le style très sobre : pas de couleur liturgique vive, filet fin or. Voir aussi les règles de couleurs liturgiques dans **comp-couleur-et-identite-fsggb**.

### 3. Flyer de recrutement (A5 portrait ou A6 ; ici A5 recto verso, 148 × 210 mm)

Recto :
| Zone | Position | Contenu |
|---|---|---|
| Image | 0, 0, 148 × 105 | photo de jeunes en action (plein bord, fond perdu 3 mm) |
| Bandeau | 0, 90, 148 × 30 | bleu nuit, titre blanc cassé « Et si tu essayais ? » en Georgia 30 pt |
| Sous-titre | 12, 128, 124 × 14 | « Scouts et Guides Godefroy de Bouillon, 8-17 ans » 14 pt gras bleu nuit |
| Trois bénéfices | 12, 148, 124 × 35 | trois lignes à puces or : « Camps et week-ends en pleine nature », « Amitié et service », « Une aventure qui fait grandir » ; 11 pt |
| Appel | 12, 186, 80 × 14 | « Séance d'essai le 14 septembre » 12 pt gras, bouton ou filet or |
| QR | 105, 170, 28 × 28 | « fsggb.fr/rejoindre » en 9 pt dessous |

Verso : accueil des parents (vouvoiement) : 3 courts paragraphes de 9,5 pt sur une colonne de 110 mm, calendrier de l'année en tableau, contact, mentions. Le verso est plus dense, le recto n'a qu'un message.

### 4. Carte de vœux (carré 148 × 148 mm plié, ou A6 105 × 148 mm)

Format carré : face avant 148 × 148 mm, intérieur en deux volets si pli (296 × 148 mm déplié).
| Zone | Position (sur la face avant) | Contenu et style |
|---|---|---|
| Fond | plein format | bleu nuit uni ; ou photo avec voile à 60 % |
| Motif | 59, 32, 30 × 30 | étoile or ou croix, vectoriel |
| Texte | 15, 78, 118 × 30 | « Joyeux Noël » Georgia italique 30 pt, crème #f7f0dc, centré |
| Signature | 15, 118, 118 × 10 | « Le groupe Saint-Louis » 11 pt, or clair #e6c97a |
| Filet | cadre à 8 mm | or, 0,75 pt |

Intérieur : un message en 11 à 12 pt centré, une marge de 20 mm, la signature manuscrite dans la zone (garder un espace blanc de 30 mm de haut pour l'écriture à la main). Papier 250 à 300 g ; fond perdu 3 mm obligatoire pour l'aplat bleu ; l'intérieur reste blanc pour l'écriture. Texte blanc sur bleu nuit = 16,8:1 de contraste.

### 5. Programme d'événement (A4 paysage plié en trois, 3 volets de 99 mm)

| Volet | Contenu | Largeur de colonne |
|---|---|---|
| Couverture (droite, recto) | logo, titre, date, image | 99 mm, marges 10 mm |
| Quatrième de couverture (centre, recto) | contact, plan d'accès simplifié, mentions | 99 mm |
| Volet rabattu (gauche, recto) | message d'accueil | 96 mm |
| Intérieur gauche | matinée : horaires et activités | 76 mm utiles |
| Intérieur centre | après-midi | 76 mm utiles |
| Intérieur droite | soirée, célébration, infos pratiques | 76 mm utiles |

Chaque volet intérieur : titre de section en bandeau 9 mm (bleu givre #eef0fb, filet or à gauche), puis lignes horaire + activité (horaire à 18 mm en gras « 14 h 30 », texte sur 58 mm). Texte 9,5 pt sur 13 pt ; espace de 5 mm entre deux activités ; gouttière de pli de 12 mm (6 mm de chaque côté) sans texte important. Le temps de prière ou la messe se détache par un filet or. Voir aussi le gabarit « plaquette trois volets » de **comp-mise-en-page-principes**.

### 6. Badge et étiquette de nom (85 × 55 mm, ou 90 × 55 mm sous pochette)

| Zone | Position (x, y, l × h) | Contenu et style |
|---|---|---|
| Fond | 0, 0, 85 × 55 | blanc cassé ; bande de couleur de branche à gauche : 0, 0, 8 × 55 |
| Logo | 14, 5, 22 × 12 | logo de la fédération |
| Prénom | 14, 20, 66 × 14 | Georgia gras 24 pt, bleu nuit, une ligne |
| Nom et unité | 14, 36, 66 × 8 | Inter 11 pt, #12142b ; « Groupe Saint-Louis · Éclaireurs » |
| Événement | 14, 46, 66 × 6 | 8,5 pt, gris #555a72 |

Marge de 5 mm tout autour ; le prénom est lisible à 1,5 m (24 pt). Sur planche A4 : 2 colonnes × 5 lignes d'étiquettes 85 × 55 mm avec marges de 15 mm en haut et en bas et 20 mm sur les côtés. Papier adhésif ou carte 220 g plastifiée ; couleur de branche toujours doublée du nom de l'unité écrit.

## Avec les outils de ScoutHub

### PowerPoint : la diapositive comme canevas d'affiche

PowerPoint permet une mise en page libre aux dimensions exactes. Les unités sont en points (1 mm = 2,835 pt).

| Besoin | Commande et paramètres (vérifiés) |
|---|---|
| Format de la page | `design.slideSize` `{"w":841.9,"h":1190.6,"orientation":"portrait","scale":"none"}` (A3 ; A4 : 595.3 × 841.9 ; A5 : 419.5 × 595.3 ; A6 : 297.6 × 419.5) |
| Fond | `design.background` `{"color":"#FAFAFC","all":true}` |
| Couleurs et polices du thème | `design.colors` `{"colors":{"dk1":"#12142B","lt1":"#FAFAFC","dk2":"#000761","lt2":"#F7F0DC","accent1":"#000761","accent2":"#C6A24E",…}}` ; `design.fonts` `{"major":"Georgia","minor":"Inter"}` |
| Nouvelle diapo vierge | `slide.new` `{"layout":"blank"}` |
| Rectangle ou bandeau | `shape.insert` `{"preset":"rect","rect":[x,y,w,h],"text":"…"}` |
| Zone de texte | `insert.textBox` `{"rect":[x,y,w,h],"text":"…"}` |
| Image | `insert.picture` `{"path":"…","rect":[x,y,w,h]}` ; recadrage `picture.crop` |
| Couleur et contour | `shape.fill` `{"color":"#000761"}` ; `shape.line` `{"none":true}` ou `{"color":"#C6A24E","width":1.5}` |
| Texte | `format.font` `{"family":"Georgia"}`, `format.size` `{"size":80}`, `format.color` `{"color":"#FAFAFC"}`, `format.bold`, `format.align` `{"align":"center"}`, `format.lineSpacing` `{"lines":1.0}`, `format.margins` |
| Alignement et répartition | `arrange.align` `{"edge":"left","to":"slide"}` ; `arrange.distribute` ; position exacte `shape.setBounds` `{"x":…,"y":…,"w":…,"h":…,"ids":[…]}` |
| Repères | `guide.add` `{"vertical":true,"pos":42.5}` (marge de 15 mm) |
| Lien | `insert.hyperlink` `{"url":"…"}` |
| Texte alternatif | `shape.altText` `{"text":"…"}` |
| Export | `file.export` `{"path":"affiche.pdf","format":"pdf"}` ; `{"format":"png","scale":…}` ; paramètres `slide`, `paper`, `orientation` |

Séquence : affiche A3 de camp (coordonnées issues de la maquette 1, converties en points : 15 mm = 42,5 pt ; 215 mm = 609,4 pt).
```
api_lot commandes:
[
 {"commande":"design.slideSize","parametres":{"w":841.9,"h":1190.6,"orientation":"portrait","scale":"none"}},
 {"commande":"design.background","parametres":{"color":"#000761","all":true}},
 {"commande":"slide.new","parametres":{"layout":"blank"}},
 {"commande":"insert.picture","parametres":{"path":"camp.jpg","rect":[0,0,841.9,850]}},
 {"commande":"insert.textBox","parametres":{"rect":[42.5,609.4,756.9,170],"text":"Camp d'été 2027"}},
 {"commande":"format.font","parametres":{"family":"Georgia"}},
 {"commande":"format.size","parametres":{"size":80}},
 {"commande":"format.color","parametres":{"color":"#FAFAFC"}},
 {"commande":"format.bold","parametres":{"on":true}}
]
```
Les commandes `format.*` portent sur le texte en cours d'édition : ouvrir la zone avec `text.edit` (`{"id":…}`) puis `text.selectAll` ; lire les identifiants avec `slide.inspect`. Pour une diapositive 16:9 (projection, bannière) : `design.slideSize` `{"preset":"widescreen"}`. Résultat à vérifier par `api_requete` `ui.render` ou `file.export` en PNG. Pas de fond perdu ni de traits de coupe natifs dans PowerPoint : exporter en PDF sans marge de coupe et utiliser Illustrator si l'imprimeur exige un PDF/X avec fonds perdus. Voir **comp-powerpoint-presentation-elegante**.

### Illustrator (VectorCraft) : le meilleur outil pour l'imprimerie

| Besoin | Commande et paramètres (vérifiés) |
|---|---|
| Nouveau document | `file.new` `{"name":"Affiche camp","width":"297 mm","height":"420 mm"}` (la largeur accepte une valeur en points ou « 210 mm ») |
| Fond perdu | `document.setup` `{"units":"Millimeters","bleed":8.5}` (le fond perdu est en points : 3 mm ≈ 8,5 pt, tous côtés) |
| Mode couleur | `file.documentColorMode` `{"mode":"cmyk","convert":true}` |
| Plans de travail | `artboard.new` `{"x":…,"y":…,"width":…,"height":…,"name":"A6 recto"}` ; `artboard.setProps` ; `artboard.duplicate` |
| Rectangle (aplat, bandeau) | `shape.rectangle` `{"x":0,"y":0,"width":841.9,"height":120,"radius":0}` |
| Ellipse, ligne | `shape.ellipse` `{"x":…,"y":…,"width":…,"height":…}` ; `shape.line` `{"x1":…,"y1":…,"x2":…,"y2":…}` |
| Texte | `text.create` `{"x":42.5,"y":700,"text":"Camp d'été 2027","size":80,"font":"Georgia","color":"#FAFAFC"}` ; texte dans un cadre : `text.createInPath` `{"path":id,"mode":"area","text":"…"}` |
| Couleur | `paint.setFill` `{"color":"#000761"}` (ou `{"c":100,"m":93,"y":0,"k":62}`) ; `paint.setStroke` ; `swatch.new` `{"name":"Bleu nuit","color":"#000761"}` |
| Image placée | `file.place` `{"path":"camp.jpg","link":true}` ; options `links.placementOptions` |
| Traits de coupe | `object.createTrimMarks` `{"style":"roman","offset":9,"length":18}` (le paramètre `bleed` existe ; voir `api_commandes`) |
| Export imprimerie | `document.exportPdf` `{"path":"affiche.pdf","standard":"pdfX1a"}` (PDF/X-1a : couleurs CMJN, gris et tons directs) ; `file.export.pdf` ouvre la boîte |
| Export image | `document.export` `{"path":"affiche.png","format":"png"}` ou `file.exportForScreens` |

Séquence : couverture A6 recto avec fond perdu.
```
[
 {"commande":"file.new","parametres":{"name":"Flyer A6","width":"105 mm","height":"148 mm"}},
 {"commande":"document.setup","parametres":{"bleed":8.5}},
 {"commande":"shape.rectangle","parametres":{"x":-8.5,"y":-8.5,"width":314.6,"height":436.5}},
 {"commande":"paint.setFill","parametres":{"color":"#000761"}},
 {"commande":"text.create","parametres":{"x":21,"y":200,"text":"Rejoins-nous","size":30,"font":"Georgia","color":"#FAFAFC"}},
 {"commande":"object.createTrimMarks","parametres":{}},
 {"commande":"document.exportPdf","parametres":{"path":"flyer-a6.pdf","standard":"pdfX1a"}}
]
```
Les coordonnées sont celles du document (origine et unités à contrôler avec `document.info` ou un `ui.render` sur le premier test). A6 = 297,6 × 419,5 pt : le rectangle de fond dépasse de 8,5 pt de chaque côté ; son origine dépend du repère du plan de travail (vérifier). Voir **comp-vectoriel-et-pao**.

### Word : dépliants et invitations simples

| Besoin | Commande et paramètres (vérifiés) |
|---|---|
| Format A5 ou A6 | `layout.size` `{"name":"A5"}` ou `{"width":297.6,"height":419.5}` |
| Marges étroites | `layout.margins` `{"top":28.3,"bottom":28.3,"left":28.3,"right":28.3}` (10 mm) |
| Orientation paysage (dépliant trois volets) | `layout.orientation` `{"value":"landscape"}` puis `layout.columns` `{"count":3,"space":34,"separator":false}` (12 mm de gouttière) ; `layout.break` `{"kind":"column"}` pour passer au volet suivant |
| Page de couleur | `design.pageColor` `{"color":"000761"}` (à réserver à l'écran et à la couverture) |
| Zone de texte | `insert.textBox` `{"text":"…","width":…,"height":…}` ; fond `shape.fill` `{"color":"F7F0DC"}` |
| Image | `insert.picture` `{"path":"…","width":…,"alt":"…"}` ; `arrange.wrap` `{"wrap":"behindText"}` pour l'utiliser en fond ; `arrange.position` `{"preset":"topLeft"}` |
| Forme (bandeau) | `insert.shape` `{"kind":"rectangle","width":595,"height":80,"fill":"000761"}` |
| Texte | `format.font`, `format.size`, `format.color` `{"color":"FAFAFC"}`, `para.align` `{"value":"center"}` |
| Lien | `insert.link` `{"url":"…"}` |
| Export | `file.exportPdf` `{"path":"invitation.pdf"}` |

Word ne gère ni les fonds perdus ni les traits de coupe ; l'impression en imprimante de bureau (invitation A5, cartes, programme du camp) est son terrain, avec 8 mm de marge blanche. Pour une carte A6, vérifier l'orientation réelle avec `document.layout` avant l'export.

## Liste de contrôle avant de livrer

1. Le support tient en une phrase et un seul message principal.
2. La hiérarchie est claire : accroche, quand/où/quoi, appel à action, mentions (test de flou à 10 %).
3. Le titre respecte la taille de lecture (corps ≈ distance en mètres × 28 pt).
4. Les informations clés (date, lieu, public) forment un seul bloc, avec le jour de la semaine.
5. Une seule image dominante, à 300 ppp au format final, légalement utilisable, autorisations des parents obtenues.
6. Texte sur image : contraste ≥ 4,5:1 via voile (55 à 70 %) ou bandeau.
7. QR code : taille minimale respectée (20 mm ; distance ÷ 10), 4 modules de marge, testé sur l'épreuve imprimée, adresse en clair à côté.
8. Mentions complètes : organisateur, contact, prix, date limite, mention de non-diffusion sur la voie publique si requise.
9. Couleurs : bleu nuit, or en accent seulement, contrastes validés ; lisible en noir et blanc.
10. Au plus deux polices ; aucun texte sous 9 pt.
11. Typographie française : espaces insécables, guillemets « », « 8 h 30 », majuscules accentuées.
12. Fond perdu 3 mm, zone de sécurité 5 mm, traits de coupe si impression professionnelle.
13. Export au bon profil : PDF/X en CMJN pour l'imprimerie ; RVB pour l'écran ; polices incorporées.
14. Noir de texte en K 100, encrage total limité.
15. Aucune faute, dates et jours vérifiés (le 12 juillet 2027 est-il bien un lundi ?), noms propres exacts, relecture par une autre personne.
16. Déclinaisons cohérentes (A3, A6, réseaux, projection) à partir d'un fichier source unique.
17. Épreuve imprimée à taille réelle vérifiée à la distance de lecture prévue.
18. Fichier nommé clairement (date, sujet, format, version).

## Questions auxquelles la fiche répond

- Quel format choisir pour une affiche, un flyer, une invitation, une carte, une publication pour les réseaux ?
- Comment organiser l'information pour qu'elle se lise en trois secondes ?
- Quelle taille de titre selon la distance de lecture ?
- Comment choisir, cadrer et utiliser légalement une image (droit à l'image des mineurs) ?
- Comment poser un texte lisible sur une photo ?
- Quelle taille, quelle marge et quel test pour un QR code ?
- Quelles mentions mettre sur une affiche ou un flyer ?
- Comment exporter pour l'imprimeur (PDF/X, 300 ppp, 3 mm de fond perdu, traits de coupe) ou pour l'écran ?
- Comment décliner une affiche en flyer, en image pour les réseaux et en diapositive ?
- À quoi ressemblent, zone par zone, une affiche de camp, une invitation de messe, un flyer de recrutement, une carte de vœux, un programme et un badge ?
- Quelles commandes natives de PowerPoint, Illustrator et Word servent à fabriquer ces supports ?
