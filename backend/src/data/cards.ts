/* 
Mock data : simuler un backend avant l’intégration d’une base réelle

1. Pourquoi un fichier de data ?
Séparation des responsabilités
Placer tes données mockées dans un dossier data/ isole clairement la source des données (« le quoi ») de la logique métier et des routes (« le comment »).

Facilité de maintenance
Quand tu voudras modifier ou enrichir tes cartes (titres, descriptions…), tu le feras dans un seul fichier sans toucher aux routes ni aux services.

Préparation à la migration
Plus tard, si tu remplaces les données mockées par une base de données, tu pourras réutiliser la même interface (Card) et le même contrat de données.
*/


// 1. Déclaration de l’interface Card
export interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  published: string;
  featured: boolean; // attribut, featured est un drapeau (flag) qui indique si une carte doit être mise en avant (ex. affichée en haut, avec un style spécial ou dans un carrousel).
}

// 2. Export du tableau de données mockées
export const cardsData: Card[] = [
  {
    id: 1,
    title: "Conception Web Moderne",
    description: "Découvrez les dernières tendances en matière de design web et d'expérience utilisateur.",
    image: "Conception_Web_Moderne.png",
    category: "Design",
    published: "2025-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Développement Angular",
    description: "Maîtrisez les concepts fondamentaux d'Angular pour créer des applications performantes.",
    image: "Développement_Angular.webp",
    category: "Développement",
    published: "2025-01-10",
    featured: false
  },
  {
    id: 3,
    title: "API REST avec Fastify",
    description: "Apprenez à construire des APIs rapides et sécurisées avec Fastify.",
    image: "API_REST_Fastify.webp",
    category: "Backend",
    published: "2025-01-05",
    featured: true
  },
  {
    id: 4,
    title: "DevOps et Déploiement",
    description: "Automatisez vos déploiements avec les meilleures pratiques DevOps.",
    image: "DevOps_Déploiement.jpeg",
    category: "DevOps",
    published: "2025-01-01",
    featured: false
  }
];
