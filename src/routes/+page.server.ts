import { getArticles } from '$lib/articles/articles.server';

export async function load() {
	const inspiredPlaces = await getArticles([
		'places/lavra',
		'places/park',
		'places/sophia',
		'places/castle',
		'places/gate',
	]);
	const featuredInspiredPlaces = await getArticles(['places/theater', 'places/opera']);
	const visit = await getArticles([
		'places/lavra',
		'places/park',
		'places/sophia',
		'places/castle',
		'places/gate',
		'places/theater',
	]);

	return { inspired: inspiredPlaces, featuredInspires: featuredInspiredPlaces, visit };
}
