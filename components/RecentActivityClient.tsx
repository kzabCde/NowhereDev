"use client";

import Link from "next/link";
import { ArrowUpRight, GitCommitHorizontal, Github, PackageCheck } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioProjects";
import type { GithubActivityItem } from "@/lib/githubActivity";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";
import { Section, SectionHeading } from "@/components/ui/Section";

function formatDate(value: string, language: "en" | "th") {
  return new Intl.DateTimeFormat(language === "th" ? "th-TH" : "en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function RecentActivityClient({
  activity,
}: {
  activity: GithubActivityItem[];
}) {
  const { language } = useLanguage();
  const shipped = portfolioProjects
    .filter((project) => project.latestShipped)
    .sort(
      (a, b) =>
        new Date(b.latestShipped!.date).getTime() -
        new Date(a.latestShipped!.date).getTime(),
    );

  return (
    <Section id="activity" aria-label="Latest shipped and recent activity" className="py-20 md:py-28">
      <div className="border-y border-border py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Shipping / 02"
            title={language === "th" ? "สิ่งที่เพิ่งส่งมอบ และสิ่งที่กำลังขยับ" : "What shipped. What moved recently."}
            description={
              language === "th"
                ? "Latest shipped เป็น milestone ที่ตรวจสอบได้จาก release/commit ส่วน Recent activity ดึง commit ล่าสุดจาก repo ที่ GitHub API เข้าถึงได้โดยตรงและ cache รายชั่วโมง เพื่อให้ Portfolio ไม่ค้างอยู่กับข้อมูลเก่า"
                : "Latest shipped highlights verifiable release or commit milestones. Recent activity reads the newest commit from available project repositories and refreshes through an hourly cache so the portfolio stays closer to the code."
            }
          />
          <div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
            <Github size={13} /> GitHub · 1h cache
          </div>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              <PackageCheck size={14} /> {language === "th" ? "Latest shipped" : "Latest shipped"}
            </div>
            <div className="grid gap-px border border-border bg-border">
              {shipped.map((project) => (
                <Link
                  key={project.id}
                  href={project.latestShipped!.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-background p-5 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                        {project.title} · {formatDate(project.latestShipped!.date, language)}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {localize(project.latestShipped!.label, language)}
                      </p>
                    </div>
                    <ArrowUpRight size={15} className="shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              <GitCommitHorizontal size={14} /> {language === "th" ? "Recent activity" : "Recent activity"}
            </div>
            <div className="divide-y divide-border border border-border">
              {activity.length > 0 ? (
                activity.slice(0, 6).map((item) => (
                  <Link
                    key={`${item.projectId}-${item.sha}`}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-3 p-5 transition-colors hover:bg-muted/30 sm:grid-cols-[150px_minmax(0,1fr)_auto] sm:items-start"
                  >
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary">
                        {item.projectTitle}
                      </p>
                      <p className="mt-1 font-mono text-[9px] text-muted-foreground">
                        {item.sha} · {formatDate(item.committedAt, language)}
                      </p>
                    </div>
                    <p className="min-w-0 text-sm leading-relaxed text-foreground">
                      {item.message}
                    </p>
                    <ArrowUpRight size={15} className="hidden shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" />
                  </Link>
                ))
              ) : (
                <div className="p-5 text-sm leading-relaxed text-muted-foreground">
                  {language === "th"
                    ? "GitHub activity ไม่พร้อมใช้งานชั่วคราว แต่ข้อมูล Case Study และ Latest shipped ยังแสดงจากข้อมูลที่ตรวจสอบไว้ใน Portfolio"
                    : "GitHub activity is temporarily unavailable. Case-study content and verified shipped milestones remain available from the portfolio data."
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
