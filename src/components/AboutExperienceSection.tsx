"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const experienceImages = [
  {
    src: "/images/about-experience-1.webp",
    alt: "Expérience coiffure YADA 1",
  },
  {
    src: "/images/about-experience-2.webp",
    alt: "Expérience coiffure YADA 2",
  },
  {
    src: "/images/about-experience-3.webp",
    alt: "Expérience coiffure YADA 3",
  },
  {
    src: "/images/about-experience-4.webp",
    alt: "Expérience coiffure YADA 4",
  },
];

export function AboutExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % experienceImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="overflow-hidden rounded-[2.8rem] border border-[#d4af37]/18 bg-[#faf6ee] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2.1rem] bg-[#e8dfd0] shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              {experienceImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className={`object-cover transition-all duration-700 ease-out ${
                    index === activeIndex ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2.5">
              {experienceImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Afficher l'image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-[#b98c2c]" : "w-2.5 bg-[#d8c6a0]"
                  }`}
                />
              ))}
            </div>

            <blockquote className="mt-6 rounded-[1.8rem] border border-[#d4af37]/18 bg-white px-5 py-5 text-base leading-8 text-[#4d4030] shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              « Votre application de mise en relation entre clients et coiffeurs, pour une
              expérience moderne et accessible à tous. »
            </blockquote>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6d20]">
              YADA Experience
            </p>
            <h2
              className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.94] text-[#1f170d] md:text-5xl`}
            >
              Une expérience coiffure unique, pour tous
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#4d4030] md:text-lg">
              <p>
                Chez YADA, nous croyons que se coiffer doit être simple, rapide et agréable.
                Notre application réinvente la façon dont les hommes et les femmes réservent
                leurs prestations coiffure.
              </p>
              <p>
                En quelques clics, vous trouvez un professionnel disponible, que ce soit pour
                une coupe, une coloration, un brushing ou un entretien de barbe.
              </p>
              <p>
                Notre mission est claire : vous offrir un service de qualité, où que vous soyez,
                en salon ou à domicile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
