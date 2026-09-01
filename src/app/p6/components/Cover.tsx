'use client';
import { useEffect, useState } from 'react';
import { weddingData } from '../data/wedding';
import { Petals } from './Petals';
import { Monogram, Garland, ArchLaurel, Crown } from './Ornaments';
import { CalendarHeart } from 'lucide-react';

export function Cover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      const formatted = decodeURIComponent(to)
        .replace(/\+/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      setGuestName(formatted);
    }
  }, []);

  const handleOpen = () => {
    // Then, the cover "rolls away" upward like an unrolled botanical scroll.
    setOpening(true);
    setTimeout(() => setDone(true), 1300);
    setTimeout(onOpen, 1350);
  };

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        transition: 'clip-path 1.2s cubic-bezier(.7,0,.3,1), opacity .9s ease-out',
        opacity: opening ? 0 : 1,
        clipPath: opening ? 'rect(0, 100%, 100%, 0)' : 'none',
      }}
    >
      {/* Prewedding photo with soft botanical wash */}
      <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: `url('${weddingData.coverPhoto}')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 via-cream-50/85 to-sage-50/90" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 leaf-dot opacity-25 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-72 h-72 leaf-dot opacity-20 pointer-events-none" />
      <Garland className="absolute -left-6 -top-1 w-[58%] opacity-90 animate-sway-soft z-[2]" />
      <Garland className="absolute -right-6 -top-1 w-[58%] opacity-90 animate-sway-soft z-[2]" style={{ transform: 'scaleX(-1)', animationDelay: '0.7s' }} />
      <Petals count={18} />

      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <div
          className="animate-bloom relative flex flex-col items-center w-full max-w-xs rounded-[2.5rem] arch-shape bg-white/70 backdrop-blur-md border border-sage-200/70 shadow-[0_30px_70px_-30px_rgba(49,87,65,0.5)] px-7 pt-12 pb-8"
          style={{ animationDelay: '0.1s' }}
        >
          <ArchLaurel className="absolute -inset-x-2 -top-6 w-[calc(100%+1rem)] h-[120%] mx-auto opacity-80" />
          <Crown className="w-14 h-10 mb-3 animate-float-soft drop-shadow-[0_6px_10px_rgba(184,134,11,0.35)]" />
          <Monogram className="w-20 h-20 mb-5 animate-sway-soft" />
          <p className="font-display tracking-[0.35em] uppercase text-sage-600 text-xs mb-4">
            The Wedding Of
          </p>
          <h1 className="font-script text-6xl sm:text-7xl text-ink-800 leading-tight text-shimmer">
            Suci <span className="text-clay-500">&</span> Abel
          </h1>
          <div className="bloom-divider w-56 my-5">
            <span className="text-clay-500"><CalendarHeart className="w-5 h-5 animate-sway-soft" /></span>
          </div>
          <p className="font-body text-ink-600 text-sm tracking-[0.2em] uppercase">
            12 . 12 . 2026
          </p>

          {/* Guest */}
          <div className="mt-8 rounded-2xl bg-sage-50/90 border border-sage-200/70 px-6 py-4 w-full">
            <p className="font-display tracking-[0.25em] uppercase text-sage-500 text-[10px] mb-1">
              Kepada Yth.
            </p>
            <p className="font-script text-2xl text-clay-600">
              {guestName ?? 'Bapak / Ibu / Saudara/i'}
            </p>
          </div>

          <button
            onClick={handleOpen}
            className="mt-7 inline-flex items-center gap-3 px-10 py-3.5 rounded-full bg-sage-600 text-cream-50 font-body text-sm tracking-[0.2em] uppercase shadow-lg shadow-sage-600/30 hover:bg-sage-700 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}