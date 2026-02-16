"use client";

import Image from "next/image";
import { useEffect, useCallback, useState, useRef } from "react";

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

  // Transition state for smooth image switching
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const prevIndex = useRef(currentIndex);

  const goPrev = useCallback(() => {
    if (hasPrev) {
      setSlideDirection("right"); // Image slides in from left, so it moves right
      onNavigate(currentIndex - 1);
    }
  }, [hasPrev, currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) {
      setSlideDirection("left"); // Image slides in from right, so it moves left
      onNavigate(currentIndex + 1);
    }
  }, [hasNext, currentIndex, onNavigate]);

  // Handle image transition when currentIndex changes
  useEffect(() => {
    if (currentIndex !== displayIndex) {
      // Determine direction if not already set (e.g., from thumbnail click)
      if (slideDirection === null) {
        setSlideDirection(currentIndex > prevIndex.current ? "left" : "right");
      }

      setIsTransitioning(true);
      transitionTimeout.current = setTimeout(() => {
        setDisplayIndex(currentIndex);
        setIsTransitioning(false);
        setSlideDirection(null);
        prevIndex.current = currentIndex;
      }, 200);
    }
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, [currentIndex, displayIndex, slideDirection]);

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

  // Touch/swipe support for mobile
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (delta > 50) goNext(); // swipe left → next
      if (delta < -50) goPrev(); // swipe right → prev
      touchStartX.current = null;
    },
    [goNext, goPrev]
  );

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle backdrop click - close lightbox
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Get transition class based on direction
  const getTransitionClass = () => {
    if (!isTransitioning) return "";
    if (slideDirection === "left") return " slide-out-left";
    if (slideDirection === "right") return " slide-out-right";
    return "";
  };

  return (
    <div className="lightbox-backdrop" onClick={handleBackdropClick}>
      {/* Main image area - clicks pass through to backdrop */}
      <div
        className="lightbox-image-area"
        onClick={handleBackdropClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`lightbox-image-wrapper${getTransitionClass()}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[displayIndex]}
            alt={`${alt} ${displayIndex + 1}`}
            width={1440}
            height={900}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            unoptimized={images[displayIndex].endsWith(".gif")}
          />
        </div>
      </div>

      {/* Left arrow */}
      {hasPrev && (
        <button
          className="lightbox-control lightbox-left"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {hasNext && (
        <button
          className="lightbox-control lightbox-right"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      )}

      {/* Close button */}
      <button
        className="lightbox-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="lightbox-strip" onClick={(e) => e.stopPropagation()}>
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
  );
}
