import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

const cases = [
  {
    situation: 'Client acuzat nedrept de fraudă în cadrul unei companii internaționale',
    action: 'Strategie de apărare completă cu probe documentare și martori experți',
    result: 'Achitare completă în 4 luni — toate acuzațiile respinse',
  },
  {
    situation: 'Dispută imobiliară complexă cu un dezvoltator — pierdere financiară de 200.000€',
    action: 'Acțiune civilă cu expertiză tehnică și juridică specializată',
    result: 'Despăgubiri integrale obținute + daune morale acordate',
  },
  {
    situation: 'Concediere abuzivă a unui director executiv de la o companie multinațională',
    action: 'Contestație în instanță + negociere directă cu echipa juridică adversă',
    result: 'Reintegrare în funcție + compensații salariale pe 18 luni',
  },
];

const Cases = () => {
  const { ref, isVisible } = useScrollAnimation();
  const successRate = useCountUp(98, 2000, isVisible);

  return (
    <section
      id="cazuri"
      className="py-20 md:py-28 relative"
    >
      {/* Moody architectural background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsla(43,52%,54%,0.04)_0%,transparent_60%)]" />

      <div className="relative container mx-auto px-4" ref={ref}>
        <h2 className={`text-reveal font-serif text-3xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'revealed' : ''}`}>
          Rezultate <span className="text-primary">Reale</span> Pentru Clienți Reali
        </h2>
        <p className="font-sans text-muted-foreground text-center max-w-lg mx-auto mb-14">
          Câteva dintre cazurile care definesc abordarea mea profesională.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`bg-card/80 backdrop-blur border border-border/30 rounded-lg p-7 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="font-sans text-xs text-primary font-bold tracking-widest uppercase mb-3">Cazul {i + 1}</div>
              <div className="space-y-4">
                <div>
                  <span className="font-sans text-xs text-muted-foreground block mb-1">Situație</span>
                  <p className="font-sans text-sm text-foreground">{c.situation}</p>
                </div>
                <div className="w-8 h-px bg-primary/30" />
                <div>
                  <span className="font-sans text-xs text-muted-foreground block mb-1">Acțiune</span>
                  <p className="font-sans text-sm text-foreground">{c.action}</p>
                </div>
                <div className="w-8 h-px bg-primary/30" />
                <div>
                  <span className="font-sans text-xs text-primary block mb-1 font-semibold">Rezultat</span>
                  <p className="font-sans text-sm text-foreground font-medium">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big stat */}
        <div className="text-center">
          <div className="font-serif text-6xl md:text-8xl font-bold text-primary">{successRate}%</div>
          <p className="font-sans text-muted-foreground mt-2">Rata de succes din cazurile reprezentate</p>
        </div>
      </div>
    </section>
  );
};

export default Cases;
