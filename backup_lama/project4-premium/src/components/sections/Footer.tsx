import { weddingData } from '@/data/wedding';
import { SpellCircle, StarOrnament, OrnamentDivider, MoonOrnament } from '@/components/Ornaments';
import { Particles, Starfield } from '@/components/Particles';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain cinematic-vignette">
      <Starfield count={80} />
      <Particles count={25} type="orb" />
      <div className="mist-layer" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <SpellCircle size={80} className="animate-float" />
        </div>

        <div className="reveal mb-6">
          <p className="text-moonlight/70 font-script text-lg italic mb-4">
            Wassalamu&apos;alaikum Wr. Wb.
          </p>
          <p className="text-moonlight/60 font-script text-base leading-relaxed max-w-md mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>

        <div className="reveal-scale my-10">
          <OrnamentDivider />
        </div>

        <div className="reveal-blur">
          <p className="text-teal-glow text-xs tracking-[0.3em] uppercase mb-4">
            Kami yang berbahagia
          </p>
          <p className="text-moonlight/50 font-serif text-sm mb-2">Keluarga Besar Montague &amp; Capulet</p>

          <div className="flex items-center justify-center gap-3 my-8">
            <MoonOrnament className="w-6 h-8 animate-float" />
            <Heart className="w-5 h-5 text-mystic-300 animate-pulse-soft" />
            <MoonOrnament className="w-6 h-8 animate-float" />
          </div>

          <h3 className="font-magic text-4xl text-shimmer-mystic mb-2 text-glow-mystic">Suci &amp; Abel</h3>
          <p className="text-moonlight/40 font-script text-sm mt-6">
            Terima kasih atas doa dan restu Anda
          </p>
        </div>

        <div className="reveal-scale mt-12 flex justify-center">
          <StarOrnament className="w-10 h-10 animate-pulse-soft" />
        </div>
      </div>
    </footer>
  );
}
