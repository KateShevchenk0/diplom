<script lang="ts">
	import { locale, t } from '$lib/translations/i18n';
	import { withLang, type ArticleTranslation } from '$lib/articles/articles';
	import type { PageData } from './$types';
	import Navbar from '../../../components/navbar.svelte';
	import Footer from '../../../components/footer.svelte';

	export let data: PageData;

	let article: ArticleTranslation;
	$: article = withLang($locale, data.article)[0];

	let others: ArticleTranslation[];
	$: others = withLang($locale, ...data.category);
</script>

<Navbar logo_light={true} text_light={false} />

<div class="etno-font bg-[#D1BF91] px-20 pb-8 pt-32">
	<div>
		{#each article.sections as section, i}
			<img
				src="/{section.image}"
				alt={article.name}
				class="m-16 max-w-xs"
				class:float-left={i % 2 === 0}
				class:float-right={i % 2 === 1}
			/>
			{#if i === 0}
				<h1 class="py-8 text-3xl">
					{article.longName}
				</h1>
			{/if}
			{#each section.paragraphs as text}
				<p class="py-5 text-xl" class:clear-left={i % 2 === 1} class:clear-right={i % 2 === 0}>
					{text}
				</p>
			{/each}
		{/each}
	</div>
	<div class="grid w-full gap-16 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each others as page}
			<a class="group flex flex-col items-center" href="/articles/{page.id}">
				<div class="aspect-[305/422] w-full">
					<div class="overflow-hidden">
						<img
							src="/{page.cover}"
							alt={page.name}
							class="h-full w-full object-cover duration-100 ease-in group-hover:scale-105"
						/>
					</div>
				</div>
				<div class="h-full w-full bg-black p-2 pt-4 text-center text-lg text-white">
					{page.name}
				</div>
			</a>
		{/each}
	</div>
</div>
