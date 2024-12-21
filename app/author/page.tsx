export default function AuthorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">About the Author</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Author Image Column */}
          <div>
            <img
              src="/images/author/mitch-troutman.png"
              alt="Mitch Troutman"
              className="h-48 w-full object-cover md:w-48 rounded-lg shadow-lg mb-4"
            />
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Connect</h2>
              <div className="space-y-2">
                <a
                  href="mailto:mitchell.troutman@gmail.com"
                  className="block text-blue-600 hover:text-blue-800"
                >
                  mitchell.troutman@gmail.com
                </a>
                <a
                  href="https://twitter.com/mitchtroutman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800"
                >
                  @mitchtroutman
                </a>
              </div>
            </div>
          </div>

          {/* Author Bio and Details */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Biography</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Mitch Troutman is a writer, educator, and organizer. Born and raised in the 
                  Pennsylvania coal region, his work focuses on labor history and environmental 
                  justice in the area.
                </p>
                <p>
                  As a founding member of the Anthracite Unite community organization, Troutman 
                  has been actively involved in preserving and sharing the rich history of the 
                  coal mining communities. His research and writing bring to light the 
                  often-overlooked stories of resistance and resilience in the face of 
                  corporate power.
                </p>
                <p>
                  Through his work on "Bootleg Coal and the Law," Troutman uncovers how 
                  unemployed miners during the Great Depression created their own system of 
                  law and order, challenging corporate property rights while providing for 
                  their families and communities.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Speaking & Events</h2>
              <p className="text-gray-700 mb-4">
                Mitch is available for speaking engagements, book readings, and discussions 
                about labor history, environmental justice, and the Pennsylvania coal region.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book an Event
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Publications</h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="block">Bootleg Coal and the Law</strong>
                  <span className="text-sm">Cornell University Press, 2023</span>
                </li>
                <li>
                  <strong className="block">Articles & Essays</strong>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Various contributions to labor history publications</li>
                    <li>Commentary on environmental justice in coal communities</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
