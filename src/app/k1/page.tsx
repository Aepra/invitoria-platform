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
    <div className="relative min-h-screen lg:flex lg:items-center lg:justify-center bg-[#E8E4D9] overflow-hidden">
      {/* Background for Desktop - Soft abstract */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-center scale-105 opacity-60" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg?auto=compress&cs=tinysrgb&w=1920')", filter: "blur(5px)" }} 
      />

      {/* Mobile-sized container centered on desktop (Simulated Phone) */}
      <div className="w-full h-[100dvh] lg:w-[414px] lg:h-[90vh] lg:rounded-2xl shrink-0 relative bg-fine-ivory mx-auto shadow-fine flex flex-col z-10 lg:border border-fine overflow-hidden">
        {!opened && <Cover onOpen={() => setOpened(true)} />}

        <main ref={scrollRef} className="app-scroll flex-1 relative w-full bg-fine-ivory custom-scrollbar">
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

