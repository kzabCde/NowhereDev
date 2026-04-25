import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-neon/40 bg-gradient-to-r from-neon/15 to-violetGlow/20 p-10 text-center shadow-glow">
        <p className="text-white/85">{siteConfig.contactHeadline}</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s Work Together</h2>
        <Link
          href={`mailto:${siteConfig.about.email}`}
          className="mt-6 inline-flex rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-neon hover:bg-neon/20"
        >
          Email Me
        </Link>
      </div>
    </section>
  );
}
