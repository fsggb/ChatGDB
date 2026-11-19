---
id: suite-craft-mcp
titre: Pilotage des applications Craft par l'IA (serveur MCP natif, commandes dans ChatGDB)
theme: Applications
type: application
sources:
  - titre: WordCraft - serveur MCP
    url: https://github.com/storytold/wordcraft/blob/main/docs/mcp.md
  - titre: WordCraft - API de la page (window.wordcraft)
    url: https://github.com/storytold/wordcraft/blob/main/packaging/web/README.md
  - titre: ChatGDB - pilotage des applications
    url: https://github.com/fsggb/ChatGDB/blob/main/appframe.js
mots_cles: MCP, serveur MCP, Model Context Protocol, Claude, agent, pilotage, commandes natives, window.wordcraft, wordcraft-cli, Craft, Word, Excel, PowerPoint, CADCraft, Premiere, Illustrator, api_commandes, api_executer, automatisation, Claude Code, Claude Desktop
liens: app-chatgdb, app-word, app-excel, app-powerpoint, app-cadcraft, app-premiere, app-illustrator, app-scouthub, applications-panorama
resume: Comment Claude pilote les applications de la suite Craft (Word, Excel, PowerPoint, CADCraft…) : dans ChatGDB par les commandes natives (même canal que le serveur MCP de chaque application), et sur ordinateur par le serveur MCP `<application>-cli mcp`.
---

## L'idée
Chaque application de la suite Craft (WordCraft, GridCraft, DeckCraft, CADCraft, FilmCraft, VectorCraft…) a un **canal de contrôle** : une liste de plusieurs centaines de commandes exactes (insérer du texte, mettre en gras, créer une feuille, tracer une ligne…), plus des méthodes pour lire l'état du document. Ce canal sert à deux choses :

1. **Le serveur MCP natif** (`<application>-cli mcp`, protocole Model Context Protocol) : sur un ordinateur où l'application est installée, Claude (Claude Code, Claude Desktop…) l'utilise comme outil.
2. **L'API de la page** (`window.wordcraft`, `window.gridcraft`, `window.deckcraft`, `window.cadcraft`…) : quand l'application tourne dans le navigateur (ScoutHub), elle met ce même canal à disposition de la page. **ChatGDB l'utilise** : c'est le moyen le plus exact de faire travailler Claude dans une application, sans cliquer.

## Dans ChatGDB (rien à installer)
L'outil « application » de ChatGDB offre, en plus de la souris et du clavier, cinq actions « natives » :
| Action | Rôle | Équivalent du serveur MCP |
|---|---|---|
| `api_commandes` (avec `requete`) | liste et recherche des commandes (identifiant, libellé, paramètres) | `list_commands` |
| `api_inspecter` | état exact du document (texte, styles, feuilles, calques…) | `inspect_document`, `get_text` |
| `api_executer` (`commande`, `parametres`) | exécute une commande | `execute` |
| `api_lot` (`commandes`) | plusieurs commandes d'affilée, arrêt à la première erreur | `batch` |
| `api_requete` (`methode`, `parametres`) | méthode du canal : `ui.inspect`, `ui.render`, `ui.screenshot`, `render.page`… (seulement `engine.*`, `document.*`, `ui.*`, `render.*`) | `ui_inspect`, `render_page`, `screenshot` |

Déroulé conseillé : ouvrir l'application ; `api_inspecter` (si « aucun document ouvert » : `api_executer` `file.new`) ; `api_commandes` avec un mot-clé pour trouver la commande ; `api_executer` ou `api_lot` ; vérifier avec `api_inspecter` ou une capture. Une commande refusée ou inconnue ne change pas le document et renvoie un message d'erreur clair. Les modifications sont faites dans le document ouvert dans le volet : la personne les voit et peut annuler (Ctrl+Z).

Exemple dans Word : `file.new`, puis `text.insert` (`{"text": "Compte rendu du camp", "raw": true}`), `select.text` (`{"text": "camp"}`), `format.bold`.

## Sur un ordinateur (Claude Code, Claude Desktop)
Pour les personnes qui ont installé une application Craft sur leur ordinateur :
```
claude mcp add wordcraft -- wordcraft-cli mcp                   # session sans fenêtre
wordcraft --control 7981 &                                       # ou : piloter l'application ouverte (clics, touches, captures)
claude mcp add wordcraft -- wordcraft-cli mcp --connect 127.0.0.1:7981
```
Pour confiner l'agent à des dossiers : `--automation-read-root` et `--automation-write-root` (mêmes options dans toutes les applications Craft, donc une seule configuration pour toute la suite). Outils proposés : `list_commands`, `execute`, `batch`, `new_document`, `open_document`, `save_document`, `type_text`, `select_text`, `insert_table`, `get_text`, `inspect_document`, `render_page`, `list_documents`, `screenshot`, `click`, `key`, `ui_inspect`, `parity`. Dans Claude Desktop, la configuration est `{"mcpServers": {"wordcraft": {"command": "/chemin/wordcraft-cli", "args": ["mcp"]}}}`.

## Où ça marche (vérifié sur les versions publiées dans ScoutHub)
- **Commandes natives disponibles** : Word (≈ 675 commandes), Excel (≈ 400), PowerPoint (≈ 380), CADCraft/AutoCAD (≈ 525), Premiere (≈ 720), Illustrator (≈ 1 400), SoLeadWorks/SolidCraft (≈ 360).
- **Partiel ou absent** : Acrobat (PDF) n'offre pas encore l'API ; Lightroom n'a qu'une commande unique (`command`) sans liste. Dans ces cas ChatGDB le dit et agit comme une personne (chercher, cliquer, taper, capture).
- Photoshop, InDesign, Figma, Substance Painter et Pro Tools exposent la même API quand le navigateur sait les démarrer (WebGPU ou WebGL2 nécessaire) ; elles n'ont pas pu être vérifiées sur un ordinateur sans carte graphique.
- Le serveur MCP « sur ordinateur » demande l'application installée (version de bureau) ; il n'est pas disponible sur téléphone.

## Mises à jour
Les applications sont servies par ScoutHub à la dernière version publiée : ScoutHub compare régulièrement (toutes les 15 minutes au mieux ; le planificateur de GitHub peut les espacer) les versions des applications avec celles qu'il sert, et se redéploie quand l'une change (SolidCraft et Excalidraw sont recompilés à chaque nouveau commit, ce qui prend jusqu'à une heure). Les commandes natives changent donc avec l'application : `api_commandes` donne toujours la liste exacte de la version ouverte.

## Questions auxquelles la fiche répond
- Claude peut-il modifier un document Word ou un tableur directement ?
- Comment brancher Claude Code ou Claude Desktop à WordCraft ou aux autres applications Craft ?
- Qu'est-ce que le serveur MCP des applications Craft ?
- Quelles applications de la suite acceptent les commandes natives ?
- Que faire si une application n'a pas d'API de pilotage ?
