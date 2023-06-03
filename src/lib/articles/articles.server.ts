import p from 'path';
import { readdir, readFile, stat } from 'fs/promises';
import type { Article, ArticleSection, ArticleTranslation } from '$lib/articles/articles';

function loadLocale(
	imagesRef: readonly string[],
	text: string,
	locale: string,
	path: string,
): ArticleTranslation {
	const images = [...imagesRef];
	const cover = images.at(-1);
	if (!cover) throw new Error(`No images were found in ${path}`);
	const coverFile = cover;
	const lines = text
		.split(/[\r\n]+/)
		.map((e) => e.trim())
		.filter((e) => e.length > 0);
	let name: string | undefined = undefined;
	let longName: string | undefined = undefined;
	let curSection: string[] = [];
	const sections: ArticleSection[] = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (i === 0 && line.startsWith('#')) name = line.replace(/#\s*/, '');
		else if (i === 1 && line.startsWith('#')) longName = line.replace(/#\s*/, '');
		else {
			if (line.match(/^-{3,}$/)) {
				const image = images.pop();
				if (!image) {
					throw new Error(`Not enough images for all paragraphs in ${path}`);
				}
				if (curSection.length > 0) {
					sections.push({
						paragraphs: curSection,
						image: image,
					});
					curSection = [];
				}
			} else {
				curSection.push(line);
			}
		}
	}

	if (curSection.length > 0) {
		sections.push({
			paragraphs: curSection,
			image:
				images.pop() ??
				(() => {
					throw new Error(`Not enough images for all paragraphs in ${path}`);
				})(),
		});
	}

	if (!name) throw new Error(`Could not determine article name in folder ${path}`);
	longName ??= name;

	return {
		id: '',
		locale,
		name,
		longName,
		cover: coverFile,
		sections,
	};
}

async function loadArticle(path: string, base: string): Promise<Article> {
	const allFiles = await readdir(path);
	const images: [string, number][] = [];
	const texts: Record<string, string> = {};

	for (const filePath of allFiles) {
		const file = p.join(path, filePath);
		const match = p.basename(file).match(/article\.(\w+)\.txt/);
		if (match) {
			let locale = match[1];
			if (locale === 'ua') locale = 'uk';
			texts[locale] = (await readFile(file)).toString();
		} else {
			const match = p.basename(file).match(/image(\d*)\..+/);
			if (match != null) {
				images.push([file, Number(match[1] || '0')]);
			}
		}
	}

	images.sort((a, b) => b[1] - a[1]);
	const id = p.relative(base, path).replace(/[\\/]/g, '/');
	const imagesRef = images.map((e) => p.relative(base, e[0]));

	return {
		id,
		locales: Object.entries(texts).map(([k, v]) => {
			return loadLocale(imagesRef, v, k, path);
		}),
	};
}

async function anyExists(paths: string[]) {
	const results = await Promise.allSettled(
		paths.map(async (e) => {
			return (await stat(e)).isFile();
		}),
	);
	return results.find((e) => e.status === 'fulfilled' && e.value) !== undefined;
}

async function walkDir(path: string, base: string, articles: Article[]): Promise<void> {
	const files = await readdir(path, { withFileTypes: true });
	for (const file of files) {
		if (!file.isDirectory()) continue;
		if (
			await anyExists([
				p.join(path, file.name, 'article.en.txt'),
				p.join(path, file.name, 'article.ua.txt'),
			])
		) {
			const article = await loadArticle(p.join(path, file.name), base);
			articles.push(article);
		}
		await walkDir(p.join(path, file.name), base, articles);
	}
}

async function loadAllArticles(): Promise<Map<string, Article>> {
	const articles: Article[] = [];
	await walkDir('./src/lib/articles', '.', articles);
	const articlesMap = new Map<string, Article>();
	for (const article of articles) {
		article.id = article.id.replace('src/lib/articles/', '');
		for (const locale of article.locales) {
			locale.id = article.id;
		}
		articlesMap.set(article.id, article);
	}
	return articlesMap;
}

const allArticles = loadAllArticles();

export async function getArticle(id: string): Promise<Article | undefined> {
	const all = await allArticles;
	return all.get(id);
}

export async function getArticlesInCategory(categoryId: string): Promise<Article[]> {
	const all = await allArticles;
	return [...all.entries()]
		.filter((e) => e[0].startsWith(categoryId) && e[0] !== categoryId)
		.map((e) => e[1]);
}

export async function getAllArticles(): Promise<Article[]> {
	const all = await allArticles;
	return [...all.values()];
}

export async function getArticles(ids: string[]): Promise<Article[]> {
	const all = await allArticles;
	return ids.map(
		(e) =>
			all.get(e) ??
			(() => {
				throw new Error(`Failed to fetch article with id ${e}`);
			})(),
	);
}

export async function getAdjacentArticles(article: Article) {
	const others = await getArticlesInCategory(article.id);
	if (others.length === 0) {
		const newId = article.id.split('/').slice(0, -1).join('/');
		return await getArticlesInCategory(newId);
	}
	return others;
}
