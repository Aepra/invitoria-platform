import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { OrnamentDivider, RoseOrnament } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';
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
  hadir: 'text-sage-500 border-sage-300/40 bg-sage-100/40',
  ragu: 'text-gold-deep border-gold-medium/40 bg-petal/40',
  tidak: 'text-rose-500 border-rose-300/40 bg-petal/30',
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
    <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[url('/images/parallax/bg-outdoor.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <LightOrbs count={8} />
      <Particles count={12} type="petal" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-12 bg-white/85 backdrop-blur-md border border-white/50 rounded-[32px] py-10 px-6 max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-slate-800 drop-shadow-sm">
            Ucapan &amp; Doa
          </h2>
          <p className="reveal text-slate-600 font-display text-lg italic mt-4 font-medium">
            Kiramkan doa restu untuk kami
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal-blur bg-white/85 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-[32px] p-6 sm:p-8 mb-8 soft-aura">
          <div className="space-y-4">
            <div>
              <label className="text-rose-400/60 text-xs uppercase tracking-wider mb-2 block">Nama</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-xl bg-cream/50 border border-gold-medium/20 text-ink placeholder:text-ink/30 font-display text-sm focus:outline-none focus:border-rose-400/50 transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-rose-400/60 text-xs uppercase tracking-wider mb-2 block">Kehadiran</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(attendanceLabels).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: key })}
                    className={`py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase transition-all border ${
                      form.attendance === key
                        ? 'border-rose-400/60 bg-petal/40 text-rose-600'
                        : 'border-gold-medium/20 bg-cream/30 text-ink/50 hover:border-rose-400/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-rose-400/60 text-xs uppercase tracking-wider mb-2 block">Pesan</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tuliskan ucapan dan doa Anda..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-cream/50 border border-gold-medium/20 text-ink placeholder:text-ink/30 font-display text-sm focus:outline-none focus:border-rose-400/50 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-elegant w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-rose-400/30 via-gold-soft/30 to-rose-400/30 border border-gold-medium/40 text-rose-700 text-sm tracking-widest uppercase hover:from-rose-300/40 hover:via-gold-light/40 hover:to-rose-300/40 transition-all disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : success ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-rose-500" />
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
              <Loader2 className="w-6 h-6 text-rose-400 animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <p className="text-center text-ink/40 font-display text-sm italic py-8">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          ) : (
            entries.map((entry, i) => (
              <div
                key={entry.id}
                className="reveal bg-white/90 backdrop-blur-md border border-white/50 shadow-lg rounded-[24px] p-5"
                style={{ transitionDelay: `${Math.min(i * 50, 300)}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-petal/40 border border-gold-medium/30 flex items-center justify-center text-rose-500 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-ink font-display text-sm font-semibold">{entry.name}</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border tracking-wider uppercase ${attendanceColors[entry.attendance] || ''}`}>
                        {attendanceLabels[entry.attendance] || entry.attendance}
                      </span>
                    </div>
                    <p className="text-ink/65 font-display text-sm leading-relaxed">{entry.message}</p>
                    <p className="text-ink/30 text-xs mt-2">
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
