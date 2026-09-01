'use client';
import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { BloomDivider, Garland } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Petals } from '../Petals';
import { Gift as GiftIcon, Copy, Check, MapPin } from 'lucide-react';

export function Gift() {
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText(weddingData.gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image={weddingData.coverPhoto}
        speed={0.18}
        overlay="to bottom, rgba(250,246,236,.94), rgba(250,246,236,.74) 60%, rgba(250,246,236,.96)"
        className="absolute inset-0"
      />
      <Garland className="absolute -left-6 top-0 w-[62%] opacity-60 z-[2] animate-sway-soft" />
      <Petals count={10} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer">Wedding Gift</h2>
          <p className="font-body text-ink-600 italic mt-2 max-w-md mx-auto">
            Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda kasih, kami
            sediakan informasi berikut.
          </p>
        </div>

        <ParallaxItem speed={-0.05} className="rise glow-pulse rounded-[2rem] bg-white/80 backdrop-blur-md border border-sage-200/70 shadow-[0_20px_50px_-25px_rgba(49,87,65,0.45)] p-6 sm:p-8 mb-5">
          <div className="flex items-center gap-3 mb-5">
            <GiftIcon className="w-6 h-6 text-clay-500 beat" />
            <p className="font-display tracking-wider uppercase text-sage-700 text-sm">Amplop Digital</p>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-sage-50/80 border border-sage-200 p-5">
            <div>
              <p className="font-body text-sage-600 text-xs uppercase tracking-wider mb-1">{weddingData.gift.bank}</p>
              <p className="font-display text-2xl text-ink-700 tracking-wider mb-1">{weddingData.gift.accountNumber}</p>
              <p className="font-body text-ink-600 text-sm">a.n. {weddingData.gift.accountName}</p>
            </div>
            <button
              onClick={copyAccount}
              className="w-12 h-12 rounded-full bg-clay-600 text-cream-50 flex items-center justify-center shadow-lg shadow-clay-600/25 hover:bg-clay-700 hover:scale-105 transition-all shrink-0"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </ParallaxItem>

        <ParallaxItem speed={0.05} className="swing glow-pulse rounded-[2rem] bg-white/80 backdrop-blur-md border border-sage-200/70 shadow-[0_20px_50px_-25px_rgba(49,87,65,0.45)] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-clay-500" />
            <p className="font-display tracking-wider uppercase text-sage-700 text-sm">Kirim Hadiah</p>
          </div>
          <p className="font-body text-ink-600 text-sm leading-relaxed">{weddingData.gift.address}</p>
        </ParallaxItem>
      </div>
    </section>
  );
}