import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { OrnamentDivider, StarOrnament } from '../../components/Ornaments';
import { Particles, Starfield } from '../../components/Particles';
import { Send, CheckCircle2, Loader2, User } from 'lucide-react';

type GuestEntry = {
  id: string;
  name: string;
  message: string;
  attendance: string;
  created_at: string;
};

const attendanceLabels: Record<string, string> = {
  hadir: 'Hadir',
  ragu: 'Ragu-ragu',
  tidak: 'Tidak Hadir',
};

const attendanceColors: Record<string, string> = {
  hadir: 'text-teal-glow border-teal-glow/30 bg-teal-glow/10',
  ragu: 'text-mystic-300 border-mystic-400/30 bg-mystic-400/10',
  tidak: 'text-mystic-200 border-mystic-300/20 bg-mystic-300/10',
};

export function Guestbook() {
  const [entries, setEntries] = useState<GuestEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', message: '', attendance: 'hadir' });

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (!error && data) {
      setEntries(data as GuestEntry[]);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setSubmitting(true);
    const { data, error } = await supabase
      .from('guestbook')
      .insert({
        name: form.name.trim(),
        message: form.message.trim(),
        attendance: form.attendance,
      })
      .select()
      .single();

    if (!error && data) {
      setEntries((prev) => [data as GuestEntry, ...prev]);
      setForm({ name: '', message: '', attendance: 'hadir' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
    setSubmitting(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={40} />
      <Particles count={12} type="sparkle" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">
            Ucapan &amp; Doa
          </h2>
          <p className="reveal text-moonlight/60 font-script text-lg italic mt-4">
            Kiramkan doa restu untuk kami
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal-blur glass-panel-dark rounded-2xl p-6 sm:p-8 mb-8 magic-aura">
          <div className="space-y-4">
            <div>
              <label className="text-mystic-200/60 text-xs uppercase tracking-wider mb-2 block">Nama</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-mystic-400/20 text-moonlight placeholder:text-moonlight/30 font-serif text-sm focus:outline-none focus:border-mystic-400/50 transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-mystic-200/60 text-xs uppercase tracking-wider mb-2 block">Kehadiran</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(attendanceLabels).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: key })}
                    className={`py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase transition-all border ${
                      form.attendance === key
                        ? 'border-mystic-400/60 bg-mystic-400/15 text-mystic-200'
                        : 'border-mystic-400/20 bg-midnight/30 text-moonlight/50 hover:border-mystic-400/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-mystic-200/60 text-xs uppercase tracking-wider mb-2 block">Pesan</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tuliskan ucapan dan doa Anda..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-mystic-400/20 text-moonlight placeholder:text-moonlight/30 font-serif text-sm focus:outline-none focus:border-mystic-400/50 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-mystic w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-mystic-600/30 via-mystic-400/30 to-teal-glow/30 border border-mystic-400/40 text-mystic-100 text-sm tracking-widest uppercase hover:from-mystic-500/40 hover:via-mystic-300/40 hover:to-teal-glow/40 transition-all disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : success ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-teal-glow" />
                  Terkirim!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Ucapan
                </>
              )}
            </button>
          </div>
        </form>

        {/* Entries */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 text-mystic-400 animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <p className="text-center text-moonlight/40 font-script text-sm italic py-8">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          ) : (
            entries.map((entry, i) => (
              <div
                key={entry.id}
                className="reveal glass-panel-dark rounded-2xl p-5"
                style={{ transitionDelay: `${Math.min(i * 50, 300)}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-mystic-400/15 border border-mystic-400/30 flex items-center justify-center text-mystic-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-moonlight font-serif text-sm font-semibold">{entry.name}</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border tracking-wider uppercase ${attendanceColors[entry.attendance] || ''}`}>
                        {attendanceLabels[entry.attendance] || entry.attendance}
                      </span>
                    </div>
                    <p className="text-moonlight/70 font-script text-sm leading-relaxed">{entry.message}</p>
                    <p className="text-moonlight/30 text-xs mt-2">
                      {new Date(entry.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
