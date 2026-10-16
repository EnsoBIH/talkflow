import type { Metadata } from "next";
import { DownloadChooser } from "@/components/landing/DownloadChooser";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Download for Mac",
  description: "Download talkflow for Mac: Apple Silicon or Intel, macOS 13 or later.",
  path: "/download/mac",
});

export default function DownloadMacPage() {
  return <DownloadChooser />;
}
