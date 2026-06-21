"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Music2,
  Disc3,
  Mail,
} from "lucide-react";
import { FaSteam } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  tiktok: Music2,
  discord: Disc3,
  steam: FaSteam,
  email: Mail,
} as const;

// Human-readable labels for accessibility.
const labelMap: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "Twitter",
  youtube: "YouTube",
  tiktok: "TikTok",
  discord: "Discord",
  steam: "Steam",
  email: "Email",
};

type SocialKey = keyof typeof iconMap;

export default function SocialIcons({
  compact = false,
}: {
  compact?: boolean;
}) {
  const socials = Object.entries(siteConfig.socials).filter(([, value]) =>
    Boolean(value)
  );

  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        compact ? "justify-start" : "justify-center"
      )}
    >
      {socials.map(([key, value], idx) => {
        const socialKey = key as SocialKey;
        const Icon = iconMap[socialKey];
        if (!Icon) return null;

        const href =
          socialKey === "email" ? `mailto:${value}` : String(value);
        const label = labelMap[socialKey] ?? socialKey;

        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={href}
              target={socialKey === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/40 text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
