"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = 0;

    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 12);
      setHidden(current > last && current > 160);
      last = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-black/55 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home">
          <span className="brand text-xl md:text-2xl font-black tracking-[0.35em] text-white">
            {siteConfig.brand}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.28em] text-white/70 font-medium">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden rounded-lg border border-white/10 p-2 text-white hover:bg-white/5 transition"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-5 text-sm uppercase tracking-[0.2em] text-white/80">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}