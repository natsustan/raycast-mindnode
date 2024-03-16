import { getApplications } from "@raycast/api";


async function isInstalled(bundleId: string): Promise<boolean> {
  const installedApplications = await getApplications();

  const app = installedApplications.find((application) => application.bundleId == bundleId);

  return !!app;
}