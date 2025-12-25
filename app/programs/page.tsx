import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | StudentsxCEOs Jakarta",
  description: "Explore our diverse range of programs designed to bridge the gap between students and CEOs.",
};

const programs = [
  {
    id: "flagship-programs",
    title: "Flagship Programs",
    description: "Our signature initiatives designed to provide comprehensive leadership development and exclusive networking opportunities with industry leaders.",
    image: "/api/pics/programs/flagship.jpg", // Placeholder path
  },
  {
    id: "workshops-bootcamps",
    title: "Workshops & Bootcamps",
    description: "Intensive, hands-on sessions focused on specific skills, from business strategy to personal branding, led by experts in the field.",
    image: "/api/pics/programs/workshops.jpg",
  },
  {
    id: "mentorship-sessions",
    title: "Mentorship Sessions",
    description: "Direct guidance and personalized feedback from experienced professionals to help you navigate your career path.",
    image: "/api/pics/programs/mentorship.jpg",
  },
  {
    id: "ceo-talks",
    title: "CEO Talks / Speaker Series",
    description: "Inspiring talks and panel discussions with top CEOs and business leaders sharing their journeys, insights, and advice.",
    image: "/api/pics/programs/ceo-talks.jpg",
  },
  {
    id: "case-competitions",
    title: "Case Competitions",
    description: "Challenge yourself to solve real-world business problems, compete with top talent, and present your solutions to industry judges.",
    image: "/api/pics/programs/case-competitions.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-32 pb-20">
      <section className="px-6 sm:px-12 max-w-[1400px] mx-auto">
        <h1 className="text-5xl sm:text-6xl font-serif mb-8 text-zinc-900">Our Programs</h1>
        <p className="text-xl text-zinc-600 max-w-3xl mb-20 leading-relaxed">
          We offer a variety of programs designed to empower students, foster leadership, and build meaningful connections with the business world.
        </p>

        <div className="space-y-24">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              id={program.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-neutral-100 overflow-hidden relative group rounded-lg">
                  <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
                  {/* Placeholder for real image */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm font-medium tracking-widest">
                    IMAGE: {program.title.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-zinc-900">{program.title}</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  {program.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
