import { useState } from 'react';
import { weddingData } from '../data/wedding';
import { Particles, Starfield } from '../components/Particles';
import { SpellCircle, CornerOrnament, StarOrnament, MoonOrnament } from '../components/Ornaments';
import { Play } from 'lucide-react';

export function Cover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden film-grain"
      style={{
        transition: 'transform 1.8s cubic-bezier(0.76, 0, 0.24, 1), opacity 1.4s ease-out',
        transform: opening ? 'translateY(-100%) scale(1.05)' : 'translateY(0) scale(1)',
        opacity: opening ? 0 : 1,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={weddingData.coverPhoto}
          alt="Mystical forest"
          className="w-full h-full object-cover"
          style={{ animation: 'zoomBg 30s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-night/80 to-midnight/95" />
      </div>

      <Starfield count={60} />
      <Particles count={15} type="orb" />

      {/* Mist layer */}
      <div className="mist-layer" />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-6 left-6 w-16 h-16 opacity-60" />
      <CornerOrnament className="absolute top-6 right-6 w-16 h-16 opacity-60" flip />
      <CornerOrnament className="absolute bottom-6 left-6 w-16 h-16 opacity-60" />
      <CornerOrnament className="absolute bottom-6 right-6 w-16 h-16 opacity-60" flip />

      {/* Floating spell circles */}
      <div className="absolute top-1/4 left-8 opacity-30 hidden sm:block">
        <SpellCircle size={120} className="animate-float-slow" />
      </div>
      <div className="absolute bottom-1/4 right-8 opacity-30 hidden sm:block">
        <SpellCircle size={100} className="animate-float" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <div style={{ animation: 'fadeIn 2s ease-out forwards' }}>
          <p className="text-moonlight/70 text-xs tracking-[0.4em] uppercase font-sans mb-8">
            The Wedding Of
          </p>

          {/* Central spell circle behind names */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-40">
              <SpellCircle size={280} className="animate-spin-slower" />
            </div>

            <div className="relative z-10">
              <h1 className="font-magic text-5xl sm:text-7xl md:text-8xl text-shimmer-mystic leading-tight mb-2 text-glow-mystic">
                Suci
              </h1>
              <div className="flex items-center justify-center gap-4 my-2">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-mystic-400" />
                <StarOrnament className="w-7 h-7 animate-pulse-soft" />
                <span className="font-script text-mystic-300 text-3xl italic">&</span>
                <StarOrnament className="w-7 h-7 animate-pulse-soft" />
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-mystic-400" />
              </div>
              <h1 className="font-magic text-5xl sm:text-7xl md:text-8xl text-shimmer-mystic leading-tight text-glow-mystic">
                Abel
              </h1>
            </div>
          </div>

          <p className="text-moonlight/60 font-script text-xl italic mt-8 mb-2">
            Minggu, 12 Desember 2026
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <MoonOrnament className="w-8 h-8 animate-float" />
            <p className="text-mystic-200/50 text-xs tracking-[0.3em] uppercase">
              Verona Grand Hall
            </p>
            <MoonOrnament className="w-8 h-8 animate-float" />
          </div>

          <p className="text-moonlight/40 text-xs tracking-widest uppercase mb-8 max-w-xs">
            Kepada Yth. Bapak / Ibu / Saudara / i
          </p>

          {/* Cinematic play button */}
          <button
            onClick={handleOpen}
            className="btn-mystic group relative flex flex-col items-center gap-3 mx-auto"
          >
            <div className="relative w-20 h-20 rounded-full border-2 border-mystic-400/40 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-mystic-300/60">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mystic-500/20 to-teal-glow/20 backdrop-blur-sm group-hover:from-mystic-400/30 group-hover:to-teal-glow/30 transition-all" />
              <div className="absolute -inset-2 rounded-full border border-mystic-400/20 animate-spin-slower" />
              <div className="absolute -inset-4 rounded-full border border-teal-glow/10 animate-spin-reverse" />
              <Play className="w-7 h-7 text-mystic-200 ml-1 group-hover:text-teal-glow transition-colors" />
            </div>
            <span className="text-mystic-200/70 font-sans text-xs tracking-[0.2em] uppercase group-hover:text-mystic-100 transition-colors">
              Buka Undangan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
