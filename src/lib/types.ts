export type Categories = 'embedded' | 'web' | 'filesystem' | 'macos'

export interface BlogPost {
    title: string;
    slug: string;
    date: Date;
    categories: Categories[];
    published: boolean;
    default: ConstructorOfATypedSvelteComponent;
}