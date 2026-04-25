import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.brand} | Portfolio`,
  description: "Premium futuristic portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion.",
  openGraph: {
    title: `${siteConfig.brand} | Portfolio`,
    description: "Premium futuristic portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-night text-white antialiased">{children}</body>
    </html>
  );
}
