<script lang="ts">
	import { withLang } from '$lib/articles/articles';
	import type { ArticleTranslation } from '$lib/articles/articles';
	import { locale } from '$lib/translations/i18n';
	import type { PageData } from './$types';
	import Navbar from '../../components/navbar.svelte';

	export let data: PageData;
	let articles: ArticleTranslation[];
	$: articles = withLang($locale, ...data.articles);
</script>

<Navbar logo_light={true} text_light={false} />

<div class="etno-font bg-[#D1BF91] px-20 pb-8 pt-32">
	<div class="flex flex-col">
		{#each articles as article, i}
			<div
				class="group mb-8 bg-amber-100 bg-opacity-20 p-5 pt-8 shadow-lg transition-transform duration-500 hover:scale-105"
			>
				<a href="/articles/{article.id}">
					<img
						src="/{article.cover}"
						alt={article.name}
						class="m-4 mx-8 max-w-xs"
						class:float-left={i % 2 === 0}
						class:float-right={i % 2 === 1}
					/>
				</a>
				<a
					class="inline-block border-black text-3xl group-hover:border-b"
					href="/articles/{article.id}"
				>
					{article.name}
				</a>
				{#each article.sections[0].paragraphs as text}
					<p class="py-5 text-xl" class:clear-left={i % 2 === 1} class:clear-right={i % 2 === 0}>
						{text}
					</p>
				{/each}
			</div>
		{/each}
	</div>
</div>
