import { Clock, MapPin, CalendarDays } from 'lucide-react';
import { EVENTS } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon } from '../../components/Ornament';
import TiltCard from '../../components/TiltCard';

type EventInfoProps = {
  root: React.RefObject<HTMLElement | null>;
};

const COLOR_MAP: Record<string, string> = {
  teal: 'cartoon-card-teal',
  coral: 'cartoon-card-coral',
  sunny: 'cartoon-card-sunny',
};

export default function EventInfo({ root }: EventInfoProps) {
  const headerRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-cream to-mint/20 overflow-hidden">
      <StarIcon className="absolute top-10 left-10 w-10 h-10 text-sunny animate-wiggle" />
      <StarIcon className="absolute bottom-10 right-10 w-8 h-8 text-coral animate-wiggle" style={{ animationDelay: '0.5s' }} />

      <div ref={headerRef} className="reveal text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 bg-ink rounded-full px-4 py-1.5 mb-4">
          <CalendarDays className="w-4 h-4 text-sunny" />
          <p className="font-rounded text-xs tracking-wider uppercase text-white">Save The Date</p>
        </div>
        <h2 className="font-script text-5xl text-coral mb-3">Rangkaian Acara</h2>
        <Divider />
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-4xl mx-auto relative z-10">
        {EVENTS.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} root={root} />
        ))}
      </div>
    </section>
  );
}

function EventCard({
  event,
  index,
  root,
}: {
  event: (typeof EVENTS)[number];
  index: number;
  root: React.RefObject<HTMLElement | null>;
}) {
  const ref = useScrollReveal<HTMLDivElement>(root);
  const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
  const cardClass = COLOR_MAP[event.color] || 'cartoon-card';

  return (
    <div ref={ref} className={`${revealClass} flex-1 max-w-md`}>
      <TiltCard max={8} className="h-full">
        <div className={`${cardClass} p-7 text-center h-full flex flex-col`}>
          <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-white border-3 border-ink animate-bounce-soft">
            <CalendarDays className="w-7 h-7 text-ink" />
          </div>

          <h3 className="font-display font-bold text-white text-2xl mb-4">{event.title}</h3>

          <div className="space-y-3 font-rounded text-sm text-white flex-1">
            <div className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-3 py-1.5">
              <CalendarDays className="w-4 h-4 shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-3 py-1.5">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="pt-2">
              <p className="font-display font-bold text-white text-lg">{event.venue}</p>
              <div className="flex items-start justify-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-xs text-white/80">{event.address}</span>
              </div>
            </div>
          </div>

          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cartoon-btn bg-white text-ink font-display font-bold text-xs tracking-wider uppercase mt-5 px-5 py-2.5 inline-flex items-center justify-center gap-2 hover:bg-sunny"
          >
            <MapPin className="w-4 h-4" />
            Lihat Lokasi
          </a>
        </div>
      </TiltCard>
    </div>
  );
}
