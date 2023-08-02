<script lang="ts">
	import Sun from '$lib/svg/icons/sun.svelte';
	import Moon from '$lib/svg/icons/moon.svelte';
	import { onMount } from 'svelte';
	import { applyTheme, toggleTheme } from '$lib/functions';
	import Computer from '$lib/svg/icons/computer.svelte';
	let showMenu = false;
	function closeMenu() {
		showMenu = false;
	}
	onMount(() => {
		applyTheme();
		document.addEventListener('click', (event) => {
			const target = event.target as HTMLElement;
			const buttons = document.querySelector('.mode-toggle');
			if (showMenu && target != buttons && !buttons?.contains(target)) {
				console.log('closeMenu');
				showMenu = false;
			}
		});
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', applyTheme);
	});
</script>

<main class="flex flex-col z-50 mode-toggle">
	<div class="flex flex-row">
		<div class="flex grow" />
		<button
			class="flex justify-self-end p-1"
			on:click={() => {
				showMenu = !showMenu;
			}}
		>
			<div class="dark:hidden">
				<Sun />
			</div>
			<div class="hidden dark:inline">
				<Moon />
			</div>
		</button>
	</div>
	{#if showMenu}
		<ul class="flex flex-col p-3 bg-white dark:bg-zinc-800 rounded-lg">
			<li class="flex">
				<button
					class="flex flex-row p-0.5"
					on:click={() => {
						toggleTheme('light');
						closeMenu();
					}}
				>
					<div class="pr-2">
						<Sun />
					</div>
					light
				</button>
			</li>
			<li class="flex">
				<button
					class="flex flex-row p-0.5"
					on:click={() => {
						toggleTheme('dark');
						closeMenu();
					}}
				>
					<div class="pr-2">
						<Moon />
					</div>
					dark
				</button>
			</li>
			<li class="flex">
				<button
					class="flex flex-row p-0.5"
					on:click={() => {
						toggleTheme('system');
						closeMenu();
					}}
				>
					<div class="pr-2">
						<Computer />
					</div>
					system
				</button>
			</li>
		</ul>
	{/if}
</main>
