import { drizzle } from 'drizzle-orm/d1';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (ctx, next) => {
	ctx.locals.drizzle = drizzle(ctx.locals.runtime.env.DATABASE);

	return await next();
});
