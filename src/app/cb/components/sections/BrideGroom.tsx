import { Camera, Coffee, Gamepad2, Zap } from 'lucide-react';
import { COUPLE } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

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
  const cardColor = side === 'left' ? 'comic-panel-cyan' : 'comic-panel-yellow';
  const textColor = side === 'left' ? 'text-comic-white' : 'text-comic-ink';
  const iconColor = side === 'left' ? 'text-comic-white' : 'text-comic-ink';
  const bgColor = side === 'left' ? 'bg-comic-ink/20' : 'bg-comic-white/50 border-2 border-comic-ink';
  
  const icon = side === 'left' ? <Coffee className={`w-5 h-5 ${iconColor}`} /> : <Gamepad2 className={`w-5 h-5 ${iconColor}`} />;

  return (
    <div ref={ref} className={`${revealClass} flex flex-col items-center text-center max-w-sm w-full`}>
      {/* Photo with comic frame */}
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-comic-red pow-shape animate-action-shake" style={{ animationDelay: side === 'left' ? '0s' : '1s' }} />
        <img
          src={person.photo}
          alt={person.name}
          className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-none object-cover border-4 border-comic-ink shadow-[6px_6px_0_0_#111827] transform rotate-2 hover:-rotate-2 transition-transform"
        />
        {/* Bam text badge */}
        <div className={`absolute -bottom-4 ${side === 'left' ? '-left-4 rotate-12' : '-right-4 -rotate-12'} bg-comic-yellow border-4 border-comic-ink px-3 py-1 z-20`}>
          <span className="font-comic-head text-xl text-comic-ink">{side === 'left' ? 'BAM!' : 'POW!'}</span>
        </div>
      </div>

      <div className={`${cardColor} px-6 py-5 w-full relative z-10`}>
        <p className={`font-comic-body font-bold text-sm tracking-widest uppercase ${textColor} mb-1`}>{person.role}</p>
        <h3 className={`font-comic-head text-4xl tracking-wider ${textColor} mb-1 drop-shadow-md`}>{person.name}</h3>
        <p className={`font-comic-body ${textColor} mb-4 font-bold`}>{person.subtitle}</p>

        <div className={`rounded-none border-2 border-comic-ink px-3 py-2 mb-4 ${bgColor} transform -rotate-1`}>
          <p className={`font-comic-body font-bold text-sm ${textColor}`}>{person.parents.father}</p>
          <p className={`font-comic-body text-xs ${textColor} italic my-0.5`}>&amp;</p>
          <p className={`font-comic-body font-bold text-sm ${textColor}`}>{person.parents.mother}</p>
        </div>

        <div className={`flex items-center justify-center gap-2 border-2 border-comic-ink rounded-none px-3 py-2 mb-4 ${bgColor} transform rotate-1`}>
          {icon}
          <span className={`font-comic-body font-bold text-sm ${textColor}`}>{person.funFact}</span>
        </div>

        <a
          href={person.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity bg-comic-ink text-comic-yellow px-4 py-2 border-2 border-comic-white`}
        >
          <Camera className="w-5 h-5 text-comic-yellow" />
          <span className="font-comic-head tracking-widest text-comic-yellow">INSTAGRAM</span>
        </a>
      </div>
    </div>
  );
}

export default function BrideGroom({ root }: BrideGroomProps) {
  const headerRef = useScrollReveal<HTMLDivElement>(root);

  return (
    <section className="relative py-24 px-6 bg-comic-white overflow-hidden">
      
      {/* Halftone dots in corners */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-halftone-cyan opacity-40 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-halftone-yellow opacity-40 rounded-tr-full" />

      <div ref={headerRef} className="reveal text-center mb-16 relative z-10 max-w-2xl mx-auto">
        
        <div className="speech-bubble inline-block mb-6 transform -rotate-2">
          <p className="font-comic-head text-2xl tracking-widest text-comic-ink">
            MEET THE CAST!
          </p>
        </div>

        <h2 className="font-comic-head text-5xl sm:text-6xl text-comic-red mb-4 uppercase drop-shadow-[2px_2px_0_rgba(17,24,39,1)]">
          The Happy Couple
        </h2>
        <p className="font-comic-body font-bold text-lg text-comic-ink border-4 border-comic-ink p-4 bg-comic-yellow shadow-[6px_6px_0_0_#111827] transform rotate-1">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
          pernikahan putra-putri kami.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8 relative z-10 max-w-5xl mx-auto">
        <PersonCard person={COUPLE.bride} side="left" root={root} />

        <div className="flex flex-col items-center animate-action-shake z-20">
          <div className="w-16 h-16 bg-comic-red border-4 border-comic-ink flex items-center justify-center pow-shape shadow-[4px_4px_0_0_#111827]">
            <Zap className="w-8 h-8 text-comic-yellow fill-comic-yellow" />
          </div>
          <span className="font-comic-head text-4xl text-comic-ink mt-2 bg-comic-white px-2 border-2 border-comic-ink transform -rotate-12">&amp;</span>
        </div>

        <PersonCard person={COUPLE.groom} side="right" root={root} />
      </div>
    </section>
  );
}
