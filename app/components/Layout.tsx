import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed at the top only on mobile */}
      <div className="fixed md:hidden top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content with padding for navbar only on mobile */}
      <main className="flex-grow mt-[64px] md:mt-0">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
