import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { defineConfig } from 'auth-astro';

import { db } from '~/database/client';

export default defineConfig({
	adapter: DrizzleAdapter(db),
	providers: [],
	debug: import.meta.env.DEV,
});
