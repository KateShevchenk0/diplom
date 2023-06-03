<script lang="ts">
	import sidebar from '$lib/images/contacts/sidebar.png';
	import mail from '$lib/images/contacts/mail.png';
	import location from '$lib/images/contacts/location.png';
	import { t } from '$lib/translations/i18n';
	import Navbar from '../../components/navbar.svelte';
	import Footer from '../../components/footer.svelte';
</script>

<Navbar logo_light={true} text_light={true} />

<div class="absolute z-10 h-32 w-full bg-stone-600 opacity-30" />
<div class="type-font flex h-screen bg-cyan-100">
	<div class="flex flex-1 flex-col items-center justify-around pt-32">
		<div>
			<div class="mb-4 text-center text-4xl uppercase">{$t('contacts.about')}</div>
			<div class="max-w-lg text-2xl">{$t('contacts.about_text')}</div>
		</div>
		<div>
			<div class="mb-4 text-center text-4xl uppercase">{$t('contacts.contacts')}</div>
			<div class="max-w-lg text-2xl">{$t('contacts.contacts_text')}</div>
		</div>
		<div class="grid grid-flow-col grid-rows-4 gap-x-16 gap-y-6">
			<div class="flex flex-1 flex-row items-center gap-2">
				<img src={mail} class="h-[1.5em]" alt="mail" />
				<div>ethnoSphere@gmail.com</div>
			</div>
			<div class="flex flex-1 flex-row items-center gap-2">
				<img src={location} class="h-[1.5em]" alt="mail" />
				<div>Kiev, Ukraine</div>
			</div>
			<div class="row-span-2" />
			<input type="text" placeholder={$t('contacts.input_name')} />
			<input type="text" placeholder={$t('contacts.input_email')} />
			<input type="text" placeholder={$t('contacts.input_message')} />
			<button class="mx-8 rounded-full border border-black px-3 py-0.5 uppercase"
				>{$t('contacts.send')}</button
			>
		</div>
	</div>
	<img class="flex-0 h-full object-cover" src={sidebar} alt="art" />
</div>

<style lang="postcss">
	input {
		@apply border-b border-gray-500 bg-transparent uppercase;
	}
</style>
