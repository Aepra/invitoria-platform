import { type ReactNode } from 'react';

type OrnamentProps = {
  className?: string;
};

/** Decorative divider with a center diamond and flanking lines. */
export function Divider({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
      <FlowerIcon className="w-6 h-6 text-primary animate-pulse-soft" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}

export function FlowerIcon({ className = '' }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" opacity="0.7" />
      <path d="M12 12c0-3-2-5-5-5s-5 2-5 5 2 5 5 5 5-2 5-5z" opacity="0.7" />
      <path d="M12 12c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z" opacity="0.7" />
      <path d="M12 12c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" opacity="0.7" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LeafCorner({ className = '' }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 110 Q 30 80, 50 70 T 100 50" />
      <path d="M25 95 Q 35 85, 40 80" />
      <path d="M40 80 Q 50 70, 55 65" />
      <path d="M55 65 Q 65 55, 70 50" />
      <ellipse cx="30" cy="90" rx="6" ry="3" transform="rotate(-30 30 90)" fill="currentColor" opacity="0.5" />
      <ellipse cx="45" cy="73" rx="6" ry="3" transform="rotate(-35 45 73)" fill="currentColor" opacity="0.5" />
      <ellipse cx="60" cy="58" rx="6" ry="3" transform="rotate(-40 60 58)" fill="currentColor" opacity="0.5" />
      <ellipse cx="80" cy="48" rx="5" ry="2.5" transform="rotate(-45 80 48)" fill="currentColor" opacity="0.5" />
      <circle cx="100" cy="50" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function MonogramFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg className="absolute inset-0 w-full h-full animate-spin-slow text-primary/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="50" cy="50" r="48" strokeDasharray="2 4" />
      </svg>
      {children}
    </div>
  );
}
