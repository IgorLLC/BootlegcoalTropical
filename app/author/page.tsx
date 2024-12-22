import PageLayout from '../components/PageLayout';

export default function AuthorPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Author Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <img
              src="/images/author/mitch-troutman.png"
              alt="Mitch Troutman"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Mitch Troutman</h1>
            <p className="text-xl text-gray-700 mb-6">
              Writer, Educator, and Labor Historian
            </p>
            <div className="prose prose-lg">
              <p>
                Mitch Troutman is a writer, educator, and organizer. His work focuses on labor history 
                and environmental justice in Pennsylvania's coal region.
              </p>
              <p>
                Through extensive research and compelling storytelling, Troutman brings to life the 
                struggles and triumphs of coal miners during one of America's most challenging periods.
              </p>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                The Bootleg Coal Rebellion
              </h3>
              <p className="text-gray-700 mb-4">
                A comprehensive look at how unemployed miners in Pennsylvania created their own system 
                of law and order during the Great Depression.
              </p>
              <p className="text-gray-600">Published by Cornell University Press, 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Articles and Essays
              </h3>
              <p className="text-gray-700">
                Regular contributions to academic journals and labor publications, focusing on the 
                intersection of labor rights, environmental justice, and community organizing.
              </p>
            </div>
          </div>
        </section>

        {/* Speaking and Events */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Speaking and Events</h2>
          <p className="text-lg text-gray-700 mb-6">
            Mitch Troutman is available for speaking engagements, book discussions, and academic 
            presentations. He regularly speaks about:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Labor History in Pennsylvania's Coal Region</li>
            <li>Community Organizing and Social Movements</li>
            <li>Environmental Justice in Mining Communities</li>
            <li>Research Methods in Labor History</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-700 mb-6">
            For speaking engagements, interviews, or other inquiries, please reach out through:
          </p>
          <div className="space-y-4">
            <a
              href="mailto:contact@mitchtroutman.com"
              className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Email Mitch Troutman
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
