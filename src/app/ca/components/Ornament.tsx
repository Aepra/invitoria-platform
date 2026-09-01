import { type ReactNode } from 'react';

type OrnamentProps = {
  className?: string;
  style?: React.CSSProperties;
};

/** Cartoon divider with stars and squiggly line. */
export function Divider({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-1 w-12 rounded-full bg-ink/20" />
      <StarIcon className="w-6 h-6 text-coral animate-wiggle" />
      <span className="h-1 w-12 rounded-full bg-ink/20" />
    </div>
  );
}

export function StarIcon({ className = '', style }: OrnamentProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

export function HeartIcon({ className = '', style }: OrnamentProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.5 1 4 2.5C10.5 6 12 5 14 5c3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

export function CloudShape({ className = '', style }: OrnamentProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 80" fill="currentColor">
      <path d="M25 60c-8 0-15-7-15-15s7-15 15-15c2-8 9-14 18-14s16 6 18 14c2-1 4-2 7-2 8 0 15 7 15 15s-7 15-15 15H25z" />
    </svg>
  );
}

export function BlobShape({ className = '', color = '#FF6B6B' }: OrnamentProps & { color?: string }) {
  return (
    <div
      className={`absolute shape-blob ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

export function SpeechBubble({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative cartoon-card px-5 py-3 ${className}`}>
      {children}
      <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-3 border-ink rotate-45" style={{ borderRightWidth: '3px', borderBottomWidth: '3px' }} />
    </div>
  );
}
