import { defineConfig } from 'astro/config';

import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

function getSite(): string {
	if (import.meta.env.DEV) return 'http://localhost:4321';

	if (import.meta.env.CF_PAGES_URL) return import.meta.env.CF_PAGES_URL;

	// If one is provided in the environment, use it.
	if (import.meta.env.SITE) return import.meta.env.SITE;

	return 'https://example.app';
}

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		imageService: 'compile',
		mode: 'advanced',
		runtime: {
			bindings: {
				DATABASE: { type: 'd1' },
			},
			mode: 'local',
			type: 'pages',
		},
	}),
	integrations: [auth(), tailwind()],
	site: getSite(),
	output: 'server',
});
