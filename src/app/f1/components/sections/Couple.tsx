import { weddingData } from '../../data/wedding';
import { OrnamentDivider, StarOrnament, SpellCircle } from '../../components/Ornaments';
import { Particles, Starfield } from '../../components/Particles';
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
    <div className={`${revealClass} flex flex-col items-center text-center`}>
      {/* Photo frame with spell circle */}
      <div className="relative mb-8 group">
        {/* Rotating spell circle ring */}
        <div className="absolute -inset-8 opacity-40">
          <SpellCircle size={260} className="animate-spin-slower" />
        </div>
        <div className="absolute -inset-4 rounded-full border border-mystic-400/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

        {/* Photo */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-mystic-400/50 shadow-2xl transition-transform duration-700 group-hover:scale-105 magic-aura">
          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />
        </div>

        {/* Star accent */}
        <StarOrnament className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-8 z-10 animate-pulse-soft" />
      </div>

      <p className="text-teal-glow text-xs tracking-[0.3em] uppercase font-sans mb-3">{label}</p>

      <h3 className="font-magic text-3xl sm:text-4xl text-shimmer-mystic mb-1">
        {person.name}
      </h3>
      <p className="text-moonlight/50 font-script text-sm italic mb-6">
        Putra/i dari
      </p>
      <p className="text-moonlight/80 font-serif text-base mb-1">{person.father}</p>
      <p className="text-moonlight/50 font-serif text-sm mb-6">& {person.mother}</p>

      {/* Socials */}
      <div className="flex gap-4">
        {person.socials.instagram && (
          <a href={person.socials.instagram} className="w-10 h-10 rounded-full border border-mystic-400/40 flex items-center justify-center text-mystic-300 hover:bg-mystic-400/20 hover:scale-110 transition-all">
            <Instagram className="w-4 h-4" />
          </a>
        )}
        {person.socials.tiktok && (
          <a href={person.socials.tiktok} className="w-10 h-10 rounded-full border border-mystic-400/40 flex items-center justify-center text-mystic-300 hover:bg-mystic-400/20 hover:scale-110 transition-all">
            <Music2 className="w-4 h-4" />
          </a>
        )}
        {person.socials.twitter && (
          <a href={person.socials.twitter} className="w-10 h-10 rounded-full border border-mystic-400/40 flex items-center justify-center text-mystic-300 hover:bg-mystic-400/20 hover:scale-110 transition-all">
            <Twitter className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Couple() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={50} />
      <Particles count={15} type="orb" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-scale mb-6">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">
            The Couple
          </h2>
          <p className="reveal text-moonlight/60 font-script text-lg italic mt-4">
            Bismillahirrahmanirrahim
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          <PersonCard person={weddingData.bride} label="The Bride" revealClass="reveal-left" />
          <PersonCard person={weddingData.groom} label="The Groom" revealClass="reveal-right" />
        </div>
      </div>
    </section>
  );
}

function BiodataRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-mystic-400/15 last:border-0">
      <div className="text-teal-glow mt-0.5">{icon}</div>
      <div className="flex-1">
        <p className="text-mystic-200/60 text-xs uppercase tracking-wider mb-1">{label}</p>
        <p className="text-moonlight/85 font-serif text-sm">{value}</p>
      </div>
    </div>
  );
}

function BiodataCard({ person, label, revealClass }: { person: Person; label: string; revealClass: string }) {
  return (
    <div className={`${revealClass} glass-panel-dark rounded-2xl p-8 transition-transform duration-500 hover:scale-[1.02] magic-aura`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-mystic-400/50 shrink-0">
          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-teal-glow text-xs uppercase tracking-wider">{label}</p>
          <h3 className="font-magic text-2xl text-shimmer-mystic">{person.nickname}</h3>
        </div>
      </div>

      <BiodataRow icon={<Calendar className="w-4 h-4" />} label="Tanggal Lahir" value={person.birthdate} />
      <BiodataRow icon={<MapPin className="w-4 h-4" />} label="Alamat" value={person.address} />
      <BiodataRow icon={<Phone className="w-4 h-4" />} label="Telepon" value={person.phone} />
      <BiodataRow icon={<Cake className="w-4 h-4" />} label="Nama Lengkap" value={person.name} />
    </div>
  );
}

export function Biodata() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-night to-midnight py-20 film-grain">
      <Starfield count={30} />
      <Particles count={10} type="dust" />
      <div className="mist-layer" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-scale mb-4">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-magic text-4xl sm:text-5xl text-shimmer-mystic text-glow-mystic">Biodata</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <BiodataCard person={weddingData.bride} label="The Bride" revealClass="reveal-left" />
          <BiodataCard person={weddingData.groom} label="The Groom" revealClass="reveal-right" />
        </div>
      </div>
    </section>
  );
}
