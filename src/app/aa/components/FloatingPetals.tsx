import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  slow: boolean;
  shape: number;
  sway: boolean;
}

const PETAL_COUNT = 22;

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const arr: Petal[] = Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 18,
      duration: 8 + Math.random() * 14,
      delay: Math.random() * 18,
      drift: (Math.random() - 0.5) * 250,
      opacity: 0.25 + Math.random() * 0.45,
      slow: Math.random() > 0.5,
      shape: Math.floor(Math.random() * 3),
      sway: Math.random() > 0.4,
    }));
    setPetals(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            ['--drift' as string]: `${p.drift}px`,
            animation: `${p.slow ? 'petal-fall-slow' : 'petal-fall'} ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <div className={p.sway ? 'animate-petal-sway' : ''}>
            <svg viewBox="0 0 20 20" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {p.shape === 0 && (
                <>
                  <path
                    d="M10 2 C14 6 16 10 10 18 C4 10 6 6 10 2 Z"
                    fill="rgba(212,169,110,0.4)"
                    stroke="rgba(212,169,110,0.6)"
                    strokeWidth="0.5"
                  />
                  <path d="M10 4 L10 16" stroke="rgba(212,169,110,0.3)" strokeWidth="0.5" />
                </>
              )}
              {p.shape === 1 && (
                <>
                  <path
                    d="M10 3 L13 8 L18 9 L14 13 L15 18 L10 16 L5 18 L6 13 L2 9 L7 8 Z"
                    fill="rgba(245,230,211,0.35)"
                    stroke="rgba(212,169,110,0.5)"
                    strokeWidth="0.4"
                  />
                </>
              )}
              {p.shape === 2 && (
                <>
                  <circle cx="10" cy="10" r="6" fill="none" stroke="rgba(212,169,110,0.4)" strokeWidth="0.6" />
                  <circle cx="10" cy="10" r="3" fill="rgba(212,169,110,0.2)" />
                  <circle cx="10" cy="10" r="1" fill="rgba(245,230,211,0.5)" />
                </>
              )}
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
