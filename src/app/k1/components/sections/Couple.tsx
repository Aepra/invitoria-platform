import { weddingData } from '../../data/wedding';

type Person = typeof weddingData.bride;

function PersonCard({ person, label, revealClass }: { person: Person; label: string; revealClass: string }) {
  return (
    <div className={`${revealClass} flex flex-col items-center text-center`}>
      <div className="relative mb-8 group">
        <div className="absolute -inset-3 border border-fine-sage/30" />
        <div className="relative w-44 h-56 sm:w-52 sm:h-64 overflow-hidden bg-fine-sand">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover fine-art-img transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <p className="text-fine-sage text-[10px] tracking-[0.35em] uppercase font-fine-sans mb-3">{label}</p>
      <h3 className="font-fine-script text-5xl text-fine-charcoal mb-2 leading-tight">
        {person.nickname}
      </h3>
      <p className="text-fine-charcoal/40 font-fine-serif text-sm italic mb-4">Putra/i dari</p>
      <p className="text-fine-charcoal/80 font-fine-serif text-sm mb-1">{person.father}</p>
      <p className="text-fine-charcoal/60 font-fine-serif text-sm">&amp; {person.mother}</p>
    </div>
  );
}

export function Couple() {
  return (
    <section className="relative w-full py-24 bg-fine-ivory overflow-hidden px-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-20 reveal-scale">
          <p className="text-fine-sage text-[10px] tracking-[0.4em] uppercase font-fine-sans mb-4">
            The Couple
          </p>
          <h2 className="font-fine-serif text-4xl sm:text-5xl text-fine-charcoal mb-6">
            Bride &amp; Groom
          </h2>
          <div className="fine-divider" />
        </div>

        <div className="grid gap-20">
          <PersonCard person={weddingData.bride} label="The Bride" revealClass="reveal-left" />
          <PersonCard person={weddingData.groom} label="The Groom" revealClass="reveal-right" />
        </div>
      </div>
    </section>
  );
}
