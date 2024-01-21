import { Hono } from 'hono';

import { commentsHandler } from '~/utils/hono/comments';

import type { APIRoute } from 'astro';

import type { Prettify } from '~/types/utils';

type Bindings = Prettify<App.Locals>;

const app = new Hono<{ Bindings: Bindings }>().basePath('/api/hono/').route('/', commentsHandler);

export type App = typeof app;

export const ALL: APIRoute = (context) => app.fetch(context.request, context.locals);
