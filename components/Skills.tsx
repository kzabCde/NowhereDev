"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
          Technical Arsenal
        </p>

        <h2 className="brand text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.14em] text-white">
          SKILLS
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/60">
          Technologies and tools used to create fast, scalable, and premium web
          experiences.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {siteConfig.skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            {/* Progress Bar */}
            <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.03 }}
                className="h-full rounded-full bg-white"
              />
            </div>

            {/* Skill Name */}
            <p className="text-center text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition group-hover:text-white">
              {skill.name}
            </p>

            {/* Percent */}
            <p className="mt-2 text-center text-[10px] tracking-[0.14em] text-white/40">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}