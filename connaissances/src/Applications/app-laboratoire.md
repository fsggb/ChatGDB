---
id: app-laboratoire
titre: Laboratoire ChatGDB, essais de modèles, dictée, voix et recherche (administrateur)
theme: Applications
type: application
sources:
  - titre: Laboratoire - code
    url: https://github.com/fsggb/ChatGDB/blob/main/laboratoire.js
mots_cles: laboratoire, test, essai, comparer, modèles, Workers AI, Cloudflare, Neurons, budget, dictée, Whisper, voix, MeloTTS, recherche par le sens, vecteurs, bge-m3, administrateur
liens: app-chatgdb, app-scouthub
resume: Page réservée à l'administrateur pour comparer des modèles (Claude et modèles gratuits Cloudflare), tester la dictée Whisper, la lecture à voix haute et la recherche par le sens. ChatGDB peut la piloter par des paramètres d'adresse.
---

## À quoi sert le laboratoire
Page d'essais **réservée à l'administrateur** : https://fsggb.github.io/ScoutHub/ChatGDB/laboratoire.html. Elle sert à mesurer avant de décider : quel modèle répond le mieux, le plus vite, pour combien. Tout passe par le relais Cloudflare ; le jeton est signé par le serveur ScoutHub.

## Onglets
- **Comparer** : une question (et une consigne système facultative) posée en même temps à plusieurs modèles : Claude Haiku et Sonnet (crédits Claude) et les modèles gratuits de Cloudflare (budget de Neurons). Par défaut, tous les modèles reçoivent les mêmes fiches de la base de connaissances (les 3 plus pertinentes, choisies par la recherche hybride ; case à décocher) : la comparaison porte donc sur la façon de s'en servir, et la page liste les fiches fournies. Chaque carte donne la réponse, la durée, les jetons et le coût. Raccourcis : Claude, gratuits rapides, tous les gratuits.
- **Dictée** : en direct. Un seul appui sur « Démarrer la dictée » : le micro est écouté en continu et chaque phrase (après une pause de parole) est transcrite par Whisper et ajoutée aussitôt au texte, sans rien valider ; la dictée du navigateur tourne en parallèle pour comparer le délai et la qualité. Un fichier audio peut aussi être transcrit d'un bloc.
- **Images** : génération d'images à partir d'une description, avec neuf modèles de Cloudflare (FLUX.1 schnell, FLUX.2 klein et dev, Leonardo Phoenix et Lucid, SDXL, DreamShaper), à comparer côte à côte (format, pas, graine, « à éviter »), avec coût estimé en Neurons et confirmation obligatoire pour les images chères. Claude, lui, ne génère pas d'images : il les lit et les décrit.
- **Voix** : lecture à voix haute d'un texte français (MeloTTS).
- **Recherche** : mots-clés (méthode actuelle) contre recherche par le sens (bge-m3) contre leur combinaison, sur les fiches de la base de connaissances. Il faut d'abord « Indexer les fiches » (une fois, environ 35 Neurons).
- **Budget** : Neurons utilisés aujourd'hui sur 10 000 (commun à tout le compte Cloudflare, remise à zéro à 00 h UTC) et tarifs par modèle. Au-delà de 80 %, les essais sont refusés sauf case « Forcer ».
- **Outils** : commandes de développement à copier (RTK, Graphify, skills de design et d'animation), avec l'avertissement de lire les skills de particuliers avant de les installer.
- **Journal** : les 50 derniers essais de ce navigateur.

## Piloter le laboratoire (pour ChatGDB)
Ouvrir la page avec l'action « ouvrir » (application Laboratoire ou adresse `ChatGDB/laboratoire.html`) et des paramètres d'adresse ; les résultats se lisent ensuite sur la page (« lire ») ou dans le bloc « Résultats lisibles par ChatGDB ».
- Comparer : `?onglet=comparer&modeles=llama-3.1,qwen3,claude-haiku&q=ma question&lancer=1` (autres paramètres : `systeme`, `temp`, `max`, `force=1`, `fiches=0` pour comparer sans les fiches). `modeles` accepte des morceaux de nom, `claude`, `rapides` ou `tous`.
- Voix : `?onglet=voix&texte=Bonjour&lancer=1`. Recherche : `?onglet=recherche&r=ma question&lancer=1`.
- La dictée demande le micro : elle ne se lance pas par adresse.
- Depuis la page : `window.labo.comparer({q, modeles})`, `window.labo.chercher(q)`, `window.labo.resultats()`, `window.labo.etat()`.

## Limites
- Les modèles gratuits ne remplacent pas Claude pour piloter les applications (précision insuffisante sur les captures).
- Le budget gratuit est commun à tout le compte : ne pas lancer « tous les gratuits » à répétition (une comparaison complète peut coûter plusieurs centaines de Neurons).
- Aucune donnée personnelle (noms, photos, santé) ne doit être envoyée aux modèles gratuits : le lieu de traitement n'est pas confirmé.
