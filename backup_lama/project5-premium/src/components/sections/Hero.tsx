import { useRef, useState } from 'react';
import { weddingData } from '@/data/wedding';
import { Particles, LightOrbs } from '@/components/Particles';
import { FloralFrame, CornerOrnament, RoseOrnament, ButterflyOrnament } from '@/components/Ornaments';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-screen flex items-center justify-center overflow-hidden dreamy-overlay light-leak"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={weddingData.bgPhoto}
          alt="Cherry blossom path"
          className="w-full h-full object-cover"
          style={{ animation: 'zoomBg 30s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-blush/40 to-cream/60" />
      </div>

      <LightOrbs count={12} />
      <Particles count={20} type="petal" />

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
        {/* Floral frame behind names */}
        <div className="pop-out-lg flex justify-center mb-6 relative">
          <div className="absolute -top-20 opacity-25">
            <FloralFrame size={340} className="animate-spin-slower" />
          </div>
          <div className="relative z-10">
            <RoseOrnament className="w-12 h-12 animate-float" />
          </div>
        </div>

        <p className="pop-out text-ink/60 text-xs sm:text-sm tracking-[0.4em] uppercase font-sans mb-6">
          The Wedding Of
        </p>

        {/* Names */}
        <div className="pop-out-lg">
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-shimmer-rose leading-none text-glow-soft">
            Suci
          </h1>
        </div>

        <div className="pop-out flex items-center justify-center gap-5 my-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-medium" />
          <RoseOrnament className="w-8 h-10 animate-soft-pulse" />
          <span className="font-display text-rose-400 text-4xl italic">&</span>
          <RoseOrnament className="w-8 h-10 animate-soft-pulse" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-medium" />
        </div>

        <div className="pop-out-lg">
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-shimmer-rose leading-none text-glow-soft">
            Abel
          </h1>
        </div>

        <div className="pop-out mt-10">
          <p className="text-ink/70 font-display text-xl sm:text-2xl italic mb-2">
            Minggu, 12 Desember 2026
          </p>
          <div className="flex items-center justify-center gap-3">
            <ButterflyOrnament className="w-6 h-5 animate-float" />
            <p className="text-rose-500/60 text-sm tracking-widest uppercase">
              Verona Grand Hall
            </p>
            <ButterflyOrnament className="w-6 h-5 animate-float" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ animation: 'scroll-hint 2.5s ease-in-out infinite' }}>
        <span className="text-ink/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-rose-400" />
      </div>
    </section>
  );
}
