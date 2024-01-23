import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { showRoutes } from 'hono/dev';

import { commentsHandler } from '~/api/comments';

import type { APIRoute } from 'astro';

import type { BaseBindings } from '~/types/api';

const app = new Hono<{ Bindings: BaseBindings }>()
	.basePath('/api/hono/')
	.use('*', secureHeaders())
	.route('/', commentsHandler);

export type App = typeof app;

if (import.meta.env.DEV) console.log(showRoutes(app));

export const ALL: APIRoute = (context) => app.fetch(context.request, context.locals);
