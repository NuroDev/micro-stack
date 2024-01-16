import 'dotenv/config';

import type { Config } from 'drizzle-kit';

const defineConfig = <T extends Config>(config: T): T => config;

const dbUrl = process.env.NODE_ENV === 'production' ? `/data/app.production.db` : `./app.local.db`;

export default defineConfig({
	dbCredentials: { url: dbUrl },
	driver: 'better-sqlite',
	out: './src/database/migrations',
	schema: './src/database/schemas.ts',
});
