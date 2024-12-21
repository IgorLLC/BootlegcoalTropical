export default function BootlegCoalRebellionPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <article className="max-w-4xl w-full prose prose-lg">
        <h1 className="text-4xl font-bold mb-4">The Bootleg Coal Rebellion</h1>
        <div className="text-gray-600 mb-8">September 28, 2023</div>

        <img
          src="/blog/rebellion.jpg"
          alt="Historical photo of bootleg coal miners"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="space-y-6">
          <p>
            The Bootleg Coal Rebellion tells the story of Pennsylvania's bootleg coal miners and their long struggle for justice. In the early 1930s, unemployed coal miners began illegally mining coal on company property to keep their families warm and fed. What started as a survival strategy evolved into a powerful movement that challenged corporate power and reshaped community relations.
          </p>

          <h2 className="text-2xl font-bold mt-8">Origins of the Rebellion</h2>
          <p>
            The rebellion began during the depths of the Great Depression when traditional mining operations were shutting down and unemployment was widespread. Faced with desperate circumstances, miners took matters into their own hands, opening small mines on corporate-owned land. These "bootleg holes" became a lifeline for many families in the region.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
            "We weren't stealing – we were surviving. The coal was there, our families were cold, and we knew how to mine it safely." - Former Bootleg Miner
          </blockquote>

          <h2 className="text-2xl font-bold mt-8">Community Organization</h2>
          <p>
            What made the bootleg coal movement remarkable was its level of organization. Miners established informal cooperatives, sharing equipment and expertise. They developed safety protocols and created distribution networks that helped sustain entire communities. This wasn't just about individual survival – it was about collective resistance and mutual aid.
          </p>

          <h2 className="text-2xl font-bold mt-8">Confronting Corporate Power</h2>
          <p>
            The coal companies didn't sit idly by as bootleggers operated on their property. They employed various tactics to shut down bootleg operations, from legal action to private police forces. However, the widespread community support for bootleg miners made it difficult to completely suppress the movement. Local businesses often supported the bootleggers, and even some law enforcement officials turned a blind eye to their activities.
          </p>

          <h2 className="text-2xl font-bold mt-8">Economic Impact</h2>
          <p>
            At its height, bootleg mining became a significant part of the regional economy. The informal market for bootleg coal provided income for thousands of families and helped keep coal prices affordable for consumers. This alternative economic system demonstrated the potential for community-based solutions to economic hardship.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4">The Rebellion's Legacy</h3>
            <ul className="list-disc pl-6">
              <li>Demonstrated the power of community solidarity</li>
              <li>Established alternative economic models</li>
              <li>Challenged traditional property rights</li>
              <li>Influenced labor movement strategies</li>
              <li>Created lasting community networks</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8">Lessons for Today</h2>
          <p>
            The Bootleg Coal Rebellion offers valuable lessons for contemporary movements for economic justice. It shows how communities can organize to meet their needs when traditional systems fail them. The miners' ability to create alternative economic and social structures while maintaining community support provides a model for modern resistance movements.
          </p>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-xl font-bold mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li>
              <a href="/book" className="text-blue-600 hover:text-blue-800">
                Get the full story in "Bootleg Coal and the Law"
              </a>
            </li>
            <li>
              <a href="/blog/history-behind-bootleg-coal" className="text-blue-600 hover:text-blue-800">
                The History Behind Bootleg Coal
              </a>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
