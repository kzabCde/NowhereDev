"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 md:p-14 backdrop-blur-xl"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:34px_34px]" />

        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Contact Channel
          </p>

          <h2 className="brand mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.14em] text-white">
            LET’S WORK TOGETHER
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-white/65">
            {siteConfig.contactHeadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`mailto:${siteConfig.about.email}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-105"
            >
              <Mail size={16} />
              Email Me
            </Link>

            {siteConfig.resumeUrl && (
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                Resume
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>

          {/* Email Text */}
          <p className="mt-6 text-xs sm:text-sm text-white/45 break-all">
            {siteConfig.about.email}
          </p>
        </div>
      </motion.div>
    </section>
  );
}