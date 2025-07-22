import { Type } from '@sinclair/typebox';
import { FastifyInstance } from 'fastify';
import { getAllCards, getCardById } from '../services/cards.js';

const CardParamsSchema = Type.Object({
  id: Type.String({ pattern: '^[0-9]+$' }),
});

const CardResponseSchema = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  description: Type.String(),
  image: Type.String(),
  category: Type.String(),
  published: Type.String(),
  featured: Type.Boolean(),
});

const CardsListResponseSchema = Type.Array(CardResponseSchema);

/**
 * Enregistre les routes liées aux cartes dans Fastify
 * @param fastify Instance Fastify
 */
export default async function cardsRoutes(fastify: FastifyInstance) {
  // Route GET /api/cards - Récupérer toutes les cartes
  fastify.get(
    '/api/cards',
    {
      schema: {
        response: {
          200: CardsListResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const cards = getAllCards();
      reply.send(cards);
    }
  );

  // Route GET /api/cards/:id - Récupérer une carte par ID
  fastify.get(
    '/api/cards/:id',
    {
      schema: {
        params: CardParamsSchema,
        response: {
          200: CardResponseSchema,
          400: Type.Object({ error: Type.String() }),
          404: Type.Object({ error: Type.String() }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      const cardId = Number(id);

      if (Number.isNaN(cardId)) {
        reply.code(400).send({ error: 'ID de carte invalide' });
        return;
      }

      const card = getCardById(cardId);

      if (!card) {
        reply.code(404).send({ error: 'Carte non trouvée' });
        return;
      }

      reply.send(card);
    }
  );
}