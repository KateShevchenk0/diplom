<script lang="ts">
	import main from '$lib/images/main/main.jpg';
	import mother from '$lib/images/main/mother.svg';
	import ukraine from '$lib/images/main/ukraine.svg';
	import business from '$lib/images/main/business.svg';
	import Searchbar from './searchbar.svelte';
	import { locale, t } from '$lib/translations/i18n';
	import type { PageServerData } from './$types';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import { firstParagraph, withLang } from '$lib/articles/articles.js';
	import type { ArticleTranslation } from '$lib/articles/articles.js';

	const mainBg = `url("${main}")`;
	export let data: PageServerData;
	$: benefits = [
		{
			src: mother,
			header: 'main.benefits-welcome',
			body: 'main.benefits-welcome-body',
		},
		{
			src: ukraine,
			header: 'main.benefits-guide',
			body: 'main.benefits-guide-body',
		},
		{
			src: business,
			header: 'main.benefits-business',
			body: 'main.benefits-business-body',
		},
	] as { src: string; header: string; body: string }[];

	let places: ArticleTranslation[];
	$: places = withLang($locale, ...data.inspired);

	let featuredInspiredPlaces: ArticleTranslation[];
	$: featuredInspiredPlaces = withLang($locale, ...data.featuredInspires);

	let visits: ArticleTranslation[];
	$: visits = withLang($locale, ...data.visit);
</script>

<svelte:head>
	<title>Етносфера</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar logo_light text_light />

<div class="flex flex-col items-center">
	<section
		class="main flex min-h-[100vh] w-full flex-col items-center px-[15px] pb-[223px] pt-[143px] text-white"
		style="background-image: {mainBg}"
	>
		<div class="h-screen">
			<div class="fancy-font mb-[22px] max-w-[619px] text-[2.5em]">{$t('main.header')}</div>
			<div class="fancy-font mb-[59px] max-w-[608px] bg-transparent text-[1em] leading-[28px]">
				{$t('main.header-body')}
			</div>
			<Searchbar />
		</div>
	</section>
	<section
		class="fancy-font fancy-shadow mb-32 mt-[-10em] max-w-[1262px] bg-white text-black lg:px-20"
	>
		<div class="pb-24 pt-20 text-4xl">{$t('main.benefits')}</div>
		<div
			class="grid grid-flow-col grid-cols-3 grid-rows-[min-content_min-content_min-content] gap-x-16"
		>
			{#each benefits as benefit}
				<img src={benefit.src} alt="icon" />
				<div class="pb-5 text-[18px]">{$t(benefit.header)}</div>
				<div class="pb-6 text-[16px] text-[#102746]">{$t(benefit.body)}</div>
			{/each}
		</div>
	</section>
	<section class="fancy-font mb-32 w-full max-w-[1262px] px-5">
		<div class="mb-8 flex w-full flex-row items-center justify-between">
			<div class="text-5xl">{$t('main.get-inspired')}</div>
			<a href="#" class="invisible mb-5 text-[#006dfe]">{$t('main.view-all')}</a>
		</div>

		<div class="grid grid-cols-6 gap-3">
			{#each places as place, i}
				<a
					href="/articles/{place.id}"
					class="group relative h-[370px] overflow-hidden"
					class:col-span-3={i < 2}
					class:col-span-2={i >= 2}
				>
					<img
						src="/{place.cover}"
						alt={place.name}
						class="h-full w-full object-cover duration-100 ease-in group-hover:scale-105"
					/>
					<div class="absolute top-0 flex h-full w-full flex-col place-content-end">
						<div class="bg-black bg-opacity-60 p-6 align-bottom text-5xl text-white">
							{place.name}
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-28 flex flex-col gap-24">
			{#each featuredInspiredPlaces as place, i}
				<a href="/articles/{place.id}" class="group flex flex-row">
					<div class="flex-1 overflow-hidden" class:order-last={i % 2 === 1}>
						<img
							src="/{place.cover}"
							alt={place.name}
							class="h-full max-h-[370px] w-full object-cover duration-100 ease-in group-hover:scale-105"
						/>
					</div>
					<div class="flex flex-1 flex-col justify-center px-10">
						<div class="text-[30px]">
							{place.longName}
						</div>
						<div class="text-[#102746]">
							{firstParagraph(place)}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
	<section class="fancy-font mb-16 w-full max-w-[1262px] px-5">
		<div class="mb-8 flex w-full flex-row items-center justify-between">
			<div class="text-5xl">{$t('main.places-to-visit')}</div>
		</div>
		<div class="grid grid-cols-3 gap-16">
			{#each visits as place}
				<div class="flex flex-col items-start justify-between">
					<div>
						<img src="/{place.cover}" alt={place.name} class="h-full max-h-[370px] w-full" />
						<div class="mt-10">
							{firstParagraph(place)}
						</div>
					</div>
					<a href="/articles/{place.id}" class="mt-5 bg-[#1b7dff] px-4 py-3 text-white"
						>{$t('main.see-more')}</a
					>
				</div>
			{/each}
		</div>
	</section>
	<section class="fancy-font px-5">
		<iframe
			width="1440"
			height="720"
			src="https://www.youtube.com/embed/kC2hyiMR1Qg"
			title="Привіт, світе. Я — Україна!"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</section>
</div>

<Footer />

<style lang="postcss">
	.main {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0 0;
	}

	.fancy-shadow {
		box-shadow: 0 2px 20px rgba(21, 24, 36, 0.15993);
	}
</style>
