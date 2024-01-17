import { text, sqliteTable, integer, primaryKey } from 'drizzle-orm/sqlite-core';

import type { AdapterAccount } from '@auth/core/adapters';

export type Schemas = {
	accounts: typeof accounts;
	comments: typeof comments;
	sessions: typeof sessions;
	users: typeof users;
	verificationTokens: typeof verificationTokens;
};

export const accounts = sqliteTable(
	'account',
	{
		access_token: text('access_token'),
		expires_at: integer('expires_at'),
		id_token: text('id_token'),
		provider: text('provider').notNull(),
		providerAccountId: text('providerAccountId').notNull(),
		refresh_token: text('refresh_token'),
		scope: text('scope'),
		session_state: text('session_state'),
		token_type: text('token_type'),
		type: text('type').$type<AdapterAccount['type']>().notNull(),
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
	},
	(account) => ({
		compoundKey: primaryKey({
			columns: [account.provider, account.providerAccountId],
		}),
	}),
);

export const comments = sqliteTable('comments', {
	author: text('author').notNull(),
	content: text('content').notNull(),
	id: integer('id').primaryKey(),
});

export const sessions = sqliteTable('session', {
	expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
	sessionToken: text('sessionToken').notNull().primaryKey(),
	userId: text('userId')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
});

export const users = sqliteTable('user', {
	email: text('email').notNull(),
	emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
	id: text('id').notNull().primaryKey(),
	image: text('image'),
	name: text('name'),
});

export const verificationTokens = sqliteTable(
	'verificationToken',
	{
		expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
		identifier: text('identifier').notNull(),
		token: text('token').notNull(),
	},
	(vt) => ({
		compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
	}),
);
