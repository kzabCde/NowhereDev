"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const counters = [
  { label: "Years Experience", value: siteConfig.about.yearsExperience },
  { label: "Projects Delivered", value: siteConfig.about.projectsDelivered },
  { label: "Happy Clients", value: siteConfig.about.happyClients },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >
        <div className="grid lg:grid-cols-[1.2fr_.8fr]">
          {/* Left Content */}
          <div className="p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Profile Overview
            </p>

            <h2 className="brand mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.14em] text-white">
              ABOUT ME
            </h2>

            <p className="mt-6 max-w-3xl text-sm sm:text-base leading-7 text-white/65">
              {siteConfig.about.bio}
            </p>

            {/* Info */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-white/45" />
                {siteConfig.about.location}
              </span>

              <span className="inline-flex items-center gap-2 break-all">
                <Mail size={15} className="text-white/45" />
                {siteConfig.about.email}
              </span>
            </div>
          </div>

          {/* Right Panel */}
          <div className="border-t border-white/10 lg:border-l lg:border-t-0 p-8 md:p-10 bg-black/20">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Stats
            </p>

            <div className="mt-6 grid gap-4">
              {counters.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20"
                >
                  <p className="text-3xl md:text-4xl font-black text-white tracking-[0.08em]">
                    {item.value}+
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}