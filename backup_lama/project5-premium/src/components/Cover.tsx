import { useState } from 'react';
import { weddingData } from '@/data/wedding';
import { Particles, LightOrbs } from '@/components/Particles';
import { FloralFrame, CornerOrnament, RoseOrnament, ButterflyOrnament } from '@/components/Ornaments';
import { BookOpen } from 'lucide-react';

export function Cover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden dreamy-overlay light-leak"
      style={{
        transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1), opacity 1.4s ease-out',
        transform: opening ? 'translateY(-100%)' : 'translateY(0)',
        opacity: opening ? 0 : 1,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={weddingData.coverPhoto}
          alt="Flower tunnel"
          className="w-full h-full object-cover"
          style={{ animation: 'zoomBg 30s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-blush/50 to-cream/70" />
      </div>

      <LightOrbs count={10} />
      <Particles count={15} type="petal" />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-6 left-6 w-16 h-16 opacity-60" />
      <CornerOrnament className="absolute top-6 right-6 w-16 h-16 opacity-60" flip />
      <CornerOrnament className="absolute bottom-6 left-6 w-16 h-16 opacity-60" />
      <CornerOrnament className="absolute bottom-6 right-6 w-16 h-16 opacity-60" flip />

      {/* Floating butterflies */}
      <ButterflyOrnament className="absolute top-1/4 left-12 w-10 h-8 opacity-50 animate-float" />
      <ButterflyOrnament className="absolute bottom-1/3 right-12 w-8 h-6 opacity-40 animate-float-slow" />

      {/* Floating floral frame */}
      <div className="absolute top-1/4 left-8 opacity-25 hidden sm:block">
        <FloralFrame size={140} className="animate-float-slow" />
      </div>
      <div className="absolute bottom-1/4 right-8 opacity-25 hidden sm:block">
        <FloralFrame size={120} className="animate-float" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <div style={{ animation: 'fadeIn 2s ease-out forwards' }}>
          <p className="text-ink/60 text-xs tracking-[0.4em] uppercase font-sans mb-8">
            The Wedding Of
          </p>

          {/* Central floral frame behind names */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-30">
              <FloralFrame size={300} />
            </div>

            <div className="relative z-10">
              <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-shimmer-rose leading-tight mb-2 text-glow-soft">
                Suci
              </h1>
              <div className="flex items-center justify-center gap-4 my-2">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-medium" />
                <RoseOrnament className="w-7 h-7 animate-soft-pulse" />
                <span className="font-display text-rose-400 text-3xl italic">&</span>
                <RoseOrnament className="w-7 h-7 animate-soft-pulse" />
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-medium" />
              </div>
              <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-shimmer-rose leading-tight text-glow-soft">
                Abel
              </h1>
            </div>
          </div>

          <p className="text-ink/50 font-display text-lg italic mt-8 mb-2">
            Minggu, 12 Desember 2026
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <ButterflyOrnament className="w-6 h-5 animate-float" />
            <p className="text-rose-500/50 text-xs tracking-[0.3em] uppercase">
              Verona Grand Hall
            </p>
            <ButterflyOrnament className="w-6 h-5 animate-float" />
          </div>

          <p className="text-ink/40 text-xs tracking-widest uppercase mb-8 max-w-xs">
            Kepada Yth. Bapak / Ibu / Saudara / i
          </p>

          {/* Elegant open button */}
          <button
            onClick={handleOpen}
            className="btn-elegant group relative flex flex-col items-center gap-3 mx-auto"
          >
            <div className="relative w-20 h-20 rounded-full border-2 border-gold-medium/40 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-rose-400/60">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/40 to-cream/40 backdrop-blur-sm group-hover:from-petal/50 group-hover:to-blush/50 transition-all" />
              <div className="absolute -inset-2 rounded-full border border-gold-medium/20 animate-spin-slower" />
              <div className="absolute -inset-4 rounded-full border border-rose-300/15 animate-spin-reverse" />
              <BookOpen className="w-7 h-7 text-rose-500/70 group-hover:text-rose-500 transition-colors" />
            </div>
            <span className="text-ink/60 font-sans text-xs tracking-[0.2em] uppercase group-hover:text-rose-500 transition-colors">
              Buka Undangan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
