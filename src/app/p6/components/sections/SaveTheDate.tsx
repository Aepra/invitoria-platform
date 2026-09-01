'use client';
import { useCountdown } from '../../hooks/useCountdown';
import { weddingData } from '../../data/wedding';
import { Petals } from '../Petals';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Bell } from 'lucide-react';

export function SaveTheDate() {
  const time = useCountdown(weddingData.countdownDate);
  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.coverPhoto}
        speed={0.24}
        overlay="to bottom, rgba(250,246,236,.92), rgba(250,246,236,.72) 55%, rgba(250,246,236,.96)"
        className="absolute inset-0"
      />
      <Petals count={12} />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="swing mb-4 flex justify-center"><BloomDividerMini /></div>
        <div className="rise entered">
          <p className="font-display tracking-[0.35em] uppercase text-sage-700 text-xs mb-4">
            Menghitung Hari Bahagia
          </p>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer mb-8">Save the Date</h2>
        </div>

        <ParallaxItem speed={-0.04} className="pop rounded-[2rem] bg-white/70 backdrop-blur-md border border-sage-200/70 shadow-[0_25px_60px_-25px_rgba(49,87,65,0.45)] p-6">
          <div className="grid grid-cols-4 gap-3">
            {units.map((u) => (
              <div key={u.label} className="rounded-2xl bg-sage-50/80 border border-sage-200/60 py-4 animate-drift" style={{ animationDelay: `${u.label.length * 0.1}s` }}>
                <span key={u.value} suppressHydrationWarning className="digit-flip font-display text-3xl text-clay-600 tabular-nums inline-block">
                  {u.value}
                </span>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-sage-600 mt-1">
                  {u.label}
                </p>
              </div>
            ))}
          </div>
        </ParallaxItem>

        <button className="cta-ripple mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sage-600 text-cream-50 font-body text-sm tracking-[0.2em] uppercase shadow-lg shadow-sage-600/25 hover:bg-sage-700 hover:-translate-y-0.5 transition-all active:scale-95">
          <Bell className="w-4 h-4" />
          Ingatkan Saya
        </button>
      </div>
    </section>
  );
}

function BloomDividerMini() {
  return (
    <div className="bloom-divider w-48">
      <span className="text-sage-500 text-sm">❀</span>
    </div>
  );
}