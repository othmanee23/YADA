import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <section className="relative min-h-[50svh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/contact-showcase.webp')" }}
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
                <Link href="/" className="transition-colors hover:text-[#e7c57f]">
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
                <span className="text-[#e7c57f]">Contact</span>
              </div>
              <h1
                className={`${luxurySerif.className} mt-6 text-5xl font-semibold leading-[0.92] md:text-7xl`}
              >
                Contact
              </h1>
            </div>
          </div>
        </section>

        <Navbar />
      </div>

      <main className="bg-white">
        <ContactSection showInfoPanel />
      </main>

      <Footer />
    </>
  );
}
