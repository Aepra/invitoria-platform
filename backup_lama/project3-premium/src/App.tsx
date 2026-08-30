import { useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Cover } from '@/components/Cover';
import { Hero } from '@/components/sections/Hero';
import { QuranVerse } from '@/components/sections/QuranVerse';
import { Welcome } from '@/components/sections/Welcome';
import { Couple, Biodata } from '@/components/sections/Couple';
import { LoveStory } from '@/components/sections/LoveStory';
import { EventDetails } from '@/components/sections/EventDetails';
import { Gallery } from '@/components/sections/Gallery';
import { LiveStream } from '@/components/sections/LiveStream';
import { GiftSection } from '@/components/sections/GiftSection';
import { Guestbook } from '@/components/sections/Guestbook';
import { Footer } from '@/components/sections/Footer';
import { MusicPlayer } from '@/components/MusicPlayer';

function App() {
  const scrollRef = useRef<HTMLElement>(null);
  const [opened, setOpened] = useState(false);

  useScrollReveal(scrollRef);

  return (
    <>
      {!opened && <Cover onOpen={() => setOpened(true)} />}

      <main ref={scrollRef} className="app-scroll">
        <Hero />
        <QuranVerse />
        <Welcome />
        <Couple />
        <Biodata />
        <LoveStory />
        <EventDetails />
        <Gallery />
        <LiveStream />
        <GiftSection />
        <Guestbook />
        <Footer />
      </main>

      {opened && <MusicPlayer />}
    </>
  );
}

export default App;
