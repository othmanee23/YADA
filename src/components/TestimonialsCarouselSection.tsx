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

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m14.5 5.5-6 6 6 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m9.5 5.5 6 6-6 6" />
    </svg>
  );
}

function getWrappedIndex(index: number) {
  return (index + testimonials.length) % testimonials.length;
}

export function TestimonialsCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => getWrappedIndex(current + 1));
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousIndex = getWrappedIndex(activeIndex - 1);
  const nextIndex = getWrappedIndex(activeIndex + 1);

  const visibleCards = [
    { testimonial: testimonials[previousIndex], position: "left" as const, key: previousIndex },
    { testimonial: testimonials[activeIndex], position: "center" as const, key: activeIndex },
    { testimonial: testimonials[nextIndex], position: "right" as const, key: nextIndex },
  ];

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;

    if (Math.abs(deltaX) > 48) {
      setActiveIndex((current) =>
        getWrappedIndex(deltaX < 0 ? current + 1 : current - 1)
      );
    }

    touchStartX.current = null;
  };

  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-[#030303] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(83,123,255,0.12),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.98),rgba(6,6,6,1))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[82svh] w-full max-w-7xl flex-col justify-center px-5 py-24 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7ca4ff]">
            Témoignages YADA
          </p>
          <h2
            className={`${luxurySerif.className} mt-6 text-5xl font-semibold leading-[0.94] text-white md:text-7xl`}
          >
            Ils adorent YADA
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
            Découvrez quelques avis clients et faites défiler les retours pour voir d’autres
            expériences.
          </p>
        </div>

        <div className="mt-16">
          <div
            className="md:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <article className="flex min-h-[240px] select-none items-start gap-4 rounded-[2rem] border border-[#d4af37]/35 bg-white/[0.12] px-5 py-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] touch-pan-y transition-all duration-500 ease-out">
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/12 text-[#f3d79b]"
                aria-hidden="true"
              >
                <QuoteIcon />
              </span>
              <div>
                <p className="text-base leading-7 text-white/92">
                  {testimonials[activeIndex]?.quote}
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#7ca4ff]">
                  {testimonials[activeIndex]?.author}
                </p>
              </div>
            </article>
          </div>

          <div className="hidden grid-cols-[0.72fr_1fr_0.72fr] items-center gap-3 md:grid md:gap-6">
            {visibleCards.map(({ testimonial, position, key }) => {
              const isCenter = position === "center";

              return (
                <article
                  key={`${position}-${key}`}
                  className={`flex min-h-[220px] items-start gap-4 rounded-[2rem] border px-4 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-500 ease-out md:px-6 ${
                    isCenter
                      ? "border-[#d4af37]/35 bg-white/[0.12] text-white"
                      : "border-white/8 bg-white/[0.05] text-white/70 blur-[3px] opacity-55 saturate-50"
                  }`}
                >
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                      isCenter
                        ? "border-[#d4af37]/40 bg-[#d4af37]/12 text-[#f3d79b]"
                        : "border-white/10 bg-white/[0.06] text-white/55"
                    }`}
                    aria-hidden="true"
                  >
                    <QuoteIcon />
                  </span>
                  <div>
                    <p className={`text-base leading-7 md:text-lg ${isCenter ? "text-white/92" : ""}`}>
                      {testimonial.quote}
                    </p>
                    <p
                      className={`mt-5 text-sm font-semibold uppercase tracking-[0.16em] ${
                        isCenter ? "text-[#7ca4ff]" : "text-white/45"
                      }`}
                    >
                      {testimonial.author}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => getWrappedIndex(current - 1))}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] text-white transition-all duration-300 hover:border-[#d4af37]/35 hover:bg-white/[0.12] hover:text-[#f3d79b]"
              aria-label="Témoignage précédent"
            >
              <ArrowLeftIcon />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Afficher le témoignage ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-[#d4af37]" : "w-2.5 bg-white/28"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex((current) => getWrappedIndex(current + 1))}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] text-white transition-all duration-300 hover:border-[#d4af37]/35 hover:bg-white/[0.12] hover:text-[#f3d79b]"
              aria-label="Témoignage suivant"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
