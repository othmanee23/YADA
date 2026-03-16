import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { ContactForm } from "./ContactForm";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type ContactSectionProps = {
  showInfoPanel?: boolean;
};

export function ContactSection({ showInfoPanel = false }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-white px-5 py-16 md:px-8 md:py-20">
      <div className={`mx-auto w-full ${showInfoPanel ? "max-w-[1440px]" : "max-w-7xl"}`}>
        <div
          className={`overflow-hidden rounded-[2.8rem] border border-[#d4af37]/22 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.08)] lg:grid ${
            showInfoPanel ? "lg:grid-cols-[0.78fr_1.22fr]" : "lg:grid-cols-[0.92fr_1.08fr]"
          }`}
        >
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/contact-showcase.webp"
              alt="Présentation YADA coiffure"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.08),rgba(16,12,10,0.22))]"
              aria-hidden="true"
            />
          </div>

          <div className="px-6 py-8 text-[#1f170d] sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12">
            <div
              className={
                showInfoPanel
                  ? "xl:grid xl:grid-cols-[minmax(0,1fr)_220px] xl:items-start xl:gap-8"
                  : ""
              }
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6d20]">
                  Contactez-nous
                </p>
                <h2
                  className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.94] text-[#1c140a] md:text-5xl`}
                >
                  Votre coiffure en un clic !
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d4030] md:text-lg">
                  Envie d&apos;en savoir plus sur YADA ? Écrivez-nous, nous serons ravis d&apos;échanger
                  avec vous.
                </p>

                <ContactForm />
              </div>

              {showInfoPanel ? (
                <aside className="mt-8 h-fit self-start rounded-[2rem] border border-[#d4af37]/18 bg-[#faf6ee] p-6 text-[#1f170d] shadow-[0_18px_40px_rgba(0,0,0,0.05)] xl:mt-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6d20]">
                      Email
                    </p>
                    <a
                      href="mailto:Contact@yada.ma"
                      className="mt-3 block text-lg font-semibold text-[#1c140a] transition-colors hover:text-[#8f6d20]"
                    >
                      Contact@yada.ma
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#d4af37]/16 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6d20]">
                      Téléphone
                    </p>
                    <a
                      href="tel:0666484770"
                      className="mt-3 block text-lg font-semibold text-[#1c140a] transition-colors hover:text-[#8f6d20]"
                    >
                      06 66 48 47 70
                    </a>
                  </div>
                </aside>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
