import PageLayout from '../components/PageLayout';

export default function BuyPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-4xl font-bold mb-4">Get Your Copy</h1>
          <p className="text-xl text-gray-700">
            Available in hardcover, paperback, and digital formats.
          </p>
        </header>

        {/* Book Preview */}
        <section className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src="/images/cover3d_noshadow.png"
              alt="Bootleg Coal and the Law book cover"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Book Details</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
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
            </div>
          </div>
        </section>

        {/* Purchase Options */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Where to Buy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cornell University Press */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cornell University Press</h3>
              <p className="text-gray-700 mb-4">
                Purchase directly from the publisher. Available in hardcover and paperback.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Hardcover</span>
                  <span>$34.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Paperback</span>
                  <span>$24.95</span>
                </div>
                <a
                  href="https://www.cornellpress.cornell.edu/book/9781501765735/bootleg-coal-and-the-law/"
                  className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy from Cornell Press
                </a>
              </div>
            </div>

            {/* Amazon */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Amazon</h3>
              <p className="text-gray-700 mb-4">
                Available in hardcover, paperback, and Kindle editions.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Hardcover</span>
                  <span>$34.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Paperback</span>
                  <span>$24.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Kindle</span>
                  <span>$14.95</span>
                </div>
                <a
                  href="https://www.amazon.com/Bootleg-Coal-Law-1930s-1960s/dp/1501765736"
                  className="block text-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Orders */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Bulk Orders</h2>
          <p className="text-lg text-gray-700 mb-6">
            Interested in ordering multiple copies for your organization, book club, or event? 
            Contact us for special bulk pricing and shipping arrangements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact for Bulk Orders
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
