import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const SPARKLE_COUNT = 25;

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const arr: Sparkle[] = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 8,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
    setSparkles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `sparkle-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
              fill="rgba(245,230,211,0.6)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
