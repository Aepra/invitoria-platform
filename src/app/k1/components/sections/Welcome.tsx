export function Welcome() {
  return (
    <section className="relative w-full py-24 px-8 bg-fine-ivory flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-lg text-center">
        <div className="reveal">
          <p className="text-fine-sage text-[10px] tracking-[0.4em] uppercase font-fine-sans mb-6">
            Assalamu&apos;alaikum
          </p>
          <h2 className="font-fine-script text-5xl sm:text-6xl text-fine-charcoal mb-10">
            Welcome
          </h2>
          <p className="text-fine-charcoal/75 font-fine-serif text-base leading-relaxed mb-6">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan upacara pernikahan putra-putri kami.
          </p>
          <p className="text-fine-charcoal/50 font-fine-serif text-sm italic">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            untuk turut hadir dan memberikan doa restu.
          </p>
        </div>
        <div className="reveal-scale mt-10">
          <div className="fine-divider" />
        </div>
      </div>
    </section>
  );
}
