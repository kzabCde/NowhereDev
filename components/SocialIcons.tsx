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
  Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  tiktok: Music2,
  discord: Disc3,
  email: Mail
} as const;

type SocialKey = keyof typeof iconMap;

type Props = {
  compact?: boolean;
};

export default function SocialIcons({ compact = false }: Props) {
  const socials = Object.entries(siteConfig.socials).filter(([, value]) => Boolean(value));

  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "justify-start" : "justify-center"}`}>
      {socials.map(([key, value]) => {
        const socialKey = key as SocialKey;
        const Icon = iconMap[socialKey];
        const href = socialKey === "email" ? `mailto:${value}` : value;

        return (
          <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.96 }} key={key}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={key}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/85 transition hover:border-neon hover:text-neon hover:shadow-glow"
            >
              <Icon size={18} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
