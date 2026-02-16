import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects
    .filter((p) => p.hasDetail)
    .map((p) => ({
      url: `https://www.zililiu.com/work/${p.slug}`,
      lastModified: new Date(),
    }));

  return [
    { url: "https://www.zililiu.com", lastModified: new Date() },
    { url: "https://www.zililiu.com/work", lastModified: new Date() },
    { url: "https://www.zililiu.com/about", lastModified: new Date() },
    ...projectUrls,
  ];
}
