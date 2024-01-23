import { Hono } from 'hono';

import type { BaseBindings } from '~/types/api';

export const commentsHandler = new Hono<{ Bindings: BaseBindings }>().get('/comments', async (c) =>
	c.json({ comments: await c.env.drizzle.query.comments.findMany() }),
);
