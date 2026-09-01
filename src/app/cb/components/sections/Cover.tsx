import { Heart, Zap } from 'lucide-react';
import ConfettiField from '../../components/ConfettiField';
import { COUPLE, WEDDING_DATE } from '../../lib/weddingData';

type CoverProps = {
  onOpen: () => void;
  guestName: string;
};

export default function Cover({ onOpen, guestName }: CoverProps) {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden bg-halftone-cyan">
      
      {/* Background Action Elements */}
      <div className="absolute top-10 left-[-40px] w-60 h-60 bg-comic-yellow pow-shape opacity-80 animate-comic-float" />
      <div className="absolute bottom-[-20px] right-[-20px] w-72 h-72 bg-comic-red pow-shape opacity-80 animate-comic-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-comic-white border-4 border-comic-ink pow-shape animate-action-shake" />
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-comic-yellow border-4 border-comic-ink pow-shape animate-action-shake" style={{ animationDelay: '0.5s' }} />

      <ConfettiField count={10} />

      {/* Content panel */}
      <div className="relative z-10 text-center px-4 max-w-sm w-full">
        
        <div className="comic-panel p-6 sm:p-8 bg-comic-white relative animate-pow">
          
          {/* Top zap */}
          <div className="absolute -top-6 -left-4 bg-comic-yellow border-4 border-comic-ink p-2 rounded-full rotate-12 animate-action-shake">
            <Zap className="w-8 h-8 text-comic-ink fill-comic-ink" />
          </div>

          <div className="bg-comic-ink text-comic-yellow px-4 py-1 border-2 border-comic-white -rotate-2 inline-block mb-6 shadow-[4px_4px_0_0_#EF4444]">
            <p className="font-comic-head text-lg tracking-widest uppercase">
              You're Invited!
            </p>
          </div>

          <h1 className="font-comic-head text-5xl sm:text-6xl text-comic-red leading-none mb-1 drop-shadow-[2px_2px_0_rgba(17,24,39,1)]">
            {COUPLE.brideShort}
          </h1>
          <div className="flex items-center justify-center gap-2 my-2">
            <span className="font-comic-head text-2xl text-comic-ink">&amp;</span>
          </div>
          <h1 className="font-comic-head text-5xl sm:text-6xl text-comic-cyan leading-none mb-6 drop-shadow-[2px_2px_0_rgba(17,24,39,1)]">
            {COUPLE.groomShort}
          </h1>

          <div className="inline-block bg-comic-yellow px-6 py-2 border-4 border-comic-ink mb-6 transform rotate-2">
            <p className="font-comic-marker font-bold text-comic-ink text-xl">
              {WEDDING_DATE.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {guestName && (
            <div className="comic-panel-red px-5 py-3 mb-6 transform -rotate-1 text-comic-white">
              <p className="font-comic-body font-bold text-sm mb-1 uppercase tracking-wider">Dear Guest:</p>
              <p className="font-comic-head text-2xl tracking-widest">{guestName}</p>
            </div>
          )}

          <button
            onClick={onOpen}
            className="comic-btn w-full py-4 text-xl flex items-center justify-center gap-2"
          >
            <Heart className="w-6 h-6 fill-comic-white" />
            OPEN INVITATION!
          </button>
        </div>
      </div>
    </section>
  );
}
