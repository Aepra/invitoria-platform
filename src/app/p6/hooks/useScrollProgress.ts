import { useEffect, useRef, useState } from 'react';

/**
 * Scroll progress (0 → 1) of a tall element travelling through the
 * `.app-scroll` viewport. 0 = section top touches viewport top,
 * 1 = section bottom reaches viewport bottom. rAF-throttled.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const root = document.querySelector('.app-scroll');
    if (!el || !root) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const total = rect.height - root.clientHeight;
      const passed = rootRect.top - rect.top;
      const p = total > 0 ? passed / total : 0;
      setProgress(Math.min(1, Math.max(0, p)));
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
  }, []);

  return { ref, progress };
}

/** Clamp a sub-range of progress to 0 → 1. */
export function seg(p: number, from: number, to: number) {
  return Math.min(1, Math.max(0, (p - from) / (to - from)));
}

/** Ease-out cubic for nicer motion. */
export function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
