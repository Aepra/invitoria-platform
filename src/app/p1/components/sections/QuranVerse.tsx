import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';

export function QuranVerse() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-10">
      <Particles count={12} />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-6">
          <OrnamentDivider />
        </div>

        <div className="reveal-blur">
          <p className="font-script text-gold-300 text-3xl mb-4">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <p className="font-serif text-ivory/90 text-lg sm:text-xl leading-relaxed italic mb-4">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
            dan sayang."
          </p>

          <p className="text-gold-300 font-serif text-sm sm:text-base tracking-wider">
            — Q.S. Ar-Rum: 21
          </p>
        </div>

        <div className="reveal-scale mt-6">
          <OrnamentDivider />
        </div>
      </div>
    </section>
  );
}
