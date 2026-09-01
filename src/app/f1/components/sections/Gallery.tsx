import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider } from '../../components/Ornaments';
import { Particles, Starfield } from '../../components/Particles';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = weddingData.gallery;

  const close = () => setLightbox(null);
  const next = () => setLightbox((p) => (p === null ? null : (p + 1) % images.length));
  const prev = () => setLightbox((p) => (p === null ? null : (p - 1 + images.length) % images.length));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={40} />
      <Particles count={12} type="sparkle" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">
            Gallery
          </h2>
          <p className="reveal text-moonlight/60 font-script text-lg italic mt-4">
            Momen-momen indah kami
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => {
            const span = i === 0 || i === 5 ? 'sm:col-span-2 sm:row-span-2' : '';
            return (
              <div
                key={i}
                className={`reveal-scale ${span} relative overflow-hidden rounded-xl border border-mystic-400/20 group cursor-pointer magic-aura`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full min-h-[120px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur-md flex items-center justify-center"
          onClick={close}
        >
          <button className="absolute top-6 right-6 text-moonlight/70 hover:text-mystic-300 transition-colors" onClick={close}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-6 text-moonlight/70 hover:text-mystic-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={images[lightbox]}
            alt="Gallery"
            className="max-w-[85%] max-h-[80vh] object-contain rounded-lg border border-mystic-400/30"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-moonlight/70 hover:text-mystic-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
