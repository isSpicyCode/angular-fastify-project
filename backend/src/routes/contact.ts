// backend/src/routes/contact.ts
import { FastifyInstance } from 'fastify';
import { contactSchema } from '../schemas/contact.js';
import { handleContact } from '../services/contact.js';
import { dataStore } from '../data/index.js';
import type { Contact } from '../data/contact.js';

export default async function contactRoutes(fastify: FastifyInstance) {
  // Route POST pour créer un contact
  fastify.post('/api/contact', contactSchema, async (request, reply) => {
    try {
      const newContact = await handleContact(request.body as Omit<Contact, 'id' | 'timestamp'>);
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
