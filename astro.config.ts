import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { getSite } from './src/utils/site';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		runtime: {
			bindings: {
				DATABASE: { type: 'd1' },
			},
			mode: 'local',
			persistTo: new URL('.wrangler/state/v3/', import.meta.url).pathname,
			type: 'pages',
		},
	}),
	integrations: [tailwind()],
	site: getSite(),
	output: 'server',
});
