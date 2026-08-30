import { useEffect, useState } from 'react';
import { Check, Loader2, Send, Heart, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, LeafCorner } from '../../components/Ornament';
import { addWish, fetchWishes, type Wish } from '../../lib/supabase';

type RsvpGuestbookProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function RsvpGuestbook({ root }: RsvpGuestbookProps) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak'>('hadir');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);

  const headerRef = useScrollReveal<HTMLDivElement>(root);
  const formRef = useScrollReveal<HTMLDivElement>(root);
  const listRef = useScrollReveal<HTMLDivElement>(root);

  useEffect(() => {
    let mounted = true;
    fetchWishes()
      .then((w) => mounted && setWishes(w))
      .catch(() => mounted && setError('Tidak dapat memuat ucapan.'))
      .finally(() => mounted && setLoadingWishes(false));
    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const newWish = await addWish(name.trim(), message.trim());
      setWishes((prev) => [newWish, ...prev]);
      setName('');
      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Gagal mengirim. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-secondary/30 to-light overflow-hidden">
      <LeafCorner className="absolute bottom-8 right-8 w-20 h-20 text-primary/25 -scale-100" />

      <div ref={headerRef} className="reveal text-center mb-12">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
          RSVP &amp; Ucapan
        </p>
        <h2 className="font-script text-5xl text-dark mb-4">Kirim Doa &amp; Konfirmasi</h2>
        <Divider />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div ref={formRef} className="reveal-left">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-sans text-xs tracking-wider uppercase text-dark/70 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition font-sans text-sm text-dark placeholder:text-dark/40"
                />
              </div>

              <div>
                <label className="block font-sans text-xs tracking-wider uppercase text-dark/70 mb-2">
                  Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['hadir', 'tidak'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAttendance(opt)}
                      className={`px-4 py-3 rounded-xl font-sans text-sm tracking-wide transition-all duration-300 ${
                        attendance === opt
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white/60 text-dark/70 border border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      {opt === 'hadir' ? 'Insya Allah Hadir' : 'Berhalangan'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs tracking-wider uppercase text-dark/70 mb-2">
                  Ucapan &amp; Doa
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition font-sans text-sm text-dark placeholder:text-dark/40 resize-none"
                />
              </div>

              {error && <p className="text-red-600 text-xs font-sans">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark text-secondary font-sans text-sm tracking-wider uppercase hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-60"
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : success ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {success ? 'Terkirim!' : 'Kirim Ucapan'}
              </button>
            </form>
          </div>
        </div>

        {/* Wishes list */}
        <div ref={listRef} className="reveal-right">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-xl text-dark">Ucapan Tamu</h3>
              <span className="ml-auto text-xs font-sans text-dark/50">{wishes.length} ucapan</span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 max-h-[420px] pr-1">
              {loadingWishes ? (
                <div className="flex items-center justify-center py-10">
                  <Loader2 className="w-6 h-6 text-primary animate-spin" />
                </div>
              ) : wishes.length === 0 ? (
                <div className="text-center py-10">
                  <Heart className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                  <p className="font-serif italic text-sm text-dark/60">
                    Belum ada ucapan. Jadilah yang pertama!
                  </p>
                </div>
              ) : (
                wishes.map((w) => (
                  <div
                    key={w.id}
                    className="bg-white/60 rounded-2xl p-4 border border-primary/15 animate-fade-in"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif text-sm shrink-0">
                        {w.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-serif text-sm font-semibold text-dark leading-tight">
                          {w.name}
                        </p>
                        <p className="font-sans text-[10px] text-dark/50">
                          {new Date(w.created_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-dark/80 leading-relaxed pl-10">{w.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
