import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            The Bootleg Coal Rebellion
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/book" className="text-blue-600 hover:text-blue-800">
              Book
            </Link>
            <Link href="/buy" className="text-gray-900 hover:text-gray-600">
              Buy
            </Link>
            <Link href="/blog" className="text-gray-900 hover:text-gray-600">
              Blog
            </Link>
            <Link href="/press" className="text-gray-900 hover:text-gray-600">
              Press
            </Link>
            <Link href="/author" className="text-gray-900 hover:text-gray-600">
              Author
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/book" className="block px-3 py-2 text-blue-600 hover:bg-gray-50 rounded">
              Book
            </Link>
            <Link href="/buy" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded">
              Buy
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded">
              Blog
            </Link>
            <Link href="/press" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded">
              Press
            </Link>
            <Link href="/author" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded">
              Author
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
