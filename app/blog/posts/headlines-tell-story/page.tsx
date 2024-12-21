import Image from 'next/image';
import Link from 'next/link';
import BlogNav from '../../components/BlogNav';

export default function HeadlinesArticle() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <BlogNav />
      <article className="w-full max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/blog" className="hover:text-blue-600">← Back to Blog</Link>
            <span>•</span>
            <span>December 10, 2023</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Headlines Tell the Story
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              History
            </span>
            {["media coverage", "historical events"].map(tag => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            The story of the bootleg coal rebellion was extensively covered in newspapers across Pennsylvania and beyond. 
            These headlines capture the dramatic confrontations, community resistance, and the complex relationship between 
            law enforcement and bootleg miners during this turbulent period.
          </p>

          <h2>Stripping at Pine Knot Mine</h2>
          <div className="relative my-8">
            <Image
              src="/images/blog/articles/headlines/blew-up-road-at-pine-knot-1-261x1024.webp"
              alt="Newspaper headline about Pine Knot Mine"
              width={261}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <p>
            The Pine Knot Mine incident exemplified the lengths to which bootleg miners would go to protect their operations. 
            When faced with attempts to shut down their mine, the community took dramatic action to prevent access to the site.
          </p>

          <h2>More Than Cells in Prison</h2>
          <div className="relative my-8">
            <Image
              src="/images/blog/articles/headlines/img-1-352x1024.webp"
              alt="Newspaper article about prison cells"
              width={352}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <p>
            The criminalization of bootleg mining led to numerous arrests, but the community's solidarity often meant that 
            arrests did little to deter the practice. Many saw these actions as acts of survival rather than crimes.
          </p>

          <blockquote>
            "The cells may have been full, but the mines never emptied. The community's determination proved 
            stronger than any prison walls." - Local historian
          </blockquote>

          <h2>Sealing Coal Holes Halted</h2>
          <div className="relative my-8">
            <Image
              src="/images/blog/articles/headlines/img-274x1024.webp"
              alt="Newspaper headline about sealing coal holes"
              width={274}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <p>
            Attempts to seal bootleg mines were often met with fierce resistance from the community. These efforts 
            highlighted the tension between corporate interests and the survival needs of local families.
          </p>

          <h2>Earle Refuses Use of State Police</h2>
          <div className="grid grid-cols-1 gap-4 my-8">
            <div className="relative">
              <Image
                src="/images/blog/articles/headlines/refuse-to-send-police-490x1024.webp"
                alt="Headline about Governor Earle refusing to use state police"
                width={490}
                height={400}
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/blog/articles/headlines/refuse-to-send-police-highlight.webp"
                alt="Highlighted section of the police refusal article"
                width={490}
                height={400}
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          <p>
            Governor George Earle's refusal to use state police against bootleg miners marked a significant shift in 
            the state's approach to the crisis. This decision acknowledged the economic realities that drove people 
            to bootleg mining.
          </p>

          <h2>The Human Cost</h2>
          <div className="relative my-8">
            <Image
              src="/images/blog/articles/headlines/pays-fine-himself-411x1024.webp"
              alt="Newspaper article about personal costs"
              width={411}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <p>
            Behind every headline was a human story - of families struggling to survive, of communities coming together, 
            and of individuals facing difficult choices between law and necessity.
          </p>

          <div className="bg-gray-100 p-6 rounded-xl my-8">
            <h3 className="text-xl font-bold mb-4">Key Points</h3>
            <ul>
              <li>Newspapers extensively covered the bootleg coal movement</li>
              <li>Headlines reveal both conflict and community solidarity</li>
              <li>Government response evolved over time</li>
              <li>Personal stories emerged behind every headline</li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/posts/out-of-state-out-of-mind"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold mb-2">Out of State, Out of Mind</h4>
              <p className="text-gray-600 text-sm">Explore how bootleg coal mining operations extended beyond state borders...</p>
            </Link>
            <Link 
              href="/blog/posts/was-it-really-rebellion"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold mb-2">Was It Really a "Rebellion"?</h4>
              <p className="text-gray-600 text-sm">Analyzing the nature of the bootleg coal movement...</p>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
