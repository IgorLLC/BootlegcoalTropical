import Link from 'next/link';

interface BlogPost {
  title: string;
  slug: string;
}

const recentPosts: BlogPost[] = [
  {
    title: "Bootleg Coal Miners and the Law",
    slug: "bootleg-coal-miners-and-law"
  },
  {
    title: "The Bootleg Coal Rebellion",
    slug: "bootleg-coal-rebellion"
  },
  {
    title: "The History Behind Bootleg Coal",
    slug: "history-behind-bootleg-coal"
  }
];

const categories = [
  "History",
  "Labor Rights",
  "Community Stories",
  "Legal System"
];

export default function BlogNav() {
  return (
    <nav className="bg-white shadow-sm py-4 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left side - Categories */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-blue-600 text-sm font-medium"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Right side - Recent Posts Dropdown */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
              Recent Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/posts/${post.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
