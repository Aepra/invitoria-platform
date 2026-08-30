import { useRef, useState } from 'react';
import { weddingData } from '../../data/wedding';
import { Particles } from '../../components/Particles';
import { RoyalCrown, CornerOrnament, FleurDeLisOrnament } from '../../components/Ornaments';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={weddingData.bgPhoto}
          alt="Grand ballroom"
          className="w-full h-full object-cover"
          style={{ animation: 'zoomBg 30s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/60 via-royal-800/70 to-royal-900/90" />
      </div>

      <Particles count={20} />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-8 left-8 w-20 h-20 opacity-50" />
      <CornerOrnament className="absolute top-8 right-8 w-20 h-20 opacity-50" flip />
      <CornerOrnament className="absolute bottom-8 left-8 w-20 h-20 opacity-50" />
      <CornerOrnament className="absolute bottom-8 right-8 w-20 h-20 opacity-50" flip />

      {/* 3D Content */}
      <div
        className="perspective-container relative z-10 w-full max-w-3xl px-6 text-center preserve-3d"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Crown */}
        <div className="pop-out-lg flex justify-center mb-6">
          <RoyalCrown className="w-24 h-14 animate-float" />
        </div>

        <p className="pop-out text-ivory/70 text-xs sm:text-sm tracking-[0.4em] uppercase font-sans mb-6">
          The Royal Wedding Of
        </p>

        {/* Names */}
        <div className="pop-out-lg">
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-shimmer-gold leading-none drop-shadow-2xl">
            Suci
          </h1>
        </div>

        <div className="pop-out flex items-center justify-center gap-5 my-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
          <FleurDeLisOrnament className="w-8 h-10 animate-pulse-soft" />
          <span className="font-serif text-gold-300 text-4xl italic">&</span>
          <FleurDeLisOrnament className="w-8 h-10 animate-pulse-soft" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        <div className="pop-out-lg">
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-shimmer-gold leading-none drop-shadow-2xl">
            Abel
          </h1>
        </div>

        <div className="pop-out mt-10">
          <p className="text-ivory/80 font-serif text-xl sm:text-2xl italic mb-2">
            Minggu, 12 Desember 2026
          </p>
          <p className="text-gold-200/70 text-sm tracking-widest uppercase">
            Verona Grand Hall
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-ivory/50 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold-400" />
      </div>
    </section>
  );
}
