import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind()],
  output: 'server'
});
