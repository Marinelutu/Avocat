import { Scale, Shield, Building2, Users, Home, Briefcase } from 'lucide-react';
import OrnamentalDivider from './OrnamentalDivider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  { icon: Scale, title: 'Drept Civil', desc: 'Reprezentare în litigii civile, contracte, despăgubiri și drept succesoral. Soluții eficiente pentru protejarea intereselor tale.' },
  { icon: Shield, title: 'Drept Penal', desc: 'Apărare penală puternică în toate fazele procesuale. Experiență dovedită în achitări și reduceri de pedepse.' },
  { icon: Building2, title: 'Drept Comercial', desc: 'Consultanță pentru societăți comerciale, fuziuni, litigii comerciale și recuperare creanțe.' },
  { icon: Users, title: 'Drept Familiei', desc: 'Divorțuri, custodie, partaj și pensie alimentară. Abordare sensibilă și orientată spre rezultat.' },
  { icon: Home, title: 'Drept Imobiliar', desc: 'Tranzacții imobiliare, cadastru, intabulare și litigii funciare. Securizarea investiției tale.' },
  { icon: Briefcase, title: 'Dreptul Muncii', desc: 'Conflicte de muncă, concedieri abuzive, negocieri contracte și drepturile angajaților.' },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicii" className="py-20 md:py-28 bg-background">
      <OrnamentalDivider />
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-reveal font-serif text-3xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'revealed' : ''}`}>
          Domenii de <span className="text-primary">Practică</span>
        </h2>
        <p className="font-sans text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Oferim servicii juridice complete în cele mai importante ramuri ale dreptului.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group bg-card border border-border/30 rounded-lg p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsla(43,52%,54%,0.15)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <s.icon className="w-8 h-8 text-primary mb-5 stroke-[1.5]" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="font-sans text-sm text-primary font-medium group-hover:tracking-wider transition-all">
                Află mai mult →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
