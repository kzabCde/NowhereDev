"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
          Portfolio Showcase
        </p>

        <h2 className="brand text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.14em] text-white">
          FEATURED PROJECTS
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/60">
          Selected builds focused on performance, clean systems, and modern user
          experience.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-[0.06em] text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:scale-105"
                >
                  Link <ArrowUpRight size={15} />
                </Link>

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    GitHub <Github size={15} />
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}