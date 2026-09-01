'use client';
import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { BloomDivider, Sparkle } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const images = weddingData.gallery;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = () => setLightbox((p) => (p === null ? null : (p + 1) % images.length));
  const prev = () => setLightbox((p) => (p === null ? null : (p - 1 + images.length) % images.length));

  // Featured images: tall parade + wide
  const featured = [0, 5, 1, 7];

  return (
    <section id="galeri" className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={images[5]}
        speed={0.18}
        overlay="to bottom, rgba(250,246,236,.93), rgba(250,246,236,.7) 50%, rgba(250,246,236,.96)"
        className="absolute inset-0"
      />
      <Sparkle className="absolute top-10 right-8 w-5 h-5" color="#D89579" />
      <Sparkle className="absolute bottom-24 left-8 w-4 h-4" color="#93BD9F" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer">Galeri</h2>
          <p className="font-body text-ink-500 italic mt-2">Momen-momen indah kami</p>
        </div>

        {/* Featured pair */}
        <ParallaxItem speed={-0.04} className="grid grid-cols-5 gap-2 mb-2">
          <div className="col-span-2 zoom overflow-hidden rounded-2xl">
            <ButtonImg src={images[featured[0]]} alt="Featured" onClick={() => setLightbox(featured[0])} aspect="aspect-[3/4]" />
          </div>
          <div className="col-span-3 grid grid-rows-2 gap-2">
            <div className="zoom overflow-hidden rounded-2xl" style={{ transitionDelay: '80ms' }}>
              <ButtonImg src={images[featured[1]]} alt="Featured" onClick={() => setLightbox(featured[1])} aspect="aspect-[4/3]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="zoom overflow-hidden rounded-2xl" style={{ transitionDelay: '120ms' }}>
                <ButtonImg src={images[featured[2]]} alt="Featured" onClick={() => setLightbox(featured[2])} aspect="aspect-square" />
              </div>
              <div className="bloom overflow-hidden rounded-2xl" style={{ transitionDelay: '160ms' }}>
                <ButtonImg src={images[featured[3]]} alt="Featured" onClick={() => setLightbox(featured[3])} aspect="aspect-square" />
              </div>
            </div>
          </div>
        </ParallaxItem>

        {/* Masonry of the rest */}
        <div className="masonry">
          {images.slice(4).map((src, i) => (
            <div key={i} className="mb-2 zoom overflow-hidden rounded-2xl" style={{ transitionDelay: `${i * 60}ms` }}>
              <ButtonImg src={src} alt={`Galeri ${i + 5}`} onClick={() => setLightbox(i + 4)} aspect={i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'} />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink-900/90 backdrop-blur flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-cream-100 hover:text-clay-300 transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 sm:left-8 text-cream-100 hover:text-clay-300 transition-colors" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={images[lightbox]}
            alt="Galeri"
            className="max-w-full max-h-[82vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-4 sm:right-8 text-cream-100 hover:text-clay-300 transition-colors" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}

function ButtonImg({ src, alt, onClick, aspect }: { src: string; alt: string; onClick: () => void; aspect: string }) {
  return (
    <button onClick={onClick} className={`group relative block w-full ${aspect} overflow-hidden`}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <span className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/25 transition-colors" />
    </button>
  );
}