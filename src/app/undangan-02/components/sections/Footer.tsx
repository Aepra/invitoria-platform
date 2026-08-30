import { Heart } from 'lucide-react';
import { COUPLE, WEDDING_DATE, QUOTES } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, FlowerIcon, LeafCorner } from '../../components/Ornament';
import ParticleField from '../../components/ParticleField';

type FooterProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Footer({ root }: FooterProps) {
  const ref = useScrollReveal<HTMLDivElement>(root);

  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-dark to-[#3a0a18] text-secondary overflow-hidden">
      <LeafCorner className="absolute top-6 left-6 w-24 h-24 text-primary/20" />
      <LeafCorner className="absolute top-6 right-6 w-24 h-24 text-primary/20 -scale-x-100" />
      <ParticleField count={12} />

      <div ref={ref} className="reveal text-center max-w-xl mx-auto relative z-10">
        <FlowerIcon className="w-10 h-10 text-primary mx-auto mb-6 animate-pulse-soft" />

        <p className="font-serif italic text-secondary/80 text-lg leading-relaxed mb-3">
          &ldquo;{QUOTES[0].text}&rdquo;
        </p>
        <p className="font-sans text-xs tracking-wider text-primary mb-10">{QUOTES[0].source}</p>

        <Divider className="mb-10 [&_*]:text-primary" />

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-secondary/70 mb-4">
          Wassalamualaikum Wr. Wb.
        </p>

        <h2 className="font-script text-5xl mb-1">{COUPLE.brideShort}</h2>
        <p className="font-serif text-2xl italic mb-1">&amp;</p>
        <h2 className="font-script text-5xl mb-6">{COUPLE.groomShort}</h2>

        <p className="font-serif italic text-secondary/70 mb-1">
          {WEDDING_DATE.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <p className="font-sans text-xs tracking-wider text-secondary/50 mt-10 flex items-center justify-center gap-1.5">
          Dibuat dengan <Heart className="w-3 h-3 text-primary fill-primary" /> untuk hari bahagia kami
        </p>
      </div>
    </footer>
  );
}
