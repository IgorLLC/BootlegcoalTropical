import { blogPosts } from './blog/data/posts';
import LatestArticles from './components/LatestArticles';
import PageLayout from './components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      {/* Header - Centered on mobile, left-aligned on desktop */}
      <header className="text-center md:text-left mb-12">
        <h1 className="text-5xl font-bold mb-4">Bootleg Coal and the Law</h1>
        <p className="text-xl text-gray-700">1930s to 1960s</p>
      </header>

      {/* Main Content - Stack on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Book Cover - Full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-[600px] flex-shrink-0">
          <img
            src="/images/cover3d_noshadow.png"
            alt="Bootleg Coal and the Law book cover"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Book Description - Stack on mobile, right side on desktop */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              During the Great Depression, unemployed miners in Pennsylvania's anthracite coal region illegally mined coal on company property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.
            </p>
            <p className="text-lg text-gray-700">
              This book uncovers the story of how unemployed workers took over corporate coal lands and turned them into a commons, providing for their families and communities while creating an alternative legal system that supported their right to mine.
            </p>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
              "A fascinating account of how miners created their own legal system... A must-read for anyone interested in labor history."
            </blockquote>
          </div>

          {/* Purchase Buttons - Stack on both mobile and desktop */}
          <div className="mt-8 space-y-4">
            <a
              href="https://www.cornellpress.cornell.edu/book/9781501765735/bootleg-coal-and-the-law/"
              className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy from Cornell University Press
            </a>
            <a
              href="https://www.amazon.com/Bootleg-Coal-Law-1930s-1960s/dp/1501765736"
              className="block w-full text-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <LatestArticles posts={blogPosts} />
      </section>

      {/* Additional Info */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
        <p className="text-gray-700">
          Mitch Troutman is a writer, educator, and organizer. His work focuses on labor history and environmental justice in Pennsylvania's coal region.
        </p>
      </section>
    </PageLayout>
  );
}
