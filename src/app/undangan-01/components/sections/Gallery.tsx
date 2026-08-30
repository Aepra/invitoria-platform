import { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon } from '../../components/Ornament';

type GalleryProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Gallery({ root }: GalleryProps) {
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>(root);
  const gridRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-20 px-6 bg-cream overflow-hidden">
      <StarIcon className="absolute top-10 right-10 w-10 h-10 text-coral animate-wiggle" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal/15 shape-blob animate-float" />

      <div ref={headerRef} className="reveal text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 bg-ink rounded-full px-4 py-1.5 mb-4">
          <StarIcon className="w-4 h-4 text-sunny" />
          <p className="font-rounded text-xs tracking-wider uppercase text-white">Our Moments</p>
        </div>
        <h2 className="font-script text-5xl text-coral mb-3">Galeri Kenangan</h2>
        <Divider />
      </div>

      <div ref={gridRef} className="reveal-scale max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden rounded-2xl border-3 border-ink shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-sunny border-2 border-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <StarIcon className="w-4 h-4 text-ink" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-coral border-3 border-white flex items-center justify-center hover:bg-teal transition-colors"
            onClick={() => setActive(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={active}
            alt="Gallery preview"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl border-4 border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
