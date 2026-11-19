---
id: comp-excel-tableaux-elegants
titre: Tableaux Excel lisibles, élégants et fiables (structure, formats, mise en forme, graphiques, impression)
theme: Compétences
type: synthese
sources:
  - titre: Usages professionnels de la conception de tableurs (modélisation financière, visualisation de données, lisibilité des tableaux)
mots_cles: Excel, GridCraft, tableur, tableau, mise en forme, format de nombre, euro, pourcentage, date, figer les volets, filtre, tableau structuré, validation de données, liste déroulante, mise en forme conditionnelle, barres de données, graphique, camembert, tableau de bord, impression, zone d'impression, protection, api_lot, home.numberFormat, insert.chart
liens: app-excel, comp-excel-budget-et-suivi, comp-couleur-et-identite-fsggb, comp-polices-et-hierarchie, comp-typographie-francaise, comp-pdf-export-accessibilite, suite-craft-mcp
resume: Les règles de l'art pour qu'un classeur soit propre, lisible et sûr : organisation des données, formats de nombres français, alignements, largeurs, couleurs sobres, filtres, validation, mise en forme conditionnelle, graphiques, tableaux de bord et impression. Donne les valeurs chiffrées, les commandes natives exactes de GridCraft (Excel dans ScoutHub) et six séquences api_lot prêtes à l'emploi.
---

## Principe général

Un bon tableau se lit en cinq secondes : on voit le titre, on repère les en-têtes, l'œil descend dans les colonnes sans se perdre, les totaux ressortent, rien ne clignote. Un tableau fiable se corrige en cinq minutes : chaque donnée est saisie une seule fois, les calculs se voient, les erreurs se détectent. La beauté d'un tableur n'est pas de la décoration : c'est de la **retenue** (peu de couleurs, peu de traits, des alignements réguliers) au service de la **lecture** et de la **fiabilité**.

Deux conséquences pour l'IA :
1. On construit **d'abord les données et les formules**, puis la mise en forme, puis la mise en page d'impression. Jamais l'inverse.
2. Chaque choix de mise en forme a une raison (lisibilité, hiérarchie, accessibilité, impression) : si on ne peut pas la dire, on ne l'applique pas.

Pour les modèles chiffrés propres à une unité (budget de camp, inscrits, présences, menus), voir la fiche `comp-excel-budget-et-suivi`. Pour les couleurs de la fédération, voir `comp-couleur-et-identite-fsggb`. Pour la typographie des textes (espaces, guillemets), voir `comp-typographie-francaise`.

## 1. Structurer les données

### Règles d'or

| Règle | Pourquoi | Défaut typique à éviter |
|---|---|---|
| **Une ligne = un enregistrement** (un inscrit, une dépense, un repas) | Le tri, le filtre, les totaux conditionnels et les tableaux croisés ne fonctionnent que sur des lignes homogènes | Une ligne par « famille » avec trois enfants côte à côte dans trois colonnes |
| **Une colonne = un champ** (une seule nature d'information, un seul type) | On peut formater, valider et calculer la colonne entière | Une colonne « Nom et prénom » ; une colonne qui mélange « 12 » et « n/a » |
| **Une seule ligne d'en-têtes**, en haut, avec des libellés courts et uniques | Le filtre et les tableaux structurés l'exigent | En-têtes sur deux lignes, en-têtes répétés au milieu |
| **Pas de cellules fusionnées dans les données** | La fusion casse le tri, le filtre, la sélection de colonne et les formules recopiées | Une cellule « Août » fusionnée sur cinq lignes |
| **Pas de lignes ni de colonnes vides** dans une zone de données | Le tableur y voit la fin du tableau (région courante) | Une ligne vide « pour aérer » : on aère avec la hauteur de ligne, pas avec une ligne vide |
| **Un tableau par feuille** (ou un seul bloc de données), les totaux hors de la zone triable | On trie et filtre sans casser le voisin | Deux tableaux côte à côte : le filtre de l'un masque les lignes de l'autre |
| **Une valeur par cellule** (le nombre sans l'unité, la date sans le texte) | Calculable | « 12 € », « 3 jours » saisis comme du texte |
| **Pas de saisie de totaux « à la main »** | Un total recalculé reste juste | Un total écrit en dur qui n'a pas suivi la dernière correction |

### Séparer saisie, calculs et présentation

Un classeur de plus de quelques dizaines de lignes gagne à se découper en feuilles aux rôles distincts :

| Zone | Contenu | Aspect | Accès |
|---|---|---|---|
| **Saisie** (données) | Les enregistrements bruts, une ligne par fait | Cellules à remplir : fond blanc ; colonnes calculées : fond gris très clair `#F3F4F9` | Modifiable |
| **Paramètres** | Taux, prix unitaires, listes de choix, dates du camp | Une petite feuille « Paramètres », cellules nommées | Modifiable avec soin |
| **Calculs** | Totaux par poste, par jour, par personne | Formules visibles, sans décoration | Protégée |
| **Présentation** | Tableau de bord, états à imprimer | Mise en page soignée, aucune saisie | Protégée, zone d'impression définie |

Règle simple : **une cellule de saisie ne contient jamais de formule, une cellule de calcul ne contient jamais de valeur saisie.** Les constantes (taux de TVA, prix d'une nuitée, nombre de participants) vont dans la feuille Paramètres, sont nommées (voir plus bas) et se lisent dans les formules : `=B5*Prix_nuitee` plutôt que `=B5*12,5`.

### Nommer les feuilles

- 2 à 20 caractères, sans espace en tête ni en fin, sans les caractères interdits (`\ / ? * [ ] :`).
- Un nom parlant et stable : `Saisie`, `Paramètres`, `Budget`, `Tableau de bord`, `Présences`. Éviter `Feuil1`, `Copie de Budget (2)`.
- Les espaces obligent à mettre des apostrophes dans les formules (`'Tableau de bord'!B2`) : préférer `Tableau_de_bord` ou `Bord` pour les feuilles très référencées.
- Ordre des onglets : de gauche à droite, du résultat vers la saisie (Tableau de bord, Budget, Saisie, Paramètres) ou l'inverse, mais toujours le même d'un classeur à l'autre de la maison.
- Couleur d'onglet discrète : bleu nuit `#000761` pour les feuilles de présentation, or `#c6a24e` pour les feuilles de saisie, gris `#8A8FA8` pour les paramètres.

### Tableaux structurés

Transformer une zone de données en **tableau structuré** (objet « Tableau ») apporte : extension automatique des formules et des formats quand on ajoute une ligne, filtres, en-têtes figés dans la lecture, formules lisibles (`=[@Quantité]*[@Prix]`), ligne de totaux. C'est la meilleure base pour tout enregistrement qui grandit (inscrits, dépenses). Nom du tableau : sans espace, préfixe court (`T_Inscrits`, `T_Depenses`).

## 2. Formats de nombres

Le format n'altère pas la valeur : il change l'affichage. Appliquer le format à la **colonne entière** de données, pas cellule par cellule.

### Conventions françaises

- Séparateur de milliers : espace insécable ; séparateur décimal : virgule (l'affichage suit la langue de l'interface ; dans les codes de format de l'application, on écrit la syntaxe internationale : virgule pour les milliers, point pour les décimales, voir plus bas).
- Symbole monétaire **après** le nombre, séparé par une espace : `1 250,00 €`.
- Pourcentage : `12,5 %` (espace avant le signe, ou sans espace selon l'affichage du tableur ; rester constant dans tout le classeur).
- Dates : `jj/mm/aaaa` en tableau (`12/07/2026`) ; dans un titre ou une phrase, `12 juillet 2026` ; jamais de format américain `07/12/2026`.
- Heures : `hh:mm` (`08:30`), pas de « h » collé dans le nombre.

### Tableau de formats recommandés

| Donnée | Exemple affiché | Code de format (syntaxe de l'application) | Remarque |
|---|---|---|---|
| Montant en euros, centimes | `1 250,50 €` | `#,##0.00 "€"` | Valeur par défaut des budgets |
| Montant en euros, sans centimes | `1 250 €` | `#,##0 "€"` | Totaux de tableaux de bord, grands nombres |
| Montant négatif en rouge sobre | `-35,00 €` en rouge | `#,##0.00 "€";[Red]-#,##0.00 "€"` | Pour les écarts ; le rouge pur est agressif, préférer une règle conditionnelle (voir §7) |
| Quantité entière | `1 250` | `#,##0` | Participants, repas |
| Quantité décimale | `2,5` | `#,##0.0` | Kilos, litres : 1 décimale ; au besoin `#,##0.00` |
| Pourcentage entier | `65 %` | `0%` | Taux de remplissage |
| Pourcentage 1 décimale | `12,5 %` | `0.0%` | Taux de paiement |
| Date courte | `12/07/2026` | `dd/mm/yyyy` | Colonnes de dates |
| Date longue avec jour | `dimanche 12 juillet 2026` | `dddd d mmmm yyyy` | Titres, plannings |
| Jour abrégé | `dim. 12/07` | `ddd dd/mm` | Planning compact |
| Heure | `08:30` | `hh:mm` | Horaires |
| Durée | `12:30` (12 h 30) | `[h]:mm` | Les crochets évitent de repartir à zéro après 24 h |
| Numéro de téléphone | `06 12 34 56 78` | `00 00 00 00 00` | Perd le zéro initial sinon ; ou stocker en texte |
| Code (matricule, code postal) | `01234` | `00000` ou format Texte | Éviter que « 01234 » devienne 1234 |
| Zéro masqué | cellule vide au lieu de `0` | `#,##0;-#,##0;;@` | Pour alléger un tableau creux |
| Libellé d'unité | `250 g` | `0 "g"` | Garde le nombre calculable |

Ne jamais écrire l'unité dans la valeur (« 250 g » en texte) : on met l'unité dans l'en-tête (`Quantité (g)`) ou dans le format.

### Règle des décimales

- Argent : 2 décimales dans le détail, 0 décimale dans les totaux de synthèse ; jamais 3 ou plus.
- Pourcentages : 0 décimale pour une vue d'ensemble, 1 pour un suivi fin.
- Toute colonne affiche **le même nombre de décimales** sur toutes ses lignes, sinon les virgules ne s'alignent pas et la lecture hésite.
- Pour que le calcul corresponde à ce qui est affiché (cotisations par famille, partage de frais), **arrondir dans la formule** (`ROUND`/`ARRONDI`) et non seulement par le format : la somme de montants arrondis doit donner le total affiché.

## 3. Alignements, polices, largeurs, hauteurs

### Alignements

| Contenu | Alignement horizontal | Raison |
|---|---|---|
| Nombres, montants, pourcentages | **À droite** | Les unités, dizaines, centaines se superposent : comparaison immédiate |
| Texte (noms, libellés) | **À gauche** | Début de mot visible, lecture naturelle |
| En-têtes de colonnes de nombres | À droite (comme les nombres) | L'en-tête reste au-dessus de ses chiffres |
| En-têtes de colonnes de texte | À gauche | Idem |
| Dates, codes courts, cases Oui/Non | Centré | Largeur constante, symétrie |
| Titre de feuille | À gauche, sur la première colonne (ne pas centrer sur une fusion) | Pas de cellule fusionnée ; l'alignement gauche suit le bord du tableau |
| Vertical | **Au milieu** pour les lignes hautes ; en bas par défaut sinon | Cohérence quand une ligne passe sur deux lignes de texte |

Retrait : un retrait de 1 niveau pour les sous-postes d'un budget (« Hébergement » puis « Terrain », « Eau » en retrait) remplace les cellules fusionnées et les colonnes vides.

### Polices et corps

| Élément | Police | Corps | Style |
|---|---|---|---|
| Données et en-têtes | Une seule sans-serif : Calibri, Arial ou Inter si disponible | **11 pt** (10 pt pour un tableau très dense à imprimer, jamais moins de 9) | Normal ; en-têtes en gras |
| Titre de la feuille | La même, ou la serif de titre (Georgia) pour rappeler l'identité | **16 à 18 pt** | Gras, couleur bleu nuit `#000761` |
| Sous-titre (période, unité, date de mise à jour) | Même police | 10 pt | Gris `#5B6078` |
| Totaux | Même police | 11 pt | Gras |
| Notes de bas de tableau | Même police | 9 pt | Italique gris |

Une police pour tout le classeur (deux au maximum avec la serif du titre). Pas de MAJUSCULES sur toute une ligne de données, pas de soulignement (réservé aux liens), pas d'italique pour les nombres.

### Largeurs de colonnes (en caractères)

| Contenu | Largeur conseillée |
|---|---|
| Numéro d'ordre, case Oui/Non | 5 à 8 |
| Date | 11 à 12 |
| Heure, pourcentage | 8 à 10 |
| Montant (jusqu'à 9 999,99 €) | 12 à 14 |
| Quantité, unité | 8 à 12 |
| Nom, prénom | 16 à 22 |
| Libellé, poste de dépense | 28 à 40 |
| Courriel | 28 à 34 |
| Remarque, commentaire | 40 à 60 avec retour à la ligne automatique |

Règle : la **colonne la plus large ne dépasse pas la moitié de la largeur de la page imprimée**, et la somme des largeurs d'un tableau destiné à l'impression A4 paysage tient en environ 130 caractères (A4 portrait : environ 90). Ajuster ensuite à la longueur du contenu le plus long, pas au titre.

### Hauteurs de lignes

| Ligne | Hauteur (points) |
|---|---|
| Titre de la feuille | 28 à 32 |
| En-têtes de colonnes | 24 (texte centré verticalement) |
| Lignes de données | 18 à 20 (le défaut de 15 est serré : 18 donne de l'air sans gaspiller) |
| Ligne de total | 22 |
| Ligne de séparation (entre titre et tableau) | 8 à 10 |

Une hauteur régulière dans toute la zone de données ; ne pas laisser le tableur ajuster ligne par ligne (aspect en dents de scie).

## 4. Couleurs, bordures, zébrures

### Palette sobre (identité FSGGB)

| Rôle | Couleur | Usage |
|---|---|---|
| Bleu nuit | `#000761` | Fond des en-têtes, titre, filet de total, séries de graphique principales |
| Texte | `#12142b` | Texte des données (plus doux que le noir pur) |
| Or | `#c6a24e` | Filet fin sous le titre, accent d'un indicateur clé, une seule série mise en valeur |
| Fond clair | `#fafafc` | Fond de feuille de présentation (ou blanc) |
| Zébrure | `#F3F4F9` | Une ligne sur deux |
| Gris texte secondaire | `#5B6078` | Notes, unités |
| Gris filets | `#D9DBE6` | Séparations fines |
| Vert (bon) | texte `#1E7B4B` sur fond `#E3F3EA` | Seuil atteint |
| Rouge (alerte) | texte `#A32020` sur fond `#FBE5E5` | Dépassement, retard |
| Orange (attention) | texte `#8A5A00` sur fond `#FFF1D6` | À surveiller |

Vérifier le contraste : texte blanc sur `#000761` (rapport proche de 17:1) ; `#12142b` sur `#F3F4F9` (supérieur à 14:1) ; tous les couples vert, rouge, orange ci-dessus dépassent 4,5:1. Ne jamais coder une information **par la couleur seule** (daltonisme, impression en noir et blanc) : doubler par un symbole (▲ ▼, ✓), un mot ou une icône.

### En-têtes

Fond bleu nuit `#000761`, texte blanc, gras, 11 pt, hauteur 24 pt, alignements comme les colonnes. Pas de dégradé, pas d'ombre, pas de bordure sur chaque cellule d'en-tête.

### Zébrures

Une ligne sur deux en `#F3F4F9` aide l'œil à suivre une ligne sur plus de 6 colonnes. En dessous de 6 colonnes ou de 8 lignes, ne pas zébrer : un simple filet gris `#D9DBE6` entre lignes suffit. Les tableaux structurés les appliquent seuls (option « lignes à bandes »), ce qui évite de les décaler à chaque tri.

### Totaux

Ligne de total : **filet supérieur fin bleu nuit** (ou double filet inférieur pour le total général), texte en gras, fond blanc ou `#EEF0F8`. Jamais de fond foncé ni de cadre épais autour d'un total : il doit se distinguer sans crier.

### Bordures

Règle des « bordures minimalistes » :
- **Aucun** quadrillage cellule par cellule dans les données (on masque le quadrillage de la feuille de présentation).
- Un filet horizontal fin gris `#D9DBE6` sous chaque ligne **ou** les zébrures, pas les deux.
- Un filet bleu nuit sous l'en-tête et au-dessus du total.
- Pas de bordure verticale, sauf pour séparer deux blocs logiques (réalisé / prévisionnel), en gris clair.
- Pas de bordure épaisse ni de cadre extérieur lourd.

## 5. Naviguer : figer, filtrer, trier

1. **Figer les volets** : la ligne d'en-têtes (et la première colonne si elle identifie les lignes) reste visible au défilement. Dès que le tableau dépasse un écran (environ 30 lignes), c'est obligatoire.
2. **Filtre automatique** sur la ligne d'en-têtes : permet de ne voir que « Non payé », « Louveteaux », « juillet ». Un seul filtre par feuille (par tableau structuré).
3. **Trier** avec une clé principale et au plus une secondaire (par exemple Unité puis Nom). Toujours trier le tableau entier, jamais une seule colonne.
4. **Zoom** 100 % (jamais en dessous de 85 % pour une feuille destinée à l'écran).
5. Masquer le quadrillage et les en-têtes de ligne/colonne sur une feuille de présentation (tableau de bord) ; les laisser sur une feuille de saisie.
6. **Plan et sous-totaux** (regroupement de lignes) pour les budgets longs : on masque le détail et on laisse les sous-totaux.

## 6. Validation des données : saisir juste

La validation empêche l'erreur plutôt que de la corriger. À appliquer à **toute colonne saisie à la main**.

| Besoin | Type | Réglage |
|---|---|---|
| Choisir parmi Oui / Non | Liste | `"Oui,Non"` avec flèche déroulante |
| Choisir une unité | Liste | Plage de la feuille Paramètres (`=Paramètres!$B$2:$B$7`) |
| Quantité entière positive | Nombre entier | Entre 0 et 9 999 |
| Montant | Décimal | Supérieur ou égal à 0 |
| Date de camp | Date | Entre le 01/01/2026 et le 31/12/2027 |
| Texte court | Longueur du texte | Entre 1 et 60 |
| Cohérence | Personnalisé | Formule du type `=COUNTIF($A:$A,A2)=1` (pas de doublon) |

Bonnes pratiques : afficher un **message de saisie** court (« Montant en euros, sans le symbole ») et un **message d'erreur** utile, de style « Arrêt » pour les contraintes strictes, « Avertissement » pour les valeurs inhabituelles. Une liste alimentée par une plage nommée se met à jour toute seule quand on ajoute un choix.

## 7. Mise en forme conditionnelle : avec goût

La mise en forme conditionnelle attire l'œil **là où il y a une décision à prendre**. Si tout est coloré, rien ne ressort.

### Règles de bon goût

1. **Une idée par colonne**, 2 à 3 règles au plus par feuille.
2. **Teintes douces** (fonds pastel de la palette ci-dessus avec texte foncé) plutôt que rouge/vert saturés.
3. **Toujours doubler la couleur** par un signe : colonne « Statut » avec le mot, jeu d'icônes, flèches.
4. **Seuils chiffrés explicites** (écrits dans la feuille Paramètres, pas cachés dans la règle) : « alerte si l'écart dépasse 10 % ».
5. Éviter : la règle qui colore toute la ligne en vif ; les échelles de couleur arc-en-ciel ; les icônes sur chaque cellule d'un tableau de 200 lignes ; les clignotements.

### Catalogue

| Effet | Quand l'utiliser | Réglage conseillé |
|---|---|---|
| **Règle de seuil** (cellule supérieure à, inférieure à) | Un dépassement de budget, un retard de paiement | Fond `#FBE5E5`, texte `#A32020` |
| **Formule** (`=$F2="Non payé"`) | Colorer la ligne entière selon une colonne de statut | Fond très clair `#FFF1D6` sur la ligne, jamais plus vif |
| **Barres de données** | Comparer des montants dans une colonne (dépenses par poste) | Une seule couleur : bleu nuit à 60 % ou or ; barre pleine (sans dégradé) ; valeur visible |
| **Échelle de couleurs** | Une grille de présences ou de températures (carte thermique) | **Deux couleurs** (blanc vers bleu nuit) ; pas de feu tricolore sur de gros volumes |
| **Jeu d'icônes** | Trois états (OK / attention / alerte) sur une colonne d'indicateurs | Trois feux ou trois flèches, sur une colonne dédiée ; seuils en pourcentage ou en nombres définis |
| **10 premiers / moyenne** | Mettre en évidence les 3 plus grosses dépenses | Gras + fond or très clair |
| **Doublons** | Contrôle de saisie (deux fois le même inscrit) | Fond orange doux |
| **Cellules vides / erreurs** | Champs obligatoires, détection de `#REF!` | Bordure ou fond d'alerte |
| **Dates** (période) | Échéances de paiement en retard | Règle « date inférieure à aujourd'hui » combinée à un statut non payé |

## 8. Protection

- **Verrouiller** les cellules de calcul, de titre et d'en-tête ; **déverrouiller** uniquement les cellules de saisie, puis protéger la feuille. Les cellules sont verrouillées par défaut, mais le verrouillage n'agit qu'une fois la feuille protégée.
- Autoriser dans la protection : la sélection, le tri et le filtre automatique si on veut qu'on puisse filtrer un tableau protégé ; interdire l'insertion de lignes sur une feuille de calcul.
- Un mot de passe est facultatif et se perd : pour un classeur d'unité, **protéger sans mot de passe** (le but est d'éviter la fausse manœuvre, pas de cacher) et le noter dans la feuille Paramètres (« Feuille protégée, sans mot de passe »).
- Protéger la structure du classeur (onglets) pour éviter la suppression d'une feuille de calcul.
- Documenter : une note en haut de la feuille de saisie, « Remplir uniquement les cellules sur fond blanc ».

## 9. Mise en page pour l'impression

| Réglage | Valeur recommandée | Raison |
|---|---|---|
| Papier | A4 | Format français |
| Orientation | Paysage si plus de 7 colonnes ou plus de 90 caractères de large ; sinon portrait | Éviter la réduction illisible |
| Mise à l'échelle | **Ajuster à 1 page en largeur, hauteur libre** | Jamais de colonne isolée sur une page suivante |
| Échelle minimale | 80 % ; en dessous, passer en paysage ou supprimer des colonnes | Corps lisible : 11 pt × 0,8 ≈ 9 pt |
| Marges | Gauche et droite 0,7 pouce (≈ 18 mm), haut et bas 0,75 pouce (≈ 19 mm), en-tête et pied 0,3 pouce (≈ 8 mm) | Marges standard de bureau, compatibles avec les imprimantes |
| Zone d'impression | Définie explicitement, sans les colonnes de calcul ni de contrôle | Seul le nécessaire sort |
| Titres à répéter | Ligne d'en-têtes (`1:1` ou la ligne du tableau) sur chaque page | Chaque page se lit seule |
| Quadrillage | Non imprimé | Les bordures fines suffisent |
| En-tête de page | Nom de l'unité à gauche, titre du document au centre | Identification |
| Pied de page | `Page &P sur &N` au centre, date d'impression à droite | Repérage, détection de pages manquantes |
| Centrage | Horizontal sur la page | Équilibre |
| Sauts de page | Placés avant un titre de section, jamais au milieu d'un bloc | Cohérence |

Les codes d'en-tête et de pied de page sont ceux d'Excel : `&L` gauche, `&C` centre, `&R` droite, `&P` numéro de page, `&N` nombre de pages, `&D` date, `&F` nom du fichier, `&A` nom de la feuille. Vérifier toujours l'**aperçu avant impression** : nombre de pages, aucune colonne coupée, aucune page quasi vide. Pour un envoi par courriel, privilégier le PDF (voir `comp-pdf-export-accessibilite`).

## 10. Graphiques

### Choisir le type selon le message

| Message à faire passer | Type | Détails |
|---|---|---|
| Comparer des catégories (dépenses par poste) | **Barres horizontales** (ou colonnes si peu de catégories) | Classer par valeur décroissante, sauf si l'ordre est naturel (mois) |
| Évolution dans le temps (inscriptions par semaine) | **Courbe** | 1 à 4 séries maximum ; pas plus de 12 à 24 points |
| Part d'un tout, 2 à 4 parts | Anneau ou barre empilée à 100 % | Le camembert est à éviter (voir ci-dessous) |
| Comparaison prévu / réalisé | **Colonnes groupées** (deux couleurs) | Bleu nuit pour le prévu, or pour le réalisé |
| Composition d'un total | Barre empilée | Maximum 4 segments |
| Relation entre deux mesures | Nuage de points | Rare en usage scout |
| Tendance dans une cellule | Mini-graphique (sparkline) | Une courbe par ligne, sans axes |
| De l'excédent au déficit, cascade des postes | Cascade | Pour un compte de résultat commenté |

**Camemberts à éviter** : l'œil compare mal des angles ; au-delà de 3 parts les écarts se perdent ; les étiquettes se chevauchent ; les parts proches de 25 % et 30 % paraissent semblables. Une **barre horizontale triée** dit la même chose, avec la valeur lisible. Exception tolérée : deux ou trois parts très inégales (80 % / 20 %), avec les pourcentages écrits.

### Règles d'exécution

1. **Titre informatif qui énonce le message** : « Le transport représente 38 % du budget » plutôt que « Répartition des dépenses ». Corps 14 pt, gras, aligné à gauche.
2. **Supprimer le superflu** : pas de cadre, pas de ombre, pas de fond coloré, pas de 3D, pas de quadrillage dense (au plus des lignes horizontales gris très clair `#D9DBE6`), pas de légende si une seule série.
3. **Étiquettes de données** à la place d'un axe quand il y a moins de 8 valeurs ; sinon un axe avec 4 à 6 graduations.
4. **Axes** : l'axe des valeurs des barres et colonnes **commence à zéro** (sinon les écarts sont trompeurs) ; unités dans le titre d'axe ou le titre du graphique (« en euros ») ; format de nombre cohérent avec le tableau.
5. **Couleurs** : une couleur dominante (bleu nuit) et une couleur d'accent (or) pour la donnée à mettre en valeur ; les autres séries en gris. Jamais plus de 4 couleurs.
6. **Légende** : en haut ou à droite, ou mieux **remplacée par l'étiquette directe** de la série.
7. **Taille** : environ 16 cm × 8 cm (graphique d'une page) ; aligné sur les bords des colonnes du tableau, avec 1 colonne de marge.
8. **Texte** : 10 à 12 pt, police du classeur.
9. **Source et date** en note sous le graphique, 9 pt.
10. Une page = un à deux graphiques au plus.

## 11. Tableaux de bord

Un tableau de bord répond à une question de pilotage (« où en est notre camp ? ») sur **une seule page**, sans défilement.

### Hiérarchie

1. **Titre et période** (en haut à gauche), date de mise à jour (en haut à droite).
2. **3 à 5 indicateurs clés** (KPI) en grands chiffres : par exemple Inscrits, Taux de paiement, Budget réalisé, Écart, Jours restants. Corps 24 à 28 pt en gras pour la valeur, 10 pt gris pour le libellé, bordure fine ou fond `#F3F4F9`, filet or de 2 pt en haut de chaque carte.
3. **1 à 2 graphiques** qui expliquent les indicateurs.
4. **1 petit tableau** de détail (les 5 plus grosses lignes, ou les retards).
5. **Notes et définitions** en pied de page (9 pt).

### Grille

- Largeur d'environ 12 colonnes de 8 caractères ; chaque carte occupe 3 colonnes (4 cartes) ou 4 colonnes (3 cartes) avec 1 colonne vide de gouttière (ou 1 colonne étroite de 2 caractères).
- Largeurs de colonnes identiques sur toute la page, alignement strict sur les bords gauche et droit.
- Marge : une colonne vide de 2 caractères à gauche et à droite ; une ligne vide de 8 pt au-dessus.
- Pas de fusion : réserver chaque indicateur à une cellule large et utiliser « Centré sur plusieurs colonnes » ou une zone de texte.
- Sens de lecture : de gauche à droite et de haut en bas ; l'indicateur le plus important en haut à gauche.
- Pas de décor : pas d'images, pas de logos multiples, un seul filet or.

Chaque chiffre du tableau de bord est une **formule** qui pointe vers les feuilles de calcul : jamais de valeur recopiée. Ajouter un contrôle de cohérence (voir la fiche `comp-excel-budget-et-suivi`).

## 12. Erreurs fréquentes

| Défaut | Conséquence | Correction |
|---|---|---|
| Cellules fusionnées au milieu des données | Tri impossible, formules recopiées cassées | Défusionner, répéter la valeur ou utiliser un retrait |
| Lignes vides pour « aérer » | Filtre et tableaux croisés coupés | Hauteur de ligne ou aucune |
| Totaux saisis à la main | Chiffres faux après modification | `SUM`/`SOMME` |
| Nombres stockés comme du texte (alignés à gauche, petit triangle vert) | Total faux | Reconvertir en nombre, format de colonne |
| Dates en texte (`12.07.26`) | Tris faux, calculs impossibles | Vraie date, format `dd/mm/yyyy` |
| Couleurs partout | Rien ne ressort | Palette de 3 couleurs |
| Quadrillage cellule par cellule | Aspect de grille de comptabilité du siècle dernier | Filets horizontaux fins ou zébrures |
| Colonnes trop étroites (`#####`) | Valeur illisible | Élargir ou réduire le corps |
| Texte coupé dans une cellule voisine | Information tronquée | Retour à la ligne automatique, largeur adaptée |
| Plusieurs polices et corps | Aspect négligé | Une seule police, corps hiérarchisés |
| Pas de figeage de volets | On perd les en-têtes au défilement | Figer la ligne d'en-têtes |
| Impression sur 7 pages mal découpées | Colonnes isolées | Ajuster à 1 page en largeur, répéter les titres |
| Graphique 3D, camembert à 9 parts | Données illisibles | Barres 2D triées |
| Constantes écrites dans les formules (`*0,055`) | Impossible à mettre à jour | Cellule nommée dans Paramètres |
| Données personnelles de mineurs dans un classeur partagé | Risque pour les jeunes et les familles | Limiter aux colonnes utiles, protéger, ne pas envoyer sans nécessité |

## Avec les outils de ScoutHub

Excel dans ScoutHub est **GridCraft**. ChatGDB dispose de deux voies complémentaires.

### Créer les données : l'action « classeur »

L'action `classeur` crée ou remplace un classeur en un seul appel : `feuilles` = `[{nom, lignes: [[cellules…]…], largeurs?: [caractères par colonne]}]`, plus `nom` (nom du fichier). Une cellule de texte qui **commence par « = »** est une **formule** (en anglais : `=SUM(B2:B9)`, `=AVERAGE(...)`). Les nombres sont donnés comme de vrais nombres (pas de chaînes avec « € »). L'action `contenu` relit toutes les cellules (valeurs calculées, formules entre accolades). C'est le moyen le plus sûr de poser les données ; on enchaîne ensuite avec les commandes natives pour la mise en forme.

Exemple (extrait) : `feuilles: [{nom: "Budget", largeurs: [34, 12, 14, 14], lignes: [["Poste","Quantité","Prix unitaire (€)","Total (€)"],["Terrain",1,180,"=B2*C2"],["Nourriture",42,6.5,"=B3*C3"],["Total","", "","=SUM(D2:D3)"]]}]`.

### Commandes natives vérifiées

Les identifiants ci-dessous ont été relevés dans la liste de GridCraft ; leurs paramètres sont recopiés tels quels. Les plages sont en notation Excel (`A1:D20`) ; `range?` omis = la sélection active. Les hauteurs de ligne (`home.rowHeight`) s'expriment en `height` (pixels) ou `points`, les largeurs (`home.columnWidth`) en `width` (pixels) ou `chars`. Les marges (`pageLayout.margins`) sont en pouces.

| Besoin | Identifiant | Paramètres |
|---|---|---|
| Saisir une cellule | `cell.set` | `{cell?, input, sheet?, array?}` |
| Saisir un bloc | `range.setValues` | `{range?, values: [[...]], parse?}` (chaînes commençant par `=` = formules ; `parse` par défaut vrai, saisie à l'américaine : `"05.04.2026"` devient une date selon les règles en-US ; mettre `parse: false` pour garder du texte) |
| Sélectionner | `selection.set` | `{range, active?, sheet?}` |
| Gras / italique | `home.bold`, `home.italic` | `{range?, on?}` |
| Police, corps | `home.fontName`, `home.fontSize` | `{range?, name}`, `{range?, size}` |
| Couleur du texte | `home.fontColor` | `{range?, color: "#RRGGBB" \| "auto" \| {theme, tint}}` |
| Couleur de fond | `home.fillColor` | `{range?, color: "#RRGGBB" \| "none" \| {theme, tint}}` |
| Bordures | `home.borders` | `{range?, preset: bottom\|top\|left\|right\|none\|all\|outside\|thickOutside\|thickBottom\|doubleBottom\|topBottom\|topThickBottom\|topDoubleBottom\|insideHorizontal\|insideVertical\|inside…, style?: thin\|medium\|thick\|dashed\|dotted\|double\|hair, color?}` |
| Format complet | `home.formatCells` | `{range?, style: {font?, fill?, borders?, align?, numFmt?, protection?}}` |
| Format de nombre | `home.numberFormat` | `{range?, format: "General"\|"Number"\|"Currency"\|"Accounting"\|"Short Date"\|"Long Date"\|"Time"\|"Percentage"\|"Fraction"\|"Scientific"\|"Text"}` **ou** `{range?, code: "0.00"}` |
| Pourcentage, milliers, décimales | `home.percent`, `home.comma`, `home.increaseDecimal`, `home.decreaseDecimal` | `{range?}` |
| Alignement | `home.alignLeft`, `home.alignCenter`, `home.alignRight`, `home.alignTop`, `home.alignMiddle`, `home.alignBottom` | `{range?}` |
| Retour à la ligne | `home.wrapText` | `{range?, on?}` |
| Retrait | `home.increaseIndent`, `home.decreaseIndent` | `{range?}` |
| Largeur de colonne | `home.columnWidth` | `{sheet?, cols?: "B:D", width (pixels) \| chars}` |
| Hauteur de ligne | `home.rowHeight` | `{sheet?, rows?: "2:5", height (pixels) \| points}` |
| Ajustement automatique | `home.autofitColumnWidth`, `home.autofitRowHeight` | `{sheet?, cols?}`, `{sheet?, rows?}` |
| Style de cellule | `home.cellStyle` | `{range?, name: "Good"\|"Bad"\|"Neutral"\|"Heading 1"\|"Title"\|"Total"\|"Accent1"…\|"Normal"}` |
| Fusion (à éviter dans les données) | `home.mergeCells`, `home.unmergeCells` | `{range?}` |
| Feuille : renommer, couleur d'onglet, ajouter | `sheet.rename`, `sheet.tabColor`, `home.insertSheet` | `{sheet?, name}`, `{sheet?, color}`, `{name?, before?}` |
| Activer une feuille | `sheet.activate` | `{sheet: index \| name}` |
| Figer | `view.freezePanes`, `view.freezeTopRow`, `view.freezeFirstColumn` | `{sheet?, cell?: "B2"}` ; `{sheet?}` |
| Quadrillage / en-têtes | `view.gridlines`, `view.headings` | `{on?}` |
| Zoom | `view.zoom` | `{percent: 10..400}` |
| Filtre | `data.filter`, `data.filterBy`, `data.clearFilter` | `{range?}` ; `{column, values?, blanks?, custom?, top?, aboveAverage?, clear?}` ; `{}` |
| Tri | `data.sort` | `{range?, header?, keys: [{column, order: asc\|desc, by?}], orientation?, matchCase?}` |
| Tableau structuré | `insert.table` | `{range?, header?: true, style?: "TableStyleMedium2", name?}` |
| Options du tableau | `table.totalRow`, `table.bandedRows`, `table.rename`, `table.style`, `table.totalFunction` | `{table?, on?}` ; `{table?, name}` ; `{table?, style}` ; `{table?, column, function: sum\|average\|count\|countNums\|max\|min\|stdDev\|var\|none}` |
| Validation | `data.validation` | `{range?, type: any\|whole\|decimal\|list\|date\|time\|textLength\|custom, operator?: between\|notBetween\|equal\|notEqual\|greater\|less\|greaterOrEqual\|lessOrEqual, formula1, formula2?, ignoreBlank?, dropdown?, inputTitle?, inputMessage?, errorStyle?: stop\|warning\|information…}` |
| Tester une valeur | `data.validate` | `{cell?, input}` → `{ok, message?}` |
| Mise en forme conditionnelle | `home.conditionalFormat` | `{range?, rule: {type: cellIs\|expression\|containsText\|beginsWith\|endsWith\|blanks\|noBlanks\|errors\|noErrors\|duplicate\|unique\|top10\|aboveAverage\|timePeriod\|colorScale\|dataBar\|iconSet, operator?, value?, value2?, formula?, text?, rank?, bottom?, percent?, below?, …}}` |
| Gérer les règles | `home.manageRules`, `home.clearRules` | `{delete?, moveUp?, moveDown?}` ; `{range?}` ou `{sheet: true}` |
| Nom défini | `formulas.defineName` | `{name, refersTo?: "=Paramètres!$B$2", scope?, comment?, …}` |
| Protéger la cellule | `home.lockCell` | `{range?, on?}` |
| Protéger la feuille | `review.protectSheet` | `{password?, formatCells?, formatColumns?, formatRows?, insertRows?, insertColumns?, deleteRows?, deleteColumns?, sort?, autofilter?}` |
| Protéger le classeur | `review.protectWorkbook` | `{on?, password?}` |
| Retirer la protection | `review.unprotectSheet` | `{password?}` |
| Graphique | `insert.chart` | `{range?, type?: column\|bar\|line\|pie\|doughnut\|area\|scatter\|bubble\|radar\|combo\|histogram\|waterfall\|funnel\|treemap\|sunburst\|boxWhisker\|stock, subtype?: clustered\|stacked\|stacked100\|markers, title?, at?, width?, height?}` |
| Propriétés du graphique | `chart.set` | `{chart?, type?, subtype?, title?, legend?: none\|bottom\|top\|left\|right, dataLabels?, gridlines?, dataTable?, …}` |
| Éléments du graphique | `chart.addElement` | `{chart?, element: title\|legend\|dataLabels\|dataTable\|gridlines\|axisTitles\|smooth\|trendline, on?, position?}` |
| Couleurs du graphique | `chart.changeColors`, `chart.formatSelection` | `{chart?, palette: colorful\|monochrome\|accent1..accent6 \| colors: [hex…]}` ; `{chart?, series?, color?}` |
| Déplacer le graphique | `chart.move` | `{chart?, sheet?, at?}` |
| Mini-graphique | `insert.sparkline` | `{range, location, type?: line\|column\|winLoss, markers?}` |
| Orientation, papier | `pageLayout.orientation`, `pageLayout.size` | `{orientation: portrait\|landscape}`, `{paper: A4…}` |
| Marges | `pageLayout.margins` | `{preset?: normal\|wide\|narrow, left?, right?, top?, bottom?, header?, footer?}` (pouces) |
| Zone d'impression | `pageLayout.printArea` | `{range?, clear?}` |
| Titres à répéter | `pageLayout.printTitles` | `{rows?: "1:1", cols?}` |
| Ajuster à la page | `pageLayout.scaleToFit` | `{scale?: 100, width?: pages, height?: pages}` |
| Quadrillage imprimé | `pageLayout.printGridlines` | `{on?}` |
| En-tête et pied | `pageLayout.headerFooter` | `{sheet?, header?, footer?, differentFirst?, …}` (codes `&L &C &R &P &N &D`) |
| Sauts de page | `pageLayout.breaks` | `{insert?, remove?, reset?, cell?}` |
| Thème | `pageLayout.theme`, `pageLayout.themeColors`, `pageLayout.themeFonts` | `{name, colors?: [12 hex], majorFont?, minorFont?}` ; `{name \| colors}` ; `{major, minor}` |
| Aperçu / PDF | `file.printPreview`, `file.print` | `{page?, sheets?, range?, fitToPage?}` ; `{path?, sheets?, range?, fitToPage?}` |
| Enregistrer | `file.save`, `file.saveAs`, `file.exportCsv` | `{path?}` ; `{path}` ; `{path, sheet?, values?}` |
| Commentaire | `review.newComment`, `review.newNote` | `{cell?, text, author?}` |

**Limites connues à dire honnêtement** : la liste de GridCraft présente, pour `home.conditionalFormat`, `data.validation` et `chart.set`, des paramètres supplémentaires (couleurs des barres, ensembles d'icônes, style de la règle, titres d'axes) que la liste synthétique ne reproduit pas en entier. Avant d'utiliser ces paramètres, appeler `api_commandes` avec `requete: "conditional"`, `"validation"` ou `"chart"` et lire la ligne complète ; ne jamais inventer un nom de paramètre. Il n'y a pas de commande native pour le choix d'un thème de mise en page de graphique « personnalisé » au-delà de `chart.changeColors` : passer par l'interface si besoin. Les tableaux croisés dynamiques ont leurs commandes (`insert.pivotTable`, `pivot.addField`, `pivot.layout`, `pivot.style`, `pivot.valueSettings`).

### Séquence 1. Tableau formaté (données, en-tête bleu nuit, formats, zébrures par tableau structuré)

Après un appel `classeur` qui a posé la feuille `Dépenses` (en-têtes en ligne 1 : Date, Poste, Libellé, Montant ; 12 lignes de données A2:D13) :

```json
{"action": "api_lot", "commandes": [
 {"commande": "sheet.activate", "parametres": {"sheet": "Dépenses"}},
 {"commande": "home.fontName", "parametres": {"range": "A1:D13", "name": "Calibri"}},
 {"commande": "home.fontSize", "parametres": {"range": "A1:D13", "size": 11}},
 {"commande": "home.fontColor", "parametres": {"range": "A2:D13", "color": "#12142b"}},
 {"commande": "home.fillColor", "parametres": {"range": "A1:D1", "color": "#000761"}},
 {"commande": "home.fontColor", "parametres": {"range": "A1:D1", "color": "#FFFFFF"}},
 {"commande": "home.bold", "parametres": {"range": "A1:D1", "on": true}},
 {"commande": "home.alignLeft", "parametres": {"range": "A1:C13"}},
 {"commande": "home.alignRight", "parametres": {"range": "D1:D13"}},
 {"commande": "home.alignMiddle", "parametres": {"range": "A1:D13"}},
 {"commande": "home.numberFormat", "parametres": {"range": "A2:A13", "code": "dd/mm/yyyy"}},
 {"commande": "home.numberFormat", "parametres": {"range": "D2:D13", "code": "#,##0.00 \"€\""}},
 {"commande": "home.columnWidth", "parametres": {"cols": "A:A", "chars": 12}},
 {"commande": "home.columnWidth", "parametres": {"cols": "B:B", "chars": 18}},
 {"commande": "home.columnWidth", "parametres": {"cols": "C:C", "chars": 38}},
 {"commande": "home.columnWidth", "parametres": {"cols": "D:D", "chars": 14}},
 {"commande": "home.rowHeight", "parametres": {"rows": "1:1", "points": 24}},
 {"commande": "home.rowHeight", "parametres": {"rows": "2:13", "points": 18}},
 {"commande": "home.borders", "parametres": {"range": "A2:D13", "preset": "insideHorizontal", "style": "hair", "color": "#D9DBE6"}},
 {"commande": "view.gridlines", "parametres": {"on": false}}
]}
```

Variante avec zébrures automatiques : remplacer les lignes de fond par `{"commande": "insert.table", "parametres": {"range": "A1:D13", "header": true, "style": "TableStyleMedium2", "name": "T_Depenses"}}` puis `{"commande": "table.bandedRows", "parametres": {"on": true}}`, et enfin recolorer l'en-tête comme ci-dessus si le style ne rend pas le bleu nuit de la fédération.

### Séquence 2. En-tête figé et filtre

```json
{"action": "api_lot", "commandes": [
 {"commande": "sheet.activate", "parametres": {"sheet": "Inscrits"}},
 {"commande": "view.freezePanes", "parametres": {"sheet": "Inscrits", "cell": "C2"}},
 {"commande": "selection.set", "parametres": {"range": "A1:H60"}},
 {"commande": "data.filter", "parametres": {"range": "A1:H60"}},
 {"commande": "data.sort", "parametres": {"range": "A1:H60", "header": true,
    "keys": [{"column": "C", "order": "asc"}, {"column": "A", "order": "asc"}]}}
]}
```

`cell: "C2"` fige la ligne 1 et les colonnes A et B (par exemple Nom et Prénom). Pour seulement la ligne d'en-têtes, utiliser `view.freezeTopRow`. Pour filtrer ensuite sur les non-payés : `{"commande": "data.filterBy", "parametres": {"column": "G", "values": ["Non"]}}`.

### Séquence 3. Mise en forme conditionnelle (seuil, barres, statut)

```json
{"action": "api_lot", "commandes": [
 {"commande": "home.clearRules", "parametres": {"range": "D2:F13"}},
 {"commande": "home.conditionalFormat", "parametres": {"range": "F2:F13",
    "rule": {"type": "cellIs", "operator": "greaterThan", "value": 0}}},
 {"commande": "home.conditionalFormat", "parametres": {"range": "D2:D13",
    "rule": {"type": "dataBar"}}},
 {"commande": "home.conditionalFormat", "parametres": {"range": "A2:G13",
    "rule": {"type": "expression", "formula": "=$G2=\"Non payé\""}}}
]}
```

Les valeurs de `operator` (`greaterThan`, `lessThan`, `between`…) et le style de la règle (fond `#FBE5E5`, texte `#A32020`) se vérifient par `api_commandes` avec `requete: "conditional"` : lire la ligne complète avant d'utiliser une clé de style. Lire aussi le résultat de `home.manageRules` pour confirmer les règles posées.

### Séquence 4. Graphique (comparer le prévu et le réalisé)

Feuille `Budget`, plage `A1:C8` : A = postes, B = Prévu, C = Réalisé.

```json
{"action": "api_lot", "commandes": [
 {"commande": "sheet.activate", "parametres": {"sheet": "Budget"}},
 {"commande": "insert.chart", "parametres": {"range": "A1:C8", "type": "column", "subtype": "clustered",
    "title": "Les dépenses réelles dépassent le prévu sur le transport", "at": "E2", "width": 480, "height": 260}},
 {"commande": "chart.set", "parametres": {"legend": "top", "dataLabels": false, "gridlines": true}},
 {"commande": "chart.changeColors", "parametres": {"colors": ["#000761", "#c6a24e"]}},
 {"commande": "chart.addElement", "parametres": {"element": "axisTitles", "on": false}}
]}
```

Le titre énonce le message ; les deux séries sont en bleu nuit et or ; la légende est en haut. Pour un classement de postes, remplacer par `"type": "bar"` après avoir trié les données. Pour un mini-graphique par ligne : `{"commande": "insert.sparkline", "parametres": {"range": "B2:M2", "location": "N2", "type": "line"}}`.

### Séquence 5. Mise en page d'impression

```json
{"action": "api_lot", "commandes": [
 {"commande": "sheet.activate", "parametres": {"sheet": "Budget"}},
 {"commande": "pageLayout.size", "parametres": {"paper": "A4"}},
 {"commande": "pageLayout.orientation", "parametres": {"orientation": "landscape"}},
 {"commande": "pageLayout.margins", "parametres": {"left": 0.7, "right": 0.7, "top": 0.75, "bottom": 0.75, "header": 0.3, "footer": 0.3}},
 {"commande": "pageLayout.printArea", "parametres": {"range": "A1:G40"}},
 {"commande": "pageLayout.printTitles", "parametres": {"rows": "1:3"}},
 {"commande": "pageLayout.scaleToFit", "parametres": {"width": 1, "height": 0}},
 {"commande": "pageLayout.printGridlines", "parametres": {"on": false}},
 {"commande": "pageLayout.headerFooter", "parametres": {"sheet": "Budget",
    "header": "&LFSGGB, groupe Saint-Louis&C&\"-,Bold\"Budget du camp d'été 2026&R&D",
    "footer": "&CPage &P sur &N"}},
 {"commande": "file.printPreview", "parametres": {"sheets": "active"}}
]}
```

Vérifier la réponse de `file.printPreview` : `pages` et `pageList` (échelle, orientation, plage par page). `height: 0` signifie hauteur libre dans l'interface d'Excel ; si la valeur est refusée, répéter sans le paramètre `height`. Les `&"-,Bold"` d'une police d'en-tête sont une syntaxe d'Excel : à défaut, laisser le titre en texte simple.

### Séquence 6. Validation de données (liste déroulante, entier, date)

```json
{"action": "api_lot", "commandes": [
 {"commande": "data.validation", "parametres": {"range": "F2:F60", "type": "list", "formula1": "\"Oui,Non\"",
    "dropdown": true, "inputTitle": "Payé ?", "inputMessage": "Choisir Oui ou Non.", "errorStyle": "stop"}},
 {"commande": "data.validation", "parametres": {"range": "C2:C60", "type": "list", "formula1": "=Paramètres!$B$2:$B$6",
    "dropdown": true, "errorStyle": "stop"}},
 {"commande": "data.validation", "parametres": {"range": "E2:E60", "type": "whole", "operator": "between",
    "formula1": "0", "formula2": "9999", "errorStyle": "stop"}},
 {"commande": "data.validation", "parametres": {"range": "B2:B60", "type": "date", "operator": "between",
    "formula1": "=DATE(2026,1,1)", "formula2": "=DATE(2027,12,31)", "errorStyle": "warning"}},
 {"commande": "data.validate", "parametres": {"cell": "F2", "input": "Peut-être"}}
]}
```

La dernière commande teste une saisie : attendre `ok: false`. Si une formule de liste est refusée sous cette forme, relire la ligne complète de `data.validation` avec `api_commandes`.

### Séquence 7 (bonus). Protéger : verrouiller le calcul, laisser la saisie

```json
{"action": "api_lot", "commandes": [
 {"commande": "home.lockCell", "parametres": {"range": "A1:H60", "on": true}},
 {"commande": "home.lockCell", "parametres": {"range": "B2:C60", "on": false}},
 {"commande": "review.protectSheet", "parametres": {"sort": true, "autofilter": true}}
]}
```

Sans mot de passe, la protection prévient les fausses manœuvres sans bloquer personne. Pour retirer : `review.unprotectSheet` avec `{}`.

### Déroulé complet conseillé pour ChatGDB

1. Ouvrir Excel ; `api_inspecter` ; si aucun classeur, `file.new` (ou l'action `classeur`).
2. Poser les données et formules avec `classeur` (feuilles `Saisie`, `Paramètres`, `Budget`…), vérifier avec `contenu`.
3. Appliquer la mise en forme par `api_lot` (séquences 1 à 3), toujours **par plage entière** et **dans l'ordre** : police, couleurs, alignements, formats, largeurs, hauteurs, bordures.
4. Ajouter validation, protection, graphiques, impression (séquences 4 à 7).
5. Contrôler : `ui.screenshot` ou `ui.render` par `api_requete`, `file.printPreview`, relire `contenu`.
6. Enregistrer (`file.save`) ; la carte « Ouvrir / Télécharger » reste dans la conversation.

## Particularités dans le navigateur (ScoutHub) : à lire avant d'exécuter une séquence
Les séquences `api_lot` de cette fiche ont été **exécutées sur l'application réelle** pour en vérifier les paramètres ; elles supposent le contexte indiqué dans leur titre. Dans le navigateur :
- **Pas de chemins de fichiers.** Les commandes qui prennent un `path` pour LIRE un fichier (`insert.picture` avec `path`, ouverture de fichiers) répondent « files are opened through the browser on the web ». Pour une image, la personne l'insère par l'interface (Insertion ▸ Image) ou la commande reçoit `data` (image en base64) quand l'application l'accepte. Ne jamais inventer un chemin comme `/chemin/image.jpg`.
- **Enregistrer** = l'action `enregistrer` de ChatGDB (jamais `file.save` avec un chemin : « saving to a path is not available in the browser »). Le document est alors gardé dans la conversation et la personne le retrouve sous ta réponse avec les boutons « Ouvrir » et « Télécharger ».
- **Export PDF** : `file.exportPdf` fonctionne dans Word et Excel (le PDF est ajouté sous ta réponse avec un bouton « Télécharger ») ; PowerPoint n'exporte pas de PDF par commande dans le navigateur (`file.export` exige un chemin) : demander à la personne Fichier ▸ Exporter, ou livrer le .pptx.
- **Identifiants** : une séquence qui écrit `ID_…` ou `Nom de feuille` en majuscules est un **modèle** : remplace par la valeur réelle lue avec `api_inspecter` / `slide.inspect` avant d'exécuter. Une feuille Excel ou une diapositive citée doit exister (crée-la d'abord avec « classeur » ou `home.insertSheet`).

## Liste de contrôle avant de livrer

- [ ] Une ligne = un enregistrement ; une seule ligne d'en-têtes ; aucune cellule fusionnée ni ligne vide dans les données.
- [ ] Saisie, paramètres, calculs et présentation sont séparés ; chaque constante est dans Paramètres (nommée).
- [ ] Chaque total est une formule ; aucune valeur recopiée ; un contrôle de cohérence est visible.
- [ ] Les noms de feuilles sont courts, parlants, sans caractère interdit ; l'ordre des onglets est logique.
- [ ] Les nombres sont de vrais nombres (alignés à droite) ; les dates de vraies dates au format `jj/mm/aaaa`.
- [ ] Les montants ont 2 décimales (0 dans les synthèses), le symbole € après le nombre, les milliers séparés.
- [ ] Le même nombre de décimales dans toute une colonne ; les arrondis sont faits dans la formule quand c'est nécessaire.
- [ ] Alignements : nombres à droite, texte à gauche, dates et codes centrés, en-têtes alignés comme leur colonne.
- [ ] Une seule police, corps 11 pt (16 à 18 pt pour le titre), pas de MAJUSCULES sur des lignes entières.
- [ ] En-têtes bleu nuit `#000761` texte blanc ; lignes à 18 pt ; zébrures `#F3F4F9` seulement au-delà de 6 colonnes ; totaux avec filet supérieur et gras.
- [ ] Bordures minimales : pas de quadrillage cellule par cellule ; pas de cadre épais.
- [ ] Les largeurs de colonnes évitent `#####` et le texte coupé ; aucune colonne ne dépasse la moitié de la page.
- [ ] Volets figés, filtre posé, tri sur tout le tableau.
- [ ] Les colonnes de saisie ont une validation (liste, nombre, date) avec message utile.
- [ ] La mise en forme conditionnelle est limitée (2 à 3 règles), en teintes douces, doublée d'un mot ou d'un symbole.
- [ ] Cellules de calcul verrouillées, feuille protégée (sans mot de passe sauf demande), saisies déverrouillées.
- [ ] Graphiques : titre qui énonce le message, aucune 3D, axe à zéro, 2 à 4 couleurs, pas de camembert au-delà de 3 parts, source indiquée.
- [ ] Tableau de bord : 3 à 5 indicateurs, une page, aucune valeur saisie.
- [ ] Impression : A4, orientation adaptée, une page en largeur, titres répétés, pied « Page n sur N », aperçu vérifié.
- [ ] Aucune donnée personnelle superflue (mineurs) ; fichier relu avec `contenu` et capture avant envoi.

## Questions auxquelles la fiche répond

- Comment organiser un tableau Excel pour qu'il soit trié, filtré et calculé sans erreur ?
- Quel format de nombre utiliser pour des euros, des pourcentages, des dates françaises, des durées ?
- Quelles couleurs, quelles bordures et quelle police pour un tableau sobre aux couleurs de la fédération ?
- Comment figer les en-têtes, filtrer et trier proprement ?
- Comment créer des listes déroulantes et empêcher les saisies erronées ?
- Comment faire une mise en forme conditionnelle élégante (barres, icônes, seuils) sans surcharger ?
- Quel type de graphique choisir, pourquoi éviter le camembert, et comment le rendre lisible ?
- Comment construire un tableau de bord d'une page avec 3 à 5 indicateurs ?
- Comment préparer l'impression (zone, orientation, ajustement, titres répétés, pied de page) ?
- Quelles commandes natives de GridCraft utiliser, avec quels paramètres, dans un `api_lot` ?
- Comment créer d'abord les données avec l'action « classeur » puis les mettre en forme ?
