import { Flower2, Sparkle } from 'lucide-react';

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <Sparkle className="w-3.5 h-3.5 text-gold-medium" />
      <Flower2 className="w-5 h-5 text-rose-400" />
      <Sparkle className="w-3.5 h-3.5 text-gold-medium" />
    </div>
  );
}

/* Elegant floral frame - like a manhwa decorative border */
export function FloralFrame({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
      <circle cx="100" cy="100" r="88" stroke="#D4A574" strokeWidth="0.4" opacity="0.3" strokeDasharray="1 3" />

      {/* Rotating floral ring */}
      <g className="animate-spin-slower" style={{ transformOrigin: '100px 100px' }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 100 + 82 * Math.cos(angle);
          const y = 100 + 82 * Math.sin(angle);
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(${i * 30})`}>
              <path d="M0 -4 C-3 -4 -4 -1 -4 0 C-4 1 -3 4 0 4 C3 4 4 1 4 0 C4 -1 3 -4 0 -4 Z" fill="#D4A574" opacity="0.3" />
            </g>
          );
        })}
      </g>

      {/* Inner ring - reverse */}
      <g className="animate-spin-reverse" style={{ transformOrigin: '100px 100px' }}>
        <circle cx="100" cy="100" r="65" stroke="#F06B85" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 100 + 65 * Math.cos(angle);
          const y = 100 + 65 * Math.sin(angle);
          return (
            <circle key={i} cx={x} cy={y} r="1.5" fill="#F06B85" opacity="0.4" />
          );
        })}
      </g>

      {/* Center flower */}
      <g className="animate-soft-pulse" style={{ transformOrigin: '100px 100px' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="88"
            rx="4"
            ry="10"
            fill="url(#petalGrad)"
            opacity="0.5"
            transform={`rotate(${i * 60} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="4" fill="#D4A574" opacity="0.6" />
      </g>

      <defs>
        <linearGradient id="petalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F06B85" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A574" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Small rose ornament */
export function RoseOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="14"
          rx="5"
          ry="9"
          fill="url(#roseGrad)"
          opacity="0.5"
          transform={`rotate(${i * 72} 20 20)`}
        />
      ))}
      {/* Inner petals */}
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={`inner-${i}`}
          cx="20"
          cy="16"
          rx="3"
          ry="5"
          fill="#F06B85"
          opacity="0.4"
          transform={`rotate(${i * 72 + 36} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="2.5" fill="#D4A574" opacity="0.6" />
      <defs>
        <linearGradient id="roseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F06B85" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A574" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Corner flourish - elegant soft */
export function CornerOrnament({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main curve */}
      <path
        d="M5 5 L5 30 Q5 50 25 50 L50 50 M5 5 L30 5 Q50 5 50 25 L50 50"
        stroke="#D4A574"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Inner curve */}
      <path d="M12 12 Q24 12 24 24 Q24 36 36 36" stroke="#F06B85" strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.3" />
      {/* Small flowers */}
      <circle cx="5" cy="5" r="2.5" fill="#D4A574" opacity="0.5" />
      <circle cx="24" cy="24" r="1.5" fill="#F06B85" opacity="0.4" />
      <circle cx="36" cy="36" r="1" fill="#D4A574" opacity="0.3" />
      {/* Leaves */}
      <path d="M15 8 Q18 5 21 8 Q18 11 15 8 Z" fill="#A0C4B8" opacity="0.3" />
      <path d="M8 15 Q5 18 8 21 Q11 18 8 15 Z" fill="#A0C4B8" opacity="0.3" />
    </svg>
  );
}

/* Butterfly ornament - manhwa style */
export function ButterflyOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings */}
      <path d="M25 20 C15 5 5 8 5 18 C5 25 15 28 25 20 Z" fill="url(#wingGrad)" opacity="0.4" />
      <path d="M25 20 C35 5 45 8 45 18 C45 25 35 28 25 20 Z" fill="url(#wingGrad)" opacity="0.4" />
      <path d="M25 20 C18 25 12 30 15 35 C20 35 23 28 25 20 Z" fill="url(#wingGrad)" opacity="0.3" />
      <path d="M25 20 C32 25 38 30 35 35 C30 35 27 28 25 20 Z" fill="url(#wingGrad)" opacity="0.3" />
      {/* Body */}
      <ellipse cx="25" cy="20" rx="1" ry="8" fill="#D4A574" opacity="0.5" />
      <defs>
        <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F06B85" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D4A574" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
