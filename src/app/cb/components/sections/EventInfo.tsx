import { Clock, MapPin, CalendarDays, Zap } from 'lucide-react';
import { EVENTS } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import TiltCard from '../../components/TiltCard';

type EventInfoProps = {
  root: React.RefObject<HTMLElement | null>;
};

const COLOR_MAP: Record<string, string> = {
  teal: 'comic-panel-cyan',
  coral: 'comic-panel-red',
  sunny: 'comic-panel-yellow',
};

export default function EventInfo({ root }: EventInfoProps) {
  const headerRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-24 px-6 bg-halftone-white overflow-hidden">
      
      {/* Background action shapes */}
      <div className="absolute top-20 right-[-20px] w-48 h-48 bg-comic-cyan pow-shape opacity-60 animate-comic-float" />
      <div className="absolute bottom-20 left-[-20px] w-56 h-56 bg-comic-red pow-shape opacity-40 animate-action-shake" style={{ animationDelay: '2s' }} />

      <div ref={headerRef} className="reveal text-center mb-16 relative z-10">
        
        <div className="inline-block bg-comic-ink px-6 py-2 border-2 border-comic-white transform rotate-2 mb-4">
          <p className="font-comic-body font-bold text-sm text-comic-yellow uppercase tracking-widest">
            Don't Miss It!
          </p>
        </div>
        
        <h2 className="font-comic-head text-5xl sm:text-7xl text-comic-red mb-2 uppercase drop-shadow-[2px_2px_0_rgba(17,24,39,1)]">
          The Main Event
        </h2>
        <div className="w-32 h-2 bg-comic-ink mx-auto mb-8 transform -rotate-1"></div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 max-w-5xl mx-auto relative z-10">
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
  const cardClass = COLOR_MAP[event.color] || 'comic-panel';
  const textColor = event.color === 'sunny' ? 'text-comic-ink' : 'text-comic-white';
  const iconColor = event.color === 'sunny' ? 'text-comic-red' : 'text-comic-yellow';

  return (
    <div ref={ref} className={`${revealClass} flex-1 max-w-md w-full`}>
      <TiltCard max={8} className="h-full">
        <div className={`${cardClass} p-8 text-center h-full flex flex-col relative`}>
          
          {/* Action Burst */}
          <div className="absolute -top-6 -right-4 bg-comic-yellow border-4 border-comic-ink w-16 h-16 rounded-full flex items-center justify-center transform rotate-12 animate-action-shake">
            <Zap className="w-8 h-8 text-comic-ink fill-comic-ink" />
          </div>

          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-comic-white border-4 border-comic-ink">
            <CalendarDays className="w-8 h-8 text-comic-ink" />
          </div>

          <h3 className={`font-comic-head text-4xl tracking-wider ${textColor} mb-6 drop-shadow-md uppercase`}>
            {event.title}
          </h3>

          <div className={`space-y-4 font-comic-body font-bold text-lg ${textColor} flex-1`}>
            <div className="flex items-center justify-center gap-3 bg-comic-ink/20 px-4 py-2 border-2 border-comic-ink transform -rotate-1">
              <CalendarDays className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <span>{event.date}</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-comic-ink/20 px-4 py-2 border-2 border-comic-ink transform rotate-1">
              <Clock className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <span>{event.time}</span>
            </div>
            
            <div className="pt-4 pb-4">
              <p className={`font-comic-head text-2xl ${textColor} mb-2 uppercase tracking-wide`}>{event.venue}</p>
              <div className="flex items-start justify-center gap-2">
                <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
                <span className="text-sm">{event.address}</span>
              </div>
            </div>
          </div>

          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn bg-comic-white text-comic-ink mt-6 py-3 px-6 text-xl flex items-center justify-center gap-2"
          >
            <MapPin className="w-6 h-6" />
            FIND LOCATION!
          </a>
        </div>
      </TiltCard>
    </div>
  );
}
