import { Heart, Zap } from 'lucide-react';
import { COUPLE } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type FooterProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Footer({ root }: FooterProps) {
  const ref = useScrollReveal<HTMLDivElement>(root);

  return (
    <footer className="relative py-24 px-6 bg-comic-ink text-comic-white overflow-hidden text-center border-t-8 border-comic-red">
      
      {/* Action background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-halftone-cyan opacity-20" />

      <div ref={ref} className="reveal-scale relative z-10 max-w-2xl mx-auto">
        
        <div className="inline-block bg-comic-red px-6 py-2 border-4 border-comic-white mb-6 transform rotate-2 shadow-[6px_6px_0_0_#FACC15]">
          <p className="font-comic-head text-3xl tracking-widest uppercase">
            THE END
          </p>
        </div>

        <p className="font-comic-body font-bold text-lg mb-8 max-w-md mx-auto bg-comic-white text-comic-ink p-4 border-4 border-comic-ink transform -rotate-1 shadow-[6px_6px_0_0_#06B6D4]">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir untuk memberikan doa restu.
        </p>

        <p className="font-comic-head text-2xl tracking-widest text-comic-cyan uppercase mb-2">
          Kami yang berbahagia
        </p>

        <h2 className="font-comic-head text-6xl text-comic-yellow mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
          {COUPLE.brideShort} <span className="text-comic-red">&amp;</span> {COUPLE.groomShort}
        </h2>

        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-16 h-1 bg-comic-white" />
          <Zap className="w-6 h-6 text-comic-yellow fill-comic-yellow animate-action-shake" />
          <span className="w-16 h-1 bg-comic-white" />
        </div>

        <div className="mt-12 bg-comic-ink border-2 border-comic-white p-2 inline-block">
          <p className="font-comic-body font-bold text-xs uppercase tracking-widest">
            Created with <Heart className="w-3 h-3 inline text-comic-red fill-comic-red" /> by Invitoria
          </p>
        </div>
      </div>
    </footer>
  );
}
