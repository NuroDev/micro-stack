import { drizzle } from 'drizzle-orm/d1';
import { defineMiddleware } from 'astro:middleware';

import * as schema from '~/database/schemas';

export const onRequest = defineMiddleware(async (ctx, next) => {
	ctx.locals.drizzle = drizzle<Schemas>(ctx.locals.runtime.env.DATABASE, { schema });
	ctx.locals.schemas = schema;

	return await next();
});
