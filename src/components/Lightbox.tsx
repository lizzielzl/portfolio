"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

interface LightboxProps {
  images: string[]; // full src paths like /images/indigo/03-app-1.jpg
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  alt?: string;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
  alt = "",
}: LightboxProps) {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1);
  }, [hasPrev, currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1);
  }, [hasNext, currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goPrev, goNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main image view */}
        <div className="lightbox-view">
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            width={1440}
            height={900}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            unoptimized={images[currentIndex].endsWith(".gif")}
          />
        </div>

        {/* Left arrow */}
        {hasPrev && (
          <button
            className="lightbox-control lightbox-left"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {hasNext && (
          <button
            className="lightbox-control lightbox-right"
            onClick={goNext}
            aria-label="Next image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        )}

        {/* Close button */}
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="lightbox-strip">
            {images.map((img, i) => (
              <button
                key={i}
                className={`lightbox-thumb${i === currentIndex ? " active" : ""}`}
                onClick={() => onNavigate(i)}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  width={120}
                  height={75}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  unoptimized={img.endsWith(".gif")}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
