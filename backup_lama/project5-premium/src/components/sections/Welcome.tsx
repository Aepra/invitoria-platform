import { OrnamentDivider, FloralFrame, RoseOrnament, ButterflyOrnament } from '@/components/Ornaments';
import { Particles, LightOrbs } from '@/components/Particles';

export function Welcome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-petal/40 to-cream py-20 soft-vignette">
      <LightOrbs count={10} />
      <Particles count={10} type="petal" />

      {/* Floating butterflies */}
      <ButterflyOrnament className="absolute top-20 right-16 w-8 h-6 opacity-40 animate-float" />
      <ButterflyOrnament className="absolute bottom-32 left-16 w-7 h-5 opacity-30 animate-float-slow" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <FloralFrame size={80} className="animate-float" />
        </div>

        <div className="reveal">
          <p className="text-rose-500 text-sm tracking-[0.3em] uppercase font-sans mb-6">
            Assalamu&apos;alaikum Wr. Wb.
          </p>

          <h2 className="font-script text-5xl sm:text-6xl text-shimmer-rose mb-8 text-glow-soft">
            Welcome
          </h2>

          <p className="text-ink/75 font-display text-lg sm:text-xl leading-relaxed mb-6">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan upacara pernikahan putra-putri kami. Tanpa mengurangi
            rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir
            pada acara pernikahan kami.
          </p>

          <p className="text-ink/55 font-display text-base italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kedua mempelai.
          </p>
        </div>

        <div className="reveal-scale mt-10 flex justify-center">
          <RoseOrnament className="w-8 h-8 animate-soft-pulse" />
        </div>
      </div>
    </section>
  );
}
