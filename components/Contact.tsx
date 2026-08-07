"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Section } from "@/components/ui/Section";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <Section id="contact" aria-label="Contact" className="pb-28 pt-16 md:pb-36 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden border border-border bg-foreground p-7 text-background sm:p-10 md:p-14"
      >
        <div className="absolute inset-0 opacity-[0.08] technical-grid-light" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              Contact / 06 · {language === "th" ? "เปิดรับโอกาสที่เหมาะสม" : "Open to the right opportunities"}
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
              {localize(siteConfig.contact.headline, language)}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-background/65 md:text-base">
              {localize(siteConfig.contact.description, language)}
            </p>
          </div>

          <div className="flex min-w-[220px] flex-col gap-2">
            {siteConfig.about.email && (
              <Link
                href={`mailto:${siteConfig.about.email}`}
                className="inline-flex min-h-12 items-center justify-between gap-4 bg-primary px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-foreground"
              >
                <span className="inline-flex items-center gap-2"><Mail size={14} /> Email</span>
                <ArrowUpRight size={14} />
              </Link>
            )}
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-between gap-4 border border-background/25 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:border-primary hover:text-primary"
            >
              <span className="inline-flex items-center gap-2"><Github size={14} /> GitHub</span>
              <ArrowUpRight size={14} />
            </Link>
            {siteConfig.resumeUrl && (
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-between gap-4 border border-background/25 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:border-primary hover:text-primary"
              >
                {language === "th" ? "Resume / CV" : "Resume / CV"}
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
