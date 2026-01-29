import Image from "next/image";

const workExperience = [
  { title: "Lead Designer @ Indigo", date: "6/2024 - Present" },
  { title: "Lead Designer @ Voyage", date: "8/2024 - Present" },
  { title: "UX Designer @ ShopSwap", date: "2/2023 - 6/2024" },
  { title: "Freelance UX Designer", date: "9/2022 - 2/2023" },
  { title: "UX Intern @ iQIYI", date: "10/2020 - 3/2021" },
  { title: "Social Media Marketing Specialist @ MRG", date: "5/2022 - 12/2022" },
  { title: "Social Media Content Creator", date: "1/2021 - Present" },
  { title: "GQ Branding & Marketing Intern @ Conde Nast", date: "7/2019 - 1/2020" },
  { title: "Marketing & PR Intern @ Weber Shandwick", date: "1/2019 - 2/2019" },
];

const education = [
  { title: "University of Michigan / Certificate of UX Research and Design", date: "2022 - 2023" },
  { title: "University of Southern California / Master of Communication Management", date: "2020 - 2022" },
  { title: "Communication University of China / Bachelor of Management", date: "2016 - 2020" },
  { title: "Communication University of China / Bachelor of Arts", date: "2017 - 2019" },
];

export default function AboutPage() {
  return (
    <div style={{ padding: "32px 40px" }}>
      <div className="page-title">About</div>

      {/* Bio + Photo */}
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 48 }}>
        <div>
          <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 16 }}>
            Hi! This is Zili Liu. You can call me Lizzie :)
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 16 }}>
            I&apos;m a product designer with <strong>4</strong> years of experience in UI/UX design,
            visual and motion design. Currently, I&apos;m the lead designer for two AI products. One
            of them (Indigo) ranked <strong>#1 on Product Hunt</strong>, while the other (Voyage) is{" "}
            <strong>actively used by over 500 brands</strong>. Prior to these roles, I led design for
            a B2B SaaS platform (ShopSwap), helping it grow from the ground up to{" "}
            <strong>300+ onboarded brands within 12 months</strong>. I lead product design from
            inception to production, build and maintain design systems, develop art direction and
            brand assets, and conduct user research and testing.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 16 }}>
            Before fully transitioning to design, I spent <strong>2</strong> years working as a
            digital marketer for leading companies in the PR and fashion industries. I&apos;m also a
            social media content creator with <strong>100K+ followers</strong> and{" "}
            <strong>1M+ likes</strong>, focusing on lifestyle and dance.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 16 }}>
            I merge my specialties in creative design and digital marketing to create research-driven
            and customer-focused experiences that are innovative, engaging, effective, and on-brand.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.4 }}>
            I specialize in both B2B and B2C products in AI, e-commerce and social media industries,
            across desktop, web and mobile platforms.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Image
            src="/images/about.jpg"
            alt="Zili Liu"
            width={500}
            height={666}
            style={{ objectFit: "cover", maxHeight: 560 }}
          />
        </div>
      </div>

      {/* Testimonial */}
      <div style={{ maxWidth: 600, marginLeft: "auto", marginBottom: 48 }}>
        <p style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 12 }}>
          Stakeholders who have worked with me often refer to me as an &ldquo;intuitive designer.&rdquo;
        </p>
        <p style={{ fontSize: 18, fontWeight: 500, fontStyle: "italic", marginBottom: 16 }}>
          &ldquo;Lizzie is good at figuring things out.&rdquo;
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.4 }}>
          As a designer for AI products in a fast-paced startup environment — where everything is new
          and rapidly evolving — I strive to stay up-to-date with emerging technologies, trends, and
          features. I actively integrate AI tools such as Cursor and v0 into my design process, and
          translate the company&apos;s conceptual visions into clear, effective design solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div>
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Work Experience</div>
        </div>
        <div>
          <div className="stat-number">30+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div>
          <div className="stat-number">100K+</div>
          <div className="stat-label">Followers</div>
        </div>
        <div>
          <div className="stat-number">100+</div>
          <div className="stat-label">Brand Partnerships</div>
        </div>
      </div>

      {/* Work Experience */}
      <div style={{ padding: "60px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
          }}
        >
          <div className="page-title" style={{ marginBottom: 0 }}>
            Work
          </div>
          <div>
            {workExperience.map((item, i) => (
              <div key={i} className="timeline-item">
                <span>{item.title}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div style={{ padding: "60px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 0,
          }}
        >
          <div style={{ gridColumn: "1 / -1", textAlign: "right" }}>
            <span className="page-title" style={{ marginBottom: 0 }}>
              Education
            </span>
          </div>
          <div>
            {education.map((item, i) => (
              <div key={i} className="timeline-item">
                <span>{item.title}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
