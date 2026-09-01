'use client';
import { useEffect, useRef, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src="https://cdn.pixabay.com/audio/2022/10/18/audio_3b1f647f5f.mp3"
          type="audio/mpeg"
        />
      </audio>
      <button
        onClick={toggle}
        className="absolute bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-fine-charcoal text-fine-ivory flex items-center justify-center hover:bg-fine-sage transition-colors"
        aria-label="Toggle music"
      >
        {playing ? (
          <Music className="w-4 h-4 animate-pulse-soft" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </button>
    </>
  );
}
