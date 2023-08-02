import type { BlogPostTyped } from '$lib/types';
import { getPosts } from '$lib/functions';

export function load({ params }) {
    const posts: BlogPostTyped[] = getPosts();
    return { posts, params };
}