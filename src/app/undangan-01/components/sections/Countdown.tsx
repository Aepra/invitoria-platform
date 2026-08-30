import { Coffee, Heart, Gem, Church, Star } from 'lucide-react';
import { WEDDING_DATE, LOVE_STORY } from '../../lib/weddingData';
import { useCountdown, useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon } from '../../components/Ornament';
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
  coral: 'bg-coral',
  teal: 'bg-teal',
  sunny: 'bg-sunny',
  grape: 'bg-grape',
};

const CARD_COLORS: Record<string, string> = {
  coral: 'cartoon-card-coral',
  teal: 'cartoon-card-teal',
  sunny: 'cartoon-card-sunny',
  grape: 'bg-grape border-3 border-ink rounded-2xl shadow-md',
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
  const dotColor = STORY_COLORS[story.color] ?? 'bg-coral';
  const cardClass = CARD_COLORS[story.color] ?? 'cartoon-card-coral';

  return (
    <div ref={ref} className="reveal-left relative pl-16 mb-8">
      <div className={`absolute left-2.5 top-2 w-8 h-8 rounded-full ${dotColor} border-3 border-white flex items-center justify-center z-10`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className={`${cardClass} p-5`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-display font-bold text-white text-lg">{story.year}</span>
          <span className="h-1 w-8 rounded-full bg-white/40" />
          <span className="font-display font-bold text-white text-lg">{story.title}</span>
        </div>
        <p className="font-rounded text-sm text-white/90 leading-relaxed">{story.text}</p>
      </div>
    </div>
  );
}

export default function Countdown({ root }: CountdownProps) {
  const time = useCountdown(WEDDING_DATE);
  const ref = useScrollReveal<HTMLDivElement>(root);

  const units = [
    { label: 'Hari', value: time.days, color: 'bg-coral' },
    { label: 'Jam', value: time.hours, color: 'bg-teal' },
    { label: 'Menit', value: time.minutes, color: 'bg-sunny' },
    { label: 'Detik', value: time.seconds, color: 'bg-grape' },
  ];

  return (
    <section className="relative py-20 px-6 bg-ink text-white overflow-hidden">
      <ConfettiField count={20} />

      {/* Countdown */}
      <div ref={ref} className="reveal-scale relative z-10 text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-coral rounded-full px-4 py-1.5 mb-4">
          <StarIcon className="w-4 h-4 text-white" />
          <p className="font-rounded text-xs tracking-wider uppercase text-white">Menuju Hari Bahagia</p>
        </div>
        <h2 className="font-script text-5xl text-sunny mb-3">Hitung Mundur</h2>
        <p className="font-rounded text-sm text-white/70 mb-8">
          {WEDDING_DATE.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="flex justify-center gap-3 sm:gap-4">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className={`w-16 h-20 sm:w-20 sm:h-24 ${unit.color} border-3 border-white rounded-2xl flex items-center justify-center shadow-lg`}>
                <span suppressHydrationWarning className="font-display font-bold text-2xl sm:text-3xl tabular-nums text-white">
                  {unit.value}
                </span>
              </div>
              <span className="font-rounded text-xs tracking-wider uppercase mt-2 text-white/70">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Divider className="mb-16 [&_*]:text-sunny" />

      {/* Love Story Timeline */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="font-script text-4xl text-sunny text-center mb-10">Cerita Cinta Kami</h3>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-coral rounded-full" />
          {LOVE_STORY.map((story, i) => (
            <StoryItem key={i} story={story} index={i} root={root} />
          ))}
        </div>
      </div>
    </section>
  );
}
