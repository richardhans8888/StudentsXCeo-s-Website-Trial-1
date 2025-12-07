import ScrollGradient from "../components/ScrollGradient";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative min-h-[50vh] w-full bg-black text-white overflow-hidden">
      <ScrollGradient />
      <ScrollReveal />
      <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 min-h-[50vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center js-reveal">
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
          <div className="bg-blue-50 text-zinc-900 px-6 sm:px-12 min-h-[520px] sm:min-h-[680px] flex items-center js-reveal">
            <div className="max-w-xl">
              <div className="h-1 w-14 bg-blue-500 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base font-semibold tracking-wider text-zinc-700 mb-4 sm:mb-6">Explore how we help future leaders</p>
              <h3 className="mt-0 text-5xl sm:text-6xl font-bold text-zinc-900">Fit for Growth</h3>
              <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-md">
                Our programs help transform how students lead and operate while building the capacity to invest in growth.
              </p>
              <a href="#find-out" className="mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-white text-black px-6 text-lg font-semibold hover:bg-white/90 transition-colors">Find out more</a>
            </div>
          </div>
          <div className="bg-white min-h-[520px] sm:min-h-[680px] js-reveal" />
        </div>
      </section>
      <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center js-reveal">
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-blue-600 mb-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our Programs</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            We offer programs centering around soft skills education for university students,
            from short events to dedicated training and scholarship opportunities.
          </p>
        </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Gandeng Scholarship</h4>
              <p className="mt-2 text-sm text-white/80">Financial assistance and mentorship to exceptional mentees.</p>
              <a href="#" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold hover:bg-blue-500">Learn More</a>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Consulting</h4>
              <p className="mt-2 text-sm text-white/80">Hands-on learning with courses and real client projects.</p>
              <a href="#" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold hover:bg-blue-500">Learn More</a>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow_hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Connect & Empower</h4>
              <p className="mt-2 text-sm text-white/80">Networking events connecting young professionals and leaders.</p>
              <a href="#" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold hover:bg-blue-500">Learn More</a>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Business Case Competition</h4>
              <p className="mt-2 text-sm text-white/80">Tackle complex problems and sharpen strategic thinking.</p>
              <a href="#" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold hover:bg-blue-500">Learn More</a>
          </div>
          </div>
        </div>
      </section>
      <section className="relative z-20 w-full bg-zinc-50 py-14 sm:py-20">
        <div className="mx-auto max-w-none px-6 sm:px-8 lg:px-12">
          <div className="text-center js-reveal">
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-blue-600 mb-4" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">Our Latest News</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Holiday shopping 2025</h4>
            </div>
          </a>

          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Growth in the age of AI</h4>
            </div>
          </a>

          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Destination net zero 2025</h4>
            </div>
          </a>

          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Accelerating human‑AI collaboration</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">AI and your operating model</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Sovereign AI: managing risk to growth</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Strengthen your cyber defenses</h4>
            </div>
          </a>
          <a href="#" className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs font-semibold tracking-wider text-white/80">RESEARCH REPORT</span>
              <h4 className="mt-2 text-lg sm:text-xl font-semibold">Reimagining public services</h4>
            </div>
          </a>
          </div>
        </div>
      </section>
    </main>
  );
}
