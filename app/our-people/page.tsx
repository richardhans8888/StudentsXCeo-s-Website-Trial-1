import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our People | StudentsxCEOs Jakarta",
  description: "Meet the Board of Management and Board Members of StudentsxCEOs Jakarta.",
};

export default function OurPeoplePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-32 pb-20">
      <section className="px-6 sm:px-12 max-w-[1400px] mx-auto">
        <h1 className="text-5xl sm:text-6xl font-serif mb-20 text-zinc-900">Our People</h1>

        {/* Board of Executive */}
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl font-serif mb-12 text-zinc-900">Board of Executive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col group">
                {/* Image Placement */}
                <div className="aspect-[3/4] bg-neutral-100 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                  {/* Placeholder text for visual debugging */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">PHOTO</div>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Name Surname</h3>
                <p className="text-sm text-zinc-600 mt-1">Executive Position</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Management */}
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl font-serif mb-12 text-zinc-900">Board of Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col group">
                {/* Image Placement */}
                <div className="aspect-[3/4] bg-neutral-100 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                  {/* Placeholder text for visual debugging */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">PHOTO</div>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Name Surname</h3>
                <p className="text-sm text-zinc-600 mt-1">Global Head of Department</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board Members */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-serif mb-12 text-zinc-900">Board Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col border-t border-black/10 pt-4">
                <h3 className="text-lg font-bold text-zinc-900">Board Member Name</h3>
                <p className="text-sm text-zinc-600 mt-1">Chairman & CEO, Company Name</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
