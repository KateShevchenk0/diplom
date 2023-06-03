import { getArticles } from '$lib/articles/articles.server';
import type { Article } from '$lib/articles/articles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ articles: Article[] }> => {
	const articles = await getArticles([
		'art',
		'folklore',
		'kitchen',
		'people',
		'places',
		'traditions',
		'destroyed',
	]);
	return { articles };
};
