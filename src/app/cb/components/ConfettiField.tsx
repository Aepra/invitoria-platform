import { useEffect, useRef } from 'react';

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#6BCBEF', '#A8E6CF', '#A78BFA', '#FF8FA3'];
const SHAPES = ['circle', 'square', 'triangle'];

type Piece = {
  left: number;
  duration: number;
  delay: number;
  size: number;
  color: string;
  shape: string;
};

export default function ConfettiField({ count = 30 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const pieces: Piece[] = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      size: Math.random() * 8 + 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    }));

    pieces.forEach((p) => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = `${p.left}%`;
      el.style.width = `${p.size}px`;
      el.style.height = `${p.size}px`;
      el.style.background = p.shape === 'triangle' ? 'transparent' : p.color;
      el.style.borderRadius = p.shape === 'circle' ? '50%' : '3px';
      el.style.animationDuration = `${p.duration}s`;
      el.style.animationDelay = `${p.delay}s`;
      if (p.shape === 'triangle') {
        el.style.borderLeft = `${p.size / 2}px solid transparent`;
        el.style.borderRight = `${p.size / 2}px solid transparent`;
        el.style.borderBottom = `${p.size}px solid ${p.color}`;
        el.style.width = '0';
        el.style.height = '0';
      }
      container.appendChild(el);
    });
  }, [count]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
