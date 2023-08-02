<script lang="ts">
	import type { BlogPostTyped } from '$lib/types';
	export let post: BlogPostTyped;
</script>

<main>
	<a href="blog/{post.slug}">
		<p class="text-sm text-gray-600">{post.date.toLocaleDateString()}</p>
		<h2 class="font-bold text-xl py-2 hover:underline underline-offset-4">
			{post.title}
		</h2>
		<div class="max-h-36 overflow-hidden">
			<svelte:component this={post.default} />
		</div>
		<div class="py-2 flex flex-row">
			{#each post.categories as category}
				<span class="text-xs p-2 bg-slate-200 rounded-xl mr-3 flex">{category}</span>
			{/each}
			<div class="flex grow" />
			<p class="flex self-center text-sm text-gray-600 hover:text-inherit">read more...</p>
		</div>
	</a>
</main>
