import PageLayout from '../components/PageLayout';
import BookReviews from '../components/BookReviews';

export default function BookPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Book Details Section */}
        <section>
          <h1 className="text-4xl font-bold mb-8 text-gray-900">The Bootleg Coal Rebellion</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src="/images/cover3d_noshadow.png"
                alt="Book Cover"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Publisher</h3>
                  <p>Cornell University Press</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Publication Date</h3>
                  <p>December 15, 2023</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Pages</h3>
                  <p>312</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">ISBN</h3>
                  <p>9781501765735</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">About the Book</h2>
                <p className="text-gray-700 mb-4">
                  During the Great Depression, unemployed miners in Pennsylvania's anthracite coal region illegally mined coal on company property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.
                </p>
                <p className="text-gray-700">
                  This book uncovers the story of how unemployed workers took over corporate coal lands and turned them into a commons, providing for their families and communities while creating an alternative legal system that supported their right to mine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Reviews</h2>
          <BookReviews />
        </section>

        {/* Purchase Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Get Your Copy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.cornellpress.cornell.edu/book/9781501765735/bootleg-coal-and-the-law/"
              className="block text-center bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy from Cornell University Press
            </a>
            <a
              href="https://www.amazon.com/Bootleg-Coal-Law-1930s-1960s/dp/1501765736"
              className="block text-center bg-gray-800 text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
