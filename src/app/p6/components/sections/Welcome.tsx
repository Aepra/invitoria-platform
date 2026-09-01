'use client';
import { weddingData } from '../../data/wedding';
import { BloomDivider } from '../Ornaments';
import { ParallaxBg } from '../ParallaxBg';
import { Petals } from '../Petals';

export function Welcome() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.gallery[3] || weddingData.heroPhoto}
        speed={0.18}
        overlay="to bottom, rgba(250,246,236,.93), rgba(250,246,236,.7)"
        className="absolute inset-0"
      />
      <Petals count={8} />

      <div className="bloom relative z-10 max-w-2xl mx-auto rounded-[2.5rem] arch-shape bg-white/75 backdrop-blur-md border border-sage-200/70 shadow-[0_25px_60px_-25px_rgba(49,87,65,0.45)] p-9 sm:p-12 text-center">
        <div className="pop mb-6 flex justify-center"><BloomDivider /></div>
        <p className="font-display tracking-[0.3em] uppercase text-sage-600 text-xs mb-4">
          Assalamu&apos;alaikum Wr. Wb.
        </p>
        <h2 className="font-script text-6xl text-ink-800 text-shimmer mb-6">Selamat Datang</h2>
        <div className="rise space-y-4 flip" style={{ transitionDelay: '150ms' }}>
          <p className="font-body text-ink-600 leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
            upacara pernikahan putra-putri kami. Tanpa mengurangi rasa hormat, kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.
          </p>
          <p className="font-body text-ink-500 leading-relaxed italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu kepada kedua mempelai.
          </p>
        </div>
      </div>
    </section>
  );
}