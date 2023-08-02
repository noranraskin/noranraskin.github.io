<script>
	import Postpreview from '$lib/components/postpreview.svelte';

	export let data;
	let showMaintainanceMessage = false;
	if (data.posts.length == 0) {
		showMaintainanceMessage = true;
	}
</script>

<main class="max-w-3xl flex m-auto">
	{#if showMaintainanceMessage}
		<div class="h-60" />
		<div class="self-end m-auto">This will display blog posts.</div>
	{/if}
	<!-- <div class="self-end m-auto">This will display blog posts.</div> -->
	<section class="flex flex-col text-left">
		<ul class="flex flex-col">
			{#each data.posts as post}
				<li class="flex py-4">
					<div class="rounded-xl p-4 w-full hover:bg-slate-100 dark:hover:bg-zinc-700">
						<Postpreview {post} />
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>
