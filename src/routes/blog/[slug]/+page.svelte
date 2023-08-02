<script lang="ts">
	import Post from '$lib/components/post.svelte';

	export let data;
</script>

<main class="max-w-2xl m-auto">
	<Post post={data.currentPost} />
</main>
