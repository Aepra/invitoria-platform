'use client';
import { weddingData } from '../../data/wedding';
import { Monogram, BloomDivider, Garland } from '../Ornaments';
import { ParallaxBg } from '../ParallaxBg';
import { Petals } from '../Petals';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.gallery[6] || weddingData.heroPhoto}
        speed={0.22}
        overlay="to bottom, rgba(49,87,65,.88), rgba(49,87,65,.55) 50%, rgba(49,87,65,.94)"
        className="absolute inset-0"
      />
      <Garland className="absolute -left-6 -top-1 w-[60%] opacity-80 z-[2] animate-sway-soft" />
      <Garland className="absolute -right-6 -top-1 w-[60%] opacity-80 z-[2] animate-sway-soft" style={{ transform: 'scaleX(-1)', animationDelay: '0.7s' }} />
      <Petals count={16} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="swing mb-6 flex justify-center"><Monogram className="w-24 h-24 float-y" /></div>
        <div className="rise entered">
          <p className="font-display tracking-[0.3em] uppercase text-cream-100 text-xs mb-4">
            Wassalamu&apos;alaikum Wr. Wb.
          </p>
          <p className="font-body text-cream-100/90 leading-relaxed max-w-md mx-auto mb-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu.
          </p>
          <div className="my-8"><BloomDivider /></div>
          <p className="font-body text-cream-100/80 text-sm mb-2">Keluarga Besar Montague &amp; Capulet</p>
          <h3 className="font-script text-6xl text-cream-50 text-shimmer mb-2">Suci &amp; Abel</h3>
          <div className="flex items-center justify-center gap-2 my-5">
            <Heart className="w-4 h-4 text-clay-300 beat" />
            <Heart className="w-5 h-5 text-clay-200 beat" style={{ animationDelay: '0.3s' }} />
            <Heart className="w-4 h-4 text-clay-300 beat" style={{ animationDelay: '0.6s' }} />
          </div>
          <p className="font-body text-cream-100/70 text-sm">Terima kasih atas doa dan restu Anda</p>
          <p className="font-body text-cream-100/40 text-[11px] mt-8 tracking-widest uppercase">Premium 06 · Botanical</p>
        </div>
      </div>
    </footer>
  );
}