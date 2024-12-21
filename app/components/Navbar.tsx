'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              The Bootleg Coal Rebellion
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/book"
              className={`${
                isActive('/book')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Book
            </Link>
            <Link
              href="/buy"
              className={`${
                isActive('/buy')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Buy
            </Link>
            <Link
              href="/blog"
              className={`${
                isActive('/blog')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Blog
            </Link>
            <Link
              href="/events"
              className={`${
                isActive('/events')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Events
            </Link>
            <Link
              href="/author"
              className={`${
                isActive('/author')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Author
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive('/contact')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/book"
            className={`${
              isActive('/book')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Book
          </Link>
          <Link
            href="/buy"
            className={`${
              isActive('/buy')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Buy
          </Link>
          <Link
            href="/blog"
            className={`${
              isActive('/blog')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/events"
            className={`${
              isActive('/events')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/author"
            className={`${
              isActive('/author')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Author
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive('/contact')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
