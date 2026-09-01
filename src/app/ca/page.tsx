'use client';
import './index.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Music, Heart, Home, Calendar, Images, MessageSquare, Gift } from 'lucide-react';
import Cover from './components/sections/Cover';
import BrideGroom from './components/sections/BrideGroom';
import EventInfo from './components/sections/EventInfo';
import Countdown from './components/sections/Countdown';
import Gallery from './components/sections/Gallery';
import RsvpGuestbook from './components/sections/RsvpGuestbook';
import GiftSection from './components/sections/Gift';
import Footer from './components/sections/Footer';
import { StarIcon } from './components/Ornament';

const SECTIONS = [
  { id: 'home', icon: Home, label: 'Beranda' },
  { id: 'couple', icon: Heart, label: 'Pasangan' },
  { id: 'events', icon: Calendar, label: 'Acara' },
  { id: 'gallery', icon: Images, label: 'Galeri' },
  { id: 'rsvp', icon: MessageSquare, label: 'RSVP' },
  { id: 'gift', icon: Gift, label: 'Hadiah' },
];

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const guestName = useMemo(() => {
    const params = new URLSearchParams((typeof window !== 'undefined' ? window.location.search : ''));
    return params.get('to') || '';
  }, []);

  useEffect(() => {
    if (!opened) return;
    const scroller = scrollRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const top = scroller.scrollTop;
      const sections = scroller.querySelectorAll('section, footer');
      let current = 'home';
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (el.offsetTop - 120 <= top) current = el.id;
      });
      setActiveSection(current);
    };

    scroller.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => scroller.removeEventListener('scroll', handleScroll);
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const scrollTo = (id: string) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const el = scroller.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="theme-wrapper relative h-[100dvh] w-full bg-cream">
      <audio ref={audioRef} loop>
        <source
          src="https://cdn.pixabay.com/download/audio/2022/10/30/audio_347111d654.mp3?filename=romantic-piano-music-122736.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Cover overlay */}
      {!opened && (
        <div className="absolute inset-0 z-50">
          <Cover onOpen={handleOpen} guestName={guestName} />
        </div>
      )}

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="h-[100dvh] w-full overflow-y-scroll overflow-x-hidden custom-scrollbar"
        style={{ visibility: opened ? 'visible' : 'hidden' }}
      >
        <section id="home" className="relative h-[100dvh] w-full">
          <HeroSection />
        </section>
        <div id="couple">
          <BrideGroom root={scrollRef} />
        </div>
        <div id="events">
          <EventInfo root={scrollRef} />
        </div>
        <Countdown root={scrollRef} />
        <div id="gallery">
          <Gallery root={scrollRef} />
        </div>
        <div id="rsvp">
          <RsvpGuestbook root={scrollRef} />
        </div>
        <div id="gift">
          <GiftSection root={scrollRef} />
        </div>
        <Footer root={scrollRef} />
      </div>

      {/* Music toggle */}
      {opened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-coral border-3 border-ink shadow-md flex items-center justify-center hover:bg-teal transition-colors"
          aria-label="Toggle music"
        >
          <Music className={`w-5 h-5 text-white ${playing ? 'animate-spin-slow' : ''}`} />
        </button>
      )}

      {/* Navigation dots */}
      {opened && (
        <nav className="fixed top-1/2 -translate-y-1/2 right-4 z-40 hidden md:flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="group flex items-center justify-end gap-2"
              aria-label={s.label}
            >
              <span
                className={`font-rounded text-xs font-bold transition-all duration-300 ${
                  activeSection === s.id
                    ? 'opacity-100 text-ink translate-x-0'
                    : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-ink'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`w-3 h-3 rounded-full border-2 border-ink transition-all duration-300 ${
                  activeSection === s.id
                    ? 'bg-coral scale-125'
                    : 'bg-cream group-hover:bg-coral/60'
                }`}
              />
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-coral/25 shape-blob animate-float" />
      <div className="absolute bottom-[-60px] right-[-40px] w-96 h-96 bg-teal/25 shape-blob-2 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/4 right-12 w-24 h-24 bg-sunny/40 shape-blob-3 animate-bounce-soft" />
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-grape/25 shape-blob animate-bounce-soft" style={{ animationDelay: '0.5s' }} />

      {/* Floating stars */}
      <StarIcon className="absolute top-16 left-1/4 w-10 h-10 text-sunny animate-float" />
      <StarIcon className="absolute top-24 right-1/4 w-8 h-8 text-coral animate-float" style={{ animationDelay: '1.5s' }} />
      <StarIcon className="absolute bottom-24 left-1/3 w-6 h-6 text-teal animate-float" style={{ animationDelay: '0.8s' }} />

      <div className="relative z-10 text-center px-6">
        <div className="cartoon-card bg-white p-8 sm:p-10 max-w-md">
          <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-coral border-3 border-ink animate-bounce-soft">
            <Heart className="w-7 h-7 text-white fill-white" />
          </div>

          <p className="font-rounded text-sm tracking-[0.2em] uppercase text-ink/60 mb-4">
            We Invite You To
          </p>

          <h1 className="font-script text-6xl sm:text-7xl text-coral leading-tight mb-1">The Wedding</h1>

          <div className="flex items-center justify-center gap-2 my-3">
            <span className="h-1 w-10 rounded-full bg-ink/20" />
            <StarIcon className="w-5 h-5 text-sunny animate-wiggle" />
            <span className="h-1 w-10 rounded-full bg-ink/20" />
          </div>

          <p className="font-display font-bold text-2xl text-ink mb-6">of Abel &amp; Suci</p>

          <div className="inline-block cartoon-card-teal px-5 py-2">
            <p className="font-rounded text-xs text-white/90">Scroll untuk menjelajah</p>
          </div>
        </div>
      </div>
    </div>
  );
}


