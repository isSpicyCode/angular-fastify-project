import { FastifyInstance } from 'fastify';
import { Contact } from '../src/data/contact';
import { createServer } from '../src/index'; // Use named import

describe('Contact API', () => {
  let fastify: FastifyInstance;
  
  beforeAll(async () => {
    fastify = await createServer();
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  describe('POST /api/contact', () => {
    const validPayload: Omit<Contact, 'id' | 'timestamp'> = {
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      message: 'Ceci est un message valide'
    };

    test('should return 200 for valid request', async () => {
      const response = await fastify.inject({
        method: 'POST',
        url: '/api/contact',
        payload: validPayload
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toMatchObject({
        success: true,
        data: expect.objectContaining(validPayload)
      });
    });

    test('should return 400 for missing required fields', async () => {
      // Use destructuring to omit required field
      const { nom, ...invalidPayload } = validPayload;

      const response = await fastify.inject({
        method: 'POST',
        url: '/api/contact',
        payload: invalidPayload
      });

      expect(response.statusCode).toBe(400);
      expect(JSON.parse(response.body)).toMatchObject({
        statusCode: 400,
        error: 'Bad Request'
      });
    });

    test('should return 400 for invalid email format', async () => {
      const response = await fastify.inject({
        method: 'POST',
        url: '/api/contact',
        payload: {
          ...validPayload,
          email: 'invalid-email'
        }
      });

      expect(response.statusCode).toBe(400);
      expect(JSON.parse(response.body)).toMatchObject({
        statusCode: 400,
        error: 'Bad Request'
      });
    });
  });
});
