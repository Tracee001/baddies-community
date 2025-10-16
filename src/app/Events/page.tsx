import React from 'react';
import Link from 'next/link';
import { FaCalendarDays, FaLocationDot, FaTicket, FaClock, FaCalendarPlus } from 'react-icons/fa6';

// --- Placeholder Data for Events ---
// Replace this with data fetched from your CMS or API
interface Event {
  id: number;
  title: string;
  date: string; // e.g., "October 25, 2025"
  time: string; // e.g., "6:00 PM - 7:30 PM EST"
  location: string; // e.g., "Virtual (Zoom)" or "Atlanta, GA"
  type: 'Free' | 'Member Only' | 'Ticketed';
  description: string;
  image: string; // URL for the event image
  link: string; // Registration link
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Executive Presence Workshop: Lead with Confidence",
    date: "October 25, 2025",
    time: "6:00 PM - 7:30 PM EST",
    location: "Virtual (Zoom)",
    type: 'Member Only',
    description: "A deep dive into developing the communication skills and poise needed to advance to senior leadership roles.",
    image: "/images/event-leadership.jpg",
    link: "/events/register/1",
  },
  {
    id: 2,
    title: "BaddieCon 2026 Early Bird Registration Launch",
    date: "November 1, 2025",
    time: "9:00 AM EST",
    location: "Virtual & Hybrid",
    type: 'Ticketed',
    description: "The official opening for discounted passes to our annual conference, focusing on career acceleration and networking.",
    image: "/images/event-conference.jpg",
    link: "/events/baddiecon-tickets",
  },
  {
    id: 3,
    title: "Networking Mixer: Product Managers & Engineers",
    date: "November 15, 2025",
    time: "7:00 PM - 9:00 PM EST",
    location: "New York, NY",
    type: 'Free',
    description: "Join us for an evening of informal networking with professionals in the product and engineering fields.",
    image: "/images/event-networking.jpg",
    link: "/events/register/3",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section: Focused, Professional, with Background Image */}
      <section 
        className="relative h-screen flex items-center justify-center text-center p-4" // h-screen makes it full viewport height
        style={{
          backgroundImage: "url('/images/hero11.jpg')", // REPLACE THIS with your actual image path!
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Optional: for a parallax effect
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Upcoming Events & Community Meetups
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Connect, learn, and grow with women of color in tech. Find professional workshops, networking mixers, and our annual BaddieCon.
          </p>
          <Link
            href="#upcoming"
            className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-700 transition duration-300 shadow-lg uppercase tracking-wider"
          >
            View All Events Below
          </Link>
        </div>
      </section>

      {/* 2. Upcoming Events Grid */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What's Happening Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-pink-500"
              >
                {/* Event Image */}
                <div className="relative h-48 w-full">
                    {/* Replace with actual Next.js Image component if deployed */}
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="object-cover w-full h-full"
                    />
                    <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider 
                        ${event.type === 'Member Only' ? 'bg-blue-400 text-white' : 
                         event.type === 'Ticketed' ? 'bg-yellow-500 text-gray-900' : 
                         'bg-green-500 text-white'}`
                    }>
                        {event.type}
                    </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{event.title}</h3>
                  
                  {/* Event Details (Professional Icons) */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p className="flex items-center"><FaCalendarDays className="mr-3 text-pink-500" /> {event.date}</p>
                    <p className="flex items-center"><FaClock className="mr-3 text-pink-500" /> {event.time}</p>
                    <p className="flex items-center"><FaLocationDot className="mr-3 text-pink-500" /> {event.location}</p>
                  </div>

                  <p className="text-gray-700 mb-6 text-base">{event.description}</p>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <Link
                      href={event.link}
                      className="text-pink-600 font-bold flex items-center hover:text-pink-700 transition"
                    >
                      <FaTicket className="mr-2" /> {event.type === 'Ticketed' ? 'Get Tickets' : 'RSVP Now'} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-0 border-gray-200" />

      {/* 3. Event Archive / Past Events CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Missed an Event?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Access recordings and materials from our past workshops, panels, and BaddieCon sessions in the member archive.
          </p>
          <Link
            href="/membership/archive"
            className="bg-gray-800 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-pink-600 transition duration-300 shadow-xl uppercase tracking-wider flex items-center justify-center mx-auto w-fit"
          >
            <FaCalendarPlus className="mr-3" /> Explore Event Archive
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;