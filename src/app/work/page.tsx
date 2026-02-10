"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects, categories } from "@/lib/projects";
import FadeUp from "@/components/animations/FadeUp";
import SplitText from "@/components/animations/SplitText";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardContent = (
    <>
      <div className="project-card-image">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={400}
          height={300}
          style={{ width: "100%", height: "auto", display: "block" }}
          unoptimized={project.thumbnail.endsWith(".gif")}
        />
      </div>
      <div className={`project-card-title${!project.hasDetail ? " no-underline" : ""}`}>
        {project.title} / {project.type}
      </div>
    </>
  );

  const card = project.hasDetail ? (
    <Link
      href={`/work/${project.slug}`}
      className="project-card"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="project-card project-card-static">
      {cardContent}
    </div>
  );

  return (
    <FadeUp
      whileInView
      delay={(index % 3) * 0.1}
      duration={0.5}
      distance={25}
    >
      {card}
    </FadeUp>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const nonFeaturedProjects = projects.filter((p) => !p.featured);

  const filtered =
    activeCategory === null
      ? null // show all (two-section layout)
      : activeCategory === "featured"
        ? featuredProjects
        : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="page-padding-listing">
      <div className="page-title">
        <SplitText text="Work" />
      </div>

      {/* Category filters */}
      <FadeUp delay={0.2} duration={0.5}>
        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab bracket-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="bracket bracket-left">[</span>
              <span className="bracket-label">{cat.label}&nbsp;&nbsp;{cat.count}</span>
              <span className="bracket bracket-right">]</span>
            </button>
          ))}
        </div>
      </FadeUp>

      {/* Breadcrumb */}
      <FadeUp delay={0.3} duration={0.5}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <strong style={{ color: "var(--foreground)" }}>Work</strong>
        </div>
      </FadeUp>

      {filtered === null ? (
        <>
          {/* All projects: featured in 3-col, rest in 3-col */}
          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "32px",
              rowGap: "48px",
              marginTop: "24px",
            }}
          >
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "32px",
              rowGap: "48px",
              marginTop: "32px",
            }}
          >
            {nonFeaturedProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </>
      ) : (
        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: "32px",
            rowGap: "48px",
            marginTop: "24px",
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
