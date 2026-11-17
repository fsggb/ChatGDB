---
# Fiche de connaissances ChatGDB (format : ScoutHub/docs/projet-chatgdb.md, §5).
depot: fsggb/ChatGDB
maj: 2026-11-10
---

# ChatGDB : l'assistant IA de la fédération

Application de ScoutHub (rubrique « Assistant ») : https://fsggb.github.io/ScoutHub/ChatGDB/ . Réservée aux comptes connectés.

- **Conversation** : on pose une question, ChatGDB répond en français ; les conversations sont gardées sur l'appareil, avec recherche, épinglage et export.
- **Il comprend le contexte tout seul** : il connaît les applications de la fédération (fiches par dépôt), la bibliothèque de documents et, pour l'administrateur, une mémoire de notes.
- **Recherche sur le web** : bouton « Recherche web » (activé par défaut). Les sources sont citées [1], [2]… ; la profondeur (standard ou approfondie : nombreuses recherches, pages lues en entier, recoupement) se règle dans Préférences.
- **Pièces jointes** : images (collées, déposées, ou jointes), PDF, fichiers texte.
- **Artefacts** : documents, pages web interactives, schémas SVG, tableaux, code, ouverts dans un volet à droite avec versions, copie, téléchargement, plein écran.
- **Dictée vocale** : bouton micro (on parle, on reclique, le texte arrive dans la zone de saisie).
- **Préférences** : modèle d'IA (Haiku, rapide et économe, ou Sonnet, plus fin mais environ 20 fois plus de crédits), niveau de réflexion (faible, moyenne, élevée), profondeur de la recherche web, style des réponses, instructions personnalisées, thème clair ou sombre.
- **Crédits** : une limite par session de 5 heures et une par semaine ; utiliser les autres applications de ScoutHub rapporte des crédits. Le coût réel d'une question (modèle, réflexion, recherches web) est ce qui est décompté. L'administrateur n'a pas de limite mais sa consommation est suivie.
- ChatGDB peut se tromper : pour la sécurité des jeunes, la santé ou le droit, il renvoie vers le responsable de groupe ou les documents officiels.

## Applications de ScoutHub dans un artefact
ChatGDB peut ouvrir une application de ScoutHub dans le volet d'artefact (cadre intégré) et l'utiliser comme une personne, avec une souris visible : ouvrir avec des paramètres d'adresse (voir « Liens d'action » de chaque application), chercher un élément d'interface par son texte (numéro et position), cliquer (clic droit, double-clic), glisser, taper au clavier, envoyer des raccourcis, lire l'écran en texte et prendre des captures (repères tous les 100 px). Les applications dessinées dans un canvas (Excel/GridCraft, CAO, 3D) sont vues réellement et s'utilisent par coordonnées. Limites volontaires : applications du même site seulement (pas ScoutCloud, pas la boutique), jamais de suppression, d'envoi, de paiement, de déconnexion ni de mot de passe. À la fin, un artefact de type « application » (`{"app":"ScoutMap","params":"lieu=Lyon"}`) permet de reprendre la main ; il rouvre l'application avec ses paramètres (l'état saisi à la main n'est pas conservé). Les artefacts se modifient (onglet Modifier, nouvelle version vue par ChatGDB). ChatGDB est aussi l'assistant de CathIA pour les personnes connectées.
