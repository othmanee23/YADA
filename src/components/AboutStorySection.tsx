"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const storyMilestones = [
  {
    year: "2022",
    description: "Lancement de l’idée et étude des besoins du marché coiffure au Maroc.",
  },
  {
    year: "2023",
    description: "Développement de la plateforme et intégration des premiers coiffeurs partenaires.",
  },
  {
    year: "2024",
    description: "Mise en ligne de l’application YADA pour Android et iOS.",
  },
  {
    year: "2025",
    description:
      "Extension des services à un réseau mixte : hommes, femmes et coiffeurs familiaux disponibles en quelques clics.",
  },
];

export function AboutStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || hoveredMilestone !== null) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveMilestone((currentMilestone) => (currentMilestone + 1) % storyMilestones.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [hoveredMilestone, isVisible]);

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8 md:py-6">
      <div className="overflow-hidden rounded-[2.6rem] bg-[#0d0906] px-7 py-10 text-white shadow-[0_26px_70px_rgba(0,0,0,0.18)] md:px-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <div
            className={`lg:justify-self-start lg:self-center transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[320px] overflow-hidden rounded-[3rem] border-[10px] border-[#121212] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                <div
                  className="pointer-events-none absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-[#121212]"
                  aria-hidden="true"
                />
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.55rem] bg-black">
                  <video
                    className="h-full w-full object-cover"
                    src="/images/yada-story.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e7c57f]">
              Notre histoire
            </p>
            <h2
              className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.96] md:text-5xl`}
            >
              L’histoire de YADA
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-white/80 md:text-lg">
              <p>
                YADA est née d’une idée simple : rendre la coiffure plus accessible et mieux
                connectée aux besoins d’aujourd’hui.
              </p>
              <p>
                Nous avons développé une plateforme intuitive qui rapproche les coiffeurs de leurs
                clients, tout en offrant à chaque utilisateur un gain de temps et une meilleure
                expérience.
              </p>
            </div>

            <div className="relative mt-10 pl-6">
              <div
                className="pointer-events-none absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/60 to-transparent"
                aria-hidden="true"
              />
              <div
                className={`pointer-events-none absolute bottom-3 left-[11px] top-3 w-px origin-top bg-gradient-to-b from-[#f4dd9c] via-[#d4af37] to-transparent ${
                  isVisible ? "timeline-progress-grow" : "scale-y-0 opacity-0"
                }`}
                aria-hidden="true"
              />
              <div className="space-y-5">
                {storyMilestones.map((item, index) => {
                  const isActive = (hoveredMilestone ?? activeMilestone) === index;

                  return (
                    <article
                      key={item.year}
                      tabIndex={0}
                      style={{ transitionDelay: `${index * 120}ms` }}
                      onMouseEnter={() => setHoveredMilestone(index)}
                      onMouseLeave={() => setHoveredMilestone(null)}
                      onFocus={() => setHoveredMilestone(index)}
                      onBlur={() => setHoveredMilestone(null)}
                      className={`relative origin-left cursor-pointer overflow-hidden rounded-[1.6rem] border px-5 py-5 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                        isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                      } ${
                        isActive
                          ? "timeline-card-sheen border-[#d4af37]/35 bg-white/[0.09] shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
                          : "border-white/10 bg-white/[0.04]"
                      } hover:-translate-y-1.5 hover:border-[#f4dd9c]/40 hover:bg-white/[0.08] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] focus-visible:-translate-y-1.5 focus-visible:border-[#f4dd9c]/40 focus-visible:bg-white/[0.08] focus-visible:shadow-[0_20px_45px_rgba(0,0,0,0.18)] focus-visible:outline-none`}
                    >
                      <span
                        className={`absolute left-[-22px] top-6 inline-flex h-5 w-5 items-center justify-center rounded-full border bg-[#0d0906] transition-all duration-500 ${
                          isActive
                            ? "timeline-node-pulse border-[#f4dd9c]"
                            : "border-[#d4af37]/55"
                        }`}
                        aria-hidden="true"
                      >
                        <span
                          className={`rounded-full bg-[#d4af37] transition-all duration-500 ${
                            isActive ? "h-2.5 w-2.5" : "h-2 w-2"
                          }`}
                        />
                      </span>
                      <p
                        className={`text-sm font-extrabold uppercase tracking-[0.18em] transition-colors duration-500 ${
                          isActive ? "text-[#f4dd9c]" : "text-[#e7c57f]"
                        }`}
                      >
                        {item.year}
                      </p>
                      <p
                        className={`mt-3 text-sm leading-7 transition-colors duration-500 md:text-base ${
                          isActive ? "text-white/90" : "text-white/76"
                        }`}
                      >
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
