/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly AUTH_GITHUB_CLIENT_ID: string;
	readonly AUTH_GITHUB_CLIENT_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace App {
	interface Locals {}
}
