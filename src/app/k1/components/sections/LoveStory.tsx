import { weddingData } from '../../data/wedding';

export function LoveStory() {
  return (
    <section className="relative w-full py-24 bg-fine-ivory px-6 overflow-hidden border-t border-fine">
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-20 reveal-scale">
          <p className="text-fine-sage text-[10px] tracking-[0.4em] uppercase font-fine-sans mb-4">
            Our Journey
          </p>
          <h2 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-6">
            Love Story
          </h2>
          <div className="fine-divider" />
        </div>

        <div className="flex flex-col gap-16">
          {weddingData.loveStory.map((item, i) => (
            <div key={i} className={`reveal flex flex-col ${i % 2 === 1 ? 'sm:items-end' : 'sm:items-start'}`}>
              <div className="w-full max-w-sm">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-fine-sand border border-fine">
                  <img src={item.photo} alt={item.title} className="w-full h-full object-cover fine-art-img" />
                </div>
                <span className="text-fine-sage font-fine-serif italic text-sm">{item.date}</span>
                <h3 className="font-fine-script text-4xl text-fine-charcoal mt-1 mb-3">{item.title}</h3>
                <p className="text-fine-charcoal/65 font-fine-sans text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
