// backend/src/routes/contact.ts
import { FastifyInstance, FastifyRequest } from 'fastify';
import { contactSchema } from '../schemas/contact.js';
import { handleContact } from '../services/contact.js';
import { dataStore } from '../data/index.js';
import type { Contact } from '../data/contact.js';

export default async function contactRoutes(fastify: FastifyInstance) {
  // Route POST pour créer un contact
  fastify.post('/api/contact', { schema: contactSchema },
  async (request: FastifyRequest<{ Body: Omit<Contact, 'id' | 'timestamp'> }>, reply) => {
    try {
      const newContact = await handleContact(request.body);
      return reply.send({
        success: true,
        data: newContact
      });
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({
        success: false,
        message: 'Erreur lors du traitement'
      });
    }
  });

  // Route GET pour récupérer tous les contacts
  fastify.get('/api/contact', async (request, reply) => {
    try {
      const contacts = await dataStore.getContacts();
      return reply.send({
        success: true,
        data: contacts,
        count: contacts.length
      });
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({
        success: false,
        message: 'Erreur lors de la récupération'
      });
    }
  });
}
