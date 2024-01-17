export function getSite(): string {
	if (import.meta.env.DEV) return 'http://localhost:4321';

	if (import.meta.env.CF_PAGES_URL) return import.meta.env.CF_PAGES_URL;

	// If one is provided in the environment, use it.
	if (import.meta.env.SITE) return import.meta.env.SITE;

	return 'https://example.app';
}
