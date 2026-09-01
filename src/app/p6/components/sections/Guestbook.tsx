'use client';
import { useEffect, useState } from 'react';
import { BloomDivider } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Petals } from '../Petals';
import { Send, Loader2, User, CheckCircle2 } from 'lucide-react';

type Entry = { id: string; name: string; message: string; created_at: string };

const KEY = 'undangan_p6_wishes';

function load(): Entry[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch { return []; }
  }
  return [];
}

export function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setEntries(load());
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    const entry: Entry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      created_at: new Date().toISOString(),
    };
    setTimeout(() => {
      const next = [entry, ...load()];
      localStorage.setItem(KEY, JSON.stringify(next));
      setEntries(next);
      setName('');
      setMessage('');
      setSubmitting(false);
      setSent(true);
      setTimeout(() => setSent(false), 2500);
    }, 500);
  };

  return (
    <section id="ucapan" className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image="https://images.pexels.com/photos/12194048/pexels-photo-12194048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        speed={0.16}
        overlay="to bottom, rgba(250,246,236,.95), rgba(250,246,236,.72) 55%, rgba(250,246,236,.97)"
        className="absolute inset-0"
      />
      <Petals count={10} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-5xl text-ink-700">Ucapan &amp; Doa</h2>
          <p className="font-body text-ink-500 italic mt-2">Kirimkan doa restu untuk kami</p>
        </div>

        <ParallaxItem speed={-0.04} className="zoom mb-6">
          <form onSubmit={submit} className="paper-card rounded-[1.8rem] p-6 sm:p-8">
          <div className="space-y-4">
            <div>
              <label className="font-body text-sage-600 text-xs uppercase tracking-wider mb-2 block">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-xl bg-sage-50 border border-sage-200 text-ink-700 placeholder:text-ink-300 font-body text-sm focus:outline-none focus:border-sage-500 transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-sage-600 text-xs uppercase tracking-wider mb-2 block">Pesan</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa Anda..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-sage-50 border border-sage-200 text-ink-700 placeholder:text-ink-300 font-body text-sm focus:outline-none focus:border-sage-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="cta-ripple w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-sage-600 text-cream-50 font-body text-sm tracking-[0.15em] uppercase hover:bg-sage-700 transition-colors disabled:opacity-60"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Terkirim!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Kirim Ucapan
                </>
              )}
            </button>
          </div>
          </form>
        </ParallaxItem>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-center font-body text-ink-400 italic text-sm py-6">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="pop paper-card rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-sage-100 border border-sage-300 flex items-center justify-center text-sage-600 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-ink-700 text-sm mb-1">{entry.name}</p>
                  <p className="font-body text-ink-600 text-sm leading-relaxed">{entry.message}</p>
                  <p className="font-body text-ink-300 text-xs mt-2">
                    {new Date(entry.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}