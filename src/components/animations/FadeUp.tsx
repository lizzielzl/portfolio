"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  whileInView?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 15,
  once = true,
  whileInView: useWhileInView = false,
  className,
  style,
}: FadeUpProps) {
  const animationProps = useWhileInView
    ? {
        initial: { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once, amount: 0.2 },
      }
    : {
        initial: { opacity: 0, y: distance },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      {...animationProps}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
