import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { projects } from "@/lib/projects";
import ImageGrid from "@/components/ImageGrid";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface ProjectSection {
  title: string;
  description: string;
  richContent?: React.ReactNode; // rich text content (replaces description when present)
  images: string[]; // image filenames relative to /images/{slug}/
  columns?: number; // grid columns for image gallery (default 4)
  fullWidthImages?: number[]; // indices of images that should be full-width (1 col)
}

interface ProjectDetail {
  headline: string;
  date: string;
  summary: string;
  keywords: string[];
  tools: string[];
  sections: ProjectSection[];
}

function getProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((f: string) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

const projectDetails: Record<string, ProjectDetail> = {
  indigo: {
    headline: "Building an AI copilot for high-performance teams",
    date: "Jun 2024 - Present",

    summary:
      "Indigo is an executive intelligence OS built for teams. We deliver AGI-level business understanding by unifying Real-Time Truth (live decisions) with Institutional Memory (trusted context).",
    keywords: ["AI", "Productivity"],
    tools: ["Figma", "After Effects", "Webflow"],
    sections: [
      {
        title: "Context",
        description: "",
        richContent: (
          <>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              Problem
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30 }}>
              Everyone is waiting for AGI to understand their business. <strong>But it never will.</strong>
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30 }}>
              Because:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 30, listStyleType: "disc" }}>
              <li style={{ marginBottom: 15 }}>Decisions hide in meetings, Slack, email, and task tools.</li>
              <li style={{ marginBottom: 15 }}>Context is scattered across Notion, Drive, and docs.</li>
              <li style={{ marginBottom: 15 }}>OpenAI, Anthropic, and others change weekly—no safe single bet.</li>
            </ul>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              Solution
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30 }}>
              Indigo solves problems <strong>from needle-in-haystack to strategic analysis.</strong>
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30 }}>
              Indigo connects your entire stack—meetings, Slack, email, tasks, and knowledge bases—then separates live decision streams (hot) from institutional memory (cold). We continuously distill and index insights in the cold corpus with citations, and a deep, model-agnostic research agent runs requests across both to answer, draft, and take action.
            </p>
            <Image
              src="/images/indigo/02-structure.png"
              alt="Indigo architecture diagram"
              width={1200}
              height={472}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </>
        ),
        images: [],
      },
      {
        title: "Desktop App Design",
        description:
          "Indigo meets users where they work, not in another browser tab. One system for meetings, assistants, and commands on macOS and Windows.",
        columns: 4,
        images: [
          "03-app-1.jpg",
          "04-app-2.jpg",
          "05-app-3.jpg",
          "06-app-4.jpg",
          "07-app-5.jpg",
          "08-app-6.jpg",
          "09-app-7.jpg",
          "10-app-8.jpg",
          "11-app-9.jpg",
          "12-app-10.jpg",
          "13-app-11.jpg",
          "14-app-12.jpg",
        ],
      },
      {
        title: "Design System",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20, marginTop: 0 }}>
              I created the <strong>AI OS Design System</strong> for Indigo, covering text, color, and effect styles; reusable UI components; and scalable variables for color, spacing, and typography. The system supports seamless switching between light and dark modes, as well as theming with different primary colors and typefaces.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 0, marginTop: 0 }}>
              Because most AI productivity products share similar interaction patterns, the AI OS Design System can be white-labeled or licensed by other AI startups. It{"\u2019"}s already trusted by teams such as <strong>GoAbacus</strong> to power their product UX.
            </p>
          </>
        ),
        columns: 2,
        images: ["15-ds-1.jpg", "16-ds-2.jpg"],
      },
      {
        title: "Website & Brand Assets Design",
        description:
          "I designed Indigo's marketing websites and all brand assets, including logos, brand guidelines, socials, and animations.",
        columns: 4,
        images: [
          "17-web-1.jpg",
          "18-web-2.jpg",
          "19-web-3.jpg",
          "20-web-4.jpg",
          "21-web-5.jpg",
          "22-web-6.jpg",
          "23-web-7.jpg",
          "24-web-8.jpg",
          "25-web-9.jpg",
          "26-web-10.jpg",
          "27-web-11.jpg",
          "28-web-12.jpg",
        ],
      },
    ],
  },
  voyage: {
    headline:
      "Building an SMS marketing and messaging platform for e-commerce brands",
    date: "Aug 2024 - Present",

    summary:
      "Voyage is an SMS marketing and messaging platform that helps e-commerce brands drive revenue and build customer loyalty at scale. Our goal is to enable brands to foster thoughtful, authentic interactions with their customers and build community. While developing texting solutions, I am also helping Voyage design a powerful marketing ecosystem that leverages AI for customer and campaign management.",
    keywords: ["AI", "E-Commerce", "SMS Marketing"],
    tools: ["Figma"],
    sections: [
      {
        title: "Web App Design",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20, marginTop: 0 }}>
              Voyage{"\u2019"}s web app is a powerful marketing platform / universe that includes:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 0, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}><strong>Venus (LiveRecover):</strong> An SMS marketing tool that helps e-commerce brands engage customers and drive sales through live agents, including abandoned checkout recovery and post-purchase engagement.</li>
              <li style={{ marginBottom: 10 }}><strong>Earth (Customers):</strong> A customer and segment management system.</li>
              <li style={{ marginBottom: 10 }}><strong>Jupiter (Campaigns):</strong> A campaign creation and management tool.</li>
              <li style={{ marginBottom: 0 }}>And more to come{"\u2026"}</li>
            </ul>
          </>
        ),
        columns: 4,
        images: [
          "18.png", "16.png", "19.png", "14.png",
          "15.png", "20.png", "21.png", "17.png",
          "13.png", "30.png", "26.png", "27.png",
          "31.png", "22.png", "23.png", "24.png",
          "25.png", "28.png", "29.png", "32.png",
        ],
      },
      {
        title: "Design System & Modes",
        description:
          "I\u2019m building and maintaining the Stellar Design System for all of Voyage\u2019s products. When creating color variables, I designed two modes - dark and light - allowing users to switch between them based on their preference.",
        columns: 4,
        images: ["10.png", "11.png", "08.png", "09.png"],
      },
      {
        title: "Brand Assets Design",
        description:
          "I designed Voyage\u2019s brand assets, including socials, one-pagers, graphics, and merch.",
        columns: 4,
        images: [
          "12.png", "36.png", "35.png", "37.png",
          "04.png", "07.png", "05.png", "06.png",
          "02.png", "01.png", "33.png", "03.png",
        ],
      },
    ],
  },
  quarters: {
    headline: "Designing a modern web application",
    date: "2024",
    summary:
      "Quarters is a web application project focused on clean design and intuitive user experience.",
    keywords: ["Web App"],
    tools: ["Figma"],
    sections: [
      {
        title: "Product Design",
        description:
          "Full product design including user flows, interface design, and component systems.",
        images: [],
      },
    ],
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
        images: [],
      },
    ],
  },
  foodies: {
    headline: "A food discovery mobile app",
    date: "2023",
    summary:
      "Foodies is a mobile app for food and restaurant discovery, helping users find great places to eat nearby.",
    keywords: ["Mobile", "Food"],
    tools: ["Figma"],
    sections: [
      {
        title: "Mobile App Design",
        description:
          "Complete mobile app design from concept to high-fidelity screens.",
        images: [],
      },
    ],
  },
  nexev: {
    headline: "Discover events in your neighborhood",
    date: "2023",
    summary:
      "Nexev is a mobile app for discovering local events and connecting with your community.",
    keywords: ["Mobile", "Events"],
    tools: ["Figma"],
    sections: [
      {
        title: "Mobile App Design",
        description:
          "Complete mobile app design for local event discovery.",
        images: [],
      },
    ],
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

  // Get all images for this project from the filesystem
  const allImages = getProjectImages(slug);

  // For projects where section images aren't manually mapped,
  // distribute all images across sections evenly
  const sections = details.sections.map((section, i) => {
    if (section.images.length > 0 || section.richContent) return section;
    // Auto-distribute: skip first image (hero), split rest across image sections
    const contentImages = allImages.slice(1); // skip hero GIF
    const imageSections = details.sections.filter((s) => s.images.length === 0 && !s.richContent);
    const sectionIndex = imageSections.indexOf(section);
    const sectionCount = imageSections.length;
    const perSection = Math.ceil(contentImages.length / sectionCount);
    const start = sectionIndex * perSection;
    const sectionImages = contentImages.slice(start, start + perSection);
    return { ...section, images: sectionImages, columns: section.columns || 4 };
  });

  // Hero image is always the first
  const heroImage = allImages.length > 0 ? allImages[0] : null;

  return (
    <div style={{ padding: "30px 60px 60px" }}>
      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ marginBottom: 44 }}>
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
        className="headline-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 0,
        }}
      >
        <h1 style={{ fontSize: 33, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-2px", maxWidth: "70%" }}>
          {details.headline}
        </h1>
        <span className="headline-date" style={{ fontSize: 12, color: "var(--gray-mid)" }}>
          {details.date}
        </span>
      </div>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "22px 0" }} />

      {/* Info row */}
      <div className="info-row">
        <div>
          <div className="info-label">Summary</div>
          <div style={{ fontSize: 14, letterSpacing: "-0.5px", lineHeight: 1.4 }}>{details.summary}</div>
        </div>
        <div>
          <div className="info-label">Keywords</div>
          {details.keywords.map((k) => (
            <div key={k} style={{ fontSize: 12, letterSpacing: "-0.5px", lineHeight: 1.3, marginBottom: 4 }}>
              — {k}
            </div>
          ))}
        </div>
        <div>
          <div className="info-label">Tools</div>
          {details.tools.map((t) => (
            <div key={t} style={{ fontSize: 12, letterSpacing: "-0.5px", lineHeight: 1.3, marginBottom: 4 }}>
              — {t}
            </div>
          ))}
        </div>
      </div>

      {/* Hero image (standalone, before sections) */}
      {heroImage && (
        <div style={{ paddingBottom: 60 }}>
          <Image
            src={`/images/${slug}/${heroImage}`}
            alt={project.title}
            width={1440}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            unoptimized={heroImage.endsWith(".gif")}
          />
        </div>
      )}

      {/* Sections with images */}
      {sections.map((section, i) => {
        const cols = section.columns || 4;
        const fullWidth = section.fullWidthImages || [];
        return (
          <div key={i}>
            {/* Section text: 2-col grid (label | description or rich content) */}
            <div style={{ padding: "100px 0" }}>
              <div className="project-section" style={{ maxWidth: "70%", marginLeft: "15%" }}>
                <h2
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: "uppercase" as const,
                    lineHeight: 1.4,
                    marginBottom: 0,
                  }}
                >
                  {section.title}
                </h2>
                {section.richContent ? (
                  <div>{section.richContent}</div>
                ) : (
                  <div>
                    {section.description.split("\n\n").map((para, pi) => (
                      <p key={pi} style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 0, marginTop: pi > 0 ? 20 : 0 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Images with lightbox */}
            {section.images.length > 0 && (
              <ImageGrid
                slug={slug}
                images={section.images}
                columns={cols}
                alt={`${project.title} - ${section.title}`}
                fullWidthImages={fullWidth}
              />
            )}

            {/* Full-width section divider */}
            {section.images.length > 0 && (
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "#e0e0e0",
                  marginTop: 80,
                }}
              />
            )}
          </div>
        );
      })}

      {/* More work */}
      <div style={{ padding: "60px 0" }}>
        <div className="page-title" style={{ marginBottom: 30 }}>More work</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px 30px",
          }}
        >
          {(() => {
            const featured = projects.filter((p) => p.featured && p.hasDetail);
            const currentIndex = featured.findIndex((p) => p.slug === slug);
            const next: typeof featured = [];
            for (let i = 1; next.length < 2 && i < featured.length; i++) {
              next.push(featured[(currentIndex + i) % featured.length]);
            }
            return next;
          })().map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="project-card"
              >
                <div className="project-card-image">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    unoptimized={p.thumbnail.endsWith(".gif")}
                  />
                </div>
                <div className="project-card-title">
                  {p.title} / {p.type}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
