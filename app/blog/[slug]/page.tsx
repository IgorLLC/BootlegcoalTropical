'use client';

import Link from 'next/link';

interface BlogPost {
  title: string;
  date: string;
  content: string;
  image?: string;
}

const posts: Record<string, BlogPost> = {
  'bootleg-coal-miners-and-law': {
    title: "Bootleg Coal Miners and the Law",
    date: "October 15, 2023",
    content: `
      During the Great Depression, unemployed coal miners in Pennsylvania's anthracite region began illegally mining coal on corporate property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.

      These miners created their own system of law and order, challenging corporate property rights while providing for their families and communities. Through their actions, they established an alternative legal system that supported their right to mine.

      The story of bootleg coal mining is not just about survival during hard times—it's about community resilience, workers' rights, and the power of collective action. These miners demonstrated that when faced with economic hardship, communities can come together to create alternative systems that serve their needs.

      The legacy of bootleg coal mining continues to influence discussions about workers' rights, community organizing, and economic justice today.
    `,
    image: "/blog/miners-law.jpg"
  },
  'bootleg-coal-rebellion': {
    title: "The Bootleg Coal Rebellion",
    date: "September 28, 2023",
    content: `
      The Bootleg Coal Rebellion tells the story of Pennsylvania's bootleg coal miners and their long struggle for justice. In the early 1930s, unemployed coal miners began illegally mining coal on company property to keep their families warm and fed.

      This practice, known as bootleg mining, became a way of life for many in the anthracite coal region. The miners developed their own methods, established informal networks, and created a parallel economy that helped sustain their communities during difficult times.

      The rebellion wasn't just about mining coal—it was about asserting the right to survive and maintain dignity in the face of corporate power and economic depression. The bootleg miners' actions challenged traditional notions of property rights and demonstrated the power of community solidarity.

      Their story remains relevant today as communities continue to struggle with questions of economic justice, workers' rights, and corporate power.
    `,
    image: "/blog/rebellion.jpg"
  }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold mb-8">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <article className="max-w-4xl w-full">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 block">
          ← Back to blog
        </Link>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600">{post.date}</div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Share this post</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.preventDefault();
                // Add social sharing functionality
              }}
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.preventDefault();
                // Add social sharing functionality
              }}
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.preventDefault();
                // Add social sharing functionality
              }}
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
