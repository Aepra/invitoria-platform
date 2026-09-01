import { useEffect, useRef, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(
      'https://cdn.pixabay.com/audio/2022/10/30/audio_347111d01a.mp3'
    );
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (play) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [play]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/40 bg-[#3a1f0e]/80 backdrop-blur-md text-amber-200 shadow-lg transition-all hover:bg-[#3a1f0e]/90 hover:scale-110"
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? (
        <Volume2 className="h-5 w-5 animate-pulse-glow" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
      {playing && (
        <span className="absolute inset-0 rounded-full border-2 border-amber-300/30 animate-rotate-slow" />
      )}
      <Music className="h-3 w-3 absolute opacity-50" />
    </button>
  );
}
