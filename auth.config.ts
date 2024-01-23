import { defineConfig } from 'auth-astro';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import GitHub from '@auth/core/providers/github';

import { db } from '~/database/client';

export default defineConfig({
	adapter: DrizzleAdapter(db),
	providers: [
		GitHub({
			clientId: import.meta.env.AUTH_GITHUB_CLIENT_ID,
			clientSecret: import.meta.env.AUTH_GITHUB_CLIENT_SECRET,
		}),
	],
	debug: import.meta.env.DEV,
});
