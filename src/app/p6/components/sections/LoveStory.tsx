'use client';
import { weddingData } from '../../data/wedding';
import { BloomDivider, Petal, Sparkle } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Coffee, Camera, Gem } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-4 h-4" />,
  camera: <Camera className="w-4 h-4" />,
  ring: <Gem className="w-4 h-4" />,
};

export function LoveStory() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.heroPhoto}
        speed={0.22}
        overlay="to bottom, rgba(250,246,236,.92), rgba(250,246,236,.62) 50%, rgba(250,246,236,.94)"
        className="absolute inset-0"
      />
      <Sparkle className="absolute top-10 left-8 w-5 h-5" color="#D89579" />
      <Sparkle className="absolute top-24 right-10 w-4 h-4" color="#93BD9F" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer">Cerita Cinta</h2>
          <p className="font-body text-ink-500 italic mt-2">Perjalanan kami</p>
        </div>

        <div className="relative ml-5 space-y-10">
          {/* Animated timeline line drawn on scroll */}
          <span className="timeline-line absolute left-0 top-2 bottom-2 w-0.5 bg-sage-400/70" />
          {weddingData.loveStory.map((item, i) => (
            <div key={i} className={`relative pl-9 ${i % 2 ? 'rise' : 'swing'}`}>
              {/* Animated timeline node */}
              <span className="absolute -left-[15px] top-1 w-8 h-8 rounded-full bg-sage-600 border-[3px] border-white shadow-lg flex items-center justify-center text-cream-50 beat">
                {iconMap[item.icon]}
              </span>

              <ParallaxItem speed={i % 2 ? 0.07 : -0.06} className="pop rounded-2xl bg-white/80 backdrop-blur-md border border-sage-200/70 shadow-[0_18px_45px_-22px_rgba(49,87,65,0.4)] p-5 flex gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-sage-200">
                  <img src={item.photo} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <Petal className="absolute top-1 right-1 w-4 h-4 opacity-80 float-y" />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-clay-500 text-xs tracking-[0.2em] uppercase mb-1">{item.date}</p>
                  <h3 className="font-script text-3xl text-ink-700 mb-1">{item.title}</h3>
                  <p className="font-body text-ink-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ParallaxItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}