'use client';
import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { Gift, Copy, Check } from 'lucide-react';

export function GiftSection() {
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText(weddingData.gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-24 bg-fine-ivory px-6 overflow-hidden text-center border-t border-fine">
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="reveal-scale mb-12">
          <p className="text-fine-sage text-xs tracking-[0.3em] uppercase font-fine-sans mb-4">
            Wedding Gift
          </p>
          <h2 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-6">
            Tanda Kasih
          </h2>
          <div className="w-12 h-[1px] bg-fine-charcoal/30 mx-auto mb-6" />
          <p className="text-fine-charcoal/70 font-fine-sans text-sm font-light leading-relaxed px-4">
            Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda kasih, kami sediakan informasi berikut.
          </p>
        </div>

        {/* Bank card */}
        <div className="reveal bg-white border border-fine shadow-sm p-8 max-w-sm mx-auto">
          <Gift className="w-6 h-6 text-fine-gold mx-auto mb-6 opacity-80" />

          <p className="text-fine-charcoal/60 text-[10px] uppercase tracking-[0.2em] font-fine-sans mb-1">{weddingData.gift.bank}</p>
          <p className="text-fine-charcoal font-fine-serif text-2xl tracking-widest mb-1">{weddingData.gift.accountNumber}</p>
          <p className="text-fine-charcoal/80 font-fine-sans text-xs uppercase tracking-wider mb-8">A.N. {weddingData.gift.accountName}</p>
          
          <button
            onClick={copyAccount}
            className="flex items-center justify-center gap-2 w-full py-3 border border-fine-charcoal text-fine-charcoal text-xs tracking-[0.2em] uppercase hover:bg-fine-charcoal hover:text-fine-ivory transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Tersalin
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Salin Rekening
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
