import PageLayout from '../components/PageLayout';
import { blogPosts } from './data/posts';

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-700">
            Updates, insights, and stories about bootleg coal mining and labor history.
          </p>
        </header>

        {/* Featured Post */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Post</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-blue-600">{blogPosts[0].category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-700 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <a
                href={`/blog/posts/${blogPosts[0].slug}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(1, 5).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-blue-600">{post.category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <a
                    href={`/blog/posts/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from(new Set(blogPosts.map(post => post.category))).map((category, index) => (
              <a
                key={index}
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                {category}
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">
              Get the latest updates on labor history, community stories, and upcoming events.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
