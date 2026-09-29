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

    const updateNavbarTheme = () => {
      animationFrame = 0;
      setScrolled(window.scrollY > 50);

      const header = document.querySelector<HTMLElement>("[data-site-navbar]");
      const probeY = (header?.offsetHeight ?? 80) / 2;
      const darkSections = document.querySelectorAll<HTMLElement>(
        '[data-navbar-theme="light"]',
      );

      setOverDarkSection(
        Array.from(darkSections).some((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= probeY && bounds.bottom > probeY;
        }),
      );
    };

    const scheduleNavbarUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateNavbarTheme);
      }
    };

    scheduleNavbarUpdate();
    window.addEventListener("scroll", scheduleNavbarUpdate, { passive: true });
    window.addEventListener("resize", scheduleNavbarUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleNavbarUpdate);
      window.removeEventListener("resize", scheduleNavbarUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const useLightText = !scrolled || overDarkSection;
  const navbarTextColor = useLightText ? "#FFFFFF" : "#3D3833";

  return (
    <>
      <header
        data-site-navbar
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled ? "backdrop-blur-sm" : "backdrop-blur-none",
        )}
        style={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.0)" : "transparent",
          boxShadow: scrolled && !mobileOpen ? "0 1px 10px rgba(0, 0, 0, 0.1)" : "none",
          transition:
            "box-shadow 500ms ease, backdrop-filter 500ms ease, background-color 500ms ease",
        }}
      >
        <Container>
          <nav className="flex items-center justify-between h-18 sm:h-20">
            <Link
              href="/"
              className="font-display text-2xl tracking-tight transition-colors duration-300"
              style={{ color: navbarTextColor }}
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
              className="lg:hidden p-2 transition-colors"
              style={{ color: mobileOpen ? "#3D3833" : navbarTextColor }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            className="fixed inset-0 z-30 backdrop-blur-sm lg:hidden"
            style={{
              backgroundColor: "rgb(245 240 232 / 15%)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-3xl transition-colors duration-300",
                      pathname === link.href
                        ? "text-terracotta"
                        : "text-stone hover:text-terracotta",
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
