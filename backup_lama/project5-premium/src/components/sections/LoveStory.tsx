import { weddingData } from '@/data/wedding';
import { OrnamentDivider, RoseOrnament, ButterflyOrnament } from '@/components/Ornaments';
import { Particles, LightOrbs } from '@/components/Particles';
import { Coffee, Camera, Gem } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-5 h-5" />,
  camera: <Camera className="w-5 h-5" />,
  ring: <Gem className="w-5 h-5" />,
};

export function LoveStory() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/50 to-cream py-20 soft-vignette">
      <LightOrbs count={8} />
      <Particles count={12} type="petal" />

      <ButterflyOrnament className="absolute top-24 right-20 w-8 h-6 opacity-40 animate-float" />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-shimmer-rose text-glow-soft">
            Love Story
          </h2>
          <p className="reveal text-ink/55 font-display text-lg italic mt-4">
            Perjalanan cinta kami
          </p>
        </div>

        <div className="timeline-line relative pl-16 space-y-12">
          {weddingData.loveStory.map((item, i) => (
            <div key={i} className="reveal relative">
              {/* Node */}
              <div className="absolute -left-[2.65rem] top-1 w-12 h-12 rounded-full bg-cream border-2 border-gold-medium/50 flex items-center justify-center text-rose-500 shadow-lg soft-aura">
                {iconMap[item.icon]}
              </div>

              {/* Card */}
              <div className="glass-panel rounded-2xl p-6 transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-script text-3xl text-shimmer-rose">{item.title}</h3>
                  <span className="text-rose-400/60 text-xs tracking-wider uppercase">{item.date}</span>
                </div>

                <div className="rounded-xl overflow-hidden mb-4 border border-gold-medium/20">
                  <img src={item.photo} alt={item.title} className="w-full h-40 object-cover" />
                </div>

                <p className="text-ink/70 font-display text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-scale mt-12 flex justify-center">
          <RoseOrnament className="w-10 h-10 animate-soft-pulse" />
        </div>
      </div>
    </section>
  );
}
