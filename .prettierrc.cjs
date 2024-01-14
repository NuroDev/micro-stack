// @ts-check

/** @type {import("prettier").Config} */
const config = {
	arrowParens: 'always',
	bracketSpacing: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	plugins: [
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-tailwindcss'),
	],
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
};

module.exports = Object.assign({}, require('prettier-config-standard'), config);
