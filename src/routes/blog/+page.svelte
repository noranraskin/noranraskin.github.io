<script>
	import Postpreview from '$lib/components/postpreview.svelte';

	export let data;
</script>

<main class="max-w-3xl flex m-auto">
	<!-- <div class="self-end m-auto">This will display blog posts.</div> -->
	<section class="flex flex-col text-left">
		<ul class="flex flex-col">
			{#each data.posts as post}
				<li class="flex py-4">
					<div class="rounded-xl p-4 w-full hover:bg-slate-100">
						<Postpreview {post} />
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>
