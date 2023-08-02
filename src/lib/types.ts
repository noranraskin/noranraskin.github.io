export type CategoriesType = 'embedded' | 'web' | 'filesystem' | 'macos'

export interface BlogPostTyped {
    title: string;
    slug: string;
    date: Date;
    categories: CategoriesType[];
    published: boolean;
    default: ConstructorOfATypedSvelteComponent;
}