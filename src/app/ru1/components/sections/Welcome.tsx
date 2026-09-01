import { OrnamentDivider, FloralFrame, RoseOrnament, ButterflyOrnament } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';

export function Welcome() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[url('/images/parallax/bg-outdoor.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <LightOrbs count={10} />
      <Particles count={10} type="petal" />

      {/* Floating butterflies */}
      <ButterflyOrnament className="absolute top-20 right-16 w-8 h-6 opacity-40 animate-float" />
      <ButterflyOrnament className="absolute bottom-32 left-16 w-7 h-5 opacity-30 animate-float-slow" />

      <div className="relative z-10 max-w-2xl px-6 py-12 sm:px-10 mx-4 bg-white/85 backdrop-blur-md border border-white/50 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] text-center">
        <div className="reveal-scale mb-8 flex justify-center">
          <div className="relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 group">
            {/* Circular Photo */}
            <div className="absolute inset-1 sm:inset-2 rounded-full overflow-hidden shadow-lg border-2 border-white/60">
              <img src="/images/parallax/livestream.png" alt="Welcome" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            
            {/* Overlay FloralFrame */}
            <div className="absolute inset-0 pointer-events-none opacity-90 z-10">
              <FloralFrame className="w-full h-full animate-spin-slower" />
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="text-rose-600 text-sm tracking-[0.3em] uppercase font-sans mb-6 font-semibold">
            Assalamu&apos;alaikum Wr. Wb.
          </p>

          <h2 className="font-script text-5xl sm:text-6xl text-slate-800 mb-8 drop-shadow-sm">
            Welcome
          </h2>

          <p className="text-slate-700 font-display text-lg sm:text-xl leading-relaxed mb-6 font-medium">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan upacara pernikahan putra-putri kami. Tanpa mengurangi
            rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir
            pada acara pernikahan kami.
          </p>

          <p className="text-slate-600 font-display text-base italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kedua mempelai.
          </p>
        </div>

        <div className="reveal-scale mt-10 flex justify-center">
          <RoseOrnament className="w-8 h-8 opacity-70 animate-soft-pulse" />
        </div>
      </div>
    </section>
  );
}
