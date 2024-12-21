import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content with padding to account for fixed navbar */}
      <main className="flex-grow mt-[64px]">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
