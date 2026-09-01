import { Coffee, Heart, Gem, Church, Zap, Star } from 'lucide-react';
import { WEDDING_DATE, LOVE_STORY } from '../../lib/weddingData';
import { useCountdown, useScrollReveal } from '../../hooks/useScrollReveal';
import ConfettiField from '../../components/ConfettiField';

type CountdownProps = {
  root: React.RefObject<HTMLElement | null>;
};

const STORY_ICONS: Record<string, typeof Star> = {
  coffee: Coffee,
  heart: Heart,
  ring: Gem,
  wedding: Church,
};

const STORY_COLORS: Record<string, string> = {
  coral: 'bg-comic-red',
  teal: 'bg-comic-cyan',
  sunny: 'bg-comic-yellow',
  grape: 'bg-comic-ink text-comic-white',
};

const CARD_COLORS: Record<string, string> = {
  coral: 'comic-panel-red',
  teal: 'comic-panel-cyan',
  sunny: 'comic-panel-yellow',
  grape: 'comic-panel',
};

function StoryItem({
  story,
  index,
  root,
}: {
  story: (typeof LOVE_STORY)[number];
  index: number;
  root: React.RefObject<HTMLElement | null>;
}) {
  const ref = useScrollReveal<HTMLDivElement>(root);
  const Icon = STORY_ICONS[story.emoji] ?? Star;
  const dotColor = STORY_COLORS[story.color] ?? 'bg-comic-red';
  const cardClass = CARD_COLORS[story.color] ?? 'comic-panel-red';
  const textColor = story.color === 'sunny' ? 'text-comic-ink' : 'text-comic-white';
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`reveal-${isLeft ? 'left' : 'right'} relative mb-12 flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-0`}>
      
      {/* Date Badge */}
      <div className={`md:w-1/2 flex ${isLeft ? 'justify-end md:pr-12' : 'justify-start md:pl-12'} w-full relative z-10`}>
        <div className="bg-comic-ink text-comic-white px-6 py-2 border-4 border-comic-yellow transform rotate-3 shadow-[6px_6px_0_0_#EF4444]">
          <span className="font-comic-head text-3xl">{story.year}</span>
        </div>
      </div>

      {/* Center Icon */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
        <div className={`w-14 h-14 rounded-full border-4 border-comic-ink ${dotColor} flex items-center justify-center shadow-[4px_4px_0_0_#111827] animate-action-shake`} style={{ animationDelay: `${index * 0.5}s` }}>
          <Icon className="w-6 h-6 text-comic-white" />
        </div>
      </div>

      {/* Content Panel */}
      <div className={`md:w-1/2 flex ${isLeft ? 'justify-start md:pl-12' : 'justify-end md:pr-12'} w-full`}>
        <div className={`${cardClass} p-6 w-full ${isLeft ? 'transform -rotate-1' : 'transform rotate-1'}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`font-comic-head text-3xl uppercase ${textColor} drop-shadow-sm`}>{story.title}</span>
          </div>
          <p className={`font-comic-body font-bold text-lg ${textColor} leading-tight`}>{story.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Countdown({ root }: CountdownProps) {
  const time = useCountdown(WEDDING_DATE);
  const ref = useScrollReveal<HTMLDivElement>(root);

  const units = [
    { label: 'Days', value: time.days, color: 'bg-comic-red' },
    { label: 'Hours', value: time.hours, color: 'bg-comic-yellow' },
    { label: 'Mins', value: time.minutes, color: 'bg-comic-cyan' },
    { label: 'Secs', value: time.seconds, color: 'bg-comic-white' },
  ];

  return (
    <section className="relative py-24 px-6 bg-comic-ink text-comic-white overflow-hidden">
      <ConfettiField count={15} />

      {/* Background action shapes */}
      <div className="absolute top-1/2 left-[-50px] w-80 h-80 bg-halftone-cyan opacity-20 rounded-full" />
      <div className="absolute bottom-10 right-[-50px] w-96 h-96 bg-halftone-yellow opacity-20 rounded-full" />

      {/* Countdown */}
      <div ref={ref} className="reveal-scale relative z-10 text-center max-w-4xl mx-auto mb-24">
        
        <div className="inline-block bg-comic-red px-6 py-2 border-2 border-comic-white transform -rotate-3 mb-6 shadow-[4px_4px_0_0_#FACC15]">
          <p className="font-comic-body font-bold text-lg text-comic-white uppercase tracking-widest">
            Countdown Begins!
          </p>
        </div>
        
        <h2 className="font-comic-head text-5xl sm:text-7xl text-comic-yellow mb-4 uppercase drop-shadow-[4px_4px_0_rgba(239,68,68,1)]">
          TICK TOCK...
        </h2>
        
        <p className="font-comic-marker text-2xl text-comic-cyan mb-10 transform rotate-1">
          {WEDDING_DATE.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className={`w-20 h-24 sm:w-28 sm:h-32 ${unit.color} border-4 border-comic-white flex items-center justify-center shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] transform hover:scale-110 transition-transform`}>
                <span suppressHydrationWarning className={`font-comic-head text-5xl sm:text-7xl ${unit.color === 'bg-comic-white' || unit.color === 'bg-comic-yellow' ? 'text-comic-ink' : 'text-comic-white'}`}>
                  {unit.value}
                </span>
              </div>
              <div className="bg-comic-white text-comic-ink px-4 py-1 border-2 border-comic-ink mt-3 transform rotate-2">
                <span className="font-comic-head text-lg tracking-widest uppercase">
                  {unit.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto h-2 bg-comic-white mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-comic-ink px-4">
          <Zap className="w-10 h-10 text-comic-yellow fill-comic-yellow animate-action-shake" />
        </div>
      </div>

      {/* Love Story Comic Strip */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-comic-head text-5xl sm:text-6xl text-comic-cyan uppercase drop-shadow-[3px_3px_0_rgba(239,68,68,1)] inline-block transform -rotate-2">
            Our Origin Story
          </h3>
        </div>

        <div className="relative">
          {/* Center Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-comic-white -translate-x-1/2 border-x-2 border-comic-ink border-dashed" />
          
          {LOVE_STORY.map((story, i) => (
            <StoryItem key={i} story={story} index={i} root={root} />
          ))}
        </div>
      </div>
    </section>
  );
}
