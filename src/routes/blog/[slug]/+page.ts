import { error } from '@sveltejs/kit';
import type { BlogPostTyped } from '$lib/types';
import { getPosts } from '$lib/functions';

export function load({ params }) {

    const posts: BlogPostTyped[] = getPosts();
    let currentPost;
	for (let post of posts) {
		if (params.slug == post.slug) {
			currentPost = post;
		}
	}
	if (!currentPost) {
		throw error(404, { message: 'Post not found' });
	}
    return { posts, currentPost, params };
}