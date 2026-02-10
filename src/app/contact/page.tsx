"use client";

import FadeUp from "@/components/animations/FadeUp";
import SplitText from "@/components/animations/SplitText";

export default function ContactPage() {
  return (
    <div
      style={{
        padding: "32px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <div style={{ maxWidth: 600 }}>
        <div className="page-title">
          <SplitText text="Let's Talk" />
        </div>

        <FadeUp delay={0.2} duration={0.5}>
          <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 32 }}>
            For new business inquiries, collaborations, or just to say hello — feel free to reach out.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} duration={0.5}>
          <div style={{ marginBottom: 32 }}>
            <div className="section-label" style={{ marginBottom: 8 }}>
              Email
            </div>
            <a
              href="mailto:lizzie@zililiu.com"
              style={{
                fontSize: 24,
                fontWeight: 300,
                textDecoration: "underline",
                textUnderlineOffset: 4,
                color: "inherit",
              }}
            >
              lizzie@zililiu.com
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.4} duration={0.5}>
          <div style={{ marginBottom: 32 }}>
            <div className="section-label" style={{ marginBottom: 8 }}>
              Socials
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <a
                href="https://www.linkedin.com/in/lizzielzl/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/lizzielzl/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@lizzielzl_"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                TikTok
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.5} duration={0.5}>
          <div>
            <div className="section-label" style={{ marginBottom: 8 }}>
              Location
            </div>
            <p style={{ fontSize: 14 }}>Los Angeles, CA, USA (GMT-8)</p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
