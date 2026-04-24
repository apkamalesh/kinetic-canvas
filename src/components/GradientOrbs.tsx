const GradientOrbs = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div
        className="blur-orb animate-float-slow"
        style={{
          width: 500,
          height: 500,
          background: "hsl(var(--primary) / 0.45)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="blur-orb animate-float-slow"
        style={{
          width: 600,
          height: 600,
          background: "hsl(var(--secondary) / 0.4)",
          bottom: "-15%",
          right: "-10%",
          animationDelay: "-4s",
        }}
      />
      <div
        className="blur-orb animate-float-slow"
        style={{
          width: 400,
          height: 400,
          background: "hsl(var(--accent) / 0.45)",
          top: "30%",
          right: "20%",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
};

export default GradientOrbs;
