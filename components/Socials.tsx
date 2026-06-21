"use client";

import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function Socials() {
  return (
    <Section id="socials" aria-label="Social links">
      <SectionHeading
        align="center"
        eyebrow="Connect"
        title="Find me online"
        description="Connect through social platforms, creative channels, and developer networks."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-10"
      >
        <Card className="p-8 md:p-10">
          <SocialIcons />
        </Card>
      </motion.div>
    </Section>
  );
}
