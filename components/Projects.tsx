"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, FolderOpen } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const ALL = "All";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-52 overflow-hidden">
      {!loaded && <div className="skeleton absolute inset-0" aria-hidden />}
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover transition-all duration-700 ease-spring group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0"
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
    </div>
  );
}

export default function Projects() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    siteConfig.projects.forEach((p) => p.category && set.add(p.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState<string>(ALL);

  const visible = useMemo(
    () =>
      filter === ALL
        ? siteConfig.projects
        : siteConfig.projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <Section id="projects" aria-label="Projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured projects"
        description="Selected builds focused on performance, clean systems, and modern user experience."
      />

      {/* Category filter (Tabs) */}
      {categories.length > 2 && (
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card interactive className="group h-full overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    {project.category && (
                      <Badge variant="primary">{project.category}</Badge>
                    )}
                    {project.featured && (
                      <Badge variant="outline">Featured</Badge>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-h3 font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      href={project.liveUrl}
                      external
                      size="sm"
                    >
                      Visit site
                      <ArrowUpRight size={15} />
                    </Button>
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        external
                        size="sm"
                        variant="outline"
                      >
                        Code
                        <Github size={15} />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {visible.length === 0 && (
        <div className="mt-10 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
          <FolderOpen className="mb-3 text-muted-foreground" size={28} />
          <p className="text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        </div>
      )}
    </Section>
  );
}
