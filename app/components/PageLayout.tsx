'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Navbar - Only show on non-home pages */}
      {!isHomePage && (
        <div className="md:hidden">
          <Navbar />
        </div>
      )}

      {/* Desktop Left Navigation */}
      <nav className="hidden md:block w-64 bg-white shadow-md p-8 min-h-screen">
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold">
            The Bootleg Coal Rebellion
          </Link>
        </div>
        <ul className="space-y-4">
          <li>
            <Link href="/book" className="text-gray-700 hover:text-gray-900">
              Book
            </Link>
          </li>
          <li>
            <Link href="/buy" className="text-gray-700 hover:text-gray-900">
              Buy
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/events" className="text-gray-700 hover:text-gray-900">
              Events
            </Link>
          </li>
          <li>
            <Link href="/author" className="text-gray-700 hover:text-gray-900">
              Author
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
