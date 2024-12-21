import BlogNav from '../../components/BlogNav';

export default function BootlegCoalMinersAndLawPost() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <BlogNav />
      <div className="w-full max-w-4xl px-4">
        <article className="prose prose-lg">
          <h1 className="text-4xl font-bold mb-4">Bootleg Coal Miners and the Law</h1>
          <div className="text-gray-600 mb-8">October 15, 2023</div>

          <img
            src="/blog/miners-law.jpg"
            alt="Bootleg coal miners working"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="space-y-6">
            <p>
              During the Great Depression, unemployed coal miners in Pennsylvania's anthracite region began illegally mining coal on corporate property to keep their families warm and put food on the table. As deindustrialization progressed throughout the twentieth century, bootleg mining became a way to earn a living.
            </p>

            <h2 className="text-2xl font-bold mt-8">The Rise of Bootleg Mining</h2>
            <p>
              In the early 1930s, as the Great Depression tightened its grip on America, the anthracite coal region of Pennsylvania faced unprecedented hardship. Mines were closing, unemployment was skyrocketing, and families were struggling to survive. It was in this context that bootleg mining emerged not just as an act of desperation, but as an organized response to economic injustice.
            </p>

            <h2 className="text-2xl font-bold mt-8">Creating an Alternative Legal System</h2>
            <p>
              What made the bootleg miners' story unique was their creation of an alternative legal system. Rather than operating in complete defiance of the law, they established their own codes of conduct, safety standards, and methods of dispute resolution. This informal legal framework helped legitimize their activities in the eyes of their communities and provided a structure for their operations.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
              "The bootleggers weren't criminals – they were working men trying to feed their families. They created their own system of law and order that served the community's needs." - Local Historian
            </blockquote>

            <h2 className="text-2xl font-bold mt-8">Community Support and Solidarity</h2>
            <p>
              The success of bootleg mining depended heavily on community support. Local residents, shopkeepers, and even some law enforcement officials tacitly supported the miners' efforts. This solidarity was crucial in helping the miners resist corporate attempts to shut down their operations.
            </p>

            <h2 className="text-2xl font-bold mt-8">Legacy and Lessons</h2>
            <p>
              The story of Pennsylvania's bootleg coal miners offers important lessons for today. It demonstrates how communities can organize to meet their basic needs when traditional economic systems fail them. The miners' creation of alternative legal frameworks shows how working people can establish their own systems of justice and mutual aid.
            </p>

            <h2 className="text-2xl font-bold mt-8">Impact on Labor Rights</h2>
            <p>
              The bootleg miners' struggle contributed significantly to the broader labor movement. Their actions highlighted the need for worker protections and the importance of community-based economic alternatives. Many of the principles they fought for – such as workers' right to a living wage and safe working conditions – remain relevant in current labor discussions.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6">
                <li>Bootleg mining emerged as a survival strategy during the Great Depression</li>
                <li>Miners created their own legal system and safety standards</li>
                <li>Community support was crucial to the movement's success</li>
                <li>The struggle influenced broader labor rights movements</li>
                <li>Lessons remain relevant for modern economic justice movements</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-4">Further Reading</h3>
            <ul className="space-y-2">
              <li>
                <a href="/book" className="text-blue-600 hover:text-blue-800">
                  Read more in "Bootleg Coal and the Law"
                </a>
              </li>
              <li>
                <a href="/blog/bootleg-coal-rebellion" className="text-blue-600 hover:text-blue-800">
                  The Bootleg Coal Rebellion
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
