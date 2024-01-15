import type { InferSelectModel } from 'drizzle-orm';
import { comments } from './schemas.ts';

export type Comment = InferSelectModel<typeof comments>;
