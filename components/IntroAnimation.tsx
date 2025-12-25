"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [stage, setStage] = useState<"init" | "x" | "expand" | "fadeout" | "hidden">("init");
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem("sxc_intro_seen");
    if (hasSeenIntro) {
      setStage("hidden");
      return;
    }

    setShouldRender(true);
    
    // Start animation sequence
    const timers = [
      setTimeout(() => setStage("x"), 100),
      setTimeout(() => setStage("expand"), 1200),
      setTimeout(() => setStage("fadeout"), 3200),
      setTimeout(() => {
        setStage("hidden");
        setShouldRender(false);
        sessionStorage.setItem("sxc_intro_seen", "true");
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!shouldRender || stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000 ${
        stage === "fadeout" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Left Text: STUDENTS */}
        <div
          className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            stage === "expand" || stage === "fadeout" ? "w-[240px] opacity-100" : "w-0 opacity-0"
          }`}
        >
          <span className="block text-4xl sm:text-6xl font-bold tracking-[0.2em] text-black whitespace-nowrap text-right pr-4">
            STUDENTS
          </span>
        </div>

        {/* Center X */}
        <div
          className={`transform transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            stage === "init" ? "scale-0 opacity-0 rotate-[-45deg]" : "scale-100 opacity-100 rotate-0"
          }`}
        >
          <span className="block text-5xl sm:text-7xl font-bold text-blue-600 mx-2">
            X
          </span>
        </div>

        {/* Right Text: CEOS */}
        <div
          className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            stage === "expand" || stage === "fadeout" ? "w-[160px] opacity-100" : "w-0 opacity-0"
          }`}
        >
          <span className="block text-4xl sm:text-6xl font-bold tracking-[0.2em] text-black whitespace-nowrap pl-4">
            CEOS
          </span>
        </div>
      </div>
    </div>
  );
}
