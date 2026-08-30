import { weddingData } from '@/data/wedding';
import { RoyalCrown, FleurDeLisOrnament, OrnamentDivider } from '@/components/Ornaments';
import { Particles } from '@/components/Particles';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-20">
      <Particles count={20} />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <RoyalCrown className="w-20 h-12 animate-float" />
        </div>

        <div className="reveal mb-6">
          <p className="text-ivory/70 font-serif text-lg italic mb-4">
            Wassalamu&apos;alaikum Wr. Wb.
          </p>
          <p className="text-ivory/60 font-serif text-base leading-relaxed max-w-md mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>

        <div className="reveal-scale my-10">
          <OrnamentDivider />
        </div>

        <div className="reveal-blur">
          <p className="text-gold-300 text-xs tracking-[0.3em] uppercase mb-4">
            Kami yang berbahagia
          </p>
          <p className="text-ivory/50 font-serif text-sm mb-2">Keluarga Besar Montague &amp; Capulet</p>

          <div className="flex items-center justify-center gap-3 my-8">
            <FleurDeLisOrnament className="w-6 h-8" />
            <Heart className="w-5 h-5 text-burgundy-300 animate-pulse-soft" />
            <FleurDeLisOrnament className="w-6 h-8" />
          </div>

          <h3 className="font-script text-5xl text-shimmer-gold mb-2">Suci &amp; Abel</h3>
          <p className="text-ivory/40 font-serif text-sm mt-6">
            Terima kasih atas doa dan restu Anda
          </p>
        </div>
      </div>
    </footer>
  );
}
