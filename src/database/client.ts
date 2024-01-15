import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import SQLite from 'better-sqlite3';

import * as schema from '~/database/schemas.ts';
import { name } from '~/../package.json';

const sqlite = new SQLite(
	import.meta.env.PROD ? `/data/${name}.production.db` : `./${name}.local.db`,
);

export const db = drizzle(sqlite, { schema });

migrate(db, {
	migrationsFolder: import.meta.env.PROD
		? '/migrations'
		: new URL('./migrations', import.meta.url).pathname,
});
