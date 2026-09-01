import { useEffect, useRef, type ReactNode } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  popOut?: boolean;
};

/**
 * 3D tilt card that follows the mouse with a parallax pop-out effect.
 */
export default function TiltCard({ children, className = '', max = 15, popOut = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateY = ((x - cx) / cx) * max;
      const rotateX = -((y - cy) / cy) * max;
      el.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const handleEnter = () => {
      el.style.transition = 'transform 0.1s ease-out';
    };

    const handleLeave = () => {
      el.style.transition = 'transform 0.6s ease';
      el.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [max]);

  return (
    <div className={`perspective-container ${className}`}>
      <div
        ref={ref}
        className={`tilt-card preserve-3d ${popOut ? 'pop-out' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
