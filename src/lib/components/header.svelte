<script>
	import Favicon from '$lib/svg/icons/favicon.svelte';
	import Modetoggle from './modetoggle.svelte';
</script>

<header class="flex py-1 bg-white dark:bg-zinc-800 fixed top-0 w-full select-none">
	<nav class="flex flex-row items-center m-auto">
		<a class="flex-shrink-0 p-1" href="/" style="text-decoration:none;">
			<Favicon />
		</a>
		<div class="justify-between">
			<a class="p-1" href="/" title="Home"> Home </a>
			<a class="p-1" href="/blog" title="Blog"> Blog </a>
			<a class="p-1" href="/contact" title="Contact"> Contact </a>
			<a
				class="p-1"
				href="https://youtube.com/@noranraskin"
				target="_blank"
				rel="noreferrer"
				title="Youtube"
			>
				Youtube
			</a>
		</div>
	</nav>
	<div class="flex self-center top-0 fixed right-0 py-2 px-3">
		<Modetoggle />
	</div>
</header>
<main class="pt-12" />
