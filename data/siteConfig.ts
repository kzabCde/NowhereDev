import type { LocalizedText } from "@/components/providers/LanguageProvider";

export type Project = {
  id: string;
  title: string;
  category: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  role: LocalizedText;
  solution: LocalizedText;
  proof: LocalizedText[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export type Capability = {
  title: LocalizedText;
  description: LocalizedText;
  evidence: LocalizedText[];
  tools: string[];
};

export const siteConfig = {
  brand: "NOWHEREDEV",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  navLinks: [
    { label: { en: "Work", th: "ผลงาน" }, href: "#projects" },
    { label: { en: "Capabilities", th: "ความสามารถ" }, href: "#capabilities" },
    { label: { en: "Journey", th: "เส้นทาง" }, href: "#journey" },
    { label: { en: "About", th: "เกี่ยวกับ" }, href: "#about" },
    { label: { en: "Contact", th: "ติดต่อ" }, href: "#contact" },
  ],
  hero: {
    eyebrow: {
      en: "Proof-first product engineer · Thailand",
      th: "Product Engineer ที่ให้ผลงานจริงเป็นหลัก · Thailand",
    },
    title: {
      en: "Building intelligent digital products from data to interface.",
      th: "สร้างผลิตภัณฑ์ดิจิทัลอัจฉริยะ ตั้งแต่ข้อมูลจนถึงหน้าจอที่ใช้งานจริง",
    },
    description: {
      en: "I design and build production-minded web, data, AI and mobile systems that turn complex workflows into clear products people can actually use.",
      th: "ผมออกแบบและพัฒนาระบบ Web, Data, AI และ Mobile โดยเปลี่ยน workflow ที่ซับซ้อนให้กลายเป็นผลิตภัณฑ์ที่ชัดเจน ใช้งานได้จริง และพร้อมต่อยอดสู่ production",
    },
    primaryCta: { en: "Explore case studies", th: "ดู Case Study" },
    secondaryCta: { en: "View GitHub", th: "ดู GitHub" },
  },
  about: {
    name: "NowhereDev",
    role: "Product Engineer · Full Stack · Data & AI",
    location: "Thailand",
    email: "",
    story: {
      en: "My path started in culinary work, moved into Mathematics for Computer Science, and evolved into product engineering. That mix shapes how I work: understand the real operation first, structure the problem, then build the smallest reliable system that makes the workflow better.",
      th: "เส้นทางของผมเริ่มจากงานสาย Culinary ก่อนเข้าสู่ Mathematics for Computer Science และต่อยอดสู่ Product Engineering ประสบการณ์ต่างสายนี้ทำให้ผมเริ่มจากการเข้าใจงานจริง จัดโครงปัญหา แล้วสร้างระบบที่เล็กพอจะดูแลได้ แต่แข็งแรงพอจะใช้งานจริง",
    },
    principles: [
      {
        en: "Evidence over decoration — architecture, shipped features and working systems come before visual claims.",
        th: "หลักฐานมาก่อนคำโฆษณา — ให้ architecture, ฟีเจอร์ที่ส่งมอบ และระบบที่ใช้งานจริงพิสูจน์ความสามารถ",
      },
      {
        en: "Product thinking across the stack — data model, backend boundaries, interface and operations are one system.",
        th: "คิดแบบ Product ตลอดทั้ง stack — data model, backend, interface และ operations คือระบบเดียวกัน",
      },
      {
        en: "Privacy and safety by design — especially for vehicle, business and user-generated data.",
        th: "ออกแบบ Privacy และ Safety ตั้งแต่ต้น โดยเฉพาะข้อมูลรถ ธุรกิจ และข้อมูลที่ผู้ใช้สร้างขึ้น",
      },
    ],
  },
  contact: {
    headline: {
      en: "Have a product that needs to become a real system?",
      th: "มีไอเดียหรือระบบที่ต้องการพัฒนาให้ใช้งานจริง?",
    },
    description: {
      en: "I am open to product engineering, full-stack and data/AI work where ownership spans from problem framing to production delivery.",
      th: "เปิดรับงาน Product Engineering, Full-stack และ Data/AI ที่ต้องรับผิดชอบตั้งแต่การวิเคราะห์ปัญหา ออกแบบระบบ ไปจนถึง production delivery",
    },
  },
  resumeUrl: "",
  socials: {
    github: "https://github.com/kzabCde",
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    tiktok: "",
    discord: "",
    steam: "",
    email: "",
  },
  projects: [
    {
      id: "isan-air-intelligence",
      title: "Isan Air Intelligence",
      category: { en: "Data · AI · Public system", th: "Data · AI · ระบบข้อมูลสาธารณะ" },
      summary: {
        en: "A production-minded PM2.5/AQI intelligence platform for all 20 provinces in Northeast Thailand, with realtime monitoring, analytics and a 168-hour forecast surface.",
        th: "แพลตฟอร์มติดตาม PM2.5/AQI สำหรับ 20 จังหวัดภาคอีสาน พร้อม realtime monitoring, analytics และหน้าพยากรณ์ล่วงหน้า 168 ชั่วโมง",
      },
      problem: {
        en: "Air-quality data arrives from multiple pipelines and must stay understandable even when ingestion, forecast or freshness states differ.",
        th: "ข้อมูลคุณภาพอากาศมาจากหลาย pipeline และต้องยังอธิบายสถานะได้ชัด แม้ ingestion, forecast หรือความสดของข้อมูลจะไม่เท่ากัน",
      },
      role: {
        en: "Product architecture, Next.js frontend, Supabase data layer, ingestion/forecast operations and ML production workflow.",
        th: "ออกแบบ Product architecture, Next.js frontend, Supabase data layer, ingestion/forecast operations และ ML production workflow",
      },
      solution: {
        en: "Separated observed and synthetic data, exposed system health, used Supabase-backed province data, realtime cache invalidation and dual regression/classification model operations.",
        th: "แยก observed/synthetic data, แสดง system health, ใช้ข้อมูลระดับจังหวัดจาก Supabase, realtime cache invalidation และ workflow โมเดล regression/classification",
      },
      proof: [
        { en: "20 Northeast provinces", th: "ครอบคลุม 20 จังหวัดภาคอีสาน" },
        { en: "168-hour forecast surface", th: "พยากรณ์ล่วงหน้า 168 ชั่วโมง" },
        { en: "Supabase + realtime + production operations", th: "Supabase + Realtime + production operations" },
      ],
      tech: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Recharts", "Leaflet", "ML"],
      liveUrl: "https://northeastthailand-airquality.vercel.app/system",
      githubUrl: "https://github.com/kzabCde/THAI-AIR-INTELLIGENCE-LITE",
      featured: true,
    },
    {
      id: "nowtuneup",
      title: "NowTuneUp",
      category: { en: "Android · Vehicle data", th: "Android · Vehicle Data" },
      summary: {
        en: "A local-first Android OBD-II vehicle monitor paired with a Next.js release website and a controlled GitHub release pipeline.",
        th: "แอป Android สำหรับอ่านข้อมูล OBD-II แบบ local-first พร้อมเว็บไซต์ Next.js และ release pipeline บน GitHub",
      },
      problem: {
        en: "Vehicle telemetry must be read reliably without turning a diagnostics utility into an unsafe ECU-writing tool or a cloud data collector.",
        th: "ระบบอ่านข้อมูลรถต้องเสถียร โดยไม่กลายเป็นเครื่องมือเขียน ECU ที่เสี่ยง หรือส่งข้อมูลรถขึ้น cloud โดยไม่จำเป็น",
      },
      role: {
        en: "Android architecture, OBD transport/session flow, local persistence, release website and signed APK delivery workflow.",
        th: "ออกแบบ Android architecture, OBD transport/session, local persistence, เว็บไซต์ release และ workflow ส่งมอบ APK",
      },
      solution: {
        en: "Built a read-only OBD command path with Kotlin/Compose, Room/DataStore and server-validated GitHub release downloads.",
        th: "สร้างเส้นทางคำสั่ง OBD แบบ read-only ด้วย Kotlin/Compose, Room/DataStore และระบบดาวน์โหลด release ที่ตรวจสอบผ่าน server",
      },
      proof: [
        { en: "Android 8+ application", th: "รองรับ Android 8+" },
        { en: "Read-only OBD-II architecture", th: "สถาปัตยกรรม OBD-II แบบ read-only" },
        { en: "Release checksums and signed-build workflow", th: "มี checksum และ signed-build workflow" },
      ],
      tech: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "OBD-II", "ELM327", "Next.js", "GitHub Actions"],
      liveUrl: "https://nowtuneup.vercel.app/",
      githubUrl: "https://github.com/kzabCde/NowTuneUp-Smart-OBD-Vehicle-Monitor",
      featured: true,
    },
    {
      id: "nowerp",
      title: "NowERP",
      category: { en: "B2B SaaS · ERP", th: "B2B SaaS · ERP" },
      summary: {
        en: "A bilingual multi-tenant B2B ERP SaaS with company-scoped workspaces, role-based access, operational modules and Stripe subscriptions.",
        th: "B2B ERP SaaS สองภาษาแบบ multi-tenant มี workspace แยกบริษัท สิทธิ์ตาม role โมดูลธุรกิจ และ Stripe subscription",
      },
      problem: {
        en: "A business system needs strict tenant separation while still supporting multiple companies, users, permissions, billing and operational modules in one product.",
        th: "ERP ต้องแยก tenant อย่างเข้มงวด แต่ยังรองรับหลายบริษัท ผู้ใช้ สิทธิ์ การชำระเงิน และโมดูลธุรกิจในผลิตภัณฑ์เดียว",
      },
      role: {
        en: "Product restructuring, multi-tenant architecture, auth/onboarding, RLS-backed data access, bilingual UX and billing integration.",
        th: "ปรับโครง Product, multi-tenant architecture, auth/onboarding, RLS data access, UX สองภาษา และ billing integration",
      },
      solution: {
        en: "Centered every business table on company scope, enforced access with Supabase RLS/RPCs and separated public marketing from the authenticated ERP workspace.",
        th: "ผูกทุก business table กับ company scope, บังคับสิทธิ์ด้วย Supabase RLS/RPC และแยก public marketing ออกจาก authenticated ERP workspace",
      },
      proof: [
        { en: "Thai / English product surface", th: "รองรับไทย / อังกฤษทั้งระบบ" },
        { en: "Multi-company workspace model", th: "รองรับหลายบริษัทต่อผู้ใช้" },
        { en: "Supabase RLS + Stripe subscriptions", th: "Supabase RLS + Stripe subscriptions" },
      ],
      tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Stripe", "next-intl", "TanStack Query"],
      liveUrl: "https://nowerp.vercel.app/th",
      githubUrl: "https://github.com/kzabCde/NowERP",
      featured: true,
    },
    {
      id: "nowhere-stock",
      title: "Nowhere Inside Stock",
      category: { en: "Finance · Market UI", th: "Finance · Market UI" },
      summary: {
        en: "A focused stock-market interface built around market data, charting and fast signal-oriented browsing.",
        th: "อินเทอร์เฟซติดตามตลาดหุ้นที่เน้นข้อมูล กราฟ และการอ่าน signal ได้รวดเร็วโดยไม่ทำให้หน้าจอซับซ้อนเกินไป",
      },
      problem: {
        en: "Market dashboards can become noisy quickly; the product needs a compact way to surface movement and context.",
        th: "Dashboard ตลาดมักเต็มไปด้วยข้อมูล จึงต้องจัดลำดับ movement และ context ให้เข้าใจได้เร็ว",
      },
      role: {
        en: "Frontend architecture, market-data integration, state management and data visualization.",
        th: "Frontend architecture, market-data integration, state management และ data visualization",
      },
      solution: {
        en: "Combined Next.js with Yahoo Finance data, Recharts and lightweight client state for a focused market experience.",
        th: "ผสาน Next.js, Yahoo Finance data, Recharts และ client state เพื่อสร้างประสบการณ์ติดตามตลาดที่กระชับ",
      },
      proof: [
        { en: "Yahoo Finance data integration", th: "เชื่อมข้อมูล Yahoo Finance" },
        { en: "Interactive charting with Recharts", th: "กราฟแบบ interactive ด้วย Recharts" },
        { en: "State management with Zustand", th: "จัดการ state ด้วย Zustand" },
      ],
      tech: ["Next.js 15", "React 19", "TypeScript", "Yahoo Finance", "Recharts", "Zustand"],
      liveUrl: "https://nowhereinsidestock.vercel.app/",
      githubUrl: "https://github.com/kzabCde/Nowhereinsidestock",
      featured: false,
    },
    {
      id: "nowhere-mark",
      title: "Nowhere Mark",
      category: { en: "Image tools · Privacy", th: "Image Tools · Privacy" },
      summary: {
        en: "A privacy-first browser image studio for batch editing, resizing, cropping, background removal, watermarking and local project persistence.",
        th: "สตูดิโอแต่งภาพบน browser แบบ privacy-first รองรับ batch edit, resize, crop, background removal, watermark และบันทึกโปรเจกต์ไว้ในเครื่อง",
      },
      problem: {
        en: "Common image utilities often force uploads to a server, split tools across pages and lose working state between operations.",
        th: "เครื่องมือแต่งภาพทั่วไปมักบังคับอัปโหลดขึ้น server แยกเครื่องมือหลายหน้า และทำให้สถานะงานหายระหว่างขั้นตอน",
      },
      role: {
        en: "Product redesign, unified editor workflow, client-side image processing, worker performance and bilingual UX.",
        th: "Product redesign, unified editor workflow, client-side image processing, worker performance และ UX สองภาษา",
      },
      solution: {
        en: "Kept images on-device, reused one workspace across tools, offloaded supported processing to Web Workers and persisted projects with IndexedDB.",
        th: "เก็บภาพไว้บนอุปกรณ์ ใช้ workspace เดียวข้ามเครื่องมือ ย้ายงานประมวลผลไป Web Worker เมื่อรองรับ และบันทึกโปรเจกต์ด้วย IndexedDB",
      },
      proof: [
        { en: "Up to 9 images per batch", th: "รองรับสูงสุด 9 ภาพต่อ batch" },
        { en: "PNG / JPEG / WebP export", th: "ส่งออก PNG / JPEG / WebP" },
        { en: "On-device processing + IndexedDB", th: "ประมวลผลบนอุปกรณ์ + IndexedDB" },
      ],
      tech: ["Next.js", "TypeScript", "Canvas", "Web Workers", "IndexedDB", "WebAssembly", "i18n"],
      liveUrl: "https://nowhere-mark.vercel.app/editor",
      githubUrl: "https://github.com/kzabCde/NowhereMark",
      featured: false,
    },
  ] as Project[],
  capabilities: [
    {
      title: { en: "Product Engineering", th: "Product Engineering" },
      description: {
        en: "Turning real operational requirements into maintainable product architecture, interfaces and release workflows.",
        th: "เปลี่ยน requirement จากงานจริงให้เป็น product architecture, interface และ release workflow ที่ดูแลต่อได้",
      },
      evidence: [
        { en: "Multi-tenant ERP with tenant-safe access", th: "ERP แบบ multi-tenant พร้อม tenant-safe access" },
        { en: "Android OBD product + web release system", th: "Android OBD product + web release system" },
      ],
      tools: ["Next.js", "React", "TypeScript", "Kotlin", "Supabase", "GitHub Actions"],
    },
    {
      title: { en: "Data & AI Systems", th: "Data & AI Systems" },
      description: {
        en: "Designing data flows that remain explainable from ingestion and storage through analytics, models and production monitoring.",
        th: "ออกแบบ data flow ให้ตรวจสอบและอธิบายได้ ตั้งแต่ ingestion, storage, analytics, model ไปจนถึง production monitoring",
      },
      evidence: [
        { en: "20-province air-quality data platform", th: "แพลตฟอร์มข้อมูลคุณภาพอากาศ 20 จังหวัด" },
        { en: "Forecast/model operations with explicit system status", th: "Forecast/model operations พร้อมสถานะระบบที่ตรวจสอบได้" },
      ],
      tools: ["PostgreSQL", "Supabase", "Python", "Machine Learning", "Realtime", "Data Visualization"],
    },
    {
      title: { en: "Interface Systems", th: "Interface Systems" },
      description: {
        en: "Building bilingual, responsive interfaces where hierarchy and system state are clearer than visual decoration.",
        th: "สร้าง responsive interface สองภาษา โดยให้ลำดับข้อมูลและ system state ชัดกว่าการตกแต่งที่ไม่จำเป็น",
      },
      evidence: [
        { en: "Bilingual ERP and image editor", th: "ERP และ Image Editor แบบสองภาษา" },
        { en: "Dashboards for market, vehicle and environmental data", th: "Dashboard สำหรับข้อมูลตลาด รถ และสิ่งแวดล้อม" },
      ],
      tools: ["Tailwind CSS", "Design Tokens", "Framer Motion", "Accessibility", "Responsive UI", "i18n"],
    },
  ] as Capability[],
  journey: [
    {
      period: "01",
      title: { en: "Culinary operations", th: "Culinary Operations" },
      description: {
        en: "Learned to think in workflows, timing, consistency and the realities of frontline operations.",
        th: "เรียนรู้การคิดเป็น workflow, timing, consistency และข้อจำกัดของงาน operation จริง",
      },
    },
    {
      period: "02",
      title: { en: "Mathematics for Computer Science", th: "Mathematics for Computer Science" },
      description: {
        en: "Moved from operational intuition into formal problem solving, data and software systems.",
        th: "ต่อยอดจากประสบการณ์หน้างานสู่การแก้ปัญหาเชิงโครงสร้าง ข้อมูล และระบบซอฟต์แวร์",
      },
    },
    {
      period: "03",
      title: { en: "Product, software & AI", th: "Product, Software & AI" },
      description: {
        en: "Now focused on shipping end-to-end systems across web, Android, data and production operations.",
        th: "ปัจจุบันเน้นส่งมอบระบบ end-to-end ครอบคลุม Web, Android, Data และ Production Operations",
      },
    },
  ],
};

export type SiteConfig = typeof siteConfig;
