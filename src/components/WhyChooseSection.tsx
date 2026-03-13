"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
      <path d="M8 11h6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5v5l3.2 2.2" />
      <path d="M8 3.8 6.3 5.5" />
      <path d="m17.7 5.5-1.7-1.7" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M4.8 8.2h12.9a1.8 1.8 0 0 1 1.8 1.8v5.8a1.8 1.8 0 0 1-1.8 1.8H6.6a1.8 1.8 0 0 1-1.8-1.8V10a1.8 1.8 0 0 1 1.8-1.8H19" />
      <path d="M4.8 9.2V7.4a1.8 1.8 0 0 1 1.8-1.8H17" />
      <circle cx="16.2" cy="12.9" r="1" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <circle cx="8.2" cy="8.6" r="2.8" />
      <circle cx="16.2" cy="8" r="2.3" />
      <path d="M4.3 18a4.7 4.7 0 0 1 7.8-2.9" />
      <path d="M13 17.7a4.1 4.1 0 0 1 6.3-2.8" />
    </svg>
  );
}

const reasons = [
  {
    title: "Recherche facile",
    description: "Trouvez un coiffeur selon la localisation et le service souhaité.",
    icon: <SearchIcon />,
  },
  {
    title: "Disponibilités en temps réel",
    description: "Réservez quand vous voulez.",
    icon: <ClockIcon />,
  },
  {
    title: "Paiement flexible",
    description: "Cash directement au coiffeur.",
    icon: <WalletIcon />,
  },
  {
    title: "Pour tous",
    description: "Hommes, femmes, enfants, coiffeurs mixtes disponibles.",
    icon: <PeopleIcon />,
  },
];

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.22 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pourquoi-yada"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0c0906] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(145deg,rgba(11,8,6,0.94),rgba(19,13,8,0.98),rgba(8,8,8,0.98))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[52%] hidden w-px bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div
          className={`max-w-2xl transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e7c57f]">
            Pourquoi YADA
          </p>
          <h2
            className={`${luxurySerif.className} mt-5 text-4xl font-semibold leading-[0.94] md:text-6xl`}
          >
            Pourquoi choisir YADA?
          </h2>
          <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
            Avec YADA, trouvez facilement un coiffeur ou une coiffeuse disponible près de chez
            vous. Notre application simplifie la réservation, vous fait gagner du temps et vous
            garantit une expérience coiffure de qualité, que ce soit à domicile ou en salon.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[#d4af37]/35 motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(212,175,55,0.16),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/12 text-[#f1d6a3]"
                aria-hidden="true"
              >
                {reason.icon}
              </span>
              <h3 className="relative mt-6 text-xl font-semibold text-white">{reason.title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-white/76 md:text-base">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
