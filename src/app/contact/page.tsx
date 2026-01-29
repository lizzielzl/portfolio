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
        <div className="page-title">Let&apos;s Talk</div>

        <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 32 }}>
          For new business inquiries, collaborations, or just to say hello — feel free to reach out.
        </p>

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

        <div>
          <div className="section-label" style={{ marginBottom: 8 }}>
            Location
          </div>
          <p style={{ fontSize: 14 }}>Los Angeles, CA, USA (GMT-8)</p>
        </div>
      </div>
    </div>
  );
}
