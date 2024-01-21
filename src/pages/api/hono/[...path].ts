import { Hono } from 'hono';

import type { APIRoute } from 'astro';

import type { Prettify } from '~/types/utils';

type Bindings = Prettify<App.Locals>;

const app = new Hono<{ Bindings: Bindings }>()
	.basePath('/api/hono/')
	.get('/comments', async (c) =>
		c.json({ comments: await c.env.drizzle.query.comments.findMany() }),
	);

export type App = typeof app;

export const ALL: APIRoute = (context) => app.fetch(context.request, context.locals);
