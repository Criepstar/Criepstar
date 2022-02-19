import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'sl',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./sl/home.json')).default
		},
		{
			locale: 'sl',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./de/home.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
