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
    <div className="theme-wrapper relative h-[100dvh] w-full bg-comic-white">
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

      {/* Music toggle - Comic Style */}
      {opened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full comic-btn flex items-center justify-center bg-comic-cyan hover:bg-cyan-500"
          aria-label="Toggle music"
        >
          <Music className={`w-6 h-6 text-comic-ink ${playing ? 'animate-spin-slow' : ''}`} />
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
                className={`font-comic-head text-sm tracking-wider transition-all duration-300 ${
                  activeSection === s.id
                    ? 'opacity-100 text-comic-ink translate-x-0 bg-comic-yellow px-2 py-1 border-2 border-comic-ink'
                    : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-comic-ink bg-white px-2 py-1 border-2 border-comic-ink'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`w-4 h-4 border-2 border-comic-ink transition-all duration-300 ${
                  activeSection === s.id
                    ? 'bg-comic-red scale-125 rotate-45'
                    : 'bg-white group-hover:bg-comic-yellow'
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
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-halftone-yellow">
      
      {/* Comic Action Background Elements */}
      <div className="absolute top-10 left-[-20px] w-40 h-40 bg-comic-cyan pow-shape opacity-60 animate-comic-float" />
      <div className="absolute bottom-10 right-[-30px] w-64 h-64 bg-comic-red pow-shape opacity-40 animate-comic-float" style={{ animationDelay: '1s' }} />

      {/* Floating stars */}
      <StarIcon className="absolute top-1/4 right-1/4 w-12 h-12 text-comic-red animate-pow" />
      <StarIcon className="absolute bottom-1/3 left-1/4 w-8 h-8 text-comic-cyan animate-action-shake" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-4 w-full max-w-lg">
        <div className="comic-panel p-8 sm:p-12 relative animate-pow">
          
          {/* Top Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-comic-yellow border-4 border-comic-ink px-4 py-1 -rotate-3">
            <p className="font-comic-head text-lg tracking-widest text-comic-ink">WE INVITE YOU TO</p>
          </div>

          <h1 className="font-comic-head text-6xl sm:text-7xl text-comic-red leading-none mb-2 mt-4 uppercase drop-shadow-[3px_3px_0_rgba(17,24,39,1)]">
            The Wedding
          </h1>

          <div className="flex items-center justify-center gap-2 my-4">
            <span className="h-1.5 w-12 bg-comic-ink" />
            <span className="font-comic-head text-xl">VS</span>
            <span className="h-1.5 w-12 bg-comic-ink" />
          </div>

          <p className="font-comic-marker text-4xl text-comic-cyan mb-8 drop-shadow-[2px_2px_0_rgba(17,24,39,1)]">
            Abel &amp; Suci
          </p>

          <div className="inline-block bg-comic-ink px-6 py-2 border-2 border-white transform rotate-2 animate-action-shake">
            <p className="font-comic-body font-bold text-sm text-comic-yellow uppercase tracking-widest">
              Scroll Down!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


