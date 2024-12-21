export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Bootleg Coal</h1>
        <p className="text-xl text-gray-600">Exploring stories and history</p>
      </header>
      
      <section className="grid gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
          {/* Book entries will be dynamically loaded here */}
        </div>
      </section>
    </main>
  )
}
