import Link from 'next/link';
import { BlogPost } from '../types/blog';

interface LatestArticlesProps {
  posts: BlogPost[];
}

export default function LatestArticles({ posts }: LatestArticlesProps) {
  return (
    <section className="w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{post.category}</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 line-clamp-3">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link 
          href="/blog"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
        >
          View all articles
        </Link>
      </div>
    </section>
  );
}
