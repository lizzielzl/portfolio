import Link from "next/link";
import { projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const projectDetails: Record<
  string,
  {
    headline: string;
    date: string;
    summary: string;
    keywords: string[];
    tools: string[];
    sections: { title: string; description: string }[];
    status?: string;
  }
> = {
  indigo: {
    headline: "Building an AI copilot for high-performance teams",
    date: "Jun 2024 - Present",
    status: "Live Project",
    summary:
      "Indigo is an executive intelligence OS built for teams. We deliver AGI-level business understanding by unifying Real-Time Truth (live decisions) with Institutional Memory (trusted context).",
    keywords: ["AI", "Productivity"],
    tools: ["Figma", "After Effects", "Webflow"],
    sections: [
      {
        title: "Desktop App Design",
        description:
          "Indigo meets users where they work, not in another browser tab. One system for meetings, assistants, and commands on macOS and Windows.",
      },
      {
        title: "Design System",
        description:
          "I created the AI OS Design System for Indigo, covering text, color, and effect styles; reusable UI components; and scalable variables for color, spacing, and typography. The system supports seamless switching between light and dark modes, as well as theming with different primary colors and typefaces.",
      },
      {
        title: "Website & Brand Assets Design",
        description:
          "I designed Indigo's marketing websites and all brand assets, including logos, brand guidelines, socials, and animations.",
      },
    ],
  },
  voyage: {
    headline:
      "Building an SMS marketing and messaging platform for e-commerce brands",
    date: "Aug 2024 - Present",
    status: "Live Project",
    summary:
      "Voyage is an SMS marketing and messaging platform that helps e-commerce brands drive revenue and build customer loyalty at scale.",
    keywords: ["AI", "E-Commerce", "SMS Marketing"],
    tools: ["Figma"],
    sections: [
      {
        title: "Web App Design",
        description:
          "Voyage's web app is a powerful marketing platform that includes Venus (LiveRecover), Earth (Customers), Jupiter (Campaigns), and more.",
      },
      {
        title: "Design System & Modes",
        description:
          "I'm building and maintaining the Stellar Design System for all of Voyage's products. I designed two modes — dark and light — allowing users to switch between them based on their preference.",
      },
      {
        title: "Brand Assets Design",
        description:
          "I designed Voyage's brand assets, including socials, one-pagers, graphics, and merch.",
      },
    ],
  },
  quarters: {
    headline: "Designing a modern web application",
    date: "2024",
    summary: "Quarters is a web application project.",
    keywords: ["Web App"],
    tools: ["Figma"],
    sections: [],
  },
  shopswap: {
    headline: "Growing a B2B SaaS platform to 300+ brands",
    date: "Feb 2023 - Jun 2024",
    summary:
      "Led design for ShopSwap, a B2B SaaS platform that helps brands grow through collaborative marketing. Helped the platform grow from the ground up to 300+ onboarded brands within 12 months.",
    keywords: ["E-Commerce", "B2B SaaS"],
    tools: ["Figma"],
    sections: [
      {
        title: "Product Design",
        description:
          "I led product design from inception to production, built and maintained design systems, developed art direction and brand assets, and conducted user research and testing.",
      },
    ],
  },
  foodies: {
    headline: "A food discovery mobile app",
    date: "2023",
    summary: "Foodies is a mobile app for food and restaurant discovery.",
    keywords: ["Mobile", "Food"],
    tools: ["Figma"],
    sections: [],
  },
  nexev: {
    headline: "Discover events in your neighborhood",
    date: "2023",
    summary: "Nexev is a mobile app for discovering local events.",
    keywords: ["Mobile", "Events"],
    tools: ["Figma"],
    sections: [],
  },
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const details = projectDetails[slug];

  if (!project || !details) {
    return (
      <div style={{ padding: "32px 40px" }}>
        <p>Project not found.</p>
        <Link href="/work">Back to work</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "32px 40px" }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>&gt;</span>
        <Link href="/work">Work</Link>
        <span>&gt;</span>
        <strong style={{ color: "var(--foreground)" }}>
          {project.title} / {project.type}
        </strong>
      </div>

      {/* Headline + Date */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 16,
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.3, maxWidth: "70%" }}>
          {details.headline}
        </h1>
        <span style={{ fontSize: 13, color: "var(--gray-mid)" }}>
          {details.date}
        </span>
      </div>

      {details.status && (
        <div
          style={{
            display: "inline-block",
            fontSize: 12,
            border: "1px solid var(--foreground)",
            padding: "4px 12px",
            marginBottom: 24,
          }}
        >
          {details.status}
        </div>
      )}

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "24px 0" }} />

      {/* Info row */}
      <div className="info-row">
        <div className="info-label">Summary</div>
        <div>{details.summary}</div>
        <div>
          <div className="info-label">Keywords</div>
          {details.keywords.map((k) => (
            <div key={k} style={{ fontSize: 13 }}>
              — {k}
            </div>
          ))}
        </div>
        <div>
          <div className="info-label">Tools</div>
          {details.tools.map((t) => (
            <div key={t} style={{ fontSize: 13 }}>
              — {t}
            </div>
          ))}
        </div>
        <div />
      </div>

      {/* Sections */}
      {details.sections.map((section, i) => (
        <div key={i} style={{ marginTop: 48 }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            {section.title}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 700, color: "#333" }}>
            {section.description}
          </p>
          {/* Image gallery placeholder */}
          <div className="gallery-section" style={{ marginTop: 24 }}>
            <div
              style={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gray-mid)",
                fontSize: 14,
              }}
            >
              Project images coming soon
            </div>
          </div>
        </div>
      ))}

      {/* Back to work */}
      <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #e0e0e0" }}>
        <Link href="/work" style={{ fontSize: 13, textTransform: "uppercase" }}>
          ← Back to all work
        </Link>
      </div>
    </div>
  );
}
