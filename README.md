# Portfolio - Guide d'installation

Ce document explique comment recuperer le projet depuis GitHub, installer les dependances, lancer l'application et la visualiser en local.

## Prerequis

Avant de commencer, installez les outils suivants :

- Node.js 20.9 minimum
- npm
- Git

Pour verifier votre environnement :

```bash
node -v
npm -v
git --version
```

## Recuperer le lien du depot GitHub

1. Ouvrez le depot GitHub du projet :

```text
https://github.com/CarlaWAHA/Portfolio
```

2. Cliquez sur le bouton `Code`.
3. Copiez l'URL HTTPS du depot :

```text
https://github.com/CarlaWAHA/Portfolio.git
```

## Cloner le projet

Dans un terminal, placez-vous dans le dossier ou vous voulez installer le projet, puis executez :

```bash
git clone https://github.com/CarlaWAHA/Portfolio.git
```

Entrez ensuite dans le dossier du projet :

```bash
cd Portfolio
```

## Installer les dependances

Installez les dependances definies dans `package.json` :

```bash
npm install
```

Cette commande installe notamment :

- Next.js
- React
- React DOM
- TypeScript
- Tailwind CSS
- ESLint

## Lancer le projet en mode developpement

Demarrez le serveur de developpement :

```bash
npm run dev
```

Next.js lance alors l'application en local, generalement sur :

```text
http://localhost:3000
```

## Visualiser le portfolio

Ouvrez votre navigateur et allez a l'adresse suivante :

```text
http://localhost:3000
```

La page affiche le portfolio avec les sections :

- Navigation
- Hero
- A propos
- Competences
- Projets
- Experiences
- Contact

## Verifier la qualite du code

Pour lancer ESLint :

```bash
npm run lint
```

Cette commande controle le code avec la configuration ESLint de Next.js.

## Construire le projet pour la production

Pour generer une version de production :

```bash
npm run build
```

Pour demarrer la version de production apres le build :

```bash
npm run start
```

L'application sera de nouveau accessible dans le navigateur, generalement sur :

```text
http://localhost:3000
```

## Commandes utiles

| Commande | Description |
| --- | --- |
| `npm install` | Installe les dependances du projet |
| `npm run dev` | Lance le serveur de developpement |
| `npm run lint` | Verifie la qualite du code avec ESLint |
| `npm run build` | Genere le build de production |
| `npm run start` | Lance le serveur de production apres un build |

## Structure principale

```text
Portfolio/
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- public/
|-- src/
|   |-- components/
|   `-- data/
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- README.md
```

## Notes

- Le projet utilise l'App Router de Next.js.
- Le style est gere avec Tailwind CSS.
- Les donnees du portfolio sont centralisees dans `src/data/portfolio.tsx`.
- Les composants d'interface sont separes dans `src/components/`.
