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
      {/* Name / Logo */}
      <div>
        <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
          <svg width="119" height="32" viewBox="0 0 78 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <path d="M0.1816 19.8439V18.1623L10.4954 2.76629H0.069493V0.711005H13.2607V2.3926L2.9469 17.7886H13.3728V19.8439H0.1816ZM17.7345 0.711005V19.8439H15.4176V0.711005H17.7345ZM20.5384 19.8439V0.711005H22.8553V17.7886H31.7491V19.8439H20.5384ZM35.8118 0.711005V19.8439H33.4949V0.711005H35.8118ZM44.1732 19.8439V0.711005H46.49V17.7886H55.3838V19.8439H44.1732ZM59.4466 0.711005V19.8439H57.1297V0.711005H59.4466ZM74.8064 0.711005H77.1233V13.3791C77.1233 14.687 76.815 15.8547 76.1984 16.8824C75.588 17.9038 74.7254 18.7103 73.6106 19.302C72.4958 19.8875 71.1879 20.1802 69.6869 20.1802C68.1859 20.1802 66.878 19.8875 65.7631 19.302C64.6483 18.7103 63.7826 17.9038 63.166 16.8824C62.5556 15.8547 62.2505 14.687 62.2505 13.3791V0.711005H64.5673V13.1922C64.5673 14.1264 64.7729 14.9579 65.1839 15.6866C65.595 16.409 66.1804 16.9789 66.9403 17.3962C67.7063 17.8073 68.6219 18.0128 69.6869 18.0128C70.7519 18.0128 71.6674 17.8073 72.4335 17.3962C73.1996 16.9789 73.785 16.409 74.1898 15.6866C74.6009 14.9579 74.8064 14.1264 74.8064 13.1922V0.711005Z" fill="currentColor"/>
          </svg>
        </Link>
        <div style={{ fontSize: 13, marginTop: 11, lineHeight: 1.4 }}>
          / Product Designer<br />
          / Content Creator
        </div>
      </div>

      {/* Location */}
      <div style={{ fontSize: 12, textTransform: "uppercase", lineHeight: 1.2 }}>
        Los Angeles<br />
        CA, USA (GMT-8)
      </div>

      {/* Navigation */}
      <div>
        <div className="section-label">Navigation</div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link bracket-btn ${pathname.startsWith(link.href) ? "active" : ""}`}
          >
            <span className="bracket bracket-left">[</span>
            <span className="bracket-label">{link.label}</span>
            <span className="bracket-arrow">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.32192 5.61149L6.17487 11.0623L5.30884 10.5623L8.39275 5.22085L5.0018 6.12945L4.74298 5.16352L9.86912 3.78998L11.257 8.96948L10.2911 9.2283L9.32192 5.61149Z" fill="currentColor"/>
              </svg>
            </span>
            <span className="bracket bracket-right">]</span>
          </Link>
        ))}
      </div>

      {/* Socials */}
      <div>
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
    </>
  );

  const isHome = pathname === "/";

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`sidebar sidebar-desktop${isHome ? " sidebar-home" : ""}`}>
        {sidebarContent}
      </aside>

      {/* Mobile header */}
      <div className="mobile-header">
        <div>
          <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <svg width="119" height="32" viewBox="0 0 78 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
              <path d="M0.1816 19.8439V18.1623L10.4954 2.76629H0.069493V0.711005H13.2607V2.3926L2.9469 17.7886H13.3728V19.8439H0.1816ZM17.7345 0.711005V19.8439H15.4176V0.711005H17.7345ZM20.5384 19.8439V0.711005H22.8553V17.7886H31.7491V19.8439H20.5384ZM35.8118 0.711005V19.8439H33.4949V0.711005H35.8118ZM44.1732 19.8439V0.711005H46.49V17.7886H55.3838V19.8439H44.1732ZM59.4466 0.711005V19.8439H57.1297V0.711005H59.4466ZM74.8064 0.711005H77.1233V13.3791C77.1233 14.687 76.815 15.8547 76.1984 16.8824C75.588 17.9038 74.7254 18.7103 73.6106 19.302C72.4958 19.8875 71.1879 20.1802 69.6869 20.1802C68.1859 20.1802 66.878 19.8875 65.7631 19.302C64.6483 18.7103 63.7826 17.9038 63.166 16.8824C62.5556 15.8547 62.2505 14.687 62.2505 13.3791V0.711005H64.5673V13.1922C64.5673 14.1264 64.7729 14.9579 65.1839 15.6866C65.595 16.409 66.1804 16.9789 66.9403 17.3962C67.7063 17.8073 68.6219 18.0128 69.6869 18.0128C70.7519 18.0128 71.6674 17.8073 72.4335 17.3962C73.1996 16.9789 73.785 16.409 74.1898 15.6866C74.6009 14.9579 74.8064 14.1264 74.8064 13.1922V0.711005Z" fill="currentColor"/>
            </svg>
          </Link>
          <div style={{ fontSize: 13, marginTop: 11, lineHeight: 1.4 }}>
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
