import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | StudentsxCEOs Jakarta",
  description: "Collaborate with us. See our corporate, media, and community partners.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-32 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-zinc-900 mb-8">
            Our Partners
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We collaborate with leading companies and organizations to provide the best opportunities for our community. Together, we bridge the gap between students and industry leaders.
          </p>
        </div>

        {/* Corporate Partners */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-3xl sm:text-4xl font-serif text-blue-900">Corporate Partners</h2>
             <div className="h-[1px] flex-grow bg-zinc-200" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
             {/* Using placeholders for logos */}
             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={`corp-${i}`} className="aspect-[3/2] bg-neutral-50 flex items-center justify-center p-8 border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg rounded-lg group">
                   <div className="w-full h-full bg-zinc-200 relative overflow-hidden rounded-md">
                      {/* Logo Placeholder Visual */}
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-wider text-xs">
                         LOGO {i}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* Media Partners */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-3xl sm:text-4xl font-serif text-blue-900">Media Partners</h2>
             <div className="h-[1px] flex-grow bg-zinc-200" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`media-${i}`} className="aspect-[3/2] bg-neutral-50 flex items-center justify-center p-6 border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md rounded-lg">
                   <div className="w-full h-full bg-zinc-200 relative overflow-hidden rounded-md">
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-wider text-[10px]">
                         MEDIA {i}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* Community Partners */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-3xl sm:text-4xl font-serif text-blue-900">Community Partners</h2>
             <div className="h-[1px] flex-grow bg-zinc-200" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={`comm-${i}`} className="aspect-[3/2] bg-neutral-50 flex items-center justify-center p-6 border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md rounded-lg">
                   <div className="w-full h-full bg-zinc-200 relative overflow-hidden rounded-md">
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-wider text-[10px]">
                         COMMUNITY {i}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 rounded-2xl overflow-hidden relative">
           <div className="absolute inset-0 bg-[url('/api/pics/pattern.png')] opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800" />
           
           <div className="relative z-10 p-12 sm:p-20 text-center">
              <h2 className="text-4xl sm:text-5xl font-serif text-white mb-6">Partner With Us</h2>
              <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                 Interested in collaborating with StudentsxCEOs Jakarta? We are always open to new partnerships that bring value to our student community.
              </p>
              <a href="/contact" className="inline-block bg-white text-blue-900 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors">
                 Become a Partner
              </a>
           </div>
        </section>

      </div>
    </main>
  );
}
