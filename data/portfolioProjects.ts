import { siteConfig, type Project } from "@/data/siteConfig";

const nowInfoProject: Project = {
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
};

export const portfolioProjects: Project[] = [
  ...siteConfig.projects,
  nowInfoProject,
];
