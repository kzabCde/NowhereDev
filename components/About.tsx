"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";

const counters = [
  { label: "Years Experience", value: siteConfig.about.yearsExperience },
  { label: "Projects Delivered", value: siteConfig.about.projectsDelivered },
  { label: "Happy Clients", value: siteConfig.about.happyClients },
];

export default function About() {
  return (
    <Section id="about" aria-label="About">
      <SectionHeading
        eyebrow="Profile"
        title="About me"
        description={siteConfig.about.bio}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Bio panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-lg font-bold text-primary-foreground">
                {siteConfig.about.name.charAt(0)}
              </span>
              <div>
                <p className="font-display text-h3 font-semibold text-foreground">
                  {siteConfig.about.name}
                </p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Briefcase size={14} className="text-primary" />
                  {siteConfig.about.role}
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {siteConfig.about.bio}
            </p>

            <dl className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:gap-8">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={15} className="text-primary" aria-hidden />
                <dt className="sr-only">Location</dt>
                <dd className="text-foreground">{siteConfig.about.location}</dd>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={15} className="text-primary" aria-hidden />
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.about.email}`}
                    className="break-all text-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.about.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Card>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {counters.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <Card interactive className="p-6">
                <p className="font-display text-4xl font-bold text-foreground">
                  <CountUp value={item.value} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
