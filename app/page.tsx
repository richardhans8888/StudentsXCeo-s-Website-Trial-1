export default function Home() {
  return (
    <main className="relative min-h-[50vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="hero-blur-bg">
          <span className="blob b1"></span>
          <span className="blob b2"></span>
          <span className="blob b3"></span>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
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
    </main>
  );
}
