import SocialLinks from "../components/SocialLinks"

const GlowingText = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-20">
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center leading-tight tracking-wide select-none mb-8"
        style={{
          background: "linear-gradient(45deg, #ff4444, #ffdd44, #ff8844, #ff4444)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation:
            "gradientShift 3s ease-in-out infinite alternate, textGlow 2s ease-in-out infinite alternate",
          textShadow:
            "0 0 8px rgba(255, 68, 68, 0.3), 0 0 16px rgba(255, 221, 68, 0.2), 0 0 24px rgba(255, 136, 68, 0.15)",
        }}
      >
        SEMINOLE
        <br />
        INNOVATORS
      </h1>
      <div className="mt-6 w-full max-w-6xl">
        <SocialLinks />
      </div>
    </div>
  );
};

export default GlowingText;