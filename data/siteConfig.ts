export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
};

export type Skill = {
  name: string;
  level: number;
};

export const siteConfig = {
  /* =========================
     BRAND
  ========================= */
  brand: "NOWHEREDEV",
  heroTitle: "NOWHEREDEV",

  heroSubtitle: [
    "PRECISION DEVELOPER",
    "FULL STACK ENGINEER",
    "UI SYSTEM DESIGNER",
    "DIGITAL BUILDER",
  ],

  /* =========================
     NAVIGATION
  ========================= */
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Social", href: "#socials" },
    { label: "Contact", href: "#contact" },
  ],

  /* =========================
     ABOUT
  ========================= */
  about: {
    name: "NowhereDev",
    role: "Full Stack Developer",
    bio: "Crafting fast, elegant, and scalable digital products with clean code, modern UI systems, and performance-first thinking.",

    location: "Thailand",
    email: "NowhereDev@email.com",

    yearsExperience: 3,
    projectsDelivered: 16,
    happyClients: 14,
  },

  /* =========================
     CONTACT
  ========================= */
  contactHeadline:
    "Let’s build your next standout digital experience.",

  resumeUrl: "",

  /* =========================
     SOCIAL
  ========================= */
  socials: {
    github: "https://github.com/kzabCde",
    linkedin: "",
    facebook:
      "https://www.facebook.com/supavich.sativattamakorn/",
    instagram: "https://www.instagram.com/ithque_/",
    twitter: "",
    youtube: "https://www.youtube.com/@Qtudio",
    tiktok: "https://www.tiktok.com/@qubestudi0",
    discord: "",
    steam: "https://steamcommunity.com/id/KZzzzCN/",
    email: "NowhereDev@email.com",
  },

  /* =========================
     PROJECTS
  ========================= */
  projects: [
    {
      title: "Thailand Air Intelligence",
      description:
        "Real-time PM2.5 / PM10 / AQI monitoring dashboard for Thailand.",
      image:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "Tailwind", "API"],
      liveUrl:
        "https://thai-air-intelligence-lite.vercel.app/",
      githubUrl: "",
      featured: true,
      category: "Dashboard",
    },

    {
      title: "SEPS",
      description:
        "Modern online product catalog with clean browsing experience.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "Tailwind", "Supabase"],
      liveUrl: "https://seps-catalog.vercel.app/",
      githubUrl: "",
      featured: true,
      category: "E-Commerce",
    },

    {
      title: "Point Collector App",
      description:
        "Loyalty reward platform for customer point collection systems.",
      image:
        "https://images.unsplash.com/photo-1646972463404-6ba338ca31fb?q=80&w=1965&auto=format&fit=crop",
      tech: ["Next.js", "Tailwind", "Supabase"],
      liveUrl: "https://point-collector-app.vercel.app/",
      githubUrl: "",
      featured: true,
      category: "Business",
    },

    {
      title: "XAU BTC By Nowhere",
      description:
        "Real-time Gold (XAU) and Bitcoin (BTC) price tracking dashboard with market insights.",
      image:
        "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "Tailwind", "Finance API"],
      liveUrl:
        "https://xau-btcbynowhere.web.app/",
      githubUrl: "",
      featured: true,
      category: "Finance Dashboard",
    },

    {
      title: "Nowhere Game",
      description:
        "An engaging browser-based game for entertainment and challenge.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      liveUrl:
        "https://nowheregame.vercel.app/",
      githubUrl: "",
      featured: true,
      category: "Game",
    },
    
  ] as Project[],

  /* =========================
     SKILLS
  ========================= */
  skills: [
    { name: "Next.js", level: 70 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 50 },
    { name: "Supabase", level: 80 },
    { name: "Tailwind CSS", level: 60 },
    { name: "UI/UX Design", level: 80 },
    { name: "Framer Motion", level: 80 },
    { name: "REST API", level: 75 },
  ] as Skill[],
};

export type SiteConfig = typeof siteConfig;