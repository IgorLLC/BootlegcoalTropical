'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.includes(path.toLowerCase());
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 space-y-4 md:space-y-0">
          {/* Left side - Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(category)
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Right side - Recent Posts Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            >
              <span className="text-sm font-medium">Recent Posts</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                dropdownOpen
                  ? 'opacity-100 visible transform translate-y-0'
                  : 'opacity-0 invisible transform -translate-y-2'
              }`}
            >
              <div className="py-2">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/posts/${post.slug}`}
                    className={`block px-4 py-2 text-sm ${
                      isActive(post.slug)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
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
