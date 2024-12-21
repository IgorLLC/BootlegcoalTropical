import Link from 'next/link';
import BlogNav from './components/BlogNav';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Bootleg Coal Miners and the Law",
    date: "October 15, 2023",
    excerpt: "During the Great Depression, unemployed coal miners in Pennsylvania's anthracite region began illegally mining coal on corporate property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.",
    slug: "bootleg-coal-miners-and-law",
    image: "/blog/miners-law.jpg"
  },
  {
    title: "The Bootleg Coal Rebellion",
    date: "September 28, 2023",
    excerpt: "The Bootleg Coal Rebellion tells the story of Pennsylvania's bootleg coal miners and their long struggle for justice. In the early 1930s, unemployed coal miners began illegally mining coal on company property to keep their families warm and fed.",
    slug: "bootleg-coal-rebellion",
    image: "/blog/rebellion.jpg"
  },
  {
    title: "The History Behind Bootleg Coal",
    date: "September 15, 2023",
    excerpt: "Learn about the fascinating history of bootleg coal mining in Pennsylvania's anthracite region. During the Great Depression, miners took matters into their own hands, creating an alternative economy and legal system.",
    slug: "history-behind-bootleg-coal",
    image: "/blog/history.jpg"
  }
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <BlogNav />
      <div className="w-full max-w-4xl px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Stories and insights about bootleg coal mining history
          </p>
        </header>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                {post.image && (
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {post.date}
                  </div>
                  <Link 
                    href={`/blog/posts/${post.slug}`}
                    className="block mt-1 text-2xl font-semibold text-gray-900 hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-2 text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/posts/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates about new blog posts and book events.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
