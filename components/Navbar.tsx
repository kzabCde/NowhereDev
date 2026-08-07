"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useActiveSection } from "@/lib/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage, localize } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  const sectionIds = useMemo(
    () => siteConfig.navLinks.map((link) => link.href.replace("#", "")),
    []
  );
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/92 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.brand} home`}
        >
          <span className="grid h-9 w-9 place-items-center border border-foreground bg-foreground font-mono text-[11px] font-bold tracking-[-0.08em] text-background transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            N/D
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.16em] text-foreground sm:text-base">
            NOWHEREDEV
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-line"
                    className="absolute inset-x-3 bottom-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                {localize(link.label, language)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center border border-border sm:flex">
            {(["th", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
                className={cn(
                  "h-9 px-2.5 font-mono text-[11px] uppercase transition-colors",
                  language === item
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="#contact"
            className="hidden h-9 items-center gap-2 border border-primary bg-primary px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/85 md:inline-flex"
          >
            {language === "th" ? "คุยเรื่องโปรเจกต์" : "Start a project"}
            <ArrowUpRight size={14} />
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-primary md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-full border-y border-border bg-background p-6 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {siteConfig.navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between border-b border-border py-4 text-base font-medium text-foreground"
                >
                  <span>{localize(link.label, language)}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{index + 1}
                  </span>
                </Link>
              ))}
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex border border-border">
                  {(["th", "en"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLanguage(item)}
                      className={cn(
                        "h-10 px-4 font-mono text-xs uppercase",
                        language === item
                          ? "bg-foreground text-background"
                          : "text-muted-foreground"
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
