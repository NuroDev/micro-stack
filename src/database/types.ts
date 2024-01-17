import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';

import type { accounts, comments, sessions, users, verificationTokens } from '~/database/schemas';

export type SelectAccount = InferSelectModel<typeof accounts>;
export type InsertAccount = InferInsertModel<typeof accounts>;

export type SelectComment = InferSelectModel<typeof comments>;
export type InsertComment = InferInsertModel<typeof comments>;

export type SelectSession = InferSelectModel<typeof sessions>;
export type InsertSession = InferInsertModel<typeof sessions>;

export type SelectUser = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;

export type SelectVerificationToken = InferSelectModel<typeof verificationTokens>;
export type InsertVerificationToken = InferInsertModel<typeof verificationTokens>;
