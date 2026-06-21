"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useActiveSection } from "@/lib/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => siteConfig.navLinks.map((l) => l.href.replace("#", "")),
    []
  );
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 12);
      setHidden(current > last && current > 200 && !isOpen);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.brand} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground shadow-glow">
            {siteConfig.brand.charAt(0)}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            {siteConfig.brand.charAt(0) +
              siteConfig.brand.slice(1).toLowerCase()}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-muted"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button
            href="#contact"
            size="sm"
            className="hidden md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </Button>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            onClick={() => setIsOpen((p) => !p)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/40 text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              aria-hidden
            />
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-3 top-[calc(100%+0.5rem)] z-50 origin-top rounded-2xl border border-border bg-card p-3 shadow-elevated md:hidden"
            >
              <nav className="flex flex-col">
                {siteConfig.navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                <Button
                  href="#contact"
                  className="flex-1"
                  size="md"
                >
                  Let&apos;s talk
                  <ArrowUpRight size={16} />
                </Button>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
