<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<main class="bg-white dark:bg-zinc-800 dark:text-white min-h-screen flex flex-col">
	<Header />
	<div>
		<slot />
	</div>
	<Footer />
</main>
