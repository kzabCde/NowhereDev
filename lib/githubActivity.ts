import { portfolioProjects } from "@/data/portfolioProjects";

export type GithubActivityItem = {
  projectId: string;
  projectTitle: string;
  repo: string;
  sha: string;
  message: string;
  url: string;
  committedAt: string;
};

type GithubCommit = {
  sha?: string;
  html_url?: string;
  commit?: {
    message?: string;
    committer?: { date?: string | null } | null;
    author?: { date?: string | null } | null;
  };
};

const githubHeaders = () => {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "NOWHEREDEV-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
};

async function getLatestCommit(
  projectId: string,
  projectTitle: string,
  repo: string,
): Promise<GithubActivityItem | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as GithubCommit[];
    const commit = payload[0];
    const committedAt = commit?.commit?.committer?.date ?? commit?.commit?.author?.date;

    if (!commit?.sha || !commit.html_url || !commit.commit?.message || !committedAt) {
      return null;
    }

    return {
      projectId,
      projectTitle,
      repo,
      sha: commit.sha.slice(0, 7),
      message: commit.commit.message.split("\n")[0],
      url: commit.html_url,
      committedAt,
    };
  } catch {
    return null;
  }
}

export async function getGithubActivity(): Promise<GithubActivityItem[]> {
  const activity = await Promise.all(
    portfolioProjects.map((project) =>
      getLatestCommit(project.id, project.title, project.githubRepo),
    ),
  );

  return activity
    .filter((item): item is GithubActivityItem => Boolean(item))
    .sort(
      (a, b) =>
        new Date(b.committedAt).getTime() - new Date(a.committedAt).getTime(),
    );
}
