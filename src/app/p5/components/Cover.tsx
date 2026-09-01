'use client';
import { useState, useEffect } from 'react';
import { weddingData } from '../data/wedding';
import { Particles } from '../components/Particles';

export function Cover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    // Baca ?to= dari URL
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      // Decode & capitalize setiap kata, misal "bapak+budi" → "Bapak Budi"
      const formatted = decodeURIComponent(to)
        .replace(/\+/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      setGuestName(formatted);
    }
  }, []);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onOpen, 1600);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        transition: 'transform 1.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 1.2s ease-out',
        transform: opening ? 'translateY(-100%)' : 'translateY(0)',
        opacity: opening ? 0 : 1,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Royal wedding"
          className="w-full h-full object-cover object-top"
          style={{ animation: 'zoomBg 25s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/40 via-royal-900/70 to-royal-900/95" />
      </div>

      <Particles count={10} />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end px-4 sm:px-6 text-center pb-16 md:pb-24">
        <div
          className="flex flex-col items-center p-6 mx-auto max-w-lg"
          style={{ animation: 'fadeIn 2s ease-out forwards' }}
        >
          <p className="text-ivory/80 text-xs md:text-sm tracking-[0.3em] uppercase font-cinzel mb-6 drop-shadow-md">
            The Wedding Of
          </p>

          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-shimmer-gold leading-tight">
            Suci
          </h1>
          
          <div className="flex items-center justify-center my-1">
            <span className="text-gold-300/80 font-serif text-3xl italic">&</span>
          </div>
          
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-shimmer-gold leading-tight">
            Abel
          </h1>

          <p className="text-ivory/90 font-serif text-lg md:text-xl mt-8 mb-6 drop-shadow-md">
            Minggu, 12 Desember 2026
          </p>

          {/* Guest Name — tampil jika ada ?to= di URL */}
          <div className="mb-6 px-4">
            <p className="text-ivory/50 text-[10px] tracking-[0.25em] uppercase font-cinzel mb-1">
              Kepada Yth.
            </p>
            <p className="text-gold-200 font-serif text-base md:text-lg italic">
              {guestName ?? 'Bapak / Ibu / Saudara/i'}
            </p>
          </div>

          <button
            onClick={handleOpen}
            className="group relative px-10 py-3.5 overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 border border-gold-400/50 rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-gold-600/20 via-gold-400/30 to-gold-600/20 rounded-full backdrop-blur-sm transition-all group-hover:from-gold-500/30 group-hover:via-gold-300/40 group-hover:to-gold-500/30" />
            <span className="relative flex items-center gap-2 text-gold-100 font-sans text-sm tracking-[0.2em] uppercase">
              Buka Undangan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
