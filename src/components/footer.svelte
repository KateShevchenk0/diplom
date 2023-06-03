<script lang="ts">
	import { t } from '$lib/translations/i18n';
	import Logo from './logo.svelte';

	const navItems = [
		{ label: 'common.footer-nav' },
		{ label: 'common.nav-main', href: '/' },
		{ label: 'common.nav-shop', href: '/shop' },
		{ label: 'common.nav-info', href: '/index' },
		{ label: 'common.nav-contact', href: '/contact' },
	];
</script>

<footer class="fancy-font bg-[#9c8c80] p-14">
	<div class="mx-auto grid w-full max-w-[1024px] grid-flow-col grid-cols-5 grid-rows-5">
		<div class="col-span-3 row-span-5">
			<Logo logo_light={false} />
		</div>
		{#each navItems as item}
			{#if item.href}
				<a class="text-white hover:opacity-60" href={item.href}>{$t(item.label)}</a>
			{:else}
				<div class="text-xl text-white">{$t(item.label)}</div>
			{/if}
		{/each}
	</div>
</footer>

<style lang="postcss">
</style>
