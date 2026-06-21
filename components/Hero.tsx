"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

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
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <motion.div
        aria-hidden
        className="absolute -left-24 top-24 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-[120px]"
        animate={{ y: [0, -28, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-secondary/20 blur-[120px]"
        animate={{ y: [0, 26, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />

      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="primary"
            className="gap-1.5 px-3 py-1 text-[13px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Available for new projects
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display text-display font-bold text-foreground"
        >
          <span className="text-gradient">{siteConfig.heroTitle}</span>
        </motion.h1>

        {/* Rotating role */}
        <div className="mt-5 flex h-9 items-center text-lg sm:text-xl md:text-2xl">
          <Sparkles
            size={18}
            className="mr-2 shrink-0 text-primary"
            aria-hidden
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={siteConfig.heroSubtitle[index]}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4 }}
              className="font-medium text-muted-foreground"
            >
              {siteConfig.heroSubtitle[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {siteConfig.about.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button href="#projects" size="lg">
            View Projects
            <ArrowDown size={16} />
          </Button>
          <Button href="#contact" size="lg" variant="outline">
            Contact Me
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin size={15} className="text-primary" aria-hidden />
          Based in {siteConfig.about.location}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
