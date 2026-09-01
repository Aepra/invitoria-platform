import { useState, useEffect } from 'react';
import { Send, MessageSquare, Users } from 'lucide-react';
import { fetchWishes, submitRsvp, Wish, Rsvp } from '../../lib/supabase';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type RsvpGuestbookProps = {
  root: React.RefObject<HTMLElement | null>;
};

export default function RsvpGuestbook({ root }: RsvpGuestbookProps) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('hadir');
  const [message, setMessage] = useState('');
  const [guests, setGuests] = useState<(Wish | Rsvp)[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const headerRef = useScrollReveal<HTMLDivElement>(root);
  const formRef = useScrollReveal<HTMLDivElement>(root);
  const listRef = useScrollReveal<HTMLDivElement>(root);

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      // Actually fetchWishes acts like guestbook in this mock.
      const data = await fetchWishes();
      setGuests(data || []);
    } catch (error) {
      console.error('Error fetching guests:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitRsvp(name, attendance as any, 1, message);
      setStatus({ type: 'success', text: 'Boom! Pesan terkirim!' });
      setName('');
      setMessage('');
      setAttendance('hadir');
      fetchGuests();
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setStatus({ type: 'error', text: 'Oops! Gagal mengirim pesan.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-comic-white overflow-hidden">
      
      {/* Halftone BG */}
      <div className="absolute inset-0 bg-halftone-white opacity-50" />

      <div ref={headerRef} className="reveal text-center mb-16 relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-comic-yellow border-4 border-comic-ink px-6 py-2 mb-4 shadow-[4px_4px_0_0_#111827] transform -rotate-1">
          <MessageSquare className="w-6 h-6 text-comic-ink" />
          <p className="font-comic-head text-xl tracking-widest text-comic-ink uppercase">RSVP & Wishes</p>
        </div>
        <h2 className="font-comic-head text-5xl sm:text-6xl text-comic-red mb-4 drop-shadow-[2px_2px_0_rgba(17,24,39,1)] uppercase">
          Say Hello!
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto relative z-10">
        
        {/* RSVP Form */}
        <div ref={formRef} className="reveal-left flex-1 max-w-md w-full mx-auto">
          <div className="comic-panel p-8 bg-comic-yellow transform -rotate-1 relative">
            
            <div className="absolute -top-4 -right-4 bg-comic-cyan border-4 border-comic-ink px-3 py-1 rotate-12 shadow-[4px_4px_0_0_#111827]">
              <span className="font-comic-head text-xl text-comic-ink uppercase">Join Us!</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-comic-head text-xl text-comic-ink mb-2 uppercase">Nama Anda</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-comic-white border-4 border-comic-ink p-3 font-comic-body font-bold text-comic-ink focus:outline-none focus:ring-4 focus:ring-comic-red/50 shadow-[4px_4px_0_0_#111827]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-comic-head text-xl text-comic-ink mb-2 uppercase">Kehadiran</label>
                <select
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full bg-comic-white border-4 border-comic-ink p-3 font-comic-body font-bold text-comic-ink focus:outline-none focus:ring-4 focus:ring-comic-red/50 shadow-[4px_4px_0_0_#111827] appearance-none"
                >
                  <option value="hadir">Hadir!</option>
                  <option value="tidak_hadir">Maaf, Tidak Bisa</option>
                  <option value="ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block font-comic-head text-xl text-comic-ink mb-2 uppercase">Ucapan & Doa</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-comic-white border-4 border-comic-ink p-3 font-comic-body font-bold text-comic-ink focus:outline-none focus:ring-4 focus:ring-comic-red/50 shadow-[4px_4px_0_0_#111827] resize-none"
                  placeholder="Tulis ucapan selamat disini..."
                />
              </div>

              {status && (
                <div className={`p-3 border-4 border-comic-ink font-comic-body font-bold text-center uppercase shadow-[4px_4px_0_0_#111827] transform rotate-1 ${
                  status.type === 'success' ? 'bg-comic-cyan text-comic-ink' : 'bg-comic-red text-comic-white'
                }`}>
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="comic-btn w-full py-4 text-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-6 h-6" />
                {loading ? 'SENDING...' : 'KIRIM PESAN!'}
              </button>
            </form>
          </div>
        </div>

        {/* Guestbook List */}
        <div ref={listRef} className="reveal-right flex-1 max-w-lg w-full mx-auto">
          <div className="comic-panel-cyan p-8 transform rotate-1 h-full max-h-[600px] flex flex-col">
            
            <div className="flex items-center gap-3 mb-6 bg-comic-white border-4 border-comic-ink px-4 py-2 inline-flex w-max shadow-[4px_4px_0_0_#111827] transform -rotate-2">
              <Users className="w-6 h-6 text-comic-ink" />
              <h3 className="font-comic-head text-2xl text-comic-ink uppercase mt-1">Buku Tamu</h3>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-4">
              {guests.length === 0 ? (
                <p className="font-comic-body font-bold text-center text-comic-ink/60 py-10 bg-comic-white border-4 border-comic-ink border-dashed">Belum ada ucapan. Jadilah yang pertama!</p>
              ) : (
                guests.map((guest: any, i) => (
                  <div key={guest.id} className="bg-comic-white border-4 border-comic-ink p-4 shadow-[4px_4px_0_0_#111827] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#111827] transition-all" style={{ transform: `rotate(${i % 2 === 0 ? '-1deg' : '1deg'})` }}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-comic-head text-xl text-comic-red uppercase">{guest.name}</h4>
                      {guest.attendance && (
                        <span className={`text-xs font-comic-body font-bold px-2 py-1 border-2 border-comic-ink uppercase ${
                          guest.attendance === 'hadir' ? 'bg-comic-cyan text-comic-ink' : 
                          guest.attendance === 'ragu' ? 'bg-comic-yellow text-comic-ink' : 'bg-comic-ink text-comic-white'
                        }`}>
                          {guest.attendance.replace('_', ' ')}
                        </span>
                      )}
                    </div>
                    <p className="font-comic-body font-bold text-comic-ink bg-gray-100 p-3 border-2 border-comic-ink border-dashed">{guest.message}</p>
                    <p className="font-comic-body font-bold text-xs text-comic-ink/50 mt-2">
                      {new Date(guest.created_at).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </p>
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
