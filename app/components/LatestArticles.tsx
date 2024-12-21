import Link from 'next/link';
import { BlogPost } from '../types/blog';

interface LatestArticlesProps {
  articles: BlogPost[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <section className="w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 5).map((article) => (
          <article key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{article.category}</span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <Link href={`/blog/posts/${article.slug}`} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">{article.date}</p>
              <p className="text-gray-700 line-clamp-3">{article.excerpt}</p>
              <Link 
                href={`/blog/posts/${article.slug}`}
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
