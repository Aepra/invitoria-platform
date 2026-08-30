import { useState } from 'react';
import { weddingData } from '@/data/wedding';
import { Particles } from '@/components/Particles';
import { RoyalCrown, CornerOrnament, FleurDeLisOrnament } from '@/components/Ornaments';

export function Cover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onOpen, 1600);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        transition: 'transform 1.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 1.2s ease-out',
        transform: opening ? 'translateY(-100%)' : 'translateY(0)',
        opacity: opening ? 0 : 1,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={weddingData.coverPhoto}
          alt="Royal wedding"
          className="w-full h-full object-cover"
          style={{ animation: 'zoomBg 25s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/70 via-royal-800/80 to-royal-900/95" />
      </div>

      <Particles count={15} />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-6 left-6 w-16 h-16 opacity-70" />
      <CornerOrnament className="absolute top-6 right-6 w-16 h-16 opacity-70" flip />
      <CornerOrnament className="absolute bottom-6 left-6 w-16 h-16 opacity-70" />
      <CornerOrnament className="absolute bottom-6 right-6 w-16 h-16 opacity-70" flip />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <div
          className="flex flex-col items-center"
          style={{
            animation: 'fadeIn 2s ease-out forwards',
          }}
        >
          <p className="text-ivory/80 text-sm tracking-[0.3em] uppercase font-sans mb-6">
            The Wedding Of
          </p>

          <RoyalCrown className="w-20 h-12 mb-4 animate-float" />

          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-shimmer-gold leading-tight mb-2">
            Suci
          </h1>
          <div className="flex items-center gap-4 my-2">
            <span className="h-px w-12 bg-gold-400/60" />
            <FleurDeLisOrnament className="w-6 h-8" />
            <span className="text-gold-300 font-serif text-3xl italic">&</span>
            <FleurDeLisOrnament className="w-6 h-8" />
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-shimmer-gold leading-tight">
            Abel
          </h1>

          <p className="text-ivory/70 font-serif text-lg italic mt-6 mb-10">
            Minggu, 12 Desember 2026
          </p>

          <p className="text-ivory/50 text-xs tracking-widest uppercase mb-8 max-w-xs">
            Kepada Yth. Bapak / Ibu / Saudara / i
          </p>

          <button
            onClick={handleOpen}
            className="group relative px-10 py-3.5 overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 border border-gold-400/50 rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-gold-600/20 via-gold-400/30 to-gold-600/20 rounded-full backdrop-blur-sm transition-all group-hover:from-gold-500/30 group-hover:via-gold-300/40 group-hover:to-gold-500/30" />
            <span className="relative flex items-center gap-2 text-gold-100 font-sans text-sm tracking-[0.2em] uppercase">
              Buka Undangan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
