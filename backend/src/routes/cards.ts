import { FastifyInstance } from "fastify";
import { cardsData } from "../data/cards.js";

export default async function cardsRoutes(fastify: FastifyInstance) {
  fastify.get("/api/cards", async (request, reply) => {
    return {
      success: true,
      data: cardsData,
      count: cardsData.length,
    };
  });
}
