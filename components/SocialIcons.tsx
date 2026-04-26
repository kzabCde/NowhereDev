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

type SocialKey = keyof typeof iconMap;

type Props = {
  compact?: boolean;
};

export default function SocialIcons({ compact = false }: Props) {
  const socials = Object.entries(siteConfig.socials).filter(
    ([, value]) => Boolean(value)
  );

  return (
    <div
      className={`flex flex-wrap gap-3 ${
        compact ? "justify-start" : "justify-center"
      }`}
    >
      {socials.map(([key, value], idx) => {
        const socialKey = key as SocialKey;
        const Icon = iconMap[socialKey];

        if (!Icon) return null;

        const href =
          socialKey === "email" ? `mailto:${value}` : String(value);

        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            whileHover={{ y: -5, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={key}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/75 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white hover:text-black hover:shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
            >
              <Icon
                size={18}
                className="transition duration-300 group-hover:scale-110"
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}