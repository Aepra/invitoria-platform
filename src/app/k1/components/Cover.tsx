'use client';
import { useState, useEffect } from 'react';
import { weddingData } from '../data/wedding';
import { Particles } from './Particles';

export function Cover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
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
    setOpening(true);
    setTimeout(onOpen, 1400);
  };

  return (
    <div
      className="absolute inset-0 z-50 overflow-hidden bg-fine-ivory"
      style={{
        transition: 'transform 1.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 1s ease-out',
        transform: opening ? 'translateY(-100%)' : 'translateY(0)',
        opacity: opening ? 0 : 1,
      }}
    >
      <div className="absolute inset-0">
        <img
          src={weddingData.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover fine-art-img"
          style={{ animation: 'zoomBg 28s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fine-ivory/75 via-fine-ivory/55 to-fine-ivory/90" />
      </div>

      <Particles count={12} />

      <div className="relative h-full flex flex-col items-center justify-center px-8 text-center z-10">
        <p className="text-fine-sage text-[10px] tracking-[0.45em] uppercase font-fine-sans mb-8">
          The Wedding Of
        </p>

        <h1 className="font-fine-script text-6xl sm:text-7xl text-fine-charcoal leading-tight">
          {weddingData.bride.nickname}
        </h1>
        <p className="font-fine-serif italic text-fine-sage text-xl my-2">&amp;</p>
        <h1 className="font-fine-script text-6xl sm:text-7xl text-fine-charcoal leading-tight mb-8">
          {weddingData.groom.nickname}
        </h1>

        <div className="fine-divider mb-8" />

        <p className="font-fine-sans text-xs tracking-[0.35em] uppercase text-fine-charcoal/70 mb-10">
          12 . 12 . 2026
        </p>

        <div className="mb-12">
          <p className="text-fine-charcoal/40 font-fine-sans text-[10px] tracking-[0.3em] uppercase mb-2">
            Kepada Yth.
          </p>
          <p className="text-fine-charcoal font-fine-serif text-lg italic border-b border-fine-sage/40 pb-2 min-w-[200px]">
            {guestName ?? 'Bapak / Ibu / Saudara/i'}
          </p>
        </div>

        <button
          onClick={handleOpen}
          className="px-10 py-3 border border-fine-charcoal text-fine-charcoal text-[11px] tracking-[0.28em] uppercase font-fine-sans hover:bg-fine-charcoal hover:text-fine-ivory transition-colors"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
