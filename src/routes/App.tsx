import React, { useState, useEffect } from "react";

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate initial stars

    const generateStars = () => {
      const newStars = [];

      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,

          x: Math.random() * 110, // Allow stars to start off-screen

          y: Math.random() * 110,

          size: Math.floor(Math.random() * 3) + 2, // 2, 3, or 4px for pixel sizes

          opacity: Math.random() * 0.8 + 0.2,

          speed: Math.random() * 2 + 0.5, // Movement speed

          twinkleSpeed: Math.random() * 3 + 2,
        });
      }

      setStars(newStars);
    };

    generateStars();

    // Animate stars movement

    const moveStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,

          x: star.x - star.speed * 0.1,

          // Reset star position when it goes off-screen

          ...(star.x < -5
            ? {
                x: 105,

                y: Math.random() * 110,

                speed: Math.random() * 2 + 0.5,
              }
            : {}),
        }))
      );
    };

    const interval = setInterval(moveStars, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white animate-pulse"
          style={{
            left: `${star.x}%`,

            top: `${star.y}%`,

            width: `${star.size}px`,

            height: `${star.size}px`,

            opacity: star.opacity,

            animationDuration: `${star.twinkleSpeed}s`,

            animationDelay: `${Math.random() * 2}s`,

            imageRendering: "pixelated", // Ensures crisp pixel edges
          }}
        />
      ))}
    </div>
  );
};

const GlowingText = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center leading-tight tracking-wide select-none"
        style={{
          background:
            "linear-gradient(45deg, #ff4444, #ffdd44, #ff8844, #ff4444)",

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
    </div>
  );
};

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];

      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,

          x: Math.random() * 100,

          y: Math.random() * 100,

          size: Math.random() * 2 + 0.5,

          moveX: (Math.random() - 0.5) * 2,

          moveY: (Math.random() - 0.5) * 2,
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const keyframeStyles = particles

    .map(
      (particle) => `

    @keyframes float${particle.id} {

      0%, 100% { transform: translate(0, 0) rotate(0deg); }

      25% { transform: translate(${particle.moveX * 20}px, ${
        particle.moveY * 15
      }px) rotate(90deg); }

      50% { transform: translate(${particle.moveX * 10}px, ${
        particle.moveY * 25
      }px) rotate(180deg); }

      75% { transform: translate(${particle.moveX * -15}px, ${
        particle.moveY * 10
      }px) rotate(270deg); }

    }

  `
    )

    .join("");

  return (
    <div className="fixed inset-0 pointer-events-none">
      <style>{keyframeStyles}</style>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,

            top: `${particle.y}%`,

            width: `${particle.size}px`,

            height: `${particle.size}px`,

            animation: `float${particle.id} ${
              8 + Math.random() * 4
            }s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default function SeminoleInnovatorsHomepage() {
  // Pixelated spaceship cursor SVG

  const spaceshipCursor = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style="image-rendering: pixelated;"><rect x="14" y="2" width="4" height="4" fill="%23ffffff"/><rect x="10" y="6" width="4" height="4" fill="%2300ffff"/><rect x="14" y="6" width="4" height="4" fill="%23ffffff"/><rect x="18" y="6" width="4" height="4" fill="%2300ffff"/><rect x="6" y="10" width="4" height="4" fill="%2300ffff"/><rect x="10" y="10" width="4" height="4" fill="%23ffffff"/><rect x="14" y="10" width="4" height="4" fill="%23ff4444"/><rect x="18" y="10" width="4" height="4" fill="%23ffffff"/><rect x="22" y="10" width="4" height="4" fill="%2300ffff"/><rect x="2" y="14" width="4" height="4" fill="%2300ffff"/><rect x="6" y="14" width="4" height="4" fill="%23ffffff"/><rect x="10" y="14" width="4" height="4" fill="%23ff4444"/><rect x="14" y="14" width="4" height="4" fill="%23ffffff"/><rect x="18" y="14" width="4" height="4" fill="%23ff4444"/><rect x="22" y="14" width="4" height="4" fill="%23ffffff"/><rect x="26" y="14" width="4" height="4" fill="%2300ffff"/><rect x="6" y="18" width="4" height="4" fill="%2300ffff"/><rect x="10" y="18" width="4" height="4" fill="%23ffffff"/><rect x="14" y="18" width="4" height="4" fill="%23ff4444"/><rect x="18" y="18" width="4" height="4" fill="%23ffffff"/><rect x="22" y="18" width="4" height="4" fill="%2300ffff"/><rect x="10" y="22" width="4" height="4" fill="%2300ffff"/><rect x="14" y="22" width="4" height="4" fill="%23ffffff"/><rect x="18" y="22" width="4" height="4" fill="%2300ffff"/><rect x="14" y="26" width="4" height="4" fill="%23ffdd44"/></svg>`;

  return (
    <div
      className="relative w-full min-h-screen bg-black overflow-hidden"
      style={{
        fontFamily: '"Pixelify Sans", monospace',

        cursor: `url('${spaceshipCursor}') 16 16, auto`,
      }}
    >
      {/* Animated star background */}

      <StarField />

      {/* Floating particles for extra effect */}

      <FloatingParticles />

      {/* Main glowing text */}

      <GlowingText />

      {/* CSS for animations and custom cursor styles */}

      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes textGlow {
          0% {
            filter: drop-shadow(0 0 4px rgba(255, 68, 68, 0.4))
              drop-shadow(0 0 8px rgba(255, 221, 68, 0.3))
              drop-shadow(0 0 12px rgba(255, 136, 68, 0.2));
          }

          100% {
            filter: drop-shadow(0 0 8px rgba(255, 68, 68, 0.6))
              drop-shadow(0 0 16px rgba(255, 221, 68, 0.4))
              drop-shadow(0 0 24px rgba(255, 136, 68, 0.3));
          }
        }

        body {
          margin: 0;

          padding: 0;

          overflow-x: hidden;

          font-family: Pixelify Sans, monospace;
        }

        /* Custom cursor for different elements */

        a,
        button,
        [role="button"],
        input[type="submit"],
        input[type="button"] {
          cursor: url("${spaceshipCursor}") 16 16, pointer !important;
        }

        input,
        textarea,
        select {
          cursor: url("${spaceshipCursor}") 16 16, text !important;
        }

        /* Ensure good mobile performance */

        @media (max-width: 768px) {
          * {
            -webkit-font-smoothing: antialiased;

            -moz-osx-font-smoothing: grayscale;
          }
        }
      `}</style>
    </div>
  );
}
