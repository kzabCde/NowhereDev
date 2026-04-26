import Link from "next/link";
import { ArrowUp } from "lucide-react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <p className="text-center text-sm text-white/65">© 2026 NowhereDev — Crafted in the dark.</p>
        <Link
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-white/75 transition hover:border-neon hover:text-neon"
        >
          Back to top <ArrowUp size={14} />
        </Link>
      </div>
    </footer>
  );
}
