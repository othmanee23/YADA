"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const processSteps = [
  {
    number: "01.",
    title: "Réservez un rendez-vous",
    description:
      "Choisissez votre service (coupe, brushing, coloration, barbe, etc.) et sélectionnez un coiffeur disponible près de chez vous.",
  },
  {
    number: "02.",
    title: "Consultez les disponibilités",
    description:
      "Accédez aux créneaux en temps réel et réservez l’horaire qui vous convient le mieux.",
  },
  {
    number: "03.",
    title: "Rencontrez votre coiffeur",
    description:
      "Le coiffeur se déplace chez vous ou vous accueille en salon selon votre choix. Vous bénéficiez d’une prestation professionnelle adaptée à vos besoins.",
  },
  {
    number: "04.",
    title: "Profitez de votre nouveau style",
    description:
      "Appréciez une coiffure réussie et laissez un avis pour aider la communauté à mieux choisir leurs coiffeurs.",
  },
];

export function ServicesProcessSection() {
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
      { threshold: 0.18 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(212,175,55,0.09),transparent_24%),radial-gradient(circle_at_86%_84%,rgba(126,81,50,0.06),transparent_22%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6d20]">
            Processus YADA
          </p>
          <h2
            className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.94] text-[#1f170d] md:text-6xl`}
          >
            Découvrez les étapes simples et rapides pour réserver votre coiffeur avec
            l’application YADA.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#4d4030] md:text-lg">
            En quelques clics, trouvez le bon professionnel, fixez votre rendez-vous et profitez
            d’une expérience coiffure sur mesure.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d4af37]/45 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`relative overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(145deg,#e8dcc5,#d8c09b)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] motion-reduce:transform-none motion-reduce:transition-none ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : index % 2 === 0
                      ? "translate-y-10 opacity-0"
                      : "translate-y-14 opacity-0"
                } ${index % 2 === 1 ? "lg:mt-12" : ""}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(212,175,55,0.12),transparent_30%)]"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex h-14 min-w-[4.3rem] items-center justify-center rounded-full border border-[#d4af37]/32 bg-[#fffaf0] text-lg font-extrabold tracking-[0.08em] text-[#7a5b17] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                    {step.number}
                  </span>
                  <span
                    className="mt-4 hidden h-px flex-1 bg-gradient-to-r from-[#d4af37]/35 to-transparent lg:block"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative mt-6 text-2xl font-semibold leading-tight text-[#1a1208]">
                  {step.title}
                </h3>
                <p className="relative mt-4 text-base leading-8 text-[#433424]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
