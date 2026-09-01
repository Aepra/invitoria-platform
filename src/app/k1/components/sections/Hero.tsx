'use client';
import { weddingData } from '../../data/wedding';

export function Hero() {
  return (
    <section className="relative min-h-full flex flex-col justify-end items-center overflow-hidden pb-16 px-6">
      <div className="absolute inset-0">
        <img
          src={weddingData.heroPhoto}
          alt="Hero"
          className="w-full h-full object-cover fine-art-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fine-ivory via-fine-ivory/20 to-fine-ivory/40" />
      </div>

      <div className="relative z-10 w-full text-center pb-4">
        <p className="text-fine-sage text-[10px] tracking-[0.4em] uppercase font-fine-sans mb-4">
          Undangan Pernikahan
        </p>
        <h1 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-3">
          {weddingData.bride.nickname}
          <span className="font-fine-script text-3xl text-fine-sage italic mx-2">&amp;</span>
          {weddingData.groom.nickname}
        </h1>
        <p className="font-fine-sans text-xs tracking-[0.3em] text-fine-charcoal/60">
          12 . 12 . 2026
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-50 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-fine-sage to-transparent" />
      </div>
    </section>
  );
}
