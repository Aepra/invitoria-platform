import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { PlayCircle } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-20">
      <Particles count={10} />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-gold-gradient">
            Live Streaming
          </h2>
          <p className="reveal text-ivory/60 font-serif text-lg italic mt-4">
            Nikmati momen kami dari mana saja
          </p>
        </div>

        <div className="reveal-blur glass-panel-dark rounded-2xl p-8">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gold-400/20 bg-royal-900 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-royal-700/30 to-royal-900/60" />
            <PlayCircle className="w-20 h-20 text-gold-400/80 group-hover:text-gold-300 group-hover:scale-110 transition-all duration-500 relative z-10" />
            <p className="absolute bottom-6 text-ivory/70 font-serif text-sm tracking-wider">
              Streaming akan tersedia pada hari H
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-400/40 text-gold-200 text-xs tracking-widest uppercase hover:bg-gold-400/15 transition-all"
            >
              Tonton di YouTube
            </a>
            <a
              href="#"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-400/40 text-gold-200 text-xs tracking-widest uppercase hover:bg-gold-400/15 transition-all"
            >
              Tonton di Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
