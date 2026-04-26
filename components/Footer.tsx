"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Final Section
            </p>

            <h3 className="brand mt-3 text-2xl md:text-3xl font-black tracking-[0.18em] text-white">
              {siteConfig.brand}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
              Crafted with precision, modern code, and premium interface design.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="md:text-right"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/45">
              Connect
            </p>

            <div className="md:flex md:justify-end">
              <SocialIcons compact />
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/55">
            © 2026 {siteConfig.brand} — Crafted in the dark.
          </p>

          <Link
            href="#home"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/75 transition hover:bg-white hover:text-black"
          >
            Back to Top <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}