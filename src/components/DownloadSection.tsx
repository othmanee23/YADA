import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M16.7 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3.1-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.5 2.2-1.5 2.5-.4 6.2 1 8.1.7.9 1.5 1.9 2.6 1.9 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-.9 2.5-1.8.8-1.1 1.2-2.2 1.2-2.2-.1 0-1.9-.8-1.9-3.3Z" />
      <path d="M14.7 6.4c.6-.7 1.1-1.6 1-2.4-.9 0-1.9.6-2.5 1.3-.6.7-1.1 1.6-1 2.4 1 0 1.9-.5 2.5-1.3Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="m5.2 4.3 10.9 7.3L8.8 19a1.3 1.3 0 0 1-2-.9V5.4a1.3 1.3 0 0 1 2-.9Z" />
      <path
        d="m16.1 11.6 2.2 1.5c.7.5.7 1.5 0 2l-3.7 2.5-4.5-4 6-2Z"
        opacity=".72"
      />
      <path
        d="M14.6 5.9 18.3 8.4c.7.5.7 1.5 0 2l-2.2 1.2-6-2.1 4.5-3.6Z"
        opacity=".5"
      />
    </svg>
  );
}

function StoreButton({
  href,
  label,
  title,
  icon,
}: {
  href: string;
  label: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-2xl bg-[#111111] px-5 py-3 text-left text-white shadow-[0_18px_30px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
    >
      <span className="shrink-0">{icon}</span>
      <span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/64">
          {label}
        </span>
        <span className="block text-base font-semibold leading-none">
          {title}
        </span>
      </span>
    </a>
  );
}

export function DownloadSection() {
  return (
    <section
      id="telecharger"
      className="relative overflow-hidden bg-[#f7f4ec] text-[#132b1d]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(35,121,76,0.12),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(212,175,55,0.15),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(247,244,236,1))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 text-center md:min-h-[100svh] md:px-8 md:py-20">
        <h2
          className={`${luxurySerif.className} mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] md:text-7xl`}
        >
          <span className="mt-2 block text-[#8f6d20]">
            Téléchargez YADA et simplifiez votre coiffure !
          </span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#132b1d]/74 md:text-lg">
          Avec l’application YADA, trouvez et réservez votre coiffeur ou
          coiffeuse en quelques secondes. Disponible pour hommes, femmes et
          familles, à domicile ou en salon. Téléchargez dès maintenant et
          profitez d’une expérience coiffure simple et rapide.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <StoreButton
            href="https://apps.apple.com/gb/app/yada-coiffure/id6751081591"
            label="Télécharger sur"
            title="App Store"
            icon={<AppleIcon />}
          />
          <StoreButton
            href="https://play.google.com/store/apps/details?id=com.yada.yada&hl=fr"
            label="Disponible sur"
            title="Google Play"
            icon={<PlayIcon />}
          />
        </div>

        <div className="relative mt-24 hidden h-[390px] w-full max-w-5xl sm:h-[500px] md:block md:h-[620px]">
          <div className="absolute bottom-0 left-0 z-10 w-[30%] max-w-[240px] sm:left-[8%] md:left-[6%]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.6rem] border-[10px] border-[#111111] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <Image
                src="/images/download-mockup-left.webp"
                alt="Messagerie YADA sur mobile"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 30vw"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 w-[36%] max-w-[300px] -translate-x-1/2">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.8rem] border-[10px] border-[#111111] bg-white shadow-[0_28px_70px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/download-mockup-center.webp"
                alt="Accueil YADA sur mobile"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24vw, 36vw"
              />
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-10 w-[30%] max-w-[240px] sm:right-[8%] md:right-[6%]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.6rem] border-[10px] border-[#111111] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <Image
                src="/images/download-mockup-right.webp"
                alt="Conversation YADA sur mobile"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
