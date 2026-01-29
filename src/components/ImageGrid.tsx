"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface ImageGridProps {
  slug: string;
  images: string[]; // filenames like "03-app-1.jpg"
  columns: number;
  alt: string;
  fullWidthImages?: number[]; // indices of images that should be full-width
}

export default function ImageGrid({
  slug,
  images,
  columns,
  alt,
  fullWidthImages = [],
}: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fullWidthImgs = images.filter((_, j) => fullWidthImages.includes(j));
  const gridImgs = images.filter((_, j) => !fullWidthImages.includes(j));

  // Build the full src paths for the lightbox (all images in order)
  const allSrcs = images.map((img) => `/images/${slug}/${img}`);

  return (
    <div>
      {/* Click to expand hint */}
      <div className="expand-hint">
        <div style={{ width: 55, height: 1, background: "#e6e6e6", margin: "0 auto 8px" }} />
        Click to expand images
      </div>

      {/* Full-width images */}
      {fullWidthImgs.map((img, j) => {
        const globalIndex = images.indexOf(img);
        return (
          <div
            key={`fw-${j}`}
            className="image-grid-clickable"
            style={{
              width: "100%",
              overflow: "hidden",
              marginBottom: 10,
              cursor: "pointer",
            }}
            onClick={() => setLightboxIndex(globalIndex)}
          >
            <Image
              src={`/images/${slug}/${img}`}
              alt={`${alt}`}
              width={1440}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized={img.endsWith(".gif")}
            />
          </div>
        );
      })}

      {/* Grid images */}
      {gridImgs.length > 0 && (
        <div
          className="image-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: 10,
          }}
        >
          {gridImgs.map((img, j) => {
            const globalIndex = images.indexOf(img);
            return (
              <div
                key={j}
                className="image-grid-clickable"
                style={{ overflow: "hidden", cursor: "pointer" }}
                onClick={() => setLightboxIndex(globalIndex)}
              >
                <Image
                  src={`/images/${slug}/${img}`}
                  alt={`${alt} ${j + 1}`}
                  width={720}
                  height={450}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  unoptimized={img.endsWith(".gif")}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allSrcs}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
          alt={alt}
        />
      )}
    </div>
  );
}
