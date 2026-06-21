"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Standard page section: consistent vertical rhythm + max width.
 */
export function Section({
  id,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 md:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}

/**
 * Reusable section heading with eyebrow / title / description.
 * Animates in on scroll for a consistent entrance across the page.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-primary/50" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-h2 font-semibold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}
