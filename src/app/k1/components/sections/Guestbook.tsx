'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
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
    <section className="relative w-full py-24 bg-fine-sand px-6 overflow-hidden border-t border-fine">
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="text-center mb-16 reveal-scale">
          <p className="text-fine-sage text-xs tracking-[0.3em] uppercase font-fine-sans mb-4">
            Guestbook
          </p>
          <h2 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-8">
            Ucapan &amp; Doa
          </h2>
          <div className="w-12 h-[1px] bg-fine-charcoal/30 mx-auto" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal bg-white p-8 mb-12 shadow-fine border border-fine">
          <div className="space-y-6">
            
            <div className="border-b border-fine-charcoal/20 pb-2">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Anda"
                className="w-full bg-transparent text-fine-charcoal placeholder:text-fine-charcoal/40 font-fine-serif text-sm focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="border-b border-fine-charcoal/20 pb-2">
              <select
                value={form.attendance}
                onChange={(e) => setForm({ ...form, attendance: e.target.value })}
                className="w-full bg-transparent text-fine-charcoal font-fine-serif text-sm focus:outline-none appearance-none"
              >
                {Object.entries(attendanceLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            <div className="border-b border-fine-charcoal/20 pb-2">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tuliskan pesan..."
                rows={3}
                className="w-full bg-transparent text-fine-charcoal placeholder:text-fine-charcoal/40 font-fine-serif text-sm focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3 bg-fine-charcoal text-fine-ivory text-xs tracking-[0.2em] uppercase hover:bg-fine-sage transition-all disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : success ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Terkirim
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </>
              )}
            </button>
          </div>
        </form>

        {/* Entries */}
        <div className="space-y-6 max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 text-fine-charcoal/30 animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <p className="text-center text-fine-charcoal/40 font-fine-serif text-sm italic py-8">
              Belum ada ucapan.
            </p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="reveal border-l border-fine-gold/50 pl-6 py-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-fine-charcoal font-fine-serif text-base">{entry.name}</p>
                  <span className="text-[10px] tracking-widest uppercase text-fine-sage font-fine-sans">
                    {attendanceLabels[entry.attendance]}
                  </span>
                </div>
                <p className="text-fine-charcoal/70 font-fine-sans text-sm font-light leading-relaxed mb-2">{entry.message}</p>
                <p className="text-fine-charcoal/30 font-fine-sans text-[10px] tracking-wider uppercase">
                  {new Date(entry.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
