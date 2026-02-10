"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed?: number;
  unoptimized?: boolean;
  style?: React.CSSProperties;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  speed = 0.15,
  unoptimized = false,
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} style={{ overflow: "hidden", ...style }}>
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", display: "block" }}
          unoptimized={unoptimized}
        />
      </motion.div>
    </div>
  );
}
