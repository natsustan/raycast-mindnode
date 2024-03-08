import { closeMainWindow, open } from "@raycast/api";

export default async function Command() {
  const url = "mindnode://newDocument?type=outline";
  await closeMainWindow();
  open(url);
}