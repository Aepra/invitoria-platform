import { Heart } from 'lucide-react';
import ConfettiField from '@/components/ConfettiField';
import { StarIcon, HeartIcon, CloudShape } from '@/components/Ornament';
import { COUPLE, WEDDING_DATE } from '@/lib/weddingData';

type CoverProps = {
  onOpen: () => void;
  guestName: string;
};

export default function Cover({ onOpen, guestName }: CoverProps) {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-coral/30 shape-blob animate-float" />
      <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-teal/30 shape-blob-2 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-sunny/40 shape-blob-3 animate-bounce-soft" />
      <div className="absolute bottom-1/4 left-8 w-20 h-20 bg-grape/30 shape-blob animate-bounce-soft" style={{ animationDelay: '0.5s' }} />

      {/* Clouds */}
      <CloudShape className="absolute top-10 right-10 w-24 h-16 text-white/60 animate-float" />
      <CloudShape className="absolute bottom-20 left-10 w-20 h-14 text-white/60 animate-float" style={{ animationDelay: '2s' }} />

      <ConfettiField count={15} />

      {/* Content card */}
      <div className="relative z-10 text-center px-6 max-w-md">
        {/* Floating stars */}
        <StarIcon className="absolute -top-2 -left-4 w-8 h-8 text-sunny animate-wiggle" />
        <StarIcon className="absolute top-0 -right-4 w-6 h-6 text-coral animate-wiggle" style={{ animationDelay: '0.3s' }} />
        <StarIcon className="absolute bottom-0 -left-6 w-5 h-5 text-teal animate-wiggle" style={{ animationDelay: '0.6s' }} />

        <div className="cartoon-card bg-white p-8 sm:p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-coral animate-bounce-soft">
            <HeartIcon className="w-8 h-8 text-white" />
          </div>

          <p className="font-rounded text-sm tracking-[0.2em] uppercase text-ink/60 mb-4">
            We Are Getting Married!
          </p>

          <h1 className="font-script text-5xl sm:text-6xl text-coral leading-tight mb-1">
            {COUPLE.brideShort}
          </h1>
          <div className="flex items-center justify-center gap-2 my-1">
            <span className="h-1 w-8 rounded-full bg-ink/20" />
            <Heart className="w-5 h-5 text-coral fill-coral animate-bounce-soft" />
            <span className="h-1 w-8 rounded-full bg-ink/20" />
          </div>
          <h1 className="font-script text-5xl sm:text-6xl text-teal leading-tight mb-5">
            {COUPLE.groomShort}
          </h1>

          <div className="inline-block cartoon-card-sunny px-5 py-2 mb-5">
            <p className="font-display font-bold text-ink">
              {WEDDING_DATE.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {guestName && (
            <div className="cartoon-card-teal px-5 py-3 mb-5">
              <p className="font-rounded text-xs text-white/90 mb-1">Kepada Yth.</p>
              <p className="font-display font-bold text-white text-lg">{guestName}</p>
            </div>
          )}

          <button
            onClick={onOpen}
            className="cartoon-btn bg-coral text-white font-display font-bold text-base px-8 py-3.5 inline-flex items-center gap-2 hover:bg-teal"
          >
            <Heart className="w-5 h-5 fill-white" />
            Buka Undangan
          </button>
        </div>
      </div>
    </section>
  );
}
