---
id: comp-photo-retouche-et-export
titre: Photo - tri, cadrage, retouche non destructive, export et droit à l'image
theme: Compétences
type: synthese
sources:
  - titre: Pratique professionnelle de la retouche photographique et du flux de travail numérique (cadrage, histogramme, gestion des couleurs sRGB)
  - titre: Code civil, article 9 (droit au respect de la vie privée et à l'image) et RGPD, règles générales sur les données personnelles et les mineurs
mots_cles: photo, retouche, Photoshop, Lightroom, tri, notation, cadrage, règle des tiers, ratio 3:2, 4:5, 16:9, 1:1, redressement, exposition, contraste, balance des blancs, saturation, netteté, réduction du bruit, calques, masques, non destructif, portrait, détourage, ombre portée, résolution, ppp, JPEG, PNG, WebP, TIFF, sRGB, poids du fichier, nommage, droit à l'image, autorisation parentale, mineurs, export
liens: app-photoshop, app-lightroom, app-illustrator, comp-vectoriel-et-pao, comp-pdf-export-accessibilite, comp-mise-en-page-principes, comp-couleur-et-identite-fsggb, comp-affiche-flyer-invitation, suite-craft-mcp
resume: Savoir-faire complet pour passer de photos brutes de camp à des images propres, justes et légères, prêtes pour le web, le courriel ou l'impression, avec valeurs chiffrées (ratios, ppp, poids, netteté, bruit), méthode non destructive et règles de droit à l'image des mineurs. Répond aux demandes « retouche cette photo », « quelle taille pour l'affiche », « comment envoyer 40 photos par courriel », « puis-je publier cette photo d'enfants ».
---

## L'idée directrice

Une bonne photo de fédération n'est pas une photo spectaculaire : c'est une image **lisible, fidèle, sobre et respectueuse**. La retouche sert à retrouver ce que l'œil a vu au camp (la lumière du soir, la couleur des foulards, le sourire d'un louveteau), jamais à fabriquer un décor ou à transformer des visages. Quatre principes gouvernent toute la fiche :

1. **Sélectionner avant de retoucher.** Dix photos justes valent mieux que quarante moyennes. Le tri est la retouche la plus efficace.
2. **Ne jamais détruire l'original.** On travaille sur une copie ou avec des réglages et des calques réversibles ; le fichier d'origine reste intact dans un dossier « Originaux » en lecture seule.
3. **Mesurer, ne pas deviner.** Histogramme, pipette de couleur, valeurs numériques : une modification se décide sur un chiffre, pas sur l'impression d'un écran mal calibré.
4. **Exporter pour l'usage.** Une même photo n'a pas le même poids ni les mêmes dimensions pour un courriel, un site, une affiche A3 ou un livre de camp.

Pour la mise en page qui accueillera ces images, voir la fiche comp-mise-en-page-principes ; pour les couleurs de la fédération, comp-couleur-et-identite-fsggb ; pour l'export final en PDF, comp-pdf-export-accessibilite.

## 1. Tri, notation et classement

### Procédure de tri en trois passes

| Passe | Objectif | Critère | Résultat attendu |
|---|---|---|---|
| 1. Écrémage | Éliminer l'inutilisable | Flou de bougé, yeux fermés sur le sujet, cadrage raté, doublons, photos de pieds ou de sol | 30 à 50 % des prises supprimées |
| 2. Sélection | Garder les meilleures de chaque série | Une seule photo par scène ; garder celle où l'expression, la lumière et la netteté sont les meilleures | 1 photo sur 3 à 5 conservée |
| 3. Hiérarchie | Choisir les photos de couverture | Impact, lisibilité en petit, cadrage compatible avec le format voulu | 5 à 10 photos « phares » par camp |

Règle d'or : on trie à l'écran en **plein cadre** puis en **vignette** ; une photo qui ne se lit pas en vignette de 3 cm ne fonctionnera pas sur une affiche ni sur un site.

### Notation (étoiles et drapeaux)

| Note | Sens | Usage |
|---|---|---|
| 0 | Non trié | État initial |
| 1 étoile | Archive acceptable | Garder pour mémoire, ne pas publier |
| 2 étoiles | Correct | Possible dans un album complet |
| 3 étoiles | Bon | À retoucher pour l'album du camp |
| 4 étoiles | Très bon | Publication (site, lettre aux parents) |
| 5 étoiles | Exceptionnel | Couverture, affiche, rapport d'activité |
| Drapeau rouge | Rejeté | À supprimer à la fin du tri |
| Étiquette de couleur rouge | Droit à l'image à vérifier | Ne pas diffuser tant que l'autorisation n'est pas confirmée |

Cette dernière étiquette est une habitude à prendre : tout enfant dont l'autorisation manque est signalé **dès le tri**, avant qu'une photo ne parte par erreur.

### Mots-clés utiles dans Lightroom

Un mot-clé par ligne : nom du camp (« Camp d'été 2026 »), unité (« Louveteaux », « Éclaireurs »), activité (« feu de camp », « froissartage », « messe »), lieu. **Jamais le nom complet d'un mineur dans les mots-clés** si le catalogue est partagé : on utilise l'unité et la patrouille.

## 2. Cadrage et recadrage

### Ratios courants

| Usage | Ratio | Dimensions en pixels (référence) | Remarque |
|---|---|---|---|
| Photo d'appareil | 3:2 | 6000 × 4000 | Ratio natif de la plupart des reflex et hybrides |
| Instagram portrait, réseaux | 4:5 | 1080 × 1350 | Occupe le plus de place dans un fil |
| Carré, avatar, vignette | 1:1 | 1080 × 1080 | Sujet centré, respiration de 10 % autour |
| Écran, vidéo, diaporama | 16:9 | 1920 × 1080 | Bandeau de site, diapositive |
| Page A4 portrait pleine | 1:1,414 | 2480 × 3508 à 300 ppp | Voir le tableau de résolutions |
| Affiche A3 | 1:1,414 | 3508 × 4961 à 300 ppp | 150 ppp acceptable à distance |
| Carte postale, 10 × 15 cm | 2:3 | 1181 × 1772 à 300 ppp | Retirage papier |

On recadre **toujours dans l'outil non destructif** (outil Recadrage de Lightroom ou de Photoshop avec l'option « Supprimer les pixels recadrés » décochée) afin de pouvoir rouvrir le cadrage.

### La règle des tiers

Diviser l'image en trois tiers horizontaux et verticaux ; placer le sujet principal (un visage, un feu, un fanion) sur une ligne ou une intersection, pas au centre. Raison : un sujet décalé crée de la tension et laisse de l'espace de regard. Valeurs pratiques :

- Un visage : les yeux sur la ligne du tiers supérieur (environ 33 % depuis le haut).
- Un paysage : l'horizon sur la ligne du tiers inférieur (ciel expressif) ou supérieur (premier plan expressif). **Jamais à 50 %.**
- Un sujet qui regarde ou qui marche : laisser plus d'espace **devant** lui que derrière (ratio 2:1 environ).

### Lignes et composition

- **Lignes directrices** : un chemin, une rangée de tentes, une corde guident l'œil vers le sujet.
- **Cadrage dans le cadre** : une porte de tente, un arbre ouvrent une fenêtre sur le sujet.
- **Pas de membre coupé aux articulations** (cheville, genou, poignet, coude) ; couper à mi-cuisse ou mi-mollet.
- **Marge de tête** : environ 5 à 10 % de la hauteur au-dessus du crâne ; ni tête collée au bord, ni vide excessif.
- **Éviter** les fils, poteaux, branches qui « sortent » de la tête, les poubelles, les voitures dans le fond.

### Redressement

L'horizon ou une verticale (mât, tente, bâtiment) doivent être d'aplomb. Corriger avec l'outil Angle : tracer une ligne le long de l'horizon, appliquer. Un redressement de plus de 3° coûte du cadre : prévoir un recadrage de 5 à 8 %. Pour les photos de bâtiments (église, gîte), appliquer ensuite la correction de perspective « Vertical » à 30–60 % ; une correction à 100 % étire les bords et fausse les proportions.

## 3. Exposition, contraste et balance des blancs

### Lire l'histogramme

L'histogramme est un graphique de la répartition des tons, du noir (à gauche, valeur 0) au blanc (à droite, valeur 255). Une photo bien exposée :

- ne **colle pas** au bord gauche (noirs bouchés) ni au bord droit (blancs brûlés), sauf sujet volontairement sombre ou clair (neige) ;
- a un **sommet** (la masse des tons) dans la zone médiane pour une scène ordinaire, décalé à droite pour un sujet clair ;
- a de la place des deux côtés : quelques pixels à 5 et à 250 suffisent à donner du contraste.

Activer les **avertissements d'écrêtage** (touche J dans Lightroom) : rouge pour les hautes lumières brûlées, bleu pour les noirs bouchés. Un petit point d'éclat sur un reflet est toléré ; une zone de ciel entière en rouge ne l'est pas.

### Ordre des réglages (Lightroom, onglet Développement)

| Ordre | Curseur | Plage de réglage courante | Remarque |
|---|---|---|---|
| 1 | Balance des blancs | ± 300 K, teinte ± 10 | Voir plus bas |
| 2 | Exposition | ± 0,7 IL | Au-delà de 1 IL, le bruit et les bandes apparaissent |
| 3 | Hautes lumières | − 20 à − 70 | Récupère le ciel, les foulards blancs |
| 4 | Ombres | + 20 à + 60 | Éclaircit les visages dans l'ombre, sans excès (halos au-delà de + 80) |
| 5 | Blancs / Noirs | Blancs + 10 à + 30, Noirs − 10 à − 30 | Fixent le point blanc et le point noir |
| 6 | Contraste | + 5 à + 20 | Un contraste excessif écrase les visages |
| 7 | Clarté | + 0 à + 15 (jamais plus de + 20 sur un portrait) | Accentue les micro-contrastes ; durcit les rides |
| 8 | Correction d'objectif | Cocher « Supprimer l'aberration chromatique » et « Activer les corrections de profil » | Corrige vignettage et déformation |

### Balance des blancs

1. Chercher dans l'image une zone **neutre** (carton gris, mur blanc, chemise blanche à l'ombre, galets gris) et cliquer dessus avec la pipette de balance des blancs.
2. Vérifier : sur une zone neutre, les valeurs R, V, B doivent être proches (écart ≤ 3 % entre canaux).
3. Réglages de départ : lumière du jour 5 200–5 600 K ; ombre ouverte 7 000 K ; ciel couvert 6 500 K ; tungstène 2 800–3 200 K ; feu de camp : **ne pas tout neutraliser**, garder la chaleur (4 000–4 500 K), sinon l'ambiance disparaît.
4. **Cas particulier** : sous la lumière des tentes colorées (tentes vertes, bâches bleues), les peaux deviennent verdâtres ou bleuâtres ; corriger avec la teinte (+ 5 à + 15 vers le magenta) plutôt qu'avec la température.

### Couleurs et saturation mesurées

- Préférer **Vibrance** à Saturation : la vibrance protège les peaux. Vibrance + 10 à + 25 ; Saturation entre − 5 et + 10.
- Les peaux : sur un visage éclairé, la valeur R doit dépasser V, et V dépasser B (R > V > B) ; ordre de grandeur pour une peau claire, R 210–235, V 165–195, B 140–170. Une peau dont V dépasse R est verdâtre.
- Le bleu nuit `#000761` et l'or `#c6a24e` de l'identité FSGGB ne se retrouvent pas dans la nature : ne pas « corriger » une photo pour les imiter. On harmonise plutôt **autour** de la photo (fonds, titres) avec la fiche comp-couleur-et-identite-fsggb.
- Une photo trop saturée se reconnaît à la **perte de détail** dans les verts et les rouges (aplats sans texture) : réduire.

## 4. Netteté et réduction du bruit

### Netteté (à appliquer en dernier, à la taille de sortie)

| Usage | Méthode | Valeurs |
|---|---|---|
| Lightroom, onglet Détail | Gain / Rayon / Détail / Masquage | 40–60 / 0,8–1,2 / 25 / 30–50 (masquage avec Alt pour n'accentuer que les bords) |
| Photoshop, Accentuation (Unsharp Mask) | Gain / Rayon / Seuil | Web : 80–120 % / 0,5–0,8 px / 2–4 ; impression 300 ppp : 100–150 % / 1,0–1,5 px / 2–4 |
| Photoshop, Netteté optimisée | Gain / Rayon / Réduire le bruit | 80–150 % / 0,5–1,0 px / 10–30 % |
| Export Lightroom | Netteté à la sortie | Écran : Standard ; papier mat : Standard ; papier brillant : Faible |

Règle : **l'excès de netteté se voit** (halos clairs autour des contours). On vérifie à 100 % d'affichage ; en cas de halo, réduire de 30 %.

### Réduction du bruit

Le bruit apparaît avec les ISO élevés (3 200 et au-delà) et les ombres relevées.

| ISO | Luminance | Couleur | Détail de luminance |
|---|---|---|---|
| ≤ 800 | 0–10 | 25 | 50 |
| 1 600 | 10–20 | 25 | 50 |
| 3 200 | 20–35 | 25–35 | 50 |
| 6 400 et plus | 35–50, ou module de réduction du bruit par IA | 35 | 50 |

Sur un portrait, ne pas dépasser Luminance 40 : au-delà, la peau devient plastique. Si l'image doit être très réduite pour le web, le bruit disparaît de lui-même ; ne pas sur-traiter.

## 5. Retouches non destructives dans Photoshop

### Les principes

- **Calques de réglage** (Courbes, Niveaux, Teinte/Saturation, Balance des couleurs) plutôt que des corrections directes sur les pixels.
- **Masques de calque** (blanc : l'effet est visible ; noir : caché) pour limiter un réglage à une zone, avec un pinceau doux à dureté 0–20 %.
- **Objets dynamiques** (« Convertir en objet dynamique ») pour les filtres, afin de pouvoir les réajuster.
- **Calque tampon** : pour retoucher les pixels, créer un calque vide au-dessus et cocher « Échantillonner tous les calques ».
- **Duplication avant toute chose** : enregistrer un PSD de travail avec les calques, puis exporter une copie aplatie.

### Pile de calques type

| Position | Calque | Rôle |
|---|---|---|
| Haut | Accentuation (copie fusionnée, filtre passe-haut ou netteté) | Dernière étape |
| | Courbe douce de contraste | Ajustement global |
| | Teinte/Saturation (masque) | Couleurs locales |
| | Retouche (calque vide) | Taches, fils, boutons |
| | Dodge & Burn (calque gris 50 % en mode Incrustation) | Modeler lumières et ombres |
| Bas | Original (objet dynamique ou arrière-plan) | Intact |

### Retouches de nettoyage

1. **Correcteur localisé** (pinceau de correction) pour les petites taches, avec Dureté 100 %, taille légèrement supérieure à la tache.
2. **Tampon de duplication** pour les éléments plus grands (cordes, câbles, poubelle) : source à proximité, opacité 100 %, écoulement 60–100 %.
3. **Remplissage selon le contenu** pour supprimer un objet de fond ; toujours **vérifier à 100 %** les répétitions de motif.
4. Supprimer : fils électriques, mégots, déchets, objets de marque dans le fond. **Ne pas supprimer** une personne réelle d'un groupe : ce serait un trucage de ce qui s'est passé.

## 6. Retouche de portrait respectueuse

C'est la règle la plus importante de cette fiche : **la photo d'un enfant ou d'un jeune est retouchée avec retenue.**

| À faire | À éviter |
|---|---|
| Équilibrer l'exposition du visage (ombres + 20 à + 40) | Modifier la forme du visage, du nez, des yeux (outil Fluidité) |
| Corriger une couleur de peau fade ou verdâtre | Lisser la peau jusqu'à effacer la texture |
| Atténuer un bouton ou une tache **temporaire** (coup de soleil, piqûre) | Effacer cicatrices, grains de beauté, taches de rousseur : ils font partie de la personne |
| Éclaircir légèrement le blanc des yeux (+ 5 à + 10 % maximum) | Blanchir les dents, agrandir les yeux |
| Récupérer le détail du regard par une netteté locale (masque, rayon 0,8 px) | Appliquer un « filtre beauté » ou un flou global |
| Garder la texture : si on atténue, opacité 30–50 % du calque de correction | Modifier le corps (silhouette, taille, poids) |

Cas particuliers : si un enfant demande qu'on ne le voie pas, on le recadre ou on écarte la photo ; on ne le « retire » pas de l'image. Les lunettes, appareils dentaires, vêtements usés ne sont **jamais** retouchés.

## 7. Composition de visuels : fonds, détourage, ombres

Pour un affiche ou un diaporama on peut isoler un objet (un fanion, une marmite, un nœud) ou un sujet.

### Détourage propre

1. Sélection rapide (outil Sélection d'objet) ou « Sélectionner le sujet », puis affiner le bord : rayon d'affinage 0,5–1,5 px, lissage 2–5, contour progressif 0,3–0,5 px, décontaminer les couleurs coché.
2. Sortir **sur un masque de calque**, pas en effaçant les pixels. Le masque peut être retouché ensuite.
3. Vérifier le détourage sur trois fonds : blanc, noir, fond final. Les liserés clairs ou sombres se voient sur le fond opposé.
4. Pour des cheveux ou un feuillage, utiliser le masque par couleur et un pinceau à faible dureté ; ne pas tout lisser.

### Fonds

- **Fond uni** : bleu nuit `#000761` ou blanc cassé `#fafafc` selon l'identité ; un fond uni demande un détourage impeccable.
- **Fond photo** : appliquer un flou gaussien de 8 à 20 px (selon la taille du fichier) pour reculer le fond ; garder la même direction de lumière.
- **Fond dégradé** : discret (deux tons voisins), jamais saturé.

### Ombres

Une ombre crédible a toujours la même direction que la lumière de la scène. Valeurs de départ pour une ombre portée douce : opacité 25–40 %, distance 8–20 px, flou 20–40 px, angle de 120° (lumière en haut à gauche), couleur bleu nuit `#000761` à faible opacité ou noir à 30 %. Une ombre noire dure à 100 % se voit comme un collage.

## 8. Résolutions et dimensions en pixels

La **résolution** (ppp, pixels par pouce) n'a de sens qu'avec la **taille physique** de sortie. Formule : pixels = taille en pouces × ppp (1 pouce = 25,4 mm).

| Usage | Résolution | Dimensions typiques | Poids cible |
|---|---|---|---|
| Écran et web | 72 à 96 ppp (sans importance : seul le nombre de pixels compte) | 1 600 à 2 000 px (bord long) | 200 à 500 Ko |
| Diaporama (16:9) | — | 1 920 × 1 080 | 300 à 700 Ko |
| Réseaux, partage rapide | — | 1 080 px de large | 150 à 300 Ko |
| Impression bureautique (A4) | 150 ppp | 1 240 × 1 754 | 600 Ko à 1 Mo |
| Impression qualité (A4) | 300 ppp | 2 480 × 3 508 | 1,5 à 4 Mo |
| Affiche A3 | 150 à 200 ppp | 1 754 × 2 480 à 2 339 × 3 307 | 2 à 6 Mo |
| Affiche A3 qualité | 300 ppp | 3 508 × 4 961 | 4 à 10 Mo |
| Grand format (bâche, banderole) | 50 à 100 ppp (observée de loin) | selon la taille | dépend |
| Retirage 10 × 15 cm | 300 ppp | 1 181 × 1 772 | 1 à 2 Mo |

Règles : **ne jamais agrandir** une photo au-delà de 120 % de ses pixels (l'interpolation invente du flou). Mieux vaut moins de ppp qu'une image agrandie : 150 ppp réels sont meilleurs qu'un 300 ppp interpolé. Pour un grand format, on n'a pas besoin de plus de 100 ppp réels.

## 9. Formats de fichier et profils

| Format | Usage | Réglage | Avantage | Limite |
|---|---|---|---|---|
| JPEG | Photos, courriel, web, impression courante | Qualité 80–90 (web : 80 ; impression : 90–95) | Léger, universel | Perte à chaque réenregistrement |
| PNG | Logos, captures, images à transparence | 24 bits, compression 9 | Sans perte, transparence | Lourd pour des photos |
| WebP | Web moderne | Qualité 75–85 | 25–35 % plus léger que JPEG | Pas lu par tous les outils de bureautique |
| TIFF | Archivage, impression professionnelle | Compression LZW ou ZIP, 8 ou 16 bits | Sans perte, calques | Très lourd (30 à 200 Mo) |
| PSD | Travail en cours | Compatibilité maximisée | Calques, masques | À ne jamais envoyer à un destinataire externe |
| DNG / RAW | Négatifs numériques | — | Toute la dynamique du capteur | Se développe obligatoirement |

### Profil de couleur

- **Travail et diffusion** : sRGB IEC61966-2.1, **toujours** pour le web, le courriel et la bureautique. Un profil plus large (Adobe RGB, Display P3) apparaît terne dans un navigateur qui ne le gère pas.
- **Impression professionnelle** : fournir en sRGB ou en profil demandé par l'imprimeur ; la conversion en CMJN est faite par l'imprimeur ou en dernier lieu (voir comp-vectoriel-et-pao).
- Intégrer le profil dans le fichier exporté (case « Incorporer le profil »).

## 10. Poids pour le web et le courriel

| Contexte | Dimension | Qualité JPEG | Poids par photo | Poids total |
|---|---|---|---|---|
| Courriel (quelques photos) | 1 600 px bord long | 80 | 300–600 Ko | < 10 Mo |
| Courriel aux parents (album) | Lien vers un album en ligne plutôt qu'une pièce jointe | — | — | — |
| Site / ScoutHub | 1 920 px | 80 | < 500 Ko | — |
| Vignette | 400 px | 75 | < 40 Ko | — |
| Pièce jointe Word / PowerPoint | 1 600 px, 150 ppp | 80–85 | 300–500 Ko | document < 10 Mo |

Procédure pour alléger : redimensionner d'abord (la dimension compte plus que la qualité), puis abaisser la qualité par pas de 5, comparer à 100 %, s'arrêter au dernier niveau où le défaut n'est pas visible ; supprimer les métadonnées de géolocalisation (voir section sur le droit à l'image).

## 11. Nommage et classement

### Structure de dossiers

```
Photos/
  2026/
    2026-07-camp-ete-louveteaux/
      01-originaux/        (lecture seule, jamais modifiés)
      02-retouchees/       (versions développées)
      03-export-web/       (1 920 px, JPEG 80)
      04-export-impression/(300 ppp)
      00-autorisations/    (fiches de droit à l'image)
```

### Règles de nommage

- Format : `AAAA-MM-JJ_lieu_sujet_001.jpg`, par exemple `2026-07-18_vezelay_feu-de-camp_014.jpg`.
- Minuscules, chiffres, tirets ; **pas d'espace, pas d'accent, pas de caractère spécial** (`/ \ : * ? " < > |`) dans les noms de fichiers destinés au web ou au partage.
- Date en tête, format ISO (AAAA-MM-JJ) : l'ordre alphabétique est l'ordre chronologique.
- Numéro à trois chiffres pour garder l'ordre.
- Version : suffixe `_v2`, `_final` seulement pour la dernière ; ne pas accumuler `_final_final2`.
- **Pas de nom d'enfant** dans le nom d'un fichier diffusé.

## 12. Droit à l'image, consentement et mineurs

Cette section résume des règles générales ; en cas de doute (publication de photos prises dans un cadre public, diffusion large), consulter le secrétariat de la fédération ou la personne chargée de la protection des données.

### Principes

- Toute personne a un **droit sur son image** (article 9 du Code civil, respect de la vie privée) : l'utilisation d'une photo où elle est **reconnaissable** demande son **autorisation**, qui doit être claire, spécifique et écrite pour un usage donné.
- Pour un **mineur**, l'autorisation est donnée par les **représentants légaux** (parents). On recueille leur accord **avant** la prise de vue ou la diffusion, de préférence à l'inscription.
- Le **RGPD** considère une photo comme une donnée à caractère personnel : finalité précise, durée limitée, droit de retrait à tout moment, information des personnes.

### Contenu d'une autorisation correcte

1. Identité de l'enfant et du signataire (parent ou tuteur) ; coordonnées.
2. **Supports** concernés : site de la fédération, lettre aux parents, publication papier, réseaux sociaux (lister ou refuser).
3. **Durée** d'utilisation (par exemple : l'année scoute en cours ou un nombre d'années précisé).
4. **Droit de retrait** : l'adresse à laquelle écrire ; la photo est retirée des supports sous un délai précisé.
5. Date et signature. Une autorisation par support peut être demandée si la fédération diffuse sur plusieurs canaux.

### Règles de bonne pratique

| À faire | À éviter |
|---|---|
| Vérifier la liste des autorisations **avant** de publier | Publier « d'abord » et retirer ensuite |
| Préférer les plans larges, les dos, les mains, les groupes éloignés | Des gros plans d'enfants identifiables sans autorisation |
| Légender sans nom complet : « Les louveteaux au feu de camp » | Prénom + nom + unité + lieu |
| Retirer les données de géolocalisation (GPS) des fichiers diffusés | Diffuser le lieu exact du camp en temps réel |
| Ne publier **jamais** de photo de baignade, de toilette, de dortoir, de moment intime | Prendre ces photos |
| Conserver les originaux dans un espace à accès restreint | Laisser des dossiers photos en partage libre |
| Supprimer les photos de l'appareil personnel d'un animateur après transfert | Garder des photos d'enfants sur un téléphone personnel |
| Informer les parents des canaux utilisés | Diffuser sur des réseaux sociaux non prévus |

Les photos des **adultes** (chefs, aumônier, bénévoles) demandent aussi une autorisation écrite pour un usage public.

## Avec les outils de ScoutHub

La liste des commandes natives fournies pour Photoshop et Lightroom n'existe pas dans les références disponibles : **pas de commande native vérifiée pour ces deux applications ; passer par l'interface** (outils, panneaux et raccourcis décrits plus haut). Pour les cas où une image est ensuite intégrée à un document vectoriel, les commandes d'Illustrator (VectorCraft) suivantes existent et sont vérifiées :

| Identifiant | Paramètres principaux | Usage |
|---|---|---|
| `file.place` | `path` ou `name` + `dataBase64`, `link?` (garde le chemin du fichier) | Placer une photo dans le document |
| `object.cropImage` | `rect?: [x, y, width, height]`, `trim?: true` | Recadrer l'image sélectionnée (par défaut au plan de travail sur lequel elle se trouve) |
| `links.list`, `links.check` | — | Lister et contrôler les images liées |
| `links.embed` | `ids?` | Incorporer l'image dans le fichier |
| `document.export` | `path?`, `format?: png\|jpg\|webp\|tiff…` | Exporter le document en image |
| `document.exportSelection` | `path?`, `format?`, `ppi?` | Exporter la sélection avec un nombre de pixels par pouce |
| `document.exportForOffice` | `path?`, `ppi?: 150 (72, 150, 300…)`, `transparent?` | Une image PNG pour Word ou PowerPoint |

Dans Word, `picture.altText` (`{"text", "title"?, "decorative"?}`) ajoute le texte alternatif d'une image insérée ; voir comp-pdf-export-accessibilite. Pour toute commande, utiliser `api_commandes` avec un mot-clé avant `api_executer`.

## Liste de contrôle avant de livrer

1. Les originaux sont conservés intacts dans un dossier à part.
2. Seules les photos de qualité (netteté, yeux ouverts, expression) sont retenues, une par scène.
3. Le cadrage respecte la règle des tiers ou une composition centrée volontaire ; aucun membre coupé aux articulations.
4. L'horizon et les verticales sont d'aplomb.
5. L'histogramme ne touche pas les bords ; aucun ciel brûlé, aucune zone noire bouchée.
6. La balance des blancs est neutre sur une zone grise (écart entre canaux ≤ 3 %), les peaux ont R > V > B.
7. Saturation modérée (Vibrance + 10 à + 25), détail visible dans les verts et rouges.
8. Netteté appliquée en dernier, sans halo à 100 % ; bruit réduit sans peau plastique.
9. Retouches non destructives (calques, masques, objets dynamiques) ; PSD de travail conservé.
10. Portraits retouchés avec retenue : aucun changement de forme, aucune peau lissée à l'excès.
11. Détourage vérifié sur fond blanc, noir et fond final ; ombre cohérente avec la lumière.
12. Dimensions en pixels adaptées à l'usage (1 600–2 000 px web ; 300 ppp réels en impression).
13. Format et qualité conformes (JPEG 80 web, 90 impression ; PNG pour logos ; TIFF pour archivage).
14. Profil sRGB incorporé.
15. Poids total d'un courriel inférieur à 10 Mo ; chaque photo web inférieure à 500 Ko.
16. Nom de fichier `AAAA-MM-JJ_lieu_sujet_001` sans espace ni accent ni nom d'enfant.
17. Données GPS et métadonnées sensibles supprimées des fichiers diffusés.
18. Autorisation écrite de chaque personne reconnaissable, en particulier des parents pour les mineurs, vérifiée avant toute publication.
19. Aucune photo de baignade, de toilette, de dortoir ou de moment intime.
20. Texte alternatif prévu pour chaque image qui sera insérée dans un document.

## Questions auxquelles la fiche répond

- Comment trier et noter les photos d'un camp sans y passer la nuit ?
- Quel ratio choisir pour une affiche, un site, une diapositive, un réseau social ?
- Comment recadrer avec la règle des tiers et redresser un horizon ?
- Comment corriger l'exposition, le contraste et la balance des blancs avec des valeurs précises ?
- Quelles valeurs de netteté et de réduction du bruit appliquer selon l'ISO et l'usage ?
- Comment retoucher un portrait d'enfant sans le dénaturer ?
- Quelle résolution et quelles dimensions en pixels pour du A4, du A3, du web, du courriel ?
- Quel format (JPEG, PNG, WebP, TIFF) et quel profil de couleur choisir ?
- Comment alléger des photos pour les envoyer par courriel ?
- Comment nommer et ranger les fichiers photo ?
- Quand a-t-on le droit de publier une photo d'enfants et quelles autorisations faut-il ?
- Existe-t-il des commandes natives pour Photoshop et Lightroom ?
