import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { PlayCircle } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('/demo/royal_prewedding.png')", filter: "blur(3px)" }} 
      />
      <div className="absolute inset-0 bg-royal-950/80 pointer-events-none" />

      <Particles count={10} />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-gold-gradient">
            Video & Streaming
          </h2>
          <p className="reveal text-ivory/60 font-serif text-lg italic mt-4">
            Momen bahagia kami
          </p>
        </div>

        {/* Unified Card for Video & Streaming */}
        <div className="reveal-blur glass-panel-dark rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center">
          
          {/* Video Section */}
          <div className="w-full relative aspect-video rounded-xl overflow-hidden border border-gold-400/20 bg-royal-900 shadow-xl mb-8">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YE7VzlLtp-4?controls=0"
              title="Prewedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-gold-400/30 mb-8" />

          {/* Streaming Section */}
          <h3 className="text-gold-300 font-cinzel text-base sm:text-lg tracking-widest uppercase mb-3">Live Streaming</h3>
          <p className="text-ivory/70 font-serif text-sm sm:text-base mb-6 max-w-md mx-auto">
            Bagi keluarga dan sahabat yang belum berkesempatan hadir, Anda dapat menyaksikan momen bahagia kami melalui siaran langsung.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-600/30 via-gold-400/30 to-gold-600/30 border border-gold-400/40 text-gold-100 text-sm font-semibold tracking-widest uppercase hover:from-gold-500/40 hover:via-gold-300/40 hover:to-gold-500/40 transition-all shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:scale-105"
          >
            <PlayCircle className="w-4 h-4" />
            Tonton Streaming
          </a>
        </div>
      </div>
    </section>
  );
}
