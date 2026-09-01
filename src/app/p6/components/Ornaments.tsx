'use client';
import { Flower2, Leaf, Heart } from 'lucide-react';

export function BloomDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`bloom-divider ${className}`}>
      <Leaf className="w-4 h-4 text-sage-500 animate-sway-soft" />
      <Flower2 className="w-5 h-5 text-clay-500 animate-sway-soft" style={{ animationDelay: '0.2s' }} />
      <Leaf className="w-4 h-4 text-sage-500 animate-sway-soft" style={{ animationDelay: '0.4s' }} />
    </div>
  );
}

export function Monogram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="30" stroke="#4C8864" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="25" stroke="#C8785B" strokeWidth="0.8" strokeDasharray="3 3" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="'Parisienne', cursive"
        fontSize="26"
        fill="#315741"
      >
        S
      </text>
      <path d="M12 32 a4 4 0 0 1 8 0 M44 32 a4 4 0 0 0 8 0" stroke="#93BD9F" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Hanging floral garland — gently sways side to side. */
export function Garland({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`pointer-events-none ${className}`} style={style} aria-hidden>
      <svg viewBox="0 0 220 90" className="w-full" fill="none">
        <path
          d="M0 6 C 40 34, 60 -10, 110 8 S 180 -10, 220 6"
          stroke="#93BD9F"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-sway-soft"
          style={{ transformOrigin: 'top center' }}
        />
        <circle cx="40" cy="22" r="7" fill="#D89579" className="animate-drift" />
        <circle cx="82" cy="4" r="6" fill="#BBD5C2" className="animate-drift" style={{ animationDelay: '0.5s' }} />
        <circle cx="140" cy="14" r="6" fill="#C8785B" className="animate-drift" style={{ animationDelay: '1s' }} />
        <circle cx="180" cy="4" r="7" fill="#BBD5C2" className="animate-drift" style={{ animationDelay: '1.4s' }} />
        <path d="M110 8 l0 12" stroke="#4C8864" strokeWidth="2" strokeLinecap="round" />
        <path d="M110 20 c -5 0 -5 8 0 8 c 5 0 5 -8 0 -8 Z" fill="#D89579" className="animate-drift" />
      </svg>
    </div>
  );
}

/** Floral arch — the botanical border "draws" itself in with a dash animation. */
export function ArchLaurel({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" className={`pointer-events-none ${className}`} fill="none" aria-hidden>
      <path
        d="M40 270 C34 130 74 58 100 58 C126 58 166 130 160 270"
        stroke="#93BD9F"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="arch-draw"
      />
      <path d="M100 58 C100 96 74 118 44 110 M100 58 C100 96 126 118 156 110" stroke="#BBD5C2" strokeWidth="1.5" className="arch-draw-2" />
      <circle cx="100" cy="58" r="4" fill="#D89579" className="animate-drift" />
      <circle cx="70" cy="96" r="3.5" fill="#C8785B" className="animate-drift" style={{ animationDelay: '0.3s' }} />
      <circle cx="130" cy="96" r="3.5" fill="#C8785B" className="animate-drift" style={{ animationDelay: '1s' }} />
      <circle cx="50" cy="150" r="3" fill="#BBD5C2" className="animate-drift" style={{ animationDelay: '1.5s' }} />
      <circle cx="150" cy="150" r="3" fill="#BBD5C2" className="animate-drift" style={{ animationDelay: '0.8s' }} />
    </svg>
  );
}

/** Twinkling sparkle petal, for decorative floating light. */
export function Sparkle({ className = '', color = '#D89579' }: { className?: string; color?: string }) {
  return (
    <span className={`leaf-dot pointer-events-none ${className}`} style={{ background: color, display: 'inline-block' }} aria-hidden />
  );
}

/** Corner vine flourish. */
export function VineCorner({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 90"
      className={`pointer-events-none ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      fill="none"
      aria-hidden
    >
      <path d="M4 86 C4 46 24 18 62 14" stroke="#93BD9F" strokeWidth="2" strokeLinecap="round" className="arch-draw" />
      <path d="M62 14 c8 6 10 16 4 24 c-6 8-2 18 6 22" stroke="#BBD5C2" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="44" r="6" fill="#D89579" className="animate-drift" />
      <circle cx="48" cy="40" r="4" fill="#C8785B" className="animate-drift" style={{ animationDelay: '0.6s' }} />
      <circle cx="70" cy="36" r="4" fill="#BBD5C2" className="animate-drift" style={{ animationDelay: '1.1s' }} />
    </svg>
  );
}

export function Petal({ className = '' }: { className?: string }) {
  return (
    <span className={`leaf-dot pointer-events-none ${className}`} style={{ display: 'inline-block' }} />
  );
}

export function HeartMark({ className = '' }: { className?: string }) {
  return <Heart className={className} />;
}

/** Royal golden crown with jewels. */
export function Crown({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 64 44" className={`pointer-events-none ${className}`} style={style} fill="none" aria-hidden>
      <path d="M8 34 L12 12 L24 24 L32 6 L40 24 L52 12 L56 34 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="8" y="34" width="48" height="6" rx="3" fill="#C9A227" stroke="#B8860B" strokeWidth="1.2" />
      <circle cx="12" cy="10" r="2.6" fill="#F3DCA9" stroke="#B8860B" strokeWidth="1" />
      <circle cx="32" cy="4" r="3" fill="#C8785B" stroke="#B8860B" strokeWidth="1" />
      <circle cx="52" cy="10" r="2.6" fill="#F3DCA9" stroke="#B8860B" strokeWidth="1" />
      <circle cx="24" cy="37" r="1.8" fill="#7C3D2E" />
      <circle cx="40" cy="37" r="1.8" fill="#315741" />
    </svg>
  );
}