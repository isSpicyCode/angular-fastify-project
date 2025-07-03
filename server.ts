import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import jwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import sensible from '@fastify/sensible';

const app = Fastify({ logger: true });

await app.register(cors, { origin: ['http://localhost:4200'] });
await app.register(helmet);
await app.register(jwt, { secret: 'SUPER_SECRET_KEY' });
await app.register(swagger, { swagger: { info: { title: 'API', version: '1.0.0' } } });
await app.register(sensible);

// ... tes routes ici

await app.listen({ port: 3000 });