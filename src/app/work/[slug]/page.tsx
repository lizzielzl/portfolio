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
    headline: "Building a rewards program and financial app",
    date: "Jul 2024 - Aug 2024",
    summary:
      "Quarters is a Canadian rewards program and financial app that helps users earn points on rent payments and purchases with partnered brands. As a freelance designer, I worked closely with the founders to create a design guide, a basic design system, wireframes, and prototypes for the MVP.",
    keywords: ["Finance", "Real Estate"],
    tools: ["Figma"],
    sections: [
      {
        title: "Web App Design",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20, marginTop: 0 }}>
              Quarters{"\u2019"} MVP includes four main features:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 0, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}><strong>Dashboard:</strong> Provides an overview of all activities.</li>
              <li style={{ marginBottom: 10 }}><strong>Insights:</strong> Analyzes income and expenses.</li>
              <li style={{ marginBottom: 10 }}><strong>Listings:</strong> Allows users to view home listings and details.</li>
              <li style={{ marginBottom: 0 }}><strong>Bonus:</strong> An incentive program that helps users earn points through badges, a rewards calendar, and a referral program.</li>
            </ul>
          </>
        ),
        columns: 4,
        images: [
          "11.png", "04.png", "03.png", "10.png",
          "06.png", "07.png", "08.png", "09.png",
          "02.png", "05.png", "13.png", "12.png",
        ],
      },
      {
        title: "Responsive Design",
        description:
          "I designed mobile versions to ensure a responsive user experience.",
        columns: 4,
        images: [
          "16.png", "20.png", "18.png", "24.png",
          "23.png", "14.png", "21.png", "15.png",
          "22.png", "19.png", "17.png", "25.png",
        ],
      },
    ],
  },
  shopswap: {
    headline:
      "Building the future of e-commerce advertising, powered by brand partnership",
    date: "Feb 2023 - Jun 2024",
    summary:
      "ShopSwap is a SaaS platform that streamlines brand partnerships and marketing campaign management. Our goal was to empower brands to collaborate rather than compete, making it easy and time-efficient to establish partnerships with value-aligned brands. I led the product design from inception to 300+ brands on board in 12 months.",
    keywords: ["Marketing", "E-Commerce"],
    tools: ["Figma", "Jira", "Hotjar", "After Effects"],
    sections: [
      {
        title: "Context",
        description: "",
        richContent: (
          <>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              Problem
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              Digital advertising has become increasingly unsustainable for most DTC brands. Rising CPMs, iOS 14.5 privacy changes, and the decline of third-party cookies have driven up costs while reducing effectiveness. At the same time, the pandemic-era boom in DTC brands has intensified competition for ad space, and post-COVID challenges like higher logistics costs have slashed marketing budgets.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              As a result, 40% of DTC brands have cut paid media spend, and 77% now prioritize brand partnerships as a key acquisition strategy. But executing a partnership campaign is expensive and time-consuming{"\u2014"}often costing over $10K and taking months to coordinate. For lean teams, this manual process of identifying partners, reaching out, and launching campaigns is a major barrier.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30 }}>
              This growing pressure revealed a clear opportunity: to build a scalable, tech-driven solution that makes collaborative marketing fast, accessible, and effective for brands of all sizes.
            </p>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              Goal
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              Our mission is to help brands grow through collaboration, not competition. We aim to make co-marketing fast, easy, and accessible.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              In its first phase, our product helps brands:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 20, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>Discover value-aligned partners open to collaboration</li>
              <li style={{ marginBottom: 10 }}>Plan and launch joint campaigns with built-in tools</li>
              <li style={{ marginBottom: 0 }}>Track campaign performance and learn what works</li>
            </ul>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 0 }}>
              Long term, we{"\u2019"}re building a DTC SaaS toolkit for brands to thrive in the post-cookie, partnership-driven era.
            </p>
          </>
        ),
        images: [],
      },
      {
        title: "Web App Design",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20, marginTop: 0 }}>
              During my time as a solo designer at ShopSwap, I was responsible for:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 0, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}><strong>Ideation & Coordination:</strong> Worked with the leadership team to uncover insights and translate concepts into features. Collaborated with the development and marketing teams to align user goals with business objectives.</li>
              <li style={{ marginBottom: 10 }}><strong>Design Execution & Validation:</strong> Created sitemaps, user flows, wireframes, and prototypes. Conducted usability studies and user testing to validate designs. Led efforts to improve the service and address user pain points in the brand partnership experience.</li>
              <li style={{ marginBottom: 10 }}><strong>Building & Maintaining the Design System:</strong> Developed a modular design system with reusable components and their states. Regularly maintained the system to ensure UI patterns remained up to date, embraced evolving design and development best practices, and continued to meet user needs.</li>
              <li style={{ marginBottom: 0 }}><strong>Art Direction & Brand Design:</strong> Designed brand guidelines, transactional emails, social media posts, and campaign-related image and video content.</li>
            </ul>
          </>
        ),
        columns: 4,
        images: [
          "05.png", "17.png", "18.png", "02.png",
          "11.png", "08.png", "09.png", "03.png",
          "14.png", "21.png", "10.png", "04.png",
          "13.png", "06.png", "15.png", "19.png",
          "12.png", "07.png", "20.png", "16.png",
        ],
      },
      {
        title: "Validation & Refinement",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30, marginTop: 0 }}>
              User testing is a critical part of the design process. By interviewing users and observing their behavior, we identify design issues and continuously iterate for a better user experience. Here are a few examples showcasing the validation and refinement process.
            </p>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              #1 Onboarding
            </h2>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Problem:
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              To provide a better brand-matching experience, we created ShopSwap Scores, which use our algorithm to indicate how well a brand aligns with yours. However, the algorithm requires brands to provide detailed information during onboarding, which can extend the process and discourage users from completing it.
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Solution:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 30, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>Visualized the onboarding questions using Tinder-style cards.</li>
              <li style={{ marginBottom: 0 }}>Added skipping options and encouraged users to complete the onboarding questions after signing up by blurring the ShopSwap Scores until onboarding is finished.</li>
            </ul>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              #2 Pre-Generated Task List
            </h2>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Problem:
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              There are common campaign types often used by brands during partnerships, such as discount sharing, giveaways, and gifts with purchase. We aim to reduce the workload for brands as much as possible by providing pre-generated tasks once they have chosen a campaign type. However, we discovered that the complexity and specificity of each task vary. For example, some tasks require collaboration between brands, while others can be completed by each brand individually. Some tasks can be completed by one brand but require confirmation from the other brand.
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Solution:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 30, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>We defined each task as one of four types: individual, collaborative, hybrid, or general. Additionally, we designed progress pills with tooltips to educate users on how the different task types work and guide them on what to do next.</li>
              <li style={{ marginBottom: 0 }}>After user testing, we discovered that one brand typically does most of the work, while the other mainly just confirms. As a result, we removed the restrictions and dependencies between tasks, allowing brands to move on to the next task without having to wait for the other brand to take action. This enhances the continuity of the workflow and reduces the bounce rate.</li>
            </ul>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              #3 Landing Page Customization Tool
            </h2>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Problem:
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              Discount code or gift redemption landing pages are essential in co-marketing campaigns, but they can be a hassle for brands to create. Brands need to build a functional website that collects emails and displays discount codes. Additionally, they need the ability to customize these landing pages to align with their branding.
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Solution:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 30, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>Created an easy-to-use and customizable landing page builder.</li>
              <li style={{ marginBottom: 0 }}>Designed pre-made templates that brands can easily customize to align with their branding.</li>
            </ul>
            <h2 style={{ fontSize: 27, fontWeight: 300, marginBottom: 15, marginTop: 0 }}>
              #4 Campaign Broadcasts
            </h2>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Problem:
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              We discovered that some brands prefer to publicly announce a partnership opportunity with a specific campaign type and topic in mind, rather than cold-calling other brands without knowing if they are interested in collaborating.
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Solution:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 0, listStyleType: "disc" }}>
              <li style={{ marginBottom: 0 }}>Designed and developed a new {"\u2018"}Campaign Broadcasts{"\u2019"} feature that enables brands to post and apply for partnership opportunities, as well as manage their broadcasts and applications.</li>
            </ul>
          </>
        ),
        columns: 2,
        fullWidthImages: [0, 1, 2, 3],
        images: ["22.jpg", "23.gif", "24.jpg", "25.jpg"],
      },
    ],
  },
  foodies: {
    headline: "Visualizing food exploring and sharing experience",
    date: "Sep 2022 - Feb 2023",
    summary:
      "Foodies is a social media platform dedicated to food content, helping users find inspiration for the everyday question, \u201cWhat should we eat today?\u201d Users can browse photo and video streams for meal ideas and book restaurants directly through the linked content.",
    keywords: ["Food & Dining", "Social Networking"],
    tools: ["Figma"],
    sections: [
      {
        title: "Context",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20, marginTop: 0 }}>
              {"\u201C"}What should I eat today?{"\u201D"} and {"\u201C"}Where should we go to eat?{"\u201D"} are everyday questions with surprisingly few quick, visual answers. While eating is a universal need, there{"\u2019"}s no seamless way to find food inspiration or discover restaurants on the go.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              On platforms like TikTok, Instagram Reels, and YouTube Shorts, food content is everywhere{"\u2014"}users often see a dish or restaurant and instantly think, {"\u201C"}I want to try that!{"\u201D"} At the same time, people love capturing food photos and videos, but most of this content ends up buried in camera rolls or fleeting stories.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 0 }}>
              Foodies bridges this gap{"\u2014"}a platform where users can share visual food moments, get inspired by real experiences, and discover or book restaurants directly through content.
            </p>
          </>
        ),
        images: [],
      },
      {
        title: "Research & Exploration",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20, marginTop: 0 }}>
              I started this project with a series of research processes:
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              <strong>User Interviews:</strong> I created an interview protocol to ask potential users. The high-level goals of this study were:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 20, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>To understand user needs when exploring food and restaurants.</li>
              <li style={{ marginBottom: 10 }}>To identify desirable and lacking features in current competitors.</li>
              <li style={{ marginBottom: 0 }}>To determine if users need a more visualized application for exploring food and restaurants, and if so, how they currently address this need{"\u2014"}what tools and processes they use.</li>
            </ul>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              <strong>Affinity Diagramming:</strong> Based on interviews with four potential users, I created sticky notes for each participant and organized them into groups based on their relationships. This process led to the functional requirements for Foodies.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              <strong>Competitive Analysis:</strong> I divided the competitive landscape into four categories: Maps, Business Reviews, Restaurant Booking, Social Media
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              Based on my research, I began the ideation process and identified three system goals to address the pain points in the current competitive landscape:
            </p>
            <ol style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 20, listStyleType: "decimal" }}>
              <li style={{ marginBottom: 10 }}>Explore restaurants by browsing through a photo stream.</li>
              <li style={{ marginBottom: 10 }}>Explore food by swiping through a full-screen video stream.</li>
              <li style={{ marginBottom: 0 }}>View restaurant details and reserve a time.</li>
            </ol>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 0 }}>
              I also created personas, scenarios, information architecture, and task flows before moving on to the design phase.
            </p>
          </>
        ),
        columns: 4,
        images: [
          "02.png", "03.png", "04.png", "05.png",
          "06.png", "07.png", "08.png", "09.png",
        ],
      },
      {
        title: "Mobile App Design",
        description:
          "I created interactive prototypes from the wireframes.",
        columns: 4,
        images: [
          "10.png", "11.png", "12.png", "13.png",
          "14.png", "15.png", "16.png", "17.png",
          "18.png", "19.png", "20.png", "21.png",
        ],
      },
      {
        title: "Usability Testing",
        description: "",
        richContent: (
          <>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15, marginTop: 0 }}>
              With the prototypes, I conducted a usability test to understand:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 20, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>Does the app meet the needs of its target users when it comes to finding food and restaurants?</li>
              <li style={{ marginBottom: 0 }}>What problems do users encounter when trying to explore food and restaurants using the app?</li>
            </ul>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              Each test was divided into four parts:
            </p>
            <ol style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 20, listStyleType: "decimal" }}>
              <li style={{ marginBottom: 5 }}>Pre-Test Interview</li>
              <li style={{ marginBottom: 5 }}>Tasks</li>
              <li style={{ marginBottom: 5 }}>Post-Questionnaires</li>
              <li style={{ marginBottom: 0 }}>Debriefing</li>
            </ol>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Key Findings:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 20, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>Participants found the app visually appealing and easy to navigate.</li>
              <li style={{ marginBottom: 10 }}>Participants appreciated the restaurant recommendations and suggested adding more filtering options for search.</li>
              <li style={{ marginBottom: 0 }}>Participants found the current sharing task flow inefficient and suggested adding in-app sharing and messaging features.</li>
            </ul>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 10 }}>
              Next Steps:
            </p>
            <ul style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 0, listStyleType: "disc" }}>
              <li style={{ marginBottom: 10 }}>Improve the sorting and filtering options to enhance the user experience.</li>
              <li style={{ marginBottom: 10 }}>Consider adding more sharing options, such as an in-app messaging feature that allows users to share posts and chat directly.</li>
              <li style={{ marginBottom: 0 }}>Current designs focus on content consumption task flows, such as browsing and interacting with content and viewing restaurant details. The next design phase will shift towards content generation task flows, including taking and uploading photos and videos, writing reviews, and managing personal profiles.</li>
            </ul>
          </>
        ),
        images: [],
      },
    ],
  },
  nexev: {
    headline:
      "Building better relationships and healthier communities with a streamlined event planning mobile app",
    date: "Jan 2023",
    summary:
      "Nexev is a streamlined activity planning platform with the mission of helping people build better relationships and healthier communities by removing friction in event planning. The goal of this project was to identify usability issues with the beta release and enhance the critical features for the next product iteration.",
    keywords: ["Event Planning", "Social Networking"],
    tools: ["Figma", "After Effects"],
    sections: [
      {
        title: "Research & Ideation",
        description: "",
        richContent: (
          <>
            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 15, marginTop: 0 }}>
              Understanding The Problem
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 20 }}>
              Before Nexev hired a product design team, a beta release of the platform was implemented based on a blue-sky concept created by the founder and developer. The mockups were developed without usability testing and had minimal consideration for technical and product limitations.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              I conducted research interviews with primary users to uncover pain points they were experiencing with the beta release. My research focused on:
            </p>
            <ol style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 30, listStyleType: "decimal" }}>
              <li style={{ marginBottom: 5 }}>Understanding user goals and needs</li>
              <li style={{ marginBottom: 5 }}>Identifying pain points in the existing user journey</li>
              <li style={{ marginBottom: 0 }}>Determining task success rates</li>
            </ol>
            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 15, marginTop: 0 }}>
              Gathering Insights
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 30 }}>
              I compiled a list of usability issues, prioritized by severity, using Jakob Nielsen{"\u2019"}s five-point rating scale.
            </p>
            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 15, marginTop: 0 }}>
              Prototyping The Solution
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: 15 }}>
              Based on the identified problems, I worked on addressing these pain points by proposing the following solutions:
            </p>
            <ol style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.5px", paddingLeft: 20, marginBottom: 0, listStyleType: "decimal" }}>
              <li style={{ marginBottom: 10 }}>Redesign the nav bar: Consolidate main features into five tabs for easier access.</li>
              <li style={{ marginBottom: 10 }}>Redesign buttons and icons: Enlarge touch areas to improve tapping accuracy.</li>
              <li style={{ marginBottom: 10 }}>Redesign the event creation page: Reduce the number of steps to minimize time to completion.</li>
              <li style={{ marginBottom: 10 }}>Redesign sorting and filtering features: Make these tools clearer and more intuitive.</li>
              <li style={{ marginBottom: 10 }}>Redesign event cards on the homepage: Display only necessary information to create a cleaner and more focused layout.</li>
              <li style={{ marginBottom: 10 }}>Enhance event category details: Reference current event planning competitors for inspiration.</li>
              <li style={{ marginBottom: 10 }}>Rephrase description texts in the event creation form: Simplify the language to improve user understanding.</li>
              <li style={{ marginBottom: 10 }}>Enlarge text areas to improve readability.</li>
              <li style={{ marginBottom: 0 }}>Change the current font: Switch to a more common mobile app font, Open Sans, to increase the app{"\u2019"}s credibility.</li>
            </ol>
          </>
        ),
        columns: 4,
        images: ["02.png", "03.png", "04.png", "05.png"],
      },
      {
        title: "Final Prototypes",
        description:
          "I proposed changing the brand colors to a more youthful and energetic style. After several iterations and ongoing discussions with stakeholders, I chose a bolder design direction and created the final prototypes for the event creation task flow.",
        columns: 4,
        images: [
          "06.png", "07.png", "08.png", "09.png",
          "10.png", "11.png", "12.png", "13.png",
        ],
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
