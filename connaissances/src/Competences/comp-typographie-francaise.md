---
id: comp-typographie-francaise
titre: Typographie française complète (espaces, guillemets, majuscules, nombres, listes)
theme: Compétences
type: synthese
sources:
  - titre: Usage professionnel de la typographie française (règles de composition courantes en imprimerie et en édition)
  - titre: Normes d'écriture des nombres, des unités et des dates en français (usage du Système international)
mots_cles: typographie, français, espace insécable, espace fine insécable, guillemets, apostrophe typographique, tiret, demi-cadratin, cadratin, points de suspension, majuscules, majuscules accentuées, abréviations, sigles, nombres, dates, heures, siècles, chiffres romains, listes, énumérations, italique, veuves, orphelines, césure, ligatures, Unicode, text.insert, tools.autocorrect, review.language, text.nbsp, correction, relecture
liens: comp-polices-et-hierarchie, comp-redaction-claire, comp-word-document-professionnel, comp-mise-en-page-principes, app-word, app-powerpoint, app-excel
resume: Toutes les règles de typographie française applicables à un document de la fédération, avec les caractères Unicode exacts, les commandes Word pour les saisir et un tableau de plus de soixante corrections « à corriger, correct ». Elle répond aux demandes de relecture, de mise au propre et de rédaction soignée.
---

## Pourquoi la typographie française compte

Un document typographiquement juste paraît plus sérieux, se lit plus vite et ne distrait pas le lecteur par de petits accrocs. Pour une fédération qui écrit à des familles, à des évêchés, à des mairies et à des partenaires, la correction typographique est une forme de politesse. Elle n'est pas une coquetterie : une ponctuation qui tombe seule en début de ligne, un « n° » séparé de son chiffre ou une date coupée en deux gênent la lecture et dénoncent un travail hâtif.

Cette fiche donne des règles **exécutables** : pour chaque cas, le caractère à utiliser, son code Unicode, et l'erreur typique à éviter. Les choix de polices et de tailles sont dans `comp-polices-et-hierarchie`, l'écriture elle-même dans `comp-redaction-claire`.

### Notation utilisée dans les tableaux de cette fiche

Les espaces spéciales sont invisibles à l'écran ; pour éviter toute ambiguïté, les tableaux les notent ainsi :

| Notation | Caractère | Code Unicode | Rôle |
|---|---|---|---|
| `<NB>` | espace insécable | U+00A0 | espace de largeur normale qui interdit le retour à la ligne |
| `<FI>` | espace fine insécable | U+202F | espace étroite (environ le quart d'un cadratin) qui interdit le retour à la ligne |
| `<TH>` | espace fine | U+2009 | espace étroite sécable ; à éviter, on lui préfère `<FI>` |
| (espace) | espace ordinaire | U+0020 | séparation normale entre mots |

Règle d'or : **toute espace qui précède ou suit un signe et qui ne doit jamais se trouver seule en début ou en fin de ligne est insécable.**

## 1. Les espaces

### 1.1 Principe en français

En français soigné, les signes de ponctuation « doubles » (deux traits : `;` `:` `!` `?`) sont précédés d'une espace, tandis que les signes « simples » (`.` `,`) sont collés au mot qui précède. Dans les parenthèses, crochets et accolades, aucune espace à l'intérieur.

| Signe | Avant | Après | Remarque |
|---|---|---|---|
| `.` point | rien | espace | jamais d'espace avant |
| `,` virgule | rien | espace | |
| `;` point-virgule | `<FI>` (ou `<NB>`) | espace | fine insécable en composition soignée |
| `:` deux-points | `<NB>` | espace | espace de largeur normale, insécable |
| `!` exclamation | `<FI>` (ou `<NB>`) | espace | |
| `?` interrogation | `<FI>` (ou `<NB>`) | espace | |
| `…` points de suspension | rien | espace | un seul caractère `…` (U+2026), jamais « ... » |
| `(` parenthèse ouvrante | espace | rien | rien à l'intérieur |
| `)` parenthèse fermante | rien | espace | |
| `«` guillemet ouvrant | espace | `<NB>` (ou `<FI>`) | |
| `»` guillemet fermant | `<NB>` (ou `<FI>`) | espace | |
| `%` pour cent | `<NB>` | espace | « 12<NB>% » |
| `/` barre oblique | rien | rien | « et/ou », « 5/6 » ; avec espaces dans « Paris / Lyon » seulement pour séparer des groupes |

**Fine ou normale ?** L'usage professionnel privilégie la fine insécable devant `;` `!` `?` et à l'intérieur des guillemets français, et l'insécable normale devant `:`. Quand la police ne contient pas U+202F (certaines polices de base l'ignorent et affichent un carré), on se rabat sur l'insécable normale U+00A0, qui est acceptée partout. **Règle de sécurité pour ChatGDB : utiliser U+00A0 partout, sauf demande de composition fine.** Aucune différence de lecture pour un document de bureau ; la fine est un raffinement d'imprimerie.

### 1.2 Saisie des espaces dans Word

1. Régler la langue du texte sur le français : commande `review.language` avec `{"lang":"fr-FR"}`. Word insère alors de lui-même l'espace insécable avant `:` `;` `!` `?` quand l'autocorrection est active.
2. Vérifier l'autocorrection : `tools.autocorrect` avec `{"smartQuotes":true,"dashes":true}`.
3. Pour insérer volontairement une espace insécable : commande `text.nbsp` (sans paramètre), ou `text.insert` avec `{"text":" "}`. Dans le clavier Windows de Word : Ctrl + Maj + Espace ; sur Mac : Option + Espace.
4. Pour une fine insécable : `text.insert` avec `{"text":" "}`, ou `insert.symbol` avec `{"char":" "}`. Sous Windows, saisie manuelle : Alt + 8239 sur le pavé numérique.
5. Pour réparer un texte existant, utiliser `edit.replaceAll` avec le motif de recherche, par exemple `{"text":" :","with":" :"}`. Ne remplacer que si la recherche est exacte (voir la section 15).

Dans `text.insert`, les échappements JSON ` `, ` `, `’`, `«`, `»`, `–`, `—`, `…` sont interprétés comme les caractères correspondants. Exemple de phrase complète :

```
{"text":"Le camp aura lieu du 12 au 19 juillet : venez nombreux !"}
```

### 1.3 Autres espaces insécables indispensables

Placer une insécable (U+00A0) dans tous ces cas, pour qu'aucune coupure de ligne ne sépare les deux éléments :

- entre un nombre et son unité : « 15<NB>km », « 20<NB>€ », « 25<NB>°C » ;
- entre les groupes de milliers : « 12<NB>500 » ;
- entre « n° » et le chiffre : « n°<NB>3 » ;
- entre le jour et le mois : « 14<NB>juillet » ; entre le mois et l'année : « juillet<NB>2027 » ;
- entre un titre de civilité et le nom : « M.<NB>Dupont », « Mme<NB>Martin », « Mgr<NB>Durand », « Père<NB>Jean » ;
- entre « saint » et le nom quand le texte le permet : « saint<NB>Georges » (dans les noms de lieux et de fêtes, c'est un trait d'union : voir la section 6.4) ;
- entre un prénom abrégé et le nom : « J.<NB>Dupont » ;
- entre « p. » et le numéro de page : « p.<NB>12 » ;
- dans une heure : « 9<NB>h<NB>30 » (insécables de chaque côté du « h ») ;
- avant un sigle suivi d'un nombre : « art.<NB>12 ».

## 2. Guillemets

### 2.1 Les guillemets français

Le français emploie les guillemets en chevrons `« »` (U+00AB et U+00BB). Ils entourent une citation, un discours direct, le titre d'un article ou d'un chant, un mot employé dans un sens particulier. Les guillemets droits `"` du clavier (U+0022) et les guillemets anglais `“ ”` (U+201C, U+201D) ne sont pas à employer dans un texte français courant.

Composition : « <NB>texte<NB> » avec insécable à l'intérieur (ou fine insécable en composition soignée), et une espace ordinaire à l'extérieur.

| À corriger | Correct |
|---|---|
| "Servir" est notre devise | « Servir » est notre devise |
| “Toujours prêt” | « Toujours prêt » |
| «Bonjour» | « Bonjour » (avec insécables à l'intérieur) |

### 2.2 Guillemets imbriqués (citation dans la citation)

- Premier niveau : `« »`.
- Deuxième niveau : les guillemets anglais `“ ”` (U+201C, U+201D).
- Troisième niveau : les guillemets simples `‘ ’` (U+2018, U+2019).

Exemple : « Le chef a dit : “ Rappelez-vous la devise : ‘ Toujours prêt ’ ”, et chacun s'est mis en route. »

Une alternative admise est de répéter les chevrons au deuxième niveau ; ne mélanger les deux conventions dans un même document sous aucun prétexte.

### 2.3 Ponctuation et guillemets

- Un point final qui appartient à la phrase citée se place **avant** le guillemet fermant ; un point qui appartient à la phrase d'accueil se place **après**.
- Dans un dialogue, le tiret cadratin ou le demi-cadratin introduit chaque réplique et on évite les guillemets (section 4).
- La citation longue (plus de trois lignes) se met en retrait, sans guillemets, en corps légèrement réduit : voir la section 14.

### 2.4 Saisie

- Dans Word : `text.insert` avec `{"text":"« Servir »"}`. L'autocorrection `smartQuotes` convertit les guillemets droits en guillemets typographiques de la langue ; en français, Word met des chevrons à la place des droits `"` quand la langue est `fr-FR`.
- Pour les guillemets de deuxième niveau : `{"text":"“"}` et `{"text":"”"}`.

## 3. L'apostrophe typographique

L'apostrophe correcte est la **courbe** `’` (U+2019), pas l'apostrophe droite `'` (U+0027). On l'emploie dans l'élision (l’équipe, aujourd’hui, d’abord, qu’il) et dans les possessifs étrangers. L'apostrophe droite est un caractère de machine à écrire : elle déséquilibre la ligne dans une police élégante.

| À corriger | Correct |
|---|---|
| l'équipe | l’équipe |
| aujourd'hui | aujourd’hui |
| un camp d'été | un camp d’été |

Saisie : `text.insert` avec `{"text":"l’équipe"}` ou autocorrection `smartQuotes` active (Word convertit l'apostrophe droite saisie en courbe). Pour remplacer en masse après coup : `edit.replaceAll` avec `{"text":"'","with":"’"}`, après avoir vérifié que le document ne contient pas de code ou d'adresses où l'apostrophe droite doit rester.

## 4. Les tirets : quatre caractères à ne pas confondre

| Nom | Caractère | Code | Usage |
|---|---|---|---|
| trait d'union | `-` | U+002D (ou U+2010) | mots composés, inversions, coupure de mot (« peut-être », « va-t-il ») |
| trait d'union insécable | `‑` | U+2011 | quand le composé ne doit pas être coupé : commande `text.nbHyphen` |
| demi-cadratin | `–` | U+2013 | incise, intervalle, énumération, dialogue |
| cadratin | `—` | U+2014 | dialogue (certains éditeurs), incise longue, signature de citation |
| signe moins | `−` | U+2212 | opération et valeur négative : « −5 °C » |

### Règles d'emploi

1. **Trait d'union** : jamais d'espace de chaque côté. Il relie « rendez-vous », « week-end », « sous-groupe », « c'est-à-dire », « Saint-Jean-de-Luz », « grand-père ».
2. **Demi-cadratin pour les incises** : « Le chef – accompagné de l’aumônier – arrive. » Avec insécable avant et espace après le tiret d'ouverture, insécable avant et espace après le tiret de fermeture. En alternative, on emploie des virgules ou des parenthèses ; ne pas multiplier les incises dans une même phrase.
3. **Demi-cadratin pour les intervalles** : « 2024–2025 » (sans espace), « de 9 h–12 h » est à éviter : on écrit « de 9 h à 12 h ». Dans un tableau de dates : « 12–19 juillet ».
4. **Cadratin ou demi-cadratin pour le dialogue** : chaque réplique commence par un tiret suivi d'une insécable.
5. **Signe moins** : on n'emploie pas le trait d'union à la place du moins : « −5 °C » avec U+2212, et non « -5 °C ». Dans une cellule Excel, la valeur reste un nombre (signe moins ASCII) ; le U+2212 est réservé au texte affiché.
6. **Liste à puces** : le demi-cadratin est admis comme puce, de même qu'un point rond. On choisit un style et on le garde dans tout le document.

### Saisie dans Word

- Demi-cadratin : `text.insert` avec `{"text":"–"}`.
- Cadratin : commande `text.emDash` (sans paramètre) ou `{"text":"—"}`.
- Moins : `{"text":"−"}`.
- Trait d'union insécable : commande `text.nbHyphen`.
- Trait d'union conditionnel (coupure possible seulement en fin de ligne) : commande `text.optionalHyphen`.
- L'autocorrection `dashes` convertit « mot - mot » en demi-cadratin dans l'incise ; vérifier le résultat.

## 5. Les points de suspension

Un seul caractère `…` (U+2026) : commande `text.ellipsis` ou `{"text":"…"}`. Il remplace trois points consécutifs.

- Pas d'espace avant le signe ; une espace après, sauf devant une ponctuation fermante.
- Ne pas ajouter de point final : « Et ainsi de suite… » et non « …. ».
- Après un point d'exclamation ou d'interrogation, on garde le signe puis les points : « Vraiment ?… ».
- Entre crochets `[…]`, ils marquent une coupe dans une citation ; on met les crochets, pas des parenthèses.
- Éviter d'en abuser : un document officiel n'en contient quasiment jamais. Une énumération se termine par « etc. » ou, mieux, par une liste précise, jamais par « etc… » (le point final de « etc. » suffit).

## 6. Majuscules

### 6.1 Majuscules accentuées

On met les accents sur les majuscules : « À la fin », « École », « État », « Église », « Évêché », « ÉQUIPE », « Ça ». Le français a besoin de l'accent pour lever une ambiguïté (« PECHE » : péché, pêche ?). La saisie de `À` `É` `Ç` : caractères Unicode directs `À É Ç` dans `text.insert`. Un titre en capitales garde tous ses accents et ses cédilles. Ne pas ajouter de point à la fin d'un titre en capitales non plus.

### 6.2 Majuscule initiale d'une phrase, d'un titre, d'une énumération

- Majuscule au premier mot de chaque phrase, après `.` `?` `!`, mais **pas après `:`** (sauf citation ou début d'une énumération en phrases complètes) ni après `…` quand la phrase continue.
- Dans un **titre**, seul le premier mot prend la majuscule (et les noms propres) : « Le camp d’été des louveteaux ». On évite la capitalisation anglaise de chaque mot (« Le Camp D’Été Des Louveteaux »).
- Pour les titres d'ouvrages : majuscule au premier mot et au premier nom ; si le titre commence par un article, le nom qui suit porte la majuscule (« Le Petit Prince »).

### 6.3 Noms propres et institutions

| Catégorie | Règle | Exemple |
|---|---|---|
| Nom de personne, prénom | majuscule | Marie Durand |
| Nom de lieu | majuscule au nom spécifique ; « saint » prend trait d'union dans un nom composé | Saint-Étienne, Chartres, mont Blanc |
| Nom géographique commun | minuscule du nom commun, majuscule du nom propre | la vallée de la Loire, la mer Méditerranée |
| Peuples et habitants | majuscule au nom, minuscule à l'adjectif | les Français, un camp français |
| Institution unique | majuscule au premier nom | l’Église, l’État, la Fédération, le Conseil d’administration (selon la spécificité) |
| Institution d'ordre général | minuscule | un conseil d’administration, une mairie |
| Organisme à nom long | majuscule au premier mot significatif | Fédération des scouts et guides Godefroy de Bouillon |
| Fonctions civiles | minuscule | le maire, le président, le trésorier |
| Titres religieux | minuscule quand ils sont accompagnés du nom ; majuscule à la dignité seule | le pape François ; Sa Sainteté ; Mgr Durand ; l’abbé Martin ; l’aumônier |
| Fonctions scoutes | minuscule : le chef de troupe, la cheftaine, l’aumônier, le commissaire | « Le chef de groupe » |
| Unités scoutes | minuscule : la troupe, la meute, le clan, la patrouille, la maîtrise | « la troupe Saint-Louis » |
| Fêtes, solennités | majuscule au premier mot significatif : la Pentecôte, Noël, la Toussaint, le Jeudi saint, Pâques | |
| Jours et mois | minuscule : lundi, juillet | « le 14 juillet » |
| Points cardinaux | minuscule sauf nom de région : « le nord », « le Nord de la France » | |
| Siècles | chiffres romains, voir la section 8.6 | le XXIe siècle |

### 6.4 Saints, lieux de culte, vocabulaire catholique

- **Saint** (adjectif) en minuscule dans « saint Louis », « saint François d'Assise » ; **Saint** avec majuscule et trait d'union dans les noms de lieux, d'églises, de rues et de fêtes (« Saint-Louis », « la basilique Saint-Pierre », « la Saint-Jean »). Un groupe scout Saint-Louis porte donc la majuscule et le trait d'union.
- **Dieu**, **Seigneur**, **Christ**, **Vierge Marie** prennent la majuscule. Les pronoms (Il, Lui) relèvent de l'usage de la maison : conserver la même convention dans tout le document.
- La messe, l’eucharistie, le sacrement de réconciliation : minuscule.
- Les fonctions religieuses : « le curé de la paroisse », « Monseigneur l’évêque » dans l'adresse ; « Mgr » en abrégé avec insécable.

Dans une adresse ou une formule d'appel, on développe les titres : « Monseigneur », « Monsieur l’abbé », « Madame la Directrice ». Dans le texte courant, on emploie les abréviations (section 7).

## 7. Abréviations et sigles

### 7.1 Abréviations courantes

| Mot | Abréviation | Remarque |
|---|---|---|
| Monsieur | M. | jamais « Mr » (anglais) ; pluriel : MM. |
| Madame | Mme | pas de point (la dernière lettre est conservée) ; pluriel : Mmes |
| Mademoiselle | Mlle | idem |
| Monseigneur | Mgr | sans point ; pluriel : NN. SS. |
| Docteur | Dr | sans point |
| Maître | Me | sans point |
| Père | P. | « le P. Martin » dans les notes ; en toutes lettres dans le texte |
| Numéro | n° | « n° » avec exposant : o = « º » (U+00BA) ou lettre « o » en exposant ; pluriel : n^os |
| Page | p. | pluriel : pp. |
| Compagnie | Cie | |
| Établissements | Éts | |
| Environ | env. | |
| Et cetera | etc. | sans « … » ni deuxième point |
| Par exemple | par ex. | ou en toutes lettres |
| C'est-à-dire | c.-à-d. | |
| Page(s) | p. | |

### 7.2 Règle générale de l'abréviation

- **Point abréviatif** quand l'abréviation se termine par une consonne qui n'est pas la dernière lettre du mot (« M. », « p. », « etc. »).
- **Pas de point** quand la dernière lettre est conservée (« Mme », « Mgr », « Dr »).
- Pas d'abréviation en début de phrase, ni dans un titre soigné.
- Une abréviation ne se coupe pas en fin de ligne : insécable entre l'abréviation et le mot suivant.

### 7.3 Sigles et acronymes

- Un **sigle** se lit lettre par lettre (SNCF, FSGGB, CSS) : lettres capitales, sans points entre les lettres.
- Un **acronyme** se prononce comme un mot ; il est en capitales s'il est court (ONU, UNESCO) et en minuscules avec une capitale initiale s'il devient un nom commun (Unicef, Otan quand il est lu comme un nom propre).
- Au premier emploi, développer : « la Fédération des scouts et guides Godefroy de Bouillon (FSGGB) », puis utiliser le sigle.
- Pas de pluriel en « s » dans un sigle : « les ONG » (et non « ONGs »).
- Ne pas mettre d'article contracté devant un sigle masculin sans le vérifier : « le BAFA », « la FSGGB » (par accord avec « fédération »).

### 7.4 Les nombres d'ordre

- Premier : 1er, première : 1re, deuxième : 2e, troisième : 3e. L'exposant est un « e » (jamais « ème »).
- À l'écrit, on met en exposant (`format.superscript` sur la lettre) ; si le texte est généré en simple Unicode : « 1ᵉʳ » (U+1D49 U+02B3) et « 2ᵉ » (U+1D49) conviennent.
- Dans un tableur ou un champ sans exposant, écrire « 2e », « 1er ».

## 8. Nombres, dates, heures, unités

### 8.1 Écrire les nombres

- **En lettres** : les nombres de zéro à seize (voire jusqu'à dix-neuf selon la maison) dans le texte courant, les nombres ronds (« une centaine »), les nombres au début d'une phrase.
- **En chiffres** : tout ce qui est mesuré, daté, coté ou comparé (âge, prix, distance, pourcentage, nombre de personnes d'un camp).
- Dans un même passage, ne pas mélanger lettres et chiffres pour des nombres de même nature (« 3 chefs et douze scouts » est incohérent : « 3 chefs et 12 scouts »).
- Les adjectifs numéraux composés portent des traits d'union : « vingt-et-un » (orthographe rectifiée) ou « vingt et un » (usage traditionnel) ; ne pas mélanger dans un document.

### 8.2 Séparateur des milliers et décimal

| Cas | Correct | À corriger |
|---|---|---|
| Millier (4 chiffres) | 1250 ou 1<NB>250 | 1,250 / 1.250 |
| Dizaine de milliers | 12<NB>500 | 12500 / 12,500 |
| Million | 1<NB>250<NB>000 | 1,250,000 |
| Décimale | 3,5 | 3.5 |
| Montant | 12<NB>500,50<NB>€ | 12,500.50€ |
| Année | 2027 | 2<NB>027 (jamais d'espace dans une année) |
| Numéro de téléphone | 06 12 34 56 78 | 06.12.34.56.78 (admis en usage courant) |
| Code postal | 75008 | 75 008 |

La virgule est le séparateur décimal en français ; la virgule n'est jamais séparateur de milliers. Pour les nombres de quatre chiffres, l'espace n'est pas obligatoire : « 1250 » est admis ; dès cinq chiffres, l'espace est de rigueur. Dans un document financier, le choix doit être appliqué partout.

### 8.3 Pourcentages, unités, monnaies

- Insécable devant `%` : « 12<NB>% ».
- Insécable entre le nombre et l'unité : « 5<NB>m », « 70<NB>kg », « 25<NB>°C » (l'espace avant `°C` est de rigueur en usage SI).
- Monnaie : « 15<NB>€ » ; le symbole se place après le nombre en français. Avec décimales : « 15,50<NB>€ ».
- Les symboles d'unités ne prennent pas de point et ne s'accordent pas : « 5 km », « 2 kg ».
- Les unités s'écrivent en lettres romaines droites, même dans un texte en italique.
- Plage de valeurs : « de 10 à 15 euros » ou « 10–15<NB>€ » avec demi-cadratin sans espace.

### 8.4 Dates

- Écrire la date en toutes lettres dans le corps d'un texte : « le 14 juillet 2027 ». Le premier du mois prend « 1er » : « le 1er août ».
- Jours de la semaine et mois en minuscules ; pas de virgule entre le jour de la semaine et le quantième : « samedi 14 juillet ».
- Dans un tableau, format JJ/MM/AAAA (« 14/07/2027 ») ; ne jamais utiliser le format américain MM/JJ/AAAA.
- Intervalle : « du 12 au 19 juillet 2027 » ; « de juillet à août ».
- Éviter « le 12/07 » dans un texte soigné.

### 8.5 Heures

- Format préféré : « 9<NB>h<NB>30 » (h minuscule, insécables autour). « 9<NB>h » pour l'heure pleine, pas de « 9 h 00 ».
- Pas de format 12 heures ni de « AM/PM ». Dix-huit heures : « 18<NB>h ».
- Plage : « de 9<NB>h à 12<NB>h » ; ou « 9<NB>h–12<NB>h » dans un tableau.
- Durées : « 2<NB>h<NB>30 », « 45 min », « 30 s ».

### 8.6 Siècles et chiffres romains

- Siècles en chiffres romains **en petites capitales** (ou en capitales) : « le XXIe siècle », « le xxie siècle » avec `format.smallCaps` ; l'exposant « e » suit le chiffre romain : XIXe. Pas d'exposant « ème ».
- Rois, papes : en capitales romaines avec exposant d'ordre pour le premier : « Louis XIV », « Jean-Paul II », « François Ier » (le « Ier » : chiffre romain suivi de l'exposant « er »).
- Années : toujours en chiffres arabes.

Commandes utiles : `format.superscript` pour l'exposant, `format.smallCaps` pour les petites capitales.

## 9. Énumérations et listes

### 9.1 Énumération dans la phrase

- Introduire par une phrase terminée par deux-points.
- Séparer les éléments par des virgules ou des points-virgules ; terminer par un point.
- Le dernier élément est précédé de « et » ou de « ou ».

### 9.2 Liste à puces et listes numérotées

| Situation | Ponctuation | Majuscule initiale |
|---|---|---|
| éléments courts (mots, groupes nominaux) | pas de ponctuation en fin ; point après le dernier si la liste termine la phrase | minuscule |
| éléments en phrases complètes | point à la fin de chaque élément | majuscule |
| éléments longs avec une idée dominante | point-virgule entre éléments, point au dernier | minuscule |
| liste numérotée d'étapes | point à la fin de chaque étape | majuscule |

Règles de cohérence :

1. **Parallélisme** : tous les éléments commencent par la même forme grammaticale (tous des verbes à l'infinitif, ou tous des noms).
2. Entre trois et sept éléments par liste ; au-delà, regrouper en sous-listes.
3. Pas de liste d'un seul élément.
4. Une introduction se termine par deux-points ; elle ne doit pas être coupée de sa liste en bas de page (`para.keepNext` avec `{"value":true}`).
5. Une puce n'est pas un titre : pas de gras systématique de tous les éléments.

### 9.3 Procédure Word pour une liste correcte

1. `para.bullets` avec `{"kind":"•"}` pour la liste à puces ; `para.numbering` avec `{"kind":"numbered"}` pour une liste numérotée.
2. Retrait : `para.indents` avec `{"left":18,"firstLine":-18}` (retrait de 18 pt, puce en retrait négatif de 18 pt).
3. Écart entre éléments : `para.spacing` avec `{"after":4}`.
4. Pour interrompre la liste : `para.bullets` avec `{"off":true}`.

## 10. Italique, gras, souligné, petites capitales

| Marque | Quand l'employer | Quand ne pas l'employer |
|---|---|---|
| **Italique** | titres d'œuvres (livres, films, journaux), mots étrangers, termes techniques cités, mots employés comme mots, noms de navires, textes de loi au titre | texte long, citation (elle va entre guillemets), nom de personne, mot isolé de la langue courante |
| **Gras** | mot-clé de premier niveau, étiquette de rubrique, chiffre à retenir ; un seul usage par paragraphe | plus de deux mots d'affilée, texte courant entier, titre déjà en gras |
| **Souligné** | adresses web cliquables (le lien est souligné par défaut) | tout autre emploi : le soulignement est une survivance de la machine à écrire |
| **Petites capitales** | noms de famille dans une bibliographie, siècles, signatures | texte courant |
| **Capitales** | sigles, titres courts de document (affiche) | phrases entières, mails (assimilées à un cri) |

- Une marque de mise en valeur suffit : gras **ou** italique **ou** couleur, pas trois à la fois.
- Dans un texte en italique, les mots mis en valeur passent en romain (inversion).
- Une citation courte reste en romain, entre guillemets ; une citation longue est mise en retrait.

Commandes Word : `format.italic`, `format.bold`, `format.underline`, `format.smallCaps`, `format.allCaps` (changer de casse : `format.changeCase` avec `{"mode":"sentence"}`).

## 11. Titres et sous-titres

- **Pas de point final** à un titre, à un sous-titre, à un intertitre, ni à une légende courte.
- Point d'interrogation ou d'exclamation conservé quand il fait partie du sens (« Pourquoi partir en camp ? »).
- Majuscule au premier mot seulement (voir section 6.2).
- Pas de titre en italique et en gras à la fois ; pas de soulignement.
- Pas de deux-points en fin de titre ; un titre n'annonce pas, il nomme.
- Un titre ne se coupe pas en bas de page : `para.keepNext` avec `{"value":true}` sur chaque style de titre.
- Titre court : de 3 à 8 mots ; au-delà de 12, il devient une phrase.
- Numérotation : « 1. », « 1.1. » ou « I. », « A. » ; ne pas mélanger.

## 12. Coupures de mots, veuves et orphelines

### 12.1 Césure

- Activer la césure automatique sur un texte justifié ou en colonnes étroites : `layout.hyphenation` avec `{"value":true,"limit":2,"caps":false}` (pas plus de deux lignes consécutives terminées par un trait d'union, pas de césure sur les mots en capitales).
- Ne jamais couper : un nom propre, un sigle, un nombre, une date, une adresse, un numéro de téléphone, un mot de moins de six lettres.
- Au moins deux lettres avant la coupure et trois après (règle de lisibilité).
- Une coupure ne laisse pas à la ligne suivante une seule syllabe muette (« -ment »).
- Pour un mot qui ne doit pas se couper : `text.nbHyphen` pour ses traits d'union.
- Le français coupe selon les syllabes : « cam-pe-ment », « mar-che ». Laisser le logiciel proposer ; vérifier avec `layout.manualHyphenation`.

### 12.2 Veuves et orphelines

| Défaut | Définition | Remède |
|---|---|---|
| Veuve | dernière ligne d'un paragraphe isolée en haut de la page suivante | `para.widowControl` avec `{"value":true}` |
| Orpheline | première ligne d'un paragraphe isolée en bas de page | idem |
| Mot isolé (ligne creuse) | un mot court seul sur la dernière ligne | resserrer légèrement (`format.spacing` de −0,2 pt), reformuler, ou ajuster la largeur de la zone de texte |
| Titre en bas de page | un titre sans texte | `para.keepNext` |
| Rivière | espaces alignées verticalement dans un texte justifié | réduire la largeur de ligne, activer la césure, passer en drapeau à gauche |

## 13. Ligatures et caractères particuliers

- Les ligatures « œ » (U+0153) et « Œ » (U+0152) sont obligatoires dans « cœur », « sœur », « œuvre », « bœuf », « œil », « Œcuménique » : écrire « coeur » est une faute. Saisie : `œ` dans `text.insert`.
- « æ » est rare (« et cætera » ancien) ; « ß » étranger.
- Les ligatures typographiques « fi », « fl », « ffi » sont gérées par la police : ne pas les saisir à la main.
- Le point médian (U+00B7) sert aux formes inclusives : « chef·fe » ; voir les consignes de rédaction de la fédération avant de l'employer.
- Le symbole « n° » : le « n » minuscule suivi d'un petit « o » en exposant (U+00BA) ; ne pas saisir « N° » ni « no » ni « num ».
- Le signe « € » (U+20AC) suit le nombre : « 15<NB>€ ».
- Le symbole « °C » : U+00B0 suivi de la lettre C, précédé d'une insécable.
- Le signe de multiplication « × » (U+00D7) se saisit entre deux nombres : « 4 × 5 ». Ne pas écrire « x ».
- Le point final d'une abréviation ne se double pas avec le point de fin de phrase : « sac, tente, etc. » (un seul point).

## 14. Notes, citations, adresses, références

### 14.1 Notes de bas de page

- Appel de note en exposant, placé **avant** la ponctuation de la phrase (« … dit-il¹. ») : en France, l'appel précède le point ; garder la même convention dans tout le document.
- Dans Word : `references.footnote` avec `{"text":"Source de la remarque."}`.
- Texte de note en corps inférieur de deux points au corps de texte (corps 11 → note 9 ; corps 10 → note 8).
- Pas plus de quatre notes par page.

### 14.2 Citations

- Citation de moins de trois lignes : intégrée dans le texte, entre guillemets français, en romain.
- Citation plus longue : bloc séparé, en retrait de 1 cm à gauche et à droite (`para.indents` avec `{"left":28,"right":28}`), corps 1 pt de moins, sans guillemets.
- Toute coupe est signalée par `[…]`.
- La source suit entre parenthèses ou en note.
- Une citation n'est pas modifiée : toute intervention (ajout, correction) se met entre crochets.

### 14.3 Adresses postales

Ordre standard, en capitales sans ponctuation finale :

```
Madame Marie DURAND
Fédération des scouts et guides Godefroy de Bouillon
12 rue Saint-Louis
75007 PARIS
```

- Pas de virgule entre le numéro et la rue : « 12 rue Saint-Louis ».
- Code postal puis ville en capitales ; pays en dernière ligne pour l'étranger.
- Les majuscules accentuées sont conservées : « ÉVRY ».
- Une adresse ne se coupe pas : mettre des insécables entre les éléments.

### 14.4 Numéros de téléphone

- Format national : 01 23 45 67 89 (paires, insécables entre les paires). International : +33 1 23 45 67 89 (sans le zéro initial).
- Pas de points, pas de parenthèses autour du zéro.
- Courriel et adresse web : en minuscules, sans espace, sans trait d'union de césure ; les lier avec `insert.link` quand c'est disponible. Un lien qui n'est pas cliquable (papier) se garde lisible.

### 14.5 Références bibliographiques

Ordre : Nom Prénom, *Titre en italique*, lieu, éditeur, année, pages. Exemple : « Baden-Powell Robert, *Éclaireurs*, Paris, Delachaux, 2005, p. 12. » Les noms d'auteurs en petites capitales dans une bibliographie longue.

## 15. Procédure de correction d'un texte existant

Faire les remplacements dans cet ordre, avec une vérification visuelle entre chaque :

1. Langue : `review.language` avec `{"lang":"fr-FR"}`.
2. Espaces superflues : `para.removeExtraSpaces` avec `{"scope":"all"}` (réduit les doubles espaces).
3. Apostrophes : `edit.replaceAll` avec `{"text":"'","with":"’"}`.
4. Guillemets droits : remplacement manuel guidé (les ouvrants et fermants diffèrent).
5. Espace avant `:` : `edit.replaceAll` avec `{"text":" :","with":" :"}` ; de même pour ` ;`, ` ?`, ` !`.
6. Trois points : `edit.replaceAll` avec `{"text":"...","with":"…"}`.
7. Césure : `layout.hyphenation`.
8. Contrôle final avec `view.marks` (affiche les espaces insécables en symbole spécial, repère visuel des erreurs).

## 16. Tableau « à corriger → correct » (plus de soixante lignes)

| N° | À corriger | Correct | Règle |
|---|---|---|---|
| 1 | Bonjour! | Bonjour<FI>! | espace avant `!` |
| 2 | Que voulez-vous? | Que voulez-vous<FI>? | espace avant `?` |
| 3 | Rappel: apportez | Rappel<NB>: apportez | espace avant `:` |
| 4 | venez; nous | venez<FI>; nous | espace avant `;` |
| 5 | "Servir" | « Servir » | guillemets français |
| 6 | l'équipe (droit) | l’équipe | apostrophe courbe |
| 7 | aujourd'hui | aujourd’hui | apostrophe courbe |
| 8 | ... | … | caractère unique |
| 9 | etc... | etc. | un seul point |
| 10 | N°3 | n°<NB>3 | minuscule + insécable |
| 11 | no 3 | n°<NB>3 | symbole |
| 12 | Mr Dupont | M.<NB>Dupont | abréviation française |
| 13 | Mme. Martin | Mme<NB>Martin | pas de point |
| 14 | Mgr. Durand | Mgr<NB>Durand | pas de point |
| 15 | Dr. Petit | Dr<NB>Petit | pas de point |
| 16 | 1ere | 1re (« re » en exposant) | exposant |
| 17 | 2ème | 2e (« e » en exposant) | « e », pas « ème » |
| 18 | 1er juillet (« er » à plat) | 1er juillet (« er » en exposant) | exposant |
| 19 | 12,500 | 12<NB>500 | séparateur de milliers |
| 20 | 3.5 | 3,5 | virgule décimale |
| 21 | 15€ | 15<NB>€ | espace avant € |
| 22 | 15 € (espace simple) | 15<NB>€ | insécable |
| 23 | 50% | 50<NB>% | espace avant % |
| 24 | 25°C | 25<NB>°C | espace avant °C |
| 25 | -5°C | −5<NB>°C | signe moins U+2212 |
| 26 | 9H30 | 9<NB>h<NB>30 | h minuscule |
| 27 | 9h00 | 9<NB>h | pas de « 00 » |
| 28 | 14/07 | 14 juillet | date en lettres |
| 29 | 07/14/2027 | 14/07/2027 | ordre jour/mois |
| 30 | le Lundi 14 Juillet | le lundi 14 juillet | minuscules |
| 31 | Lundi, 14 juillet | lundi 14 juillet | pas de virgule |
| 32 | XIXème siècle | XIXe siècle (« e » en exposant) | exposant |
| 33 | 21ème | 21e (« e » en exposant) | exposant |
| 34 | coeur | cœur | ligature œ |
| 35 | soeur | sœur | ligature œ |
| 36 | oeuvre | œuvre | ligature œ |
| 37 | Ecole | École | majuscule accentuée |
| 38 | Etat | État | majuscule accentuée |
| 39 | A la fin | À la fin | majuscule accentuée |
| 40 | Le Camp D'Été | Le camp d’été | majuscules de titre |
| 41 | Le Chef De Troupe | le chef de troupe | fonction en minuscules |
| 42 | la Troupe Saint Louis | la troupe Saint-Louis | trait d'union |
| 43 | Saint Jean | Saint-Jean (lieu) / saint Jean (personne) | selon le cas |
| 44 | l'eglise (sans accent) | l’Église (institution) / l’église (bâtiment) | majuscule et accent |
| 45 | le pape françois | le pape François | nom propre |
| 46 | 1er Dimanche | le 1er dimanche | exposant et minuscule |
| 47 | la pentecôte, noël | la Pentecôte, Noël | fêtes en majuscule |
| 48 | Objet : Camp d'été. | Objet : camp d’été | pas de point final |
| 49 | Titre en gras souligné. | Titre en gras | pas de point ni souligné |
| 50 | Titre ! (inutile) | Titre | pas d'exclamation |
| 51 | -- | – (demi-cadratin) | tiret |
| 52 | - incise - | – incise – | demi-cadratin |
| 53 | 2024-2025 | 2024–2025 | demi-cadratin |
| 54 | de 9h-12h | de 9<NB>h à 12<NB>h | plage |
| 55 | week end | week-end | trait d'union |
| 56 | c'est à dire | c’est-à-dire | trait d'union |
| 57 | peut être (adverbe) | peut-être | trait d'union |
| 58 | quelque soit | quel que soit | orthographe |
| 59 | malgré que | bien que | usage |
| 60 | au jour d'aujourd'hui | aujourd’hui | pléonasme |
| 61 | 4 x 5 | 4 × 5 | signe de multiplication |
| 62 | 0612345678 | 06 12 34 56 78 | paires |
| 63 | 12, rue Saint-Louis | 12 rue Saint-Louis | pas de virgule |
| 64 | 75 008 | 75008 | code postal compact |
| 65 | 2 027 | 2027 | année sans espace |
| 66 | ONGs | ONG | sigle invariable |
| 67 | fsggb (minuscules) | FSGGB | sigle en capitales |
| 68 | (  texte  ) | (texte) | pas d'espace intérieure |
| 69 | texte ,suite | texte, suite | virgule collée |
| 70 | « texte» | « texte » | espaces symétriques |
| 71 | camp d'été.. | camp d’été. | un seul point |
| 72 | Les Scouts sont... | Les scouts sont… | minuscule et points de suspension |

Ce tableau est un référentiel de contrôle : un texte qui franchit toutes ces lignes sans défaut est typographiquement propre.

## 17. Cas particuliers

- **Documents bilingues ou citations étrangères** : appliquer la typographie de la langue de la citation à la citation (espaces avant `:` supprimées en anglais) et marquer la langue par `review.language` sur la sélection.
- **Courriel** : mêmes règles, mais la police du client de messagerie peut ne pas afficher U+202F ; préférer U+00A0.
- **Diapositives** : les insécables importent encore plus, car les lignes sont courtes ; employer U+00A0 et éviter les césures.
- **Tableaux Excel** : séparer les milliers par un format de nombre (`home.numberFormat` avec le code `#\ ##0`) et non par des espaces tapées, afin que la cellule reste un nombre.
- **URL, adresses, noms de fichiers** : ne pas appliquer la typographie à l'intérieur (pas de guillemets courbes dans une URL).
- **Titres en capitales** : on maintient tous les accents et cédilles sur les lettres (voir la section 6.1).
- **Inclusif et genre** : suivre les consignes écrites de la fédération (par exemple « les chefs » au sens générique) ; ne pas improviser des formes à point médian.

## 18. Avec les outils de ScoutHub (Word)

Tous les identifiants ci-dessous sont des commandes natives de Word (vérifiées dans la liste Word.txt).

| But | Commande | Paramètres |
|---|---|---|
| Langue du texte | `review.language` | `{"lang":"fr-FR"}` |
| Autocorrection | `tools.autocorrect` | `{"smartQuotes":true,"dashes":true}` |
| Espace insécable | `text.nbsp` | aucun |
| Trait d'union insécable | `text.nbHyphen` | aucun |
| Trait d'union conditionnel | `text.optionalHyphen` | aucun |
| Cadratin | `text.emDash` | aucun |
| Points de suspension | `text.ellipsis` | aucun |
| Symbole libre | `insert.symbol` | `{"char":" "}` |
| Texte avec Unicode | `text.insert` | `{"text":"..."}` |
| Rechercher/remplacer | `edit.replaceAll` | `{"text":"...","with":"..."}` |
| Exposant | `format.superscript` | aucun |
| Petites capitales | `format.smallCaps` | aucun |
| Césure automatique | `layout.hyphenation` | `{"value":true,"limit":2}` |
| Veuves et orphelines | `para.widowControl` | `{"value":true}` |
| Titre avec son texte | `para.keepNext` | `{"value":true}` |
| Note de bas de page | `references.footnote` | `{"text":"..."}` |
| Afficher les marques | `view.marks` | aucun |

Séquence `api_lot` pour une phrase de convocation correcte :

```
[
 {"commande":"review.language","parametres":{"lang":"fr-FR"}},
 {"commande":"tools.autocorrect","parametres":{"smartQuotes":true,"dashes":true}},
 {"commande":"para.style","parametres":{"style":"Normal"}},
 {"commande":"text.insert","parametres":{"text":"Rendez-vous le samedi 12 juillet 2027 à 9 h 30, devant l’église Saint-Louis : apportez un pique-nique."}},
 {"commande":"text.newParagraph","parametres":{}}
]
```

Remarque : dans PowerPoint, `text.insert` accepte aussi les caractères Unicode ; il n'existe pas de commande d'insertion spécifique d'insécable, il faut donc saisir ` ` dans le texte. Dans Excel, `insert.symbol` insère un caractère à la fin du texte de la cellule ; pour une chaîne complète, utiliser `cell.set`.

## Liste de contrôle avant de livrer

1. La langue du document est le français (`fr-FR`).
2. Aucune espace avant `.` ni avant `,`.
3. Une insécable précède `:` ; une insécable (ou fine) précède `;` `!` `?`.
4. Les guillemets sont `« »` avec insécables intérieures ; aucun guillemet droit ne reste.
5. Toutes les apostrophes sont courbes (U+2019).
6. Les trois points sont le caractère unique `…` ; « etc. » n'est pas suivi de points.
7. Les incises et intervalles utilisent le demi-cadratin ; le moins utilise U+2212.
8. Les nombres de cinq chiffres ou plus ont des espaces insécables de milliers ; la virgule est décimale.
9. Chaque nombre est séparé de son unité, de `%`, de `€`, de `°C` par une insécable.
10. Les dates sont écrites en toutes lettres dans le texte, au format JJ/MM/AAAA dans un tableau.
11. Les heures sont au format « 9 h 30 » avec insécables.
12. Les majuscules sont accentuées (À, É, Ç) ; « œ » est respecté.
13. Les titres n'ont ni point final ni capitalisation à l'anglaise.
14. Les fonctions, jours, mois et unités scoutes sont en minuscules ; les noms propres et fêtes en majuscule.
15. Les abréviations suivent la règle du point (M., Mme, Mgr, Dr).
16. Les listes sont parallèles, ponctuées de façon uniforme, de trois à sept éléments.
17. Aucune veuve, orpheline, ni titre isolé en bas de page.
18. La césure automatique est réglée (maximum deux traits d'union consécutifs).
19. Une seule mise en valeur par mot (gras ou italique, pas les deux).
20. `view.marks` a été passé pour vérifier les espaces.

## Questions auxquelles la fiche répond

- Comment mettre les espaces avant les deux-points, point-virgule, point d'exclamation et d'interrogation ?
- Quel est le code Unicode de l'espace insécable et de l'espace fine insécable, et comment les saisir dans Word ?
- Quels guillemets utiliser en français et comment les imbriquer ?
- Quelle différence entre trait d'union, demi-cadratin, cadratin et signe moins, et quand employer chacun ?
- Comment écrire les nombres, les milliers, les décimales, les pourcentages, les dates et les heures ?
- Quand mettre une majuscule aux fonctions scoutes, aux titres religieux, aux saints et aux fêtes ?
- Comment abréger Monsieur, Madame, Monseigneur, numéro, et écrire les nombres d'ordre ?
- Comment ponctuer et mettre en forme une liste à puces ?
- Comment éviter veuves, orphelines et coupures malheureuses ?
- Comment corriger en lot un texte déjà écrit avec les commandes natives de Word ?
