'use client';
import { weddingData } from '../../data/wedding';
import { Petals } from '../Petals';
import { Monogram, ArchLaurel, Garland, Crown } from '../Ornaments';
import { ParallaxBg } from '../ParallaxBg';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-[100dvh] overflow-hidden">
      {/* Parallax prewedding photo */}
      <ParallaxBg
        image={weddingData.heroPhoto}
        speed={0.38}
        overlay="to bottom, rgba(250,246,236,.85), rgba(250,246,236,.60) 55%, rgba(250,246,236,.96)"
        className="absolute inset-0"
      />

      {/* Hanging floral garlands */}
      <Garland className="absolute -left-6 -top-1 w-[60%] opacity-90 z-10 animate-sway-soft" />
      <Garland className="absolute -right-6 -top-1 w-[60%] opacity-90 z-10 animate-sway-soft" style={{ transform: 'scaleX(-1)', animationDelay: '0.8s' }} />

      <Petals count={18} />

      <VineDecor />

      {/* Frosted center card */}
      <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
        <div className="relative w-full max-w-sm text-center rounded-[2.5rem] arch-shape bg-white/55 backdrop-blur-md border border-sage-200/70 shadow-[0_30px_70px_-30px_rgba(49,87,65,0.5)] px-7 pt-12 pb-8">
          {/* Arch laurel drawn behind title */}
          <ArchLaurel className="absolute -inset-x-3 -top-7 w-[calc(100%+1.5rem)] h-[120%] mx-auto opacity-80" />

          <div className="relative">
            <div className="animate-bloom" style={{ animationDelay: '0.1s' }}>
              <Crown className="w-14 h-10 mx-auto mb-2 animate-float-soft drop-shadow-[0_6px_10px_rgba(184,134,11,0.35)]" />
              <Monogram className="w-20 h-20 mx-auto mb-4 animate-sway-soft" />
            </div>
            <p className="animate-bloom font-display tracking-[0.35em] uppercase text-sage-600 text-[11px] mb-4" style={{ animationDelay: '0.25s' }}>
              The Wedding Of
            </p>
            <h1 className="animate-bloom font-script text-6xl text-ink-800 leading-tight text-shimmer" style={{ animationDelay: '0.4s' }}>
              {weddingData.bride.nickname}
            </h1>
            <div className="animate-bloom flex items-center justify-center gap-3 my-1" style={{ animationDelay: '0.55s' }}>
              <span className="w-10 h-px bg-sage-400/70" />
              <span className="font-script text-4xl text-clay-500">&amp;</span>
              <span className="w-10 h-px bg-sage-400/70" />
            </div>
            <h1 className="animate-bloom font-script text-6xl text-ink-800 leading-tight text-shimmer" style={{ animationDelay: '0.7s' }}>
              {weddingData.groom.nickname}
            </h1>
            <p className="animate-bloom mt-6 font-body text-ink-600 tracking-[0.3em] uppercase text-sm" style={{ animationDelay: '0.85s' }}>
              12 . 12 . 2026
            </p>
            <p className="animate-bloom mt-2 font-script text-lg text-clay-500" style={{ animationDelay: '1s' }}>
              ♡ Mazmur untuk sehidup sesurga ♡
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-sage-700 animate-bounce">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase">Gulir</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      {/* Scallop transition into next section */}
      <svg className="absolute bottom-0 left-0 w-full h-10 z-10" viewBox="0 0 414 40" preserveAspectRatio="none">
        <path d="M0 40 L0 20 Q 25 0 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 L 400 40 Z" fill="#FDFBF5" />
      </svg>
    </section>
  );
}

function VineDecor() {
  return (
    <>
      <svg className="absolute left-2 top-1/3 w-16 h-16 z-10 opacity-80" viewBox="0 0 90 90" fill="none">
        <path d="M4 86 C4 46 24 18 62 14" stroke="#93BD9F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="30" cy="44" r="6" fill="#D89579" className="animate-drift" />
        <circle cx="48" cy="40" r="4" fill="#C8785B" className="animate-drift" style={{ animationDelay: '0.6s' }} />
      </svg>
      <svg className="absolute right-2 top-1/3 w-16 h-16 z-10 opacity-80" viewBox="0 0 90 90" fill="none" style={{ transform: 'scaleX(-1)' }}>
        <path d="M4 86 C4 46 24 18 62 14" stroke="#93BD9F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="30" cy="44" r="6" fill="#D89579" className="animate-drift" />
        <circle cx="48" cy="40" r="4" fill="#C8785B" className="animate-drift" style={{ animationDelay: '0.9s' }} />
      </svg>
    </>
  );
}