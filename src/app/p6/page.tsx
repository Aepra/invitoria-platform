'use client';
import './index.css';
import { useRef, useState } from 'react';
import { useReveal } from './hooks/useReveal';
import { Cover } from './components/Cover';
import { Navbar } from './components/Navbar';
import { MusicPlayer } from './components/MusicPlayer';
import { Clouds } from './components/Clouds';
import { MorphBird } from './components/MorphBird';
import { Hero } from './components/sections/Hero';
import { SaveTheDate } from './components/sections/SaveTheDate';
import { Quote } from './components/sections/Quote';
import { Welcome } from './components/sections/Welcome';
import { Couple } from './components/sections/Couple';
import { LoveStory } from './components/sections/LoveStory';
import { EventDetails } from './components/sections/EventDetails';
import { Gallery } from './components/sections/Gallery';
import { LiveStream } from './components/sections/LiveStream';
import { Gift } from './components/sections/Gift';
import { Guestbook } from './components/sections/Guestbook';
import { Footer } from './components/sections/Footer';

function App() {
  const scrollRef = useRef<HTMLElement>(null!);
  const [opened, setOpened] = useState(false);

  useReveal(scrollRef);

  return (
    <div className="relative min-h-screen lg:flex lg:items-center lg:justify-center bg-cream-200 overflow-hidden">
      {/* Desktop backdrop */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-cream-100 via-sage-50 to-clay-100" />

      <div className="w-full lg:w-[414px] lg:h-screen shrink-0 relative bg-cream-100 mx-auto shadow-[0_0_60px_rgba(49,87,65,0.25)] flex flex-col z-10 lg:border-x lg:border-sage-200">
        {!opened && <Cover onOpen={() => setOpened(true)} />}

        <Clouds />
        <Navbar />
        <main ref={scrollRef} className="app-scroll flex-1 relative w-full bg-cream-100">
          <Hero />
          <SaveTheDate />
          <Quote />
          <MorphBird />
          <Welcome />
          <Couple />
          <LoveStory />
          <EventDetails />
          <Gallery />
          <LiveStream />
          <Gift />
          <Guestbook />
          <Footer />
        </main>

        {opened && <MusicPlayer />}
      </div>
    </div>
  );
}

export default App;