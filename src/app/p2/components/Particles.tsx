import { useEffect, useState } from 'react';

export function Particles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 8 + 4;
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 15,
          duration: Math.random() * 10 + 12,
          size,
          opacity: Math.random() * 0.4 + 0.2,
        };
      })
    );
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#E4C873',
              borderRadius: '50% 0 50% 50%',
            }}
          />
        </div>
      ))}
    </div>
  );
}
