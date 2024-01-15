import { defineConfig } from 'astro/config';

import auth from 'auth-astro';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

import { getSite } from './src/utils/site';

// https://astro.build/config
export default defineConfig({
	adapter: node({ mode: 'standalone' }),
	integrations: [auth(), tailwind()],
	output: 'server',
	site: getSite(),
});
