"use client";

import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";

type TransitionPhase = "entering" | "idle" | "exiting";

interface PageTransitionProps {
  children: ReactNode;
}

const EXIT_DURATION = 180;
const ENTER_DURATION = 520;

function resetScrollPosition() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);

  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<TransitionPhase>("entering");
  const navigationTimer = useRef<number | null>(null);
  const phaseTimer = useRef<number | null>(null);
  const pendingHref = useRef<string | null>(null);

  const clearTimers = useCallback(() => {
    if (navigationTimer.current !== null) {
      window.clearTimeout(navigationTimer.current);
      navigationTimer.current = null;
    }

    if (phaseTimer.current !== null) {
      window.clearTimeout(phaseTimer.current);
      phaseTimer.current = null;
    }
  }, []);

  useEffect(() => {
    pendingHref.current = null;

    if (shouldReduceMotion) {
      setPhase("idle");
      resetScrollPosition();
      return;
    }

    setPhase("entering");
    resetScrollPosition();

    phaseTimer.current = window.setTimeout(() => {
      setPhase("idle");
      phaseTimer.current = null;
    }, ENTER_DURATION);

    return () => {
      if (phaseTimer.current !== null) {
        window.clearTimeout(phaseTimer.current);
        phaseTimer.current = null;
      }
    };
  }, [pathname, shouldReduceMotion]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.dataset.noPageTransition !== undefined
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const currentUrl = new URL(window.location.href);
      if (currentUrl.pathname === url.pathname) return;

      event.preventDefault();

      if (pendingHref.current) return;

      const nextHref = `${url.pathname}${url.search}${url.hash}`;

      if (shouldReduceMotion) {
        router.push(nextHref);
        return;
      }

      pendingHref.current = nextHref;
      router.prefetch(nextHref);
      if (phaseTimer.current !== null) {
        window.clearTimeout(phaseTimer.current);
        phaseTimer.current = null;
      }

      setPhase("exiting");

      navigationTimer.current = window.setTimeout(() => {
        router.push(nextHref, { scroll: false });
        navigationTimer.current = null;
      }, EXIT_DURATION);
    };

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      clearTimers();
    };
  }, [clearTimers, router, shouldReduceMotion]);

  return (
    <div
      className="route-transition-shell"
      data-route-phase={phase}
      aria-busy={phase !== "idle"}
    >
      <div className="route-transition-curtain" aria-hidden="true" />
      <div className="route-transition-content">{children}</div>
    </div>
  );
}
