'use client';
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

  const calendarHref = (() => {
    const start = new Date(weddingData.countdownDate);
    const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const title = encodeURIComponent(`Wedding ${weddingData.bride.nickname} & ${weddingData.groom.nickname}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}`;
  })();

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-fine-sand px-6 py-20">
      <div className="relative z-10 text-center w-full max-w-2xl">
        <div className="reveal">
          <p className="text-fine-sage text-[10px] tracking-[0.4em] uppercase font-fine-sans mb-6">
            Countdown
          </p>
          <h2 className="font-fine-script text-6xl text-fine-charcoal mb-14">
            Save The Date
          </h2>
        </div>

        <div className="reveal flex justify-center gap-3 sm:gap-6 mb-14">
          {units.map((u, i) => (
            <div key={i} className="flex flex-col items-center bg-white border border-fine shadow-sm px-4 sm:px-5 py-5 min-w-[68px]">
              <span suppressHydrationWarning className="font-fine-serif text-3xl sm:text-4xl text-fine-charcoal tabular-nums mb-2">
                {u.value.toString().padStart(2, '0')}
              </span>
              <span className="text-fine-charcoal/50 text-[10px] uppercase tracking-[0.2em] font-fine-sans">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal-scale">
          <a
            href={calendarHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-3 border border-fine-charcoal text-fine-charcoal text-[11px] tracking-[0.25em] uppercase font-fine-sans hover:bg-fine-charcoal hover:text-fine-ivory transition-colors"
          >
            Simpan ke Kalender
          </a>
        </div>
      </div>
    </section>
  );
}
