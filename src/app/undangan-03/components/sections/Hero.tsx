import { useState, useEffect } from 'react';
import { weddingData } from '../../data/wedding';

const heroBgImages = [
  weddingData.bgPhoto,
  weddingData.heroPhoto,
  weddingData.coverPhoto,
  weddingData.gallery[0],
  weddingData.gallery[2],
];

export function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBgImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Format date to DD . MM . YYYY
  // Based on "12 Desember 2026" -> "12 . 12 . 2026"
  const formattedDate = "12 . 12 . 2026";

  return (
    <section className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden pb-24 px-6">
      {/* Rotating Backgrounds */}
      {heroBgImages.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-center bg-cover animate-float-bg transition-opacity duration-1000 ${i === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Dark gradient at the bottom and sides for text readability & framing */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] pb-10">
        <p className="text-ivory/90 text-sm sm:text-base tracking-[0.3em] uppercase font-cinzel mb-4">
          The Wedding Of
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl text-white mb-6">
          {weddingData.bride.nickname} <span className="font-script italic text-gold-300 mx-2">&</span> {weddingData.groom.nickname}
        </h1>

        <p className="text-ivory/90 text-base sm:text-lg tracking-[0.2em] font-serif mb-12">
          {formattedDate}
        </p>
      </div>

      {/* Bouncing Arrows */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center animate-bounce gap-[-4px] z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-70 -mb-3"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
      </div>

      {/* Bottom Peek Arch */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-royal-900 rounded-t-[2.5rem] z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.5)] flex justify-center pt-3">
        {/* Drag Indicator */}
        <div className="w-12 h-1 bg-gray-300/40 rounded-full" />
      </div>
    </section>
  );
}
