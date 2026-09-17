import type { LocalizedText } from "@/components/providers/LanguageProvider";
import { siteConfig, type Project } from "@/data/siteConfig";

export type ProjectArea = "Web" | "Mobile" | "AI" | "Data";

export type LatestShipped = {
  label: LocalizedText;
  date: string;
  url: string;
};

export type PortfolioProject = Project & {
  areas: ProjectArea[];
  githubRepo: string;
  latestShipped?: LatestShipped;
};

const areaMap: Record<string, ProjectArea[]> = {
  "isan-air-intelligence": ["Web", "AI", "Data"],
  nowtuneup: ["Web", "Mobile", "Data"],
  nowerp: ["Web", "Data"],
  "nowhere-stock": ["Web", "Data"],
  "nowhere-mark": ["Web"],
};

function enrichProject(project: Project): PortfolioProject {
  const githubRepo = project.githubUrl.replace("https://github.com/", "").replace(/\/$/, "");

  if (project.id === "isan-air-intelligence") {
    return {
      ...project,
      summary: {
        en: "A production-minded PM2.5/AQI intelligence platform for all 20 provinces in Northeast Thailand, combining realtime monitoring, a 168-hour forecast surface and closed-day forecast verification against later reference data.",
        th: "แพลตฟอร์ม PM2.5/AQI สำหรับ 20 จังหวัดภาคอีสาน ที่รวม realtime monitoring, พยากรณ์ล่วงหน้า 168 ชั่วโมง และระบบตรวจสอบผลย้อนหลังโดยเทียบค่าที่เคยทำนายกับข้อมูลอ้างอิงหลังสิ้นวัน",
      },
      solution: {
        en: "Separated observed and synthetic data, moved multi-season retraining to a Supabase-only source of truth, exposed system health, and added source-specific forecast verification with closed-day scoring instead of heuristic confidence claims.",
        th: "แยก observed/synthetic data, ย้าย multi-season retraining ให้ใช้ Supabase เป็น source of truth, แสดง system health และเพิ่ม forecast verification แยกตามแหล่งข้อมูลพร้อม closed-day scoring แทนการอ้าง confidence แบบ heuristic",
      },
      proof: [
        { en: "20 Northeast provinces with a 168-hour forecast surface", th: "ครอบคลุม 20 จังหวัดภาคอีสาน พร้อมพยากรณ์ 168 ชั่วโมง" },
        { en: "Closed-day forecast verification history with source-specific reports", th: "มีประวัติเทียบค่าทำนายหลังสิ้นวัน พร้อมรายงานแยกตามแหล่งข้อมูล" },
        { en: "Supabase-only monthly training source of truth with lineage-preserving archive", th: "Monthly retraining ใช้ Supabase เป็น source of truth พร้อม archive ที่เก็บ lineage" },
      ],
      areas: ["Web", "AI", "Data"],
      githubRepo,
      latestShipped: {
        label: {
          en: "Forecast verification rollout · closed-day evaluation",
          th: "Forecast verification · ประเมินผลหลังสิ้นวัน",
        },
        date: "2026-09-14",
        url: "https://github.com/kzabCde/THAI-AIR-INTELLIGENCE-LITE/commit/282f0de76f1fe8c2cbf4f2b55d1e6260aabae77b",
      },
    };
  }

  if (project.id === "nowtuneup") {
    return {
      ...project,
      summary: {
        en: "A local-first Android OBD-II vehicle monitor with Bluetooth Classic/USB connectivity, the Graphite UI & Motion refresh, and a Next.js release site backed by signed GitHub releases.",
        th: "แอป Android OBD-II แบบ local-first รองรับ Bluetooth Classic/USB พร้อม Graphite UI & Motion และเว็บไซต์ Next.js สำหรับแจก signed release ผ่าน GitHub อย่างควบคุม",
      },
      solution: {
        en: "Kept OBD operations read-only, preserved on-device profiles and history, rebuilt the interface around Material 3 motion/accessibility, and automated tested APK signing, SHA-256 verification and release delivery through GitHub Actions.",
        th: "คงการทำงาน OBD แบบ read-only เก็บโปรไฟล์และประวัติไว้บนเครื่อง ปรับ UI ใหม่ด้วย Material 3 พร้อม motion/accessibility และทำ pipeline ทดสอบ เซ็น APK ตรวจ SHA-256 และเผยแพร่ release ผ่าน GitHub Actions",
      },
      proof: [
        { en: "v1.15.0 published with signed APK and SHA-256 checksum", th: "เผยแพร่ v1.15.0 พร้อม signed APK และ SHA-256 checksum แล้ว" },
        { en: "Graphite UI & Motion across vehicle setup, dashboard, diagnostics and Time Slip", th: "Graphite UI & Motion ครอบคลุม vehicle setup, dashboard, diagnostics และ Time Slip" },
        { en: "Local-first, read-only OBD path with user-created profiles and no sample vehicles", th: "Local-first และ read-only OBD โดยผู้ใช้สร้างโปรไฟล์เอง ไม่มีรถตัวอย่างเริ่มต้น" },
      ],
      areas: ["Web", "Mobile", "Data"],
      githubRepo,
      latestShipped: {
        label: {
          en: "v1.15.0 · Graphite UI & Motion",
          th: "v1.15.0 · Graphite UI & Motion",
        },
        date: "2026-09-13",
        url: "https://github.com/kzabCde/NowTuneUp-Smart-OBD-Vehicle-Monitor/releases/tag/v1.15.0",
      },
    };
  }

  return {
    ...project,
    areas: areaMap[project.id] ?? ["Web"],
    githubRepo,
  };
}

const nowInfoProject: PortfolioProject = {
  id: "nowinfo",
  title: "NowInfo",
  category: {
    en: "News intelligence · Local-first",
    th: "News Intelligence · Local-first",
  },
  summary: {
    en: "A source-first world news desk that combines live RSS headlines, conservative event grouping, regional context and a browser-local reading workspace in one Thai/English interface.",
    th: "ศูนย์รวมข่าวโลกแบบ source-first ที่รวม live RSS, การจัดกลุ่มเหตุการณ์อย่างระมัดระวัง, มุมมองตามภูมิภาค และพื้นที่ติดตามข่าวแบบ local-first ไว้ในอินเทอร์เฟซไทย/อังกฤษเดียว",
  },
  problem: {
    en: "Following global news across many publishers is fragmented, while aggressive summarization can hide source context or imply certainty that the underlying headlines do not support.",
    th: "การติดตามข่าวโลกจากหลายสำนักกระจัดกระจาย และการสรุปที่แรงเกินไปอาจทำให้บริบทของแหล่งข่าวหายหรือสร้างความมั่นใจเกินกว่าหลักฐานจากพาดหัวจริง",
  },
  role: {
    en: "Product architecture, RSS ingestion, event grouping, local workspace design, responsive dashboard UX and production deployment.",
    th: "ออกแบบ Product architecture, RSS ingestion, event grouping, local workspace, responsive dashboard UX และ production deployment",
  },
  solution: {
    en: "Preserved publisher links, grouped related headlines conservatively, exposed source health and regional activity, and kept interests, follows, reading state and saved stories in browser storage without requiring accounts.",
    th: "คงลิงก์ต้นทางของสำนักข่าว จัดกลุ่มพาดหัวที่เกี่ยวข้องแบบ conservative แสดง source health และกิจกรรมตามภูมิภาค พร้อมเก็บ interests, การติดตาม, สถานะการอ่าน และข่าวที่บันทึกไว้ใน browser โดยไม่บังคับสร้างบัญชี",
  },
  proof: [
    { en: "17 RSS feeds with independent source-failure handling", th: "17 RSS feeds พร้อมแยกจัดการกรณีแต่ละ source ล้มเหลว" },
    { en: "World map, topic filters and 24-hour publication activity", th: "แผนที่โลก ตัวกรองหัวข้อ และกราฟกิจกรรมข่าวย้อนหลัง 24 ชั่วโมง" },
    { en: "Local-first follows, reading state, saved stories and JSON backup", th: "ติดตามหัวข้อ สถานะการอ่าน ข่าวที่บันทึก และ JSON backup แบบ local-first" },
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "RSS",
    "fast-xml-parser",
    "LocalStorage",
    "Vercel",
  ],
  liveUrl: "https://nowinfo.vercel.app/",
  githubUrl: "https://github.com/kzabCde/nowinfo",
  featured: true,
  areas: ["Web", "Data"],
  githubRepo: "kzabCde/nowinfo",
  latestShipped: {
    label: {
      en: "v0.3 · source-first world news workspace",
      th: "v0.3 · workspace ข่าวโลกแบบ source-first",
    },
    date: "2026-09-12",
    url: "https://github.com/kzabCde/nowinfo",
  },
};

export const portfolioProjects: PortfolioProject[] = [
  ...siteConfig.projects.map((project) => enrichProject(project)),
  nowInfoProject,
];
