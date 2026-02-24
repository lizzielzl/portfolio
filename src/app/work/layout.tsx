import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — ZILI LIU",
  description:
    "Featured projects in UI/UX, web, desktop, and mobile app design by Zili Liu.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
