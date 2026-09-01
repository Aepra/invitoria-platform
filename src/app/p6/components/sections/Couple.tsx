'use client';
import { weddingData } from '../../data/wedding';
import { BloomDivider, Sparkle } from '../Ornaments';
import { ParallaxBg, ParallaxItem } from '../ParallaxBg';
import { Petals } from '../Petals';
import { Music2, Cake, MapPin, Phone } from 'lucide-react';

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

function PersonCard({ person, label, alt }: { person: Person; label: string; alt?: boolean }) {
  return (
    <div className="rounded-[1.8rem] bg-white/80 backdrop-blur-md border border-sage-200/70 shadow-[0_20px_50px_-25px_rgba(49,87,65,0.45)] p-7 text-center transition-transform duration-500 hover:-translate-y-1.5">
      <div className="relative mx-auto w-32 h-32 mb-5">
        <div className="absolute -inset-3 rounded-full border border-sage-400/70 animate-spin-slower" style={{ borderStyle: 'dashed' }} />
        <div className="absolute -inset-6 rounded-full border border-sage-300/40 animate-spin-slower opacity-60" style={{ borderStyle: 'dotted', animationDirection: 'reverse' }} />
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover rounded-full border-[3px] border-sage-300 shadow-lg"
        />
        <Sparkle className="absolute -top-1 -right-1 w-5 h-5" color="#D89579" />
      </div>
      <p className="font-display tracking-[0.25em] uppercase text-sage-500 text-[11px] mb-2">{label}</p>
      <h3 className="font-script text-4xl text-clay-600 mb-1">{person.nickname}</h3>
      <p className="font-display text-sm text-ink-700 mb-1">{person.name}</p>
      <p className="font-body text-ink-500 text-sm mb-5">
        Putri/i dari {person.father} &amp; {person.mother}
      </p>

      <ul className="mb-5 space-y-2 text-left">
        <li className="flex items-start gap-2 text-ink-600 font-body text-sm">
          <Cake className="w-4 h-4 mt-0.5 text-sage-500 shrink-0" />
          {person.birthdate}
        </li>
        <li className="flex items-start gap-2 text-ink-600 font-body text-sm">
          <MapPin className="w-4 h-4 mt-0.5 text-sage-500 shrink-0" />
          {person.address}
        </li>
        <li className="flex items-start gap-2 text-ink-600 font-body text-sm">
          <Phone className="w-4 h-4 mt-0.5 text-sage-500 shrink-0" />
          {person.phone}
        </li>
      </ul>

      <div className="flex justify-center gap-3" dir="ltr">
        <a href={person.socials.instagram} className="w-9 h-9 rounded-full border border-sage-300 flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-cream-50 hover:scale-110 transition-all">
          <Instagram className="w-4 h-4" />
        </a>
        <a href={person.socials.tiktok} className="w-9 h-9 rounded-full border border-sage-300 flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-cream-50 hover:scale-110 transition-all">
          <Music2 className="w-4 h-4" />
        </a>
        <a href={person.socials.twitter} className="w-9 h-9 rounded-full border border-sage-300 flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-cream-50 hover:scale-110 transition-all">
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function Couple() {
  return (
    <section id="pengantin" className="relative py-20 px-6 overflow-hidden">
      <ParallaxBg
        image="https://images.pexels.com/photos/30307452/pexels-photo-30307452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        speed={0.2}
        overlay="to bottom, rgba(250,246,236,.9), rgba(250,246,236,.62) 55%, rgba(250,246,236,.95)"
        className="absolute inset-0"
      />
      <Petals count={12} />
      <Sparkle className="absolute top-12 left-8 w-5 h-5" color="#D89579" />
      <Sparkle className="absolute bottom-12 right-8 w-5 h-5" color="#93BD9F" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="pop mb-4 flex justify-center"><BloomDivider /></div>
          <h2 className="font-script text-6xl text-ink-800 text-shimmer">Pasangan Mempelai</h2>
          <p className="font-body text-ink-500 italic mt-2">Bismillahirrahmanirrahim</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <ParallaxItem speed={0.06} className="swing"><PersonCard person={weddingData.bride} label="Mempelai Wanita" /></ParallaxItem>
          <ParallaxItem speed={-0.05} className="rise"><PersonCard person={weddingData.groom} label="Mempelai Pria" alt /></ParallaxItem>
        </div>
      </div>
    </section>
  );
}