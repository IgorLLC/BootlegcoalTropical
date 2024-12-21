export default function BookPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">Bootleg Coal and the Law</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="/book-cover.jpg"
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
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">About the Book</h2>
              <p className="text-gray-700">
                During the Great Depression, unemployed miners in Pennsylvania's anthracite coal region illegally mined coal on company property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="italic text-gray-600 mb-4">
                  "A fascinating account of how miners created their own legal system... A must-read for anyone interested in labor history."
                </blockquote>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Details</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Publisher:</strong> Cornell University Press</li>
                <li><strong>Publication Date:</strong> 2023</li>
                <li><strong>Pages:</strong> 276</li>
                <li><strong>ISBN:</strong> 9781501765735</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
