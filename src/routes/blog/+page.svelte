<script>
	export let data;
</script>

<main class="max-w-3xl flex m-auto">
	<!-- <div class="self-end m-auto">This will display blog posts.</div> -->
	<section class="flex flex-col text-left">
		<ul class="flex flex-col">
			{#each data.posts as post}
				<li class="flex py-4">
					<div class="rounded-xl p-4 w-full hover:bg-slate-100">
						<a href="blog/{post.slug}">
							<p class="text-sm text-gray-600">{post.date.toLocaleDateString()}</p>
							<h2 class="font-bold text-xl py-2">{post.title}</h2>
							<div class="max-h-36 overflow-hidden">
								<svelte:component this={post.default} />
							</div>
							<div class="py-2 flex flex-row">
								{#each post.categories as category}
									<span class="text-xs p-2 bg-slate-200 rounded-xl mr-3 flex">{category}</span>
								{/each}
								<div class="flex grow" />
								<p class="flex self-center text-sm text-gray-600 hover:text-inherit">
									read more...
								</p>
							</div>
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>
