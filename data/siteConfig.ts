export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
};

export const siteConfig = {
  brand: "NOWHEREDEV",
  heroTitle: "NOWHEREDEV",
  heroSubtitle: [
    "Full Stack Developer",
    "Creative Engineer",
    "UI Architect",
    "Digital Builder"
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Social", href: "#socials" },
    { label: "Contact", href: "#contact" }
  ],
  about: {
    name: "NowhereDev",
    bio: "Nowhere But Anywhere",
    location: "World",
    email: "NowhereDev@email.com",
    yearsExperience: 5,
    projectsDelivered: 28,
    happyClients: 19
  },
  contactHeadline: "Let’s build your next standout digital experience.",
  resumeUrl: "",
  socials: {
    github: "https://github.com/kzabCde",
    linkedin: "",
    facebook: "https://www.facebook.com/supavich.sativattamakorn/",
    instagram: "https://www.instagram.com/ithque_/",
    twitter: "",
    youtube: "https://www.youtube.com/@Qtudio",
    tiktok: "https://www.tiktok.com/@qubestudi0",
    discord: "",
    email: "NowhereDev@email.com"
  },
  projects: [
    {
      title: "Thailand Air Intelligence",
      description: "สำหรับติดตาม PM2.5 / PM10 / AQI",
      image:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "Tailwind"],
      liveUrl: "https://thai-air-intelligence-lite.vercel.app/",
      githubUrl: "",
      featured: true
    },
    {
      title: "SEPS",
      description: "Online catalog",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "Tailwind"],
      liveUrl: "https://seps-catalog.vercel.app/",
      githubUrl: "",
      featured: true
    }
  ] as Project[],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwind",
    "MongoDB"
  ]
};

export type SiteConfig = typeof siteConfig;
