"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects, categories } from "@/lib/projects";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("featured");

  const filtered =
    activeCategory === "featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div style={{ padding: "32px 40px" }}>
      <div className="page-title">Work</div>

      {/* Category filters */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            [{cat.label}&nbsp;&nbsp;{cat.count}]
          </button>
        ))}
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>&gt;</span>
        <strong style={{ color: "var(--foreground)" }}>Work</strong>
      </div>

      {/* Project grid */}
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
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="project-card"
          >
            <div className="project-card-image">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={300}
                style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }}
                unoptimized
              />
            </div>
            <div className="project-card-title">
              {project.title} / {project.type}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
