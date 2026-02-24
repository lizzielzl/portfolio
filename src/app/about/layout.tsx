import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ZILI LIU",
  description:
    "Product designer with 4+ years of experience in UI/UX, visual and motion design. Lead designer for AI products.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
