import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';

import { db } from '~/database/client';

import type { APIRoute } from 'astro';

const app = new Hono()
	.basePath('/api/hono/')
	.use('*', secureHeaders())
	.get('/comments', async (c) => c.json({ comments: await db.query.comments.findMany() }));

export type App = typeof app;

export const ALL: APIRoute = (context) => app.fetch(context.request);
