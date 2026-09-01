export function QuranVerse() {
  const quote = {
    text: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
  };

  return (
    <section className="relative w-full py-20 px-6 bg-fine-sand flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-lg text-center">
        <div className="reveal bg-white/70 border border-fine shadow-fine p-8 sm:p-12">
          <p className="text-fine-sage text-3xl mb-6 opacity-70">❝</p>
          <p className="font-fine-serif text-base text-fine-charcoal/80 leading-relaxed italic mb-6">
            {quote.text}
          </p>
          <div className="fine-divider mb-4" />
          <p className="text-fine-sage font-fine-sans text-[10px] tracking-[0.3em] uppercase">
            {quote.source}
          </p>
        </div>
      </div>
    </section>
  );
}
