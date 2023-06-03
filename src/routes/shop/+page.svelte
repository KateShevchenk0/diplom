<script lang="ts">
	import Navbar from '../../components/navbar.svelte';
	import header from '$lib/images/shop/header.jpeg';
	import type { PageData } from './$types';
	import { locale, t } from '$lib/translations/i18n';
	import Footer from '../../components/footer.svelte';

	const bgImageUrl = `url(${header})`;
	export let data: PageData;

	let texts: Record<string, string>;
	$: texts = (() => {
		let curLocale = $locale;
		const strings = data.locale.filter((e) => e.locale === curLocale);
		const out: Record<string, string> = {};
		for (const str of strings) {
			out[str.id] = str.value;
		}
		return out;
	})();

	$: tt = (key: string) => texts[key];
</script>

<Navbar logo_light={false} text_light={false} />
<section
	class="flex h-screen w-full flex-col items-center justify-center bg-cover"
	style:background-image={bgImageUrl}
>
	<div class="fancy-font text-9xl text-white">{$t('shop.header')}</div>
</section>

<section class="mx-auto w-full max-w-[1262px]">
	<div class="fancy-font py-10 text-2xl">{$t('shop.featured')}</div>
	<div class="flex flex-row justify-around gap-x-8">
		{#each data.featured as item, i}
			<div
				class="aspect-square w-full p-3"
				class:bg-[#D1BF91]={i % 2 === 0}
				class:bg-black={i % 2 === 1}
			>
				<img class="h-full w-full object-cover" src={item.image} alt={tt(item.name)} />
			</div>
		{/each}
	</div>
</section>

{#each data.categories as category}
	<section class="mx-auto w-full max-w-[1262px]">
		<div class="my-8 w-full bg-orange-50 bg-opacity-50 p-5 shadow-sm">
			<div class="fancy-font pb-3 text-xl">{tt(category.name)}</div>
			<div class="fancy-font mb-3 text-lg">
				{tt(category.description)}
			</div>
			<div class="grid grid-cols-3 items-start gap-16">
				{#each category.items as item}
					<div class="bg-gray-100 p-3">
						<div class="aspect-[4/3]">
							<img class="h-full w-full object-cover" src={item.image} alt={tt(item.name)} />
						</div>
						<div class="my-2 text-xl">{tt(item.name)}</div>
						<div class="my-1">{tt(item.description)}</div>
						<button
							class="mt-2 w-full rounded-sm border bg-white p-1 text-center transition-transform hover:scale-105"
							>{$t('shop.cart_add')}: {item.price} UAH</button
						>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/each}

<Footer />
