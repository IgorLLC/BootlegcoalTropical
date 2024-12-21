import Link from 'next/link';

export default function BuyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Buy the Book</h1>
      
      {/* Navigation Links */}
      <nav className="mb-16 bg-gray-50 p-6 rounded-xl shadow-sm">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-600">
          <li><a href="#online" className="hover:text-black transition-all hover:scale-105 transform">Online</a></li>
          <li className="text-gray-300">•</li>
          <li><a href="#local-stores" className="hover:text-black transition-all hover:scale-105 transform">Local Stores</a></li>
          <li className="text-gray-300">•</li>
          <li><a href="#library" className="hover:text-black transition-all hover:scale-105 transform">Library</a></li>
          <li className="text-gray-300">•</li>
          <li><a href="#wholesale" className="hover:text-black transition-all hover:scale-105 transform">Wholesale</a></li>
          <li className="text-gray-300">•</li>
          <li><a href="#signed-copies" className="hover:text-black transition-all hover:scale-105 transform">Signed Copies</a></li>
        </ul>
      </nav>

      {/* Online Section */}
      <section id="online" className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Online Retailers</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">PM Press</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Direct from the publisher with regular sales!</p>
              <div className="flex justify-between items-center">
                <a href="https://pmpress.org" 
                   className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
                   target="_blank"
                   rel="noopener noreferrer">
                  Visit Store
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <div className="flex space-x-2">
                  <a href="https://www.instagram.com/pmpress/" 
                     className="text-gray-400 hover:text-gray-600 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="PM Press Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/pm.press" 
                     className="text-gray-400 hover:text-gray-600 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="PM Press Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Bookshop.org</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Support local bookstores with 30% of the sale.</p>
              <a href="https://bookshop.org" 
                 className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                Visit Store
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Amazon</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Fast shipping with Prime available.</p>
              <a href="https://amazon.com" 
                 className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                Visit Store
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stores Section */}
      <section id="local-stores" className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Local Stores</h2>
        <p className="text-center text-gray-600 mb-8">Call ahead to confirm availability</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Coal Region & Nearby</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                {[
                  {name: "Mondragon Books", city: "Lewisburg, PA", phone: "+15705231540"},
                  {name: "Profile Coffee Roasters", city: "Elysburg, PA", phone: "+15706729120"},
                  {name: "Pioneer Tunnel", city: "Ashland, PA", phone: "+15708753850"},
                  // ... Add other stores here
                ].map((store, index) => (
                  <li key={index} className="group">
                    <div className="flex flex-col p-4 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-gray-900">{store.name}</span>
                      <span className="text-gray-600">{store.city}</span>
                      {store.phone && (
                        <a href={`tel:${store.phone}`} 
                           className="inline-flex items-center mt-1 text-gray-900 hover:text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {store.phone.replace(/(\+1)(\d{3})(\d{3})(\d{4})/, '($2) $3-$4')}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Further Away</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                {[
                  {name: "White Whale Books", city: "Pittsburgh, PA", phone: "+14122242847"},
                  {name: "Taylor Books", city: "Charleston, WV", phone: "+13043421461"},
                  {name: "Autumn Leaves Bookstore", city: "Ithaca, NY", phone: "+16072738239"},
                  {name: "Riot Act Books", city: "Binghamton, NY"},
                  {name: "The Read Spotted Newt", city: "Hazard, KY", phone: "+16063734811"}
                ].map((store, index) => (
                  <li key={index} className="group">
                    <div className="flex flex-col p-4 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-gray-900">{store.name}</span>
                      <span className="text-gray-600">{store.city}</span>
                      {store.phone && (
                        <a href={`tel:${store.phone}`} 
                           className="inline-flex items-center mt-1 text-gray-900 hover:text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {store.phone.replace(/(\+1)(\d{3})(\d{3})(\d{4})/, '($2) $3-$4')}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Libraries Section */}
      <section id="library" className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Libraries</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Ask your local library!</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Request your library to order it! Libraries appreciate suggestions, and this helps share people's history with the public.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Search WorldCat</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Find libraries near you that have the book:</p>
              <a href="https://worldcat.org" 
                 className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-600 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                Search WorldCat
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Wholesale</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">PM Press</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Contact for wholesale prices on orders of 10+ copies.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Coal Region</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Local to the lower coal region? The author might be able to help you get started.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Distributors</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Bookstores should contact PGW/Ingram for distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signed Copies Section */}
      <section id="signed-copies" className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Signed Copies</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Want a signed copy? Check our upcoming events!</p>
              <Link href="/events" 
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors">
                View Events Calendar
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
