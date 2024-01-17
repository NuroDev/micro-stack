/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly CF_PAGES_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type D1Database = import('@cloudflare/workers-types').D1Database;

interface Bindings {
	CF_PAGES_URL: string;
	DATABASE: D1Database;
}

type Runtime = import('@astrojs/cloudflare').AdvancedRuntime<Bindings>;

declare namespace App {
	interface Locals extends Runtime {}
}
