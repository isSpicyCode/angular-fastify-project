// À quoi sert ce fichier ?
// Initialiser le serveur Fastify
// Définir une route de test (souvent /health ou /) pour vérifier que le serveur répond
// Lancer l’écoute du serveur sur un port (ex : 3000)
// Voir les éventuelles erreurs de démarrage

import Fastify from 'fastify';
import cors from '@fastify/cors';

/**
 * Crée et configure une instance Fastify.
 * @returns {import('fastify').FastifyInstance}
 */
function createServer() { // createServer() : Sépare la création/config du serveur. Permet de tester ou d’ajouter des hooks/plugins facilement.
  const fastify = Fastify({ logger: true });

  // Configuration CORS pour autoriser le frontend Angular (localhost:4200)
  fastify.register(cors, { 
    origin: 'http://localhost:4200',
    credentials: true,
  });

  // Route de health check
  fastify.get('/api/health', async () => ({ status: 'ok' }));

// TODO: Ajouter les routes dynamiques ici via fastify.register() = Prêt pour l’évolution vers des routes/plugins modulaires
// Automatise le chargement des routes/plugins Fastify si tu veux aller plus loin (voir  : utilise fastify.register() ou @fastify/autoload).

  return fastify;
}

/**
 * Lance le serveur Fastify sur le port 3000.
 * Affiche les logs de démarrage ou d’erreur.
 * @returns {Promise<void>}
 */
async function startServer() {
  const fastify = createServer();

  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info('Serveur démarré sur http://localhost:3000');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

startServer();