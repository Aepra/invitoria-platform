import { weddingData } from '../../data/wedding';
import { Clock, MapPin, CalendarDays, Navigation } from 'lucide-react';

const venueImages: Record<string, string> = {
  'Akad Nikah': 'https://images.pexels.com/photos/28247494/pexels-photo-28247494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'Resepsi': 'https://images.pexels.com/photos/11813966/pexels-photo-11813966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

function EventCard({
  event,
}: {
  event: typeof weddingData.events.akad;
}) {
  const image = venueImages[event.title];

  return (
    <div className="reveal flex flex-col items-center bg-white shadow-fine border border-fine max-w-sm w-full mx-auto p-2 pb-8 mb-12">
      {/* Top Image */}
      {image && (
        <div className="w-full h-64 overflow-hidden mb-8">
          <img
            src={image}
            alt={event.title}
            className="w-full h-full object-cover fine-art-img transition-transform duration-1000 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="px-6 w-full text-center">
        <h3 className="font-fine-script text-4xl text-fine-sage mb-2">{event.title}</h3>
        <p className="text-fine-charcoal/50 text-[10px] tracking-[0.2em] uppercase font-fine-sans mb-6">The Celebration</p>

        {/* Date & Time */}
        <div className="flex flex-col gap-2 mb-6 text-fine-charcoal">
          <div className="flex items-center justify-center gap-2">
            <CalendarDays className="w-4 h-4 text-fine-gold" />
            <p className="font-fine-sans text-sm tracking-widest">{event.day}, {event.date}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-fine-gold" />
            <p className="font-fine-sans text-sm tracking-widest">{event.time}</p>
          </div>
        </div>

        <div className="fine-divider my-6 !h-8" />

        {/* Venue */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-fine-gold" />
            <p className="font-fine-sans text-sm font-medium tracking-wide">{event.venue}</p>
          </div>
          <p className="text-fine-charcoal/70 font-fine-serif text-xs px-4">{event.address}</p>
        </div>

        {/* CTA Button */}
        <a
          href={event.mapsUrl}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-fine-charcoal text-fine-charcoal text-xs tracking-widest uppercase hover:bg-fine-charcoal hover:text-fine-ivory transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          Lihat Peta
        </a>
      </div>
    </div>
  );
}

export function EventDetails() {
  return (
    <section className="relative w-full py-24 bg-fine-sand px-6 overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-8 border-l border-fine-gold/20" />
      <div className="absolute top-0 bottom-0 right-8 border-r border-fine-gold/20" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal-scale">
          <p className="text-fine-charcoal/60 text-xs tracking-[0.3em] uppercase font-fine-sans mb-4">
            Join Us
          </p>
          <h2 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-4">
            Event Details
          </h2>
          <div className="w-12 h-[1px] bg-fine-charcoal/30 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
          <EventCard event={weddingData.events.akad} />
          <EventCard event={weddingData.events.resepsi} />
        </div>
      </div>
    </section>
  );
}
