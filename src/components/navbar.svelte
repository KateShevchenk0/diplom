<script lang="ts">
	import { locale, t } from '$lib/translations/i18n';
	import Logo from './logo.svelte';

	let y: number;
	export let logo_light: boolean;
	export let text_light: boolean;
	const navItems = [
		{ label: 'common.nav-main', href: '/' },
		{ label: 'common.nav-shop', href: '/shop' },
		{ label: 'common.nav-info', href: '/index' },
		{ label: 'common.nav-contact', href: '/contacts' },
	];

	function changeLang() {
		const lang = $locale === 'en' ? 'uk' : 'en';
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}
</script>

<nav
	class="z-[999] flex w-full justify-center px-5 py-3 transition duration-300 ease-in {y > 36
		? 'fixed bg-[#9C8C80]/50'
		: 'absolute pt-12'}"
>
	<div class="flex w-full max-w-[1060px] flex-row items-center justify-between">
		<Logo {logo_light} />
		<ul
			class="type-font flex flex-row gap-x-20 text-[20px] transition duration-200 ease-in"
			class:text-white={text_light}
		>
			{#each navItems as item}
				<li>
					<a class="hover:opacity-60" href={item.href}>{$t(item.label)}</a>
				</li>
			{/each}
			<li>
				<a
					class="shadow-btn rounded-lg bg-black/[0.03] px-7 py-2 outline outline-1 hover:opacity-60"
					href="/donate">{$t('common.nav-donate')}</a
				>
			</li>
			<li>
				<button class="-ml-10 hover:opacity-60" on:click={changeLang}>{$locale}</button>
			</li>
		</ul>
	</div>
</nav>

<svelte:window bind:scrollY={y} />

<style lang="postcss">
	.shadow-btn {
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}
</style>
