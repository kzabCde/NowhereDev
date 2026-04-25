"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-semibold text-white">Skills</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {siteConfig.skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/85"
          >
            <div className="mx-auto mb-3 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-neon to-violetGlow" style={{ width: `${68 + ((idx * 7) % 26)}%` }} />
            </div>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
