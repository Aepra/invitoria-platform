import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type GalleryProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Gallery({ root }: GalleryProps) {
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>(root);
  const gridRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-24 px-6 bg-halftone-cyan overflow-hidden">
      <div className="absolute top-10 right-10 w-24 h-24 bg-comic-yellow border-4 border-comic-ink pow-shape animate-action-shake opacity-80" />
      
      <div ref={headerRef} className="reveal text-center mb-16 relative z-10">
        <div className="inline-block bg-comic-white px-6 py-2 border-4 border-comic-ink mb-4 transform -rotate-2 shadow-[4px_4px_0_0_#EF4444]">
          <p className="font-comic-head text-xl tracking-widest text-comic-ink uppercase">Captured Memories!</p>
        </div>
        <h2 className="font-comic-head text-5xl sm:text-7xl text-comic-ink mb-3 uppercase drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
          The Gallery
        </h2>
      </div>

      <div ref={gridRef} className="reveal-scale max-w-5xl mx-auto relative z-10 bg-comic-white p-4 sm:p-6 border-4 border-comic-ink shadow-[8px_8px_0_0_#111827] transform rotate-1">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 bg-comic-ink p-4">
          {GALLERY.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden bg-comic-white border-2 border-comic-ink hover:border-comic-yellow transition-all duration-300 hover:z-10 hover:scale-105 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover filter contrast-110 saturate-110"
              />
              <div className="absolute inset-0 bg-comic-red/0 group-hover:bg-comic-red/20 transition-colors duration-300" />
              
              <div className="absolute top-2 left-2 bg-comic-yellow border-2 border-comic-ink px-2 py-0.5 transform -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-comic-head text-xs">#{i + 1}</span>
              </div>

              <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-comic-cyan border-2 border-comic-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-12">
                <ZoomIn className="w-5 h-5 text-comic-ink" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox - Comic Style */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-comic-ink/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full comic-btn bg-comic-yellow flex items-center justify-center text-comic-ink"
            onClick={() => setActive(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative animate-pow">
            <div className="absolute -top-6 -left-6 bg-comic-red border-4 border-comic-ink px-4 py-1 transform -rotate-12 z-20">
              <span className="font-comic-head text-2xl text-comic-white">SNAP!</span>
            </div>
            
            <img
              src={active}
              alt="Gallery preview"
              className="max-w-[90vw] max-h-[85vh] object-contain border-8 border-comic-white shadow-[12px_12px_0_0_#FACC15]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
