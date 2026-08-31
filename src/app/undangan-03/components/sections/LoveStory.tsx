import { useState, useEffect } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { Coffee, Camera, Gem, ArrowRight } from 'lucide-react';

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
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-10">
      {/* Rotating blurred parallax backgrounds */}
      {bgImages.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-fixed bg-center bg-cover transition-opacity duration-[2000ms] ${
            i === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${src}')`, filter: 'blur(3px)' }}
        />
      ))}
      <div className="absolute inset-0 bg-royal-950/80 pointer-events-none" />

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

      <div className="relative z-10 w-full">
        <div className="text-center mb-16 px-6">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-4xl sm:text-5xl text-gold-gradient">
            Love Story
          </h2>
          <p className="reveal text-ivory/60 font-serif text-base italic mt-2">
            Perjalanan cinta kami
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-8 w-max relative">
            {/* The Horizontal Line */}
            <div className="absolute top-[3.75rem] left-16 right-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent pointer-events-none z-0" />

            {weddingData.loveStory.map((item, i) => (
              <div key={i} className="reveal flex flex-col items-center w-[85vw] max-w-[20rem] shrink-0 snap-center relative z-10" style={{ transitionDelay: `${i * 150}ms` }}>
                {/* Date */}
                <span className="text-gold-200/60 text-sm tracking-wider uppercase mb-4 h-5 flex items-center font-serif">
                  {item.date}
                </span>

                {/* Node */}
                <div className="w-12 h-12 rounded-full bg-royal-700 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-[0_0_15px_rgba(201,162,39,0.3)] mb-8 shrink-0 relative">
                  {/* Outer pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-gold-400/50 animate-ping opacity-20" />
                  {iconMap[item.icon]}
                </div>

                {/* Card */}
                <div className="bg-royal-800/80 backdrop-blur-sm rounded-3xl p-6 border border-gold-400/20 transition-transform duration-500 hover:scale-[1.02] w-full flex-1 flex flex-col shadow-xl">
                  <h3 className="font-script text-3xl text-gold-gradient mb-4 text-center">{item.title}</h3>
                  <div className="rounded-2xl overflow-hidden mb-5 border border-gold-400/20 shrink-0">
                    <img src={item.photo} alt={item.title} className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <p className="text-ivory/80 font-serif text-sm leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Indicator */}
        <div className="flex justify-center mt-4 mb-4 reveal">
          <div className="flex items-center gap-2 text-gold-400/80 bg-royal-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-400/20 animate-pulse">
            <span className="text-xs tracking-[0.2em] uppercase font-sans">Geser</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
