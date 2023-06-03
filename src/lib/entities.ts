export interface Category {
	id: number;
	items: ShopItem[];
	name: string;
	description: string;
}

export interface ShopItem {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	stock: number;
	category: Category;
	categoryId: number;
}

export interface LangEntry {
	id: string;
	locale: string;
	value: string;
}
