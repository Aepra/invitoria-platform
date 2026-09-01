import { Heart } from 'lucide-react';
import ParticleField from '../../components/ParticleField';
import { FlowerIcon, LeafCorner } from '../../components/Ornament';
import { COUPLE, WEDDING_DATE } from '../../lib/weddingData';

type CoverProps = {
  onOpen: () => void;
  guestName: string;
};

export default function Cover({ onOpen, guestName }: CoverProps) {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-bg"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/27008972/pexels-photo-27008972.jpeg?auto=compress&cs=tinysrgb&h=1200')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />

      {/* Corner ornaments */}
      <LeafCorner className="absolute top-0 left-0 w-32 h-32 text-secondary/70 rotate-0" />
      <LeafCorner className="absolute top-0 right-0 w-32 h-32 text-secondary/70 -scale-x-100" />
      <LeafCorner className="absolute bottom-0 left-0 w-32 h-32 text-secondary/70 -scale-y-100" />
      <LeafCorner className="absolute bottom-0 right-0 w-32 h-32 text-secondary/70 -scale-100" />

      <ParticleField count={20} />

      {/* Content */}
      <div className="relative z-10 text-center text-secondary px-6 max-w-md">
        <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-90 mb-6 animate-float">
          The Wedding Of
        </p>

        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-px w-12 bg-secondary/60" />
          <FlowerIcon className="w-5 h-5 text-secondary animate-pulse-soft" />
          <span className="h-px w-12 bg-secondary/60" />
        </div>

        <h1 className="font-script text-6xl sm:text-7xl leading-tight drop-shadow-lg mb-2">
          {COUPLE.brideShort}
        </h1>
        <p className="font-serif italic text-2xl mb-2">&amp;</p>
        <h1 className="font-script text-6xl sm:text-7xl leading-tight drop-shadow-lg mb-6">
          {COUPLE.groomShort}
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-secondary/60" />
          <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse-soft" />
          <span className="h-px w-12 bg-secondary/60" />
        </div>

        <p className="font-serif text-lg italic mb-8">
          {WEDDING_DATE.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        {guestName && (
          <p className="font-sans text-sm mb-6 opacity-90">
            Kepada Yth. <br />
            <span className="font-serif text-xl italic block mt-1">{guestName}</span>
          </p>
        )}

        <button
          onClick={onOpen}
          className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary/90 text-dark font-sans text-sm tracking-wider uppercase shadow-lg hover:bg-secondary hover:scale-105 transition-all duration-300"
        >
          <Heart className="w-4 h-4 group-hover:scale-125 transition-transform" />
          Buka Undangan
        </button>
      </div>
    </section>
  );
}
