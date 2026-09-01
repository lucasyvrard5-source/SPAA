# SPAA — intégration Decap CMS

Le site a été préparé pour être géré depuis `/admin/`. Les contenus sont stockés dans `content/*.yml` et modifiables depuis Decap CMS.

## Déploiement recommandé

Utiliser GitHub pour le dépôt et Netlify pour l’hébergement/authentification. Le backend `git-gateway` permet à des éditeurs invités de modifier le contenu sans leur donner directement les droits d’écriture GitHub.

### À faire
1. Créer un repository GitHub et pousser tout le dossier.
2. Importer ce repository dans Netlify.
3. Activer Netlify Identity et Git Gateway.
4. Inviter les administrateurs du refuge.
5. Ouvrir `https://TON-SITE.netlify.app/admin/`.

Le fichier `admin/config.yml` utilise actuellement `git-gateway`, branche `main`.
