---
id: crypto-codes-pour-jeux
titre: Codes et chiffres pour énigmes de jeu scout (choisir, adapter, ne pas se tromper)
theme: Cryptographie
type: synthese
sources:
  - titre: Savoir-faire de ChatGDB (codages classiques du domaine public)
mots_cles: code, énigme, jeu, grand jeu, Morse, Polybe, César, Vigenère, templiers, croix de Malte, sémaphore, pigpen, chiffrer, déchiffrer, patrouille, difficulté
liens: crypto-cesar-substitution, crypto-morse, crypto-vigenere, crypto-identifier-un-chiffrement, comp-grand-jeu-preparation
resume: Des codages classiques pour les énigmes d'un jeu, avec leur principe, leur difficulté et la façon de les vérifier avant de les distribuer.
---

## Choisir selon l'âge
- **Facile (jaune, début de vert)** : alphabet décalé (César), Morse écrit ou sifflé, alphabet de signes à clé donnée.
- **Moyen** : carré de Polybe (lettre = ligne puis colonne, 25 cases, I et J ensemble), tableau à double entrée, code par position dans un texte.
- **Difficile (rouge, chefs)** : Vigenère avec mot-clé donné par une autre épreuve, cryptogrammes sans clé à retrouver par fréquences.

## Principes
- **Décalage (César)** : on décale chaque lettre de n rangs (clé = la lettre qui remplace A). Des variantes du scoutisme à clé-mot (par exemple « avocat » ou « cassis ») existent : demander au chef sa table exacte plutôt que de la deviner.
- **Polybe** : grille 5×5, chaque lettre est donnée par deux chiffres (ligne, colonne). On peut mélanger la grille avec un mot-clé.
- **Morse** : points et traits, lisibles à la lampe, au sifflet, au clap ; prévoir la table pour la patrouille.
- **Vigenère** : décalage variable selon un mot-clé répété ; donner la grille et le mot-clé.
- **Écritures à signes (type templiers, pigpen)** : chaque lettre est un petit dessin ; donner la table dessinée.
- **Sémaphore, drapeaux** : lettres par positions de bras ou de fanions, bien pour une épreuve de terrain à distance.

## Avant de distribuer
1. Chiffrer un message de test, le déchiffrer, et vérifier qu'on retrouve le texte d'origine.
2. Écrire pour le chef : message clair, clé, méthode, résultat attendu.
3. Donner à la patrouille juste ce qu'il faut (la table ou la grille), pas la clé si elle fait partie de l'énigme.
4. Chronométrer une personne qui ne connaît pas la réponse : viser 5 à 15 minutes.
5. Ne pas inventer de code : s'en tenir aux méthodes reconnues décrites dans les fiches liées.
