"use client";

import Link from "next/link";
import { ArrowUp, Github } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-border px-6 py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-foreground bg-foreground font-mono text-[11px] font-bold tracking-[-0.08em] text-background">
              N/D
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.16em] text-foreground">
              NOWHEREDEV
            </span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {language === "th"
              ? "Proof-first Product Engineering — แสดงความสามารถผ่านระบบที่สร้างจริง architecture และผลลัพธ์ที่ตรวจสอบได้"
              : "Proof-first product engineering — capability shown through shipped systems, architecture and verifiable outcomes."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 border border-border px-3 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={14} /> GitHub
          </Link>
          <Link
            href="#home"
            className="inline-flex h-10 items-center gap-2 border border-border px-3 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {language === "th" ? "กลับด้านบน" : "Back to top"} <ArrowUp size={14} />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-2 border-t border-border pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} NOWHEREDEV</span>
        <span>Thailand · Product / Full Stack / Data & AI</span>
      </div>
    </footer>
  );
}
