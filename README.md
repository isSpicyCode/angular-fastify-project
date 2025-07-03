# Mini-site Angular + Fastify

## Structure du projet

- **frontend/** : Application Angular 20+ (features, shared, core, layout)
- **backend/** : API REST Fastify (routes, services, plugins, config, utils)
- **tests/** : Tests unitaires et d’intégration backend
- **angular_mini_site_prompt.md** : Spécification fonctionnelle du projet
- **Bonnes pratiques descriptions.md** : Rappels de standards et best practices

## Démarrage rapide

```bash
# Démarrer le backend
cd backend
npm install
npm run dev

# Démarrer le frontend
cd ../frontend
npm install
npm start
```

## Liens utiles

- [Guide Angular](https://angular.io/guide/styleguide)
- [Guide Fastify](https://www.fastify.io/docs/latest/)

---

## backend/

- **src/**
  - **config/** : fichiers de configuration du backend (ex : variables d’environnement, config Fastify)
  - **plugins/** : plugins Fastify personnalisés ou externes
  - **routes/** : définition des routes API (REST, etc.)
  - **services/** : logique métier réutilisable (accès aux données, règles de gestion)
  - **utils/** : utilitaires et fonctions génériques backend
- **tests/** : tests unitaires ou d’intégration du backend
- **package.json** et **package-lock.json** : configuration npm du backend

---

## frontend/

- **.vscode/** : configuration spécifique à VS Code (facultatif)
- **node_modules/** : dépendances npm du frontend (gérées par Angular CLI)
- **public/** : ressources statiques (favicon, etc.)
- **src/**
  - **app/** : dossier principal du code applicatif Angular (composants, services, etc.)
  - **index.html** : fichier principal HTML Angular
  - **main.ts** : point d’entrée de l’application Angular
  - **styles.css** : feuille de styles globale Angular
- **.editorconfig**, **.gitignore** : fichiers de configuration d’édition et de versionning
- **angular.json** : configuration du projet Angular
- **package.json**, **package-lock.json** : configuration npm du frontend
- **README.md**, **tsconfig.app.json**, **tsconfig.json**, **tsconfig.spec.json** : documentation et configuration TypeScript

---

## Racine du projet

- **node_modules/** : dépendances éventuelles à la racine (devraient rester vides, sauf cas particulier)
- **README.md** et divers fichiers markdown : documentation du projet, guides, feuille de route, prompt

---