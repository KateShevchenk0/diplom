import { locale } from '$lib/translations/i18n';
import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') ?? '');

	if (cookies.language) {
		locale.set(cookies.language);

		// Attach user setting into local env (this is optional)
		event.locals.language = cookies.language;
	}

	return await resolve(event);
};
