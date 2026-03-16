"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const leftLinks = [
  { label: "YADA COIFFURE", href: "/#accueil" },
  { label: "À PROPOS", href: "/a-propos" },
  { label: "SERVICES", href: "/services" },
];

const rightLinks = [
  { label: "TEMOIGNAGES", href: "/temognage" },
  { label: "FAQS", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

const mobileLinks = [...leftLinks, ...rightLinks];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const isActiveLink = (href: string, label: string) => {
    if (label === "YADA COIFFURE") {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return false;
    }

    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="relative z-20 mx-auto w-full max-w-7xl overflow-visible md:rounded-[1.65rem] md:border md:border-white/25 md:bg-transparent md:shadow-[0_16px_42px_rgba(0,0,0,0.28)] md:backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-4 md:relative md:px-7 md:py-7">
          <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/#accueil" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/yada-logo.webp"
                alt="YADA Coiffure"
                width={340}
                height={114}
                priority
                className="h-12 w-auto"
              />
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-colors hover:text-[#f0d88b]"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <nav className="hidden md:block" aria-label="Navigation principale">
            <ul className="flex items-center gap-1 text-white/95 lg:gap-2">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-xl px-2 py-1 text-[0.8rem] font-extrabold tracking-[0.08em] transition-colors hover:bg-white/12 ${
                      isActiveLink(link.href, link.label)
                        ? "text-[#D4AF37] hover:text-[#e5c256]"
                        : link.label === "YADA COIFFURE"
                          ? "text-white/95"
                          : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-[70%] flex-col items-center gap-1 md:flex">
            <Link href="/#accueil">
              <Image
                src="/images/yada-logo.webp"
                alt="YADA Coiffure"
                width={360}
                height={120}
                priority
                className="h-12 w-auto md:h-16"
              />
            </Link>
            <Link
              href="/#telecharger"
              className="rounded-full bg-[#7E5132] px-4 py-1.5 text-[0.7rem] font-extrabold tracking-[0.08em] text-white transition-colors hover:bg-[#936042]"
            >
              DOWNLOAD APP
            </Link>
          </div>

          <nav className="hidden md:block" aria-label="Navigation secondaire">
            <ul className="flex items-center gap-1 text-white/95 lg:gap-2">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-xl px-2 py-1 text-[0.8rem] font-extrabold tracking-[0.08em] transition-colors hover:bg-white/12 ${
                      isActiveLink(link.href, link.label)
                        ? "text-[#D4AF37] hover:text-[#e5c256]"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-10 md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Fermer le menu mobile"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="mobile-navigation"
          className={`absolute inset-y-0 left-0 flex w-[92vw] max-w-[28rem] flex-col border-r border-[#d4af37]/16 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_28%),linear-gradient(180deg,#0b100e_0%,#132b1d_56%,#1c241f_100%)] px-5 pb-8 pt-28 text-white shadow-[0_28px_60px_rgba(0,0,0,0.36)] transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav aria-label="Navigation mobile">
            <ul className="space-y-2">
              {mobileLinks.map((link) => (
                <li key={`mobile-${link.href}`}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm font-extrabold tracking-[0.08em] transition-colors ${
                      isActiveLink(link.href, link.label)
                        ? "bg-[#d4af37] text-[#1b1408]"
                        : "bg-white/8 text-white/90 hover:bg-white/12"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/#telecharger"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 inline-flex w-fit rounded-full bg-[#d4af37] px-5 py-3 text-xs font-extrabold tracking-[0.12em] text-[#1b1408] transition-colors hover:bg-[#e5c55a]"
          >
            DOWNLOAD APP
          </Link>
        </aside>
      </div>
    </header>
  );
}
