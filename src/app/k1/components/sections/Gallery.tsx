'use client';
import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { X } from 'lucide-react';

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = weddingData.gallery;

  const close = () => setLightbox(null);

  return (
    <section className="relative w-full py-24 bg-fine-ivory px-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        <div className="text-center mb-20 reveal-scale">
          <p className="text-fine-sage text-xs tracking-[0.3em] uppercase font-fine-sans mb-4">
            A Glimpse of Us
          </p>
          <h2 className="font-fine-serif text-5xl text-fine-charcoal mb-8">
            Gallery
          </h2>
          <div className="fine-divider" />
        </div>

        {/* Asymmetrical / Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((src, i) => {
            // Determine sizing classes for masonry effect
            let sizeClass = '';
            if (i === 0) sizeClass = 'col-span-2 row-span-2';
            else if (i === 3) sizeClass = 'row-span-2';
            else if (i === 4) sizeClass = 'col-span-2';
            
            return (
              <div 
                key={i}
                onClick={() => setLightbox(i)}
                className={`reveal w-full h-full cursor-pointer overflow-hidden group border border-fine shadow-sm bg-fine-sand ${sizeClass}`}
                style={{ transitionDelay: `${(i % 5) * 100}ms` }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover fine-art-img transition-transform duration-[2s] group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Minimalist Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-fine-ivory/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fine-in"
          onClick={close}
        >
          <button 
            className="absolute top-8 right-8 text-fine-charcoal hover:text-fine-sage transition-colors z-10" 
            onClick={close}
          >
            <X className="w-8 h-8 font-light" />
          </button>
          
          <img
            src={images[lightbox]}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain shadow-fine border border-fine bg-fine-sand"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
