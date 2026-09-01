export function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10 Q50 0 40 10 Q30 20 20 10 Q10 0 0 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M60 10 Q70 0 80 10 Q90 20 100 10 Q110 0 120 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="60" cy="10" r="2.5" fill="currentColor" />
      <circle cx="20" cy="10" r="1.5" fill="currentColor" />
      <circle cx="100" cy="10" r="1.5" fill="currentColor" />
      <path d="M60 4 L62 10 L60 16 L58 10 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function OrnamentCorner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 L40 0 Q40 40 0 40 Z" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <path d="M5 5 L35 5 Q35 35 5 35 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path d="M0 0 Q20 20 40 0" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <path d="M0 0 Q20 20 0 40" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M0 20 Q25 35 50 20 Q75 5 100 20 Q125 35 150 20 Q175 5 200 20" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <circle cx="100" cy="20" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="100" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="150" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path d="M100 10 L102 20 L100 30 L98 20 Z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function OrnamentFrame({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 10 L190 100 L100 190 L10 100 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M100 30 L170 100 L100 170 L30 100 Z" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
      <path d="M100 10 Q120 50 190 100" stroke="currentColor" strokeWidth="0.3" opacity="0.1" fill="none" />
      <path d="M190 100 Q150 120 100 190" stroke="currentColor" strokeWidth="0.3" opacity="0.1" fill="none" />
      <path d="M100 190 Q80 150 10 100" stroke="currentColor" strokeWidth="0.3" opacity="0.1" fill="none" />
      <path d="M10 100 Q50 80 100 10" stroke="currentColor" strokeWidth="0.3" opacity="0.1" fill="none" />
    </svg>
  );
}
