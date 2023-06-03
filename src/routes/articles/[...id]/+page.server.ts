/* eslint-disable @typescript-eslint/no-throw-literal */
import { getAdjacentArticles, getArticle } from '$lib/articles/articles.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (evt) => {
	const articleId = evt.params.id;
	const article = await getArticle(articleId);
	if (!article) throw error(404);
	const sameCategory = (await getAdjacentArticles(article)).filter((e) => e.id !== article.id);
	return { article, category: sameCategory };
};
