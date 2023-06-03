import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';

import lang from './lang.json';

const config = {
	translations: {
		en: { lang },
		uk: { lang },
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default,
		},
		{
			locale: 'uk',
			key: 'common',
			loader: async () => (await import('./ua/common.json')).default,
		},
		{
			locale: 'en',
			key: 'main',
			loader: async () => (await import('./en/main.json')).default,
		},
		{
			locale: 'uk',
			key: 'main',
			loader: async () => (await import('./ua/main.json')).default,
		},
		{
			locale: 'en',
			key: 'shop',
			loader: async () => (await import('./en/shop.json')).default,
		},
		{
			locale: 'uk',
			key: 'shop',
			loader: async () => (await import('./ua/shop.json')).default,
		},
		{
			locale: 'en',
			key: 'contacts',
			loader: async () => (await import('./en/contacts.json')).default,
		},
		{
			locale: 'uk',
			key: 'contacts',
			loader: async () => (await import('./ua/contacts.json')).default,
		},
		{
			locale: 'en',
			key: 'donate',
			loader: async () => (await import('./en/donate.json')).default,
		},
		{
			locale: 'uk',
			key: 'donate',
			loader: async () => (await import('./ua/donate.json')).default,
		},
	],
} satisfies Config;

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
