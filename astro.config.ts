import { defineConfig } from 'astro/config';

import auth from 'auth-astro';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

function getSite(): string {
	if (import.meta.env.DEV) return 'http://localhost:4321';
	if (import.meta.env.SITE) return import.meta.env.SITE;
	return 'https://example.app';
}

// https://astro.build/config
export default defineConfig({
	adapter: node({ mode: 'standalone' }),
	integrations: [auth(), tailwind()],
	output: 'server',
	site: getSite(),
});
