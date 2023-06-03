import type { PageServerLoad } from './$types';
import { orm } from '$lib/server/typeorm';
import { In } from 'typeorm';

export const load: PageServerLoad = async () => {
	const db = await orm;
	const featured = await db.shopItem.find({
		where: {
			id: In([1, 3, 6, 9]),
		},
	});

	const categories = await db.category.find({
		relations: {
			items: true,
		},
	});

	const locale = await db.localization.find();

	return { featured, categories, locale };
};
