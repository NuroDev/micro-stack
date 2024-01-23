// prettier-ignore
export type Prettify<T> = T extends infer U
	? { [K in keyof U]: U[K]; }
	: never;
