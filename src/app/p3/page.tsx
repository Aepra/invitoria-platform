'use client';
import './index.css';
import { useRef, useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Cover } from './components/Cover';
import { Hero } from './components/sections/Hero';
import { QuranVerse } from './components/sections/QuranVerse';
import { Welcome } from './components/sections/Welcome';
import { Couple } from './components/sections/Couple';
import { LoveStory } from './components/sections/LoveStory';
import { SaveTheDate } from './components/sections/SaveTheDate';
import { EventDetails } from './components/sections/EventDetails';
import { Gallery } from './components/sections/Gallery';
import { LiveStream } from './components/sections/LiveStream';
import { GiftSection } from './components/sections/GiftSection';
import { Guestbook } from './components/sections/Guestbook';
import { Footer } from './components/sections/Footer';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  const scrollRef = useRef<HTMLElement>(null!);
  const [opened, setOpened] = useState(false);

  useScrollReveal(scrollRef);

  return (
    <div className="relative min-h-screen lg:flex lg:items-center lg:justify-center bg-[#1D1231] overflow-hidden">
      {/* Background for Desktop */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-center scale-105" 
        style={{ backgroundImage: "url('/demo/royal_prewedding.png')", filter: "blur(10px) brightness(0.3)" }} 
      />

      {/* Mobile-sized container centered on desktop (Simulated Phone) */}
      <div className="w-full lg:w-[414px] lg:h-screen shrink-0 relative bg-royal-900 mx-auto shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col z-10 lg:border-x lg:border-gold-400/20">
        {!opened && <Cover onOpen={() => setOpened(true)} />}

        <main ref={scrollRef} className="app-scroll flex-1 relative w-full bg-royal-900">
          <Hero />
          <QuranVerse />
          <Welcome />
          <Couple />
          <SaveTheDate />
          <LoveStory />
          <EventDetails />
          <Gallery />
          <LiveStream />
          <GiftSection />
          <Guestbook />
          <Footer />
        </main>

        {opened && <MusicPlayer />}
      </div>
    </div>
  );
}

export default App;

