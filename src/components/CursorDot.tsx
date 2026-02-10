"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Initialize to center of viewport
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp toward mouse position (0.15 = lag amount, lower = more lag)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 7,
        height: 7,
        marginLeft: -3.5,
        marginTop: -3.5,
        borderRadius: "100%",
        background: "#000",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
}
