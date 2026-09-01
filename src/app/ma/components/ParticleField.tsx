import { useEffect, useRef } from 'react';

type Particle = {
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
};

export default function ParticleField({ count = 25 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const particles: Particle[] = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      animationDuration: Math.random() * 6 + 4,
      animationDelay: Math.random() * 5,
      size: Math.random() * 8 + 6,
      opacity: Math.random() * 0.4 + 0.3,
    }));

    const wrapper = document.createElement('div');
    wrapper.className = 'particle-container';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';

    particles.forEach((p) => {
      const el = document.createElement('div');
      el.className = 'particle';
      el.style.left = `${p.left}%`;
      el.style.animationDuration = `${p.animationDuration}s`;
      el.style.animationDelay = `${p.animationDelay}s`;
      el.style.width = `${p.size}px`;
      el.style.height = `${p.size}px`;
      el.style.opacity = `${p.opacity}`;
      wrapper.appendChild(el);
    });

    container.appendChild(wrapper);
  }, [count]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
