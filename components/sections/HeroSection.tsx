"use client";

import { BASE_PATH } from "@/lib/base-path";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <Image
        src={`${BASE_PATH}/images/Pallet/_DSC0230.webp`}
        alt="Colorful handcrafted serveware from the Palette collection"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#3d383342]" />

      <Container className="relative z-10 flex h-full items-end justify-center pb-14 sm:pb-16 lg:pb-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/collection"
            className="group inline-flex items-center gap-3 rounded-full border border-white/55 bg-ivory/95 px-7 py-3.5 text-sm font-medium tracking-wide text-stone shadow-[0_12px_35px_rgba(25,20,16,0.18)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_rgba(25,20,16,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone sm:px-8 sm:py-4"
          >
            Explore Our Work
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
