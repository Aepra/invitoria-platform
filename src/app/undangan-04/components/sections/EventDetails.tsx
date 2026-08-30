import { weddingData } from '../../data/wedding';
import { OrnamentDivider, StarOrnament, SpellCircle } from '../../components/Ornaments';
import { Particles, Starfield } from '../../components/Particles';
import { useCountdown } from '../../hooks/useCountdown';
import { Clock, MapPin, CalendarDays, Navigation } from 'lucide-react';

function CountdownBox() {
  const time = useCountdown(weddingData.countdownDate);
  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ];

  return (
    <div className="reveal-scale flex justify-center gap-3 sm:gap-5 mb-16">
      {units.map((u, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl glass-panel-dark flex items-center justify-center magic-aura">
            <span suppressHydrationWarning className="font-serif text-2xl sm:text-3xl text-shimmer-mystic font-semibold tabular-nums">
              {u.value}
            </span>
            <div className="absolute inset-0 rounded-xl border border-mystic-400/20" />
          </div>
          <span className="text-mystic-200/60 text-xs uppercase tracking-wider mt-2">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

function EventCard({
  event,
  revealClass,
}: {
  event: typeof weddingData.events.akad;
  revealClass: string;
}) {
  return (
    <div className={`${revealClass} glass-panel-dark rounded-2xl p-8 transition-transform duration-500 hover:scale-[1.03] group magic-aura`}>
      <div className="flex justify-center mb-6">
        <SpellCircle size={60} className="animate-float" />
      </div>

      <h3 className="font-magic text-3xl text-shimmer-mystic text-center mb-6">{event.title}</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-4 h-4 text-teal-glow shrink-0" />
          <p className="text-moonlight/85 font-serif text-sm">
            {event.day}, {event.date}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-teal-glow shrink-0" />
          <p className="text-moonlight/85 font-serif text-sm">{event.time}</p>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-teal-glow shrink-0 mt-0.5" />
          <div>
            <p className="text-moonlight/85 font-serif text-sm">{event.venue}</p>
            <p className="text-moonlight/50 font-serif text-xs">{event.address}</p>
          </div>
        </div>
      </div>

      <a
        href={event.mapsUrl}
        className="btn-mystic mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-mystic-400/40 text-mystic-200 text-xs tracking-widest uppercase hover:bg-mystic-400/15 transition-all"
      >
        <Navigation className="w-3.5 h-3.5" />
        Lihat Lokasi
      </a>
    </div>
  );
}

export function EventDetails() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={50} />
      <Particles count={15} type="orb" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">
            Save The Date
          </h2>
        </div>

        <CountdownBox />

        <div className="grid md:grid-cols-2 gap-6">
          <EventCard event={weddingData.events.akad} revealClass="reveal-left" />
          <EventCard event={weddingData.events.resepsi} revealClass="reveal-right" />
        </div>
      </div>
    </section>
  );
}
