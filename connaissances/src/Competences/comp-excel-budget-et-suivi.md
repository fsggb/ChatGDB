---
id: comp-excel-budget-et-suivi
titre: Modèles chiffrés d'une unité scoute (budget de camp, inscrits, présences, menus, trésorerie, tableau de bord)
theme: Compétences
type: synthese
sources:
  - titre: Usages de la gestion associative et de la comptabilité simple d'une petite structure (budget prévisionnel, suivi de trésorerie, tableaux de suivi)
mots_cles: budget de camp, prévisionnel, réalisé, écart, inscrits, paiements, cotisations, trésorerie, présence, planning des services, inventaire, matériel, menus, courses, quantités par personne, compte de résultat, tableau de bord, SOMME.SI.ENS, SUMIFS, RECHERCHEX, XLOOKUP, NB.SI, ARRONDI, api_lot, classeur
liens: comp-excel-tableaux-elegants, app-excel, comp-couleur-et-identite-fsggb, comp-typographie-francaise, comp-pdf-export-accessibilite, suite-craft-mcp
resume: Neuf modèles de classeurs pour la vie d'une unité scoute, chacun avec ses colonnes, ses formules écrites en français et en anglais, ses contrôles d'erreur, un exemple réaliste et la façon de les construire avec l'action « classeur » et les commandes natives de GridCraft. Pour la mise en forme générale, voir comp-excel-tableaux-elegants.
---

## Comment lire cette fiche

Chaque modèle suit la même trame : **à quoi il sert**, **feuilles et colonnes**, **formules** (version française puis anglaise), **contrôles**, **mise en forme**, **exemple de données**. La mise en forme générique (en-têtes bleu nuit `#000761`, lignes à 18 pt, formats de nombres, figer les volets, impression) est décrite dans la fiche `comp-excel-tableaux-elegants` ; on n'en répète ici que les choix propres à chaque modèle.

### Formules : deux écritures

Excel français écrit `=SOMME(B2:B9)` et sépare les arguments par un **point-virgule** ; l'application GridCraft accepte les formules **en anglais**, avec des **virgules** : `=SUM(B2:B9)`. Dans l'action `classeur` et dans `cell.set` / `range.setValues`, **écrire toujours les formules en anglais** (c'est ce qui est garanti). Les deux colonnes ci-dessous donnent les deux écritures ; dans un tableur en interface française, la version française s'affiche d'elle-même.

| Fonction | Français (`;`) | Anglais (`,`) |
|---|---|---|
| Somme | `=SOMME(B2:B9)` | `=SUM(B2:B9)` |
| Somme conditionnelle | `=SOMME.SI.ENS(D:D;B:B;"Transport")` | `=SUMIFS(D:D,B:B,"Transport")` |
| Recherche (moderne) | `=RECHERCHEX(A2;Prix!A:A;Prix!B:B;"?")` | `=XLOOKUP(A2,Prix!A:A,Prix!B:B,"?")` |
| Recherche (classique) | `=RECHERCHEV(A2;Prix!$A$2:$C$50;2;FAUX)` | `=VLOOKUP(A2,Prix!$A$2:$C$50,2,FALSE)` |
| Condition | `=SI(C2=0;0;(D2-C2)/C2)` | `=IF(C2=0,0,(D2-C2)/C2)` |
| Comptage conditionnel | `=NB.SI(G:G;"Soldé")` | `=COUNTIF(G:G,"Soldé")` |
| Comptage à plusieurs critères | `=NB.SI.ENS(D:D;"Louveteaux";G:G;"Soldé")` | `=COUNTIFS(D:D,"Louveteaux",G:G,"Soldé")` |
| Moyenne | `=MOYENNE(D2:D40)` | `=AVERAGE(D2:D40)` |
| Arrondi | `=ARRONDI(B2/C2;2)` | `=ROUND(B2/C2,2)` |
| Arrondi supérieur (achats) | `=ARRONDI.SUP(B2;0)` | `=ROUNDUP(B2,0)` |
| Texte formaté | `=TEXTE(A2;"jjjj j mmmm")` | `=TEXT(A2,"dddd d mmmm")` |
| Date | `=DATE(2026;7;12)` | `=DATE(2026,7,12)` |
| Jour de la semaine | `=JOURSEM(A2;2)` (lundi = 1) | `=WEEKDAY(A2,2)` |
| Aujourd'hui | `=AUJOURDHUI()` | `=TODAY()` |
| Erreur remplacée | `=SIERREUR(B2/C2;0)` | `=IFERROR(B2/C2,0)` |
| Index et reste | `=INDEX(Patrouilles;MOD(LIGNE()-2;4)+1)` | `=INDEX(Patrouilles,MOD(ROW()-2,4)+1)` |
| Produit de colonnes | `=SOMMEPROD(B2:B9;C2:C9)` | `=SUMPRODUCT(B2:B9,C2:C9)` |
| Valeurs non vides | `=NBVAL(A2:A200)` | `=COUNTA(A2:A200)` |

Attention : dans `TEXT`, les codes de format changent de langue (français `jjjj`, `aaaa` ; anglais `dddd`, `yyyy`). Dans le classeur construit par ChatGDB, utiliser **les codes anglais**. Les sections ci-dessous donnent les deux versions quand elles diffèrent.

### Règles communes à tous les modèles

1. **Une feuille `Paramètres`** : année, nom de l'unité, nombre de participants, dates de début et de fin, taux (imprévus 5 %), prix unitaires, listes (unités, statuts, catégories). Les cellules clés sont **nommées** (`formulas.defineName`).
2. **Une colonne « Statut »** calculée plutôt que saisie, avec un vocabulaire fermé (Soldé, Partiel, Non payé).
3. **Un bloc « Contrôles »** en bas ou à droite : chaque contrôle affiche `OK` ou `À VÉRIFIER` (formule `=IF(ABS(x-y)<0.005,"OK","À VÉRIFIER")`, soit `=SI(ABS(x-y)<0,005;"OK";"À VÉRIFIER")`).
4. **Arrondir dans la formule** (`ROUND`) tout montant divisé (cotisation par famille, partage de frais) pour que la somme des parts soit égale au total.
5. **Pas de nom d'enfant en clair dans un classeur envoyé à des tiers** : limiter les colonnes personnelles (nom, prénom, unité), jamais de santé ni d'adresse dans les tableaux de suivi ; protéger et ne partager que le strict nécessaire.
6. **Sauvegarde** : un classeur par camp ou par année scoute (`Camp-ete-2026-budget.xlsx`), jamais « version finale (2) ».

## Modèle 1. Budget de camp : recettes, dépenses, prévisionnel, réalisé, écart

### À quoi il sert

Décider du **prix demandé aux familles** avant le camp (prévisionnel), suivre les dépenses réelles pendant et après (réalisé), et rendre compte au conseil de groupe et aux familles (écart expliqué).

### Feuilles

| Feuille | Rôle |
|---|---|
| `Paramètres` | Nombre de scouts, de chefs, nombre de jours, taux d'imprévus, date de début |
| `Budget` | Une ligne par poste : prévu, réalisé, écart (la synthèse) |
| `Dépenses` | Journal de toutes les dépenses réelles : une ligne par facture ou ticket |
| `Recettes` | Journal des recettes réelles (participations, subventions, ventes) |

### Colonnes de la feuille `Budget`

| Col. | En-tête | Contenu | Format | Largeur (car.) |
|---|---|---|---|---|
| A | Poste | Libellé | Texte | 30 |
| B | Catégorie | Liste : Hébergement, Transport, Alimentation, Activités, Santé, Divers | Texte | 16 |
| C | Prévu (€) | Montant prévisionnel | `#,##0.00 "€"` | 14 |
| D | Réalisé (€) | `=SUMIFS(Dépenses!$E:$E,Dépenses!$B:$B,A2)` | idem | 14 |
| E | Écart (€) | `=D2-C2` | idem, négatif en rouge doux | 14 |
| F | Écart (%) | `=IF(C2=0,0,(D2-C2)/C2)` | `0.0%` | 10 |
| G | Statut | `=IF(F2>0.1,"Dépassement",IF(F2>0,"À surveiller","Dans le budget"))` | Texte | 16 |

Sens de l'écart : pour une **dépense**, écart positif = dépassement (mauvais) ; pour une **recette**, écart positif = mieux que prévu (bon). Écrire cette règle dans la note de la feuille et inverser les couleurs conditionnelles pour les recettes.

### Formules clés

| Besoin | Français | Anglais |
|---|---|---|
| Total des dépenses prévues | `=SOMME(C2:C9)` | `=SUM(C2:C9)` |
| Imprévus (taux nommé `Taux_imprevus`) | `=ARRONDI(SOMME(C2:C8)*Taux_imprevus;2)` | `=ROUND(SUM(C2:C8)*Taux_imprevus,2)` |
| Coût par participant | `=ARRONDI(C10/Nb_participants;2)` | `=ROUND(C10/Nb_participants,2)` |
| Coût par jour | `=ARRONDI(C10/Nb_jours;2)` | `=ROUND(C10/Nb_jours,2)` |
| Coût par participant et par jour | `=ARRONDI(C10/(Nb_participants*Nb_jours);2)` | `=ROUND(C10/(Nb_participants*Nb_jours),2)` |
| Prix à demander par scout (équilibre) | `=ARRONDI.SUP((Total_depenses-Total_autres_recettes)/Nb_scouts;0)` | `=ROUNDUP((Total_depenses-Total_autres_recettes)/Nb_scouts,0)` |
| Solde du camp | `=Total_recettes-Total_depenses` | idem |

Le **prix à demander** se calcule à l'euro supérieur : c'est la seule valeur qu'on arrondit vers le haut. Les chefs participent aux frais mais ne paient pas toujours : le paramètre `Nb_scouts` (payants) est distinct de `Nb_participants` (tous les présents).

### Contrôles

- `Σ des dépenses par poste = Σ du journal Dépenses` : `=IF(ABS(SUM(D2:D9)-SUM(Dépenses!E:E))<0.005,"OK","À VÉRIFIER")`. Si un poste du journal n'existe pas dans `Budget` (faute de frappe), ce contrôle devient « À VÉRIFIER ».
- Aucune dépense sans catégorie : `=COUNTBLANK(Dépenses!B2:B300)` doit rester égal au nombre de lignes vides attendues.
- Total prévu des recettes = total prévu des dépenses (équilibre voulu) ou écart connu et justifié.

### Mise en forme

- En-têtes bleu nuit ; ligne **Total dépenses** en gras avec filet supérieur bleu nuit ; ligne **Solde** avec fond `#EEF0F8`.
- Colonne E : règle conditionnelle « supérieur à 0 » sur les dépenses (fond `#FBE5E5`, texte `#A32020`), « inférieur à 0 » en vert doux.
- Colonne C (prévu) en bleu nuit, colonne D (réalisé) en couleur normale : le prévisionnel se lit comme une consigne.
- Un graphique en barres **Prévu / Réalisé par catégorie** (bleu nuit, or), titre énonçant le message (« Le transport dépasse de 12 % »).

### Exemple de données : camp d'été 2026

Troupe Saint-Louis, 24 scouts et 6 chefs, 10 jours du dimanche 12 au mardi 21 juillet 2026.

| Poste | Catégorie | Prévu (€) |
|---|---|---|
| Location du terrain | Hébergement | 600,00 |
| Autocar aller-retour | Transport | 2 400,00 |
| Alimentation (30 pers. × 10 j × 8,50 €) | Alimentation | 2 550,00 |
| Pharmacie et sécurité | Santé | 120,00 |
| Matériel pédagogique | Activités | 200,00 |
| Assurance | Divers | 180,00 |
| Sorties et activités | Activités | 450,00 |
| Imprévus (5 %) | Divers | 325,00 |
| **Total** | | **6 825,00** |

Recettes prévues : participations des familles 24 × 200 € = 4 800 € ; subvention de la mairie 1 300 € ; vente de crêpes 450 € ; don de la paroisse 300 € ; total 6 850 € ; solde prévisionnel +25 €. Coût par participant : 227,50 € ; par jour : 682,50 €.

### Construction avec ChatGDB

Étape 1, les données et formules avec l'action `classeur` (extrait du `budget` ; les feuilles `Dépenses` et `Recettes` sont créées dans le même appel) :

```json
{"action": "classeur", "nom": "Camp ete 2026 - budget", "feuilles": [
 {"nom": "Paramètres", "largeurs": [30, 16], "lignes": [
   ["Paramètre", "Valeur"],
   ["Nombre de scouts payants", 24],
   ["Nombre de participants (chefs inclus)", 30],
   ["Nombre de jours", 10],
   ["Taux d'imprévus", 0.05],
   ["Date de début", "=DATE(2026,7,12)"]]},
 {"nom": "Budget", "largeurs": [32, 16, 14, 14, 14, 10, 16], "lignes": [
   ["Poste", "Catégorie", "Prévu (€)", "Réalisé (€)", "Écart (€)", "Écart (%)", "Statut"],
   ["Location du terrain", "Hébergement", 600, "=SUMIFS(Dépenses!$E:$E,Dépenses!$B:$B,A2)", "=D2-C2", "=IF(C2=0,0,(D2-C2)/C2)", "=IF(F2>0.1,\"Dépassement\",IF(F2>0,\"À surveiller\",\"Dans le budget\"))"],
   ["Autocar aller-retour", "Transport", 2400, "=SUMIFS(Dépenses!$E:$E,Dépenses!$B:$B,A3)", "=D3-C3", "=IF(C3=0,0,(D3-C3)/C3)", "=IF(F3>0.1,\"Dépassement\",IF(F3>0,\"À surveiller\",\"Dans le budget\"))"],
   ["Total", "", "=SUM(C2:C3)", "=SUM(D2:D3)", "=D4-C4", "=IF(C4=0,0,(D4-C4)/C4)", ""]]},
 {"nom": "Dépenses", "largeurs": [12, 30, 36, 14, 14], "lignes": [
   ["Date", "Poste", "Libellé", "Fournisseur", "Montant (€)"],
   ["=DATE(2026,6,3)", "Location du terrain", "Acompte", "Commune de Lanvaux", 300]]}
]}
```

Dans la colonne « Poste » du journal, le texte doit être **identique** à celui de `Budget` (c'est la clé de la somme conditionnelle) : utiliser une validation par liste pointant sur `Budget!$A$2:$A$9`.

Étape 2, la mise en forme (adapter les plages au nombre de lignes) :

```json
{"action": "api_lot", "commandes": [
 {"commande": "sheet.activate", "parametres": {"sheet": "Budget"}},
 {"commande": "home.fillColor", "parametres": {"range": "A1:G1", "color": "#000761"}},
 {"commande": "home.fontColor", "parametres": {"range": "A1:G1", "color": "#FFFFFF"}},
 {"commande": "home.bold", "parametres": {"range": "A1:G1", "on": true}},
 {"commande": "home.alignRight", "parametres": {"range": "C1:F4"}},
 {"commande": "home.numberFormat", "parametres": {"range": "C2:E4", "code": "#,##0.00 \"€\""}},
 {"commande": "home.numberFormat", "parametres": {"range": "F2:F4", "code": "0.0%"}},
 {"commande": "home.rowHeight", "parametres": {"rows": "1:1", "points": 24}},
 {"commande": "home.rowHeight", "parametres": {"rows": "2:4", "points": 18}},
 {"commande": "home.borders", "parametres": {"range": "A4:G4", "preset": "top", "style": "thin", "color": "#000761"}},
 {"commande": "home.bold", "parametres": {"range": "A4:G4", "on": true}},
 {"commande": "view.freezeTopRow", "parametres": {"sheet": "Budget"}},
 {"commande": "formulas.defineName", "parametres": {"name": "Taux_imprevus", "refersTo": "=Paramètres!$B$5"}},
 {"commande": "home.conditionalFormat", "parametres": {"range": "E2:E3", "rule": {"type": "cellIs", "operator": "greaterThan", "value": 0}}}
]}
```

Le style de la règle conditionnelle se vérifie avec `api_commandes` (`requete: "conditional"`) avant usage. Étape 3 : graphique `insert.chart` (`type: "column"`, `subtype: "clustered"`, plage `A1:A3` plus `C1:D3` : sélectionner d'abord les cellules avec `selection.set`), mise en page d'impression selon la fiche `comp-excel-tableaux-elegants`.

## Modèle 2. Liste des inscrits et suivi des paiements

### À quoi il sert

Savoir **qui est inscrit, qui a payé, combien reste dû**, relancer les familles et prouver les encaissements.

### Feuilles

`Inscrits` (une ligne par enfant), `Paiements` (une ligne par versement), `Paramètres` (prix par unité, échéances, liste des modes de paiement).

### Colonnes de `Inscrits`

| Col. | En-tête | Contenu | Format |
|---|---|---|---|
| A | N° | Numéro d'ordre | `0` |
| B | Nom | Texte | – |
| C | Prénom | Texte | – |
| D | Unité | Liste : Louveteaux, Éclaireurs, Pionniers… | – |
| E | Date de naissance | Date | `dd/mm/yyyy` |
| F | Âge au camp | `=INT((Paramètres!$B$6-E2)/365.25)` | `0` |
| G | Montant dû (€) | `=XLOOKUP(D2,Paramètres!$A$2:$A$5,Paramètres!$B$2:$B$5,0)` | `#,##0.00 "€"` |
| H | Versé (€) | `=SUMIFS(Paiements!$D:$D,Paiements!$A:$A,A2)` | idem |
| I | Reste (€) | `=G2-H2` | idem |
| J | Statut | `=IF(I2<=0,"Soldé",IF(H2>0,"Partiel","Non payé"))` | Texte |
| K | Relance | Date de la dernière relance | `dd/mm/yyyy` |

Dans `Paiements` : A = N° de l'inscrit (clé), B = date, C = mode (Chèque, Virement, Espèces, Chèques-vacances), D = montant, E = remarque.

### Formules à connaître

| Besoin | Français | Anglais |
|---|---|---|
| Prix selon l'unité | `=RECHERCHEX(D2;Paramètres!$A$2:$A$5;Paramètres!$B$2:$B$5;0)` | `=XLOOKUP(D2,Paramètres!$A$2:$A$5,Paramètres!$B$2:$B$5,0)` |
| Version classique | `=RECHERCHEV(D2;Paramètres!$A$2:$B$5;2;FAUX)` | `=VLOOKUP(D2,Paramètres!$A$2:$B$5,2,FALSE)` |
| Versé par inscrit | `=SOMME.SI.ENS(Paiements!D:D;Paiements!A:A;A2)` | `=SUMIFS(Paiements!D:D,Paiements!A:A,A2)` |
| Nombre de soldés | `=NB.SI(J:J;"Soldé")` | `=COUNTIF(J:J,"Soldé")` |
| Taux de paiement | `=ARRONDI(SOMME(H2:H60)/SOMME(G2:G60);3)` | `=ROUND(SUM(H2:H60)/SUM(G2:G60),3)` |
| Nombre par unité | `=NB.SI(D:D;"Louveteaux")` | `=COUNTIF(D:D,"Louveteaux")` |
| Reste dû d'une unité | `=SOMME.SI(D:D;"Louveteaux";I:I)` | `=SUMIF(D:D,"Louveteaux",I:I)` |
| Retard de relance | `=SI(ET(J2<>"Soldé";AUJOURDHUI()>Paramètres!$B$7);"Relancer";"")` | `=IF(AND(J2<>"Soldé",TODAY()>Paramètres!$B$7),"Relancer","")` |

### Contrôles

- Le total versé dans `Inscrits` doit égaler le total des montants de `Paiements` : `=IF(ABS(SUM(Inscrits!H:H)-SUM(Paiements!D:D))<0.005,"OK","À VÉRIFIER")` ; sinon un paiement porte un numéro d'inscrit inexistant.
- Aucun doublon de N° : mise en forme conditionnelle « doublons » sur la colonne A.
- Aucun reste négatif (trop-perçu) non expliqué : règle « inférieur à 0 » en orange doux.
- Le nombre d'inscrits (`COUNTA(B2:B200)`) est égal au nombre de lignes du tableau de bord.

### Mise en forme

Tableau structuré `T_Inscrits` (filtre, bandes). Colonne **Statut** avec mise en forme conditionnelle : « Soldé » fond `#E3F3EA` texte `#1E7B4B` ; « Partiel » fond `#FFF1D6` texte `#8A5A00` ; « Non payé » fond `#FBE5E5` texte `#A32020`. Toujours le **mot** en plus de la couleur. Figer la ligne 1 et les colonnes A à C. Largeurs : N° 6, Nom 18, Prénom 16, Unité 14, Date 12, Montants 14, Statut 12.

### Exemple (8 lignes, camp d'été 2026, prix Louveteaux 160 €, Éclaireurs 200 €)

| N° | Nom | Prénom | Unité | Dû (€) | Versé (€) | Reste (€) | Statut |
|---|---|---|---|---|---|---|---|
| 1 | Martin | Léa | Éclaireurs | 200 | 200 | 0 | Soldé |
| 2 | Bernard | Louis | Éclaireurs | 200 | 100 | 100 | Partiel |
| 3 | Dubois | Camille | Louveteaux | 160 | 0 | 160 | Non payé |
| 4 | Thomas | Arthur | Louveteaux | 160 | 160 | 0 | Soldé |
| 5 | Robert | Inès | Éclaireurs | 200 | 200 | 0 | Soldé |
| 6 | Petit | Hugo | Louveteaux | 160 | 80 | 80 | Partiel |
| 7 | Durand | Manon | Éclaireurs | 200 | 0 | 200 | Non payé |
| 8 | Moreau | Jules | Louveteaux | 160 | 160 | 0 | Soldé |

Taux de paiement : 900 / 1 440 = 62,5 %. Les noms ci-dessus sont fictifs : ne jamais utiliser de vraies identités dans un exemple partagé.

### Construction

Action `classeur` pour `Inscrits`, `Paiements`, `Paramètres` (formules en anglais), puis `api_lot` :
`insert.table` (`{"range": "A1:K9", "header": true, "style": "TableStyleMedium2", "name": "T_Inscrits"}`), `data.validation` (liste sur la colonne Unité), `home.conditionalFormat` (règles `containsText` ou `expression` sur la colonne J, voir fiche `comp-excel-tableaux-elegants` séquence 3), `view.freezePanes` (`{"sheet": "Inscrits", "cell": "D2"}`), `data.filter`.

## Modèle 3. Tableau de présence

### Usage

Suivre les présences aux réunions de l'année (ou aux jours d'un camp) et repérer les absences répétées, sans jugement : l'objectif est d'écrire aux familles à temps.

### Structure

Une ligne par enfant, **une colonne par date de réunion** (le seul cas où des colonnes répétées se justifient : une grille de présence se lit à plat), codes saisis par liste : `P` présent, `A` absent, `E` excusé.

| Col. | Contenu |
|---|---|
| A | Nom (ou numéro d'inscrit) |
| B | Unité |
| C à N | Dates (ligne 1, format `dd/mm`), codes P / A / E (lignes 2…) |
| O | Présences : `=COUNTIF(C2:N2,"P")` |
| P | Absences : `=COUNTIF(C2:N2,"A")` |
| Q | Excusés : `=COUNTIF(C2:N2,"E")` |
| R | Taux de présence : `=IF(COUNTA(C2:N2)=0,0,O2/COUNTA(C2:N2))` |

| Besoin | Français | Anglais |
|---|---|---|
| Présents un jour donné | `=NB.SI(C2:C40;"P")` | `=COUNTIF(C2:C40,"P")` |
| Taux d'une réunion | `=ARRONDI(NB.SI(C2:C40;"P")/NBVAL(C2:C40);3)` | `=ROUND(COUNTIF(C2:C40,"P")/COUNTA(C2:C40),3)` |
| Moyenne de présence de l'unité | `=MOYENNE(R2:R40)` | `=AVERAGE(R2:R40)` |
| Alerte (3 absences non excusées) | `=SI(P2>=3;"Contacter la famille";"")` | `=IF(P2>=3,"Contacter la famille","")` |

Contrôle : pour chaque colonne de date, présents + absents + excusés = effectif de l'unité : `=IF(COUNTA(C2:C40)=Effectif,"OK","À VÉRIFIER")`.

Mise en forme : cases de 4 caractères de large, centrées ; validation `"P,A,E"` ; mise en forme conditionnelle sobre : `P` sans couleur (le plus fréquent ne doit pas s'afficher), `A` fond `#FBE5E5`, `E` fond `#FFF1D6`. Colonne R en barres de données bleu nuit. Date en tête inclinée à 45° seulement si la grille dépasse 12 colonnes. Pour l'impression : A4 paysage, ajuster à 1 page en largeur, répéter les lignes d'en-tête.

Exemple : unité de 8 Louveteaux, réunions des 13 et 20 septembre, 4 octobre 2026 (dimanches de l'automne, selon le calendrier de l'unité) : `P P P / P A P / P E P / A A P …`.

## Modèle 4. Planning des services (camp ou année)

### Usage

Répartir équitablement les services (cuisine, vaisselle, bois, eau, feu de camp) entre les équipes, sur les jours du camp, avec une rotation visible.

### Colonnes

| Col. | En-tête | Formule ou contenu |
|---|---|---|
| A | Date | `=Paramètres!$B$6+ROW()-2` (jour 1 = début du camp) |
| B | Jour | `=TEXT(A2,"dddd")` (fr. `=TEXTE(A2;"jjjj")`) |
| C | Petit-déjeuner | `=INDEX(Equipes,MOD(ROW()-2,4)+1)` |
| D | Déjeuner | `=INDEX(Equipes,MOD(ROW()-1,4)+1)` |
| E | Dîner | `=INDEX(Equipes,MOD(ROW(),4)+1)` |
| F | Vaisselle | `=INDEX(Equipes,MOD(ROW()+1,4)+1)` |
| G | Feu / bois | Texte libre ou liste |

`Equipes` est un nom défini sur une plage de 4 cellules de `Paramètres` (patrouilles : Faucons, Loups, Aigles, Cerfs). Chaque équipe revient au même service tous les 4 jours : rotation équitable. Pour des équipes en nombre `n`, remplacer `4` par `NB.VAL(Equipes)` (`COUNTA(Equipes)`).

Contrôle d'équité : `=COUNTIF(C2:F11,"Faucons")` pour chaque équipe : écart maximum entre équipes ≤ 1.

Mise en forme : une colonne de jour en gras ; week-end (`=WEEKDAY($A2,2)>5`) en fond `#EEF0F8` ; une couleur par équipe très pâle (4 teintes douces maximum) et le nom toujours écrit. Largeurs : date 12, jour 12, services 14. Impression A4 paysage, une page.

Exemple (extrait) : dimanche 12/07/2026, lundi 13/07/2026… avec Faucons au petit-déjeuner le 12, Loups le 13, Aigles le 14, Cerfs le 15, puis retour aux Faucons le 16.

## Modèle 5. Liste de matériel et inventaire

### Usage

Savoir ce que possède la troupe, en quel état, où c'est rangé, ce qu'il manque avant le camp.

### Colonnes

| Col. | En-tête | Contenu |
|---|---|---|
| A | Code | Référence courte (TNT-01, MAR-03) |
| B | Article | Tente 4 places, hache, marmite 20 L… |
| C | Catégorie | Liste : Tentes, Cuisine, Outils, Pharmacie, Pédagogie, Cérémonial |
| D | Quantité totale | Entier |
| E | Bon état | Entier |
| F | À réparer | Entier |
| G | Manquant | `=D2-E2-F2` |
| H | Lieu | Local, remorque, coffre, chef de patrouille |
| I | Responsable | Prénom du chef |
| J | Dernier contrôle | Date |
| K | Statut | `=IF(G2<0,"Incohérent",IF(G2>0,"Manquant",IF(F2>0,"Réparer","OK")))` |

Formules : total par catégorie `=SOMME.SI(C:C;"Tentes";D:D)` / `=SUMIF(C:C,"Tentes",D:D)` ; nombre d'articles à réparer `=SOMME(F2:F200)` / `=SUM(F2:F200)` ; articles à contrôler depuis plus d'un an `=NB.SI(J2:J200;"<"&(AUJOURDHUI()-365))` / `=COUNTIF(J2:J200,"<"&(TODAY()-365))`.

Contrôles : `Manquant` jamais négatif (`G2<0` signale une erreur de saisie : règle conditionnelle orange) ; `D = E + F + G` par construction ; aucun code en double.

Mise en forme : tableau structuré avec filtre, validation en liste pour Catégorie, colonne K en conditionnel (OK vert doux, Réparer orange doux, Manquant rouge doux), colonne Dernier contrôle en `dd/mm/yyyy`. Une version **imprimable** (liste de chargement) : zone d'impression A:E, case à cocher en colonne vide de 5 caractères, A4 portrait.

Exemple : `TNT-01 | Tente 4 places | Tentes | 12 | 10 | 1 | manquant 1 | remorque | Matthieu | 05/06/2026 | Manquant`.

## Modèle 6. Plan de menus et liste de courses

### Usage

Calculer **les quantités à acheter** à partir d'un menu et du nombre de participants, avec une marge, et le **coût**.

### Feuilles

`Menus` (qui mange quoi quand), `Recettes` (quantité par personne de chaque ingrédient), `Courses` (liste agrégée avec prix).

### `Menus`

| Col. | En-tête | Contenu |
|---|---|---|
| A | Date | `=DATE(2026,7,12)+ROW()-2` |
| B | Repas | Petit-déjeuner, Déjeuner, Goûter, Dîner |
| C | Plat | Pâtes bolognaise… |
| D | Convives | `=Nb_participants` (ou un nombre propre au repas : pique-nique, sortie) |
| E | Régimes particuliers | Nombre (sans-gluten, végétarien : rester vague, sans nom) |

### `Recettes` (une ligne par ingrédient d'un plat)

| Plat | Ingrédient | Quantité par personne | Unité |
|---|---|---|---|
| Pâtes bolognaise | Pâtes | 100 | g |
| Pâtes bolognaise | Viande hachée | 120 | g |
| Pâtes bolognaise | Sauce tomate | 80 | g |
| Pâtes bolognaise | Fromage râpé | 15 | g |

### `Courses` (une ligne par ingrédient)

| Col. | En-tête | Formule |
|---|---|---|
| A | Ingrédient | texte |
| B | Besoin brut (g) | `=SUMPRODUCT((Recettes!$B$2:$B$80=A2)*Recettes!$C$2:$C$80*COUNTIFS(Menus!$C$2:$C$60,Recettes!$A$2:$A$80)*Nb_participants)` |
| C | Marge | `=Marge_courses` (5 % par défaut) |
| D | À acheter (kg) | `=ROUNDUP(B2*(1+C2)/1000,1)` (français : `=ARRONDI.SUP(B2*(1+C2)/1000;1)`) |
| E | Prix au kg (€) | `=XLOOKUP(A2,Prix!A:A,Prix!B:B,0)` (français : `=RECHERCHEX(A2;Prix!A:A;Prix!B:B;0)`) |
| F | Coût (€) | `=ROUND(D2*E2,2)` |

Si la formule `SUMPRODUCT` est trop lourde pour un camp, une **version simple et sûre** : saisir dans `Courses` le **nombre de repas** où l'ingrédient intervient (colonne B), puis `=B2*Quantité_par_personne*Nb_participants*(1+Marge)/1000`.

Règles de quantités par personne (à ajuster à l'âge) : pâtes ou riz 100 à 120 g (sec) ; pommes de terre 250 g ; viande ou poisson 120 à 150 g ; légumes 200 g ; fromage 30 g ; pain 100 g par repas ; lait 25 cl ; beurre 15 g au petit-déjeuner ; fruits 1 pièce par jour et par personne ; eau 2 L par personne et par jour en camp d'été (hors cuisine). Ajouter 10 % à la marge pour les adolescents de 14 ans et plus.

Contrôles : total des convives = nombre de repas × participants ; coût de l'alimentation `Courses!F` égal au prévu de `Budget` à 10 % près : `=IF(ABS(SUM(Courses!F2:F40)/Budget!C4-1)<0.1,"OK","À VÉRIFIER")` ; aucun ingrédient sans prix (`=COUNTIF(E2:E40,0)=0`).

Mise en forme : `Courses` triée par rayon (colonne Rayon : fruits-légumes, épicerie, frais, boucherie) pour faire le plan d'achat ; quantités à 1 décimale ; coût en euros 2 décimales ; total en gras. Version imprimable avec une colonne « Acheté » (case vide) ; impression A4 portrait.

Exemple : 30 personnes, pâtes bolognaise 4 fois : pâtes 4 × 30 × 100 g = 12 kg, avec 5 % de marge : 12,6 kg ; viande hachée 4 × 30 × 120 g = 14,4 kg, avec 5 % : 15,1 kg ; à 9,80 € le kg : 148,00 €.

## Modèle 7. Cotisations et trésorerie

### Usage

Tenir le **journal de caisse et de banque** de l'unité (recettes de cotisations, achats, remboursements) et connaître le solde à tout moment.

### Colonnes du journal

| Col. | En-tête | Contenu |
|---|---|---|
| A | Date | `dd/mm/yyyy` |
| B | Libellé | Court et précis |
| C | Catégorie | Liste : Cotisations, Camp, Matériel, Fournitures, Subvention, Don, Divers |
| D | Compte | Banque, Caisse |
| E | Recette (€) | Montant positif ou vide |
| F | Dépense (€) | Montant positif ou vide |
| G | Solde (€) | `=Solde_initial+SUM($E$2:E2)-SUM($F$2:F2)` |
| H | Pièce | Numéro de justificatif, nom du fichier scanné |
| I | Pointé | Oui / Non (rapproché du relevé) |

Formules :

| Besoin | Français | Anglais |
|---|---|---|
| Solde cumulé | `=Solde_initial+SOMME($E$2:E2)-SOMME($F$2:F2)` | `=Solde_initial+SUM($E$2:E2)-SUM($F$2:F2)` |
| Total par catégorie | `=SOMME.SI.ENS(F:F;C:C;"Camp")` | `=SUMIFS(F:F,C:C,"Camp")` |
| Total du mois | `=SOMME.SI.ENS(E:E;A:A;">="&DATE(2026;9;1);A:A;"<"&DATE(2026;10;1))` | `=SUMIFS(E:E,A:A,">="&DATE(2026,9,1),A:A,"<"&DATE(2026,10,1))` |
| Solde de la caisse | `=SOMME.SI(D:D;"Caisse";E:E)-SOMME.SI(D:D;"Caisse";F:F)` | `=SUMIF(D:D,"Caisse",E:E)-SUMIF(D:D,"Caisse",F:F)` |
| Lignes non pointées | `=NB.SI(I:I;"Non")` | `=COUNTIF(I:I,"Non")` |

Contrôles : **rapprochement bancaire** : `Solde du journal (compte Banque) = solde du relevé` à la date du relevé, écart affiché ; une ligne ne contient jamais une recette **et** une dépense ; aucune ligne sans catégorie ni pièce ; tous les montants `>= 0`.

Mise en forme : recettes en bleu nuit, dépenses en texte normal, solde en gras ; solde négatif en rouge doux ; une ligne d'**ouverture** (solde initial) en tête de journal ; figer la ligne 1 ; filtre sur Catégorie et Compte ; format `#,##0.00 "€"` sur E, F, G.

Exemple : solde initial au 1er septembre 2026 : 1 842,36 € ; 12/09 « Cotisations septembre » +960,00 ; 15/09 « Assurance fédérale » −220,00 ; 20/09 « Papeterie » −34,50 ; solde : 2 547,86 €.

## Modèle 8. Compte de résultat simple

### Usage

Rendre compte en fin d'année scoute ou de camp : **produits** (ce qui est entré) moins **charges** (ce qui est sorti), par catégorie, avec comparaison à l'année précédente.

### Structure

| Ligne | Contenu |
|---|---|
| Produits | Cotisations, Subventions, Dons, Ventes (crêpes, calendriers), Participations aux camps |
| Total des produits | Somme |
| Charges | Camps, Matériel, Fournitures, Assurances et fédération, Formation, Divers |
| Total des charges | Somme |
| **Résultat** | Produits − charges |

Colonnes : A = rubrique, B = année N (réalisé, formule `SUMIFS` sur le journal), C = année N-1 (saisie ou lue dans un autre classeur, en valeurs), D = variation `=B2-C2`, E = variation en % `=IF(C2=0,0,(B2-C2)/C2)` (fr. `=SI(C2=0;0;(B2-C2)/C2)`).

Formule d'une ligne de produits : `=SUMIFS(Journal!$E:$E,Journal!$C:$C,A3,Journal!$A:$A,">="&Début,Journal!$A:$A,"<="&Fin)` (fr. `=SOMME.SI.ENS(Journal!$E:$E;Journal!$C:$C;A3;Journal!$A:$A;">="&Début;Journal!$A:$A;"<="&Fin)`), avec `Début` et `Fin` des cellules nommées de `Paramètres`.

Contrôles : total des produits du compte de résultat = total des recettes du journal pour la période ; idem pour les charges ; `Résultat = variation du solde bancaire + caisse` sur la période (aux opérations d'ordre près). Le résultat est un **excédent** ou un **déficit** ; ne pas écrire « bénéfice » pour une unité scoute (vocabulaire associatif : excédent, déficit, résultat).

Mise en forme : deux niveaux seulement (rubriques en gras, lignes en retrait d'un niveau) ; totaux avec filet supérieur ; Résultat avec double filet inférieur (`home.borders`, `preset: "doubleBottom"`), en bleu nuit gras ; pas de couleur de fond lourde ; format `#,##0 "€"` (euros entiers). A4 portrait.

Exemple : produits 18 420 € (cotisations 9 600 €, participations aux camps 7 200 €, subventions et dons 1 620 €) ; charges 17 980 € ; résultat +440 €. Les chiffres dépendent de chaque unité : toujours les calculer, jamais les recopier d'un exemple.

## Modèle 9. Tableau de bord de groupe

### Usage

Une page, trimestrielle ou avant chaque conseil de groupe : effectifs, finances, camp, échéances.

### Disposition (feuille `Bord`, zone A1:M30, largeurs : colonnes A et M = 2 caractères, B à L = 9 caractères)

| Zone | Cellules | Contenu |
|---|---|---|
| Titre | B1 | « Groupe Saint-Louis, tableau de bord, année scoute 2026-2027 » (16 pt gras, bleu nuit) |
| Filet or | B2:L2 | Bordure basse or `#c6a24e` |
| Mise à jour | K1 | `="Mis à jour le "&TEXT(TODAY(),"dd/mm/yyyy")` (fr. `="Mis à jour le "&TEXTE(AUJOURDHUI();"jj/mm/aaaa")`) |
| Carte 1 | B4:D7 | **Inscrits** : `=COUNTA(Inscrits!B2:B200)` |
| Carte 2 | E4:G7 | **Taux de paiement** : `=SUM(Inscrits!H:H)/SUM(Inscrits!G:G)` format `0%` |
| Carte 3 | H4:J7 | **Reste à encaisser** : `=SUM(Inscrits!I:I)` format `#,##0 "€"` |
| Carte 4 | K4:L7 | **Solde de trésorerie** : dernier solde du journal |
| Graphique 1 | B9:G22 | Inscrits par unité (barres, trié) |
| Graphique 2 | H9:L22 | Prévu et réalisé du camp (colonnes groupées) |
| Tableau | B24:L29 | Les 5 familles au plus gros reste dû (`SORTBY`/`FILTER` ou tri statique) |
| Note | B31 | Sources et définitions, 9 pt gris |

Formules utiles : `=COUNTIF(Inscrits!D:D,"Éclaireurs")` / `=NB.SI(Inscrits!D:D;"Éclaireurs")` ; `=SUMIFS(Journal!E:E,Journal!C:C,"Cotisations")` / `=SOMME.SI.ENS(Journal!E:E;Journal!C:C;"Cotisations")` ; `=MAX(Journal!G:G)` à éviter pour un solde (prendre `=LOOKUP(2,1/(Journal!G2:G999<>""),Journal!G2:G999)` ou, plus simple, une cellule `Solde_actuel` nommée dans le journal).

Contrôles : un bloc discret « Contrôles » en bas (hors zone d'impression) avec `OK` / `À VÉRIFIER` pour : inscrits = lignes du journal des paiements, total versé = total des paiements, budget du camp à l'équilibre, solde bancaire pointé.

Mise en forme : fond blanc ou `#fafafc`, quadrillage et en-têtes masqués (`view.gridlines`, `view.headings`), cartes avec fond `#F3F4F9` et filet or de 2 pt en haut, valeur 26 pt gras bleu nuit, libellé 10 pt gris `#5B6078`. Aucune saisie sur cette feuille : protégée sans mot de passe. Impression : A4 paysage, ajuster à 1 page, zone `A1:M31`.

## Construire un modèle de bout en bout : méthode commune

1. **Définir les questions** auxquelles le tableau répond (« combien reste-t-il à encaisser ? ») avant les colonnes.
2. `classeur` : feuilles `Paramètres`, saisie(s), calculs ; **formules en anglais**, nombres en nombres, dates par `=DATE(a,m,j)`.
3. Relire avec `contenu` : vérifier chaque total à la main sur 2 ou 3 lignes.
4. `api_lot` de mise en forme (voir la fiche `comp-excel-tableaux-elegants`, séquences 1 à 3).
5. `api_lot` de validation et de protection (séquences 6 et 7 de la même fiche).
6. Graphique et mise en page (séquences 4 et 5).
7. Contrôles : feuille `Contrôles` ou bloc dédié ; tout doit afficher `OK`.
8. Capture d'écran et aperçu avant impression ; `file.save`.

### Commandes natives utilisées (vérifiées dans la liste de GridCraft)

| Besoin | Identifiant | Paramètres |
|---|---|---|
| Saisir des valeurs/formules | `range.setValues` | `{range?, values: [[…]], parse?}` |
| Saisir une cellule | `cell.set` | `{cell?, input, sheet?, array?}` |
| Nommer une cellule ou plage | `formulas.defineName` | `{name, refersTo?: "=Paramètres!$B$2:$B$5", scope?, comment?}` |
| Gestionnaire de noms | `formulas.nameManager` | `{}` |
| Ajouter une feuille | `home.insertSheet` | `{name?, before?}` |
| Renommer une feuille | `sheet.rename` | `{sheet?, name}` |
| Couleur d'onglet | `sheet.tabColor` | `{sheet?, color}` |
| Tableau structuré | `insert.table` | `{range?, header?, style?, name?}` |
| Ligne de totaux d'un tableau | `table.totalRow`, `table.totalFunction` | `{table?, on?}` ; `{table?, column, function}` |
| Validation | `data.validation` | `{range?, type, operator?, formula1, formula2?, ignoreBlank?, dropdown?, inputTitle?, inputMessage?, errorStyle?}` |
| Mise en forme conditionnelle | `home.conditionalFormat` | `{range?, rule: {type, operator?, value?, value2?, formula?, text?, …}}` |
| Format de nombre | `home.numberFormat` | `{range?, code}` ou `{range?, format}` |
| Somme automatique | `formulas.autoSum` | `{function?: SUM\|AVERAGE\|COUNT\|MAX\|MIN, range?}` |
| Calculer maintenant | `formulas.calculateNow` | `{}` |
| Afficher les formules | `formulas.showFormulas` | `{on?}` |
| Tableau croisé | `insert.pivotTable`, `pivot.addField`, `pivot.valueSettings` | `{source?, destination?, …}` ; `{pivot?, field, area: rows\|columns\|values\|filters, func?}` ; `{pivot?, field, func?, showAs?, numberFormat?}` |
| Sous-totaux | `data.subtotal` | `{range?, groupBy, function?, columns, header?}` |
| Regrouper (plan) | `data.group` | `{rows?, cols?, by?, sheet?}` |
| Verrouiller, protéger | `home.lockCell`, `review.protectSheet` | `{range?, on?}` ; `{password?, sort?, autofilter?, …}` |
| Importer un fichier CSV (inscrits venant d'un formulaire) | `data.getData` | `{path \| text}` (CSV, TSV ou JSON) vers une nouvelle feuille |
| Exporter en CSV | `file.exportCsv` | `{path, sheet?, values?}` |
| PDF d'une feuille | `file.print` | `{path?, sheets?, range?, fitToPage?}` |

Pour les listes complètes de paramètres de `home.conditionalFormat` et `data.validation` : `api_commandes` avec `requete: "conditional"` puis `"validation"`.

### Exemple de lot : bloc de contrôles et protection (budget)

```json
{"action": "api_lot", "commandes": [
 {"commande": "cell.set", "parametres": {"sheet": "Budget", "cell": "A12", "input": "Contrôles"}},
 {"commande": "cell.set", "parametres": {"sheet": "Budget", "cell": "A13", "input": "Dépenses du budget = journal"}},
 {"commande": "cell.set", "parametres": {"sheet": "Budget", "cell": "C13", "input": "=IF(ABS(D4-SUM(Dépenses!E:E))<0.005,\"OK\",\"À VÉRIFIER\")"}},
 {"commande": "home.bold", "parametres": {"range": "A12:C12", "on": true}},
 {"commande": "home.conditionalFormat", "parametres": {"range": "C13", "rule": {"type": "containsText", "text": "À VÉRIFIER"}}},
 {"commande": "home.lockCell", "parametres": {"range": "A1:G13", "on": true}},
 {"commande": "review.protectSheet", "parametres": {"sort": true, "autofilter": true}}
]}
```

## Particularités dans le navigateur (ScoutHub) : à lire avant d'exécuter une séquence
Les séquences `api_lot` de cette fiche ont été **exécutées sur l'application réelle** pour en vérifier les paramètres ; elles supposent le contexte indiqué dans leur titre. Dans le navigateur :
- **Pas de chemins de fichiers.** Les commandes qui prennent un `path` pour LIRE un fichier (`insert.picture` avec `path`, ouverture de fichiers) répondent « files are opened through the browser on the web ». Pour une image, la personne l'insère par l'interface (Insertion ▸ Image) ou la commande reçoit `data` (image en base64) quand l'application l'accepte. Ne jamais inventer un chemin comme `/chemin/image.jpg`.
- **Enregistrer** = l'action `enregistrer` de ChatGDB (jamais `file.save` avec un chemin : « saving to a path is not available in the browser »). Le document est alors gardé dans la conversation et la personne le retrouve sous ta réponse avec les boutons « Ouvrir » et « Télécharger ».
- **Export PDF** : `file.exportPdf` fonctionne dans Word et Excel (le PDF est ajouté sous ta réponse avec un bouton « Télécharger ») ; PowerPoint n'exporte pas de PDF par commande dans le navigateur (`file.export` exige un chemin) : demander à la personne Fichier ▸ Exporter, ou livrer le .pptx.
- **Identifiants** : une séquence qui écrit `ID_…` ou `Nom de feuille` en majuscules est un **modèle** : remplace par la valeur réelle lue avec `api_inspecter` / `slide.inspect` avant d'exécuter. Une feuille Excel ou une diapositive citée doit exister (crée-la d'abord avec « classeur » ou `home.insertSheet`).

## Liste de contrôle avant de livrer

- [ ] Chaque modèle a une feuille `Paramètres` ; les constantes sont nommées et non écrites dans les formules.
- [ ] Les formules du classeur sont écrites en anglais (virgules) ; la version française est donnée à la personne si elle la demande.
- [ ] Les nombres sont de vrais nombres, les dates de vraies dates (`=DATE(a,m,j)`), les montants arrondis à 2 décimales dans la formule.
- [ ] Budget : prévu, réalisé, écart, écart %, statut ; sens de l'écart expliqué ; imprévus et coût par participant calculés.
- [ ] Budget équilibré (recettes prévues ≥ dépenses prévues) ou déficit prévu justifié par écrit.
- [ ] Inscrits : clé unique, montant dû par recherche, versé par somme conditionnelle, statut en mots.
- [ ] Présences : codes en liste fermée P / A / E ; effectif de contrôle par date.
- [ ] Planning : rotation équitable vérifiée (écart maximum d'une affectation entre équipes).
- [ ] Inventaire : `Manquant` jamais négatif ; état et lieu renseignés ; date de dernier contrôle.
- [ ] Courses : quantités par personne, marge, arrondi à l'unité d'achat supérieure, prix connus pour tous les articles.
- [ ] Trésorerie : solde cumulé, rapprochement avec le relevé, pièces référencées.
- [ ] Compte de résultat : produits, charges, résultat ; vocabulaire associatif (excédent, déficit).
- [ ] Tableau de bord : 3 à 5 indicateurs, tous des formules, une page, contrôles `OK`.
- [ ] Contrôles visibles (`OK` / `À VÉRIFIER`) et tous au vert avant l'envoi.
- [ ] Mise en forme conforme à la fiche `comp-excel-tableaux-elegants` : en-têtes bleu nuit, couleurs douces doublées d'un mot, figer, filtrer, imprimer en une page de large.
- [ ] Aucune donnée sensible (santé, adresse) dans les tableaux de suivi ; noms limités au nécessaire ; exemples fictifs.
- [ ] Feuille protégée (sans mot de passe sauf demande) ; cellules de saisie déverrouillées.
- [ ] Relu avec `contenu` ; aperçu d'impression et capture vérifiés ; fichier enregistré sous un nom daté.

## Questions auxquelles la fiche répond

- Comment construire le budget d'un camp avec prévisionnel, réalisé et écart ?
- Comment calculer le prix à demander aux familles et le coût par participant ou par jour ?
- Comment suivre les inscrits et les paiements, et relancer les familles ?
- Quelles formules utiliser pour les sommes conditionnelles, les recherches et les comptages (version française et anglaise) ?
- Comment faire un tableau de présence, un planning de services avec rotation équitable, un inventaire de matériel ?
- Comment calculer les quantités par personne, les courses et leur coût pour un menu de camp ?
- Comment tenir le journal de trésorerie, rapprocher la banque, établir un compte de résultat simple ?
- Comment construire un tableau de bord de groupe sur une page ?
- Quels contrôles d'erreurs ajouter pour que les totaux soient fiables ?
- Comment créer ces classeurs avec l'action « classeur » et les commandes natives (api_lot) ?
