import type { InferSelectModel } from 'drizzle-orm';

import type { comments } from '~/database/schemas';

export type Comment = InferSelectModel<typeof comments>;
