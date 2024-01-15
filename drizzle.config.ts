import 'dotenv/config';

import { name } from './package.json';

import type { Config } from 'drizzle-kit';

const defineConfig = <T extends Config>(config: T): T => config;

const dbUrl =
	process.env.NODE_ENV === 'production' ? `/data/${name}.production.db` : `./${name}.local.db`;

export default defineConfig({
	dbCredentials: { url: dbUrl },
	driver: 'better-sqlite',
	out: './src/database/migrations',
	schema: './src/database/schemas.ts',
});
