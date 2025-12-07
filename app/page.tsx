import ScrollGradient from "../components/ScrollGradient";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative min-h-[50vh] w-full bg-black text-white overflow-hidden">
      <ScrollGradient />
      <ScrollReveal />
      <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0 hero-blur-bg">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center js-reveal">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              TOGETHER WE
            </h2>
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">REIMAGINE</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold live-x">x</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">LEADERSHIP</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="h-1 w-12 bg-blue-600 mb-5" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Creating leaders who move industries</h3>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl">
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
            <div className="max-w-2xl md:max-w-3xl">
              <div className="h-1 w-14 bg-blue-500 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base font-semibold tracking-wider text-zinc-700 mb-4 sm:mb-6">Discover who we are</p>
              <h3 className="mt-0 text-5xl sm:text-6xl font-bold text-zinc-900">About StudentsxCEOs Jakarta</h3>
              <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl">
                We are a leadership community that empowers top university students to learn directly from CEOs, founders, and industry professionals, creating a platform for growth, collaboration, and meaningful impact.
              </p>
              <a href="#find-out" className="mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-white text-black px-6 text-lg font-semibold hover:bg-white/90 transition-colors">Find out more</a>
            </div>
          </div>
          <div className="bg-white min-h-[520px] sm:min-h-[680px] js-reveal relative overflow-hidden">
            <img
              src="/About_us.jpg"
              alt="About StudentsxCEOs"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25 pointer-events-none" />
            <div className="absolute -top-10 -right-8 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-10 w-56 h-56 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />
            <div className="absolute top-6 left-6 h-12 w-[2px] bg-blue-500/60 z-10 pointer-events-none" />
            <div className="absolute top-6 left-6 h-[2px] w-12 bg-blue-500/60 z-10 pointer-events-none" />
            <div className="absolute bottom-6 right-6 h-12 w-[2px] bg-blue-500/60 z-10 pointer-events-none" />
            <div className="absolute bottom-6 right-6 h-[2px] w-12 bg-blue-500/60 z-10 pointer-events-none" />
          </div>
        </div>
      </section>
      <section className="relative z-20 mx-auto max-w-screen-2xl px-6 sm:px-8 py-14 sm:py-20">
        <div className="absolute inset-0 z-0 hero-blur-bg">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-md bg-blue-600 px-3 py-1 text-white text-sm font-semibold">School of Ideas</div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Offline event for high school students</h4>
              <p className="mt-2 text-sm text-white/80">Explore potential through personality tests and grow into future leaders with engaging talk shows and workshops.</p>
              <div className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold">April</div>
              <p className="mt-3 text-xs text-white/70">High School Students</p>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-md bg-blue-600 px-3 py-1 text-white text-sm font-semibold">SxCareer</div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Career preparation webinar</h4>
              <p className="mt-2 text-sm text-white/80">Focused on Consulting, Banking, FMCG, Media, Technology, and Startup plus impactful goal-setting sessions to empower future leaders.</p>
              <div className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold">April</div>
              <p className="mt-3 text-xs text-white/70">Active Students &amp; Fresh Graduates</p>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-md bg-blue-600 px-3 py-1 text-white text-sm font-semibold">SxCelerate</div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Bootcamp program</h4>
              <p className="mt-2 text-sm text-white/80">Two-month program including Forum, Mentoring, Company Visit, Case Competition, and Client Project.</p>
              <div className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold">May</div>
              <p className="mt-3 text-xs text-white/70">Active Students</p>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-md bg-blue-600 px-3 py-1 text-white text-sm font-semibold">Meet the Series</div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Big offline event series</h4>
              <p className="mt-2 text-sm text-white/80">Meet The CEO, Meet The Expert, and Meet Yourself — career insights, skills training, and leader perspectives.</p>
              <div className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold">July</div>
              <p className="mt-3 text-xs text-white/70">All Future Leaders</p>
          </div>
          </div>
          <div className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
            <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-md bg-blue-600 px-3 py-1 text-white text-sm font-semibold">SxConference</div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold">Dynamic leadership program</h4>
              <p className="mt-2 text-sm text-white/80">Unites alumni, young professionals, and industry leaders for insightful talk shows and engaging discussions.</p>
              <div className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold">August</div>
              <p className="mt-3 text-xs text-white/70">Alumni, External, Internal SxC Jakarta</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-20 w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-8">
          <div className="text-center js-reveal">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Company Partners</h2>
          </div>
          <div className="mt-8 relative overflow-hidden js-reveal">
            <div className="logo-marquee flex items-center gap-x-10">
              <img src="/Company_1.png" alt="Company 1" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_2.png" alt="Company 2" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_3.png" alt="Company 3" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_4.png" alt="Company 4" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_5.jpg" alt="Company 5" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_6.png" alt="Company 6" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_7.png" alt="Company 7" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_8.png" alt="Company 8" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_1.png" alt="Company 1 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_2.png" alt="Company 2 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_3.png" alt="Company 3 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_4.png" alt="Company 4 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_5.jpg" alt="Company 5 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_6.png" alt="Company 6 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_7.png" alt="Company 7 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/Company_8.png" alt="Company 8 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
            </div>
          </div>
          <div className="mt-10 flex justify-center js-reveal">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700">and many more</span>
          </div>
          <div className="mt-12 text-center js-reveal">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Media &amp; Community Partners</h2>
          </div>
          <div className="mt-8 relative overflow-hidden js-reveal">
            <div className="logo-marquee flex items-center gap-x-10">
              <img src="/MC_1.webp" alt="Media & Community 1" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_2.png" alt="Media & Community 2" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_3.png" alt="Media & Community 3" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_4.jpeg" alt="Media & Community 4" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_5.png" alt="Media & Community 5" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_6.jpg" alt="Media & Community 6" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_1.webp" alt="Media & Community 1 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_2.png" alt="Media & Community 2 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_3.png" alt="Media & Community 3 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_4.jpeg" alt="Media & Community 4 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_5.png" alt="Media & Community 5 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
              <img src="/MC_6.jpg" alt="Media & Community 6 duplicate" className="h-10 sm:h-12 w-28 object-contain" />
            </div>
          </div>
          <div className="mt-6 flex justify-center js-reveal">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700">and many more</span>
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
