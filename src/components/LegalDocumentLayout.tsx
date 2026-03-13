import type { ReactNode } from "react";
import { Cormorant_Garamond } from "next/font/google";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const luxurySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type LegalDocumentLayoutProps = {
  title: string;
  subtitle?: string;
  meta: ReactNode;
  children: ReactNode;
};

type LegalSectionProps = {
  index: string;
  title: string;
  children: ReactNode;
};

export function LegalDocumentLayout({
  title,
  subtitle,
  meta,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <div className="bg-white text-[#181411]">
      <Navbar />

      <main className="pt-28 md:pt-32">
        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2.75rem] border border-[#dfcfad] bg-[linear-gradient(180deg,#f7efdf_0%,#ffffff_30%)] shadow-[0_30px_90px_rgba(24,20,17,0.08)]">
              <div className="border-b border-[#dfcfad]/65 px-6 py-8 md:px-10 md:py-10">
                <div className="max-w-4xl">
                  <div className="inline-flex max-w-md flex-col rounded-[1.75rem] bg-[linear-gradient(145deg,#8f6d20,#c49a33)] px-5 py-4 text-white shadow-[0_10px_24px_rgba(143,109,32,0.24)]">
                    {meta}
                  </div>

                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-[#8f6d20]">
                    Informations legales
                  </p>
                  <h1
                    className={`${luxurySerif.className} mt-4 text-4xl font-semibold leading-[0.95] text-[#17120d] md:text-6xl`}
                  >
                    {title}
                  </h1>
                  {subtitle ? (
                    <p className="mt-5 text-base leading-8 text-[#564c40] md:text-lg">
                      {subtitle}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-6 px-6 py-8 md:px-10 md:py-12">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section className="rounded-[2rem] border border-[#eadfc8] bg-white p-6 shadow-[0_16px_40px_rgba(24,20,17,0.05)] md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#8f6d20,#c49a33)] text-sm font-extrabold tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(143,109,32,0.24)]">
          {index}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold text-[#17120d] md:text-2xl">
            {title}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[#564c40] md:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
