import { useState } from 'react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { GIFT } from '@/lib/weddingData';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Divider, LeafCorner } from '@/components/Ornament';

type GiftProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function Gift({ root }: GiftProps) {
  const [copied, setCopied] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>(root);

  const handleCopy = () => {
    navigator.clipboard.writeText(GIFT.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 px-6 bg-dark text-secondary overflow-hidden">
      <LeafCorner className="absolute top-8 left-8 w-20 h-20 text-primary/30" />
      <LeafCorner className="absolute bottom-8 right-8 w-20 h-20 text-primary/30 -scale-100" />

      <div ref={ref} className="reveal-blur text-center max-w-lg mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-primary/20 animate-pulse-soft">
          <GiftIcon className="w-8 h-8 text-primary" />
        </div>

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
          Wedding Gift
        </p>
        <h2 className="font-script text-5xl mb-4">Hadiah Pernikahan</h2>
        <p className="font-serif italic text-secondary/70 mb-8">
          Doa restu Anda adalah hadiah terindah. Namun, jika ingin memberikan tanda kasih,
          kami sediakan opsi berikut dengan tulus.
        </p>

        <Divider className="mb-8 [&_*]:text-primary" />

        <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 max-w-sm mx-auto">
          <p className="font-sans text-xs tracking-wider uppercase text-primary mb-1">{GIFT.bank}</p>
          <p className="font-serif text-2xl tabular-nums tracking-wider mb-1">{GIFT.accountNumber}</p>
          <p className="font-serif italic text-secondary/80 mb-5">a.n. {GIFT.accountName}</p>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs tracking-wider uppercase hover:bg-secondary hover:text-dark transition-all duration-300"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Tersalin!' : 'Salin Nomor'}
          </button>
        </div>

        <div className="mt-8 text-left bg-secondary/10 rounded-2xl p-5 max-w-sm mx-auto">
          <p className="font-sans text-xs tracking-wider uppercase text-primary mb-2">
            Kirim Hadiah Fisik
          </p>
          <p className="font-serif text-sm text-secondary/80 whitespace-pre-line leading-relaxed">
            {GIFT.address}
          </p>
        </div>
      </div>
    </section>
  );
}
