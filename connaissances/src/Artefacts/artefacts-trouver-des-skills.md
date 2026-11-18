---
id: artefacts-trouver-des-skills
titre: find-skills, trouver et installer des skills (pour l'administrateur)
theme: Artefacts
type: synthese
sources:
  - titre: vercel-labs/skills, skills/find-skills/SKILL.md, licence MIT
    url: https://github.com/vercel-labs/skills
mots_cles: skills, find-skills, npx skills, skills.sh, installation, administrateur
liens: app-chatgdb, artefacts-checklist
resume: Ce que fait le skill find-skills et comment un humain cherche et installe des skills avec la commande npx skills. Destiné à l'administrateur ; ChatGDB n'installe rien lui-même.
---

## Ce que fait find-skills
Aide un agent à repérer un skill existant quand on lui demande « comment faire X » : il identifie le domaine, consulte le classement de skills.sh (trié par installations), cherche par mots-clés, juge la qualité, présente les options puis propose l'installation. Sans résultat, il aide directement ou propose d'en créer un.

## Pour un humain (administrateur)
- Chercher : `npx skills find react performance` (option `--owner` pour limiter à un auteur).
- Installer : `npx skills add proprietaire/depot@skill`.
- Mettre à jour : `npx skills update`. Créer le sien : `npx skills init nom`.
- Catalogue consultable sur skills.sh.

## Prudence (avis de lecture, pas du skill)
- Le skill suggère `-g -y` : `-y` supprime les confirmations. Mieux vaut l'omettre.
- Lire le contenu du dépôt avant d'installer : installations et étoiles se manipulent.
- Un skill global agit sur toutes les sessions. Un skill est un texte d'instructions : relire avant de faire confiance.
- Dans ChatGDB, on n'installe rien : on lit, on résume en fiche, on cite la licence.

## Questions auxquelles la fiche répond
- Comment chercher un skill existant ?
- Quels risques à installer un skill sans le lire ?
