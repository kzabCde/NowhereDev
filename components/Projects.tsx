"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Check, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

const SCREENSHOT_SERVICE =
  "https://image.thum.io/get/width/1600/crop/900/noanimate/";

export default function Projects() {
  const { language } = useLanguage();
  const featured = siteConfig.projects.filter((project) => project.featured);
  const more = siteConfig.projects.filter((project) => !project.featured);

  return (
    <Section id="projects" aria-label="Selected work" className="py-24 md:py-32">
      <div className="flex flex-col gap-6 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={language === "th" ? "Selected work / 01" : "Selected work / 01"}
          title={language === "th" ? "ผลงานก่อนคำอธิบาย" : "The work comes first."}
          description={
            language === "th"
              ? "Case Study เหล่านี้แสดงทั้งปัญหา บทบาท วิธีแก้ และหลักฐานจากระบบที่เปิดใช้งานจริง ไม่ใช้คะแนนความสามารถหรือภาพ stock มาทดแทนผลงาน"
              : "These case studies show the problem, ownership, system approach and evidence from working products — not self-rated skill bars or stock imagery."
          }
        />
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          03 {language === "th" ? "Featured systems" : "Featured systems"}
        </div>
      </div>

      <div className="divide-y divide-border">
        {featured.map((project, projectIndex) => (
          <motion.article
            id={project.id}
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28 py-16 md:py-20"
          >
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] xl:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="text-primary">0{projectIndex + 1}</span>
                  <span>/</span>
                  <span>{localize(project.category, language)}</span>
                  <span className="inline-flex items-center gap-1.5 border border-border px-2 py-1 text-foreground">
                    <span className="h-1.5 w-1.5 bg-primary" /> Live product
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-foreground">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {localize(project.summary, language)}
                </p>

                <div className="mt-9 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
                  {[
                    [language === "th" ? "ปัญหา" : "Problem", project.problem],
                    [language === "th" ? "บทบาท" : "Ownership", project.role],
                    [language === "th" ? "วิธีแก้" : "System response", project.solution],
                  ].map(([label, text]) => (
                    <div key={label as string} className="border-b border-border py-5 last:border-b-0 md:border-b-0 md:px-5 md:first:pl-0 md:last:pr-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                        {label as string}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {localize(text as typeof project.problem, language)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="xl:pt-3">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="group block border border-border bg-muted/20"
                >
                  <div className="flex items-center justify-between border-b border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span>Live site preview</span>
                    <ExternalLink size={12} />
                  </div>
                  <div
                    className="aspect-[16/10] bg-muted bg-cover bg-top transition-[background-position] duration-[1400ms] ease-out group-hover:bg-bottom"
                    style={{
                      backgroundImage: `url("${SCREENSHOT_SERVICE}${project.liveUrl}")`,
                    }}
                    role="img"
                    aria-label={`${project.title} live website preview`}
                  />
                </Link>

                <div className="border-x border-b border-border p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                    {language === "th" ? "หลักฐาน" : "Evidence"}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {project.proof.map((proof) => (
                      <li key={proof.en} className="flex items-start gap-3 text-sm text-foreground">
                        <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                        <span>{localize(proof, language)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-foreground"
                    >
                      Live demo <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 border border-border px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      Source <Github size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-14">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              More projects / 02
            </p>
            <h3 className="mt-3 font-display text-h2 font-semibold text-foreground">
              {language === "th" ? "ระบบอื่นที่กำลังพัฒนา" : "More systems in the portfolio"}
            </h3>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:block">
            02 systems
          </span>
        </div>

        <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2">
          {more.map((project, index) => (
            <article key={project.id} className="bg-background p-6 md:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    0{index + 4} · {localize(project.category, language)}
                  </p>
                  <h4 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {project.title}
                  </h4>
                </div>
                <ArrowUpRight size={18} className="shrink-0 text-primary" />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {localize(project.summary, language)}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {project.proof.map((proof) => (
                  <li key={proof.en} className="flex gap-2 text-xs text-foreground">
                    <span className="text-primary">+</span>
                    {localize(proof, language)}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground hover:border-primary hover:text-primary"
                >
                  Live <ArrowUpRight size={13} />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground hover:border-primary hover:text-primary"
                >
                  Code <Github size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
