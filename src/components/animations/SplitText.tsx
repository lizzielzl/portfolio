"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  stagger?: number;
  delay?: number;
  className?: string;
  whileInView?: boolean;
  once?: boolean;
}

export default function SplitText({
  text,
  stagger = 0.03,
  delay = 0,
  className,
  whileInView: useWhileInView = false,
  once = true,
}: SplitTextProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const animationProps = useWhileInView
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once, amount: 0.5 },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <motion.div
      variants={containerVariants}
      {...animationProps}
      className={className}
      style={{ display: "inline-flex" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
