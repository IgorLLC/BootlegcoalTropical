import PageLayout from '../components/PageLayout';

export default function EventsPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl text-gray-700">
            Join us for book discussions, lectures, and community events.
          </p>
        </header>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-center p-4 bg-blue-600 text-white rounded-lg">
                    <div className="text-2xl font-bold">JAN</div>
                    <div className="text-3xl font-bold">15</div>
                    <div>2024</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Book Launch Event</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for the official launch of "Bootleg Coal and the Law" at the Historical Society.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
                    <p><strong>Location:</strong> Pennsylvania Historical Society</p>
                    <p><strong>Address:</strong> 1300 Locust St, Philadelphia, PA</p>
                  </div>
                  <a
                    href="#register"
                    className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-center p-4 bg-blue-600 text-white rounded-lg">
                    <div className="text-2xl font-bold">FEB</div>
                    <div className="text-3xl font-bold">3</div>
                    <div>2024</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Author Talk & Book Signing</h3>
                  <p className="text-gray-600 mb-4">
                    Discussion about bootleg mining's impact on Pennsylvania communities.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
                    <p><strong>Location:</strong> Barnes & Noble</p>
                    <p><strong>Address:</strong> 1805 Walnut St, Philadelphia, PA</p>
                  </div>
                  <a
                    href="#register"
                    className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-center p-4 bg-gray-300 text-gray-700 rounded-lg">
                    <div className="text-2xl font-bold">DEC</div>
                    <div className="text-3xl font-bold">1</div>
                    <div>2023</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Research Presentation</h3>
                  <p className="text-gray-600 mb-4">
                    Presentation on the research methods and discoveries made during the writing of the book.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Location:</strong> University of Pennsylvania</p>
                    <p>
                      <a href="#gallery" className="text-blue-600 hover:text-blue-800">
                        View Photos
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host an Event Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Host an Event</h2>
          <p className="text-lg text-gray-700 mb-6">
            Interested in hosting a book discussion, lecture, or other event? Get in touch to discuss possibilities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
