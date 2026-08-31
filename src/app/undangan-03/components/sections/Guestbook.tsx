import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { OrnamentDivider } from '../../components/Ornaments';
import { Particles } from '../../components/Particles';
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
  hadir: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  ragu: 'text-gold-300 border-gold-400/30 bg-gold-400/10',
  tidak: 'text-burgundy-200 border-burgundy-400/30 bg-burgundy-400/10',
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('/demo/royal_lovestory_bg.png')", filter: "blur(3px)" }} 
      />
      <div className="absolute inset-0 bg-royal-950/80 pointer-events-none" />

      <Particles count={12} />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-gold-gradient">
            Ucapan & Doa
          </h2>
          <p className="reveal text-ivory/60 font-serif text-lg italic mt-4">
            Kiramkan doa restu untuk kami
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal-blur glass-panel-dark rounded-2xl p-6 sm:p-8 mb-8">
          <div className="space-y-4">
            <div>
              <label className="text-gold-200/60 text-xs uppercase tracking-wider mb-2 block">Nama</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-xl bg-royal-900/50 border border-gold-400/20 text-ivory placeholder:text-ivory/30 font-serif text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-gold-200/60 text-xs uppercase tracking-wider mb-2 block">Kehadiran</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(attendanceLabels).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: key })}
                    className={`py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase transition-all border ${
                      form.attendance === key
                        ? 'border-gold-400/60 bg-gold-400/15 text-gold-200'
                        : 'border-gold-400/20 bg-royal-900/30 text-ivory/50 hover:border-gold-400/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-gold-200/60 text-xs uppercase tracking-wider mb-2 block">Pesan</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tuliskan ucapan dan doa Anda..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-royal-900/50 border border-gold-400/20 text-ivory placeholder:text-ivory/30 font-serif text-sm focus:outline-none focus:border-gold-400/50 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-600/30 via-gold-400/30 to-gold-600/30 border border-gold-400/40 text-gold-100 text-sm tracking-widest uppercase hover:from-gold-500/40 hover:via-gold-300/40 hover:to-gold-500/40 transition-all disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : success ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
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
              <Loader2 className="w-6 h-6 text-gold-400 animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <p className="text-center text-ivory/40 font-serif text-sm italic py-8">
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
                  <div className="w-10 h-10 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-ivory font-serif text-sm font-semibold">{entry.name}</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border tracking-wider uppercase ${attendanceColors[entry.attendance] || ''}`}>
                        {attendanceLabels[entry.attendance] || entry.attendance}
                      </span>
                    </div>
                    <p className="text-ivory/70 font-serif text-sm leading-relaxed">{entry.message}</p>
                    <p className="text-ivory/30 text-xs mt-2">
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
