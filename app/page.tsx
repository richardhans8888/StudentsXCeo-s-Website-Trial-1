import ScrollGradient from "../components/ScrollGradient";

export default function Home() {
  return (
    <main className="relative min-h-[50vh] w-full bg-black text-white overflow-hidden">
      <ScrollGradient />
      <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 min-h-[50vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              TOGETHER WE
            </h2>
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">REIMAGINE</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-600">x</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">LEADERSHIP</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="h-1 w-12 bg-blue-600 mb-5" />
            <h3 className="text-xl sm:text-2xl font-semibold">Creating leaders who move industries</h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-md">
              StudentsxCEOs Jakarta equips future changemakers with the skills, mindset, and opportunities to create meaningful impact.
            </p>
            <a href="#learn-more" className="mt-6 inline-flex items-center gap-2 text-white font-medium">
              See what we do
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-blue-600 text-[12px] leading-none">&gt;</span>
            </a>
          </div>
        </div>
      </section>
      <section className="relative z-20 w-full px-0 py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-50 text-zinc-900 px-6 sm:px-12 min-h-[520px] sm:min-h-[680px] flex items-center">
            <div className="max-w-xl">
              <div className="h-1 w-14 bg-blue-500 mb-6" />
              <p className="text-sm sm:text-base font-semibold tracking-wider text-zinc-700 mb-8 sm:mb-12">Explore how we help future leaders</p>
              <h3 className="mt-0 text-4xl sm:text-5xl font-bold text-zinc-900">Fit for Growth</h3>
              <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-md">
                Our programs help transform how students lead and operate while building the capacity to invest in growth.
              </p>
              <a href="#find-out" className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-white text-black px-5 text-base font-semibold hover:bg-white/90 transition-colors">Find out more</a>
            </div>
          </div>
          <div className="bg-white min-h-[520px] sm:min-h-[680px]" />
        </div>
      </section>
      <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Holiday shopping 2025</h4>
            </div>
          </a>

          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Growth in the age of AI</h4>
            </div>
          </a>

          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Destination net zero 2025</h4>
            </div>
          </a>

          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Accelerating human‑AI collaboration</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">AI and your operating model</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Sovereign AI: managing risk to growth</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Strengthen your cyber defenses</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[300px] sm:h-[360px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Reimagining public services</h4>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
