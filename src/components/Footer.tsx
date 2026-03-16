import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "./NewsletterForm";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M13.2 21v-7.3h2.5l.4-3h-2.9V8.8c0-.9.3-1.5 1.6-1.5h1.4V4.6c-.2 0-1.1-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8v2.4H7.8v3h2.4V21h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M14.6 3.5c.4 2 1.6 3.7 3.5 4.8v2.5a8 8 0 0 1-3.4-1.2v5.1c0 3-2.3 5.3-5.4 5.3A5.3 5.3 0 0 1 4 14.7c0-3 2.3-5.3 5.3-5.3.3 0 .7 0 1 .1V12a2.9 2.9 0 0 0-1-.2 2.8 2.8 0 1 0 2.7 2.8V3.5h2.6Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587019415348",
    icon: <FacebookIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yada.coiffure",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@yadacoiffure",
    icon: <TikTokIcon />,
  },
];

const shortcutLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Témoignages", href: "/temognage" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "CGV", href: "/cgv" },
  { label: "CGU", href: "/cgu" },
  { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
  { label: "Signaler un problème", href: "/contact" },
];
const footerLogos = [
  { src: "/images/logo-footer1.webp", alt: "Logo footer 1" },
  { src: "/images/logo-footer2.webp", alt: "Logo footer 2" },
  { src: "/images/logo-footer3.webp", alt: "Logo footer 3" },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative overflow-hidden rounded-t-[3rem] border-t border-[#D4AF37]/30 bg-black text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_90%_92%,rgba(255,255,255,0.08),transparent_30%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 pt-10 md:px-10 md:pt-12">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/#accueil" className="inline-block">
                <Image
                  src="/images/yada-logo.webp"
                  alt="YADA Coiffure"
                  width={320}
                  height={110}
                  className="h-16 w-auto md:h-20"
                />
              </Link>
              <p className="max-w-2xl text-lg leading-8 text-white/88">
                Avec YADA, trouvez facilement un coiffeur ou une coiffeuse
                disponible près de chez vous.
              </p>
              <ul className="mt-6 flex flex-wrap items-center gap-3 text-[#D4AF37]">
                {socialLinks.map((platform) => (
                  <li key={platform.label}>
                    <a
                      href={platform.href}
                      aria-label={platform.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-white/5 transition-colors hover:bg-[#D4AF37]/14 hover:text-[#f2d390]"
                    >
                      {platform.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#D4AF37]">
                Contact
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/90">
                06 66 48 47 70
              </p>
              <a
                href="mailto:contact@yada.ma"
                className="text-sm leading-7 text-white/90 underline decoration-white/35 underline-offset-4 hover:decoration-white"
              >
                contact@yada.ma
              </a>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#D4AF37]">
                Raccourcis
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                {shortcutLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#f2d390]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#D4AF37]">
                Newsletter
              </h3>
              <NewsletterForm />
            </div>

            <div className="md:text-right">
              <p className="text-xs text-white/65">
                Copyright © 2025 Yada Coiffure. All rights reserved.
              </p>
              <div className="mt-3 flex items-center gap-3 md:justify-end">
                {footerLogos.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={36}
                    className="h-9 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.09em] text-white/72">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#f2d390]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
