import { Crown, Sparkle } from 'lucide-react';

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <Sparkle className="w-4 h-4 text-gold-400" />
      <Crown className="w-5 h-5 text-gold-400" />
      <Sparkle className="w-4 h-4 text-gold-400" />
    </div>
  );
}

export function RoyalCrown({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 50 L20 15 L35 35 L50 5 L65 35 L80 15 L90 50 Z"
        fill="url(#crownGrad)"
        stroke="#E3C082"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="15" r="3" fill="#F6E4B8" />
      <circle cx="50" cy="5" r="4" fill="#F6E4B8" />
      <circle cx="80" cy="15" r="3" fill="#F6E4B8" />
      <rect x="10" y="50" width="80" height="6" rx="1" fill="url(#crownGrad)" stroke="#E3C082" strokeWidth="1" />
      <defs>
        <linearGradient id="crownGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6E4B8" />
          <stop offset="50%" stopColor="#E3C082" />
          <stop offset="100%" stopColor="#B18E4F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
        stroke="#E3C082"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="5" cy="5" r="3" fill="#E3C082" />
      <path d="M15 15 Q25 15 25 25 Q25 35 35 35" stroke="#EFD596" strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="25" cy="25" r="2" fill="#F6E4B8" />
      <circle cx="35" cy="35" r="2" fill="#F6E4B8" />
    </svg>
  );
}

export function FleurDeLisOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 5 C15 15 10 20 5 22 C10 24 15 28 20 38 C25 28 30 24 35 22 C30 20 25 15 20 5 Z"
        fill="url(#fleurGrad)"
        stroke="#E3C082"
        strokeWidth="0.8"
      />
      <path d="M20 38 L20 48 M14 42 L26 42" stroke="#E3C082" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="fleurGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6E4B8" />
          <stop offset="100%" stopColor="#B18E4F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
