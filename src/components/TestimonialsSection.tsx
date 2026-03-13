"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const testimonials = [
  {
    quote:
      "Réservation rapide, créneau confirmé en quelques secondes et service impeccable du début à la fin.",
    author: "Sonia A.",
  },
  {
    quote:
      "Enfin une solution simple pour trouver un coiffeur disponible le soir sans passer des appels partout.",
    author: "Karim B.",
  },
  {
    quote:
      "J’ai réservé pour ma mère à domicile et l’expérience était vraiment fluide, rassurante et pro.",
    author: "Nadia R.",
  },
  {
    quote:
      "L’application m’a permis de comparer rapidement les disponibilités et choisir le bon coiffeur.",
    author: "Mehdi T.",
  },
  {
    quote:
      "Le paiement en cash directement au coiffeur est pratique, clair et sans complication inutile.",
    author: "Ines L.",
  },
  {
    quote:
      "Très bonne expérience pour toute la famille, avec des options adaptées pour hommes, femmes et enfants.",
    author: "Yasmine K.",
  },
];

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M9.2 8.2c-2 1.1-3.1 2.8-3.4 5.4h3.6v4.2H5.1c-.8-.9-1.2-2-1.2-3.5 0-3.3 1.9-6.1 5.3-7.9Z" />
      <path d="M19.4 8.2c-2 1.1-3.1 2.8-3.4 5.4h3.6v4.2h-4.3c-.8-.9-1.2-2-1.2-3.5 0-3.3 1.9-6.1 5.3-7.9Z" />
    </svg>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      { threshold: 0.18 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="temoignages"
      ref={sectionRef}
      className="relative min-h-[88svh] w-full overflow-hidden bg-[#030303] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(83,123,255,0.12),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.98),rgba(6,6,6,1))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-center px-5 py-24 md:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7ca4ff]">
            12K+ clients satisfaits
          </p>
          <h2
            className={`${luxurySerif.className} mt-6 text-5xl font-semibold leading-[0.94] text-white md:text-7xl`}
          >
            Ils adorent YADA
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
            Des retours clients simples, directs et positifs sur la rapidité de réservation et la
            qualité des prestations.
          </p>
        </div>

        <div className="mt-16 md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.author}
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`flex min-h-[178px] min-w-[84vw] snap-start items-start gap-4 rounded-[2.1rem] border border-[#d4af37]/18 bg-white/[0.1] px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/12 text-[#f3d79b]"
                  aria-hidden="true"
                >
                  <QuoteIcon />
                </span>
                <div>
                  <p className="text-base leading-7 text-white/90">
                    {testimonial.quote}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#7ca4ff]">
                    {testimonial.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredIndex === index;
            const isInactive = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <article
                key={testimonial.author}
                tabIndex={0}
                style={{ transitionDelay: `${index * 90}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className={`group flex min-h-[154px] items-start gap-4 rounded-[2.1rem] border border-white/10 bg-white/[0.08] px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] outline-none transition-all duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${
                  isHovered
                    ? "-translate-y-1.5 scale-[1.02] border-[#d4af37]/35 bg-white/[0.12]"
                    : ""
                } ${
                  isInactive ? "scale-[0.985] blur-[3px] opacity-45 saturate-50" : ""
                } focus-visible:border-[#d4af37]/45 focus-visible:bg-white/[0.12]`}
              >
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/12 text-[#f3d79b]"
                  aria-hidden="true"
                >
                  <QuoteIcon />
                </span>
                <div>
                  <p className="text-lg leading-8 text-white/90">
                    {testimonial.quote}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#7ca4ff]">
                    {testimonial.author}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
