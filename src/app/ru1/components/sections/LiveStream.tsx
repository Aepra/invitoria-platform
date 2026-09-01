import { OrnamentDivider, FloralFrame } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';
import { PlayCircle } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[url('/images/parallax/bg-indoor.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <LightOrbs count={8} />
      <Particles count={10} type="light" />

      <div className="relative z-10 w-full max-w-2xl px-6 mx-auto">
        <div className="reveal-blur bg-white/85 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-[40px] p-6 sm:p-10 soft-aura text-center flex flex-col items-center">
          
          {/* YouTube Embed for Prewedding Video */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gold-medium/20 mb-8 bg-cream/50 relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Prewedding"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="reveal-scale mb-3">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-4xl sm:text-5xl text-slate-800 drop-shadow-sm mb-4">
            Live Streaming
          </h2>

          <p className="text-slate-600 font-display text-sm sm:text-base italic mb-8 px-4">
            Nikmati momen kami dari mana saja dengan menekan tautan di bawah ini
          </p>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rose-500 text-white font-display text-sm tracking-widest uppercase hover:bg-rose-600 hover:scale-105 transition-all shadow-md flex items-center justify-center gap-3"
          >
            <PlayCircle className="w-5 h-5" />
            Tonton Live Streaming
          </a>
          
        </div>
      </div>
    </section>
  );
}
