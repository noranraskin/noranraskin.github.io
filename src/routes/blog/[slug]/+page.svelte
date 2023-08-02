<script lang="ts">
	import { page } from '$app/stores';
	import type { BlogPost } from '$lib/types.js';
	import Post from '$lib/components/post.svelte';

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
		<Post post={currentPost} />
	{/if}
</main>
