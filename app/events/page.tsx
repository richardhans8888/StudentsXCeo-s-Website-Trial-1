import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | StudentsxCEOs Jakarta",
  description: "Join our upcoming events, workshops, and speaker sessions.",
};

// Mock data for events
const featuredEvent = {
  id: "featured-1",
  category: "Flagship Event",
  title: "The SxC Summit 2025: Future of Leadership",
  date: "October 15, 2025",
  location: "Grand Ballroom, Jakarta",
  image: "/api/pics/events/summit.jpg", // Placeholder
  description: "Join over 500 students and industry leaders for a day of transformative talks, networking, and innovation showcases.",
};

const upcomingEvents = [
  {
    id: "evt-1",
    category: "Workshop",
    title: "Strategic Problem Solving with McKinsey Alumni",
    date: "July 12, 2025",
    location: "SxC Hub, South Jakarta",
    image: "/api/pics/events/workshop.jpg",
  },
  {
    id: "evt-2",
    category: "CEO Talks",
    title: "Navigating the Tech Winter: Insights from Unicorn Founders",
    date: "July 28, 2025",
    location: "Virtual (Zoom)",
    image: "/api/pics/events/ceo-talk.jpg",
  },
  {
    id: "evt-3",
    category: "Networking",
    title: "SxC Alumni Night: Building Bridges",
    date: "August 05, 2025",
    location: "Rooftop Bar, Central Jakarta",
    image: "/api/pics/events/alumni.jpg",
  },
  {
    id: "evt-4",
    category: "Case Competition",
    title: "Jakarta Business Challenge 2025 Kick-off",
    date: "August 20, 2025",
    location: "University of Indonesia",
    image: "/api/pics/events/competition.jpg",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-32 pb-20">
      <div className="px-6 sm:px-12 max-w-[1400px] mx-auto">
        
        {/* Page Title */}
        <div className="mb-16 border-b border-black/10 pb-8">
          <h1 className="text-5xl sm:text-6xl font-serif text-zinc-900">Events</h1>
        </div>

        {/* Featured Event - McKinsey Hero Style */}
        <section className="mb-24 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 overflow-hidden">
               <div className="aspect-[16/9] bg-neutral-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
                 {/* Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                   Featured Event Image
                 </div>
               </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3">
                {featuredEvent.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                {featuredEvent.title}
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                {featuredEvent.description}
              </p>
              <div className="flex flex-col gap-1 text-sm text-zinc-500 font-medium">
                <span>{featuredEvent.date}</span>
                <span>{featuredEvent.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters / Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-12">
          <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900">Upcoming Events</h3>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            <button className="text-blue-600">All</button>
            <button className="text-zinc-500 hover:text-blue-600 transition-colors">Workshops</button>
            <button className="text-zinc-500 hover:text-blue-600 transition-colors">Talks</button>
            <button className="text-zinc-500 hover:text-blue-600 transition-colors">Competitions</button>
          </div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[3/2] bg-neutral-100 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs tracking-widest uppercase">
                  Event Image
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2">
                  {event.category}
                </span>
                <h3 className="text-xl font-serif font-medium leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-black/5 flex flex-col gap-0.5 text-xs text-zinc-500 font-medium">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Past Events Link */}
        <div className="mt-20 border-t border-black/10 pt-12 flex justify-center">
          <button className="px-8 py-3 border border-black/10 hover:bg-black hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            View Past Events
          </button>
        </div>

      </div>
    </main>
  );
}
