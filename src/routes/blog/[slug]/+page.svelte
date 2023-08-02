<script lang="ts">
	import { page } from '$app/stores';
	import type { BlogPost } from '$lib/types.js';

	export let data;
	let currentPost;
	for (let post of data.posts as BlogPost) {
		if (data.params.slug == post.slug) {
			currentPost = post;
		}
	}
</script>

<main class="max-w-xl m-auto">
	{#if currentPost}
		<h2 class="font-bold text-3xl">{currentPost.title}</h2>
		<svelte:component this={currentPost.default} />
	{/if}
</main>
