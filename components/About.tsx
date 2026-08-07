"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

export default function About() {
  const { language } = useLanguage();

  return (
    <Section id="about" aria-label="About" className="py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About / 05"
            title={language === "th" ? "ไม่ได้เริ่มจาก Template" : "A non-template path into engineering"}
            description={
              language === "th"
                ? "พื้นฐานต่างสายกลายเป็นข้อได้เปรียบในการเข้าใจ workflow จริง ก่อนแปลงมันเป็นระบบซอฟต์แวร์"
                : "A cross-disciplinary background became an advantage: understand the workflow first, then turn it into software."
            }
          />
          <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            <MapPin size={13} className="text-primary" />
            {siteConfig.about.location}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-4xl font-display text-[clamp(1.7rem,3.6vw,3rem)] font-medium leading-[1.12] tracking-[-0.035em] text-foreground">
            {localize(siteConfig.about.story, language)}
          </p>

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {siteConfig.about.principles.map((principle, index) => (
              <div key={principle.en} className="bg-background p-5 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  Principle 0{index + 1}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {localize(principle, language)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 border border-border px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              GitHub profile <ArrowUpRight size={14} />
            </Link>
            {siteConfig.resumeUrl && (
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 bg-primary px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-primary-foreground"
              >
                {language === "th" ? "ดาวน์โหลด Resume" : "Download resume"}
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
