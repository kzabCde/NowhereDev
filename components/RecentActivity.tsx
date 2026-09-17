import RecentActivityClient from "@/components/RecentActivityClient";
import { getGithubActivity } from "@/lib/githubActivity";

export default async function RecentActivity() {
  const activity = await getGithubActivity();

  return <RecentActivityClient activity={activity} />;
}
