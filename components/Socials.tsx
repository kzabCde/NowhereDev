"use client";

import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Socials() {
  return (
    <section
      id="socials"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
          Digital Presence
        </p>

        <h2 className="brand text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.14em] text-white">
          FIND ME ONLINE
        </h2>

        <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/60">
          Connect through social platforms, creative channels, and developer
          networks.
        </p>
      </motion.div>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 backdrop-blur-xl"
      >
        <SocialIcons />
      </motion.div>
    </section>
  );
}