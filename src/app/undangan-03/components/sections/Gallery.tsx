import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = weddingData.gallery;

  const close = () => setLightbox(null);
  const next = () => setLightbox((p) => (p === null ? null : (p + 1) % images.length));
  const prev = () => setLightbox((p) => (p === null ? null : (p - 1 + images.length) % images.length));

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-10">
      <Particles count={12} />

      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="text-center mb-8">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-4xl sm:text-5xl text-gold-gradient">
            Gallery
          </h2>
          <p className="reveal text-ivory/60 font-serif text-base italic mt-2">
            Momen-momen indah kami
          </p>
        </div>

        {/* Main Large Image */}
        <div 
          className="reveal-scale relative w-fit max-w-full mx-auto mb-6 cursor-pointer group"
          onClick={() => setLightbox(selectedImageIndex)}
        >
          <img
            src={images[selectedImageIndex]}
            alt="Gallery Main"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-3xl shadow-2xl border border-gold-400/30 transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm tracking-widest font-sans uppercase drop-shadow-md">Lihat Penuh</span>
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="reveal-blur flex gap-3 overflow-x-auto snap-x hide-scrollbar pb-4 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedImageIndex(i)}
              className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all snap-center ${
                i === selectedImageIndex ? 'border-gold-400 scale-105 shadow-[0_0_10px_rgba(201,162,39,0.5)]' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-royal-900/95 backdrop-blur-md flex items-center justify-center"
          onClick={close}
        >
          <button className="absolute top-6 right-6 text-ivory/70 hover:text-gold-300 transition-colors" onClick={close}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-6 text-ivory/70 hover:text-gold-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={images[lightbox]}
            alt="Gallery"
            className="max-w-[85%] max-h-[80vh] object-contain rounded-lg border border-gold-400/30"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-ivory/70 hover:text-gold-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
