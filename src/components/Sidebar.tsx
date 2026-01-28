"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const sidebarContent = (
    <>
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
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar sidebar-desktop">
        {sidebarContent}
      </aside>

      {/* Mobile header */}
      <div className="mobile-header">
        <div>
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
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="mobile-menu-content">
          {sidebarContent}
        </div>
      </div>
    </>
  );
}
