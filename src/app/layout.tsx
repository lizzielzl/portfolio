import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import CursorDot from "@/components/CursorDot";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZILI LIU — Product Designer & Content Creator",
  description:
    "Product designer with 4+ years of experience in UI/UX, visual and motion design. Lead designer for AI products including Indigo (#1 on Product Hunt) and Voyage (500+ brands).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <CursorDot />
        <div className="site-layout">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
