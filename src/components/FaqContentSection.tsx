import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const faqGroups = [
  {
    title: "Questions générales",
    items: [
      {
        question: "Quels services propose YADA ?",
        answer:
          "YADA met en relation les clients et les coiffeurs pour une large gamme de prestations : coupes hommes et femmes, brushing, coloration, soins capillaires, chignons, entretien de barbe et coiffure pour enfants.",
      },
      {
        question: "Ai-je besoin d’un rendez-vous pour utiliser YADA ?",
        answer:
          "Oui, l’application fonctionne uniquement sur réservation. Vous choisissez votre créneau disponible directement depuis l’application.",
      },
      {
        question: "Combien coûte une prestation ?",
        answer:
          "Les tarifs sont fixés par chaque coiffeur partenaire et affichés dans l’application avant la confirmation de la réservation. Vous savez exactement combien vous allez payer.",
      },
      {
        question: "YADA est-elle réservée uniquement aux hommes ?",
        answer:
          "Non, YADA est une application mixte : hommes, femmes et enfants peuvent réserver leur coiffeur en toute simplicité.",
      },
    ],
  },
  {
    title: "Questions sur les paiements",
    items: [
      {
        question: "Comment puis-je payer ma prestation ?",
        answer:
          "Le paiement se fait directement en espèces (cash) auprès du coiffeur, à domicile ou en salon.",
      },
      {
        question: "Les coiffeurs doivent-ils payer pour utiliser YADA ?",
        answer:
          "Oui, les coiffeurs partenaires rechargent leur compte en ligne afin d’accéder aux offres et aux clients disponibles sur l’application.",
      },
      {
        question: "Les recharges de compte sont-elles remboursables ?",
        answer:
          "Non, toute recharge donne accès immédiatement aux services numériques de YADA et ne peut pas être remboursée.",
      },
    ],
  },
  {
    title: "Autres questions",
    items: [
      {
        question: "Puis-je choisir mon coiffeur préféré ?",
        answer:
          "Oui, vous pouvez consulter les profils, les notes et avis des coiffeurs avant de réserver.",
      },
      {
        question: "Puis-je réserver pour un proche (famille, ami) ?",
        answer:
          "Absolument, il suffit d’indiquer le nom de la personne lors de la réservation.",
      },
      {
        question: "Où puis-je télécharger l’application YADA ?",
        answer: "YADA est disponible gratuitement sur Google Play et App Store.",
      },
    ],
  },
];

export function FaqContentSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6d20]">
            Questions fréquemment posées
          </p>
          <h2
            className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.94] text-[#1f170d] md:text-5xl`}
          >
            Questions fréquemment posées
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#4d4030] md:text-lg">
            Retrouvez ici les réponses aux questions les plus courantes sur l’application YADA. Si
            vous ne trouvez pas ce que vous cherchez, n’hésitez pas à nous contacter.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[linear-gradient(135deg,#a87a22,#d4af37)] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-[#1b1408] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
          >
            Contactez-nous
          </Link>
        </div>

        <div className="space-y-10">
          {faqGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-[2.3rem] border border-[#d4af37]/16 bg-[#faf6ee] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-8"
            >
              <h3
                className={`${luxurySerif.className} text-3xl font-semibold leading-tight text-[#1f170d] md:text-4xl`}
              >
                {group.title}
              </h3>

              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <article
                    key={item.question}
                    className="group rounded-[1.7rem] border border-[#d4af37]/14 bg-white px-5 py-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#d4af37]/26 hover:shadow-[0_16px_34px_rgba(0,0,0,0.06)] focus-within:border-[#d4af37]/26 focus-within:shadow-[0_16px_34px_rgba(0,0,0,0.06)]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 text-left outline-none"
                    >
                      <h4 className="text-lg font-semibold leading-7 text-[#1f170d] md:text-xl">
                        {item.question}
                      </h4>
                      <span
                        className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/18 bg-[#faf6ee] text-[#8f6d20] transition-transform duration-300 group-hover:rotate-45 group-focus-within:rotate-45"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-4 w-4"
                        >
                          <path d="M10 4.5v11" />
                          <path d="M4.5 10h11" />
                        </svg>
                      </span>
                    </button>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                      <div className="overflow-hidden">
                        <p className="text-base leading-8 text-[#4d4030]">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
