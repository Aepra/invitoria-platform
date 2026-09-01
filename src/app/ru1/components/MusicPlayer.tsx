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
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass-panel-dark border border-gold-400/40 flex items-center justify-center text-gold-300 hover:scale-110 transition-transform"
        aria-label="Toggle music"
      >
        {playing ? (
          <Music className="w-5 h-5 animate-pulse-soft" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
