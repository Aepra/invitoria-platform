import { useRef, useState } from 'react';
import { weddingData } from '../../data/wedding';
import { Particles, Starfield } from '../../components/Particles';
import { SpellCircle, CornerOrnament, StarOrnament, MoonOrnament } from '../../components/Ornaments';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain cinematic-vignette"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={weddingData.bgPhoto}
          alt="Enchanted forest"
          className="w-full h-full object-cover"
          style={{ animation: 'zoomBg 30s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-night/70 to-midnight/90" />
      </div>

      <Starfield count={80} />
      <Particles count={20} type="orb" />
      <div className="mist-layer" />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-8 left-8 w-20 h-20 opacity-40" />
      <CornerOrnament className="absolute top-8 right-8 w-20 h-20 opacity-40" flip />
      <CornerOrnament className="absolute bottom-8 left-8 w-20 h-20 opacity-40" />
      <CornerOrnament className="absolute bottom-8 right-8 w-20 h-20 opacity-40" flip />

      {/* 3D Content */}
      <div
        className="perspective-container relative z-10 w-full max-w-3xl px-6 text-center preserve-3d"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Spell circle behind names */}
        <div className="pop-out-lg flex justify-center mb-6 relative">
          <div className="absolute -top-20 opacity-30">
            <SpellCircle size={320} className="animate-spin-slower" />
          </div>
          <div className="relative z-10">
            <StarOrnament className="w-12 h-12 animate-float" />
          </div>
        </div>

        <p className="pop-out text-moonlight/70 text-xs sm:text-sm tracking-[0.4em] uppercase font-sans mb-6">
          The Enchanted Wedding Of
        </p>

        {/* Names */}
        <div className="pop-out-lg">
          <h1 className="font-magic text-6xl sm:text-8xl md:text-9xl text-shimmer-mystic leading-none text-glow-mystic">
            Suci
          </h1>
        </div>

        <div className="pop-out flex items-center justify-center gap-5 my-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-mystic-400" />
          <StarOrnament className="w-8 h-10 animate-pulse-soft" />
          <span className="font-script text-mystic-300 text-4xl italic">&</span>
          <StarOrnament className="w-8 h-10 animate-pulse-soft" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-mystic-400" />
        </div>

        <div className="pop-out-lg">
          <h1 className="font-magic text-6xl sm:text-8xl md:text-9xl text-shimmer-mystic leading-none text-glow-mystic">
            Abel
          </h1>
        </div>

        <div className="pop-out mt-10">
          <p className="text-moonlight/80 font-script text-xl sm:text-2xl italic mb-2">
            Minggu, 12 Desember 2026
          </p>
          <div className="flex items-center justify-center gap-3">
            <MoonOrnament className="w-6 h-6 animate-float" />
            <p className="text-teal-glow/70 text-sm tracking-widest uppercase">
              Verona Grand Hall
            </p>
            <MoonOrnament className="w-6 h-6 animate-float" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ animation: 'scroll-hint 2s ease-in-out infinite' }}>
        <span className="text-moonlight/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-mystic-400" />
      </div>
    </section>
  );
}
