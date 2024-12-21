import { events } from '../data/events';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Events</h1>
        
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold mb-8">Event Schedule</h2>
          
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {event.image && (
                <div className="relative h-96 w-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-32 flex-shrink-0 font-medium">
                        {item.time}
                      </div>
                      <div className="flex-grow">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>

                {event.additionalInfo && (
                  <div className="mt-6 text-gray-600 italic">
                    {event.additionalInfo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
