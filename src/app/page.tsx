import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Image
        src="/images/hero.jpg"
        alt="Hero — Zili Liu, Product Designer"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "50% 40%",
        }}
      />
    </div>
  );
}
