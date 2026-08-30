import { useEffect, useMemo, useRef, useState } from 'react';
import { Music, Heart, Home, Calendar, Images, MessageSquare, Gift } from 'lucide-react';
import Cover from '@/components/sections/Cover';
import BrideGroom from '@/components/sections/BrideGroom';
import EventInfo from '@/components/sections/EventInfo';
import Countdown from '@/components/sections/Countdown';
import Gallery from '@/components/sections/Gallery';
import RsvpGuestbook from '@/components/sections/RsvpGuestbook';
import GiftSection from '@/components/sections/Gift';
import Footer from '@/components/sections/Footer';

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
    const params = new URLSearchParams(window.location.search);
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
    <div className="relative h-[100dvh] w-full bg-dark">
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
          className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Toggle music"
        >
          <Music className={`w-5 h-5 ${playing ? 'animate-spin-slow' : ''}`} />
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
                className={`font-sans text-xs tracking-wider transition-all duration-300 ${
                  activeSection === s.id
                    ? 'opacity-100 text-primary translate-x-0'
                    : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-dark'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeSection === s.id
                    ? 'bg-primary scale-125 ring-2 ring-primary/30'
                    : 'bg-dark/40 group-hover:bg-primary/60'
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
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/34362507/pexels-photo-34362507.jpeg?auto=compress&cs=tinysrgb&h=1200')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/70" />

      <div className="relative z-10 text-center text-secondary px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-90 mb-4">
          We Invite You To
        </p>
        <h1 className="font-script text-7xl sm:text-8xl drop-shadow-lg mb-4">The Wedding</h1>
        <p className="font-serif italic text-2xl mb-8">of Abel &amp; Suci</p>
        <p className="font-sans text-sm tracking-wider opacity-80 animate-float">
          Scroll untuk menjelajah
        </p>
      </div>
    </div>
  );
}
