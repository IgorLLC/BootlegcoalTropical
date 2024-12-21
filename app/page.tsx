import { getAllPosts } from './blog/data/posts';
import LatestArticles from './components/LatestArticles';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Bootleg Coal and the Law</h1>
          <p className="text-xl text-gray-700 mb-4">1930s to 1960s</p>
        </header>

        {/* Book Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <img
                src="/book-cover.jpg"
                alt="Bootleg Coal and the Law book cover"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="mt-6 space-y-4">
                <a
                  href="https://www.cornellpress.cornell.edu/book/9781501765735/bootleg-coal-and-the-law/"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Buy from Cornell University Press
                </a>
                <a
                  href="https://www.amazon.com/Bootleg-Coal-Law-1930s-1960s/dp/1501765736"
                  className="block w-full text-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                During the Great Depression, unemployed miners in Pennsylvania's anthracite coal region illegally mined coal on company property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This book uncovers the story of how unemployed workers took over corporate coal lands and turned them into a commons, providing for their families and communities while creating an alternative legal system that supported their right to mine.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                <blockquote className="italic text-gray-600 mb-4">
                  "A fascinating account of how miners created their own legal system... A must-read for anyone interested in labor history."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <LatestArticles articles={posts} />

        {/* Additional Info */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
          <p className="text-gray-700">
            Mitch Troutman is a writer, educator, and organizer. His work focuses on labor history and environmental justice in Pennsylvania's coal region.
          </p>
        </section>
      </div>
    </main>
  );
}
