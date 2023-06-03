<script lang="ts">
	import bg from '$lib/images/donate/bg.png';
	import slide1 from '$lib/images/donate/slide1.png';
	import slide2 from '$lib/images/donate/slide2.png';
	import slide3 from '$lib/images/donate/slide3.png';
	import { t } from '$lib/translations/i18n';
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	const bgUrl = `url(${bg})`;
</script>

<Navbar logo_light={true} text_light={true} />
<div
	class="grid h-screen w-full auto-rows-max grid-cols-2 gap-16 bg-cover px-8 pt-48 uppercase xl:px-32 2xl:px-64"
	style:background-image={bgUrl}
>
	<div class="section">
		<div class="etno-font text-center text-3xl">{$t('donate.payment_details')}</div>
		<div class="mt-12 text-lg">
			<div>{$t('donate.recipient')}: BO CHARITY FUND SAVE ART YUA</div>
			<div>IBAN: UA793052990000026003021010626</div>
			<div>{$t('donate.swift')}: PBANUA2X</div>
			<div>
				{$t('donate.bank')}: Bank JSC KB "PRIVATBANK", STR. HRUSHEVSKOHO, 1D, KYIV, 01001, UKRAINE
			</div>
		</div>
		<div class="etno-font mb-4 mt-6 text-2xl">{$t('donate.goals')}</div>
		<div class="ml-1 text-lg">{$t('donate.goals_text')}</div>
		<ul class="list-disc pl-8 text-lg">
			<li>{$t('donate.goals_text_p1')}</li>
			<li>{$t('donate.goals_text_p2')}</li>
			<li>{$t('donate.goals_text_p3')}</li>
		</ul>
	</div>
	<div class="section">
		<div class="px-8">
			<div class="etno-font mb-4 text-2xl">{$t('donate.collected')}</div>
			<div class="etno-font flex flex-row justify-between text-2xl">
				<div>1267$</div>
				<div>15000$</div>
			</div>
			<div class="mt-2 h-4 rounded-full bg-white">
				<div class="h-full rounded-full bg-[#77B96D]" style:width={(1267 / 12000) * 100 + '%'} />
			</div>

			<div class="my-8 text-xl">{$t('donate.destruction')}</div>
			<div class="my-8 text-sm">{$t('donate.destruction_text')}</div>
			<div class="grid grid-cols-3 gap-5">
				<img class="slide" src={slide1} alt="slide 1" />
				<img class="slide" src={slide2} alt="slide 2" />
				<img class="slide" src={slide3} alt="slide 3" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.section {
		@apply flex-1 rounded-2xl bg-neutral-800 bg-opacity-75 p-6 py-12 text-white;
	}
	.slide {
		@apply h-full w-full object-cover;
	}
</style>
