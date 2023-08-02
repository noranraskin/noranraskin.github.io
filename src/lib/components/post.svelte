<script lang="ts">
	import type { BlogPostTyped } from '$lib/types';
	export let post: BlogPostTyped;
</script>

<main class="flex flex-col">
	<p class="text-sm text-gray-600 py-4 self-center">{post.date.toLocaleDateString()}</p>
	<h2 class="font-bold text-3xl pb-6 self-center">{post.title}</h2>
	<svelte:component this={post.default} />
</main>
