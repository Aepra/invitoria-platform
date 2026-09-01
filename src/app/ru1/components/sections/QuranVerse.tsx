import { OrnamentDivider, FloralFrame, RoseOrnament } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';

export function QuranVerse() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/50 to-cream py-12 sm:py-16 soft-vignette">
      <LightOrbs count={8} />
      <Particles count={12} type="light" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-10 flex justify-center">
          <FloralFrame size={90} className="animate-float" />
        </div>

        <div className="reveal-blur">
          <p className="font-script text-rose-500 text-4xl mb-8 text-glow-soft">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <p className="font-display text-ink/80 text-2xl sm:text-3xl leading-relaxed italic mb-8">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
            dan sayang."
          </p>

          <p className="text-gold-deep font-display text-lg tracking-wider">
            — Q.S. Ar-Rum: 21
          </p>
        </div>

        <div className="reveal-scale mt-10 flex justify-center">
          <RoseOrnament className="w-8 h-8 animate-soft-pulse" />
        </div>
      </div>
    </section>
  );
}
