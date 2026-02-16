"use client";

import { ReactNode } from "react";
import FadeUp from "@/components/animations/FadeUp";
import ParallaxImage from "@/components/animations/ParallaxImage";
import SplitText from "@/components/animations/SplitText";

export function AnimatedBreadcrumb({ children }: { children: ReactNode }) {
  return (
    <FadeUp delay={0} duration={0.5}>
      {children}
    </FadeUp>
  );
}

export function AnimatedHeadline({ children }: { children: ReactNode }) {
  return (
    <FadeUp delay={0.1} duration={0.6} distance={10}>
      {children}
    </FadeUp>
  );
}

export function AnimatedInfoRow({ children }: { children: ReactNode }) {
  return (
    <FadeUp delay={0.2} duration={0.6}>
      {children}
    </FadeUp>
  );
}

export function AnimatedHeroImage({
  src,
  alt,
  unoptimized,
}: {
  src: string;
  alt: string;
  unoptimized: boolean;
}) {
  return (
    <FadeUp delay={0.3} duration={0.7}>
      <ParallaxImage
        src={src}
        alt={alt}
        width={1440}
        height={900}
        speed={0.1}
        unoptimized={unoptimized}
      />
    </FadeUp>
  );
}

export function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <FadeUp whileInView duration={0.6} distance={12}>
      {children}
    </FadeUp>
  );
}

export function AnimatedMoreWork({ children }: { children: ReactNode }) {
  return (
    <FadeUp whileInView duration={0.6}>
      {children}
    </FadeUp>
  );
}

export function AnimatedMoreWorkTitle() {
  return <SplitText text="More work" whileInView />;
}

export function AnimatedMoreWorkCard({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <FadeUp whileInView delay={0} duration={0.5} distance={10}>
      {children}
    </FadeUp>
  );
}
