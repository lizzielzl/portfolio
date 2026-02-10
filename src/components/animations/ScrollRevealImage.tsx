"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealImageProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function ScrollRevealImage({
  children,
  delay = 0,
  duration = 0.8,
}: ScrollRevealImageProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.02 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
