import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { comments } from '~/database/schemas';

export const InsertCommentSchema = createInsertSchema(comments);
export const SelectCommentSchema = createSelectSchema(comments);
