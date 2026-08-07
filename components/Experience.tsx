"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

export default function Experience() {
  const { language } = useLanguage();

  return (
    <Section id="journey" aria-label="Experience and education" className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Journey / 04"
        title={language === "th" ? "เส้นทางที่เชื่อม Operation, Mathematics และ Software" : "A path from operations to mathematics to software"}
        description={
          language === "th"
            ? "Timeline สั้น ๆ เพื่ออธิบายที่มาของวิธีคิดในการสร้างผลิตภัณฑ์ โดยไม่ทำให้ About ซ้ำกับ Hero"
            : "A compact timeline showing where the product mindset comes from without repeating the hero biography."
        }
      />

      <div className="mt-12 border-y border-border">
        {siteConfig.journey.map((item, index) => (
          <motion.article
            key={item.period}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="grid gap-5 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_minmax(220px,0.7fr)_1fr] md:items-start md:gap-8"
          >
            <span className="font-mono text-xs text-primary">{item.period}</span>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {localize(item.title, language)}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {localize(item.description, language)}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
