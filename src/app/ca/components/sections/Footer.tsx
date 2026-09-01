import { Heart } from 'lucide-react';
import { COUPLE, WEDDING_DATE, QUOTES } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon, HeartIcon } from '../../components/Ornament';
import ConfettiField from '../../components/ConfettiField';

type FooterProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Footer({ root }: FooterProps) {
  const ref = useScrollReveal<HTMLDivElement>(root);

  return (
    <footer className="relative py-20 px-6 bg-ink text-white overflow-hidden">
      <ConfettiField count={15} />

      {/* Floating stars */}
      <StarIcon className="absolute top-10 left-10 w-8 h-8 text-sunny animate-float" />
      <StarIcon className="absolute top-20 right-16 w-6 h-6 text-coral animate-float" style={{ animationDelay: '1s' }} />
      <StarIcon className="absolute bottom-20 left-20 w-5 h-5 text-teal animate-float" style={{ animationDelay: '2s' }} />

      <div ref={ref} className="reveal text-center max-w-xl mx-auto relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-full bg-coral border-3 border-white animate-bounce-soft">
          <HeartIcon className="w-7 h-7 text-white" />
        </div>

        {/* Quote */}
        <div className="cartoon-card bg-white p-6 mb-8">
          <p className="font-rounded italic text-ink/80 text-sm leading-relaxed mb-2">
            &ldquo;{QUOTES[0].text}&rdquo;
          </p>
          <p className="font-display font-bold text-coral text-sm">{QUOTES[0].source}</p>
        </div>

        <Divider className="mb-8 [&_*]:text-sunny" />

        <p className="font-rounded text-xs tracking-[0.2em] uppercase text-white/70 mb-4">
          Wassalamualaikum Wr. Wb.
        </p>

        <h2 className="font-script text-5xl text-sunny mb-1">{COUPLE.brideShort}</h2>
        <p className="font-display font-bold text-2xl text-white/80 mb-1">&amp;</p>
        <h2 className="font-script text-5xl text-coral mb-6">{COUPLE.groomShort}</h2>

        <div className="inline-block cartoon-card-sunny px-5 py-2 mb-6">
          <p className="font-display font-bold text-ink">
            {WEDDING_DATE.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        <p className="font-rounded text-xs text-white/50 mt-6 flex items-center justify-center gap-1.5">
          Dibuat dengan <Heart className="w-3 h-3 text-coral fill-coral" /> untuk hari bahagia kami
        </p>
      </div>
    </footer>
  );
}
