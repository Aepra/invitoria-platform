import { useState } from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
import { Gift, Copy, Check, MapPin } from 'lucide-react';

export function GiftSection() {
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText(weddingData.gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-royal-900 via-royal-800 to-royal-900 py-20">
      <Particles count={10} />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-gold-gradient">
            Wedding Gift
          </h2>
          <p className="reveal text-ivory/60 font-serif text-lg italic mt-4 max-w-md mx-auto">
            Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda kasih, kami sediakan informasi berikut.
          </p>
        </div>

        {/* Bank card */}
        <div className="reveal-blur glass-panel-dark rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-6 h-6 text-gold-400" />
            <p className="text-gold-300 text-sm tracking-widest uppercase">Amplop Digital</p>
          </div>

          <div className="flex items-center justify-between p-5 rounded-xl bg-royal-900/50 border border-gold-400/20">
            <div>
              <p className="text-gold-200/60 text-xs uppercase tracking-wider mb-1">{weddingData.gift.bank}</p>
              <p className="text-ivory font-serif text-2xl tracking-wider mb-1">{weddingData.gift.accountNumber}</p>
              <p className="text-ivory/70 font-serif text-sm">a.n. {weddingData.gift.accountName}</p>
            </div>
            <button
              onClick={copyAccount}
              className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300 hover:bg-gold-400/20 transition-all shrink-0"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Address card */}
        <div className="reveal glass-panel-dark rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-gold-400" />
            <p className="text-gold-300 text-sm tracking-widest uppercase">Kirim Hadiah</p>
          </div>
          <p className="text-ivory/75 font-serif text-sm leading-relaxed">
            {weddingData.gift.address}
          </p>
        </div>
      </div>
    </section>
  );
}
