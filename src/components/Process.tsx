import { MessageSquare, FileText, Trophy } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Consultatie Gratuita',
    desc: 'Ne intâlnim, analizam situatia ta si discutam strategia optima. Fara obligatii, fara costuri ascunse.',
  },
  {
    icon: FileText,
    num: '02',
    title: 'Strategie Personalizata',
    desc: 'Construim impreuna cel mai puternic dosar pentru cazul tau, cu atentie la fiecare detaliu.',
  },
  {
    icon: Trophy,
    num: '03',
    title: 'Rezultate Concrete',
    desc: 'Te reprezint cu toata forta legii pentru a obtine ce ti se cuvine. Rezultate masurabile, nu promisiuni.',
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-balance"
          style={{ color: '#0A1628' }}
        >
          Cum Te <span style={{ color: '#B8860B' }}>Ajut</span> — 3 Pasi Simpli
        </h2>
        <p
          className="font-sans text-center max-w-lg mx-auto mb-16"
          style={{ color: '#6B7280' }}
        >
          Un proces clar si transparent, de la prima discutie pana la rezultatul final.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex-1 text-center relative">
                  {/* Number circle */}
                  <div className="relative mx-auto mb-6 w-[100px] h-[100px]">
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center relative z-10"
                      style={{
                        backgroundColor: '#F9FAFB',
                        border: '2px solid rgba(184, 134, 11, 0.3)',
                      }}
                    >
                      <Icon className="w-10 h-10 stroke-[1.5]" style={{ color: '#B8860B' }} />
                    </div>
                    <span
                      className="absolute -top-3 -right-2 font-serif text-5xl font-bold select-none pointer-events-none z-0"
                      style={{ color: 'rgba(184, 134, 11, 0.15)' }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <div
                    className="font-sans text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: '#B8860B' }}
                  >
                    Pasul {i + 1}
                  </div>
                  <h3
                    className="font-serif text-xl font-semibold mb-3"
                    style={{ color: '#0A1628' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed max-w-xs mx-auto"
                    style={{ color: '#6B7280' }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
