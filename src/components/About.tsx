const badges = [
  { value: '15+', label: 'Ani Experienta' },
  { value: '500+', label: 'Cazuri' },
  { value: '98%', label: 'Succes' },
];

const About = () => {
  return (
    <section id="despre" className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait */}
          <div className="relative">
            <div className="relative">
              {/* Gold corner accents */}
              <div
                className="absolute -top-3 -left-3 w-16 h-16 pointer-events-none z-20"
                style={{
                  borderTop: '3px solid #B8860B',
                  borderLeft: '3px solid #B8860B',
                }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-16 h-16 pointer-events-none z-20"
                style={{
                  borderBottom: '3px solid #B8860B',
                  borderRight: '3px solid #B8860B',
                }}
              />

              {/* Portrait image */}
              <div
                className="aspect-[3/4] rounded-lg relative overflow-hidden"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <img
                  src="/lawyer.jpg"
                  alt="Av. Alexandru Popescu"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10, 22, 40, 0.8) 0%, rgba(10, 22, 40, 0.1) 40%, transparent 100%)',
                  }}
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-16 h-0.5 mb-4" style={{ backgroundColor: '#B8860B' }} />
                  <p className="font-serif text-lg" style={{ color: '#ffffff' }}>Av. Alexandru Popescu</p>
                  <p className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Baroul Bucuresti</p>
                </div>
              </div>
            </div>

            {/* Achievement badges */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    border: '1px solid rgba(184, 134, 11, 0.3)',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <span className="font-serif text-sm font-bold" style={{ color: '#B8860B' }}>{b.value}</span>
                  <span className="font-sans text-xs" style={{ color: '#6B7280' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance"
              style={{ color: '#0A1628' }}
            >
              Un Avocat In Care Poti Avea{' '}
              <span style={{ color: '#B8860B' }}>Incredere</span>
            </h2>

            <div className="font-sans space-y-4 leading-relaxed text-base" style={{ color: '#4B5563' }}>
              <p>
                Cu o cariera de peste 15 ani in domeniul juridic, am reprezentat cu succes sute de
                clienti in cele mai diverse cauze. De la litigii civile complexe la aparare penala
                de inalta miza, fiecare caz a fost tratat cu aceeasi dedicare si rigurozitate.
              </p>
              <p>
                Am absolvit Facultatea de Drept a Universitatii din Bucuresti si am urmat programe
                de specializare la nivel european. Sunt membru activ al Baroului Bucuresti si
                particip constant la conferinte si seminarii de drept.
              </p>
              <p>
                Filosofia mea este simpla: fiecare client merita o aparare fara compromisuri. Nu
                accept mai multe cazuri decat pot gestiona la cel mai inalt standard, pentru ca
                reputatia mea se construieste pe rezultatele tale.
              </p>
            </div>

            {/* Quote */}
            <blockquote
              className="mt-8 px-6 py-5"
              style={{
                backgroundColor: '#FFFBEB',
                color: '#0A1628',
                borderLeft: '3px solid #B8860B',
                borderRadius: '2px',
              }}
            >
              <p className="font-serif italic text-base leading-relaxed">
                &bdquo;Fiecare client merita cel mai bun aparator. Iau in serios aceasta
                responsabilitate.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
