import { COUPLE } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, FlowerIcon, LeafCorner } from '../../components/Ornament';
import { Camera } from 'lucide-react';

type BrideGroomProps = {
  root: React.RefObject<HTMLElement | null>;
};

function PersonCard({
  person,
  side,
  root,
}: {
  person: typeof COUPLE.bride;
  side: 'left' | 'right';
  root: React.RefObject<HTMLElement | null>;
}) {
  const ref = useScrollReveal<HTMLDivElement>(root);
  const revealClass = side === 'left' ? 'reveal-left' : 'reveal-right';

  return (
    <div
      ref={ref}
      className={`${revealClass} flex flex-col items-center text-center max-w-sm mx-auto`}
    >
      <div className="relative mb-6">
        <div className="absolute -inset-3 rounded-full border border-primary/40 animate-spin-slow" />
        <div className="absolute -inset-1 rounded-full border-2 border-dashed border-primary/30" />
        <img
          src={person.photo}
          alt={person.name}
          className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-xl ring-4 ring-secondary"
        />
      </div>

      <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary mb-2">{person.role}</p>
      <h3 className="font-script text-4xl text-dark mb-3">{person.name}</h3>
      <p className="font-serif italic text-sm text-dark/70 mb-4 max-w-xs">{person.subtitle}</p>

      <div className="text-sm font-serif text-dark/80 space-y-1 mb-4">
        <p>{person.parents.father}</p>
        <p className="text-xs italic">&amp;</p>
        <p>{person.parents.mother}</p>
      </div>

      {person.instagram && (
        <a
          href={person.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-primary hover:text-dark transition-colors"
        >
          <Camera className="w-4 h-4" />
          <span className="tracking-wider">@{person.instagram.split('/').pop()}</span>
        </a>
      )}
    </div>
  );
}

export default function BrideGroom({ root }: BrideGroomProps) {
  const headerRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <LeafCorner className="absolute top-4 right-4 w-24 h-24 text-primary/30 -scale-x-100" />
      <LeafCorner className="absolute bottom-4 left-4 w-24 h-24 text-primary/30 -scale-y-100" />

      <div ref={headerRef} className="reveal text-center mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
          Bismillahirrahmanirrahim
        </p>
        <h2 className="font-script text-5xl text-dark mb-4">Pasangan Bahagia</h2>
        <p className="font-serif italic text-dark/70 max-w-md mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
          pernikahan putra-putri kami.
        </p>
        <Divider className="mt-6" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <PersonCard person={COUPLE.bride} side="left" root={root} />

        <div className="flex flex-col items-center">
          <FlowerIcon className="w-12 h-12 text-primary animate-pulse-soft" />
          <span className="font-script text-5xl text-primary mt-2">&amp;</span>
        </div>

        <PersonCard person={COUPLE.groom} side="right" root={root} />
      </div>
    </section>
  );
}
