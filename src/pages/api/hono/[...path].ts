import { Hono } from 'hono';
import { faker } from '@faker-js/faker';

import type { APIRoute } from 'astro';

import type { Prettify } from '~/types/utils';

type Bindings = Prettify<App.Locals>;

const app = new Hono<{ Bindings: Bindings }>()
	.basePath('/api/hono/')
	.get('/comments', async (c) =>
		c.json({ comments: await c.env.drizzle.query.comments.findMany() }),
	)
	.post('/comments', async (c) => {
		const rawCount = c.req.query('count');
		if (!rawCount) return c.json({ ok: false, error: 'Missing count' });

		const count = parseInt(rawCount);

		await Promise.all(
			new Array(count).fill(null).map(async () => {
				await c.env.drizzle.insert(c.env.schemas.comments).values({
					author: faker.person.fullName(),
					content: faker.lorem.sentence(),
				});

				await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
			}),
		);

		return c.json({ ok: true });
	});

export type App = typeof app;

export const ALL: APIRoute = (context) => app.fetch(context.request, context.locals);
