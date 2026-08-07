import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const canonicalUrl = siteConfig.siteUrl || undefined;

export const metadata: Metadata = {
  title: {
    default: "NOWHEREDEV — Product Engineer · Full Stack · Data & AI",
    template: "%s — NOWHEREDEV",
  },
  description:
    "Proof-first product engineering portfolio covering full-stack web systems, Android, data platforms, AI workflows and production operations.",
  keywords: [
    "Product Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Data Engineering",
    "Machine Learning",
    "Android",
    "Thailand",
    "NOWHEREDEV",
  ],
  authors: [{ name: "NowhereDev" }],
  creator: "NowhereDev",
  alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  openGraph: {
    title: "NOWHEREDEV — Proof-first Product Engineer",
    description:
      "Production-minded web, Android, data and AI systems — shown through shipped products and technical evidence.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["th_TH"],
    url: canonicalUrl,
    siteName: "NOWHEREDEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOWHEREDEV — Proof-first Product Engineer",
    description:
      "Production-minded web, Android, data and AI systems — shown through shipped products and technical evidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#070a0a" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "NowhereDev",
  url: canonicalUrl,
  jobTitle: "Product Engineer",
  homeLocation: {
    "@type": "Country",
    name: "Thailand",
  },
  sameAs: [siteConfig.socials.github],
  knowsAbout: [
    "Product Engineering",
    "Full Stack Development",
    "Next.js",
    "Android Development",
    "Data Engineering",
    "Machine Learning",
    "Supabase",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-primary focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground"
            >
              Skip to content
            </a>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
