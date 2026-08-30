'use client';
import './index.css';
import { useEffect, useMemo, useState } from 'react';
import {
  Heart, MapPin, Gift, Calendar, Clock, Copy, Check, ChevronDown, Play, X,
} from 'lucide-react';
import { weddingConfig } from './lib/weddingConfig';
import {
  useCountdown, useScrollReveal, useParallax, useMouseTilt, useScrollProgress,
} from './hooks/useScrollReveal';
import { fetchWishes, submitWish, submitRsvp, type WishEntry } from './lib/api';
import { FloatingPetals } from './components/FloatingPetals';
import { Sparkles } from './components/Sparkles';
import { MusicPlayer } from './components/MusicPlayer';
import { Ornament, OrnamentCorner, OrnamentDivider, OrnamentFrame } from './components/Ornaments';

/* ===== Reveal wrapper with variant support ===== */
type RevealVariant = 'up' | 'scale' | 'left' | 'right' | 'blur' | 'flip' | 'rotate' | 'slide-rotate';

function SectionReveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  const variantClass: Record<RevealVariant, string> = {
    up: 'reveal-up',
    scale: 'reveal-scale',
    left: 'reveal-left',
    right: 'reveal-right',
    blur: 'reveal-blur',
    flip: 'reveal-flip',
    rotate: 'reveal-rotate',
    'slide-rotate': 'reveal-slide-rotate',
  };
  return (
    <div
      ref={ref}
      className={`theme-wrapper reveal ${variantClass[variant]} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ===== Parallax background image ===== */
function ParallaxBg({ src, opacity = 0.25, kenBurns = false, pan = false }: {
  src: string;
  opacity?: number;
  kenBurns?: boolean;
  pan?: boolean;
}) {
  const { ref, offset } = useParallax(0.15);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          kenBurns ? 'animate-ken-burns' : pan ? 'animate-ken-burns-pan' : ''
        }`}
        style={{
          backgroundImage: `url(${src})`,
          opacity,
          transform: `translateY(${offset}px) scale(1.15)`,
        }}
      />
    </div>
  );
}

/* ===== Scroll Progress Bar ===== */
function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

/* ===== Cover screen ===== */
function Cover({ onOpen, guestName }: { onOpen: () => void; guestName: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2a1607] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 animate-cover-entrance">
        <ParallaxBg src={weddingConfig.bride.photo} opacity={0.35} kenBurns />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1607]/80 via-[#2a1607]/65 to-[#2a1607]/90" />
      <div className="absolute inset-0 bugis-pattern opacity-40" />
      <div className="absolute inset-0 bugis-pattern-floral opacity-30" />

      {/* Corner ornaments with float */}
      <OrnamentCorner className="absolute top-4 left-4 w-16 h-16 text-amber-300/40 animate-float-bob" />
      <OrnamentCorner className="absolute top-4 right-4 w-16 h-16 text-amber-300/40 -scale-x-100 animate-float-bob-reverse" />
      <OrnamentCorner className="absolute bottom-4 left-4 w-16 h-16 text-amber-300/40 -scale-y-100 animate-float-bob-reverse" />
      <OrnamentCorner className="absolute bottom-4 right-4 w-16 h-16 text-amber-300/40 -scale-100 animate-float-bob" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="animate-cover-text" style={{ animationDelay: '0.2s' }}>
          <Ornament className="w-48 text-amber-300/70 mb-6 animate-shimmer" />
        </div>
        <p
          className="font-light tracking-[0.3em] text-amber-200/80 text-xs uppercase mb-4 animate-cover-text"
          style={{ animationDelay: '0.4s' }}
        >
          Undangan Pernikahan
        </p>
        <h1
          className="font-serif text-5xl sm:text-6xl text-amber-100 mb-2 animate-cover-text animate-shimmer-text"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.6s' }}
        >
          The Wedding Of
        </h1>
        <p
          className="font-serif text-3xl sm:text-4xl text-amber-200 mb-6 animate-cover-text"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.8s' }}
        >
          {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
        </p>
        <div className="animate-cover-text" style={{ animationDelay: '1s' }}>
          <Ornament className="w-48 text-amber-300/70 mb-8 animate-shimmer" />
        </div>

        <div className="animate-cover-text" style={{ animationDelay: '1.2s' }}>
          <p className="text-amber-100/70 text-sm mb-1">Kepada Yth.</p>
          <p className="text-amber-50 text-lg font-medium mb-8 max-w-xs">
            {guestName || 'Bapak/Ibu/Saudara/i'}
          </p>
        </div>

        <button
          onClick={onOpen}
          className="group flex flex-col items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-8 py-4 backdrop-blur-sm transition-all duration-500 hover:bg-amber-300/20 hover:border-amber-300/70 hover:scale-105 animate-pulse-glow animate-cover-text"
          style={{ animationDelay: '1.4s' }}
        >
          <span className="text-amber-100 text-sm tracking-widest uppercase">Buka Undangan</span>
          <ChevronDown className="w-5 h-5 text-amber-200 animate-bounce-soft" />
        </button>
      </div>
    </div>
  );
}

/* ===== Navbar ===== */
function Navbar({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Mempelai', href: '#couple' },
    { label: 'Acara', href: '#events' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Gift', href: '#gift' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#2a1607]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
        <span className="font-serif text-amber-100 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Y &amp; R
        </span>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-amber-100/80 text-sm hover:text-amber-200 transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-amber-300/60 after:transition-all after:duration-300 hover:after:w-full after:w-0"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenRsvp}
            className="rounded-full bg-amber-300/20 border border-amber-300/40 px-5 py-1.5 text-amber-100 text-sm hover:bg-amber-300/30 hover:scale-105 transition-all"
          >
            RSVP
          </button>
        </div>
        <button
          onClick={onOpenRsvp}
          className="md:hidden rounded-full bg-amber-300/20 border border-amber-300/40 px-4 py-1.5 text-amber-100 text-xs"
        >
          RSVP
        </button>
      </div>
    </nav>
  );
}

/* ===== Hero with countdown number flip ===== */
function Hero() {
  const { time, prevTime } = useCountdown('2026-04-18T08:00:00');
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#2a1607] text-amber-50">
      <ParallaxBg src={weddingConfig.gallery[0]} opacity={0.3} kenBurns />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1607]/70 via-[#2a1607]/55 to-[#2a1607]/85" />
      <div className="absolute inset-0 bugis-pattern opacity-30" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center pt-20">
        <SectionReveal variant="rotate">
          <Ornament className="w-56 text-amber-300/60 mb-8 animate-shimmer" />
        </SectionReveal>
        <SectionReveal variant="up" delay={100}>
          <p className="font-light tracking-[0.3em] text-amber-200/80 text-xs uppercase mb-3">The Wedding Of</p>
        </SectionReveal>
        <SectionReveal variant="blur" delay={200}>
          <h2
            className="font-serif text-6xl sm:text-7xl text-amber-100 leading-tight mb-1 animate-shimmer-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {weddingConfig.groom.name}
          </h2>
        </SectionReveal>
        <SectionReveal variant="scale" delay={300}>
          <span className="text-amber-300 text-3xl my-2 font-serif animate-float-bob inline-block">&amp;</span>
        </SectionReveal>
        <SectionReveal variant="blur" delay={400}>
          <h2
            className="font-serif text-6xl sm:text-7xl text-amber-100 leading-tight mb-6 animate-shimmer-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {weddingConfig.bride.name}
          </h2>
        </SectionReveal>
        <SectionReveal variant="up" delay={500}>
          <p className="text-amber-200/70 text-sm mb-10">{weddingConfig.events[0].date}</p>
        </SectionReveal>

        <SectionReveal variant="flip" delay={600}>
          <div className="grid grid-cols-4 gap-3 sm:gap-5">
            {[
              { label: 'Hari', value: time.days, prev: prevTime.days },
              { label: 'Jam', value: time.hours, prev: prevTime.hours },
              { label: 'Menit', value: time.minutes, prev: prevTime.minutes },
              { label: 'Detik', value: time.seconds, prev: prevTime.seconds },
            ].map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-center rounded-xl border border-amber-300/20 bg-amber-300/5 px-3 py-3 sm:px-6 sm:py-4 backdrop-blur-sm min-w-[64px] transition-transform hover:scale-110 hover:border-amber-300/40"
              >
                <span
                  suppressHydrationWarning
                  key={t.value}
                  className="font-serif text-2xl sm:text-3xl text-amber-100 tabular-nums"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    animation: t.value !== t.prev ? 'number-flip 0.6s ease-out' : 'none',
                  }}
                >
                  {String(t.value).padStart(2, '0')}
                </span>
                <span className="text-amber-200/60 text-[10px] sm:text-xs uppercase tracking-wider mt-1">{t.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-amber-300/50 animate-bounce-soft" />
      </div>
    </section>
  );
}

/* ===== Quote ===== */
function Quote() {
  return (
    <section className="relative py-24 px-6 bg-[#3a1f0e] text-amber-50 text-center overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-20" />
      <div className="absolute inset-0 bugis-pattern-floral opacity-30" />
      <SectionReveal variant="blur" className="max-w-2xl mx-auto relative z-10">
        <OrnamentDivider className="w-64 text-amber-300/50 mx-auto mb-8 animate-shimmer" />
        <p
          className="font-serif italic text-amber-100/90 text-lg sm:text-xl leading-relaxed mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "Dan di antara tanda-tanda kekuasan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <p className="text-amber-300/80 text-sm tracking-widest uppercase">— Q.S. Ar-Rum: 21 —</p>
        <OrnamentDivider className="w-64 text-amber-300/50 mx-auto mt-8 animate-shimmer" />
      </SectionReveal>
    </section>
  );
}

/* ===== Couple with mouse tilt ===== */
function CoupleCard({ person, idx }: { person: typeof weddingConfig.bride & { role: string; side: string }; idx: number }) {
  const { ref, tilt } = useMouseTilt<HTMLDivElement>(10);

  return (
    <SectionReveal
      variant={idx === 0 ? 'left' : 'right'}
      delay={idx * 200}
      className="flex flex-col items-center text-center"
    >
      <div
        ref={ref}
        className="relative mb-6 group tilt-card"
        style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="absolute -inset-3 rounded-full border border-amber-300/30 animate-pulse-glow" />
        <div className="absolute -inset-6 rounded-full border border-amber-300/15 animate-rotate-slow" />
        <div className="absolute -inset-9 rounded-full border border-dashed border-amber-300/10 animate-rotate-reverse-slow" />
        <OrnamentFrame className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] text-amber-300/20" />
        <img
          src={person.photo}
          alt={person.name}
          className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover border-2 border-amber-300/40 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-3xl text-amber-100 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
        {person.fullName}
      </h3>
      <p className="text-amber-200/50 text-xs uppercase tracking-widest mb-4">{person.role}</p>
      <p className="text-amber-200/70 text-sm mb-1">{person.side}</p>
      <p className="text-amber-100 text-sm font-medium">{person.father}</p>
      <p className="text-amber-200/50 text-sm">&amp;</p>
      <p className="text-amber-100 text-sm font-medium">{person.mother}</p>
    </SectionReveal>
  );
}

function Couple() {
  const { bride, groom } = weddingConfig;
  const people = [
    { ...bride, role: 'Mempelai Wanita', side: 'Putri dari' },
    { ...groom, role: 'Mempelai Pria', side: 'Putra dari' },
  ];
  return (
    <section id="couple" className="relative py-24 px-6 bg-[#2a1607] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-25" />
      <SectionReveal variant="rotate" className="text-center mb-16 relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Mempelai
        </h2>
        <p className="text-amber-200/60 text-sm">Dengan memohon rahmat dan ridho Allah SWT</p>
      </SectionReveal>

      <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 relative z-10">
        {people.map((person, idx) => (
          <CoupleCard key={idx} person={person} idx={idx} />
        ))}
      </div>

      <SectionReveal variant="scale" className="text-center mt-16 relative z-10">
        <OrnamentDivider className="w-48 text-amber-300/50 mx-auto animate-shimmer" />
      </SectionReveal>
    </section>
  );
}

/* ===== Story ===== */
function Story() {
  const { story } = weddingConfig;
  return (
    <section className="relative py-24 px-6 bg-[#3a1f0e] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-20" />
      <div className="absolute inset-0 bugis-pattern-floral opacity-25" />
      <SectionReveal variant="rotate" className="text-center mb-16 relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Love Story
        </h2>
        <p className="text-amber-200/60 text-sm">Perjalanan cinta kami hingga hari ini</p>
      </SectionReveal>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-300/30 to-transparent sm:-translate-x-1/2" />
        {story.map((item, idx) => (
          <SectionReveal
            key={idx}
            variant={idx % 2 === 0 ? 'slide-rotate' : 'flip'}
            delay={idx * 100}
            className="relative mb-12"
          >
            <div className={`sm:flex items-center ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
              <div className="sm:w-1/2 sm:px-8 pl-12 sm:pl-0">
                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:border-amber-300/40 hover:shadow-[0_8px_30px_rgba(212,169,110,0.15)]">
                  <p className="text-amber-300 text-xs uppercase tracking-widest mb-2">{item.date}</p>
                  <h3 className="font-serif text-2xl text-amber-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-amber-200/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="hidden sm:block sm:w-1/2" />
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-300 border-2 border-[#3a1f0e] animate-pulse-glow" />
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* ===== Events ===== */
function Events() {
  const { events } = weddingConfig;
  return (
    <section id="events" className="relative py-24 px-6 bg-[#2a1607] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-25" />
      <SectionReveal variant="rotate" className="text-center mb-16 relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Wedding Event
        </h2>
        <p className="text-amber-200/60 text-sm max-w-md mx-auto">
          Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
        </p>
      </SectionReveal>

      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2 relative z-10">
        {events.map((evt, idx) => (
          <SectionReveal key={idx} variant={idx === 0 ? 'left' : 'right'} delay={idx * 200}>
            <div className="relative rounded-2xl border border-amber-300/20 bg-gradient-to-b from-amber-300/5 to-transparent p-8 text-center h-full transition-all duration-500 hover:border-amber-300/40 hover:shadow-[0_0_30px_rgba(212,169,110,0.15)] hover:-translate-y-2 overflow-hidden">
              <OrnamentCorner className="absolute top-2 left-2 w-10 h-10 text-amber-300/30 animate-float-bob" />
              <OrnamentCorner className="absolute top-2 right-2 w-10 h-10 text-amber-300/30 -scale-x-100 animate-float-bob-reverse" />
              <OrnamentCorner className="absolute bottom-2 left-2 w-10 h-10 text-amber-300/30 -scale-y-100 animate-float-bob-reverse" />
              <OrnamentCorner className="absolute bottom-2 right-2 w-10 h-10 text-amber-300/30 -scale-100 animate-float-bob" />
              <Ornament className="w-32 text-amber-300/40 mx-auto mb-4 animate-shimmer" />
              <h3 className="font-serif text-3xl text-amber-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {evt.title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-amber-200/70 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>{evt.date}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-amber-200/70 text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span>{evt.time}</span>
              </div>
              <div className="flex items-start justify-center gap-2 text-amber-200/60 text-sm mb-5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-center">{evt.address}</span>
              </div>
              <a
                href={evt.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-5 py-2 text-amber-100 text-sm hover:bg-amber-300/20 hover:scale-105 transition-all"
              >
                <MapPin className="w-4 h-4" />
                Lihat Lokasi
              </a>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* ===== Gallery ===== */
function Gallery() {
  const { gallery } = weddingConfig;
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  return (
    <section id="gallery" className="relative py-24 px-6 bg-[#3a1f0e] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-20" />
      <div className="absolute inset-0 bugis-pattern-floral opacity-25" />
      <SectionReveal variant="rotate" className="text-center mb-16 relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Galeri Foto
        </h2>
        <p className="text-amber-200/60 text-sm">Momen indah yang kami abadikan</p>
      </SectionReveal>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 relative z-10">
        {gallery.map((img, idx) => (
          <SectionReveal
            key={idx}
            variant={idx % 3 === 0 ? 'scale' : idx % 3 === 1 ? 'flip' : 'blur'}
            delay={(idx % 3) * 120}
            className={idx === 0 ? 'col-span-2 row-span-2' : ''}
          >
            <button
              onClick={() => { setLightbox(img); setLightboxIdx(idx); }}
              className="group relative block w-full h-full overflow-hidden rounded-xl border border-amber-300/15 transition-all hover:border-amber-300/40"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${
                  idx === 0 ? 'h-full min-h-[300px] animate-ken-burns-alt' : 'h-40 sm:h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1f0e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 border-2 border-amber-300/0 group-hover:border-amber-300/30 rounded-xl transition-all duration-500" />
            </button>
          </SectionReveal>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer animate-[fade-in_0.3s_ease-out]"
        >
          <img
            src={gallery[lightboxIdx] || lightbox}
            alt="Foto"
            className="max-h-full max-w-full rounded-lg object-contain animate-[scale-in_0.4s_ease-out]"
          />
          <button className="absolute top-6 right-6 text-amber-200/80 hover:text-amber-100 transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}

/* ===== Live Streaming ===== */
function LiveStreaming() {
  return (
    <section className="relative py-24 px-6 bg-[#2a1607] text-amber-50 text-center overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-25" />
      <SectionReveal variant="scale" className="max-w-xl mx-auto relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Live Streaming
        </h2>
        <p className="text-amber-200/60 text-sm mb-8">
          Pernikahan kami dapat disaksikan secara langsung melalui live streaming di bawah ini
        </p>
        <button className="inline-flex items-center gap-3 rounded-full border border-amber-300/40 bg-amber-300/10 px-8 py-4 text-amber-100 hover:bg-amber-300/20 hover:scale-105 transition-all animate-pulse-glow">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>
          <span className="text-sm tracking-widest uppercase">Tonton Live</span>
          <Play className="w-5 h-5" />
        </button>
      </SectionReveal>
    </section>
  );
}

/* ===== Gift ===== */
function GiftSection() {
  const { giftAccounts, giftAddress } = weddingConfig;
  const [copied, setCopied] = useState<number | null>(null);

  const copy = (num: string, idx: number) => {
    navigator.clipboard.writeText(num.replace(/\s/g, ''));
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="gift" className="relative py-24 px-6 bg-[#3a1f0e] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-20" />
      <SectionReveal variant="rotate" className="text-center mb-16 relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Wedding Gift
        </h2>
        <p className="text-amber-200/60 text-sm max-w-md mx-auto">
          Bagi rekan dan sahabat yang hendak memberikan tanda kasih, dapat melalui nomor rekening berikut
        </p>
      </SectionReveal>

      <div className="max-w-md mx-auto space-y-5 relative z-10">
        {giftAccounts.map((acc, idx) => (
          <SectionReveal key={idx} variant={idx === 0 ? 'left' : 'right'} delay={idx * 150}>
            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6 text-center transition-all hover:border-amber-300/40 hover:shadow-[0_0_25px_rgba(212,169,110,0.12)] hover:-translate-y-1">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-amber-300 animate-float-bob" />
                <span className="text-amber-200 font-medium text-sm uppercase tracking-wider">{acc.bank}</span>
              </div>
              <p
                className="font-serif text-2xl text-amber-100 tracking-wider mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {acc.number}
              </p>
              <p className="text-amber-200/60 text-sm mb-4">a.n. {acc.holder}</p>
              <button
                onClick={() => copy(acc.number, idx)}
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-5 py-2 text-amber-100 text-sm hover:bg-amber-300/20 hover:scale-105 transition-all"
              >
                {copied === idx ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied === idx ? 'Tersalin' : 'Salin Nomor'}
              </button>
            </div>
          </SectionReveal>
        ))}

        <SectionReveal variant="up" delay={300}>
          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6 text-center">
            <p className="text-amber-200 text-sm mb-2">Kirim Kado:</p>
            <p className="text-amber-100 text-sm leading-relaxed">{giftAddress}</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ===== RSVP Modal ===== */
function RsvpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir'>('hadir');
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Mohon isi nama Anda');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await submitRsvp(name.trim(), attendance, count, message.trim());
      setDone(true);
    } catch {
      setError('Gagal mengirim. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-[fade-in_0.3s_ease-out]">
      <div className="relative w-full max-w-md rounded-2xl bg-[#2a1607] border border-amber-300/25 p-8 text-amber-50 max-h-[90vh] overflow-y-auto animate-[scale-in_0.4s_ease-out]">
        <OrnamentCorner className="absolute top-2 left-2 w-8 h-8 text-amber-300/30 animate-float-bob" />
        <OrnamentCorner className="absolute top-2 right-2 w-8 h-8 text-amber-300/30 -scale-x-100 animate-float-bob-reverse" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-200/60 hover:text-amber-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {done ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-300/15 flex items-center justify-center animate-pulse-glow">
              <Check className="w-8 h-8 text-amber-300" />
            </div>
            <h3 className="font-serif text-2xl text-amber-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Terima Kasih!
            </h3>
            <p className="text-amber-200/70 text-sm">Konfirmasi kehadiran Anda telah kami terima.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <Ornament className="w-32 text-amber-300/50 mx-auto mb-3 animate-shimmer" />
              <h3 className="font-serif text-3xl text-amber-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                RSVP
              </h3>
              <p className="text-amber-200/60 text-sm">Konfirmasi kehadiran Anda</p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-amber-200/70 text-xs uppercase tracking-wider mb-1.5">Nama</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-amber-300/25 bg-amber-300/5 px-4 py-2.5 text-amber-50 placeholder-amber-200/30 focus:border-amber-300/60 focus:outline-none transition-colors"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-amber-200/70 text-xs uppercase tracking-wider mb-1.5">Kehadiran</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { val: 'hadir' as const, label: 'Hadir' },
                    { val: 'tidak_hadir' as const, label: 'Tidak Hadir' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setAttendance(opt.val)}
                      className={`rounded-lg border px-4 py-2.5 text-sm transition-all ${
                        attendance === opt.val
                          ? 'border-amber-300/60 bg-amber-300/15 text-amber-100 scale-105'
                          : 'border-amber-300/20 bg-transparent text-amber-200/60 hover:bg-amber-300/5'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block text-amber-200/70 text-xs uppercase tracking-wider mb-1.5">Jumlah Tamu</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={count}
                    onChange={(e) => setCount(Math.max(1, Math.min(10, Number(e.target.value))))}
                    className="w-full rounded-lg border border-amber-300/25 bg-amber-300/5 px-4 py-2.5 text-amber-50 focus:border-amber-300/60 focus:outline-none transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-amber-200/70 text-xs uppercase tracking-wider mb-1.5">Pesan (opsional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-amber-300/25 bg-amber-300/5 px-4 py-2.5 text-amber-50 placeholder-amber-200/30 focus:border-amber-300/60 focus:outline-none transition-colors resize-none"
                  placeholder="Ucapan & doa untuk kami"
                />
              </div>

              {error && <p className="text-red-300 text-sm text-center">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-amber-300/20 border border-amber-300/40 py-3 text-amber-100 text-sm tracking-widest uppercase hover:bg-amber-300/30 hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                {submitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ===== Wishes ===== */
function Wishes() {
  const [wishes, setWishes] = useState<WishEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWishes()
      .then(setWishes)
      .catch(() => setError('Gagal memuat ucapan'))
      .finally(() => setLoading(false));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Mohon isi nama dan pesan');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const entry = await submitWish(name.trim(), message.trim());
      setWishes((prev) => [entry, ...prev]);
      setName('');
      setMessage('');
    } catch {
      setError('Gagal mengirim ucapan');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-[#2a1607] text-amber-50 overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-25" />
      <div className="absolute inset-0 bugis-pattern-floral opacity-30" />
      <SectionReveal variant="rotate" className="text-center mb-16 relative z-10">
        <Ornament className="w-40 text-amber-300/50 mx-auto mb-4 animate-shimmer" />
        <h2 className="font-serif text-4xl sm:text-5xl text-amber-100 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ucapan &amp; Doa
        </h2>
        <p className="text-amber-200/60 text-sm">Berikan harapan dan doa tulus Anda untuk kami</p>
      </SectionReveal>

      <div className="max-w-2xl mx-auto relative z-10">
        <SectionReveal variant="blur">
          <form onSubmit={submit} className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6 mb-8 backdrop-blur-sm transition-all focus-within:border-amber-300/40 focus-within:shadow-[0_0_25px_rgba(212,169,110,0.1)]">
            <div className="grid gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="rounded-lg border border-amber-300/25 bg-[#3a1f0e]/50 px-4 py-2.5 text-amber-50 placeholder-amber-200/30 focus:border-amber-300/60 focus:outline-none transition-colors"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Tulis ucapan & doa Anda..."
                className="rounded-lg border border-amber-300/25 bg-[#3a1f0e]/50 px-4 py-2.5 text-amber-50 placeholder-amber-200/30 focus:border-amber-300/60 focus:outline-none transition-colors resize-none"
              />
              {error && <p className="text-red-300 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="self-end inline-flex items-center gap-2 rounded-full bg-amber-300/20 border border-amber-300/40 px-6 py-2.5 text-amber-100 text-sm hover:bg-amber-300/30 hover:scale-105 transition-all disabled:opacity-50"
              >
                <Heart className="w-4 h-4 animate-heart-beat" />
                {submitting ? 'Mengirim...' : 'Kirim Ucapan'}
              </button>
            </div>
          </form>
        </SectionReveal>

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
          {loading && (
            <p className="text-center text-amber-200/50 text-sm py-8">Memuat ucapan...</p>
          )}
          {!loading && wishes.length === 0 && (
            <p className="text-center text-amber-200/50 text-sm py-8">Belum ada ucapan. Jadilah yang pertama!</p>
          )}
          {wishes.map((w, idx) => (
            <div
              key={w.id}
              className="rounded-xl border border-amber-300/15 bg-amber-300/5 p-4 transition-all hover:border-amber-300/30 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(212,169,110,0.08)]"
              style={{ animation: `fade-up 0.5s ease-out ${idx * 0.05}s both` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-300/15 flex items-center justify-center text-amber-200 text-sm font-medium">
                  {w.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-amber-100 text-sm font-medium">{w.name}</p>
                  <p className="text-amber-200/40 text-xs">
                    {new Date(w.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <p className="text-amber-200/70 text-sm leading-relaxed pl-10">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Footer ===== */
function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-[#3a1f0e] text-amber-50 text-center overflow-hidden">
      <div className="absolute inset-0 bugis-pattern opacity-20" />
      <div className="absolute inset-0 bugis-pattern-floral opacity-25" />
      <SectionReveal variant="blur" className="max-w-lg mx-auto relative z-10">
        <OrnamentDivider className="w-48 text-amber-300/50 mx-auto mb-6 animate-shimmer" />
        <p className="text-amber-200/60 text-sm mb-2">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p className="text-amber-100 text-sm mb-8">Atas kehadiran dan doa restunya kami ucapkan terima kasih.</p>

        <h3 className="font-serif text-4xl text-amber-100 mb-1 animate-shimmer-text" style={{ fontFamily: "'Playfair Display', serif" }}>
          {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
        </h3>
        <Ornament className="w-40 text-amber-300/40 mx-auto mt-6 animate-shimmer" />
        <p className="text-amber-200/40 text-xs mt-6 tracking-widest uppercase">Undangan Pernikahan Digital</p>
      </SectionReveal>
    </footer>
  );
}

/* ===== Main App ===== */
export default function App() {
  const [opened, setOpened] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const guestName = useMemo(() => {
    const params = new URLSearchParams((typeof window !== 'undefined' ? window.location.search : ''));
    return params.get('to') || '';
  }, []);

  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [opened]);

  return (
    <div className="bg-[#2a1607]">
      {!opened && <Cover onOpen={() => setOpened(true)} guestName={guestName} />}
      <ScrollProgress />
      <FloatingPetals />
      <Sparkles />
      <Navbar onOpenRsvp={() => setRsvpOpen(true)} />
      <Hero />
      <Quote />
      <Couple />
      <Story />
      <Events />
      <Gallery />
      <LiveStreaming />
      <GiftSection />
      <Wishes />
      <Footer />
      <RsvpModal open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      {opened && <MusicPlayer play={opened} />}
    </div>
  );
}

