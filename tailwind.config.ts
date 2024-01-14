import * as defaultColors from 'tailwindcss/colors';

import type { Config } from 'tailwindcss';

const defineConfig = <T extends Config>(config: T): T => config;

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: defaultColors.orange
      }
    }
  }
});
