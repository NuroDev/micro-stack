import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';

import { commentsHandler } from '~/api/comments';

import type { APIRoute } from 'astro';

import type { BaseBindings } from '~/types/api';

const app = new Hono<{ Bindings: BaseBindings }>()
	.basePath('/api/hono/')
	.use(
		'*',
		secureHeaders({
			contentSecurityPolicy: {
				defaultSrc: ['self'],
			},
		}),
	)
	.route('/', commentsHandler);

export type App = typeof app;

export const ALL: APIRoute = (context) => app.fetch(context.request, context.locals);
