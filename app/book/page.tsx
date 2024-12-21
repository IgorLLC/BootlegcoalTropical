import BookReviews from '../components/BookReviews';

export default function BookPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        {/* Book Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <img
                src="/images/cover3d_noshadow.png"
                alt="Bootleg Coal and the Law book cover"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="mt-6 space-y-4">
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
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Bootleg Coal and the Law</h1>
              <p className="text-lg text-gray-700 mb-6">
                During the Great Depression, unemployed miners in Pennsylvania's anthracite coal region illegally mined coal on company property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This book uncovers the story of how unemployed workers took over corporate coal lands and turned them into a commons, providing for their families and communities while creating an alternative legal system that supported their right to mine.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Book Details</h2>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Publisher:</strong> Cornell University Press</li>
                  <li><strong>Publication Date:</strong> January 15, 2024</li>
                  <li><strong>Pages:</strong> 264</li>
                  <li><strong>ISBN:</strong> 978-1501765735</li>
                  <li><strong>Format:</strong> Hardcover</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <BookReviews />
        </section>

        {/* Book Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About the Book</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              In <em>Bootleg Coal and the Law</em>, Mitch Keller explores how unemployed anthracite coal miners in Pennsylvania created their own system of law and order during the Great Depression. These miners, facing unemployment and poverty, began illegally mining coal on corporate property to support their families.
            </p>
            <p>
              The book examines how bootleg mining evolved from a survival strategy during the Depression into a way of life that lasted for decades. It reveals how miners developed sophisticated methods and established informal networks that helped sustain their communities during difficult times.
            </p>
            <p>
              Through extensive research and compelling storytelling, Keller shows how the bootleg miners' actions challenged traditional notions of property rights and demonstrated the power of community solidarity. Their story remains relevant today as communities continue to struggle with questions of economic justice, workers' rights, and corporate power.
            </p>
          </div>
        </section>

        {/* Key Themes */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Themes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Labor History</h3>
              <p className="text-gray-700">
                Explores the innovative ways workers responded to unemployment and economic hardship during the Great Depression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Legal History</h3>
              <p className="text-gray-700">
                Examines how communities created alternative legal systems that challenged corporate property rights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Community Resilience</h3>
              <p className="text-gray-700">
                Shows how communities came together to support each other during times of economic crisis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Economic Justice</h3>
              <p className="text-gray-700">
                Addresses ongoing questions about workers' rights and corporate power that remain relevant today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
