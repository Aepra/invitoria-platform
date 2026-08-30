import { OrnamentDivider, SpellCircle } from '../../components/Ornaments';
import { Particles, Starfield } from '../../components/Particles';

export function QuranVerse() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={40} />
      <Particles count={12} type="sparkle" />
      <div className="mist-layer" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-10 flex justify-center">
          <SpellCircle size={80} className="animate-float" />
        </div>

        <div className="reveal-blur">
          <p className="font-script text-mystic-300 text-4xl mb-8 text-glow-mystic">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <p className="font-script text-moonlight/90 text-2xl sm:text-3xl leading-relaxed italic mb-8">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
            dan sayang."
          </p>

          <p className="text-teal-glow font-serif text-lg tracking-wider">
            — Q.S. Ar-Rum: 21
          </p>
        </div>

        <div className="reveal-scale mt-10">
          <OrnamentDivider />
        </div>
      </div>
    </section>
  );
}
