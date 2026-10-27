"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overDarkSection, setOverDarkSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let animationFrame = 0;
    const header = document.querySelector<HTMLElement>("[data-site-navbar]");
    const darkSections = Array.from(document.querySelectorAll<HTMLElement>('[data-navbar-theme="light"]'));
    let probeY = (header?.offsetHeight ?? 80) / 2;
    let ranges: { top: number; bottom: number }[] = [];
    const measure = () => {
      probeY = (header?.offsetHeight ?? 80) / 2;
      ranges = darkSections.map(section => {
        const bounds = section.getBoundingClientRect();
        return { top: bounds.top + window.scrollY, bottom: bounds.bottom + window.scrollY };
      });
      scheduleNavbarUpdate();
    };

    const updateNavbarTheme = () => {
      animationFrame = 0;
      setScrolled(window.scrollY > 50);

      const position = window.scrollY + probeY;
      setOverDarkSection(ranges.some(range => range.top <= position && range.bottom > position));
    };

    const scheduleNavbarUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateNavbarTheme);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    if (header) observer.observe(header);
    window.addEventListener("scroll", scheduleNavbarUpdate, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", scheduleNavbarUpdate);
      window.removeEventListener("resize", measure);
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  const useLightText = !scrolled || overDarkSection;
  const navbarTextColor = useLightText ? "#FFFFFF" : "#3D3833";

  return (
    <>
      <header
        data-site-navbar
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled && !mobileOpen ? "backdrop-blur-sm" : "backdrop-blur-none",
        )}
        style={{
          backgroundColor: "transparent",
          backdropFilter: mobileOpen ? "none" : undefined,
          WebkitBackdropFilter: mobileOpen ? "none" : undefined,
          boxShadow: scrolled && !mobileOpen ? "0 1px 10px rgba(0, 0, 0, 0.1)" : "none",
          transition:
            mobileOpen ? "none" : "box-shadow 500ms ease, background-color 500ms ease",
        }}
      >
        <Container>
          <nav className="flex items-center justify-between h-18 sm:h-20">
            <Link
              href="/"
              className="font-display text-2xl tracking-tight transition-colors duration-300"
              style={{ color: mobileOpen ? "#FFFFFF" : navbarTextColor }}
            >
              Manpottery
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm tracking-wide transition-colors duration-300 hover:opacity-70",
                      pathname === link.href
                        ? "font-semibold opacity-100"
                        : "font-medium opacity-80",
                    )}
                    style={{ color: navbarTextColor }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-11 w-11 items-center justify-center transition-colors"
              style={{ color: mobileOpen ? "#FFFFFF" : navbarTextColor }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            className="fixed inset-0 z-30 overflow-y-auto backdrop-blur-sm lg:hidden"
            style={{
              backgroundColor: "rgb(35 31 28 / 55%)",
            }}
          >
            <div className="flex min-h-full flex-col items-center justify-center gap-5 px-5 pb-8 pt-24 sm:gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "font-display text-3xl transition-colors duration-300",
                      pathname === link.href
                        ? "text-terracotta"
                        : "text-white hover:text-terracotta",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
