import { Scale, Shield, Briefcase, Heart, Home, Users } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Drept Civil',
    desc: 'Reprezentare în litigii civile, contracte, despăgubiri și drept succesoral. Soluții eficiente pentru protejarea intereselor tale.',
  },
  {
    icon: Shield,
    title: 'Drept Penal',
    desc: 'Apărare penală puternică în toate fazele procesuale. Experiență dovedită în achitări și reduceri de pedepse.',
  },
  {
    icon: Briefcase,
    title: 'Drept Comercial',
    desc: 'Consultanță pentru societăți comerciale, fuziuni, litigii comerciale și recuperare creanțe.',
  },
  {
    icon: Heart,
    title: 'Dreptul Familiei',
    desc: 'Divorțuri, custodie, partaj și pensie alimentară. Abordare sensibilă și orientată spre rezultat.',
  },
  {
    icon: Home,
    title: 'Drept Imobiliar',
    desc: 'Tranzacții imobiliare, cadastru, intabulare și litigii funciare. Securizarea investiției tale.',
  },
  {
    icon: Users,
    title: 'Dreptul Muncii',
    desc: 'Conflicte de muncă, concedieri abuzive, negocieri contracte și drepturile angajaților.',
  },
];

const Services = () => {
  return (
    <section
      id="servicii"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      <div className="container mx-auto px-4">
        {/* Title block */}
        <div className="text-center mb-14">
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#0A1628' }}
          >
            Domenii de{' '}
            <span style={{ color: '#B8860B' }}>Practică</span>
          </h2>

          {/* Gold line */}
          <div
            className="mx-auto mb-5"
            style={{
              width: 60,
              height: 2,
              backgroundColor: '#B8860B',
            }}
          />

          <p
            className="font-sans text-base md:text-lg max-w-xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            Experiență dovedită în cele mai complexe cazuri juridice.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="rounded-lg p-8 flex flex-col"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                }}
              >
                <Icon
                  className="w-9 h-9 mb-5 stroke-[1.5]"
                  style={{ color: '#B8860B' }}
                />
                <h3
                  className="font-serif text-xl font-semibold mb-3"
                  style={{ color: '#0A1628' }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed mb-5"
                  style={{ color: '#6B7280' }}
                >
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-auto font-sans text-sm font-medium"
                  style={{ color: '#B8860B' }}
                >
                  Ai o situație de acest tip? Contactează-mă →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
