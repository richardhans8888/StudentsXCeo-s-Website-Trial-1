"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".js-reveal"));
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-revealed", "true");
          } else {
            e.target.removeAttribute("data-revealed");
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.15 }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return null;
}
