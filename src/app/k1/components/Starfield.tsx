'use client';
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function Starfield({ count = 120 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));

    stars.forEach((s) => {
      const el = document.createElement('div');
      el.className = 'star';
      el.style.cssText = `
        left: ${s.x}%;
        top: ${s.y}%;
        width: ${s.size}px;
        height: ${s.size}px;
        --duration: ${s.duration}s;
        --max-opacity: ${s.opacity};
        animation-delay: ${s.delay}s;
      `;
      container.appendChild(el);
    });

    // Shooting stars
    const shootCount = 3;
    for (let i = 0; i < shootCount; i++) {
      const el = document.createElement('div');
      el.className = 'shooting-star';
      el.style.cssText = `
        left: ${Math.random() * 50}%;
        top: ${Math.random() * 50}%;
        animation-duration: ${Math.random() * 6 + 8}s;
        animation-delay: ${Math.random() * 10}s;
      `;
      container.appendChild(el);
    }
  }, [count]);

  return <div ref={containerRef} className="starfield" />;
}
