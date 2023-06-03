import { DataSource, type DataSourceOptions, EntitySchema } from 'typeorm';
import { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } from '$env/static/private';
import { seed } from '$lib/server/seed';
import { createDatabase } from 'typeorm-extension';
import type { Category, LangEntry, ShopItem } from '$lib/entities';

export const ShopItemEntity = new EntitySchema<ShopItem>({
	name: 'shop_item',
	columns: {
		id: {
			type: 'int',
			primary: true,
			generated: true,
		},
		name: {
			type: 'varchar',
			length: 127,
		},
		description: {
			type: 'varchar',
			length: 127,
		},
		image: {
			type: 'varchar',
			length: 255,
		},
		price: {
			type: 'float',
		},
		stock: {
			type: 'int',
		},
		categoryId: {
			type: 'int',
		},
	},
	relations: {
		category: {
			type: 'many-to-one',
			target: 'category',
			inverseSide: 'items',
			joinColumn: {
				name: 'categoryId',
			},
		},
	},
});
export const CategoryEntity = new EntitySchema<Category>({
	name: 'category',
	columns: {
		id: {
			type: 'int',
			primary: true,
			generated: true,
		},
		name: {
			type: 'varchar',
			length: 127,
		},
		description: {
			type: 'varchar',
			length: 127,
		},
	},
	relations: {
		items: {
			type: 'one-to-many',
			target: 'shop_item',
			inverseSide: 'category',
			cascade: true,
		},
	},
});

export const LangEntryEntity = new EntitySchema<LangEntry>({
	name: 'lang_entry',
	columns: {
		id: {
			type: 'varchar',
			length: '127',
			primary: true,
		},
		locale: {
			type: 'varchar',
			length: '20',
			primary: true,
		},
		value: {
			type: 'text',
		},
	},
	indices: [
		{
			name: 'lang_entry_pk_index',
			unique: true,
			columns: ['id', 'locale'],
		},
	],
	uniques: [
		{
			name: 'lang_entry_pk_uniq',
			columns: ['id', 'locale'],
		},
	],
});

const options: DataSourceOptions = {
	type: 'postgres',
	host: DB_HOST,
	port: Number(DB_PORT),
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	entities: [ShopItemEntity, CategoryEntity, LangEntryEntity],
	synchronize: true,
	logging: false,
};
const AppDataSource = new DataSource(options);

export const orm = Promise.resolve()
	.then(() => createDatabase({ options }))
	.then(() => AppDataSource.initialize())
	.then(async (source) => {
		const shopItem = source.getRepository(ShopItemEntity);
		const category = source.getRepository(CategoryEntity);
		const localization = source.getRepository(LangEntryEntity);
		await seed(shopItem, category, localization);
		return {
			db: source,
			shopItem,
			category,
			localization,
		};
	});
