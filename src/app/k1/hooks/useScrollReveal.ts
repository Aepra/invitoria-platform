import { useEffect } from 'react';

/**
 * Observes elements with reveal classes and toggles `active` / `exit-up`
 * for two-way scroll animations. Must be called on the scroll container ref.
 */
export function useScrollReveal(scrollRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const selectors = '.reveal, .reveal-scale, .reveal-blur, .reveal-left, .reveal-right';
    const elements = root.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.remove('exit-up');
          } else {
            entry.target.classList.remove('active');
            if (entry.boundingClientRect.y < 0) {
              entry.target.classList.add('exit-up');
            }
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scrollRef]);
}
