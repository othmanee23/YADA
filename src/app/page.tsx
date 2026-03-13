import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <circle cx="6.4" cy="6.4" r="2.4" />
      <circle cx="6.4" cy="17.6" r="2.4" />
      <path d="M8.5 8.3 19.5 3.8" />
      <path d="M8.5 15.7 19.5 20.2" />
      <path d="M9 12h10.5" />
    </svg>
  );
}

function MirrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <ellipse cx="12" cy="9.5" rx="5.6" ry="6.2" />
      <path d="M10.2 16.1h3.6" />
      <path d="M9 19.2h6" />
      <path d="M10.5 21h3" />
    </svg>
  );
}

function ScissorsBrushIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 20.2 13.2 11" />
      <path d="M7.2 9.8 20 3.8" />
      <path d="M10.7 13.3 20 20.2" />
      <circle cx="5.6" cy="7.2" r="2" />
      <circle cx="9.2" cy="18.4" r="2" />
    </svg>
  );
}

const serviceItems = [
  {
    title: "Coupe Homme & Barbe",
    description: "Des coiffeurs experts pour sublimer votre style.",
    icon: <ScissorsIcon />,
  },
  {
    title: "Coiffure Femme",
    description: "Brushing, colorations, chignons et toutes vos envies coiffure.",
    icon: <MirrorIcon />,
  },
  {
    title: "À domicile ou en salon",
    description: "Choisissez votre confort : chez vous ou chez votre coiffeur.",
    icon: <ScissorsBrushIcon />,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <Navbar />
      </div>

      <main>
        <div className="mx-auto w-full max-w-7xl px-5 py-12">
          <section id="apropos" className="scroll-mt-28 py-16">
            <div className="relative overflow-hidden rounded-[2.4rem] border border-[#D4AF37]/28 bg-[#0e0a06] px-6 py-10 text-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:px-10 md:py-12">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(212,175,55,0.26),transparent_36%),radial-gradient(circle_at_86%_85%,rgba(255,255,255,0.1),transparent_30%)]"
                aria-hidden="true"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c57f]">
                    YADA Experience
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                    Une nouvelle façon de réserver votre coiffeur
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/86 md:text-lg">
                    Avec YADA, fini les appels interminables et les prises de rendez-vous compliquées.
                    Notre application connecte les clients et les coiffeurs professionnels en toute
                    simplicité. Que vous soyez un homme, une femme ou que vous cherchiez un service
                    mixte, trouvez le prestataire idéal selon vos besoins et disponibilités.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/a-propos"
                      className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-[#1b1408] transition-colors hover:bg-[#e5c55a]"
                    >
                      À propos de nous
                    </Link>
                    <a
                      href="#contact"
                      className="rounded-full border border-[#D4AF37]/45 bg-white/8 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/14"
                    >
                      Découvrir YADA
                    </a>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {serviceItems.map((item) => (
                      <article
                        key={item.title}
                        className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 p-4 transition-transform duration-300 ease-out hover:scale-[1.03]"
                      >
                        <span
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/14 text-[#e7c57f]"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-white/82">{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#D4AF37]/25 transition-transform duration-300 ease-out hover:scale-[1.02]">
                    <Image
                      src="/images/image5.jpg"
                      alt="Services coiffure YADA"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(8,8,10,0.08),rgba(8,8,10,0.66))]"
                      aria-hidden="true"
                    />
                    <span className="absolute left-5 top-5 rounded-full border border-[#D4AF37]/45 bg-black/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#f1d6a3]">
                      Élégance & Confort
                    </span>
                  </div>

                  <div className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#D4AF37]/25 transition-transform duration-300 ease-out hover:scale-[1.02]">
                    <Image
                      src="/images/image6.jpg"
                      alt="Nouvelle tendance coiffure YADA"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(8,8,10,0.12),rgba(8,8,10,0.62))]"
                      aria-hidden="true"
                    />
                    <span className="absolute left-5 top-5 rounded-full border border-[#D4AF37]/45 bg-black/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#f1d6a3]">
                      Style Signature
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <WhyChooseSection />

        <TestimonialsSection />

        <DownloadSection />

        <ContactSection />

        
      </main>

      <Footer />
    </>
  );
}
