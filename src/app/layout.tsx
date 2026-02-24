import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import CursorDot from "@/components/CursorDot";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zililiu.com"),
  title: "ZILI LIU — Product Designer & Content Creator",
  description:
    "Product designer with 4+ years of experience in UI/UX, visual and motion design. Lead designer for AI products including Indigo (#1 on Product Hunt) and Voyage (500+ brands).",
  openGraph: {
    siteName: "ZILI LIU",
    type: "website",
  },
};

function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zili Liu",
    alternateName: "Lizzie",
    url: "https://zililiu.com",
    jobTitle: "Product Designer",
    description:
      "Product designer with 4+ years of experience in UI/UX, visual and motion design.",
    sameAs: [
      "https://www.linkedin.com/in/lizzielzl/",
      "https://www.instagram.com/lizzielzl/",
      "https://www.tiktok.com/@lizzielzl_",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonJsonLd />
      </head>
      <body className={inter.variable}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <CursorDot />
        <div className="site-layout">
          <Sidebar />
          <main id="main-content" className="main-content">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
