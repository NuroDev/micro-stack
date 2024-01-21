import { faker } from '@faker-js/faker/locale/en';
import { Hono } from 'hono';

import type { BaseBindings } from '~/types/api';

export const commentsHandler = new Hono<{ Bindings: BaseBindings }>()
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
