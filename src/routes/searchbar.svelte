<script lang="ts">
	import oval from '$lib/images/main/oval.svg';
	import { t } from '$lib/translations/i18n';

	const ovalImg = `url("${oval}")`;
</script>

<div>
	<input
		type="text"
		class="search-form_field placeholder:transition focus:placeholder:-translate-y-1 focus:placeholder:scale-90 focus:placeholder:opacity-50 sm:max-md:mb-5 sm:max-md:w-full lg:w-[340px]"
		style="background-image: {ovalImg}"
		placeholder={$t('main.user-like-to-do')}
	/>
	<input
		type="text"
		class="search-form_field placeholder:transition focus:placeholder:-translate-y-1 focus:placeholder:scale-90 focus:placeholder:opacity-50 sm:max-md:mb-5 sm:max-md:w-full lg:w-[340px]"
		style="background-image: {ovalImg}"
		placeholder={$t('main.user-like-to-go')}
	/>
	<button class="search-form_submit">{$t('main.search')}</button>
</div>

<style lang="postcss">
	.search-form_field {
		background-size: 20px 20px;
		background-repeat: no-repeat;
		background-position: left 7px;
		border: 0;
		border-bottom: 2px solid #fff;
		margin-right: 60px;
		padding-left: 43px;
		padding-bottom: 15px;
		font-weight: 500;
		font-size: 18px;
		color: #fff;
		background-color: transparent;
	}

	::placeholder {
		color: #fff;
	}

	.search-form_field:focus,
	.search-form_field:active {
		background-color: transparent;
		outline: none;
	}

	.search-form_submit {
		background: #1b7dff;
		color: #fff;
		padding: 15px 39px;
		border: none;
		cursor: pointer;
	}
</style>
