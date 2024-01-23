import { Hono } from 'hono';

import { db } from '~/database/client';

import type { BaseBindings } from '~/types/api';

export const commentsHandler = new Hono<{ Bindings: BaseBindings }>().get('/comments', async (c) =>
	c.json({ comments: await db.query.comments.findMany() }),
);
