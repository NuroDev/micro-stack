import { Hono } from 'hono';

import type { APIRoute } from 'astro';
import { db } from '~/database/client';

const app = new Hono()
	.basePath('/api/hono/')
	.get('/comments', async (c) => c.json({ comments: await db.query.comments.findMany() }));

export type App = typeof app;

export const ALL: APIRoute = (context) => app.fetch(context.request);
