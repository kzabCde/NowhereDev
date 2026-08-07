"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

export default function Skills() {
  const { language } = useLanguage();

  return (
    <Section id="capabilities" aria-label="Capabilities" className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Capabilities / 03"
        title={language === "th" ? "ความสามารถที่มีหลักฐานจากงานจริง" : "Capabilities backed by shipped work"}
        description={
          language === "th"
            ? "แทนการให้คะแนนตัวเองเป็นเปอร์เซ็นต์ แต่ละกลุ่มเชื่อมกลับไปยังระบบที่สร้างจริง เทคโนโลยีที่ใช้ และปัญหาที่แก้"
            : "Instead of self-assigned percentages, each capability points back to systems built, technologies used and problems solved."
        }
      />

      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
        {siteConfig.capabilities.map((capability, index) => (
          <motion.article
            key={capability.title.en}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            className="group bg-background p-7 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                0{index + 1}
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </div>
            <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-foreground">
              {localize(capability.title, language)}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {localize(capability.description, language)}
            </p>

            <div className="mt-8 border-t border-border pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                {language === "th" ? "หลักฐานจากงาน" : "Evidence from work"}
              </p>
              <ul className="mt-4 space-y-3">
                {capability.evidence.map((evidence) => (
                  <li key={evidence.en} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1 text-primary">+</span>
                    <span>{localize(evidence, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {capability.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
