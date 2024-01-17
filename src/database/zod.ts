import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { accounts, comments, sessions, users, verificationTokens } from '~/database/schemas';

export const SelectAccountSchema = createSelectSchema(accounts);
export const InsertAccountSchema = createInsertSchema(accounts);

export const SelectCommentSchema = createSelectSchema(comments);
export const InsertCommentSchema = createInsertSchema(comments);

export const SelectSessionSchema = createSelectSchema(sessions);
export const InsertSessionSchema = createInsertSchema(sessions);

export const SelectUserSchema = createSelectSchema(users);
export const InsertUserSchema = createInsertSchema(users);

export const SelectVerificationTokenSchema = createSelectSchema(verificationTokens);
export const InsertVerificationTokenSchema = createInsertSchema(verificationTokens);
