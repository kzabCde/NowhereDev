"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Mail,
  Music2,
  Youtube,
} from "lucide-react";
import { FaSteam } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";
import { Section } from "@/components/ui/Section";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: Github,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/supavich.sativattamakorn/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ithque_/",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Qtudio",
    icon: Youtube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@qubestudi0",
    icon: Music2,
  },
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/KZzzzCN/",
    icon: FaSteam,
  },
].filter((item) => Boolean(item.href));

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

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(250px,340px)] lg:items-end">
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

          <div className="flex flex-col gap-2">
            {siteConfig.about.email && (
              <Link
                href={`mailto:${siteConfig.about.email}`}
                className="inline-flex min-h-12 items-center justify-between gap-4 bg-primary px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-foreground"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail size={14} /> Email
                </span>
                <ArrowUpRight size={14} />
              </Link>
            )}

            {siteConfig.resumeUrl && (
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-between gap-4 border border-background/25 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:border-primary hover:text-primary"
              >
                Resume / CV
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>

        <div className="relative mt-10 border-t border-background/15 pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-background/50">
              {language === "th" ? "ช่องทางอื่น" : "Elsewhere"}
            </p>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-background/35">
              {socialLinks.length.toString().padStart(2, "0")} links
            </span>
          </div>

          <div className="grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex min-h-14 items-center justify-between gap-4 bg-foreground px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Icon size={15} aria-hidden />
                  {label}
                </span>
                <ArrowUpRight
                  size={13}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
