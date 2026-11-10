# ChatGDB

ChatGDB est l'assistant IA de la fédération FSGGB : une application pleine page (conversations, artefacts, images, PDF, recherche web, dictée vocale, crédits) qui s'appuie sur le serveur de ScoutHub.

- **Site** (ce dépôt, statique) : publié dans ScoutHub à l'adresse `https://fsggb.github.io/ScoutHub/ChatGDB/`. ScoutHub clone ce dépôt dans son site et le met à jour automatiquement (vérification toutes les 15 minutes, déploiement seulement si ce dépôt a changé).
- **Serveur** : l'action `chat` du serveur ScoutHub (`ScoutHub/backend/Code.gs`) appelle Claude, tient les crédits, la mémoire et la recherche web. La clé de l'API n'est jamais dans ce dépôt.
- **Fichiers partagés** : `config.js`, `common.js` (session, rôles) et `scouthub-client.js` sont ceux de ScoutHub, chargés par adresse absolue (`/ScoutHub/...`) : pas besoin de se reconnecter, et ce dépôt reste léger.

## Développer
Ouvrir `index.html` par un petit serveur local ne suffit pas (les fichiers de ScoutHub sont chargés par `/ScoutHub/...`) : le plus simple est de pousser sur ce dépôt et de regarder le résultat dans ScoutHub après la synchronisation, ou de lancer un serveur local qui sert ScoutHub sous `/ScoutHub/` et ce dépôt sous `/ChatGDB/`.

Le format des artefacts (`<artifact id="" type="markdown|html|svg|csv|code" title="">`) et les crédits sont décrits dans `ScoutHub/docs/projet-chatgdb.md`.
