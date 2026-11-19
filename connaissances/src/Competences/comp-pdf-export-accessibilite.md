---
id: comp-pdf-export-accessibilite
titre: PDF, export et accessibilité - formats, poids, métadonnées, protection, RGPD et nommage
theme: Compétences
type: synthese
sources:
  - titre: Pratique professionnelle de la production de documents PDF accessibles et de l'archivage numérique (PDF/A, PDF/UA)
  - titre: Référentiels généraux d'accessibilité des contenus web (WCAG 2.1, niveau AA) et règlement général sur la protection des données (RGPD), principes généraux
mots_cles: PDF, export, DOCX, PDF/A, PDF/X, PNG, SVG, Word, Excel, PowerPoint, Acrobat, polices incorporées, signets, liens, étiquettes, langue, poids du fichier, compression, métadonnées, table des matières cliquable, formulaire, annotation, caviardage, signature, mot de passe, protection, accessibilité, ordre de lecture, texte alternatif, contraste, lecteur d'écran, nommage, versionnage, archivage, RGPD, mineurs, conservation, file.exportPdf, file.saveAs, file.export
liens: app-word, app-excel, app-powerpoint, app-pdf, comp-word-document-professionnel, comp-excel-tableaux-elegants, comp-powerpoint-presentation-elegante, comp-vectoriel-et-pao, comp-photo-retouche-et-export, comp-redaction-claire, comp-polices-et-hierarchie, comp-couleur-et-identite-fsggb, suite-craft-mcp
resume: Comment choisir le bon format de livraison, produire un PDF propre, léger et accessible depuis Word, Excel ou PowerPoint, renseigner ses métadonnées, le protéger, le nommer et l'archiver, et respecter le RGPD pour des documents contenant des données de scouts mineurs. Donne les commandes natives d'export vérifiées pour Word, Excel et PowerPoint.
---

## L'idée directrice

Le PDF est le format de **livraison** : il fige la mise en page, s'ouvre partout et se lit de la même façon sur tous les appareils. Mais un PDF « imprimé depuis le traitement de texte » est souvent lourd, sans structure, illisible au lecteur d'écran et rempli de données qu'on n'a pas voulu partager. Quatre exigences :

1. **Choisir le format selon l'usage** : modifier, lire, imprimer, archiver, afficher.
2. **Produire un PDF structuré** (titres, signets, liens, langue, texte alternatif) et **léger**.
3. **Respecter les personnes** : accessibilité pour tous, et protection des données des jeunes et de leurs familles.
4. **Nommer et versionner** pour qu'on retrouve toujours la bonne version.

Pour la construction des documents eux-mêmes : comp-word-document-professionnel, comp-excel-tableaux-elegants, comp-powerpoint-presentation-elegante. Pour la préparation d'un PDF d'imprimeur (fond perdu, PDF/X) : comp-vectoriel-et-pao. Pour les images : comp-photo-retouche-et-export.

## 1. Choisir le bon format

| Besoin | Format | Pourquoi | À éviter |
|---|---|---|---|
| Document que le destinataire doit modifier | **DOCX** (Word), XLSX, PPTX | Éditable | Un PDF « à compléter » sans formulaire |
| Document à lire, imprimer, diffuser | **PDF** | Mise en page figée, universel | Envoyer le DOCX : la mise en page peut bouger |
| Archivage de long terme | **PDF/A** (A-2b ou A-2u) | Polices et couleurs incorporées, pas de contenu dynamique ni de chiffrement | PDF ordinaire |
| Envoi à un imprimeur | **PDF/X** (X-1a ou X-4) | Couleurs, fond perdu, polices maîtrisés (voir comp-vectoriel-et-pao) | PDF écran |
| Formulaire à remplir en ligne | **PDF avec champs** | Saisie, validation | Tableau Word imprimé |
| Image fixe (affiche, aperçu, réseaux) | **PNG** (aplats, texte) ou **JPEG** (photos) | Léger, universel | PDF pour un visuel de réseau |
| Logo, schéma, plan à redimensionner | **SVG** (vectoriel) | Net à toutes tailles | PNG petit agrandi |
| Données à réutiliser | **CSV** (tableur) | Simple, portable | Capture d'écran |
| Transcription / sous-titres | **TXT, SRT, VTT** | Standard | — |

Règle : on **conserve toujours le fichier source** (DOCX, XLSX, PPTX, projet) à côté du PDF livré.

## 2. Exporter un PDF depuis Word, PowerPoint et Excel

### Word : procédure

1. **Préparer le document** : styles de titres (Titre 1, 2, 3) utilisés partout, pas de mise en forme manuelle ; texte alternatif sur les images et les formes ; table des matières cliquable ; langue du document réglée sur le français (fr-FR) ; propriétés remplies.
2. **Vérifier** : aucune erreur d'orthographe ; aucun changement suivi ni commentaire (ou les marquer volontairement) ; pas de texte masqué ; sauts de page propres.
3. **Exporter** : « Fichier › Exporter › PDF » avec options « Standard (publication en ligne et impression) » ou « Taille minimale » pour l'envoi par courriel ; cocher **« Créer des signets à l'aide des titres »**, **« Propriétés du document »**, **« Balises de structure du document pour l'accessibilité »**, **« Conformité PDF/A »** pour l'archivage.
4. **Contrôler** le PDF (voir section 8).

Les commandes natives de Word : voir la section « Avec les outils de ScoutHub ».

### Réglages d'export recommandés

| Réglage | Valeur | Raison |
|---|---|---|
| Qualité | Standard (impression et diffusion) ; Minimale pour un courriel léger | Équilibre poids / lisibilité |
| Résolution des images | 150 ppp pour l'écran, 220 à 300 ppp pour l'impression | Voir comp-photo-retouche-et-export |
| Polices | **Incorporées** (sous-ensemble) | Même rendu partout |
| Étiquettes (structure) | Activées | Lecteur d'écran |
| Signets | Un par titre de niveau 1 à 3 | Navigation |
| Liens | Conservés et cliquables | Confort |
| Langue | Français (France) | Prononciation du lecteur d'écran |
| Mode d'ouverture | Page de première de couverture, affichage « Signets et page » | Accueil clair |
| Titre affiché | Titre du document (pas le nom du fichier) | Lisibilité |

### PowerPoint

Exporter en PDF avec la mise en page **« Diapositives »** (une par page) pour la diffusion, **« Documents »** (2, 3, 4 ou 6 par page) ou **« Pages de notes »** pour l'impression ; papier A4 ; orientation paysage pour des diapositives ; **tailles d'image 150 ppp**. Vérifier avant : titres uniques sur chaque diapositive (ils servent de signets), ordre de lecture des objets, texte alternatif, langue, contrastes (voir comp-powerpoint-presentation-elegante).

### Excel

Exporter le **classeur ou la feuille** en PDF après avoir réglé la **mise en page** : zone d'impression, orientation (paysage pour les tableaux larges), **ajuster à 1 page de large**, **en-têtes de ligne répétés** (« Lignes à répéter en haut »), marges de 15 à 20 mm, pied de page avec numéro de page. Cacher les feuilles et colonnes de calcul. Un tableau coupé sur trois pages sans en-tête est la faute la plus fréquente (voir comp-excel-tableaux-elegants).

## 3. Poids du fichier

### Cibles

| Contexte | Poids cible | Limite |
|---|---|---|
| Courriel (pièce jointe) | **< 2 à 5 Mo** | 10 Mo (certaines messageries refusent au-delà de 10 à 25 Mo) |
| Site, ScoutHub | < 5 Mo | 10 Mo |
| Document texte sans image | 100 à 500 Ko | — |
| Document avec quelques photos | 1 à 4 Mo | — |
| Brochure illustrée à diffuser | 4 à 8 Mo | — |
| Document pour l'impression | 10 à 50 Mo | selon l'imprimeur |

### Réduire le poids sans abîmer

1. **Redimensionner les images à la taille d'usage** avant de les insérer : 1 600 px de bord long pour un plein format, 1 000 px pour un demi-format (voir comp-photo-retouche-et-export). C'est le levier n° 1.
2. **Comprimer** les images à l'insertion ou à l'export : JPEG qualité 75–85, résolution cible 150 ppp, supprimer les zones rognées.
3. **Polices** : ne pas incorporer plus que nécessaire (sous-ensemble) ; limiter à deux familles.
4. **Supprimer** les éléments inutiles : feuilles cachées, versions anciennes, images en double, métadonnées lourdes.
5. **Optimiser** le PDF (outil d'optimisation de l'éditeur PDF) en dernier recours ; vérifier ensuite l'aspect des images.
6. **Pour un courriel**, si le fichier dépasse 5 Mo : le déposer dans un espace partagé et envoyer le **lien**.

## 4. Métadonnées

Les métadonnées sont les informations cachées dans le fichier (titre, auteur, sujet, mots-clés, dates, logiciel).

| Champ | Valeur recommandée | Exemple |
|---|---|---|
| Titre | Titre lisible (pas le nom du fichier) | Camp d'été 2026 - Lettre aux parents |
| Auteur | Nom de la structure, pas d'une personne privée | FSGGB - Troupe Saint-Jean |
| Sujet | Résumé en une ligne | Informations pratiques et liste de matériel |
| Mots-clés | 4 à 8 mots séparés par des virgules | camp, scouts, 2026, matériel, inscription |
| Langue | fr-FR | — |
| Société | Fédération | FSGGB |

À **supprimer** avant diffusion externe : nom d'utilisateur du poste, chemin de fichier, commentaires, anciennes versions, noms d'auteurs de modifications, texte masqué. Un PDF peut révéler le nom de la personne qui l'a créé et le chemin de son disque.

## 5. Signets, table des matières, liens

- **Table des matières cliquable** : générée à partir des styles de titres (pas tapée à la main) ; 2 ou 3 niveaux ; numéros de page alignés à droite avec points de conduite ; **liens activés** pour sauter à la section.
- **Signets du PDF** : un signet par titre ; hiérarchie respectée ; 3 niveaux maximum ; libellés courts.
- **Liens** :
  - **Libellés explicites** : « Télécharger la fiche d'inscription (PDF, 240 Ko) », jamais « cliquez ici ».
  - Adresse complète vérifiée ; ouvrir tous les liens avant diffusion.
  - Ne pas laisser d'URL longue en clair : raccourcir ou lier un mot.
  - Les liens se **distinguent** par la couleur et le soulignement (contraste ≥ 4,5:1 avec le fond).
- **Renvois internes** : « voir page 4 » mise à jour par renvoi automatique.
- **Boutons « Retour au sommaire »** facultatifs dans un document de plus de 20 pages.

## 6. Formulaires, annotations, caviardage, signature, protection

### Formulaires

- Utiliser des **champs de formulaire** (texte, case à cocher, liste déroulante) avec **info-bulle** (étiquette accessible) pour chaque champ ; ordre de tabulation logique ; **taille de police minimale 10 pt**, champs de 6 mm de hauteur ; zone de signature clairement identifiée.
- Un formulaire d'inscription ne demande **que les données nécessaires** (voir section 11).
- Garder le **DOCX source** : modifiable plus simplement que le PDF.
- Prévoir une **version imprimable** pour les personnes qui n'ont pas d'ordinateur.

### Annotations (commentaires)

Surligner, commenter, tamponner pendant la relecture ; **aplatir ou supprimer** les annotations avant diffusion externe. Un commentaire oublié (« à vérifier avec les parents ») est une faute classique.

### Caviardage (masquage d'informations)

Masquer une information confidentielle (nom, numéro de téléphone, adresse, numéro de sécurité sociale, données de santé) :

- **Vrai caviardage** : outil dédié qui **supprime** le texte et l'image sous la zone, puis **nettoie** les métadonnées et le texte masqué.
- **Faux caviardage (interdit)** : rectangle noir posé sur le texte ; le texte reste lisible par copier-coller. Des fuites de données surviennent ainsi chaque année.
- Après caviardage : **enregistrer sous un autre nom**, rouvrir, essayer de sélectionner et copier la zone ; elle doit être vide.
- Dans Word, le nettoyage par inspection du document (`file.inspect` avec l'option `remove`) supprime commentaires, révisions, propriétés et texte masqué.

### Signature

| Type | Usage | Remarque |
|---|---|---|
| Signature manuscrite scannée | Décharges simples | Faible valeur de preuve |
| Signature électronique simple | Accords courants, autorisations | Un service de signature qui trace date et identité |
| Signature avancée ou qualifiée | Contrats importants | Selon le règlement européen sur l'identification électronique |
| Ligne de signature dans le document | Mise en page d'un espace à signer | Voir `insert.signatureLine` (Word) |

Conserver la **preuve** de la signature (journal du service, copie du document signé).

### Protection

| Protection | Effet | Quand l'utiliser |
|---|---|---|
| Mot de passe d'ouverture | Chiffre le document (algorithme moderne AES-256) | Données sensibles (santé, coordonnées) |
| Mot de passe de permissions | Empêche copie, impression, modification | Document finalisé dont on veut éviter la réédition |
| Lecture seule recommandée | Alerte à l'ouverture | Documents partagés |
| Restriction d'édition | Verrouille les styles ou les champs | Formulaires |

Règles : mot de passe **long** (12 caractères au moins), **transmis par un autre canal** (SMS, téléphone) que le fichier ; ne pas inscrire le mot de passe dans le même courriel ; ne pas compter sur la protection de permissions comme sécurité forte (facile à contourner). Voir les commandes `file.encrypt`, `file.protect` et `review.restrict` plus bas.

## 7. Accessibilité

Un document accessible est lisible par tous : personnes malvoyantes, dyslexiques, daltoniennes, utilisant un lecteur d'écran, un téléphone ou une impression en noir et blanc. Référence : WCAG 2.1 niveau AA ; pour le PDF, la norme PDF/UA.

### Valeurs et règles

| Critère | Valeur / règle | Raison |
|---|---|---|
| **Taille de police** | Texte courant **11 à 12 pt minimum** ; 14 pt pour un public âgé ; notes de bas de page 9 pt minimum | Lisibilité |
| **Police** | Sans empattement simple (Inter, Arial) ou serif sobre (Georgia) ; pas de police fantaisie ni de petite capitale décorative | Dyslexie, lecture écran |
| **Interlignage** | 1,15 à 1,5 | Aération |
| **Alignement** | À gauche (drapeau), pas de justification en colonnes étroites | Lecture régulière |
| **Contraste** | **4,5:1** minimum pour le texte courant ; **3:1** pour le texte de 18 pt ou de 14 pt en gras et plus, et pour les éléments d'interface | Malvoyance |
| **Couleur seule** | Jamais seule pour porter une information (ajouter un libellé, un symbole, un motif) | Daltonisme |
| **Structure de titres** | Titre 1 unique, puis Titre 2, Titre 3 **sans saut** de niveau | Navigation |
| **Texte alternatif** | Description en 125 caractères maximum, sans « image de » ; vide (décoratif) pour les éléments purement décoratifs | Lecteur d'écran |
| **Tableaux** | Cellules d'**en-tête** déclarées (ligne d'en-tête répétée), pas de cellules fusionnées complexes, pas de tableau pour la mise en page | Lecture cellule par cellule |
| **Listes** | Vraies listes (à puces ou numérotées), pas des tirets tapés | Structure reconnue |
| **Langue** | Langue du document : fr-FR ; passages en latin ou en autre langue marqués | Prononciation correcte |
| **Ordre de lecture** | L'ordre logique du texte suit l'ordre visuel (haut vers bas, gauche vers droite) | Cohérence |
| **Liens** | Texte explicite, hors « cliquez ici » | Contexte |
| **Polices et taille des boutons** | Zone cliquable ≥ 44 × 44 px | Écran tactile |
| **Mouvement** | Pas d'animation clignotante, pas de vidéo automatique | Troubles vestibulaires, photosensibilité |

### Texte alternatif : exemples

| Mauvais | Bon |
|---|---|
| « Image » | « Des louveteaux montent une tente sur un pré. » |
| « photo1.jpg » | « Feu de camp le soir, vu de loin, avec les silhouettes d'une dizaine d'enfants assis. » |
| Description d'une image purement décorative | (laisser vide, marquer « décoratif ») |
| Graphique : « Graphique » | « Histogramme : 42 inscrits en 2025, 55 en 2026 (+ 31 %). » |

### Documents scannés

Un scan est une **image** : il n'est ni lisible par un lecteur d'écran ni recherchable. Appliquer la **reconnaissance de texte (OCR)**, relire le texte, corriger, puis ajouter les étiquettes. De préférence : refaire le document à partir de la source numérique.

## 8. Vérifications

| Vérification | Comment | Critère |
|---|---|---|
| Vérificateur d'accessibilité de l'éditeur | « Révision › Vérifier l'accessibilité » (voir `file.accessibility`, `review.checkAccessibility`, `review.accessibility`) | Aucune erreur ; avertissements examinés |
| Lecture par un lecteur d'écran | NVDA (gratuit, Windows), VoiceOver (macOS/iOS), TalkBack (Android) | Titres, liens, tableaux et images annoncés correctement |
| Ordre de tabulation et de lecture | Parcourir au clavier (touche Tabulation) ; panneau d'ordre de lecture | Logique |
| Test en niveaux de gris | Imprimer ou afficher en niveaux de gris | Tout reste lisible, aucune information perdue |
| Zoom à 200 % | Agrandir | Le texte reste lisible, sans perte de contenu |
| Test sur téléphone | Ouvrir le PDF sur un petit écran | Texte lisible sans zoom excessif |
| Contraste | Outil de mesure du contraste (pipette) | ≥ 4,5:1 pour le texte courant |
| Liens | Cliquer sur chaque lien | Tous fonctionnent |
| Propriétés du PDF | Fichier › Propriétés | Titre, auteur, langue, polices incorporées, version PDF |
| Polices | Onglet Polices des propriétés | Toutes « incorporées (sous-ensemble) » |
| Poids | Taille du fichier | Conforme aux cibles de la section 3 |

## 9. Nommage et versionnage des fichiers

### Règles de nom

| Règle | Exemple |
|---|---|
| **Date au format AAAA-MM-JJ en tête** | `2026-07-18_lettre-parents-camp_v02.pdf` |
| Minuscules, sans accent ni espace ni caractère spécial | `plan-installation-camp` |
| Tirets entre les mots, tiret bas entre les rubriques | `2026-06-15_plan-installation-camp_A3_v01.pdf` |
| Nom court (60 caractères maximum, chemin complet sous 200) | — |
| Rubriques : date, sujet, destinataire ou format, version | `2026-09-01_inscriptions_troupe_v03.xlsx` |
| Pas de « final », « dernier », « nouveau » | Utiliser `v03`, `v04` |
| Version : `v01`, `v02`… ; version majeure `v1.0` si publication | — |
| Extension en minuscules | `.pdf`, `.docx`, `.xlsx` |
| Sans nom d'enfant dans un fichier diffusé | `liste-unite-A_v01.pdf` |

### Versionnage

1. **Chaque modification de fond crée une nouvelle version** (`v02`) ; une correction typographique mineure peut rester dans la même (avec note dans le journal).
2. **Une seule version « active »** dans le dossier de diffusion ; les anciennes passent dans `archives/`.
3. **Journal des versions** : tableau en dernière page ou fichier `journal.txt` (date, auteur, changement).
4. **Toujours le fichier source à côté** : `2026-07-18_lettre-parents-camp_v02.docx` et `.pdf`.
5. Un PDF diffusé n'est **jamais modifié** : on republie une nouvelle version avec un nouveau numéro.

## 10. Archivage

- **Règle 3-2-1** : 3 copies, sur 2 supports différents, dont 1 hors du lieu (espace en ligne sécurisé).
- **Format de long terme** : PDF/A pour les documents officiels (comptes rendus, rapports d'activité, décharges) ; fichiers sources conservés aussi.
- **Structure** :

```
Archives/
  2026/
    2026-07-camp-ete/
      01-administratif/   (décharges, autorisations, fiches sanitaires)
      02-finances/        (budget, factures)
      03-communication/   (lettres, affiches)
      04-photos-video/
      05-securite/        (plans, procédures)
```

- **Accès restreint** : les dossiers sensibles (santé, administratif) à accès limité aux responsables concernés.
- **Test annuel** : ouvrir un fichier au hasard de chaque ancienne année ; vérifier qu'il se lit encore.
- **Destruction** programmée à la fin de la durée de conservation (voir section 11).

## 11. Conformité RGPD des documents de scouts

Cette section résume des principes généraux ; en cas de doute, consulter la personne chargée de la protection des données de la fédération.

### Données concernées

Les documents de la fédération contiennent des **données personnelles de mineurs et de leurs familles** : noms, dates de naissance, adresses, téléphones, photos, **informations de santé** (fiches sanitaires), régimes alimentaires, situations familiales. Certaines sont des **données sensibles** (santé, convictions religieuses) : précautions renforcées.

### Principes

| Principe | Application concrète |
|---|---|
| **Minimisation** | Ne demander et ne garder que ce qui est nécessaire à l'activité |
| **Finalité** | Dire pourquoi on collecte (organiser le camp, assurer la sécurité) et n'utiliser que pour cela |
| **Consentement et information** | Informer clairement ; pour les mineurs, accord des **parents** (en France, les mineurs de moins de 15 ans ne consentent pas seuls aux services en ligne) |
| **Durée limitée** | Ne pas conserver plus longtemps que nécessaire (voir tableau) |
| **Sécurité** | Accès restreint, mot de passe, chiffrement pour les données sensibles |
| **Droits des personnes** | Accès, rectification, effacement, opposition : contact indiqué sur chaque formulaire |
| **Transparence** | Mention d'information sur chaque formulaire |

### Mention type sur un formulaire (à adapter)

« Les informations recueillies sont utilisées par la FSGGB pour organiser les activités et assurer la sécurité des participants. Elles sont réservées aux responsables concernés et conservées pendant [durée]. Conformément à la réglementation sur la protection des données, vous pouvez accéder aux données, les rectifier, demander leur effacement ou vous opposer à leur traitement en écrivant à [adresse de contact]. »

### Durées de conservation indicatives (à valider par la fédération)

| Document | Durée indicative |
|---|---|
| Fiches sanitaires | Fin du camp ou de l'année scoute, puis destruction (sauf incident) |
| Fiches d'inscription | Année scoute en cours + 1 an |
| Autorisations de droit à l'image | Durée précisée dans l'autorisation, ou fin de l'année scoute |
| Listes de présence | Année scoute en cours + 1 an |
| Déclarations d'accident | Plusieurs années (consulter l'assureur) |
| Pièces comptables | 10 ans (obligation comptable) |
| Photos publiées | Durée précisée dans l'autorisation ; retrait sur demande |

### Diffusion limitée

1. **Liste de distribution restreinte** : n'envoyer que aux personnes qui en ont besoin.
2. **Courriels groupés en copie cachée (Cci)** : ne pas exposer les adresses des parents les uns aux autres.
3. **Pas de liste nominative d'enfants** dans un PDF diffusé largement (affichage, site) : prénoms ou initiales avec l'unité.
4. **Mot de passe** pour les documents de santé et d'inscription (envoyé par un autre canal).
5. **Nettoyage des métadonnées** avant l'envoi externe.
6. **Pas d'envoi sur une messagerie personnelle** ni de photo de fiche sanitaire sur un téléphone personnel.
7. **Suppression** des exemplaires après usage, y compris sur les téléphones et les messageries.

## Avec les outils de ScoutHub

Les commandes ci-dessous ont été vérifiées dans les listes de commandes natives de Word, Excel et PowerPoint (`api_commandes` donne les paramètres complets). **Acrobat (PDF)** : pas de liste de commandes natives dans les références ; passer par l'interface (caviardage, formulaires, signature, optimisation).

### Word

| Identifiant | Paramètres | Usage |
|---|---|---|
| `file.exportPdf` | `path`, `markup?: bool`, `strict?: bool` | Exporter le document en PDF |
| `file.printPdf` | `path`, `pagesPerSheet?: 1\|2\|4\|6\|9\|16\|"booklet"\|"bookletReverse"`, `range?: all\|current\|selection\|custom`, `pages?: "1-3,5"`, `parity?`, `copies?` | PDF d'impression, livret |
| `file.strictReport` | `markup?`, `page?` | Contrôle d'export strict (glyphes manquants, images absentes) |
| `file.saveAs`, `file.save` | `path`, `password?`, `markup?`, `format?` | Enregistrer, éventuellement en PDF |
| `file.exportPng` | `path`, `page?`, `scale?` | Une page en PNG |
| `file.properties` | `title?, subject?, author?, keywords?, comments?, category?, custom?` | Métadonnées |
| `file.info` | `{}` | Lire les informations du document |
| `file.inspect` | `remove?: ["comments","revisions","properties","hidden","headers"]` | Inspecter et nettoyer |
| `file.privacyOptions` | `removePersonalInfo?, removeDateTime?` | Anonymiser auteurs et dates à l'enregistrement |
| `file.accessibility` | `{}` | Vérificateur d'accessibilité |
| `review.language` | `lang?: "fr-FR"`, `noProof?`, `default?: bool` | Langue de vérification |
| `picture.altText`, `object.altText` | `text, title?, decorative?` | Texte alternatif d'une image ou d'un objet |
| `table.altText` | `text?, title?` | Texte alternatif d'un tableau |
| `table.properties` | `headerRow?: bool`, `allowBreak?`, … | Ligne d'en-tête répétée |
| `references.toc` | `levels?: 1-9, title?, pageNumbers?, rightAlign?, tabLeader?, hyperlinks?: bool, headingStyles?` | Table des matières cliquable |
| `references.updateToc` | `{}` | Mettre à jour la table |
| `insert.bookmark` | `{"name": string}` | Signet |
| `insert.link` | `url` ou `bookmark` ou `heading` ou `top: true`, `text?` | Lien externe ou interne |
| `insert.signatureLine` | `signer?, title?` | Ligne de signature |
| `file.encrypt` | `password` (ou `null`/`""` pour retirer) | Mot de passe d'ouverture |
| `file.protect`, `review.restrict` | `mode: none\|readOnly\|comments\|trackedChanges` ; `mode?: none\|readOnly\|comments\|trackedChanges\|forms` | Protection |
| `file.versions` | `save?: label`, `restore?: index` | Historique de versions |
| `file.rename` | `name` | Renommer le document |
| `view.accessibilityPane`, `view.altTextPane` | `value?: bool` | Volets d'accessibilité |

### Excel

| Identifiant | Paramètres | Usage |
|---|---|---|
| `file.exportPdf` | `path?`, `sheets?: active\|all`, `range?: "A1:F40"`, `fitToPage?: bool` | PDF (tient compte de la mise en page de chaque feuille) |
| `file.saveAs`, `file.save` | `path` (extension `.pdf`, `.csv`, `.xlsx`…) | Enregistrer |
| `file.exportCsv` | `path, sheet?, values?: bool` | Export CSV |
| `file.printPreview` | `page?, sheets?, range?, fitToPage?` | Aperçu paginé |
| `file.properties` | `title?, subject?, author?, company?, keywords?, description?` | Métadonnées |
| `review.checkAccessibility` | `{}` | Vérificateur d'accessibilité |
| `review.protectSheet`, `review.protectWorkbook` | `password?, …` ; `on?, password?` | Protéger feuille et structure |

### PowerPoint

| Identifiant | Paramètres | Usage |
|---|---|---|
| `file.export` | `path`, `format?: png\|jpeg\|pptx\|deckcraft\|outline\|rtf\|pdf\|gif`, `slide?`, `all?`, `layout?: slides\|notes\|handouts` (PDF), `perPage?: 1\|2\|3\|4\|6\|9`, `paper?: letter\|a4\|legal\|a3`, `orientation?: portrait\|landscape` | Exporter en PDF ou en images (PowerPoint n'a pas de `file.exportPdf` : utiliser `file.export` avec `format: "pdf"`) |
| `file.saveAs`, `file.save` | `path, format?: deckcraft\|pptx` | Enregistrer |
| `file.properties` | `title?, subject?, author?, keywords?, comments?, category?, company?` | Métadonnées |
| `shape.altText` | `text, decorative?, ids?` | Texte alternatif |
| `review.accessibility` | `{}` | Vérificateur d'accessibilité |
| `format.languageAll` | `lang?, noProof?` | Langue de tout le texte |

### Séquence A : document Word prêt à diffuser en PDF

```json
[
 {"commande":"file.properties","parametres":{"title":"Camp d'été 2026 - Lettre aux parents","author":"FSGGB - Troupe Saint-Jean","subject":"Informations pratiques et liste de matériel","keywords":"camp, scouts, 2026, matériel, inscription"}},
 {"commande":"review.language","parametres":{"lang":"fr-FR","default":true}},
 {"commande":"references.toc","parametres":{"levels":3,"hyperlinks":true,"pageNumbers":true,"rightAlign":true,"tabLeader":"dot"}},
 {"commande":"file.accessibility","parametres":{}},
 {"commande":"file.inspect","parametres":{}},
 {"commande":"file.exportPdf","parametres":{"path":"2026-07-18_lettre-parents-camp_v02.pdf"}}
]
```

Lire les résultats de `file.accessibility` et de `file.inspect` avant l'export ; si des commentaires, révisions ou textes masqués sont signalés, relancer `file.inspect` avec `{"remove":["comments","revisions","hidden"]}` puis exporter. Contrôler ensuite le PDF (propriétés, polices, signets, liens, lecteur d'écran).

### Séquence B : PowerPoint en PDF A4 et tableau Excel en PDF

```json
[
 {"commande":"format.languageAll","parametres":{"lang":"fr-FR"}},
 {"commande":"review.accessibility","parametres":{}},
 {"commande":"file.export","parametres":{"path":"2026-09-01_presentation-parents_v01.pdf","format":"pdf","layout":"slides","paper":"a4","orientation":"landscape"}}
]
```

Excel (autre application, autre lot) :

```json
[
 {"commande":"file.properties","parametres":{"title":"Budget du camp d'été 2026","author":"FSGGB - Troupe Saint-Jean"}},
 {"commande":"review.checkAccessibility","parametres":{}},
 {"commande":"file.exportPdf","parametres":{"path":"2026-06-15_budget-camp_v01.pdf","sheets":"active","fitToPage":true}}
]
```

## Particularités dans le navigateur (ScoutHub) : à lire avant d'exécuter une séquence
Les séquences `api_lot` de cette fiche ont été **exécutées sur l'application réelle** pour en vérifier les paramètres ; elles supposent le contexte indiqué dans leur titre. Dans le navigateur :
- **Pas de chemins de fichiers.** Les commandes qui prennent un `path` pour LIRE un fichier (`insert.picture` avec `path`, ouverture de fichiers) répondent « files are opened through the browser on the web ». Pour une image, la personne l'insère par l'interface (Insertion ▸ Image) ou la commande reçoit `data` (image en base64) quand l'application l'accepte. Ne jamais inventer un chemin comme `/chemin/image.jpg`.
- **Enregistrer** = l'action `enregistrer` de ChatGDB (jamais `file.save` avec un chemin : « saving to a path is not available in the browser »). Le document est alors gardé dans la conversation et la personne le retrouve sous ta réponse avec les boutons « Ouvrir » et « Télécharger ».
- **Export PDF** : `file.exportPdf` fonctionne dans Word et Excel (le PDF est ajouté sous ta réponse avec un bouton « Télécharger ») ; PowerPoint n'exporte pas de PDF par commande dans le navigateur (`file.export` exige un chemin) : demander à la personne Fichier ▸ Exporter, ou livrer le .pptx.
- **Identifiants** : une séquence qui écrit `ID_…` ou `Nom de feuille` en majuscules est un **modèle** : remplace par la valeur réelle lue avec `api_inspecter` / `slide.inspect` avant d'exécuter. Une feuille Excel ou une diapositive citée doit exister (crée-la d'abord avec « classeur » ou `home.insertSheet`).

## Liste de contrôle avant de livrer

1. Le format est adapté à l'usage (DOCX pour modifier, PDF pour lire, PDF/A pour archiver, PDF/X pour l'imprimeur, PNG ou SVG pour les visuels).
2. Le fichier source est conservé à côté du PDF.
3. Les styles de titres sont utilisés partout ; la structure de titres n'a pas de saut de niveau.
4. Les images ont un texte alternatif (ou sont marquées décoratives) ; les tableaux ont une ligne d'en-tête.
5. La langue du document est fr-FR.
6. Le texte courant fait 11 à 12 pt au moins, avec un contraste de 4,5:1 ou plus ; aucune information ne repose sur la couleur seule.
7. La table des matières est générée automatiquement et cliquable ; les signets suivent les titres.
8. Les liens ont des libellés explicites et ont tous été testés.
9. Les polices sont incorporées ; les images sont à 150 ppp (écran) ou 300 ppp (impression).
10. Le poids est conforme (moins de 5 Mo pour un courriel ; sinon lien de partage).
11. Les métadonnées (titre, auteur, mots-clés) sont renseignées ; commentaires, révisions, chemins et auteurs privés sont supprimés.
12. Si une information est masquée, c'est par un vrai caviardage, vérifié par copier-coller.
13. Les données sensibles sont protégées par mot de passe, transmis par un autre canal.
14. Le vérificateur d'accessibilité ne signale aucune erreur ; le test au lecteur d'écran et en niveaux de gris est fait.
15. Le nom du fichier suit la règle `AAAA-MM-JJ_sujet_vNN.pdf`, sans espace, accent ni nom d'enfant.
16. Une mention RGPD figure sur chaque formulaire (finalité, durée, droits, contact).
17. Les destinataires sont limités aux personnes nécessaires ; courriels groupés en copie cachée.
18. La durée de conservation est définie et la destruction est planifiée.
19. Le PDF final a été rouvert et relu en entier.

## Questions auxquelles la fiche répond

- Quel format choisir : DOCX, PDF, PDF/A, PDF/X, PNG ou SVG ?
- Comment exporter proprement un PDF depuis Word, PowerPoint ou Excel ?
- Comment alléger un PDF pour l'envoyer par courriel (quelles cibles en Mo) ?
- Quelles métadonnées renseigner et lesquelles supprimer avant diffusion ?
- Comment créer une table des matières cliquable et des signets ?
- Comment caviarder correctement une information confidentielle ?
- Comment protéger, signer ou verrouiller un PDF ?
- Quelles règles d'accessibilité (contraste, titres, texte alternatif, tableaux, langue) respecter ?
- Comment tester un document avec un lecteur d'écran et en niveaux de gris ?
- Comment nommer et versionner les fichiers avec des dates AAAA-MM-JJ ?
- Comment archiver et conserver les documents d'une unité scoute ?
- Quelles règles RGPD pour les documents contenant des données de mineurs, et quelles durées de conservation ?
- Quelles commandes natives (`file.exportPdf`, `file.export`, `file.saveAs`) exportent en PDF dans Word, Excel et PowerPoint ?
