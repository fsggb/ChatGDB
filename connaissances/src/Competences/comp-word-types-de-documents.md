---
id: comp-word-types-de-documents
titre: Modèles de documents Word chiffrés (lettre, convocation, compte rendu, programme de camp, livret de chants, fiche d'activité, CV…)
theme: Compétences
type: synthese
sources:
  - titre: Usages courants de la correspondance et des documents associatifs en France (lettre, convocation, procès-verbal, attestation)
  - titre: Pratiques de l'animation et des accueils collectifs de mineurs (projet pédagogique, fiche sanitaire, programme)
mots_cles: lettre officielle, courrier aux parents, convocation, assemblée générale, ordre du jour, compte rendu, rapport d'activité, projet pédagogique, dossier d'inscription, autorisation parentale, fiche sanitaire, programme de camp, journal de camp, bulletin, livret de chants, accords, fiche d'activité, jeu, CV, attestation, rapport financier, modèle Word, WordCraft, api_lot
liens: comp-word-document-professionnel, comp-typographie-francaise, comp-redaction-claire, comp-mise-en-page-principes, comp-couleur-et-identite-fsggb, comp-polices-et-hierarchie, comp-excel-budget-et-suivi, comp-pdf-export-accessibilite, app-word
resume: Dix-sept modèles de documents de la vie d'une unité scoute, chacun avec sa structure, sa longueur, ses éléments obligatoires, ses marges, corps et interlignes chiffrés, un exemple rédigé en français soigné et la séquence de commandes natives WordCraft pour le fabriquer. À utiliser quand on demande de rédiger et mettre en page un de ces documents.
---

## Comment utiliser cette fiche
Chaque modèle suit le même plan : **Structure**, **Longueur**, **Obligatoire**, **Mise en page** (A4, valeurs en mm avec points entre parenthèses, car WordCraft travaille en points), **Exemple** (texte à adapter) et **Commandes**. Les techniques (styles, colonnes, tableaux, en-têtes) sont expliquées dans la fiche comp-word-document-professionnel, dont il faut avoir lu les séquences 1 (styles) et 6 (pied de page) ; la typographie (espaces insécables, majuscules accentuées, guillemets « ») est dans comp-typographie-francaise ; le ton dans comp-redaction-claire. Les exemples sont fictifs : unité Saint-Louis, Lyon.

### Valeurs communes
| Élément | Valeur |
|---|---|
| Police | titres Georgia, texte Calibri (ou Arial) |
| Couleurs | titres `000761`, texte `12142B`, filets `C6A24E` (or, jamais en texte), gris `4A4D68` |
| Corps courant | 11 pt, interligne 1,15, espace après 6 pt |
| Conversion | 15 mm = 42,5 pt ; 20 = 56,7 ; 25 = 70,9 ; 30 = 85 |
| Largeur utile | marges 20 mm : 170 mm = 481,9 pt ; marges 25 mm : 160 mm = 453,5 pt |
| Dates | « samedi 13 mars 2027 », « 1er avril » ; heures « 14 h 30 » avec espaces insécables |

### Le socle commun (à jouer en premier)
```json
[{"commande":"file.new","parametres":{"template":"blank"}},{"commande":"layout.size","parametres":{"name":"A4"}},{"commande":"layout.margins","parametres":{"top":70.9,"bottom":56.7,"left":70.9,"right":56.7}},{"commande":"design.themeFonts","parametres":{"heading":"Georgia","body":"Calibri"}}]
```
Les marges changent selon le modèle (voir sa rubrique). Puis jouer la séquence 1 de la fiche comp-word-document-professionnel pour les styles. Le texte se compose de haut en bas : on règle la mise en forme du paragraphe, on tape, `text.newParagraph` conserve le réglage, on le change pour le paragraphe suivant. Après chaque lot : `document.layout` ou `file.exportPng`.

## 1. Lettre officielle
- **Structure** : expéditeur (haut gauche), destinataire (bloc à droite), lieu et date, référence éventuelle, objet, formule d'appel, corps (introduction, développement, demande), formule de politesse, signature, pièces jointes.
- **Longueur** : 1 page ; 250 à 350 mots. Plus long : annexe.
- **Obligatoire** : nom et adresse de l'expéditeur ; destinataire ; date ; objet précis (moins de 12 mots) ; formule d'appel suivie d'une virgule ; politesse qui reprend l'appel ; nom, qualité et signature manuscrite.
- **Mise en page** : marges 25 haut, 20 bas, 25 gauche, 20 droite (70,9 / 56,7 / 70,9 / 56,7). Calibri 11, interligne 1,15, espace après 6 ; blocs séparés par 12 pt. Bloc destinataire à 100 mm du bord gauche, soit un retrait de 75 mm (213 pt) ; pour une enveloppe à fenêtre, vérifier la position sur l'enveloppe. Objet en gras. Signature : 40 pt d'espace avant le nom (environ 14 mm). Aucun gras ailleurs, pas de soulignement.
- **Exemple** : « Objet : inscription de votre fils au camp d'été 2027 / Madame, Monsieur, / Nous avons le plaisir de vous confirmer l'ouverture des inscriptions au camp d'été qui se tiendra du samedi 10 au samedi 24 juillet 2027. Le dossier ci-joint est à nous retourner avant le 15 mars. Restant à votre disposition pour tout renseignement, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »
- **Commandes** :
```json
[{"commande":"para.style","parametres":{"style":"Normal"}},{"commande":"text.insert","parametres":{"text":"Unité Saint-Louis\n12, rue des Tilleuls, 69003 Lyon","raw":true,"paragraphs":true}},{"commande":"text.newParagraph","parametres":{}},{"commande":"para.indents","parametres":{"left":213,"firstLine":0}},{"commande":"para.spacing","parametres":{"before":24,"after":0}},{"commande":"text.insert","parametres":{"text":"Madame, Monsieur Durand\n8, allée des Roses\n69007 Lyon","raw":true,"paragraphs":true}},{"commande":"text.newParagraph","parametres":{}},{"commande":"para.indents","parametres":{"left":0}},{"commande":"para.alignRight","parametres":{}},{"commande":"para.spacing","parametres":{"before":24,"after":12}},{"commande":"text.insert","parametres":{"text":"Lyon, le 4 janvier 2027","raw":true}},{"commande":"text.newParagraph","parametres":{}},{"commande":"para.alignLeft","parametres":{}},{"commande":"para.spacing","parametres":{"before":0,"after":12}},{"commande":"format.bold","parametres":{"value":true}},{"commande":"text.insert","parametres":{"text":"Objet : inscription au camp d'été 2027","raw":true}},{"commande":"text.newParagraph","parametres":{}},{"commande":"format.bold","parametres":{"value":false}},{"commande":"text.insert","parametres":{"text":"Madame, Monsieur,","raw":true}}]
```
Les lignes du bloc d'adresse sont des paragraphes : régler `para.spacing` à 0 avant et après sur ces lignes pour qu'elles restent serrées (`select.text` sur le bloc puis `para.spacing`). Signature : `insert.signatureLine` `{"signer":"…","title":"…"}` seulement pour un document signé numériquement.

## 2. Courrier aux parents
- **Structure** : en-tête d'unité, objet, formule d'appel (« Chers parents, »), contexte en une phrase, **l'essentiel dans un encadré** (quoi, quand, où, quoi apporter, date limite), précisions, coordonnées, politesse, signature.
- **Longueur** : 1 page ; 150 à 250 mots. Un parent lit le haut de la page, le reste à l'occasion.
- **Obligatoire** : date, lieu, heure de rendez-vous et de fin, coût, ce qu'il faut rapporter, date limite de réponse, personne à joindre avec téléphone.
- **Mise en page** : marges 20 / 20 / 25 / 20 mm (56,7 / 56,7 / 70,9 / 56,7), corps 11,5 pt, interligne 1,2. Encadré : `para.shading` `F3F4F9`, `para.borders` gauche 2,25 pt `C6A24E`, retrait 10 pt ; dates et heures en gras, rien d'autre. Un seul tutoiement ou vouvoiement dans tout le courrier.
- **Exemple** : « Chers parents, / La troupe se retrouvera pour un week-end de rentrée. L'essentiel : départ vendredi 5 février 2027 à 18 h 30, place de l'église ; retour dimanche 7 février à 16 h 30, au même endroit ; participation de 35 € ; sac de couchage, gamelle, tenue de pluie. Merci de nous retourner l'autorisation ci-jointe avant le 29 janvier. »
- **Commandes** : socle (marges 56,7 / 56,7 / 70,9 / 56,7), puis `text.insert`, et pour l'encadré : `select.text` sur son premier mot, `para.shading` `{"color":"F3F4F9","paragraph":true}`, `para.borders` `{"kind":"left","width":2.25,"color":"C6A24E"}`, `para.indents` `{"left":10,"right":10}`, `para.keepLines` `{"value":true}`. Copie par publipostage : `mailings.start` `{"kind":"letters"}`, `mailings.recipients` `{"path":"familles.csv"}`, `mailings.insertField` `{"field":"Prenom"}`, `mailings.finish`.

## 3. Convocation à une assemblée générale
- **Structure** : titre « Convocation », qualité de l'émetteur, date de l'envoi, motif, date, heure, lieu complet, ordre du jour numéroté, rappel du quorum et du vote, formule de pouvoir en bas de page, signature.
- **Longueur** : 1 page + 1 page de pouvoir détachable.
- **Obligatoire** : organe qui convoque, date et heure précises, adresse, ordre du jour, modalités de procuration, délai de convocation conforme aux statuts (à vérifier dans les statuts), signature du président.
- **Mise en page** : marges 25 / 20 / 25 / 20 mm. Titre Georgia 20 pt centré, `000761`, filet or. Ordre du jour : liste numérotée, retrait 18 pt, après 4 pt. Pouvoir : ligne de découpe en pointillés (`para.borders` `top`, style `dashed`) ; 20 pt d'espace avant ; zones de saisie par `developer.plainText`.
- **Exemple** : « Le conseil d'administration convoque tous les membres à l'assemblée générale ordinaire qui se tiendra le samedi 13 mars 2027 à 14 h 30, salle paroissiale Saint-Louis, 12 rue des Tilleuls à Lyon. L'assemblée délibérera sur l'ordre du jour suivant : 1. rapport moral ; 2. rapport financier ; 3. élection du bureau ; 4. questions diverses. En cas d'empêchement, vous pouvez donner pouvoir à un autre membre au moyen du talon ci-dessous. »
- **Commandes** : `para.alignCenter`, `para.style` `Title`, `para.numbering` `{"kind":"numbered"}`, `insert.pageBreak`, `developer.plainText` `{"title":"Nom du mandant","tag":"mandant"}`, `developer.datePicker` `{"title":"Date","tag":"date"}`.

## 4. Ordre du jour
- **Structure** : titre, date, lieu, durée prévue, animateur ; tableau Point / Intervenant / Durée / Décision attendue ; divers ; prochaine réunion.
- **Longueur** : 1 page, 5 à 8 points ; durée totale égale à la durée de la réunion (1 h 30 au plus, sinon pause).
- **Obligatoire** : horaires de début et fin, nature de chaque point (information, discussion, décision), pièces à lire avant.
- **Mise en page** : marges 20 mm ; Calibri 11 ; tableau de 481,9 pt : colonnes 30 / 251,9 / 100 / 50 pt ; en-tête `000761` blanc, traits fins `C9CBD9`, durée alignée à droite.
- **Exemple** : « 1. Accueil et prière (5 min) ; 2. Approbation du compte rendu du 12 janvier (5 min) ; 3. Bilan du week-end (15 min, information) ; 4. Choix des dates du camp (30 min, décision) ; 5. Divers (10 min). »
- **Commandes** :
```json
[{"commande":"insert.spreadsheet","parametres":{"values":[["N°","Point","Intervenant","Durée"],["1","Accueil et prière","Aumônier","5 min"],["2","Approbation du compte rendu","Secrétaire","5 min"],["3","Choix des dates du camp","Chef d'unité","30 min"]],"header":true}},{"commande":"select.text","parametres":{"text":"Intervenant"}},{"commande":"table.selectRow","parametres":{}},{"commande":"table.shading","parametres":{"color":"000761"}},{"commande":"format.color","parametres":{"color":"FFFFFF"}},{"commande":"table.selectTable","parametres":{}},{"commande":"table.borders","parametres":{"kind":"inside","width":0.5,"color":"C9CBD9"}}]
```

## 5. Compte rendu de réunion
- **Structure** : cartouche (date, lieu, durée, présents, excusés, rédacteur), résumé en 3 lignes, points traités (un titre 2 par point : ce qui a été dit, ce qui a été décidé), **tableau des décisions**, prochaine réunion.
- **Longueur** : 1 à 2 pages ; envoyé sous 48 heures.
- **Obligatoire** : pour chaque décision, un responsable nommé et une échéance datée ; les opinions ne sont pas des décisions ; verbes à l'indicatif présent ou au passé composé, jamais « il a été dit que ».
- **Mise en page** : marges 20 mm, Calibri 10,5 ; titres Georgia 14 pt ; tableau 481,9 pt : N° 30 / Décision 261,9 / Responsable 110 / Échéance 80 pt ; en-tête répété ; rangées non coupées.
- **Exemple** : « Décision 2. Le camp d'été aura lieu du 10 au 24 juillet 2027 à Chamonix. Responsable : Claire Martin. Échéance : 15 février 2027 (réservation du terrain). »
- **Commandes** : `insert.spreadsheet` `{"values":[["N°","Décision","Responsable","Échéance"],["1","Réserver le terrain","C. Martin","15/02/2027"]],"header":true}`, `table.columnWidth` `{"width":30}` (par colonne, après `table.selectColumn`), `table.repeatHeader`, `table.properties` `{"allowBreak":false}`.

## 6. Rapport d'activité
- **Structure** : page de titre, sommaire, mot du responsable, chiffres clés, activités de l'année (un chapitre par section), bilan, perspectives, remerciements, annexes.
- **Longueur** : 6 à 12 pages ; un chapitre tient sur 1 à 2 pages.
- **Obligatoire** : période couverte ; chiffres (effectifs, nombre de sorties, camps) comparés à l'année précédente ; une phrase de bilan par activité ; un graphique par tendance importante.
- **Mise en page** : marges 25 mm ; titres numérotés ; corps 11 ; chiffres clés en tableau de 3 colonnes ; `insert.chart` pour un graphique, légendé sous l'image.
- **Exemple** : « Cette année, l'unité a accueilli 42 jeunes, contre 37 l'an passé. Les deux week-ends de formation et le camp d'été ont réuni en moyenne 90 % des effectifs. »
- **Commandes** : séquences 2, 6 et 7 de comp-word-document-professionnel, `list.multilevelPreset` `{"preset":"headings"}`, `insert.chart` `{"type":"column","data":{"categories":["2026","2027"],"series":[{"name":"Jeunes","values":[37,42]}]},"title":"Effectifs","legend":"none","dataLabels":true}`.

## 7. Projet pédagogique de camp
- **Structure** : 1. contexte et public ; 2. intentions éducatives (3 à 5 objectifs) ; 3. moyens (activités, vie quotidienne, démarche spirituelle) ; 4. organisation (lieu, équipe, journée type, sécurité, santé, budget) ; 5. évaluation ; annexes.
- **Longueur** : 8 à 15 pages, sommaire, numérotation 1 / 1.1.
- **Obligatoire** : chaque objectif en « Permettre à chaque jeune de… » avec un moyen et un critère d'évaluation ; encadrement avec qualifications ; mesures de sécurité ; budget résumé ; démarche spirituelle propre à la fédération.
- **Mise en page** : marges 25 mm, Titre 1 18 pt, corps 11 / 1,15, tableau des objectifs (Objectif / Moyen / Évaluation) de 453,5 pt : 140 / 170 / 143,5 pt.
- **Exemple** : « Objectif 1 : permettre à chaque jeune de prendre une responsabilité réelle pendant le camp. Moyen : chaque patrouille tient la cuisine un jour. Évaluation : retour de la patrouille en conseil. »
- **Commandes** : séquences 1, 2, 5, 7 de comp-word-document-professionnel, `insert.spreadsheet` pour le tableau des objectifs.

## 8. Dossier d'inscription
- **Structure** : lettre d'accueil, fiche d'inscription, fiche sanitaire, autorisation parentale, liste de matériel, modalités de paiement, liste des pièces à rendre (cases à cocher).
- **Longueur** : 6 à 8 pages, chaque formulaire sur sa page.
- **Obligatoire** : date limite de retour en haut de la première page ; une seule signature par pièce ; mention de l'usage des données personnelles ; numérotation « Pièce 1 sur 5 ».
- **Mise en page** : marges 20 mm ; formulaires en tableau libellé / réponse : colonne libellés 150 pt (gris `F3F4F9`), colonne réponse 331,9 pt, rangées de 24 pt minimum ; Calibri 10,5.
- **Commandes** : `insert.pageBreak` entre pièces, `developer.checkBox` `{"title":"Pièce jointe : certificat","tag":"p1"}`, `developer.plainText`, `table.rowHeight` `{"height":24,"rule":"atLeast"}`.

## 9. Autorisation parentale
- **Structure** : titre, identité du jeune, identité du responsable légal, activité (nom, dates, lieu), autorisations cochables (participation, transports, soins d'urgence, image), personnes habilitées à venir chercher l'enfant, lieu, date, signature.
- **Longueur** : 1 page recto.
- **Obligatoire** : chaque autorisation sur sa ligne avec sa case ; le droit à l'image séparé et facultatif ; mention « signature du responsable légal » ; texte à faire valider par la fédération avant diffusion.
- **Mise en page** : marges 20 mm ; corps 11 ; interligne 1,3 ; cases `developer.checkBox` ; zone de signature de 30 mm de hauteur.
- **Exemple** : « Je soussigné(e) … , responsable légal de … , l'autorise à participer au camp d'été du 10 au 24 juillet 2027. J'autorise les responsables à faire donner les soins d'urgence nécessaires. ☐ J'autorise la diffusion de photographies de mon enfant dans le cadre des activités de l'unité. »
- **Commandes** : `developer.checkBox` `{"title":"Droit à l'image","tag":"image","checked":false}`, `developer.datePicker` `{"title":"Date","tag":"date"}`.

## 10. Fiche sanitaire
- **Structure** : identité du jeune, vaccinations, allergies et maladies, traitement en cours, régime, médecin traitant, personnes à prévenir, observations, signature.
- **Longueur** : 1 à 2 pages ; confidentielle.
- **Obligatoire** : mention « confidentiel, réservé au chef et à l'assistant sanitaire » ; usage des données ; pour un accueil déclaré, le modèle officiel de fiche sanitaire de liaison s'impose : ne pas le remplacer.
- **Mise en page** : marges 15 / 15 / 20 / 20 mm ; corps 10 ; libellés en gras 10 pt ; cases `developer.checkBox` ; rangées de 22 pt au moins ; enveloppe fermée à la remise.
- **Commandes** : `insert.spreadsheet` pour la structure ; `table.shading` `F3F4F9` sur les libellés ; `developer.checkBox`, `developer.plainText`.

## 11. Programme de camp
- **Structure** : vue d'ensemble (tableau jours × moments), puis jour par jour : tableau Heure / Activité / Lieu / Responsable.
- **Longueur** : 1 page de synthèse et 1 page par tranche de 3 jours.
- **Obligatoire** : messe et temps de prière, repas, coucher ; activités alternatives en cas de pluie ; coordonnées d'urgence en pied.
- **Mise en page** : marges 20 mm ; Calibri 10,5 ; vue d'ensemble en paysage (`layout.orientation` `{"value":"landscape"}`) avec colonnes 70 / 137 / 137 / 137,9 pt ; horaires « 7 h 30 » sur la première colonne ; en-tête répété.
- **Exemple** : « Mardi 13 juillet : 7 h 30 lever ; 8 h 30 messe ; 10 h 00 construction de l'autel ; 12 h 30 déjeuner ; 14 h 30 grand jeu ; 19 h 30 veillée. »
- **Commandes** : séquence 4 de comp-word-document-professionnel avec `layout.break` `{"kind":"nextPage"}` avant et après le passage en paysage ; `layout.linkToPrevious` pour garder le même pied.

## 12. Journal de camp et bulletin de groupe
- **Structure** : bandeau titre, édito, articles courts (80 à 150 mots), photos légendées, encadré « agenda », mot de la fin.
- **Longueur** : 4 pages (multiple de 4 pour l'impression en livret).
- **Obligatoire** : date du numéro, un nom d'auteur par article, légende de chaque photo, autorisation pour les images de jeunes.
- **Mise en page** : marges 15 mm ; titre sur 1 colonne, corps sur 2 colonnes, gouttière 8 mm (22,7 pt), filet ; corps 10 pt, interligne 1,15 ; titres d'article Georgia 14 ; une lettrine ; photos de 227 pt de large (80 mm) aux angles droits.
- **Exemple** : « Au troisième jour du camp, les éclaireurs ont franchi le col sous une pluie fine, sans une plainte. Le soir, la veillée a rassemblé tout le camp autour d'un feu bien tenu. »
- **Commandes** : séquence 3 de comp-word-document-professionnel avec `layout.columns` `{"count":2,"space":22.7,"separator":true,"apply":"section"}`, `insert.dropCap` `{"position":"dropped","lines":3,"font":"Georgia"}`, `insert.picture` `{"width":227,"alt":"…"}`, `arrange.wrap` `{"wrap":"inline"}`, `references.caption`.

## 13. Livret de chants
- **Structure** : couverture, sommaire par ordre alphabétique, chants (titre, auteur, couplets, refrain), index.
- **Longueur** : 16 à 40 pages au format A5, multiple de 4.
- **Obligatoire** : titre et auteur de chaque chant ; refrain distingué ; un chant ne se coupe pas entre deux pages ; autorisations de reproduction vérifiées pour les chants protégés.
- **Mise en page** : A5 (419,5 × 595,3 pt) ; marges 15 mm haut, 17 mm bas, 20 mm intérieure, 14 mm extérieure, pages en vis-à-vis ; titre Georgia 13 gras ; paroles Calibri 11 / interligne 1,3 ; ligne d'accords Calibri 9 gras `000761`, avant 6 / après 0, au-dessus des paroles et décalée par `para.tabs` ; refrain en retrait de 14 pt avec filet or ; `para.keepLines` sur chaque couplet. Impression en livret : `ui.printSubmit` `{"pagesPerSheet":"booklet"}`.
- **Exemple** : « Titre : Prends ma main. Premier couplet : lignes de 6 à 8 syllabes, accords Do – Sol – Lam – Fa écrits au-dessus des syllabes concernées ; le refrain est en retrait. »
- **Commandes** :
```json
[{"commande":"layout.size","parametres":{"name":"A5"}},{"commande":"layout.margins","parametres":{"top":42.5,"bottom":48.2,"left":56.7,"right":39.7,"mirror":true}},{"commande":"layout.differentOddEven","parametres":{}},{"commande":"para.tabs","parametres":{"set":[{"pos":60,"align":"left"},{"pos":130,"align":"left"}]}},{"commande":"para.keepLines","parametres":{"value":true}}]
```

## 14. Fiche d'activité ou de jeu
- **Structure** : titre ; bandeau (âge, durée, effectif, lieu) ; but ; matériel ; préparation ; déroulement en étapes ; variantes ; sécurité ; bilan.
- **Longueur** : 1 page recto ; 200 à 300 mots.
- **Obligatoire** : durée en minutes ; effectif min et max ; matériel quantifié ; consigne de sécurité visible ; 7 étapes au plus.
- **Mise en page** : marges 20 mm ; corps 10,5 ; titre Georgia 20 ; bandeau en tableau de 5 colonnes de 96,4 pt ; encadré sécurité avec filet gauche rouge sombre `8A1C1C` ; étapes numérotées.
- **Exemple** : « But : transmettre un message sans parler. Durée : 20 minutes. Matériel : un foulard par équipe. Étape 1 : former des équipes de 6. Sécurité : jeu sur terrain dégagé. »
- **Commandes** : `insert.spreadsheet` pour le bandeau, `para.numbering` `{"kind":"numbered"}`, `para.shading` et `para.borders` pour l'encadré sécurité.

## 15. CV d'une page
- **Structure** : nom, contact, profil (3 lignes), expériences, formation, compétences, engagement, langues.
- **Longueur** : 1 page stricte ; 350 à 450 mots.
- **Obligatoire** : ordre antéchronologique ; verbes d'action ; dates alignées à droite ; aucune photo si le poste ne l'exige pas.
- **Mise en page** : marges 15 mm (42,5 pt) ; largeur utile 510,2 pt ; Calibri 10,5 / interligne 1,1 ; nom Georgia 24 ; rubriques Georgia 12 en petites capitales (`format.smallCaps`) avec filet `C6A24E` ; tabulation droite à 510,2 pt.
- **Exemple** : « 2024 – 2026 : chef de troupe, unité Saint-Louis : encadrement de 28 jeunes de 12 à 17 ans, organisation d'un camp de 15 jours. »
- **Commandes** : `para.tabs` `{"set":[{"pos":510.2,"align":"right","leader":"none"}]}`, `para.borders` `{"kind":"bottom","width":0.75,"color":"C6A24E"}`, `format.smallCaps`.

## 16. Attestation
- **Structure** : titre, identité de l'émetteur, fait attesté, période, mention « pour servir et valoir ce que de droit », lieu, date, signature et cachet.
- **Longueur** : 1 page ; 80 à 150 mots.
- **Obligatoire** : identité complète, fonction de l'émetteur, objet exact (participation, bénévolat, présence), dates, signature.
- **Mise en page** : marges 25 mm ; corps 12 / interligne 1,5 ; titre Georgia 18 centré ; texte justifié ou à gauche ; 30 mm pour la signature.
- **Exemple** : « Je soussigné, Paul Martin, chef d'unité du groupe Saint-Louis, atteste que Mademoiselle Claire Durand a participé en qualité d'animatrice bénévole au camp d'été du 10 au 24 juillet 2027. Fait pour servir et valoir ce que de droit. »
- **Commandes** : `para.style` `Title`, `para.lineSpacing` `{"value":1.5}`, `insert.signatureLine`.

## 17. Rapport financier
- **Structure** : titre, période, résumé (3 lignes), tableau recettes et dépenses (Poste / Prévu / Réalisé / Écart), commentaire des écarts, solde, signature du trésorier.
- **Longueur** : 2 à 3 pages.
- **Obligatoire** : montants en euros avec deux décimales, totaux justes, écarts expliqués ; signature et date ; pièces justificatives en annexe.
- **Mise en page** : marges 25 mm ; corps 10,5 ; tableau 481,9 pt : 211,9 / 90 / 90 / 90 ; nombres à droite, « 1 250,00 € » avec espaces insécables ; total gras avec trait de 1 pt `000761`.
- **Exemple** : « Le camp a coûté 5 480 €, soit 120 € de moins que prévu : le transport a été partagé avec la paroisse. »
- **Commandes** : `insert.spreadsheet`, `table.formula` `{"formula":"=SUM(ABOVE)"}`, `para.alignRight`, `table.borders` `{"kind":"top","width":1,"color":"000761"}`. Voir comp-excel-budget-et-suivi pour le calcul.

## Erreurs fréquentes à éviter
| Document | Défaut typique | Correctif |
|---|---|---|
| Lettre | objet vague (« Informations »), politesse qui ne reprend pas l'appel | objet de moins de 12 mots, politesse qui répète « Madame, Monsieur » |
| Courrier aux parents | date limite noyée dans le texte | encadré « L'essentiel » en haut de page |
| Convocation | lieu sans adresse, pas de modalité de pouvoir | adresse complète et talon de pouvoir |
| Compte rendu | décision sans responsable ni échéance | tableau à quatre colonnes, aucune ligne vide |
| Programme | horaires écrits « 8h » ou « 8H00 » | « 8 h 00 » avec espace insécable |
| Journal | photos sans légende, colonnes déséquilibrées | légende sous chaque photo, saut continu final |
| Livret de chants | chant coupé entre deux pages | `para.keepLines` sur chaque couplet, `para.keepNext` sur le titre |
| Fiche sanitaire | données médicales envoyées par courriel ouvert | remise en main propre, enveloppe fermée |
| CV | deux pages pour trois lignes de trop | réduire les marges à 15 mm avant de réduire le corps sous 10 pt |
| Rapport financier | totaux saisis à la main | `table.formula`, relire chaque somme |

Règle de fond : un modèle n'est pas une contrainte, c'est une mémoire. On garde la structure, on adapte le texte et on vérifie les chiffres, les dates et les noms propres un par un avant d'envoyer.

## Particularités dans le navigateur (ScoutHub) : à lire avant d'exécuter une séquence
Les séquences `api_lot` de cette fiche ont été **exécutées sur l'application réelle** pour en vérifier les paramètres ; elles supposent le contexte indiqué dans leur titre. Dans le navigateur :
- **Pas de chemins de fichiers.** Les commandes qui prennent un `path` pour LIRE un fichier (`insert.picture` avec `path`, ouverture de fichiers) répondent « files are opened through the browser on the web ». Pour une image, la personne l'insère par l'interface (Insertion ▸ Image) ou la commande reçoit `data` (image en base64) quand l'application l'accepte. Ne jamais inventer un chemin comme `/chemin/image.jpg`.
- **Enregistrer** = l'action `enregistrer` de ChatGDB (jamais `file.save` avec un chemin : « saving to a path is not available in the browser »). Le document est alors gardé dans la conversation et la personne le retrouve sous ta réponse avec les boutons « Ouvrir » et « Télécharger ».
- **Export PDF** : `file.exportPdf` fonctionne dans Word et Excel (le PDF est ajouté sous ta réponse avec un bouton « Télécharger ») ; PowerPoint n'exporte pas de PDF par commande dans le navigateur (`file.export` exige un chemin) : demander à la personne Fichier ▸ Exporter, ou livrer le .pptx.
- **Identifiants** : une séquence qui écrit `ID_…` ou `Nom de feuille` en majuscules est un **modèle** : remplace par la valeur réelle lue avec `api_inspecter` / `slide.inspect` avant d'exécuter. Une feuille Excel ou une diapositive citée doit exister (crée-la d'abord avec « classeur » ou `home.insertSheet`).

## Liste de contrôle avant de livrer
- [ ] Le modèle choisi correspond au but ; longueur respectée.
- [ ] Marges, corps et interlignes conformes à la rubrique.
- [ ] Tous les éléments obligatoires sont présents.
- [ ] Date, lieu, heure et destinataire exacts.
- [ ] Formule d'appel et de politesse cohérentes.
- [ ] Espaces insécables et typographie française vérifiées.
- [ ] Styles appliqués, pas de mise en forme manuelle.
- [ ] Tableaux : en-tête répété, nombres alignés, texte alternatif.
- [ ] Case à cocher et zones de saisie utilisables.
- [ ] Pas de commentaire ni de révision.
- [ ] Données personnelles protégées.
- [ ] Export PDF en mode strict relu page par page.

## Questions auxquelles la fiche répond
- Comment mettre en page une lettre officielle (adresses, objet, politesse, signature) ?
- Que doit contenir une convocation à une assemblée générale ?
- Comment structurer un compte rendu avec décisions, responsable et échéance ?
- Comment faire un programme de camp jour par jour avec un tableau horaire ?
- Comment composer un journal de camp ou un livret de chants en colonnes ?
- Comment présenter une fiche d'activité ou de jeu en une page ?
- Comment rédiger une autorisation parentale et une fiche sanitaire ?
- Comment faire un CV d'une page, une attestation, un rapport financier ?
