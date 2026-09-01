import { OrnamentDivider, SpellCircle, StarOrnament } from '../../components/Ornaments';
import { Particles, Starfield } from '../../components/Particles';

export function Welcome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={40} />
      <Particles count={10} type="orb" />
      <div className="mist-layer" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <SpellCircle size={70} className="animate-float" />
        </div>

        <div className="reveal">
          <p className="text-teal-glow text-sm tracking-[0.3em] uppercase font-sans mb-6">
            Assalamu&apos;alaikum Wr. Wb.
          </p>

          <h2 className="font-magic text-4xl sm:text-5xl text-shimmer-mystic mb-8 text-glow-mystic">
            Welcome
          </h2>

          <p className="text-moonlight/80 font-script text-lg sm:text-xl leading-relaxed mb-6">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan upacara pernikahan putra-putri kami. Tanpa mengurangi
            rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir
            pada acara pernikahan kami.
          </p>

          <p className="text-moonlight/60 font-script text-base italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kedua mempelai.
          </p>
        </div>

        <div className="reveal-scale mt-10 flex justify-center">
          <StarOrnament className="w-8 h-8 animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
