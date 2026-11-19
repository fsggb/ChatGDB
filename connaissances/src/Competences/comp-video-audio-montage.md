---
id: comp-video-audio-montage
titre: Montage vidéo et son - rythme, titrage, sous-titres, mixage et export
theme: Compétences
type: synthese
sources:
  - titre: Pratique professionnelle du montage vidéo et du mixage audio (règles de raccord, niveaux sonores, normes de loudness)
  - titre: Recommandation EBU R128 (mesure de sonie en LUFS) et pratiques de diffusion web
mots_cles: montage, vidéo, son, Premiere, FilmCraft, After Effects, Pro Tools, dérushage, chutier, rythme, coupe sur le mouvement, raccord de regard, plan de coupe, ellipse, 25 i/s, 1080p, 4K, 9:16, titrage, zone de sécurité, sous-titres, étalonnage, Lumetri, transition, fondu enchaîné, musique, droits d'auteur, mixage, LUFS, dBFS, dBTP, nettoyage de voix, bruit de fond, H.264, débit, AAC, diaporama photo, générique, accessibilité, api_lot
liens: app-premiere, app-aftereffects, app-protools, comp-photo-retouche-et-export, comp-pdf-export-accessibilite, comp-polices-et-hierarchie, comp-couleur-et-identite-fsggb, comp-redaction-claire, suite-craft-mcp
resume: Méthode complète pour monter une vidéo de camp ou d'unité : préparation des rushes, règles de montage, formats et débits, titres et sous-titres lisibles, étalonnage de base, mixage chiffré (dialogues, musique, -16 LUFS, -1 dBTP), droits musicaux, export et accessibilité. Donne les commandes natives FilmCraft vérifiées et trois séquences api_lot (assemblage, titre, export).
---

## L'idée directrice

Un bon montage est un montage qu'on ne remarque pas : l'attention du spectateur reste sur ce qui se raconte (la veillée, le portage de la perche, le chant final), pas sur la technique. Cinq principes :

1. **Préparer avant de couper.** Un chutier propre fait gagner la moitié du temps de montage.
2. **Le rythme sert le récit.** On coupe quand l'information est donnée, pas avant, pas bien après.
3. **Le son compte plus que l'image.** Un spectateur supporte une image imparfaite, jamais un son inintelligible.
4. **Lisibilité d'abord** : titres, sous-titres et contrastes se lisent en une seconde sur un téléphone.
5. **Livrer au bon format** pour l'usage : projection au local, site, courriel, réseaux.

Pour les photos intégrées, voir comp-photo-retouche-et-export ; pour la typographie des titres, comp-polices-et-hierarchie ; pour les couleurs de la fédération, comp-couleur-et-identite-fsggb ; pour le texte des commentaires, comp-redaction-claire ; pour l'archivage et le RGPD, comp-pdf-export-accessibilite.

## 1. Préparation : dérushage, chutiers, nommage

### Étapes

1. **Copier** les cartes mémoire vers un disque (deux copies), **vérifier** la taille des fichiers, puis seulement formater les cartes.
2. **Structurer le dossier de projet** :

```
Video/
  2026-07-camp-ete/
    01-rushes/        (originaux, lecture seule)
    02-audio/         (musique, voix off, ambiances)
    03-images/        (photos, logos)
    04-projet/        (fichier de montage, caches)
    05-exports/       (versions livrées)
    06-autorisations/ (droit à l'image, droits musicaux)
```

3. **Nommer** les fichiers avant l'import : `AAAA-MM-JJ_sujet_prise_001.mp4`, par exemple `2026-07-18_feu-de-camp_C001.mp4`. Pas d'espace, d'accent ni de caractère spécial.
4. **Dérusher** : visionner chaque rush, marquer les passages utiles (entrée et sortie), noter les prises inutilisables (flou, tremblement, son saturé). Un rush sur trois seulement est utilisable en général.
5. **Organiser en chutiers (bins)** : un par thème ou par jour (« Jour 1 », « Feu de camp », « Interviews », « Plans de coupe », « Musique »). Étiqueter en couleur : vert = à utiliser, jaune = possible, rouge = refusé ou droit à l'image à vérifier.
6. **Créer la séquence** dans le format du plan le plus fréquent (voir section 3).

### Droit à l'image

Avant tout montage, repérer les personnes **reconnaissables** et vérifier les autorisations (parents pour les mineurs). Les mêmes règles que pour la photo s'appliquent (voir comp-photo-retouche-et-export, section sur le droit à l'image). Sans autorisation : plan large, dos, mains, ou plan écarté.

## 2. Rythme et règles de montage

### Durée des plans

| Type de plan | Durée courante | Remarque |
|---|---|---|
| Plan d'ambiance (paysage, tentes) | 3 à 5 s | Assez long pour être lu, pas pour s'ennuyer |
| Plan d'action (marche, jeu) | 2 à 4 s | Dynamique |
| Plan de visage qui parle | 4 à 8 s | Jusqu'à 10 s si le propos le mérite |
| Gros plan de détail (mains, nœud, feu) | 1,5 à 3 s | Rythme les séquences |
| Plan de coupe | 1 à 3 s | Cache un raccord |
| Plan photo (diaporama) | 4 à 6 s | Voir section 14 |
| Plan final (fondu au noir) | 3 à 5 s | Respiration |

Règles de rythme : alterner **plans larges, moyens, serrés** (règle du « un large, un moyen, un serré ») ; varier la durée ; accélérer vers le milieu d'une séquence d'action ; laisser **0,5 s de respiration** au début et à la fin d'une phrase.

### Les règles de raccord

| Règle | Application | Défaut à éviter |
|---|---|---|
| **Coupe sur le mouvement** | Couper pendant un geste (le bras qui se lève, le pas), à 40–60 % du mouvement | Couper avant ou après le mouvement : saccade |
| **Raccord de regard** | Un personnage regarde hors champ ; le plan suivant montre ce qu'il regarde | Direction opposée ou regard dans le vide |
| **Raccord de direction** | Un personnage sort à droite, il entre à gauche dans le plan suivant | Il repart en sens inverse |
| **Règle des 180°** | Rester du même côté de l'axe de deux personnes | Inversion apparente de position |
| **Règle des 30°** | Deux plans successifs sur le même sujet doivent différer d'au moins 30° ou de taille | Saute visuel (« faux raccord ») |
| **Plan de coupe** | Insérer un plan de détail pour masquer une coupe dans une interview | Coupure visible dans la parole |
| **Ellipse** | Supprimer le temps inutile (trajet, préparatifs) : montrer le départ puis l'arrivée | Récit trop long |

### Montage d'une interview

1. Garder la phrase **complète** ; couper les hésitations (« euh », silences de plus de 1 s) en dehors des mots, jamais au milieu.
2. Couvrir la coupure avec un **plan de coupe** (images de ce dont on parle) de 2 à 4 s.
3. Faire démarrer l'image **un peu avant** la voix (couper le son 6 à 10 images après le début du plan) : c'est le **montage en L ou en J** (le son chevauche).
4. Conserver le **bruit de fond** continu sous les raccords (une ambiance de 1 à 2 s) pour que la coupure ne soit pas silencieuse.

## 3. Format, résolution et cadence

| Usage | Résolution | Rapport | Cadence | Remarque |
|---|---|---|---|---|
| Projection et site | 1920 × 1080 (1080p) | 16:9 | 25 i/s | Standard de la fédération |
| Haute qualité | 3840 × 2160 (4K) | 16:9 | 25 i/s | Lourd ; tourner en 4K, livrer en 1080p |
| Réseaux (récit vertical) | 1080 × 1920 | 9:16 | 25 ou 30 i/s | Cadrage serré, titres au centre |
| Carré | 1080 × 1080 | 1:1 | 25 i/s | Fil de réseau |
| Ralenti | 1920 × 1080 | 16:9 | 50 i/s tourné, monté à 25 | Ralenti de 50 % |
| Cinéma | 1920 × 1080 | 16:9 | 24 i/s | Si choisi, rester à 24 partout |

Règles :
- **25 images par seconde** en Europe (norme PAL) ; **ne jamais mélanger** 24, 25 et 30 i/s sans conversion maîtrisée.
- **Créer la séquence** à la cadence et à la taille de la majorité des plans ; les autres plans sont recadrés (« Adapter à la taille du cadre »).
- **Échantillonnage audio** : 48 kHz, 16 ou 24 bits.
- **Obturateur** pour le tournage à 25 i/s : 1/50 s (règle des 180°) pour un flou de mouvement naturel.

## 4. Titrage

### Zones de sécurité

Les écrans, les projecteurs et les lecteurs rognent parfois les bords. Garder les éléments textuels dans la **zone de sécurité titres** : au moins **10 % de marge** de chaque côté (192 px à gauche et à droite et 108 px en haut et en bas sur 1920 × 1080) ; pour un format 9:16, laisser en plus **250 px en bas** (interface du réseau) et 150 px en haut.

### Lisibilité et durée

- **Durée de lecture** : environ **3 mots par seconde** pour un texte court, plus 1 seconde d'apparition ; un titre de 8 mots = environ 2,7 s + 1 s, soit 4 s minimum. Pour un public d'enfants : 2 mots par seconde.
- **Corps** : titre 80 à 120 px sur 1080p ; texte courant 48 à 64 px ; jamais en dessous de 40 px (lisibilité sur téléphone).
- **Police** : sans empattement (Inter) ou serif sobre (Georgia) en gras ou demi-gras ; pas de police fantaisie, pas de plus de deux polices.
- **Contraste** : blanc `#ffffff` sur bleu nuit `#000761` (très fort) ; sur photo, ajouter un voile noir à 40–60 % ou un fond semi-transparent ; ombre portée douce (opacité 40–60 %, flou 8–12 px, distance 4 px) en complément seulement.
- **Alignement** : titres à gauche (lecture naturelle) ou centrés pour un titre d'ouverture ; une seule logique par vidéo.
- **Apparition** : fondu de 10 à 15 images ou apparition nette ; pas d'effets de rebond.
- **Tiers inférieur** (nom et fonction) : placé à 8–12 % du bas, fond bleu nuit, filet or de 4 px ; durée 4 s.

## 5. Sous-titres

| Critère | Valeur recommandée | Raison |
|---|---|---|
| Lignes par sous-titre | 2 maximum | Lisibilité |
| Caractères par ligne | 37 à 42 | Écran 16:9 ; 32 pour 9:16 |
| Vitesse de lecture | 17 caractères par seconde (12–15 pour un public jeune) | Évite la fuite |
| Durée par sous-titre | 1 à 7 secondes | Trop court = illisible |
| Intervalle entre deux | ≥ 2 images (0,08 s) | Distinguer deux sous-titres |
| Corps | 5 % de la hauteur (≈ 54 px sur 1080p) | Lisible sur mobile |
| Police | Sans empattement semi-gras (Inter SemiBold) | Contrastes nets |
| Couleur | Blanc `#ffffff` avec fond noir à 70 % d'opacité, ou contour noir de 2 px | Contraste 7:1 minimum |
| Position | Centré, marge basse 8–10 % | Hors zone d'interface |
| Langue | Française, orthographe et ponctuation correctes (voir comp-typographie-francaise) | Fidélité |

Découpage : couper aux **groupes de sens** (après une virgule, avant un « que », une préposition), jamais entre l'article et le nom ni entre le sujet et le verbe. Faire figurer les **sons importants** entre crochets pour les sourds et malentendants : [applaudissements], [chant], [vent].

## 6. Étalonnage de base

1. **Corriger d'abord**, étalonner ensuite : exposition, balance des blancs, puis style.
2. Lire les **scopes** (forme d'onde, vecteurscope) : les noirs à 0–5 %, les blancs à 90–100 % ; ne pas dépasser 100 %.
3. **Balance des blancs** : pipette sur un gris ou un blanc ; contrôler que les peaux s'alignent sur la **ligne de peau** du vecteurscope.
4. **Exposition et contraste** : exposition ± 0,5 IL ; contraste + 5 à + 15 ; hautes lumières − 10 à − 40 ; ombres + 10 à + 30.
5. **Saturation** : 100–115 % ; jamais plus de 130 %.
6. **Harmoniser les plans** d'une même scène : copier les attributs d'un plan réussi vers les autres (`edit.pasteAttributes`), puis ajuster.
7. **Pas de LUT** forte (look cinéma bleu-orange) pour un documentaire de camp : préférer un rendu naturel et chaud.
8. Garder **le même rendu** du début à la fin ; une séquence nocturne reste sombre mais lisible.

## 7. Transitions sobres

| Transition | Durée | Usage |
|---|---|---|
| Coupe franche | 0 | Par défaut, 90 % des raccords |
| Fondu enchaîné | 12 à 25 images (0,5 à 1 s) | Passage de temps ou de lieu |
| Fondu au noir / depuis le noir | 25 images (1 s) à 2 s | Début et fin |
| Fondu audio « gain constant » | 6 à 12 images | Raccord son |
| Fondu audio « puissance constante » | 12 à 25 images | Entre deux musiques |

À **éviter** : volets, tourbillons, cubes, zooms ; ils vieillissent le montage. Pas plus de **deux types** de transitions dans une même vidéo.

## 8. Musique et droits d'auteur

- Toute musique est protégée : **ne jamais** prendre un morceau commercial pour une vidéo diffusée en ligne ou en public sans autorisation. Une diffusion publique d'une musique protégée demande une déclaration et une autorisation (société de gestion des droits d'auteur) ; une diffusion strictement privée au sein d'une unité (rencontre de famille) est plus tolérée mais reste soumise au droit.
- **Sources acceptables** : musiques libres de droits ou sous licence ouverte (Creative Commons : lire la licence et citer l'auteur), composées par la fédération, enregistrées par les scouts eux-mêmes (chants a cappella ou guitare de l'unité ; attention au **texte et à la musique** du chant s'ils sont encore protégés).
- **Générique** : indiquer titre, auteur, licence, lien source.
- **Garder un fichier** « droits » : preuve de licence, date de téléchargement, URL.
- **Voix off et chants de l'unité** : autorisation écrite des participants (mineurs : parents).

## 9. Mixage audio

### Niveaux cibles

| Élément | Niveau | Remarque |
|---|---|---|
| Dialogues (crêtes) | − 12 à − 6 dBFS | Voix principale, mesurée au crête |
| Voix off | − 12 à − 8 dBFS | Compressée (3:1) pour rester régulière |
| Musique avec voix | − 20 dB sous la voix, soit environ − 28 à − 24 dBFS | Réduction automatique (ducking) |
| Musique seule (ouverture, fin) | − 14 à − 10 dBFS | Remonter progressivement |
| Ambiances (vent, feu) | − 30 à − 24 dBFS | Sous la voix |
| Bruits d'effet (portière, chant) | − 18 à − 10 dBFS | Cohérents |
| **Sonie finale (web)** | **− 16 LUFS intégrés** (stéréo) | Cible de lecture en ligne |
| **Sonie finale (diffusion télévisée)** | − 23 LUFS (EBU R128) | Si demandée |
| **Crête réelle maximale** | **− 1 dBTP** | Évite l'écrêtage à la conversion |
| Bruit de fond de la pièce | < − 50 dBFS | Sinon nettoyer |

### Procédure de mixage

1. **Dialogues d'abord** : placer sur pistes distinctes (A1 dialogues, A2 voix off, A3 musique, A4 ambiance, A5 effets). Niveaux des clips autour de − 9 dBFS en crête.
2. **Nettoyer** (section 10).
3. **Musique ensuite** : la placer à − 20 dB sous la voix, et utiliser le **ducking** (réduction automatique de la musique sous la voix, attaque 0,2 s, relâchement 0,6 s).
4. **Ambiances et effets** : bas, sans masquer la voix.
5. **Écouter** à bas volume, sur casque et sur haut-parleur de téléphone : la voix doit rester intelligible partout.
6. **Mesurer** la sonie intégrée (LUFS) et la crête (dBTP) ; ajuster pour atteindre − 16 LUFS et − 1 dBTP maximum.
7. **Limiteur** en dernière position sur la piste principale : seuil − 1,5 dB, plafond − 1 dBTP.

## 10. Nettoyage de voix et bruit de fond

| Problème | Traitement | Réglage de départ |
|---|---|---|
| Souffle de fond constant | Réduction de bruit (bruit d'un extrait de 1 à 2 s de silence) | 6 à 12 dB de réduction ; au-delà la voix « sous-marine » |
| Grondements (vent, manipulation) | Filtre passe-haut | 80 Hz (100 Hz pour une voix grave claire) |
| Sibilance (s trop sifflants) | Dé-esseur | Zone 5–8 kHz, réduction 3 à 6 dB |
| Voix creuse ou sourde | Égaliseur : bosse à + 2 à + 3 dB entre 2 et 4 kHz ; creux à − 3 dB vers 250–400 Hz | Intelligibilité |
| Voix irrégulière | Compresseur | Rapport 3:1, seuil − 20 dB, attaque 10 ms, relâchement 100 ms, gain de 3 à 5 dB |
| Clics et bouche | Retouche manuelle ou outil de nettoyage | Au cas par cas |
| Écho de salle | Réduction de réverbération | 20–40 % |
| Souffle de vent dans un micro-cravate | Passe-haut à 100 Hz + remplacement par une prise | À défaut, recommencer la prise |

Principes : traiter **peu** (la voix doit rester naturelle) ; **comparer** avant et après ; ne jamais traiter la musique et la voix avec le même réglage ; en cas de bruit excessif, mieux vaut **réenregistrer** que sauver.

## 11. Export

| Usage | Codec et conteneur | Résolution | Débit vidéo | Audio |
|---|---|---|---|---|
| Web, site, courriel (lien) | H.264, .mp4 | 1920 × 1080 | 8–12 Mbit/s (VBR 2 passes, cible 10, maximum 14) | AAC 192 kbit/s, 48 kHz, stéréo |
| Réseaux (vertical) | H.264, .mp4 | 1080 × 1920 | 6–8 Mbit/s | AAC 192 kbit/s |
| Ancien ordinateur ou lecteur simple | H.264 profil High, niveau 4.1, .mp4 | 1280 × 720 | 5 Mbit/s | AAC 160 kbit/s |
| 4K | H.264 ou H.265 | 3840 × 2160 | 35–45 Mbit/s (H.264) ou 20–25 Mbit/s (H.265) | AAC 256 kbit/s |
| Archive maîtresse | ProRes 422 ou DNxHR | 1920 × 1080 | 100–150 Mbit/s | PCM 24 bits | 
| Audio seul (podcast, chant) | AAC ou MP3 | — | 192–256 kbit/s (AAC), 192 kbit/s (MP3) | −16 LUFS |
| Sous-titres | .srt ou .vtt | — | — | — |

Poids estimé : 10 Mbit/s = 1,25 Mo par seconde = 75 Mo par minute ; une vidéo de 5 minutes à 10 Mbit/s pèse environ 375 Mo. Pour un envoi par courriel (limite de 10–25 Mo par message), **ne pas joindre la vidéo** : déposer sur un espace partagé et envoyer le lien.

Procédure : vérifier la **zone de travail** (point d'entrée et de sortie), choisir le format, **cocher « Utiliser la qualité de rendu maximale »**, exporter, **regarder la vidéo exportée en entier** sur un autre appareil (son, sous-titres, points de coupe), contrôler le poids.

## 12. Génériques

- **Générique de début** : titre sur fond uni bleu nuit, 3 à 5 secondes ; logo et nom de l'unité.
- **Générique de fin** : défilement vertical lent, **centré**, polices lisibles (42 à 56 px), texte blanc sur bleu nuit ; **vitesse** : environ 1 ligne toutes les 0,6 seconde (20 lignes en 12 s). Rôles en or (`#c6a24e`), noms en blanc. Terminer par la mention des droits (musiques, licences) et un message court.
- **Remerciements** : prénoms ou unités plutôt que noms complets de mineurs.

## 13. Accessibilité

- **Sous-titres** codés (piste de sous-titres) pour les personnes sourdes ou malentendantes et pour la lecture sans son (très fréquente sur téléphone).
- **Transcription** : texte de la vidéo mis à disposition, utile pour les moteurs de recherche.
- **Description audio** pour une vidéo où l'essentiel est visuel : commentaire séparé en voix off décrivant l'action.
- **Contraste** des textes (≥ 4,5:1), taille ≥ 5 % de la hauteur.
- **Pas de clignotement** supérieur à 3 flashs par seconde (risque photosensible).
- **Titre et description** de la vidéo sur la page qui l'héberge.

## 14. Diaporama photo en vidéo

| Réglage | Valeur | Raison |
|---|---|---|
| Durée par photo | 4 à 6 s (3 s pour un montage dynamique, 8 s pour une photo à regarder) | Lecture |
| Format de photo | 1 920 × 1 080 ou plus, ratio 16:9 recadré | Aucun bandeau |
| Mouvement | Zoom lent (100 % vers 105–110 %) ou panoramique lent sur la durée du plan | Vie sans gadget |
| Transition | Fondu enchaîné 15 à 20 images, ou coupe franche | Sobre |
| Musique | Un seul morceau ou deux, − 20 dB sous la voix s'il y a commentaire | Unité |
| Rythme | Caler les changements de photo sur les temps forts de la musique | Impression de rythme |
| Photos verticales | Les placer sur un fond flou du même fond ou les associer deux par deux | Éviter les bandes noires |
| Titres et légendes | Courts, dans la zone de sécurité | Lisibilité |

Règle : **pas d'effets de rotation, de rebond ni de volets** ; un mouvement doit être à peine perceptible.

## Avec les outils de ScoutHub

Les commandes natives FilmCraft (Premiere) ci-dessous ont été vérifiées dans la liste des commandes. Les temps se donnent de préférence en **secondes** (`"seconds"`) ou en **images** (`"frame"`) quand le paramètre existe ; les « ticks » sont l'unité interne. Pour les noms exacts de transitions, d'effets et de préréglages, appeler `api_commandes` avec un mot-clé (`effects.list`, `export.formats`). **Pro Tools et After Effects** : pas de liste de commandes natives dans les références ; passer par l'interface.

### Commandes utiles (vérifiées)

| Identifiant | Paramètres | Usage |
|---|---|---|
| `file.newProject` | `{"name":str}` | Nouveau projet |
| `file.newSequence` | `name, width=1920, height=1080, fps=23.976, sampleRate=48000, video=3, audio=3, mix?, bin?` | Séquence (à régler sur 25 i/s) |
| `file.newBin` | `{"name":str, "parent":binId?}` | Chutier |
| `file.import` | `{"paths":[str], "bin":binId?, "imageSequence":bool?}` | Importer des médias |
| `project.items` | `{"bin":binId?, "recursive":bool?}` | Lister les éléments et leurs identifiants |
| `project.moveToBin` | `{"items":[id], "bin":binId}` | Ranger |
| `clip.rename` | `{"clip":id?, "item":id?, "name":str?}` | Renommer |
| `clip.scaleToFrameSize`, `clip.fitToFrame`, `clip.fillFrame` | `{"clips":[id]?}` | Adapter à l'image |
| `timeline.place` | `item` ou `items:[id]` (bout à bout), `track:"V1"\|"A1"\|"new"`, `time`/`frame`/`seconds`, `insert:bool` | Placer sur la ligne de montage |
| `timeline.razor` | `{"time":ticks, "track":"V1"?, "clip":id?}` | Couper |
| `sequence.addEdit` | `{"time":ticks?}` | Point de coupe à la tête de lecture |
| `timeline.trim` | `clip, edge:"in\|out", mode:"regular\|ripple", delta\|deltaFrames` | Ajuster |
| `timeline.move` | `moves:[{clip, track, time}], insert?` | Déplacer |
| `edit.rippleDelete` | `{"clips":[id]?}` | Supprimer et fermer le trou |
| `clip.speedDuration` | `clips, speed (%), reverse, ripple, maintainPitch?` | Vitesse |
| `sequence.applyVideoTransition` | `clip, effect:"cross_dissolve", frames, edge:"in\|out", align?` | Transition vidéo |
| `sequence.applyAudioTransition` | `clip, effect:"constant_power", frames, edge, align` | Transition audio |
| `effects.setDefaultTransition` | `{"effect":"constant_power\|constant_gain\|exponential_fade\|…"}` | Transition par défaut |
| `effects.apply`, `effects.setParam`, `effects.addKeyframe` | voir `api_commandes` | Effets et mouvements animés |
| `graphics.newText` | `text, position:[x,y], box:[w,h], size:px, …` | Titre |
| `graphics.set` | `clip?, layer?, props:{font, font_style, size, align, fill_color, stroke, shadow, position, scale, rotation, opacity…}` | Mise en forme du titre |
| `graphics.align` | `layers?, align:"left\|hcenter\|right\|top\|vcenter\|bottom", to:"frame"` | Aligner |
| `graphics.setRoll` | `mode:"off\|roll\|crawlLeft\|crawlRight", prerollFrames, easeInFrames…` | Générique défilant |
| `captions.newTrack` | `format:"Subtitle\|CEA-608\|CEA-708\|Teletext", name?, language?` | Piste de sous-titres |
| `captions.add` | `track?, text?, seconds?, durationSeconds=3` | Ajouter un sous-titre |
| `captions.setStyle` | `track, font, fontStyle, size, color, background, backgroundColor, align, anchor, margin` | Style |
| `captions.export` | `path, format:"srt\|vtt\|…", track?` | Exporter les sous-titres |
| `essentialSound.setType` | `clips, type:"dialogue\|music\|sfx\|ambience"` | Type audio |
| `essentialSound.set` | `clips, key:"repair.noise.on\|repair.noise.amount\|repair.humHz\|clarity.eqPreset\|ducking.reduceDb\|volume.levelDb\|…", value` | Réglages sonores |
| `essentialSound.generateDucking` | `{"clips":[id]?}` | Génère la réduction de la musique |
| `essentialSound.autoMatch` | `clips, target:lufs` | Égalise la sonie |
| `clip.audioGain` | `clips, mode:"set\|adjust\|normalizeMax\|normalizeAll", db, relative?` | Gain |
| `clip.audioPeak` | `{"clips":[id]?}` | Crête du clip |
| `mixer.setStrip` | `strip:"A1"\|"Mix", volumeDb, pan, muted, solo…` | Niveau d'une piste |
| `timeline.setTrack` | `track, locked, muted, solo, name, volumeDb, pan` | Réglages de piste |
| `lumetri.applyPreset`, `lumetri.setSection` | `name, clips` ; `clip, section:"basic\|creative\|curves\|wheels\|hsl\|vignette", on` | Étalonnage |
| `markers.add`, `markers.addChapter` | `time, name, comment, color` | Repères et chapitres |
| `file.save` | `{"path":str?}` | Enregistrer |
| `export.formats` | `{}` | Lister les formats d'export |
| `file.exportMedia` | `path, preset?, format:"h264\|hevc\|prores\|dnxhr\|…", audioCodec:"auto\|aac\|pcm\|flac", width, height, fps` | Exporter |
| `export.quick` | `preset?, path?, wait?` | Export rapide |

### Séquence 1 : assembler une séquence simple (préparation, import, placement)

Étape A (lot) : projet, séquence à 25 i/s, chutier, import.

```json
[
 {"commande":"file.newProject","parametres":{"name":"camp-ete-2026"}},
 {"commande":"file.newSequence","parametres":{"name":"montage-principal","width":1920,"height":1080,"fps":25,"sampleRate":48000,"video":3,"audio":4}},
 {"commande":"file.newBin","parametres":{"name":"Jour 1"}},
 {"commande":"file.import","parametres":{"paths":["/media/camp/2026-07-18_arrivee_C001.mp4","/media/camp/2026-07-18_feu-de-camp_C002.mp4","/media/camp/musique-ouverture.mp3"]}}
]
```

Étape B : `api_executer` `project.items` (`{"recursive":true}`) pour lire les identifiants des éléments importés ; remplacer `ID1`, `ID2`, `ID_MUSIQUE` par ces identifiants.

Étape C (lot) : placement, fondus, niveaux.

```json
[
 {"commande":"timeline.place","parametres":{"items":["ID1","ID2"],"track":"V1","seconds":0,"insert":false}},
 {"commande":"timeline.place","parametres":{"item":"ID_MUSIQUE","track":"A3","seconds":0}},
 {"commande":"sequence.applyVideoTransition","parametres":{"effect":"cross_dissolve","frames":20,"edge":"out"}},
 {"commande":"essentialSound.setType","parametres":{"type":"music"}},
 {"commande":"essentialSound.set","parametres":{"key":"ducking.reduceDb","value":20}},
 {"commande":"file.save","parametres":{}}
]
```

Les commandes appliquées « au clip » sans identifiant visent la sélection ou le clip courant selon la commande : si une commande refuse sans clip précisé, relire les identifiants avec `api_inspecter` et fournir `clip` ou `clips`.

### Séquence 2 : ajouter un titre lisible

```json
[
 {"commande":"playhead.set","parametres":{"seconds":1}},
 {"commande":"graphics.newText","parametres":{"text":"Camp d'été 2026","position":[960,540],"size":110}},
 {"commande":"graphics.set","parametres":{"props":{"font":"Inter","font_style":"Bold","size":110,"align":"center","fill_color":"#ffffff","shadow":true,"position":[960,540]}}},
 {"commande":"graphics.align","parametres":{"align":"hcenter","to":"frame"}}
]
```

Contrôle : texte à l'intérieur des 10 % de marge de sécurité, durée d'apparition de 4 s (8 mots ou moins), contraste blanc sur fond foncé. Pour un tiers inférieur, remplacer `position` par `[200, 900]`, taille 54 px, et prévoir un fond semi-transparent par `props` (`background: true`).

### Séquence 3 : régler le son et exporter

```json
[
 {"commande":"essentialSound.setType","parametres":{"type":"dialogue"}},
 {"commande":"essentialSound.set","parametres":{"key":"repair.noise.on","value":true}},
 {"commande":"essentialSound.set","parametres":{"key":"repair.noise.amount","value":8}},
 {"commande":"essentialSound.autoMatch","parametres":{"target":-16}},
 {"commande":"export.formats","parametres":{}},
 {"commande":"file.exportMedia","parametres":{"path":"exports/2026-07-camp-ete_v1_web.mp4","format":"h264","audioCodec":"aac","width":1920,"height":1080,"fps":25}}
]
```

Après l'export : vérifier que le débit (valeur par défaut du préréglage) reste dans la fourchette de 8 à 12 Mbit/s (voir `export.resolve` pour lire les réglages calculés), lire le fichier en entier, contrôler le niveau (crête sous −1 dBTP). Les sous-titres s'exportent à part : `captions.export` (`{"path":"…srt","format":"srt"}`).

## Erreurs fréquentes

| Défaut | Conséquence | Correction |
|---|---|---|
| Mélange de cadences (24, 25, 30 i/s) | Saccades | Séquence à 25 i/s, conversion contrôlée |
| Titre hors zone de sécurité | Texte coupé sur certains écrans | Marges de 10 % |
| Texte trop petit (< 40 px) | Illisible sur téléphone | 54 px minimum pour sous-titres |
| Musique trop forte sous la voix | Dialogue inintelligible | − 20 dB et ducking |
| Pic à 0 dBFS | Distorsion | Limiteur à − 1 dBTP |
| Raccord sans son d'ambiance | « Trou » sonore | Ambiance continue de 1 à 2 s |
| Musique protégée sans droit | Retrait de la vidéo | Musique libre ou autorisée |
| Transitions fantaisistes | Aspect daté | Coupe franche et fondu enchaîné |
| Export non vérifié | Erreur découverte devant le public | Regarder le fichier final en entier |

## Liste de contrôle avant de livrer

1. Les rushes sont copiés en double, dans un dossier structuré, nommés `AAAA-MM-JJ_sujet_prise_001`.
2. Les chutiers et les étiquettes de couleur sont à jour ; les droits à l'image sont vérifiés (parents pour les mineurs).
3. La séquence est en 25 i/s, 1920 × 1080 (ou 1080 × 1920 pour un récit vertical), 48 kHz.
4. Les coupes se font sur le mouvement, les raccords de regard et de direction sont cohérents, la règle des 180° est respectée.
5. Les plans durent entre 2 et 8 s, avec alternance plans larges, moyens et serrés.
6. Les interviews sont couvertes par des plans de coupe de 2 à 4 s, avec ambiance continue.
7. Titres dans la zone de sécurité (10 % de marge), à 80–120 px, durée de lecture de 3 mots par seconde + 1 s.
8. Sous-titres : 2 lignes maximum, 37–42 caractères par ligne, 17 caractères par seconde, blanc sur fond noir à 70 %.
9. Étalonnage homogène : noirs à 0–5 %, blancs jamais au-dessus de 100 %, peaux sur la ligne de peau.
10. Transitions sobres : coupes franches et fondus enchaînés de 12 à 25 images.
11. Toutes les musiques ont une licence ou une autorisation archivée.
12. Dialogues entre − 12 et − 6 dBFS, musique à − 20 dB sous la voix.
13. Sonie finale de − 16 LUFS, crête maximale de − 1 dBTP.
14. Voix nettoyées (passe-haut 80 Hz, réduction de bruit modérée, dé-esseur si nécessaire).
15. Export H.264 à 8–12 Mbit/s, audio AAC 192 kbit/s, nom de fichier versionné.
16. Fichier final regardé en entier sur un autre appareil, avec le son bas, puis haut.
17. Sous-titres exportés en .srt ou .vtt et transcription disponible.
18. Aucune séquence clignotante supérieure à 3 flashs par seconde.
19. Générique à jour : auteurs, licences, remerciements sans noms complets de mineurs.
20. Projet sauvegardé et archivé avec les rushes et le fichier de droits.

## Questions auxquelles la fiche répond

- Comment préparer, nommer et organiser des rushes avant de monter ?
- Quelle durée donner aux plans et comment rythmer un montage ?
- Que sont la coupe sur le mouvement, le raccord de regard, le plan de coupe, l'ellipse ?
- Quel format, quelle résolution et quelle cadence choisir (1080p, 4K, 25 i/s, 9:16) ?
- Où placer les titres, quelle taille, quelle durée de lecture ?
- Quelles règles pour des sous-titres lisibles (longueur, vitesse, contraste) ?
- Quels niveaux sonores respecter (dialogues, musique, − 16 LUFS, − 1 dBTP) ?
- Comment nettoyer une voix et réduire un bruit de fond ?
- Quels réglages d'export H.264 et AAC pour le web ?
- Quelles musiques peut-on utiliser et comment respecter les droits d'auteur ?
- Comment monter un diaporama photo en vidéo ?
- Quelles commandes natives FilmCraft (Premiere) utiliser avec quels paramètres ?
