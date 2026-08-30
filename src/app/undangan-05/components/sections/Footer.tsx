import { weddingData } from '../../data/wedding';
import { FloralFrame, RoseOrnament, OrnamentDivider, ButterflyOrnament } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/50 to-cream py-20 soft-vignette dreamy-overlay">
      <LightOrbs count={12} />
      <Particles count={25} type="petal" />

      {/* Floating butterflies */}
      <ButterflyOrnament className="absolute top-24 left-16 w-8 h-6 opacity-40 animate-float" />
      <ButterflyOrnament className="absolute top-32 right-20 w-7 h-5 opacity-30 animate-float-slow" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <FloralFrame size={90} className="animate-float" />
        </div>

        <div className="reveal mb-6">
          <p className="text-ink/70 font-display text-lg italic mb-4">
            Wassalamu&apos;alaikum Wr. Wb.
          </p>
          <p className="text-ink/55 font-display text-base leading-relaxed max-w-md mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>

        <div className="reveal-scale my-10">
          <OrnamentDivider />
        </div>

        <div className="reveal-blur">
          <p className="text-rose-500 text-xs tracking-[0.3em] uppercase mb-4">
            Kami yang berbahagia
          </p>
          <p className="text-ink/50 font-display text-sm mb-2">Keluarga Besar Montague &amp; Capulet</p>

          <div className="flex items-center justify-center gap-3 my-8">
            <ButterflyOrnament className="w-6 h-5 animate-float" />
            <Heart className="w-5 h-5 text-rose-400 animate-soft-pulse" />
            <ButterflyOrnament className="w-6 h-5 animate-float" />
          </div>

          <h3 className="font-script text-5xl text-shimmer-rose mb-2 text-glow-soft">Suci &amp; Abel</h3>
          <p className="text-ink/40 font-display text-sm mt-6">
            Terima kasih atas doa dan restu Anda
          </p>
        </div>

        <div className="reveal-scale mt-12 flex justify-center">
          <RoseOrnament className="w-10 h-10 animate-soft-pulse" />
        </div>
      </div>
    </footer>
  );
}
