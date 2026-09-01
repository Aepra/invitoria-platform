import { Sparkle, Star } from 'lucide-react';

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <Sparkle className="w-4 h-4 text-mystic-300" />
      <Star className="w-5 h-5 text-teal-glow" />
      <Sparkle className="w-4 h-4 text-mystic-300" />
    </div>
  );
}

/* Animated spell circle - rotating magic ring with runes */
export function SpellCircle({ className = '', size = 200 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`spell-circle-glow ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" stroke="#A06FFF" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="100" r="90" stroke="#A06FFF" strokeWidth="0.5" opacity="0.6" strokeDasharray="2 4" />

      {/* Middle ring with runes */}
      <g className="animate-spin-slower" style={{ transformOrigin: '100px 100px' }}>
        <circle cx="100" cy="100" r="75" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.5" strokeDasharray="8 4 2 4" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 100 + 75 * Math.cos(angle);
          const y = 100 + 75 * Math.sin(angle);
          return (
            <circle key={i} cx={x} cy={y} r="2" fill="#A06FFF" opacity="0.7" />
          );
        })}
      </g>

      {/* Inner ring - reverse rotation */}
      <g className="animate-spin-reverse" style={{ transformOrigin: '100px 100px' }}>
        <circle cx="100" cy="100" r="55" stroke="#A06FFF" strokeWidth="0.8" opacity="0.5" strokeDasharray="4 8" />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = 100 + 55 * Math.cos(angle);
          const y = 100 + 55 * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="#2DD4BF"
              fontSize="8"
              textAnchor="middle"
              dominantBaseline="middle"
              opacity="0.6"
              fontFamily="Cinzel, serif"
            >
              ✦
            </text>
          );
        })}
      </g>

      {/* Innermost triangle */}
      <g className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
        <polygon
          points="100,65 130,120 70,120"
          stroke="#A06FFF"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <polygon
          points="100,135 130,80 70,80"
          stroke="#2DD4BF"
          strokeWidth="0.8"
          opacity="0.3"
        />
      </g>

      {/* Center star */}
      <g className="animate-pulse-soft" style={{ transformOrigin: '100px 100px' }}>
        <path
          d="M100 88 L103 96 L111 96 L105 101 L107 109 L100 104 L93 109 L95 101 L89 96 L97 96 Z"
          fill="url(#starGrad)"
        />
      </g>

      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A06FFF" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Smaller decorative star ornament */
export function StarOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4 L23 16 L35 16 L25 23 L28 35 L20 28 L12 35 L15 23 L5 16 L17 16 Z"
        fill="url(#starOrnGrad)"
        stroke="#A06FFF"
        strokeWidth="0.5"
        opacity="0.8"
      />
      <circle cx="20" cy="20" r="2" fill="#2DD4BF" opacity="0.6" />
      <defs>
        <linearGradient id="starOrnGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A06FFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Rune symbol */
export function RuneSymbol({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4 L15 36 M8 8 L15 4 L22 8 M8 20 L22 20 M10 28 L15 24 L20 28" stroke="#A06FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="15" cy="4" r="2" fill="#2DD4BF" opacity="0.8" />
      <circle cx="15" cy="36" r="1.5" fill="#A06FFF" opacity="0.5" />
    </svg>
  );
}

/* Corner flourish - mystical */
export function CornerOrnament({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5 L5 30 Q5 50 25 50 L50 50 M5 5 L30 5 Q50 5 50 25 L50 50"
        stroke="#A06FFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="5" cy="5" r="3" fill="#2DD4BF" opacity="0.6" />
      <path d="M15 15 Q25 15 25 25 Q25 35 35 35" stroke="#2DD4BF" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.4" />
      <circle cx="25" cy="25" r="1.5" fill="#A06FFF" opacity="0.5" />
      <circle cx="35" cy="35" r="1" fill="#2DD4BF" opacity="0.4" />
      <path d="M10 10 L8 12 M10 10 L12 8" stroke="#A06FFF" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/* Moon and stars */
export function MoonOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 10 C28 10 18 20 18 32 C18 44 28 54 40 54 C30 50 24 42 24 32 C24 22 30 14 40 10 Z"
        fill="url(#moonGrad)"
        opacity="0.6"
      />
      <circle cx="48" cy="15" r="1.5" fill="#2DD4BF" opacity="0.7" />
      <circle cx="52" cy="25" r="1" fill="#A06FFF" opacity="0.5" />
      <circle cx="46" cy="40" r="1.2" fill="#2DD4BF" opacity="0.6" />
      <defs>
        <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A06FFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
