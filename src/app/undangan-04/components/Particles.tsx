import { useMemo } from 'react';

type ParticleType = 'orb' | 'sparkle' | 'dust';

export function Particles({ count = 20, type = 'orb' }: { count?: number; type?: ParticleType }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 8 + 3;
        const colors = ['#A06FFF', '#2DD4BF', '#BA93FF', '#5E7FED'];
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 15,
          duration: Math.random() * 10 + 12,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.4 + 0.2,
          drift: (Math.random() - 0.5) * 30,
        };
      }),
    [count]
  );

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
          {type === 'orb' && (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              }}
            />
          )}
          {type === 'sparkle' && (
            <svg viewBox="0 0 20 20" width="100%" height="100%">
              <path
                d="M10 0 L11 8 L20 10 L11 12 L10 20 L9 12 L0 10 L9 8 Z"
                fill={p.color}
                opacity={0.8}
              />
            </svg>
          )}
          {type === 'dust' && (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: p.color,
                filter: `blur(${p.size / 3}px)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* Twinkling starfield background */
export function Starfield({ count = 50 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
