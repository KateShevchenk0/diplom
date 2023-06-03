export interface ItemSource<Id extends number> {
	image: string;
	locales: Record<string, { name: string; description: string }>;
	price: number;
	stock: number;
	category: Id;
}

export interface CategorySource {
	id: number;
	locales: Record<string, { name: string; description: string }>;
}

export const seedCategories = [
	{
		id: 0,
		locales: {
			uk: {
				name: 'Приємні дрібнички',
				description:
					'Симпатичні сувеніри та дрібнички, що додають особливого шарму вашій подорожі.',
			},
			en: {
				name: 'Pleasant Trinkets',
				description: 'Lovely souvenirs and trinkets adding a special charm to your travel.',
			},
		},
	},
	{
		id: 1,
		locales: {
			uk: {
				name: 'Посуд',
				description: 'Чудовий вибір посуду з українськими мотивами для кухні чи вечірок.',
			},
			en: {
				name: 'Dishware',
				description:
					'A wonderful selection of dishware with Ukrainian motifs for the kitchen or parties.',
			},
		},
	},
	{
		id: 2,
		locales: {
			uk: {
				name: 'Одяг',
				description:
					'Стильний одяг з національними мотивами, що відображає культуру та традиції України.',
			},
			en: {
				name: 'Clothing',
				description:
					'Stylish clothing with national motifs that reflect the culture and traditions of Ukraine.',
			},
		},
	},
	{
		id: 3,
		locales: {
			uk: {
				name: 'Техніка',
				description:
					'Високоякісна техніка з українськими символами та дизайном для вашого комфорту та розваги.',
			},
			en: {
				name: 'Electronics',
				description:
					'High-quality electronics with Ukrainian symbols and designs for your comfort and entertainment.',
			},
		},
	},
] as const satisfies readonly CategorySource[];

type Categories = typeof seedCategories;
type Ids = Categories[number]['id'];

export const seedItems: ItemSource<Ids>[] = [
	{
		image: 'https://termincin.com/content/images/26/1500x1051l100mc0/58866925732004.webp',
		price: 80.0,
		category: 0,
		stock: 26,
		locales: {
			en: {
				name: 'Badge "Dream"',
				description:
					'Printed on a 3D printer from environmentally friendly PLA plastic! Please do not stay in the sun for a long time during the summer heat',
			},
			uk: {
				name: 'Значок "Мрія"',
				description:
					'Надрукований на 3D принтері із екологічного пластику PLA! Прохання не тримати довго на сонці під час літньої спеки',
			},
		},
	},
	{
		image:
			'https://orner.com.ua/storage/editor/fotos/tarelka-i-chashka-dobryj-vecher-my-iz-ukrainy_1669711518750.jpg',
		price: 450.0,
		category: 1,
		stock: 20,
		locales: {
			en: {
				name: 'Plate and cup "Good evening, we are from Ukraine"',
				description:
					'In these difficult days for everyone, maintain your fighting spirit, courage and indomitability. It has been proven that any drink or dish from such dishes adds a charge of cheerfulness and courage.',
			},
			uk: {
				name: 'Тарілка та чашка «Доброго вечора, ми з України»',
				description:
					'У ці нелегкі для всіх дні підтримуй свій бойовий дух, відвагу та незламність. Доведено, що будь-який напій або страва з такого посуду додає заряду бадьорості та сміливості.',
			},
		},
	},
	{
		image: 'https://content1.rozetka.com.ua/goods/images/big/263398600.jpg',
		price: 140.0,
		category: 0,
		stock: 48,
		locales: {
			en: {
				name: 'A set of stickers for a notebook or notebook Ukraine',
				description:
					'With the help of stickers, you can unusually decorate your favorite notebook, school notebooks and diaries, book covers. Interesting and bright stickers for a laptop, phone - an accessory that will decorate your gadget and skillfully hide any scratches!',
			},
			uk: {
				name: 'Набір наліпок для зошита або блокнота Україна',
				description:
					'За допомогою наклейок можна незвично прикрасити улюблений блокнот, шкільні зошити і щоденник, обкладинки для книжок. Цікаві і яскраві стікери на ноутбук, телефон - аксесуар, який прикрасить ваш гаджет і вміло приховає будь-які подряпини!',
			},
		},
	},
	{
		image:
			'https://superpupers.com/image/cachewebp/catalog/katalog/gifty/kalendar/2023/c49c06c8249888717e3cae02587747f0_900_700-650x650.webp',
		price: 450.0,
		category: 0,
		stock: 19,
		locales: {
			en: {
				name: 'Desktop calendar "With Ukraine in the heart - 2023"',
				description:
					'365 facts about courage, culture, freedom, independence of Ukraine and its people. A desktop, flip-up calendar will become a source of interesting, well-known events in the history of our country. Decorate your home or workplace with them so that the calendar shares every day of 2023 with you. A creative gift for the New Year holidays for all those in love with Ukraine.',
			},
			uk: {
				name: 'Настільний календар «З Україною в серці — 2023»',
				description:
					'365 фактів про сміливість, культуру, свободу, незалежність України та її людей. Настільний, перекидний календар стане джерелом цікавих, відомих подій в історії нашої країни. Прикрашай їм свій будинок або робоче місце, щоб календар розділив з тобою кожен день 2023 року. Креативний подарунок на новорічні свята для всіх, закоханих в Україну.',
			},
		},
	},
	{
		image: 'https://images.prom.ua/3774170036_zagotivlya-dlya-zhinochoyi.jpg',
		price: 1500,
		category: 2,
		stock: 10,
		locales: {
			en: {
				name: 'Womens shirt with embroidery',
				description:
					'Womens embroidery "Ornament". Sizes from XS to XXXL. Fabric: calico (100% cotton). Machine embroidery, smooth.',
			},
			uk: {
				name: 'Жіноча сорочка з вишивкою ',
				description:
					'Жіноча вишиванка "Орнамент". Розміри від XS до XXXL. Тканина: бязь (100% бавовна). Машинна вишивка, гладь.',
			},
		},
	},
	{
		image: 'https://images.prom.ua/4280539894_tarelka-suvenirnaya-petrikovskaya.jpg',
		price: 600,
		category: 1,
		stock: 13,
		locales: {
			en: {
				name: 'Petrikovsky painting plate',
				description:
					'Since ancient times, Ukrainians have decorated their homes, clothes, handicrafts and everyday objects with bright patterns. It was believed that they attract luck, protect against misfortune, natural disasters and evil forces, improve health. Each detail of such images carried a hidden, symbolic meaning. For example, grapes were a wish for fertility, oak personified male energy, bravery and courage, poppy personified family memory and family strength, periwinkle - youth, development, growth.',
			},
			uk: {
				name: 'Тарілка Петриківський розпис',
				description:
					'З давніх-давен українці прикрашали яскравими візерунками своє житло, одяг, предмети ремесел і побуту. Читають, що вони притягують удачу, захищають від нещасть, стихійних лих і злих сил, зміцнюють здоровя. Кожна деталь таких зображень несла в собі прихований, символічний зміст. Наприклад, виноград був побажанням родючості, дуб уособлював чоловічу енергію, хоробрість і відвагу, мак уособлював родинну память і міцність роду, барвінок – молодість, розвиток, ріст.',
			},
		},
	},
	{
		image: 'https://images.prom.ua/3957776679_w640_h640_3957776679.jpg',
		price: 100,
		category: 0,
		stock: 58,
		locales: {
			en: {
				name: 'Ecoshopper Ukraine',
				description:
					'Eco shopper made of 100% cotton (double thread density 210 g/sq.m). A great alternative to plastic bags. A stylish fabric bag with long handles. Fashionable and practical accessory for every day. Compact, safe for people and the environment, pleasant to the touch and affordable. Dense material, high-quality sewing, roomy size allows you to comfortably carry bulky purchases of various kinds.',
			},
			uk: {
				name: 'Екошопер Україна',
				description:
					'Екошопер зі 100% бавовни (двунитка щільністю 210 г / кв.м). Чудова альтернатива поліетиленовим пакетам.Стильна тканинна сумка з довгими ручками. Модний та практичний аксесуар на щодень. Компактна, безпечна для людини та довкілля, приємна на дотик та має доступну вартість.Щільний матеріал, якісне пошиття, місткий розмір дозволяють зручно переносити обємні покупки різного роду.',
			},
		},
	},
	{
		image: 'https://content1.rozetka.com.ua/goods/images/big/280165220.jpg',
		price: 100,
		category: 0,
		stock: 36,
		locales: {
			en: {
				name: 'Bookmark embroidery kit',
				description:
					'Size of the finished bookmark: 7x21 cm. Number of mouliné flowers: 6. General characteristics: full cross in two threads, "back needle" seam. Canvas color: white. The set includes: color scheme, Aida canvas No. 16, Peri muslin, needle, scheme and detailed instructions for work.',
			},
			uk: {
				name: 'Набір для вишивання закладки',
				description:
					'Розмір готової закладки: 7х21 см. Кількість квітів муліне: 6. Загальна характеристика: повний хрест у дві нитки, шов "назад голка". Колір канви: білий. У набір входить: кольорова схема, канва Аїда № 16, муліне Peri, голка, схема та детальна інструкція з виконання робіт.',
			},
		},
	},
	{
		image: 'https://image-thumbs.shafastatic.net/838437673_310_430',
		price: 1000,
		category: 2,
		stock: 7,
		locales: {
			en: {
				name: 'Jacket with painting in Ukrainian style',
				description:
					'Womens classic beige jacket. The lapel of the jacket contains hand-painted in the Ukrainian style.',
			},
			uk: {
				name: 'Піджак з розписом в українському стилі',
				description:
					'Жіночий класичний піджак бежевого кольору. Лацкан піджака містить ручний розпис в українському стилі.',
			},
		},
	},
	{
		image: 'https://images.prom.ua/4231510012_nichnik-ukrayina.jpg',
		price: 600.0,
		category: 3,
		stock: 36,
		locales: {
			en: {
				name: 'Night lamp "Ukraine"',
				description:
					'How to add romance to the atmosphere of your own apartment? Very easy! For this, you will need a night lamp that will fill the room with warm and pleasant light',
			},
			uk: {
				name: 'Нічник "Україна"',
				description:
					'Як додати романтики в атмосферу власної квартири? Дуже просто! Для цього вам знадобиться нічник, який наповнить кімнату теплим та приємним світлом',
			},
		},
	},
];
