import { useState } from 'react';
import { Gift, Copy, Check, MapPin } from 'lucide-react';
import { GIFT } from '../../lib/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type GiftSectionProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function GiftSection({ root }: GiftSectionProps) {
  const [copied, setCopied] = useState(false);
  const headerRef = useScrollReveal<HTMLDivElement>(root);
  const cardRef = useScrollReveal<HTMLDivElement>(root);

  const copyAccount = () => {
    navigator.clipboard.writeText(GIFT.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 px-6 bg-halftone-yellow overflow-hidden">
      
      {/* Action background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-[800px] bg-comic-white pow-shape opacity-60 animate-comic-float" />

      <div ref={headerRef} className="reveal text-center mb-12 relative z-10">
        <div className="inline-block bg-comic-red px-6 py-2 border-4 border-comic-ink mb-4 transform -rotate-3 shadow-[4px_4px_0_0_#111827]">
          <p className="font-comic-head text-xl tracking-widest text-comic-white uppercase">Wedding Gift</p>
        </div>
        <h2 className="font-comic-head text-5xl sm:text-6xl text-comic-ink mb-3 uppercase">
          Tanda Kasih
        </h2>
        <p className="font-comic-body font-bold text-comic-ink max-w-md mx-auto bg-comic-white p-2 border-2 border-comic-ink">
          Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih dapat melalui:
        </p>
      </div>

      <div ref={cardRef} className="reveal-scale relative z-10 max-w-md mx-auto">
        <div className="comic-panel-cyan p-8 transform rotate-1 relative mt-8">
          
          <div className="absolute -top-8 -right-4 w-20 h-20 bg-comic-yellow border-4 border-comic-ink rounded-full flex items-center justify-center animate-action-shake shadow-[4px_4px_0_0_#111827]">
            <Gift className="w-10 h-10 text-comic-ink" />
          </div>

          <div className="bg-comic-white border-4 border-comic-ink p-6 transform -rotate-2 shadow-[4px_4px_0_0_#111827] mb-8 mt-4">
            <p className="font-comic-head text-2xl text-comic-red mb-2 uppercase tracking-widest">{GIFT.bank}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-comic-marker text-3xl text-comic-ink mb-1">{GIFT.accountNumber}</p>
                <p className="font-comic-body font-bold text-sm text-comic-ink/80">a.n. {GIFT.accountName}</p>
              </div>
              
              <button
                onClick={copyAccount}
                className="w-12 h-12 flex items-center justify-center bg-comic-yellow border-4 border-comic-ink hover:bg-comic-red hover:text-comic-white transition-colors"
                title="Salin Nomor Rekening"
              >
                {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </button>
            </div>
            {copied && (
              <p className="text-comic-red font-comic-body font-bold text-xs mt-2 text-center">Tersalin ke clipboard!</p>
            )}
          </div>

          <div className="bg-comic-white border-4 border-comic-ink p-6 transform rotate-1 shadow-[4px_4px_0_0_#111827]">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-6 h-6 text-comic-red" />
              <p className="font-comic-head text-xl text-comic-red uppercase">Kirim Hadiah</p>
            </div>
            <p className="font-comic-body font-bold text-sm text-comic-ink leading-relaxed">
              {GIFT.address}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
