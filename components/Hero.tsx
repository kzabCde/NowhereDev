"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "@/data/siteConfig";

function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % siteConfig.heroSubtitle.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Glow */}
      <motion.div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <div className="relative mx-auto w-full max-w-6xl text-center sm:text-left">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="brand text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.18em] text-white leading-tight"
        >
          {siteConfig.heroTitle}
        </motion.h1>

        {/* Sliding Subtitle */}
        <div className="mt-6 h-12 sm:h-14 md:h-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={siteConfig.heroSubtitle[index]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45 }}
              className="text-sm sm:text-xl md:text-2xl uppercase tracking-[0.28em] text-white/70"
            >
              {siteConfig.heroSubtitle[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact">Contact Me</MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}