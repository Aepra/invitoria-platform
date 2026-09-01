'use client';
import { weddingData } from '../../data/wedding';
import { BloomDivider } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Clock, MapPin, Navigation } from 'lucide-react';

const venuePhoto: Record<string, string> = {
  'Akad Nikah': weddingData.gallery[0],
  'Resepsi': weddingData.gallery[1],
};

type EventType = typeof weddingData.events.akad;

function EventCard({ event, delay, alternate }: { event: EventType; delay: string; alternate?: boolean }) {
  const photo = venuePhoto[event.title] || weddingData.gallery[0];
  return (
    <ParallaxItem speed={alternate ? -0.05 : 0.06} className={alternate ? 'flip' : 'zoom'} style={{ transitionDelay: delay }}>
      <div className="overflow-hidden rounded-[1.8rem] bg-white/80 backdrop-blur-md border border-sage-200/70 shadow-[0_20px_50px_-25px_rgba(49,87,65,0.45)]">
      <div className="relative h-32 overflow-hidden">
        <img
          src={photo}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
        <div className="absolute bottom-3 left-5">
          <p className="font-display tracking-[0.3em] uppercase text-cream-100 text-[10px]">{event.day}</p>
          <h3 className="font-script text-4xl text-cream-50">{event.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3 font-body text-ink-700 text-sm">
          <li className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 text-sage-500 shrink-0 beat" />
            <span>
              <span className="block text-sage-600 text-[11px] uppercase tracking-wider">Waktu</span>
              {event.time}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Cal className="w-4 h-4 mt-0.5 text-sage-500 shrink-0" />
            <span>
              <span className="block text-sage-600 text-[11px] uppercase tracking-wider">Tanggal</span>
              {event.date}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 text-sage-500 shrink-0" />
            <span>
              <span className="block text-sage-600 text-[11px] uppercase tracking-wider">Lokasi</span>
              {event.venue}
              <span className="block text-ink-500">{event.address}</span>
            </span>
          </li>
        </ul>

        <a
          href={event.mapsUrl}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-600 text-cream-50 font-body text-xs tracking-[0.15em] uppercase hover:bg-sage-700 hover:-translate-y-0.5 transition-all"
        >
          <Navigation className="w-3.5 h-3.5" /> Rute
        </a>
      </div>
    </div>
    </ParallaxItem>
  );
}

function Cal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

export function EventDetails() {
  return (
    <section id="acara" className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.gallery[2] || weddingData.heroPhoto}
        speed={0.22}
        overlay="to bottom, rgba(250,246,236,.9), rgba(250,246,236,.6) 50%, rgba(250,246,236,.94)"
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer">Rangkaian Acara</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <EventCard event={weddingData.events.akad} delay="0ms" />
          <EventCard event={weddingData.events.resepsi} delay="120ms" alternate />
        </div>
      </div>
    </section>
  );
}