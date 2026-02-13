import { MessageSquare, FileText, Trophy } from 'lucide-react';
import OrnamentalDivider from './OrnamentalDivider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { icon: MessageSquare, title: 'Consultație Gratuită', desc: 'Ne întâlnim, analizăm situația ta și discutăm strategia optimă. Fără obligații, fără costuri ascunse.' },
  { icon: FileText, title: 'Strategie Personalizată', desc: 'Construim împreună cel mai puternic dosar pentru cazul tău, cu atenție la fiecare detaliu.' },
  { icon: Trophy, title: 'Rezultate Concrete', desc: 'Te reprezint cu toată forța legii pentru a obține ce ți se cuvine. Rezultate măsurabile, nu promisiuni.' },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <OrnamentalDivider />
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-reveal font-serif text-3xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'revealed' : ''}`}>
          Cum Te <span className="text-primary">Ajut</span> — 3 Pași Simpli
        </h2>
        <p className="font-sans text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Un proces clar și transparent, de la prima discuție până la rezultatul final.
        </p>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-8 max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-border/40">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 text-center relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 250}ms` : '0ms' }}
            >
              <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <step.icon className="w-10 h-10 text-primary stroke-[1.5]" />
              </div>
              <div className="font-sans text-xs text-primary font-bold tracking-widest uppercase mb-2">
                Pasul {i + 1}
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
