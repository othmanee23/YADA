import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { AboutExperienceSection } from "@/components/AboutExperienceSection";
import { AboutStorySection } from "@/components/AboutStorySection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        <section className="relative min-h-[50svh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero2.jpg')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,6,6,0.82),rgba(18,14,11,0.66),rgba(6,6,7,0.82))]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.22),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_30%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto flex min-h-[50svh] w-full max-w-7xl items-center px-6 pb-12 pt-28 md:px-10 md:pb-14">
            <div className="max-w-4xl text-white">
              <div className="flex items-center gap-3 text-sm font-semibold text-white/78 md:text-base">
                <Link
                  href="/"
                  className="transition-colors hover:text-[#e7c57f]"
                >
                  Accueil
                </Link>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 text-[#e7c57f]"
                  aria-hidden="true"
                >
                  <path d="m7 4 6 6-6 6" />
                </svg>
                <span className="text-[#e7c57f]">A propos</span>
              </div>
              <h1
                className={`${luxurySerif.className} mt-6 text-5xl font-semibold leading-[0.92] md:text-7xl`}
              >
                A propos de YADA
              </h1>
            </div>
          </div>
        </section>

        <Navbar />
      </div>

      <main className="bg-white">
        <AboutExperienceSection />
        <AboutStorySection />

        <section className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
          <div className="overflow-hidden rounded-[2.6rem] bg-[#0d0906] px-7 py-10 text-white shadow-[0_26px_70px_rgba(0,0,0,0.18)] md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e7c57f]">
                  Rejoindre YADA
                </p>
                <h2
                  className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.96] md:text-5xl`}
                >
                  YADA réinvente la coiffure : moderne, personnalisée, à
                  domicile.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#telecharger"
                  className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-[#1b1408] transition-colors hover:bg-[#e5c55a]"
                >
                  Télécharger l’app
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/12"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
