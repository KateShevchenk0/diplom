export interface ArticleSection {
	paragraphs: string[];
	image: string;
}

export interface Article {
	id: string;
	locales: ArticleTranslation[];
}

export interface ArticleTranslation {
	id: string;
	locale: string;
	name: string;
	cover: string;
	longName: string;
	sections: ArticleSection[];
}

export function withLang(lang: string, ...articles: Article[]): ArticleTranslation[] {
	return articles.map((e) => getLocale(e, lang));
}

export function getLocale(article: Article, locale: string) {
	return (
		article.locales.find((e) => e.locale === locale) ??
		(() => {
			throw new Error(
				`Locale ${locale} is not found for article ${
					article.id
				}. Available locales: ${article.locales.map((e) => e.locale).join(', ')}`,
			);
		})()
	);
}

export function firstParagraph(article: ArticleTranslation): string {
	return article.sections[0].paragraphs[0];
}
