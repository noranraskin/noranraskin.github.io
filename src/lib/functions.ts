import type { BlogPostTyped } from '$lib/types';

export function getPosts() {
	let posts: BlogPostTyped[] = [];

	const paths = import.meta.glob('/src/routes/blog/[slug]/*.svelte', { eager: true });
	for (const path in paths) {
		const file = paths[path] as BlogPostTyped;
		if (file && typeof file === 'object' && 'published' in file) {
			posts.push(file);
		}
	}
	posts.sort((a, b) => (a.date > b.date ? -1 : 1));
	return posts;
}

export function toggleTheme(theme: string) {
    console.log(theme)
	if (theme === 'light') {
		localStorage.theme = 'light';
	} else if (theme === 'dark') {
		localStorage.theme = 'dark';
	} else {
		localStorage.removeItem('theme');
	}

	applyTheme();
}

export function applyTheme() {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}
