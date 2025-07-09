// src/index.ts
// Configure et démarre le serveur Fastify (createServer() + startServer()).
// Enregistre les plugins (CORS, JWT, Swagger, etc.).
// Charge les routes via fastify.register() ou @fastify/autoload.

// À quoi sert ce fichier ?
// Initialiser le serveur Fastify
// Définir une route de test (souvent /health ou /) pour vérifier que le serveur répond
// Lancer l’écoute du serveur sur un port (ex : 3000)
// Voir les éventuelles erreurs de démarrage

// Nom de variable : PascalCase ou kebab-case ?
// PascalCase (CardsData) : Réservé aux classes et interfaces.
// camelCase (cardsData) : La bonne pratique pour les variables et constantes en JavaScript/TypeScript (cf. guides Airbnb et Google).
// kebab-case (cards-data) : Jamais utilisé pour les variables/constantes en JS/TS, seulement pour les noms de fichiers ou, parfois, pour des clés d’objet en JSON.

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { cardsData } from './data/cards.js';
import cardsRoutes from './routes/cards.js';
import galleryRoutes from './routes/gallery.js';
import contactRoutes from './routes/contact.js';

/**
 * Crée et configure une instance Fastify.
 * @returns {import('fastify').FastifyInstance}
 */
async function createServer(): Promise<ReturnType<typeof Fastify>> { // createServer() : Sépare la création/config du serveur. Permet de tester ou d’ajouter des hooks/plugins facilement.
  const fastify = Fastify({ logger: true });

  // Configuration CORS pour autoriser le frontend Angular (localhost:4200)
  await fastify.register(cors, {
    origin: 'http://localhost:4200', // Limite l'accès exclusivement à Angular (localhost:4200)
    credentials: true, // Permet l'envoi de cookies/headers d'authentification si nécessaire
  });

  // Route de health check
 fastify.get('/api/health', async (request, reply) => {
  return {
    success: true,
    data: cardsData,
    count: cardsData.length
  };
});


  // Register routes  
  fastify.register(cardsRoutes);
  fastify.register(galleryRoutes);
  fastify.register(contactRoutes);

  return fastify;
}

/**
 * Lance le serveur Fastify sur le port 3001.
 * Affiche les logs de démarrage ou d’erreur.
 * @returns {Promise<void>}
 */
async function startServer(): Promise<void> {
  const fastify = await createServer();

  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
    fastify.log.info('Serveur démarré sur http://localhost:3001');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

startServer();
