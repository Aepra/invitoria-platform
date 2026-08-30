import { OrnamentDivider, FloralFrame } from '@/components/Ornaments';
import { Particles, LightOrbs } from '@/components/Particles';
import { PlayCircle } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/50 to-cream py-20 soft-vignette">
      <LightOrbs count={8} />
      <Particles count={10} type="light" />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-shimmer-rose text-glow-soft">
            Live Streaming
          </h2>
          <p className="reveal text-ink/55 font-display text-lg italic mt-4">
            Nikmati momen kami dari mana saja
          </p>
        </div>

        <div className="reveal-blur glass-panel rounded-2xl p-8 soft-aura">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gold-medium/20 bg-cream flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-petal/30 to-blush/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FloralFrame size={200} className="opacity-25 animate-spin-slower" />
            </div>
            <PlayCircle className="w-20 h-20 text-rose-400/70 group-hover:text-rose-500 group-hover:scale-110 transition-all duration-500 relative z-10" />
            <p className="absolute bottom-6 text-ink/60 font-display text-sm tracking-wider">
              Streaming akan tersedia pada hari H
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="btn-elegant flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-medium/40 text-rose-600 text-xs tracking-widest uppercase hover:bg-petal/30 transition-all"
            >
              Tonton di YouTube
            </a>
            <a
              href="#"
              className="btn-elegant flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-medium/40 text-rose-600 text-xs tracking-widest uppercase hover:bg-petal/30 transition-all"
            >
              Tonton di Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
