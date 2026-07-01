# Ma valeur ajoutee

Dans ce projet Portfolio, ma valeur ajoutee repose sur plusieurs aspects techniques : la conception de l'architecture applicative, la structuration du code, la mise en place d'une interface responsive, la centralisation des donnees, l'utilisation de bonnes pratiques Next.js et l'exploitation encadree de l'intelligence artificielle comme outil d'audit et d'optimisation.

L'objectif n'etait pas seulement de produire une page web visuelle, mais de construire une base de projet propre, maintenable, evolutive et comprehensible par un autre developpeur.

## Realisations faites sans IA

Les elements suivants ont ete concus et developpes par moi-meme, sans generation de code par IA. J'ai utilise mes connaissances en Next.js, React, TypeScript et Tailwind CSS pour prendre les decisions techniques et les mettre en place.

### Exemple 1 : conception de l'architecture du projet

Sans IA, j'ai d'abord reflechi a l'organisation generale du projet. Mon objectif etait d'eviter d'avoir tout le code dans un seul fichier et de construire une architecture plus claire.

J'ai donc choisi de separer le projet en plusieurs parties :

- `app/` pour les fichiers principaux de Next.js ;
- `src/components/` pour les composants de l'interface ;
- `src/data/` pour les donnees du portfolio ;
- `public/` pour les fichiers statiques.

J'ai procede en identifiant les responsabilites de chaque dossier. Le dossier `app/` gere la structure Next.js, les composants gerent l'affichage, et le fichier de donnees contient les informations a afficher. Cette separation rend le projet plus lisible, plus maintenable et plus facile a faire evoluer.

### Exemple 2 : decoupage de l'interface en composants React

Sans IA, j'ai analyse les differentes sections visibles du portfolio, puis je les ai transformees en composants React distincts.

J'ai cree une structure composee de plusieurs composants :

- `Navbar` pour la navigation ;
- `Hero` pour l'introduction ;
- `About` pour la presentation ;
- `Skills` pour les competences ;
- `Projects` pour les projets ;
- `Experience` pour le parcours ;
- `Contact` pour la prise de contact.

J'ai procede section par section. A chaque fois qu'une partie de la page avait un role precis, je l'ai isolee dans un composant. Cette methode correspond a une architecture orientee composants, qui est une bonne pratique en React.

### Exemple 3 : centralisation des donnees du portfolio

Sans IA, j'ai choisi de ne pas ecrire toutes les informations directement dans les composants. J'ai cree un fichier dedie aux donnees : `src/data/portfolio.tsx`.

Dans ce fichier, j'ai regroupe :

- les informations du profil ;
- la liste des competences ;
- les projets ;
- les experiences.

J'ai procede ainsi pour separer les donnees de la presentation. Les composants ne contiennent pas directement tout le contenu : ils importent les donnees et les affichent. Cette logique facilite les modifications futures. Par exemple, pour ajouter une competence ou un projet, il suffit de modifier le tableau correspondant.

### Exemple 4 : affichage dynamique avec `.map()`

Sans IA, j'ai mis en place l'affichage dynamique des listes avec la methode `.map()`.

Cette logique est utilisee pour afficher automatiquement :

- les competences ;
- les cartes de projets ;
- les technologies de chaque projet ;
- les experiences professionnelles.

J'ai procede a partir de tableaux de donnees. Pour chaque entree du tableau, React genere un element JSX. Cela evite de recopier manuellement le meme code plusieurs fois. Cette approche rend le code plus propre, plus court et plus evolutif.

### Exemple 5 : responsive design avec Tailwind CSS

Sans IA, j'ai travaille l'adaptation visuelle du portfolio aux differentes tailles d'ecran.

J'ai utilise des classes Tailwind CSS comme :

- `max-w-6xl` pour limiter la largeur du contenu ;
- `px-6` et `py-24` pour gerer les espacements ;
- `md:flex` pour adapter la navigation ;
- `md:text-7xl` pour agrandir le titre sur desktop ;
- `md:grid-cols-3` pour afficher les projets en grille sur grand ecran ;
- `flex-wrap` pour permettre aux badges de competences de passer a la ligne.

J'ai procede progressivement : d'abord une structure fonctionnelle, puis des ajustements responsive pour ameliorer la lecture sur mobile et sur desktop. Ce travail montre ma capacite a prendre en compte l'ergonomie et l'experience utilisateur.

## Utilisation de ChatGPT

Apres avoir defini mon architecture, je l'ai soumise a ChatGPT pour obtenir un avis critique.

ChatGPT m'a aidee a :

- verifier si mon organisation etait coherente ;
- confirmer l'interet de separer `app/`, `src/components/` et `src/data/` ;
- reformuler certains choix techniques ;
- mieux expliquer ma demarche dans la documentation.

ChatGPT n'a donc pas remplace mon travail. Je l'ai utilise comme un outil de relecture et de validation de mes choix.

## Utilisation de Codex pour les optimisations

Apres avoir code le projet moi-meme, j'ai utilise Codex pour optimiser la documentation et auditer le projet, comme le professeur nous l'a suggere.

Voici quatre optimisations realisees avec l'aide de Codex.

### Optimisation 1 : README d'installation

Codex m'a aidee a transformer le README principal en guide d'installation complet.

Le README explique maintenant :

- comment recuperer le lien du depot GitHub ;
- comment cloner le projet avec `git clone` ;
- comment installer les dependances avec `npm install` ;
- comment lancer le projet avec `npm run dev` ;
- comment visualiser le portfolio sur `http://localhost:3000` ;
- comment utiliser les scripts `build`, `start` et `lint`.

Cette optimisation rend le projet plus simple a installer et a tester.

### Optimisation 2 : audit de la stack technique

Codex m'a aidee a formaliser la stack technique du projet.

Le document technique met en avant :

- Next.js ;
- React ;
- TypeScript ;
- Tailwind CSS ;
- ESLint ;
- PostCSS ;
- l'architecture App Router ;
- les composants React ;
- la centralisation des donnees.

Cette optimisation permet de mieux expliquer les choix techniques faits dans le projet.

### Optimisation 3 : amelioration de la lisibilite Markdown

Codex m'a aidee a nettoyer certains fichiers Markdown.

Par exemple, les tableaux avec des caracteres `|` ont ete remplaces par des listes avec des tirets et des deux-points. Cela rend les documents plus faciles a lire dans l'IDE et sur GitHub.

Cette optimisation concerne la qualite de la documentation et sa lisibilite.

### Optimisation 4 : bonnes pratiques 

Les bonne pratiques mis en place sont notamment:

- l'utilisation de l'App Router ;
- la separation des composants ;
- la centralisation des donnees ;
- le typage TypeScript ;
- l'utilisation de Tailwind CSS ;
- la configuration ESLint ;
- les points a ameliorer comme les metadata SEO, l'accessibilite et le typage explicite des donnees.

Cette optimisation m'a permis de prendre du recul sur mon projet et de mieux comprendre ses forces techniques.

## Bilan 

Ma valeur ajoutee principale est d'avoir concu et code la structure du projet moi-meme, sans IA, puis d'avoir utilise l'IA comme un outil d'accompagnement.

J'ai donc utilise mon intelligence pour :

- concevoir l'architecture ;
- organiser les fichiers ;
- creer les composants ;
- centraliser les donnees ;
- mettre en place l'affichage dynamique ;
- travailler le responsive design.

Ensuite, j'ai utilise ChatGPT et Codex pour relire, auditer, documenter et optimiser le projet. Cette demarche montre que je sais utiliser l'intelligence artificielle de maniere responsable, sans lui deleguer tout le travail.

## Conclusion

Ce projet montre a la fois mes competences techniques et ma capacite a utiliser l'IA comme un assistant de qualite. Les realisations principales du projet ont ete faites sans IA, puis l'IA a ete utilisee pour ameliorer la documentation, verifier les bonnes pratiques et structurer l'audit du projet.
