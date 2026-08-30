import { weddingData } from '@/data/wedding';
import { OrnamentDivider, RoseOrnament, FloralFrame } from '@/components/Ornaments';
import { Particles, LightOrbs } from '@/components/Particles';
import { Instagram, Music2, Twitter, MapPin, Phone, Calendar, Cake } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/50 to-cream py-20 soft-vignette">
      <LightOrbs count={10} />
      <Particles count={15} type="petal" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-scale mb-6">
            <OrnamentDivider />
          </div>
          <h2 className="reveal font-script text-5xl sm:text-6xl text-shimmer-rose text-glow-soft">
            The Couple
          </h2>
          <p className="reveal text-ink/55 font-display text-lg italic mt-4">
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
    <div className={`${revealClass} glass-panel rounded-2xl p-8 transition-transform duration-500 hover:scale-[1.02] soft-aura`}>
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
      <BiodataRow icon={<Phone className="w-4 h-4" />} label="Telepon" value={person.phone} />
      <BiodataRow icon={<Cake className="w-4 h-4" />} label="Nama Lengkap" value={person.name} />
    </div>
  );
}

export function Biodata() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-petal/40 to-cream py-20 soft-vignette">
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
