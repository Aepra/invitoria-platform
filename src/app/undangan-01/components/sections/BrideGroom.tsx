import { Camera, Coffee, Gamepad2 } from 'lucide-react';
import { COUPLE } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon, HeartIcon } from '../../components/Ornament';

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
  const cardColor = side === 'left' ? 'cartoon-card-coral' : 'cartoon-card-teal';
  const icon = side === 'left' ? <Coffee className="w-5 h-5 text-white" /> : <Gamepad2 className="w-5 h-5 text-white" />;

  return (
    <div ref={ref} className={`${revealClass} flex flex-col items-center text-center max-w-sm`}>
      {/* Photo with blob frame */}
      <div className="relative mb-5">
        <div className="absolute -inset-3 bg-sunny shape-blob animate-wiggle" />
        <div className="absolute -top-3 -right-3 z-10">
          <StarIcon className="w-7 h-7 text-sunny animate-bounce-soft" />
        </div>
        <img
          src={person.photo}
          alt={person.name}
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-ink shadow-lg"
        />
      </div>

      <div className={`${cardColor} px-6 py-5 w-full`}>
        <p className="font-rounded text-xs tracking-wider uppercase text-white/80 mb-2">{person.role}</p>
        <h3 className="font-display font-bold text-white text-xl mb-1">{person.name}</h3>
        <p className="font-rounded text-sm text-white/70 mb-3">{person.subtitle}</p>

        <div className="bg-white/20 rounded-xl px-3 py-2 mb-3">
          <p className="font-rounded text-xs text-white/90">{person.parents.father}</p>
          <p className="font-rounded text-xs text-white/60 italic my-0.5">&amp;</p>
          <p className="font-rounded text-xs text-white/90">{person.parents.mother}</p>
        </div>

        <div className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-3 py-1.5 mb-3">
          {icon}
          <span className="font-rounded text-xs text-white">{person.funFact}</span>
        </div>

        <a
          href={person.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
        >
          <Camera className="w-4 h-4" />
          <span className="font-rounded text-xs">Instagram</span>
        </a>
      </div>
    </div>
  );
}

export default function BrideGroom({ root }: BrideGroomProps) {
  const headerRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-20 px-6 bg-cream overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-coral/15 shape-blob animate-float" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-teal/15 shape-blob-2 animate-float" style={{ animationDelay: '1.5s' }} />

      <div ref={headerRef} className="reveal text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 bg-ink rounded-full px-4 py-1.5 mb-4">
          <HeartIcon className="w-4 h-4 text-coral" />
          <p className="font-rounded text-xs tracking-wider uppercase text-white">Bismillahirrahmanirrahim</p>
        </div>
        <h2 className="font-script text-5xl text-coral mb-3">Pasangan Bahagia</h2>
        <p className="font-rounded text-sm text-ink/70 max-w-md mx-auto leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
          pernikahan putra-putri kami.
        </p>
        <Divider className="mt-6" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 relative z-10">
        <PersonCard person={COUPLE.bride} side="left" root={root} />

        <div className="flex flex-col items-center animate-bounce-soft">
          <div className="w-14 h-14 rounded-full bg-sunny border-3 border-ink flex items-center justify-center shadow-md">
            <HeartIcon className="w-7 h-7 text-coral" />
          </div>
          <span className="font-script text-4xl text-coral mt-2">&amp;</span>
        </div>

        <PersonCard person={COUPLE.groom} side="right" root={root} />
      </div>
    </section>
  );
}
