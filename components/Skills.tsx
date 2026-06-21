"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";

export default function Skills() {
  return (
    <Section id="skills" aria-label="Skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & tools"
        description="Technologies and tools used to create fast, scalable, and premium web experiences."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {siteConfig.skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04, duration: 0.4 }}
          >
            <Card interactive className="p-5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-medium text-foreground">
                  {skill.name}
                </p>
                <span className="text-xs font-medium text-muted-foreground">
                  <CountUp value={skill.level} suffix="%" />
                </span>
              </div>

              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
