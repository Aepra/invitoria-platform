import { useState, useEffect } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider, FleurDeLisOrnament } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { Clock, MapPin, CalendarDays, Navigation, ChevronLeft, ChevronRight } from 'lucide-react';

const venueImages: Record<string, string[]> = {
  'Akad Nikah': [
    'https://images.pexels.com/photos/28247494/pexels-photo-28247494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/12194048/pexels-photo-12194048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/26889646/pexels-photo-26889646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
  'Resepsi': [
    'https://images.pexels.com/photos/30307452/pexels-photo-30307452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/11813966/pexels-photo-11813966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/18134456/pexels-photo-18134456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
};

function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Venue ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-800 via-transparent to-transparent" />

      {/* Nav arrows */}
      <button
        onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-royal-900/60 flex items-center justify-center text-gold-300 hover:bg-royal-900/90 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-royal-900/60 flex items-center justify-center text-gold-300 hover:bg-royal-900/90 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? 'bg-gold-400 w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
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
  const images = venueImages[event.title] || [];

  return (
    <div className={`${revealClass} bg-royal-800 rounded-2xl overflow-hidden border border-gold-400/20 transition-transform duration-500 hover:scale-[1.02] group`}>
      {/* Image Slider */}
      {images.length > 0 && <ImageSlider images={images} />}

      {/* Content */}
      <div className="p-6">
        {/* Title row */}
        <div className="flex items-center gap-3 mb-5">
          <FleurDeLisOrnament className="w-5 h-7 shrink-0" />
          <h3 className="font-script text-3xl text-gold-gradient">{event.title}</h3>
        </div>

        {/* Date & Time in a creative 2-col layout */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-royal-900 rounded-xl p-3 text-center border border-gold-400/10">
            <CalendarDays className="w-4 h-4 text-gold-400 mx-auto mb-1.5" />
            <p className="text-gold-300 font-cinzel text-[10px] tracking-[0.2em] uppercase mb-1">Tanggal</p>
            <p className="text-ivory font-serif text-sm font-medium">{event.day}</p>
            <p className="text-ivory/70 font-serif text-xs">{event.date}</p>
          </div>
          <div className="bg-royal-900 rounded-xl p-3 text-center border border-gold-400/10">
            <Clock className="w-4 h-4 text-gold-400 mx-auto mb-1.5" />
            <p className="text-gold-300 font-cinzel text-[10px] tracking-[0.2em] uppercase mb-1">Waktu</p>
            <p className="text-ivory font-serif text-sm font-medium">{event.time}</p>
          </div>
        </div>

        {/* Venue with accent bar */}
        <div className="flex gap-3 mb-5">
          <div className="w-[2px] bg-gradient-to-b from-gold-400 to-gold-400/20 rounded-full shrink-0" />
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <p className="text-gold-300 font-cinzel text-[10px] tracking-[0.2em] uppercase">Lokasi</p>
            </div>
            <p className="text-ivory font-serif text-sm font-medium">{event.venue}</p>
            <p className="text-ivory/50 font-serif text-xs mt-0.5">{event.address}</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={event.mapsUrl}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-200 text-xs tracking-widest uppercase hover:bg-gold-400/20 transition-all"
        >
          <Navigation className="w-3.5 h-3.5" />
          Lihat Lokasi
        </a>
      </div>
    </div>
  );
}

const sectionBgImages = [
  '/demo/royal_event_bg.png',
  '/demo/royal_prewedding.png',
  '/demo/royal_lovestory_bg.png',
];

export function EventDetails() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % sectionBgImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Rotating blurred parallax backgrounds */}
      {sectionBgImages.map((src, i) => (
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
      <Particles count={15} />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl text-gold-gradient">
            Event Details
          </h2>
        </div>

        <div className="grid gap-6">
          <EventCard event={weddingData.events.akad} revealClass="reveal-left" />
          <EventCard event={weddingData.events.resepsi} revealClass="reveal-right" />
        </div>
      </div>
    </section>
  );
}
