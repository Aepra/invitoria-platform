import { weddingData } from '@/data/wedding';
import { OrnamentDivider, RoseOrnament, FloralFrame } from '@/components/Ornaments';
import { Particles, LightOrbs } from '@/components/Particles';
import { useCountdown } from '@/hooks/useCountdown';
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
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl glass-panel flex items-center justify-center soft-aura">
            <span className="font-display text-2xl sm:text-3xl text-shimmer-rose font-semibold tabular-nums">
              {u.value}
            </span>
            <div className="absolute inset-0 rounded-xl border border-gold-medium/20" />
          </div>
          <span className="text-rose-400/60 text-xs uppercase tracking-wider mt-2">{u.label}</span>
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
    <div className={`${revealClass} glass-panel rounded-2xl p-8 transition-transform duration-500 hover:scale-[1.03] group soft-aura`}>
      <div className="flex justify-center mb-6">
        <FloralFrame size={70} className="animate-float" />
      </div>

      <h3 className="font-script text-4xl text-shimmer-rose text-center mb-6">{event.title}</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-4 h-4 text-rose-500 shrink-0" />
          <p className="text-ink/80 font-display text-sm">
            {event.day}, {event.date}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-rose-500 shrink-0" />
          <p className="text-ink/80 font-display text-sm">{event.time}</p>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-ink/80 font-display text-sm">{event.venue}</p>
            <p className="text-ink/50 font-display text-xs">{event.address}</p>
          </div>
        </div>
      </div>

      <a
        href={event.mapsUrl}
        className="btn-elegant mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gold-medium/40 text-rose-600 text-xs tracking-widest uppercase hover:bg-petal/30 transition-all"
      >
        <Navigation className="w-3.5 h-3.5" />
        Lihat Lokasi
      </a>
    </div>
  );
}

export function EventDetails() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/50 to-cream py-20 soft-vignette">
      <LightOrbs count={10} />
      <Particles count={15} type="petal" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-shimmer-rose text-glow-soft">
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
