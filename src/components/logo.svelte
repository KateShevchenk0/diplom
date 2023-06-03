<script lang="ts">
	export let logo_light: boolean;
</script>

<a
	href="/"
	class="etno-font flex flex-row items-center text-[30px] transition duration-200 ease-in"
	class:text-white={logo_light}
>
	Етн
	<img src="/globe.png" class="h-[1em]" alt="о" />
	сфера
</a>
