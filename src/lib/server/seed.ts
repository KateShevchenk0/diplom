import type { Category, LangEntry, ShopItem } from '$lib/entities';
import { seedCategories, seedItems, type CategorySource } from '$lib/server/seed/item';
import type { Repository } from 'typeorm';

export async function seed(
	shopItem: Repository<ShopItem>,
	category: Repository<Category>,
	lang: Repository<LangEntry>,
) {
	if ((await shopItem.count()) > 0) {
		console.log('Skipping seeding');
		return;
	}

	const langEntries: LangEntry[] = [];

	console.log('seeding DB');
	const categories = seedCategories.map((seed: CategorySource, i) => {
		const c = category.create({
			name: `shop.category_${i}_name`,
			description: `shop.category_${i}_desc`,
			items: [],
		});
		for (const [locale, value] of Object.entries(seed.locales)) {
			langEntries.push({
				id: c.name,
				locale: locale,
				value: value.name,
			});
			langEntries.push({
				id: c.description,
				locale: locale,
				value: value.description,
			});
		}
		return c;
	});

	for (let i = 0; i < seedItems.length; i++) {
		const seedItem = seedItems[i];
		const item = shopItem.create();
		item.name = `shop.item_${i}_name`;
		item.description = `shop.item_${i}_desc`;
		for (const [locale, value] of Object.entries(seedItem.locales)) {
			langEntries.push({
				id: item.name,
				locale: locale,
				value: value.name,
			});
			langEntries.push({
				id: item.description,
				locale: locale,
				value: value.description,
			});
		}
		item.price = seedItem.price;
		item.image = seedItem.image;
		item.stock = seedItem.stock;
		categories[seedItem.category].items.push(item);
	}

	await lang.save(langEntries);
	await category.save(categories);
	console.log('seeding done');
}
