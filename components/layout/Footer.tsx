import Link from "next/link";
import { Instagram } from "lucide-react";
import { Container } from "./Container";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

function PotteryMark() {
  return (
    <svg
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <path
        d="M58 24C66 32 114 32 122 24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M64 31C64 47 58 58 48 70C36 84 31 103 34 125C38 154 54 181 68 196C76 205 104 205 112 196C126 181 142 154 146 125C149 103 144 84 132 70C122 58 116 47 116 31"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 74C75 81 105 81 129 74"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M39 120C69 130 111 130 141 120"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M61 186C78 191 102 191 119 186"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M72 18C78 14 102 14 108 18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  const footerLinks = NAV_LINKS.filter((link) => link.href !== "/");

  return (
    <footer className="relative overflow-hidden bg-stone text-white/65">
      {/* Compact mobile footer */}
      <Container className="py-8 sm:hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="font-display text-2xl text-ivory transition-colors duration-300 hover:text-terracotta"
          >
            Manpottery
          </Link>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Manpottery on Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-terracotta/60 hover:text-terracotta"
          >
            <Instagram size={16} strokeWidth={1.7} />
          </a>
        </div>

        <nav aria-label="Footer navigation" className="py-5">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[13px]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-0.5 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/10 py-4 text-xs text-white/45">
          <span>Fars, Shiraz</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="transition-colors duration-300 hover:text-white"
          >
            {SOCIAL_LINKS.email}
          </a>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-white/30">
          <p>&copy; {new Date().getFullYear()} Manpottery</p>
          <a
            href="https://www.instagram.com/iman_zhr_/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
          >
            website by ZHR
          </a>
        </div>
      </Container>

      {/* Tablet and desktop footer */}
      <Container className="relative hidden py-14 sm:block lg:py-16">
        <div className="pointer-events-none absolute -right-7 top-2 hidden w-44 text-terracotta/25 sm:block lg:right-8 lg:top-5 lg:w-52">
          <PotteryMark />
        </div>

        <div className="relative z-10 grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-[1.15fr_1fr] sm:gap-12 lg:grid-cols-[1.4fr_1fr_0.8fr] lg:pb-12">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block font-display text-3xl text-ivory transition-colors duration-300 hover:text-terracotta"
            >
              Manpottery
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
              Small-batch pottery shaped by hand, made for everyday rituals and
              quiet spaces.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="sm:pr-16 lg:pr-0">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-7 gap-y-2.5 text-sm sm:max-w-xs">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Studio
            </p>
            <div className="space-y-2 text-sm leading-6">
              <p>Fars, Shiraz</p>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="block w-fit transition-colors duration-300 hover:text-white"
              >
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <Instagram size={14} strokeWidth={1.7} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 pt-6 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Manpottery</p>
          <a
            href="https://www.instagram.com/iman_zhr_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
          >
            website by ZHR
          </a>
        </div>
      </Container>
    </footer>
  );
}
