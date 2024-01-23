import { defineConfig } from 'auth-astro';

import GitHub from '@auth/core/providers/github';

export default defineConfig({
	debug: import.meta.env.DEV,
	providers: [
		GitHub({
			clientId: import.meta.env.AUTH_GITHUB_CLIENT_ID,
			clientSecret: import.meta.env.AUTH_GITHUB_CLIENT_SECRET,
		}),
	],
	secret: import.meta.env.AUTH_SECRET,
	trustHost: Boolean(import.meta.env.AUTH_TRUST_HOST),
});
