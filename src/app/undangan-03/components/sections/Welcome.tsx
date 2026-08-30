import { OrnamentDivider, RoyalCrown } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';

export function Welcome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-20">
      <Particles count={10} />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <RoyalCrown className="w-16 h-10 animate-float" />
        </div>

        <div className="reveal">
          <p className="text-gold-300 text-sm tracking-[0.3em] uppercase font-sans mb-6">
            Assalamu&apos;alaikum Wr. Wb.
          </p>

          <h2 className="font-script text-5xl sm:text-6xl text-gold-gradient mb-8">
            Welcome
          </h2>

          <p className="text-ivory/80 font-serif text-lg sm:text-xl leading-relaxed mb-6">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan upacara pernikahan putra-putri kami. Tanpa mengurangi
            rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir
            pada acara pernikahan kami.
          </p>

          <p className="text-ivory/60 font-serif text-base italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kedua mempelai.
          </p>
        </div>

        <div className="reveal-scale mt-10">
          <OrnamentDivider />
        </div>
      </div>
    </section>
  );
}
