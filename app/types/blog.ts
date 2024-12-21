export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
  category: string;
  readTime: string;
  content?: string;
  author?: string;
  tags?: string[];
}

export type BlogCategory = 'History' | 'Legal System' | 'Community Stories' | 'Labor Rights';

export interface BlogMetadata {
  totalPosts: number;
  categories: BlogCategory[];
  tags: string[];
  latestPost: BlogPost;
}
