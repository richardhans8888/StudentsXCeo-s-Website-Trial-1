import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | StudentsxCEOs Jakarta",
  description: "Learn about the StudentsxCEOs Jakarta DNA, our values, and our history.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* 1. HERO SECTION */}
      {/* Inspired by Image 1: Car hero with "ABOUT US" centered */}
      <section className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden">
        {/* Background Image - using a placeholder for now, user can replace */}
        <div className="absolute inset-0 bg-neutral-900">
           {/* Placeholder for "dark car image" - using a dark gradient overlay on a generic business/leadership background if available, or just dark color for now */}
           <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800" />
           {/* We can use an existing image or a placeholder URL if needed. For now, a dark solid bg works to match the 'dark car' vibe text contrast. 
               Ideally, we would load a real image here. Let's use a pattern or just the dark bg. */}
        </div>
        
        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-widest text-white uppercase text-center px-4 animate-in fade-in zoom-in duration-1000 ease-out fill-mode-forwards opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            About Us
          </h1>
        </div>
      </section>

      {/* 2. INTRO / DNA SECTION */}
      {/* Inspired by Image 1 content: "FERRARI DNA" style label and centered paragraph */}
      <section className="py-20 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-blue-600 font-bold text-xl sm:text-2xl">1</span>
          <div className="h-[1px] w-12 bg-blue-600" />
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm sm:text-base">SXC DNA</span>
        </div>
        
        <p className="text-xl sm:text-3xl md:text-4xl leading-relaxed font-normal text-zinc-800 max-w-5xl mx-auto">
          Born of the spirit of leadership, StudentsxCEOs epitomises the power of a lifelong passion and the beauty of limitless human achievement, creating timeless icons for a changing world.
        </p>
      </section>

      {/* 3. VALUES SECTION */}
      {/* Inspired by Image 2: "OUR VALUES" heading and 3-column layout */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-zinc-900">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {/* Column 1: Individual and Team */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative group">
               {/* Image placeholder - "Pit crew" equivalent */}
               <div className="absolute inset-0 bg-zinc-200 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="text-2xl font-bold uppercase leading-tight mt-2">
              Individual<br />and Team
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Our talented individuals are our greatest resource. However, they can only pursue the extraordinary by working together as a team. By fostering integrity, excellence and generosity, we give each of our people the possibility to express their own full potential – and be part of something greater.
            </p>
          </div>

          {/* Column 2: Tradition and Innovation */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative group">
               {/* Image placeholder - "Engine" equivalent */}
               <div className="absolute inset-0 bg-zinc-300 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="text-2xl font-bold uppercase leading-tight mt-2">
              Tradition and<br />Innovation
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Tradition and innovation drive each other. The ongoing quest for lasting firsts is what fuels the SxC legend. Our ability to combine revolutionary technological solutions with exceptional artisanal craftsmanship is what enables us to create icons that stay timeless in a fast-changing world.
            </p>
          </div>

          {/* Column 3: Passion and Achievement */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative group">
               {/* Image placeholder - "Crowd/Flag" equivalent */}
               <div className="absolute inset-0 bg-zinc-400 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="text-2xl font-bold uppercase leading-tight mt-2">
              Passion and<br />Achievement
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              SxC's spirit lives on in emotions that transcend the road and the track, ultimately becoming an authentic attitude towards life. Nothing excites us more than setting ambitious targets and expectations – and then exceeding them, to push every boundary. It is how the power of passion becomes the beauty of achievement.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HISTORY SPLIT SECTION */}
      {/* Inspired by Image 3: Split dark/light layout with "THE FOUNDATION..." */}
      <section className="w-full flex flex-col md:flex-row min-h-[600px] md:h-[80vh]">
        {/* Left Dark Panel */}
        <div className="w-full md:w-1/2 bg-[#111] text-white p-12 sm:p-20 flex flex-col justify-center relative">
          {/* Top small label */}
          <div className="absolute top-12 left-12 sm:left-20 flex items-center gap-4">
             <span className="text-blue-600 font-bold text-lg">3</span>
             <div className="h-[1px] w-12 bg-blue-600" />
             <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">HISTORY</span>
          </div>

          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight mb-8">
              The Foundation<br />of the SxC<br />Brand
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-12">
              Our story officially begins in 2010 when the first chapter was established, creating a bridge between students and CEOs. It marked the start of a journey to empower future leaders through direct mentorship and real-world exposure.
            </p>
            
            <a href="#" className="inline-flex items-center gap-3 text-white font-bold tracking-wider hover:text-blue-500 transition-colors group">
              DISCOVER MORE
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <svg className="w-3 h-3 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="w-full md:w-1/2 bg-neutral-200 relative overflow-hidden">
          {/* Placeholder for vintage car/history image */}
          <div className="absolute inset-0 bg-[url('/api/pics/history_placeholder.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
           {/* Fallback color if image missing */}
           <div className="absolute inset-0 bg-zinc-300 mix-blend-multiply" />
        </div>
      </section>
    </main>
  );
}
