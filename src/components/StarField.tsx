// StarField.tsx
import { useState, useEffect } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate initial stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 110,
          y: Math.random() * 110,
          size: Math.floor(Math.random() * 3) + 2,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 2 + 0.5,
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
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
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
            imageRendering: "pixelated",
          }}
        />
      ))}
    </div>
  );
};

export default StarField;