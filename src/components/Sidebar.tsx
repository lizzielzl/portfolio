"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/lizzielzl/", label: "LinkedIn" },
  { href: "https://www.instagram.com/lizzielzl/", label: "Instagram" },
  { href: "https://www.tiktok.com/@lizzielzl_", label: "TikTok" },
  { href: "https://www.xiaohongshu.com/user/profile/5a64579111be10376cf202fb", label: "Rednote" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div>
        {/* Name / Logo */}
        <div style={{ marginBottom: 8 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              ZILI LIU
            </div>
          </Link>
          <div style={{ fontSize: 13, marginTop: 4, lineHeight: 1.4 }}>
            / Product Designer<br />
            / Content Creator
          </div>
        </div>

        {/* Location */}
        <div style={{ fontSize: 12, textTransform: "uppercase", marginTop: 48, lineHeight: 1.2 }}>
          Los Angeles<br />
          CA, USA (GMT-8)
        </div>

        {/* Navigation */}
        <div style={{ marginTop: 48 }}>
          <div className="section-label">Navigation</div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname.startsWith(link.href) ? "active" : ""}`}
            >
              [{link.label}]
            </Link>
          ))}
        </div>
      </div>

      <div>
        {/* Socials */}
        <div style={{ marginBottom: 32 }}>
          <div className="section-label">Socials</div>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Email */}
        <div>
          <div className="section-label">Email</div>
          <a
            href="mailto:lizzie@zililiu.com"
            className="social-link"
          >
            lizzie@zililiu.com
          </a>
        </div>
      </div>
    </aside>
  );
}
