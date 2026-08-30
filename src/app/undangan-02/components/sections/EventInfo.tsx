import { Clock, MapPin, CalendarDays } from 'lucide-react';
import { EVENTS } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, LeafCorner } from '../../components/Ornament';
import TiltCard from '../../components/TiltCard';

type EventInfoProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function EventInfo({ root }: EventInfoProps) {
  const headerRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-light to-secondary/30 overflow-hidden">
      <LeafCorner className="absolute top-8 left-8 w-20 h-20 text-primary/25" />

      <div ref={headerRef} className="reveal text-center mb-14">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">Save The Date</p>
        <h2 className="font-script text-5xl text-dark mb-4">Rangkaian Acara</h2>
        <Divider />
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-4xl mx-auto">
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

  return (
    <div ref={ref} className={`${revealClass} flex-1 max-w-md`}>
      <TiltCard max={10} className="h-full">
        <div className="glass-panel rounded-3xl p-8 text-center h-full flex flex-col">
          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-primary/20">
            <CalendarDays className="w-8 h-8 text-primary" />
          </div>

          <h3 className="font-script text-4xl text-dark mb-4">{event.title}</h3>

          <div className="space-y-3 font-sans text-sm text-dark/80 flex-1">
            <div className="flex items-center justify-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="pt-2">
              <p className="font-serif text-lg italic text-dark">{event.venue}</p>
              <div className="flex items-start justify-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs">{event.address}</span>
              </div>
            </div>
          </div>

          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-dark text-secondary text-xs tracking-wider uppercase hover:bg-primary hover:text-dark transition-all duration-300"
          >
            <MapPin className="w-4 h-4" />
            Lihat Lokasi
          </a>
        </div>
      </TiltCard>
    </div>
  );
}
