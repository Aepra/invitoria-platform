import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider, RoseOrnament } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';
import { Gift, Copy, Check, MapPin } from 'lucide-react';

export function GiftSection() {
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText(weddingData.gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[url('/images/parallax/bg-sakura.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <LightOrbs count={8} />
      <Particles count={10} type="petal" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-12 bg-white/80 backdrop-blur-md border border-white/50 rounded-[32px] py-10 px-6 max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-slate-800 drop-shadow-sm">
            Wedding Gift
          </h2>
          <p className="reveal text-slate-600 font-display text-lg italic mt-4 max-w-md mx-auto font-medium">
            Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda kasih, kami sediakan informasi berikut.
          </p>
        </div>

        {/* Bank card */}
        <div className="reveal-blur bg-white/85 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-[32px] p-8 mb-6 soft-aura">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-6 h-6 text-rose-500" />
            <p className="text-rose-500 text-sm tracking-widest uppercase">Amplop Digital</p>
          </div>

          <div className="flex items-center justify-between p-5 rounded-xl bg-cream/50 border border-gold-medium/20">
            <div>
              <p className="text-rose-400/60 text-xs uppercase tracking-wider mb-1">{weddingData.gift.bank}</p>
              <p className="text-ink font-display text-2xl tracking-wider mb-1">{weddingData.gift.accountNumber}</p>
              <p className="text-ink/70 font-display text-sm">a.n. {weddingData.gift.accountName}</p>
            </div>
            <button
              onClick={copyAccount}
              className="w-12 h-12 rounded-full border border-gold-medium/40 flex items-center justify-center text-rose-500 hover:bg-petal/40 transition-all shrink-0"
            >
              {copied ? <Check className="w-5 h-5 text-rose-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Address card */}
        <div className="reveal bg-white/85 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-[32px] p-8 soft-aura">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-rose-500" />
            <p className="text-rose-500 text-sm tracking-widest uppercase">Kirim Hadiah</p>
          </div>
          <p className="text-ink/70 font-display text-sm leading-relaxed">
            {weddingData.gift.address}
          </p>
        </div>

        <div className="reveal-scale mt-8 flex justify-center">
          <RoseOrnament className="w-8 h-8 animate-soft-pulse" />
        </div>
      </div>
    </section>
  );
}
