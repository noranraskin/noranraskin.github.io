import type { BlogPost } from '$lib/types';
import { getPosts } from '$lib/functions';


export function load({ params}) {
    const posts: BlogPost[] = getPosts();
    return { posts, params };
}