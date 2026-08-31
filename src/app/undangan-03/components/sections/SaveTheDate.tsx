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
    <section 
      className="relative min-h-[90vh] flex overflow-hidden bg-center bg-cover" 
      style={{ backgroundImage: "url('/demo/royal_prewedding.png')" }}
    >
      {/* Subtle gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-royal-900/40 pointer-events-none" />

      {/* Top Right: Stacked Date */}
      <div className="absolute top-10 right-8 flex flex-col items-center gap-1 reveal-scale">
        <span className="font-serif text-4xl text-white tracking-widest drop-shadow-lg">12</span>
        <span className="font-serif text-4xl text-white tracking-widest drop-shadow-lg">12</span>
        <span className="font-serif text-4xl text-white tracking-widest drop-shadow-lg">26</span>
      </div>

      {/* Bottom Left: Title, Countdown & Button */}
      <div className="absolute bottom-10 left-8 flex flex-col items-start reveal-left">
        <div className="flex flex-col items-start leading-none mb-6">
          <span className="font-cinzel text-6xl text-white drop-shadow-xl tracking-wide">SAVE</span>
          <span className="font-script text-5xl text-white drop-shadow-xl -my-2 ml-6">The</span>
          <span className="font-cinzel text-6xl text-white drop-shadow-xl tracking-wide">DATE</span>
        </div>

        {/* Countdown */}
        <div className="flex gap-5 mb-6">
          {units.map((u, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span suppressHydrationWarning className="font-serif text-2xl text-white font-medium tabular-nums drop-shadow-md">
                {u.value}
              </span>
              <span className="text-white/80 text-[10px] uppercase tracking-wider font-cinzel">{u.label}</span>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 px-6 py-2.5 border border-white rounded-full text-white font-sans text-xs tracking-widest uppercase hover:bg-white/10 transition-colors backdrop-blur-sm">
          <Bell className="w-4 h-4" />
          SAVE TO CALENDAR
        </button>
      </div>
    </section>
  );
}
