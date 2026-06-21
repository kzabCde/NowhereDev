"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.about.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the mailto button still works */
    }
  };

  return (
    <Section id="contact" aria-label="Contact">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden rounded-2xl p-8 text-center sm:p-12 md:p-16"
      >
        <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
        <div
          className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]"
          aria-hidden
        />

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Get in touch
        </div>

        <h2 className="mx-auto mt-5 max-w-2xl font-display text-h1 font-semibold text-foreground">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {siteConfig.contactHeadline}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={`mailto:${siteConfig.about.email}`}
            size="lg"
            className="w-full sm:w-auto"
          >
            <Mail size={16} />
            Email me
          </Button>

          {siteConfig.resumeUrl && (
            <Button
              href={siteConfig.resumeUrl}
              external
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Resume
              <ArrowUpRight size={16} />
            </Button>
          )}
        </div>

        {/* Copyable email */}
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? (
            <Check size={14} className="text-success" />
          ) : (
            <Copy size={14} />
          )}
          <span className="break-all">{siteConfig.about.email}</span>
        </button>
      </motion.div>
    </Section>
  );
}
