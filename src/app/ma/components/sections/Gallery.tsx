import { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, LeafCorner } from '../../components/Ornament';

type GalleryProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Gallery({ root }: GalleryProps) {
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>(root);
  const gridRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <LeafCorner className="absolute top-8 right-8 w-20 h-20 text-primary/25 -scale-x-100" />

      <div ref={headerRef} className="reveal text-center mb-14">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
          Our Moments
        </p>
        <h2 className="font-script text-5xl text-dark mb-4">Galeri Kenangan</h2>
        <Divider />
      </div>

      <div ref={gridRef} className="reveal-scale max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-secondary/80 hover:text-secondary transition-colors"
            onClick={() => setActive(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={active}
            alt="Gallery preview"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
