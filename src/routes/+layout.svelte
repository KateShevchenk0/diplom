<script lang="ts">
	import '@fontsource/kaisei-decol/500.css';
	import '../app.css';
</script>

<div class="app">
	<!--	<Header />-->

	<main>
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(body) {
		font-family: Arial, serif;
	}
</style>
