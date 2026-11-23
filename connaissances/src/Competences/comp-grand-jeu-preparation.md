---
id: comp-grand-jeu-preparation
titre: Préparer un grand jeu ou un raid : distance, dénivelé, coucher du soleil, traque, énigmes
theme: Compétences
type: synthese
sources:
  - titre: Savoir-faire de ChatGDB et de ScoutMap (commandes route.analyse et info.sun)
mots_cles: grand jeu, raid, traque, itinéraire, distance, dénivelé, coucher du soleil, nuit, patrouilles, énigmes, étapes, codes, révélation progressive, carte, feuille de route, sécurité, charte IA
liens: app-scoutmap, crypto-identifier-un-chiffrement, comp-index-competences
resume: Méthode pour aider un chef à préparer un grand jeu, une traque ou un raid avec ScoutMap : repères de distance, de dénivelé et de lumière, jeu de traque, énigmes et étapes, documents par patrouille, et la règle de l'IA comme outil.
---

## Règle d'or : l'IA est un outil
Pour un utilisateur qui n'est pas administrateur, l'idée vient du chef. Si la demande est vague, poser une ou deux questions (thème, âge, effectif, lieu, durée, ce qu'il veut faire vivre), puis aider : compléter, vérifier la faisabilité et la sécurité, proposer des variantes, mettre en forme. Ne jamais livrer un jeu clé en main à la place d'un chef qui n'a rien proposé.

## Contrôles à faire avant de proposer un parcours
1. **Mesurer, ne pas estimer** : calculer l'itinéraire dans ScoutMap puis lancer `route.analyse` (distance, dénivelé positif et négatif, durée de marche, heure d'arrivée, marge avant le coucher du soleil, alertes). `info.sun` donne les heures de lever et de coucher pour un lieu et une date.
2. **Distance** : plus de 25 km à pied dans la journée est long pour des jeunes ; plus de 40 km est trop. Dans ce cas, le dire au chef et proposer un parcours raccourci ou réparti sur deux jours.
3. **Dénivelé** : 500 m de dénivelé positif pèsent plus qu'une grande distance sur le plat. Compter environ une heure de marche de plus par 300 à 400 m de montée. Au-delà de 60 m de montée par kilomètre, le terrain est raide.
4. **Lumière** : arriver au moins 45 minutes avant le coucher du soleil. Sinon : partir plus tôt, raccourcir, ou préparer un jeu de nuit exprès (lampes, encadrement, points de ralliement).
5. **Pauses et épreuves** : les ajouter au temps de marche (`pauses_min`), elles décalent l'arrivée.

## Jeu de traque
- Les patrouilles évitent des chefs qui se déplacent : si les chefs roulent en voiture, la zone doit être petite et ne pas offrir une route qui permet de tout surveiller.
- Prévoir un temps pour se cacher, se reposer, manger ; des points d'eau ; une heure de fin ferme et un point de ralliement connu de tous.
- Limiter la zone avec le masque ou les repères de ScoutMap ; prévoir un moyen de joindre un chef en cas de problème.

## Étapes, énigmes et codes
- Une étape = un lieu, une épreuve, une énigme dont la réponse ou un code donne la direction de la suivante.
- Varier les codages d'une étape à l'autre (César, Morse, Vigenère, Polybe, etc. : voir les fiches de cryptographie) et adapter à l'âge : un code que la patrouille peut résoudre en 10 minutes.
- Révélation progressive : ne donner à la patrouille que le prochain point ; garder pour le chef un document avec toutes les réponses et solutions.
- Plusieurs patrouilles : un itinéraire global, des ordres de passage différents pour éviter les attroupements, et un document par patrouille.

## Dans ScoutMap
- Poser les points et les repères du jeu (outil Grand jeu), choisir le fond de carte, imprimer une carte par patrouille ou une feuille de route.
- Montrer une carte dans une réponse ou un artefact avec `embed.show` (modifiable ou non), partager le lien de la carte terminée à l'administrateur.
