"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "@/data/siteConfig";

function MagneticButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-neon hover:bg-neon/15 hover:shadow-glow"
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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-36">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid [background-size:24px_24px] opacity-20" />
      <motion.div className="glow-orb -left-20 top-20" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8 }} />
      <motion.div className="glow-orb right-10 top-1/3 bg-violetGlow/20" animate={{ y: [0, 24, 0] }} transition={{ repeat: Infinity, duration: 10 }} />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-5xl font-semibold tracking-[0.12em] text-transparent sm:text-6xl lg:text-8xl"
        >
          {siteConfig.heroTitle}
        </motion.h1>

        <motion.p
          key={siteConfig.heroSubtitle[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-2xl text-white/85 sm:text-3xl"
        >
          {siteConfig.heroSubtitle[index]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact">Contact Me</MagneticButton>
          <MagneticButton href={siteConfig.resumeUrl || "#"}>Download Resume</MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
