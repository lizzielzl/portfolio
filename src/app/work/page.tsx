"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects, categories } from "@/lib/projects";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardContent = (
    <>
      <div className="project-card-image">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={400}
          height={300}
          style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }}
          unoptimized={project.thumbnail.endsWith(".gif")}
        />
      </div>
      <div className={`project-card-title${!project.hasDetail ? " no-underline" : ""}`}>
        {project.title} / {project.type}
      </div>
    </>
  );

  if (project.hasDetail) {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="project-card"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="project-card project-card-static">
      {cardContent}
    </div>
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
    <div style={{ padding: "32px 40px" }}>
      <div className="page-title">Work</div>

      {/* Category filters */}
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

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>&gt;</span>
        <strong style={{ color: "var(--foreground)" }}>Work</strong>
      </div>

      {filtered === null ? (
        <>
          {/* All projects: featured in 3-col, rest in 4-col */}
          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              marginTop: "24px",
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            {nonFeaturedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </>
      ) : (
        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            marginTop: "24px",
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
