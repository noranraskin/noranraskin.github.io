import type { BlogPost } from '$lib/types';

export function getPosts() {
    let posts: BlogPost[] = [];

    const paths = import.meta.glob('/src/routes/blog/[slug]/*.svelte', {eager : true});
    for (const path in paths) {
        const file = paths[path] as BlogPost;
        if (file && typeof file === 'object' && 'published' in file) {
            posts.push(file);
        }
    }
    posts.sort((a, b) => (a.date > b.date ? -1 : 1));
    return posts;
}