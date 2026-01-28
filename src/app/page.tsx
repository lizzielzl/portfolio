export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#d4e4f0",
      }}
    >
      {/* Hero photo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "75%",
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Gradient overlay for left side readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "40%",
          background:
            "linear-gradient(to right, #d4e4f0 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
