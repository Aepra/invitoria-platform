import { weddingData } from '../../data/wedding';

export function Footer() {
  return (
    <footer className="relative w-full py-20 bg-fine-charcoal text-fine-ivory text-center flex flex-col items-center">
      <div className="reveal-scale mb-8">
        <h2 className="font-fine-script text-5xl text-fine-sage mb-2">
          {weddingData.bride.nickname} &amp; {weddingData.groom.nickname}
        </h2>
        <p className="font-fine-sans text-xs tracking-[0.4em] uppercase text-fine-ivory/50">
          12 . 12 . 2026
        </p>
      </div>
      
      <p className="text-fine-ivory/40 text-[10px] uppercase tracking-widest font-fine-sans">
        Made with ♥ by Invitoria
      </p>
    </footer>
  );
}
