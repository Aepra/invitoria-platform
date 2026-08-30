import { OrnamentDivider, SpellCircle } from '@/components/Ornaments';
import { Particles, Starfield } from '@/components/Particles';
import { PlayCircle } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={30} />
      <Particles count={10} type="orb" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">
            Live Streaming
          </h2>
          <p className="reveal text-moonlight/60 font-script text-lg italic mt-4">
            Nikmati momen kami dari mana saja
          </p>
        </div>

        <div className="reveal-blur glass-panel-dark rounded-2xl p-8 magic-aura">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-mystic-400/20 bg-midnight flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-mystic-700/20 to-midnight/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <SpellCircle size={200} className="opacity-30 animate-spin-slower" />
            </div>
            <PlayCircle className="w-20 h-20 text-mystic-400/80 group-hover:text-teal-glow group-hover:scale-110 transition-all duration-500 relative z-10 animate-glow-strong" />
            <p className="absolute bottom-6 text-moonlight/70 font-script text-sm tracking-wider">
              Streaming akan tersedia pada hari H
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="btn-mystic flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-mystic-400/40 text-mystic-200 text-xs tracking-widest uppercase hover:bg-mystic-400/15 transition-all"
            >
              Tonton di YouTube
            </a>
            <a
              href="#"
              className="btn-mystic flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-mystic-400/40 text-mystic-200 text-xs tracking-widest uppercase hover:bg-mystic-400/15 transition-all"
            >
              Tonton di Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
