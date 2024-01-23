import { defineConfig } from 'auth-astro';

export default defineConfig({
	debug: import.meta.env.DEV,
	providers: [],
	secret: import.meta.env.AUTH_SECRET,
	trustHost: Boolean(import.meta.env.AUTH_TRUST_HOST),
});
