"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground">
                {siteConfig.brand.charAt(0)}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.brand.charAt(0) +
                  siteConfig.brand.slice(1).toLowerCase()}
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Crafting fast, elegant, and scalable digital products with clean
              code and premium interface design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="md:flex md:justify-end"
          >
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-right">
                Connect
              </p>
              <SocialIcons compact />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.brand}. All rights
            reserved.
          </p>

          <Link
            href="#home"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Back to top <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
