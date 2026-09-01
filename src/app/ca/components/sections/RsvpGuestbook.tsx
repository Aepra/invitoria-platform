import { useEffect, useState } from 'react';
import { Check, Loader2, Send, Heart, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Divider, StarIcon } from '../../components/Ornament';
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
    <section className="relative py-20 px-6 bg-gradient-to-b from-mint/20 to-cream overflow-hidden">
      <StarIcon className="absolute top-10 left-10 w-8 h-8 text-sunny animate-wiggle" />

      <div ref={headerRef} className="reveal text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 bg-ink rounded-full px-4 py-1.5 mb-4">
          <MessageCircle className="w-4 h-4 text-coral" />
          <p className="font-rounded text-xs tracking-wider uppercase text-white">RSVP &amp; Ucapan</p>
        </div>
        <h2 className="font-script text-5xl text-coral mb-3">Kirim Doa &amp; Konfirmasi</h2>
        <Divider />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Form */}
        <div ref={formRef} className="reveal-left">
          <div className="cartoon-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-rounded text-xs font-bold uppercase text-ink/70 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-cream border-3 border-ink/20 focus:border-coral outline-none transition font-rounded text-sm text-ink placeholder:text-ink/40"
                />
              </div>

              <div>
                <label className="block font-rounded text-xs font-bold uppercase text-ink/70 mb-2">
                  Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['hadir', 'tidak'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAttendance(opt)}
                      className={`px-4 py-3 rounded-xl font-rounded font-bold text-sm transition-all duration-200 border-3 ${
                        attendance === opt
                          ? 'bg-coral text-white border-ink shadow-md -translate-y-0.5'
                          : 'bg-cream text-ink/60 border-ink/20 hover:border-coral/50'
                      }`}
                    >
                      {opt === 'hadir' ? 'Insya Allah Hadir!' : 'Berhalangan'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-rounded text-xs font-bold uppercase text-ink/70 mb-2">
                  Ucapan &amp; Doa
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-cream border-3 border-ink/20 focus:border-coral outline-none transition font-rounded text-sm text-ink placeholder:text-ink/40 resize-none"
                />
              </div>

              {error && (
                <div className="cartoon-card-coral px-4 py-2">
                  <p className="text-white text-xs font-rounded">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="cartoon-btn w-full bg-ink text-white font-display font-bold text-sm uppercase px-6 py-3.5 inline-flex items-center justify-center gap-2 hover:bg-coral disabled:opacity-60"
              >
                {submitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : success ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {success ? 'Terkirim!' : 'Kirim Ucapan'}
              </button>
            </form>
          </div>
        </div>

        {/* Wishes list */}
        <div ref={listRef} className="reveal-right">
          <div className="cartoon-card p-6 sm:p-8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-coral flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-ink text-lg">Ucapan Tamu</h3>
              <span className="ml-auto text-xs font-rounded text-ink/50 bg-cream px-2 py-1 rounded-full">{wishes.length} ucapan</span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 max-h-[420px] pr-1">
              {loadingWishes ? (
                <div className="flex items-center justify-center py-10">
                  <Loader2 className="w-7 h-7 text-coral animate-spin" />
                </div>
              ) : wishes.length === 0 ? (
                <div className="text-center py-10">
                  <Heart className="w-10 h-10 text-coral/30 mx-auto mb-2" />
                  <p className="font-rounded text-sm text-ink/50">
                    Belum ada ucapan. Jadilah yang pertama!
                  </p>
                </div>
              ) : (
                wishes.map((w) => (
                  <div
                    key={w.id}
                    className="bg-cream rounded-2xl p-4 border-3 border-ink/10 animate-pop-in"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 rounded-full bg-coral border-2 border-ink flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                        {w.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-display font-bold text-ink text-sm leading-tight">{w.name}</p>
                        <p className="font-rounded text-[10px] text-ink/50">
                          {new Date(w.created_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="font-rounded text-sm text-ink/80 leading-relaxed pl-11">{w.message}</p>
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
