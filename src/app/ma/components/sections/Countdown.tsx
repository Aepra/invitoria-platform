import { WEDDING_DATE } from '../../lib/weddingData';
import { useCountdown, useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider } from '../../components/Ornament';
import ParticleField from '../../components/ParticleField';

type CountdownProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Countdown({ root }: CountdownProps) {
  const time = useCountdown(WEDDING_DATE);
  const ref = useScrollReveal<HTMLDivElement>(root);

  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ];

  return (
    <section className="relative py-20 px-6 bg-dark text-secondary overflow-hidden">
      <ParticleField count={15} />

      <div ref={ref} className="reveal-scale relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
          Menuju Hari Bahagia
        </p>
        <h2 className="font-script text-5xl mb-4">Hitung Mundur</h2>
        <p className="font-serif italic text-secondary/70 mb-8">
          {WEDDING_DATE.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="flex justify-center gap-3 sm:gap-5">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl glass-panel-dark flex items-center justify-center">
                <span suppressHydrationWarning className="font-serif text-3xl sm:text-4xl font-semibold tabular-nums">
                  {unit.value}
                </span>
              </div>
              <span className="font-sans text-xs tracking-widest uppercase mt-2 text-secondary/80">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <Divider className="mt-10 [&_*]:text-primary" />
      </div>
    </section>
  );
}
