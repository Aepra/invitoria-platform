import { weddingData } from '../../data/wedding';
import { OrnamentDivider, RoseOrnament, FloralFrame } from '../../components/Ornaments';
import { Particles, LightOrbs } from '../../components/Particles';
import { Camera, Music2, MapPin, Phone, Calendar, Cake } from 'lucide-react';

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

type Person = typeof weddingData.bride;

function PersonCard({
  person,
  label,
  revealClass,
}: {
  person: Person;
  label: string;
  revealClass: string;
}) {
  return (
    <div className={`${revealClass} flex flex-col items-center text-center bg-white/85 backdrop-blur-md border border-white/50 p-8 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.1)]`}>
      {/* Photo frame with floral ring */}
      <div className="relative mb-8 group">
        {/* Rotating floral frame */}
        <div className="absolute -inset-8 opacity-30">
          <FloralFrame size={260} className="animate-spin-slower" />
        </div>
        <div className="absolute -inset-4 rounded-full border border-gold-medium/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

        {/* Photo */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-gold-medium/50 shadow-2xl transition-transform duration-700 group-hover:scale-105 soft-aura">
          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blush/30 to-transparent" />
        </div>

        {/* Rose accent */}
        <RoseOrnament className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-8 z-10 animate-soft-pulse" />
      </div>

      <p className="text-rose-500 text-xs tracking-[0.3em] uppercase font-sans mb-3">{label}</p>

      <h3 className="font-script text-4xl sm:text-5xl text-shimmer-rose mb-1">
        {person.name}
      </h3>
      <p className="text-ink/45 font-display text-sm italic mb-6">
        Putra/i dari
      </p>
      <p className="text-ink/75 font-display text-base mb-1">{person.father}</p>
      <p className="text-ink/50 font-display text-sm mb-6">& {person.mother}</p>

      {/* Socials */}
      <div className="flex gap-4">
        {person.socials.instagram && (
          <a href={person.socials.instagram} className="w-10 h-10 rounded-full border border-gold-medium/40 flex items-center justify-center text-rose-500 hover:bg-petal/40 hover:scale-110 transition-all">
            <Instagram className="w-4 h-4" />
          </a>
        )}
        {person.socials.tiktok && (
          <a href={person.socials.tiktok} className="w-10 h-10 rounded-full border border-gold-medium/40 flex items-center justify-center text-rose-500 hover:bg-petal/40 hover:scale-110 transition-all">
            <Music2 className="w-4 h-4" />
          </a>
        )}
        {person.socials.twitter && (
          <a href={person.socials.twitter} className="w-10 h-10 rounded-full border border-gold-medium/40 flex items-center justify-center text-rose-500 hover:bg-petal/40 hover:scale-110 transition-all">
            <Twitter className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Couple() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[url('/images/parallax/bg-sakura.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <LightOrbs count={10} />
      <Particles count={15} type="petal" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-16 bg-white/80 backdrop-blur-md border border-white/50 rounded-[32px] py-10 px-6 max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="reveal-scale mb-6">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-slate-800 drop-shadow-sm">
            The Couple
          </h2>
          <p className="reveal text-slate-600 font-display text-lg italic mt-4 font-medium">
            Bismillahirrahmanirrahim
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-[48px] p-6 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* Couple Joint Photo */}
          <div className="reveal-scale flex flex-col items-center text-center mb-16">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white mb-6 group">
              <img src="/images/parallax/livestream.png" alt="The Couple" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="font-script text-5xl text-rose-600 mb-2">Suci &amp; Abel</h3>
            <p className="text-slate-700 font-display italic font-medium">"Two souls, one heart"</p>
          </div>

          {/* Individual Cards */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
            <PersonCard person={weddingData.bride} label="The Bride" revealClass="reveal-left" />
            <PersonCard person={weddingData.groom} label="The Groom" revealClass="reveal-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BiodataRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gold-medium/15 last:border-0">
      <div className="text-rose-500 mt-0.5">{icon}</div>
      <div className="flex-1">
        <p className="text-rose-400/60 text-xs uppercase tracking-wider mb-1">{label}</p>
        <p className="text-ink/80 font-display text-sm">{value}</p>
      </div>
    </div>
  );
}

function BiodataCard({ person, label, revealClass }: { person: Person; label: string; revealClass: string }) {
  return (
    <div className={`${revealClass} bg-white/85 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[32px] p-8 transition-transform duration-500 hover:scale-[1.02] soft-aura`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-medium/50 shrink-0">
          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-rose-500 text-xs uppercase tracking-wider">{label}</p>
          <h3 className="font-script text-3xl text-shimmer-rose">{person.nickname}</h3>
        </div>
      </div>

      <BiodataRow icon={<Calendar className="w-4 h-4" />} label="Tanggal Lahir" value={person.birthdate} />
      <BiodataRow icon={<MapPin className="w-4 h-4" />} label="Alamat" value={person.address} />
      <BiodataRow icon={<Cake className="w-4 h-4" />} label="Status Keluarga" value={person.familyStatus || '-'} />
      
      {/* Hobi & Socials Row */}
      <div className="flex items-start gap-3 py-3 border-b border-gold-medium/15 last:border-0">
        <div className="text-rose-500 mt-0.5"><Music2 className="w-4 h-4" /></div>
        <div className="flex-1">
          <p className="text-rose-400/60 text-xs uppercase tracking-wider mb-1">Hobi & Kegemaran</p>
          <p className="text-ink/80 font-display text-sm">{person.hobbies || '-'}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 py-3 last:border-0">
        <div className="text-rose-500 mt-0.5"><Camera className="w-4 h-4" /></div>
        <div className="flex-1">
          <p className="text-rose-400/60 text-xs uppercase tracking-wider mb-1">Sosial Media</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
            {person.socials.instagram && <p className="text-ink/80 font-display text-sm">IG: {person.socials.instagram}</p>}
            {person.socials.tiktok && <p className="text-ink/80 font-display text-sm">TikTok: {person.socials.tiktok}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Biodata() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[url('/images/parallax/bg-indoor.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <LightOrbs count={8} />
      <Particles count={10} type="light" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl text-shimmer-rose text-glow-soft">Biodata</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <BiodataCard person={weddingData.bride} label="The Bride" revealClass="reveal-left" />
          <BiodataCard person={weddingData.groom} label="The Groom" revealClass="reveal-right" />
        </div>
      </div>
    </section>
  );
}
