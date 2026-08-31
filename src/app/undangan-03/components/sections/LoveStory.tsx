import { useState, useEffect } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { Coffee, Camera, Gem } from 'lucide-react';

const bgImages = [
  '/demo/royal_lovestory_bg.png',
  '/demo/royal_prewedding.png',
  '/demo/royal_event_bg.png',
];

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-5 h-5" />,
  camera: <Camera className="w-5 h-5" />,
  ring: <Gem className="w-5 h-5" />,
};

export function LoveStory() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Rotating blurred parallax backgrounds */}
      {bgImages.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-fixed bg-center bg-cover animate-float-bg transition-opacity duration-[2000ms] ${
            i === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${src}')`, filter: 'blur(4px)' }}
        />
      ))}
      <div className="absolute inset-0 bg-royal-950/85 pointer-events-none" />

      {/* Decorative corner overlays */}
      <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/15 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 w-16 h-[1px] bg-gradient-to-r from-gold-400/60 to-transparent" />
        <div className="absolute top-4 left-4 w-[1px] h-16 bg-gradient-to-b from-gold-400/60 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-bl from-gold-400/15 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 w-16 h-[1px] bg-gradient-to-l from-gold-400/60 to-transparent" />
        <div className="absolute top-4 right-4 w-[1px] h-16 bg-gradient-to-b from-gold-400/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/10 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 w-16 h-[1px] bg-gradient-to-r from-gold-400/40 to-transparent" />
        <div className="absolute bottom-4 left-4 w-[1px] h-16 bg-gradient-to-t from-gold-400/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-tl from-gold-400/10 via-transparent to-transparent" />
        <div className="absolute bottom-4 right-4 w-16 h-[1px] bg-gradient-to-l from-gold-400/40 to-transparent" />
        <div className="absolute bottom-4 right-4 w-[1px] h-16 bg-gradient-to-t from-gold-400/40 to-transparent" />
      </div>

      <Particles count={12} />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl text-gold-gradient">
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
              <div className="bg-royal-800 rounded-2xl p-6 border border-gold-400/20 transition-transform duration-500 hover:scale-[1.02]">
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
