import Image from 'next/image';
import Link from 'next/link';
import BlogNav from '../../components/BlogNav';

export default function OutOfStatePost() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <BlogNav />
      <article className="w-full max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/blog" className="hover:text-blue-600">← Back to Blog</Link>
            <span>•</span>
            <span>December 15, 2023</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Out of State, Out of Mind
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              History
            </span>
            {["law enforcement", "community", "interstate commerce"].map(tag => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src="/blog/out-of-state.jpg"
            alt="Historical photo of bootleg coal operations"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            During the height of the Great Depression, bootleg coal mining wasn't confined by state borders. 
            The desperate search for work and survival led miners to cross state lines, creating a complex web 
            of interstate operations that challenged law enforcement and redefined community boundaries.
          </p>

          <h2>Beyond Pennsylvania's Borders</h2>
          <p>
            While Pennsylvania's anthracite region was the epicenter of bootleg coal mining, the practice 
            spread beyond state lines. Miners from New Jersey, New York, and even as far as Maryland would 
            travel to Pennsylvania's coal fields, seeking opportunity in the face of widespread unemployment.
          </p>

          <blockquote>
            "The coal didn't care about state lines, and neither did hungry families. People went where 
            they could find work, where they could keep their children fed." - Local historian
          </blockquote>

          <h2>Interstate Commerce and Legal Challenges</h2>
          <p>
            The interstate nature of bootleg coal mining presented unique challenges for law enforcement. 
            State police found themselves dealing with a mobile workforce that could easily cross borders 
            to evade capture. Meanwhile, the transportation of bootleg coal across state lines technically 
            made it a federal offense, though enforcement was often inconsistent.
          </p>

          <h2>Community Networks Across Borders</h2>
          <p>
            What emerged was a remarkable network of community support that transcended state boundaries. 
            Families in New Jersey would shelter Pennsylvania miners, while communities in New York would 
            provide market connections for bootleg coal. These interstate relationships formed the backbone 
            of a survival economy that helped thousands weather the Depression.
          </p>

          <h2>Legacy of Interstate Cooperation</h2>
          <p>
            The interstate nature of bootleg coal mining left a lasting legacy on the region. It demonstrated 
            how economic necessity could overcome state boundaries and foster cooperation between communities. 
            This legacy of mutual aid and interstate solidarity would influence later labor movements and 
            community organizing efforts.
          </p>

          <div className="bg-gray-100 p-6 rounded-xl my-8">
            <h3 className="text-xl font-bold mb-4">Key Points</h3>
            <ul>
              <li>Bootleg mining operations frequently crossed state borders</li>
              <li>Interstate movement complicated law enforcement efforts</li>
              <li>Communities across states formed support networks</li>
              <li>The practice influenced future labor movements</li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/posts/headlines-tell-story"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <h4 className="font-medium mb-2">Headlines Tell the Story</h4>
              <p className="text-sm text-gray-600">How the media covered interstate bootleg coal operations</p>
            </Link>
            <Link 
              href="/blog/posts/standing-down-police"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <h4 className="font-medium mb-2">Standing Down the Police</h4>
              <p className="text-sm text-gray-600">Confrontations between miners and law enforcement</p>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
