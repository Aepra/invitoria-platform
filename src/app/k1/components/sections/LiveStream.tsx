import { PlayCircle } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="relative w-full py-24 bg-fine-ivory px-6 overflow-hidden border-t border-fine">
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal-scale">
          <p className="text-fine-sage text-xs tracking-[0.3em] uppercase font-fine-sans mb-4">
            Virtual Attendance
          </p>
          <h2 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-8">
            Live Streaming
          </h2>
          <div className="fine-divider" />
        </div>

        <div className="reveal bg-white border border-fine shadow-sm p-4 sm:p-8 text-center flex flex-col items-center">
          
          {/* Video Section */}
          <div className="w-full relative aspect-video border border-fine bg-fine-sand mb-8 overflow-hidden group">
            <iframe
              className="absolute inset-0 w-full h-full opacity-90 transition-opacity group-hover:opacity-100"
              src="https://www.youtube.com/embed/YE7VzlLtp-4?controls=0"
              title="Prewedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-fine-charcoal/70 font-fine-sans text-sm font-light leading-relaxed mb-8 max-w-md mx-auto">
            Bagi keluarga dan sahabat yang belum berkesempatan hadir, Anda dapat menyaksikan momen bahagia kami melalui siaran langsung.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-fine-charcoal text-fine-ivory text-xs tracking-[0.25em] uppercase hover:bg-fine-sage transition-all"
          >
            <PlayCircle className="w-4 h-4 font-light" />
            Tonton Streaming
          </a>
        </div>
      </div>
    </section>
  );
}
