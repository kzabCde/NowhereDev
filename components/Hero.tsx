"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const featured = siteConfig.projects.filter((project) => project.featured);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] border-b border-border px-6 pb-16 pt-28 lg:px-10 lg:pb-20 lg:pt-36"
    >
      <div className="technical-grid absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.55fr)] lg:items-end">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2 text-primary">
              <span className="h-2 w-2 bg-primary" aria-hidden />
              {localize(siteConfig.hero.eyebrow, language)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} /> {siteConfig.about.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-7 max-w-5xl font-display text-[clamp(3.3rem,8.3vw,8rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground"
          >
            {localize(siteConfig.hero.title, language)}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-9 grid gap-7 border-t border-border pt-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
          >
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {localize(siteConfig.hero.description, language)}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center gap-2 bg-primary px-5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {localize(siteConfig.hero.primaryCta, language)}
                <ArrowDownRight size={16} />
              </Link>
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 border border-border bg-background px-5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {localize(siteConfig.hero.secondaryCta, language)}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border bg-background"
          aria-label={language === "th" ? "ผลงานเด่น" : "Featured evidence"}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>{language === "th" ? "ระบบที่กำลังแสดง" : "Shipped systems"}</span>
            <span className="text-primary">05 / LIVE</span>
          </div>
          {featured.map((project, index) => (
            <Link
              key={project.id}
              href={`#${project.id}`}
              className="group grid grid-cols-[32px_1fr_auto] items-center gap-3 border-b border-border px-4 py-4 last:border-b-0 hover:bg-muted/45"
            >
              <span className="font-mono text-[10px] text-muted-foreground">
                0{index + 1}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {project.title}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                  {localize(project.category, language)}
                </span>
              </span>
              <ArrowDownRight
                size={15}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-primary"
              />
            </Link>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}
