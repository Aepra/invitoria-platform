import { Bell } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { weddingData } from '../../data/wedding';

export function SaveTheDate() {
  const time = useCountdown(weddingData.countdownDate);
  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ];

  return (
    <section className="relative min-h-[90vh] flex overflow-hidden">
      {/* Background with floating animation */}
      <div 
        className="absolute inset-0 bg-center bg-cover animate-float-bg" 
        style={{ backgroundImage: "url('/demo/royal_prewedding.png')" }}
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-900/90 via-royal-900/20 to-royal-900/50 pointer-events-none" />

      {/* Top Right: Stacked Date */}
      <div className="absolute top-12 right-10 flex flex-col items-center gap-2">
        <span className="reveal-right font-serif text-5xl text-gold-400 tracking-widest drop-shadow-lg" style={{ transitionDelay: '100ms' }}>12</span>
        <span className="reveal-right font-serif text-5xl text-ivory tracking-widest drop-shadow-lg" style={{ transitionDelay: '300ms' }}>12</span>
        <span className="reveal-right font-serif text-5xl text-gold-400 tracking-widest drop-shadow-lg" style={{ transitionDelay: '500ms' }}>26</span>
      </div>

      {/* Bottom Left: Title, Countdown & Button */}
      <div className="absolute bottom-12 left-10 flex flex-col items-start z-10">
        <div className="flex flex-col items-start leading-none mb-8">
          <span className="reveal-left font-cinzel text-6xl text-white drop-shadow-xl tracking-wide" style={{ transitionDelay: '200ms' }}>SAVE</span>
          <span className="reveal-scale font-script text-6xl text-gold-300 drop-shadow-xl -my-3 ml-8" style={{ transitionDelay: '400ms' }}>The</span>
          <span className="reveal-left font-cinzel text-6xl text-white drop-shadow-xl tracking-wide" style={{ transitionDelay: '600ms' }}>DATE</span>
        </div>

        {/* Countdown */}
        <div className="flex gap-6 mb-10 reveal" style={{ transitionDelay: '800ms' }}>
          {units.map((u, i) => (
            <div key={i} className="flex flex-col items-center gap-1 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 shadow-lg">
              <span suppressHydrationWarning className="font-serif text-3xl text-gold-300 font-medium tabular-nums drop-shadow-md">
                {u.value}
              </span>
              <span className="text-white/80 text-[11px] uppercase tracking-wider font-cinzel">{u.label}</span>
            </div>
          ))}
        </div>

        <button className="reveal-scale flex items-center gap-3 px-8 py-3.5 border-2 border-gold-400 rounded-full text-gold-300 font-sans text-sm tracking-widest uppercase hover:bg-gold-400/20 hover:scale-105 transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(201,162,39,0.3)]" style={{ transitionDelay: '1000ms' }}>
          <Bell className="w-5 h-5" />
          SAVE TO CALENDAR
        </button>
      </div>
    </section>
  );
}
