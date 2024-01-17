import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { getSite } from './src/utils/site';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		runtime: {
			bindings: {},
			mode: 'local',
			type: 'pages',
		},
	}),
	integrations: [tailwind()],
	site: getSite(),
	output: 'server',
});
