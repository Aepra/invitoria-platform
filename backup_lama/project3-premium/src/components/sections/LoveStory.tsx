import { weddingData } from '@/data/wedding';
import { OrnamentDivider } from '@/components/Ornaments';
import { Particles } from '@/components/Particles';
import { Coffee, Camera, Gem } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-5 h-5" />,
  camera: <Camera className="w-5 h-5" />,
  ring: <Gem className="w-5 h-5" />,
};

export function LoveStory() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-20">
      <Particles count={12} />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-gold-gradient">
            Love Story
          </h2>
          <p className="reveal text-ivory/60 font-serif text-lg italic mt-4">
            Perjalanan cinta kami
          </p>
        </div>

        <div className="timeline-line relative pl-16 space-y-12">
          {weddingData.loveStory.map((item, i) => (
            <div key={i} className="reveal relative">
              {/* Node */}
              <div className="absolute -left-[2.65rem] top-1 w-12 h-12 rounded-full bg-royal-700 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-lg animate-glow">
                {iconMap[item.icon]}
              </div>

              {/* Card */}
              <div className="glass-panel-dark rounded-2xl p-6 transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-script text-3xl text-gold-gradient">{item.title}</h3>
                  <span className="text-gold-200/60 text-xs tracking-wider uppercase">{item.date}</span>
                </div>

                <div className="rounded-xl overflow-hidden mb-4 border border-gold-400/20">
                  <img src={item.photo} alt={item.title} className="w-full h-40 object-cover" />
                </div>

                <p className="text-ivory/75 font-serif text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
