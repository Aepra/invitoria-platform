import { useEffect } from 'react';

/**
 * Lightweight scroll-reveal. Observes .rise/.pop/.swing/.fade and toggles
 * `entered` (in view) / `leaving` (scrolled past up). Scoped to the scroll root.
 */
export function useReveal(scrollRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const selectors = '.rise, .pop, .swing, .fade, .drop, .zoom, .flip, .bloom';
    const elements = root.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('entered');
            entry.target.classList.remove('leaving');
          } else {
            entry.target.classList.remove('entered');
            if (entry.target.getBoundingClientRect().y < 0) {
              entry.target.classList.add('leaving');
            }
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scrollRef]);
}