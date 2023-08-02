<script lang="ts">
	import { onMount } from 'svelte';
	let loadingDots = '';
	onMount(() => {
		setInterval(() => {
			if (loadingDots.length < 4) {
				loadingDots += '.';
			} else {
				loadingDots = '';
			}
		}, 500);
		setTimeout(() => {
			// let path = $page.url.pathname;
			window.location.href = '/';
		}, 3000);
	});
</script>

<main class="flex flex-row">
	<div class="flex flex-col grow self-center pt-40">
		<h1 class="text-9xl font-bold self-center">404</h1>
		<h2 class="text-5xl self-center">Not found</h2>
		<p class="self-center p-3">You will be redirected shortly{loadingDots}</p>
	</div>
</main>
