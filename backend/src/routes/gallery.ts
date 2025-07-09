// backend/src/routes/gallery.ts

import { FastifyInstance } from 'fastify';
import { galleryData } from '../data/index.js';

export default async function galleryRoutes(fastify: FastifyInstance) {
  fastify.get('/api/gallery', async (request, reply) => {
    return {
      success: true,
      data: galleryData,
      count: galleryData.length,
    };
  });
}

