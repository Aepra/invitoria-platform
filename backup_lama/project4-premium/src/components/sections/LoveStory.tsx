import { weddingData } from '@/data/wedding';
import { OrnamentDivider, StarOrnament } from '@/components/Ornaments';
import { Particles, Starfield } from '@/components/Particles';
import { Coffee, Camera, Gem } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-5 h-5" />,
  camera: <Camera className="w-5 h-5" />,
  ring: <Gem className="w-5 h-5" />,
};

export function LoveStory() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={40} />
      <Particles count={12} type="sparkle" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">
            Love Story
          </h2>
          <p className="reveal text-moonlight/60 font-script text-lg italic mt-4">
            Perjalanan cinta kami
          </p>
        </div>

        <div className="timeline-line relative pl-16 space-y-12">
          {weddingData.loveStory.map((item, i) => (
            <div key={i} className="reveal relative">
              {/* Node */}
              <div className="absolute -left-[2.65rem] top-1 w-12 h-12 rounded-full bg-night border-2 border-mystic-400/50 flex items-center justify-center text-teal-glow shadow-lg magic-aura">
                {iconMap[item.icon]}
              </div>

              {/* Card */}
              <div className="glass-panel-dark rounded-2xl p-6 transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-magic text-2xl text-shimmer-mystic">{item.title}</h3>
                  <span className="text-mystic-200/60 text-xs tracking-wider uppercase">{item.date}</span>
                </div>

                <div className="rounded-xl overflow-hidden mb-4 border border-mystic-400/20">
                  <img src={item.photo} alt={item.title} className="w-full h-40 object-cover" />
                </div>

                <p className="text-moonlight/75 font-script text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-scale mt-12 flex justify-center">
          <StarOrnament className="w-10 h-10 animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
