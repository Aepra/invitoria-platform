'use client';
import { weddingData } from '../../data/wedding';
import { BloomDivider, Sparkle } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { PlayCircle, Video } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.gallery[4] || weddingData.heroPhoto}
        speed={0.2}
        overlay="to bottom, rgba(250,246,236,.92), rgba(250,246,236,.68) 50%, rgba(250,246,236,.95)"
        className="absolute inset-0"
      />
      <Sparkle className="absolute bottom-12 left-8 w-5 h-5" color="#D89579" />
      <Sparkle className="absolute top-20 right-8 w-4 h-4" color="#93BD9F" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer">Video &amp; Streaming</h2>
          <p className="font-body text-ink-500 italic mt-2">Momen bahagia kami</p>
        </div>

        <ParallaxItem speed={0.05} className="zoom rounded-[2rem] bg-white/75 backdrop-blur-md border border-sage-200/70 shadow-[0_25px_60px_-25px_rgba(49,87,65,0.45)] p-6 sm:p-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-sage-100 ring-1 ring-sage-200 mb-7">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YE7VzlLtp-4?controls=0"
              title="Prewedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="text-center">
            <h3 className="flex items-center justify-center gap-2 font-display tracking-[0.25em] uppercase text-sage-700 text-sm mb-3 animate-sway-soft">
              <Video className="w-4 h-4" /> Live Streaming
            </h3>
            <p className="font-body text-ink-600 text-sm mb-6 max-w-md mx-auto">
              Bagi keluarga dan sahabat yang belum berkesempatan hadir, Anda dapat menyaksikan
              momen bahagia kami melalui siaran langsung.
            </p>
            <a
              href="#"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-clay-600 text-cream-50 font-body text-sm tracking-[0.15em] uppercase shadow-lg shadow-clay-600/25 hover:bg-clay-700 hover:-translate-y-0.5 transition-all"
            >
              <span className="stream-ring absolute inset-0 rounded-full bg-clay-500/40" />
              <PlayCircle className="relative w-4 h-4" />
              <span className="relative">Tonton Streaming</span>
            </a>
          </div>
        </ParallaxItem>
      </div>
    </section>
  );
}