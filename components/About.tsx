"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const counters = [
  { label: "Years Experience", value: siteConfig.about.yearsExperience },
  { label: "Projects", value: siteConfig.about.projectsDelivered },
  { label: "Clients", value: siteConfig.about.happyClients }
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl"
      >
        <h2 className="text-3xl font-semibold text-white">About</h2>
        <p className="mt-4 max-w-3xl text-white/75">{siteConfig.about.bio}</p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
          <span className="inline-flex items-center gap-2"><MapPin size={14} />{siteConfig.about.location}</span>
          <span className="inline-flex items-center gap-2"><Mail size={14} />{siteConfig.about.email}</span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {counters.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="rounded-2xl border border-white/10 bg-black/30 p-5"
            >
              <p className="text-3xl font-semibold text-neon">{item.value}+</p>
              <p className="mt-1 text-sm text-white/75">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
