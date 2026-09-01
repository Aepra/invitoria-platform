'use client';
import { weddingData } from '../../data/wedding';
import { BloomDivider, VineCorner } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Petals } from '../Petals';

export function Quote() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.bgPhoto}
        speed={0.2}
        overlay="to bottom, rgba(250,246,236,.94), rgba(250,246,236,.78)"
        className="absolute inset-0"
      />
      <VineCorner className="absolute top-3 left-3 w-16 h-16 z-10 opacity-80" />
      <VineCorner className="absolute top-3 right-3 w-16 h-16 z-10 opacity-80" flip />
      <Petals count={10} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="swing mb-6 flex justify-center"><BloomDivider /></div>
        <div className="bloom">
          <ParallaxItem speed={0.05} className="rounded-[2rem] arch-shape bg-white/70 backdrop-blur-md border border-sage-200/70 shadow-[0_20px_50px_-25px_rgba(49,87,65,0.4)] px-8 pt-12 pb-8">
            <p className="font-script text-4xl text-clay-500 mb-5">﷽</p>
            <p className="font-display text-ink-700 text-xl leading-relaxed italic">
              &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
              merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
              dan sayang.&rdquo;
            </p>
            <p className="mt-6 font-body text-sage-700 text-sm tracking-[0.25em] uppercase">
              — Q.S. Ar-Rum: 21
            </p>
          </ParallaxItem>
        </div>
      </div>
    </section>
  );
}