'use client';
import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from 'react';

/**
 * Scroll-driven parallax for content elements (cards, photos, ornaments).
 * Complements ParallaxBg: give sibling elements different speeds
 * (e.g. +0.06 and -0.05) to create a sense of depth.
 */
export function ParallaxItem({
  children,
  speed = 0.05,
  className = '',
  style,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const root = document.querySelector('.app-scroll');
    if (!el || !root) return;

    // Mobile-first safety: disable parallax on small screens, touch devices,
    // and for users who prefer reduced motion — keeps the layout intact.
    const desktopMotion = window.matchMedia('(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!desktopMotion.matches) return;

    // Never let the shift exceed a safe distance, so cards can never
    // overlap or leave visible gaps in the layout.
    const MAX_SHIFT = 20;
    const clamp = (v: number) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, v));

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - rootRect.top;
      const viewCenter = root.clientHeight / 2;
      setY(clamp((center - viewCenter) * speed));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      root.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ ...style, transform: y ? `translate3d(0, ${y}px, 0)` : undefined }}
    >
      {children}
    </div>
  );
}


/**
 * Scroll-driven parallax background. Works inside the `.app-scroll` container
 * (plays nicely with the phone-style layout). The background image translates
 * smoothly as the section moves through the viewport.
 */
export function ParallaxBg({
  image,
  children,
  speed = 0.28,
  overlay = 'to bottom, rgba(250,246,236,.94), rgba(250,246,236,.55)',
  className = '',
}: {
  image: string;
  children?: ReactNode;
  speed?: number;
  overlay?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [bgY, setBgY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const root = document.querySelector('.app-scroll');
    if (!el || !root) return;

    const isMobile = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches;
    // Keep the shift inside the scale(1.18) overscan so the image edges
    // never show a gap, tighter budget on mobile where sections are shorter.
    const MAX_SHIFT = isMobile ? 22 : 44;
    const clamp = (v: number) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, v));

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - rootRect.top;
      const viewCenter = root.clientHeight / 2;
      setBgY(clamp((center - viewCenter) * speed));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      root.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-center bg-cover will-change-transform"
        style={{
          backgroundImage: `url('${image}')`,
          transform: `translateY(${bgY}px) scale(1.18)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(${overlay})` }}
      />
      {children}
    </div>
  );
}