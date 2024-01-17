import 'dotenv/config';

import type { Config } from 'drizzle-kit';

const defineConfig = <T extends Config>(config: T): T => config;

export default defineConfig({
	driver: 'd1',
	out: './src/database/migrations',
	schema: './src/database/schemas.ts',
	verbose: true,
});
