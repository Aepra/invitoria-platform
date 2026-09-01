'use client';
import { useEffect, useState } from 'react';

type Petal = { id: number; left: number; delay: number; duration: number; size: number; opacity: number };
type Light = { id: number; left: number; top: number; delay: number; size: number };

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 14,
    duration: 11 + Math.random() * 12,
    size: 7 + Math.random() * 12,
    opacity: 0.35 + Math.random() * 0.4,
  }));
}

function makeLights(): Light[] {
  return Array.from({ length: 7 }).map((_, i) => ({
    id: i,
    left: 6 + Math.random() * 88,
    top: 6 + Math.random() * 88,
    delay: Math.random() * 5,
    size: 4 + Math.random() * 5,
  }));
}

/**
 * Falling botanical petals + floating twinkling lights.
 * Petals (leaf-dot) drift down with sway; lights bob up/down & twinkle.
 * Values are generated ONLY on the client (after mount) to avoid hydration
 * mismatches from Math.random() during server-side rendering.
 */
export function Petals({ count = 16 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    setPetals(makePetals(count));
    setLights(makeLights());
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute leaf-dot"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            width: `${p.size}px`,
            height: `${p.size * 0.82}px`,
            opacity: p.opacity,
            animation: `petal ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      {lights.map((l) => (
        <span
          key={l.id}
          className="absolute leaf-dot"
          style={{
            left: `${l.left}%`,
            top: `${l.top}%`,
            width: `${l.size}px`,
            height: `${l.size}px`,
            background: '#F3DCA9',
            animation: `twinkle ${4 + (l.id % 3)}s ease-in-out ${l.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}