import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(125deg,rgba(9,7,6,0.78),rgba(21,16,12,0.62),rgba(7,7,8,0.84))]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.23),transparent_45%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.12),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 pb-16 pt-28 md:px-10">
        <div className="w-full max-w-5xl px-2 text-center text-white md:px-0">
          <p className="relative -top-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#e7c57f] md:-top-4 md:text-sm">
            YADA Coiffure
          </p>
          <h1
            className={`${luxurySerif.className} mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] md:text-7xl`}
          >
            YADA – Votre coiffeur à portée de main
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-white/85 md:text-xl">
            Trouvez facilement un coiffeur ou une coiffeuse, à domicile ou en
            salon, pour hommes et femmes. Réservez en quelques clics et profitez
            d’une expérience coiffure unique.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] md:text-sm">
            <span className="rounded-full border border-[#d4af37]/45 bg-[#d4af37]/12 px-3 py-1.5 text-[#f1d6a3]">
              Creneaux en temps reel
            </span>
            <span className="rounded-full border border-[#d4af37]/45 bg-[#d4af37]/12 px-3 py-1.5 text-[#f1d6a3]">
              Avis clients reels
            </span>
            <span className="rounded-full border border-[#d4af37]/45 bg-[#d4af37]/12 px-3 py-1.5 text-[#f1d6a3]">
              Reservation express
            </span>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Entrez votre ville ou quartier"
              className="w-full rounded-full border border-white/22 bg-white/10 px-6 py-4 text-base text-white placeholder:text-white/65 focus:border-[#d4af37]/60 focus:outline-none"
            />
            <a
              href="#contact"
              className="rounded-full bg-[linear-gradient(135deg,#7E5132,#C2955A)] px-8 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-transform hover:scale-[1.02] sm:whitespace-nowrap"
            >
              Reserver maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
