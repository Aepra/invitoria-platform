import { useState } from 'react';
import { Gift as GiftIcon, Copy, Check, MapPin } from 'lucide-react';
import { GIFT } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon } from '../../components/Ornament';

type GiftProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function GiftSection({ root }: GiftProps) {
  const [copied, setCopied] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>(root);

  const handleCopy = () => {
    navigator.clipboard.writeText(GIFT.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-cream to-sunny/20 overflow-hidden">
      <StarIcon className="absolute top-10 right-10 w-10 h-10 text-coral animate-wiggle" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal/15 shape-blob animate-float" />

      <div ref={ref} className="reveal-scale text-center max-w-lg mx-auto relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-coral border-3 border-ink animate-bounce-soft">
          <GiftIcon className="w-8 h-8 text-white" />
        </div>

        <div className="inline-flex items-center gap-2 bg-ink rounded-full px-4 py-1.5 mb-4">
          <GiftIcon className="w-4 h-4 text-sunny" />
          <p className="font-rounded text-xs tracking-wider uppercase text-white">Wedding Gift</p>
        </div>
        <h2 className="font-script text-5xl text-coral mb-4">Hadiah Pernikahan</h2>
        <p className="font-rounded text-sm text-ink/70 mb-8 leading-relaxed">
          Doa restu Anda adalah hadiah terindah. Namun, jika ingin memberikan tanda kasih,
          kami sediakan opsi berikut dengan tulus.
        </p>

        <Divider className="mb-8" />

        <div className="cartoon-card-coral p-6 sm:p-8 max-w-sm mx-auto">
          <p className="font-rounded text-xs tracking-wider uppercase text-white/80 mb-1">{GIFT.bank}</p>
          <p className="font-display font-bold text-2xl tabular-nums tracking-wider text-white mb-1">{GIFT.accountNumber}</p>
          <p className="font-rounded italic text-white/80 mb-5">a.n. {GIFT.accountName}</p>

          <button
            onClick={handleCopy}
            className="cartoon-btn bg-white text-ink font-display font-bold text-xs tracking-wider uppercase px-5 py-2.5 inline-flex items-center gap-2 hover:bg-sunny"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Tersalin!' : 'Salin Nomor'}
          </button>
        </div>

        <div className="cartoon-card mt-6 text-left p-5 max-w-sm mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-coral" />
            <p className="font-rounded text-xs font-bold uppercase text-ink/70">Kirim Hadiah Fisik</p>
          </div>
          <p className="font-rounded text-sm text-ink/80 whitespace-pre-line leading-relaxed">
            {GIFT.address}
          </p>
        </div>
      </div>
    </section>
  );
}
