import Image from 'next/image';
import Link from 'next/link';
import BlogNav from './BlogNav';
import { BlogPost } from '@/app/types/blog';

interface ArticleLayoutProps {
  post: BlogPost;
  content: React.ReactNode;
}

export default function ArticleLayout({ post, content }: ArticleLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <BlogNav />
      <article className="w-full max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/blog" className="hover:text-blue-600">← Back to Blog</Link>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.tags?.map(tag => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden bg-gray-200">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          {content}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <h4 className="font-medium mb-2">Back to Blog</h4>
              <p className="text-sm text-gray-600">Browse more articles about bootleg coal history</p>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
