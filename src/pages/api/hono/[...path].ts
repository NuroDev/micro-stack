import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';

import { commentsHandler } from '~/utils/hono/comments';

import type { APIRoute } from 'astro';

import type { Prettify } from '~/types/utils';

type Bindings = Prettify<App.Locals>;

const app = new Hono<{ Bindings: Bindings }>().basePath('/api/hono/').route('/', commentsHandler);

export type App = typeof app;

if (import.meta.env.DEV) console.log(showRoutes(app));

export const ALL: APIRoute = (context) => app.fetch(context.request, context.locals);
