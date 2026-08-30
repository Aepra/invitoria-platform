import { useEffect, useRef, useState } from 'react';

/**
 * Two-way scroll reveal using IntersectionObserver.
 * Adds `active` when in view, and `exit-up` when scrolled past the top.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  root: React.RefObject<HTMLElement | null>,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
      { root: root.current, rootMargin: '0px', threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root]);

  return ref;
}

/** Countdown timer hook returning {days, hours, minutes, seconds}. */
export function useCountdown(target: Date) {
  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

function calc(target: Date) {
  const distance = target.getTime() - Date.now();
  if (distance <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  return {
    days: Math.floor(distance / 86400000).toString().padStart(2, '0'),
    hours: Math.floor((distance % 86400000) / 3600000).toString().padStart(2, '0'),
    minutes: Math.floor((distance % 3600000) / 60000).toString().padStart(2, '0'),
    seconds: Math.floor((distance % 60000) / 1000).toString().padStart(2, '0'),
  };
}
