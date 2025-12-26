import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | StudentsxCEOs Jakarta",
  description: "Become a member, volunteer, or join our recruitment.",
};

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-24 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12">
        <h1 className="text-5xl sm:text-6xl font-serif mb-16 text-zinc-900">Join Our Community</h1>
        
        <div className="space-y-24">
          {/* Section 1: Become a Member */}
          <section id="become-member" className="group relative overflow-hidden rounded-2xl bg-neutral-900 text-white min-h-[600px] flex items-center">
             {/* Background Image Placeholder */}
             <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
             
             <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-16 lg:p-24 items-center">
                <div>
                   <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">MEMBERSHIP</span>
                   <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
                      Become a<br />Member
                   </h2>
                   <div className="h-1 w-20 bg-blue-600 mb-8" />
                   <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-xl">
                      Join a network of ambitious students and future leaders. Gain exclusive access to events, mentorship programs, and a community that pushes you to grow.
                   </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                   <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-white/20 max-w-md">
                      <h3 className="text-2xl font-bold mb-4">Why Join?</h3>
                      <ul className="space-y-4 mb-8 text-zinc-200">
                         <li className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1">✓</span> Priority access to flagship events
                         </li>
                         <li className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1">✓</span> Networking with industry professionals
                         </li>
                         <li className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1">✓</span> Skill development workshops
                         </li>
                      </ul>
                      <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                         Apply for Membership
                      </button>
                   </div>
                </div>
             </div>
          </section>

          {/* Section 2: Volunteer Opportunities */}
          <section id="volunteer" className="group relative overflow-hidden rounded-2xl bg-neutral-100 text-zinc-900 min-h-[600px] flex items-center">
             {/* Background Image Placeholder (Right Side) */}
             <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-zinc-200">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-2xl font-bold tracking-widest opacity-20 rotate-45">
                   VOLUNTEER IMAGE
                </div>
             </div>
             
             <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-0">
                <div className="p-8 sm:p-16 lg:p-24 bg-white/90 backdrop-blur-sm lg:bg-transparent">
                   <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">CONTRIBUTE</span>
                   <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
                      Volunteer<br />Opportunities
                   </h2>
                   <div className="h-1 w-20 bg-blue-600 mb-8" />
                   <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-xl mb-8">
                      Give back to the community and gain hands-on experience. We are always looking for passionate individuals to help organize events, manage projects, and support our initiatives.
                   </p>
                   <a href="#" className="inline-flex items-center gap-3 text-zinc-900 font-bold tracking-wider hover:text-blue-600 transition-colors group/link">
                      VIEW OPEN POSITIONS
                      <div className="w-10 h-10 rounded-full border-2 border-zinc-900 flex items-center justify-center group-hover/link:border-blue-600 transition-colors">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                      </div>
                   </a>
                </div>
                <div className="hidden lg:block">
                   {/* Visual side handled by background */}
                </div>
             </div>
          </section>

          {/* Section 3: Open Recruitment */}
          <section id="open-recruitment" className="group relative overflow-hidden rounded-2xl bg-blue-900 text-white min-h-[600px] flex items-center">
             <div className="absolute inset-0 bg-blue-950 transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
             
             <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-16 lg:p-24 items-center">
                <div className="lg:col-span-7">
                   <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4 block">CAREERS</span>
                   <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
                      Open<br />Recruitment
                   </h2>
                   <div className="h-1 w-20 bg-white mb-8" />
                   <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
                      Ready to take a leadership role? We recruit for our Board of Management and specialized divisions annually. Join the team that drives StudentsxCEOs Jakarta forward.
                   </p>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                   <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group/card">
                      <div className="flex justify-between items-start mb-2">
                         <h4 className="text-xl font-bold">Board of Management</h4>
                         <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">Annual</span>
                      </div>
                      <p className="text-blue-200 text-sm mb-4">Lead strategic initiatives and manage core divisions.</p>
                      <span className="text-sm font-bold flex items-center gap-2 group-hover/card:gap-3 transition-all">Learn More →</span>
                   </div>
                   
                   <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group/card">
                      <div className="flex justify-between items-start mb-2">
                         <h4 className="text-xl font-bold">Project Officers</h4>
                         <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">Rolling</span>
                      </div>
                      <p className="text-blue-200 text-sm mb-4">Lead specific events and short-term projects.</p>
                      <span className="text-sm font-bold flex items-center gap-2 group-hover/card:gap-3 transition-all">Apply Now →</span>
                   </div>
                </div>
             </div>
          </section>
        </div>
      </div>
    </main>
  );
}
