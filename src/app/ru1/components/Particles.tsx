import { useState, useEffect } from 'react';

type ParticleType = 'petal' | 'light' | 'leaf' | 'sparkle';

export function Particles({ count = 20, type = 'petal' }: { count?: number; type?: ParticleType }) {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 10 + 6;
      const colors = ['#F06B85', '#D4A574', '#FFB3C1', '#E8C49A', '#A0C4B8'];
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 12 + 12,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.15,
      };
    });
    setParticles(generated);
  }, [count, type]);

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
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {type === 'petal' && (
            <svg viewBox="0 0 20 20" width="100%" height="100%">
              <path
                d="M10 2 C6 6 4 10 6 14 C8 18 12 18 14 14 C16 10 14 6 10 2 Z"
                fill={p.color}
                opacity={0.7}
              />
            </svg>
          )}
          {type === 'light' && (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
                filter: 'blur(3px)',
              }}
            />
          )}
          {type === 'leaf' && (
            <svg viewBox="0 0 20 20" width="100%" height="100%">
              <path
                d="M10 2 C4 6 2 12 6 18 C14 16 18 10 10 2 Z"
                fill={p.color}
                opacity={0.5}
              />
              <path d="M10 4 L8 16" stroke="#7AAB98" strokeWidth="0.5" opacity="0.3" />
            </svg>
          )}
          {type === 'sparkle' && (
            <svg viewBox="0 0 20 20" width="100%" height="100%">
              <path
                d="M10 0 L11 8 L20 10 L11 12 L10 20 L9 12 L0 10 L9 8 Z"
                fill={p.color}
                opacity={0.6}
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/* Soft floating light orbs */
export function LightOrbs({ count = 8 }: { count?: number }) {
  const [orbs, setOrbs] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 100 + 60,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
    setOrbs(generated);
  }, [count]);

  if (orbs.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {orbs.map((o) => (
        <div
          key={o.id}
          className="absolute rounded-full"
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            width: `${o.size}px`,
            height: `${o.size}px`,
            background: 'radial-gradient(circle, rgba(240,212,176,0.08) 0%, transparent 70%)',
            animation: `breathe ${o.duration}s ease-in-out ${o.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
