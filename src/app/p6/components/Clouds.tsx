'use client';
import { useEffect, useState } from 'react';

function CloudShape({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 90" className={className} style={style} fill="none" aria-hidden>
      <path
        d="M28 78 Q6 78 6 60 Q6 44 26 42 Q28 22 52 20 Q66 4 90 10 Q104 0 122 8 Q146 4 154 24 Q176 26 178 46 Q196 50 194 66 Q192 78 172 78 Z"
        fill="rgba(255,255,255,0.92)"
        stroke="rgba(212,175,55,0.35)"
        strokeWidth="1.5"
      />
      <path
        d="M48 70 Q40 62 48 56 M96 66 Q88 58 98 52 M146 68 Q138 60 148 54"
        stroke="rgba(187,213,194,0.8)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Royal clouds resting at the bottom-left & bottom-right corners of the
 * phone frame. They gently bob up and down — and as the guest scrolls,
 * they gracefully part sideways, sink and fade away like a theatre
 * curtain of mist, then return when scrolled back to the top.
 */
export function Clouds() {
  const [spread, setSpread] = useState(0); // 0 = rest, 1 = fully parted

  useEffect(() => {
    const root = document.querySelector('.app-scroll');
    if (!root) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = root.clientHeight * 0.85;
      setSpread(Math.min(1, Math.max(0, root.scrollTop / max)));
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

  const out = spread * 150; // px the clouds glide outward
  const down = spread * 46; // px the clouds sink
  const opacity = 1 - spread * 0.92;

  return (
    <div
      className="absolute inset-x-0 bottom-0 h-44 sm:h-56 pointer-events-none z-[5] overflow-hidden"
      aria-hidden
    >
      {/* Left clouds */}
      <div
        className="absolute -left-8 bottom-2 w-36 sm:w-52 will-change-transform"
        style={{
          transform: `translateX(${-out}px) translateY(${down}px) rotate(${-spread * 7}deg)`,
          opacity,
          transition: 'opacity 0.15s linear',
        }}
      >
        <CloudShape className="w-full animate-cloud-bob drop-shadow-[0_10px_18px_rgba(49,87,65,0.18)]" />
      </div>
      <div
        className="absolute left-16 -bottom-4 w-28 sm:w-40 will-change-transform"
        style={{
          transform: `translateX(${-out * 1.35}px) translateY(${down * 0.6}px)`,
          opacity: opacity * 0.85,
          transition: 'opacity 0.15s linear',
        }}
      >
        <CloudShape
          className="w-full animate-cloud-bob drop-shadow-[0_8px_14px_rgba(49,87,65,0.14)]"
          style={{ animationDelay: '1.2s' }}
        />
      </div>

      {/* Right clouds */}
      <div
        className="absolute -right-8 bottom-2 w-36 sm:w-52 will-change-transform"
        style={{
          transform: `translateX(${out}px) translateY(${down}px) rotate(${spread * 7}deg) scaleX(-1)`,
          opacity,
          transition: 'opacity 0.15s linear',
        }}
      >
        <CloudShape
          className="w-full animate-cloud-bob drop-shadow-[0_10px_18px_rgba(49,87,65,0.18)]"
          style={{ animationDelay: '0.6s' }}
        />
      </div>
      <div
        className="absolute right-16 -bottom-4 w-28 sm:w-40 will-change-transform"
        style={{
          transform: `translateX(${out * 1.35}px) translateY(${down * 0.6}px) scaleX(-1)`,
          opacity: opacity * 0.85,
          transition: 'opacity 0.15s linear',
        }}
      >
        <CloudShape
          className="w-full animate-cloud-bob drop-shadow-[0_8px_14px_rgba(49,87,65,0.14)]"
          style={{ animationDelay: '1.8s' }}
        />
      </div>
    </div>
  );
}
