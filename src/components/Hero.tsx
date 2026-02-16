import { Star } from 'lucide-react';

const stats = [
  { value: '98%', label: 'Cazuri Câștigate' },
  { value: '500+', label: 'Clienți' },
  { value: '15+', label: 'Ani Experiență' },
];

const Hero = () => {
  return (
    <section
      id="acasa"
      className="relative min-h-[85vh] flex flex-col justify-center"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Main content */}
      <div className="container mx-auto px-4 text-center pt-24 pb-20">
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border"
          style={{
            borderColor: '#B8860B',
            backgroundColor: 'rgba(184, 134, 11, 0.06)',
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="font-sans text-sm" style={{ color: '#0A1628' }}>
            Disponibil acum — Răspundem astăzi
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ color: '#0A1628' }}
        >
          Apărarea Drepturilor Tale Este{' '}
          <span style={{ color: '#B8860B' }}>Misiunea Noastră.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-6"
          style={{ color: '#4B5563' }}
        >
          Cu peste 15 ani de experiență, te reprezint cu determinare, strategie și rezultate dovedite.
        </p>

        {/* Service areas */}
        <p
          className="font-sans text-base md:text-lg mb-10"
          style={{ color: '#6B7280' }}
        >
          Drept Civil · Drept Penal · Drept Comercial
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-8 py-4 rounded font-sans font-bold text-base transition-colors"
            style={{
              backgroundColor: '#B8860B',
              color: '#ffffff',
            }}
          >
            Solicită Consultație Gratuită
          </a>
          <a
            href="#servicii"
            className="px-8 py-4 rounded font-sans font-semibold text-base transition-colors"
            style={{
              border: '2px solid #B8860B',
              color: '#B8860B',
            }}
          >
            Vezi Serviciile
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div
                  className="hidden sm:block w-px h-10 mx-8"
                  style={{ backgroundColor: 'rgba(184, 134, 11, 0.35)' }}
                />
              )}
              <div className="text-center">
                <div
                  className="font-serif text-3xl md:text-4xl font-bold"
                  style={{ color: '#B8860B' }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-sans text-sm mt-1"
                  style={{ color: '#6B7280' }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-3 rounded-lg"
          style={{
            backgroundColor: '#F9FAFB',
            border: '1px solid #E5E7EB',
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>

          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: '#FBBC05' }} />
            ))}
          </div>

          <span className="font-sans text-sm" style={{ color: '#4B5563' }}>
            4.9/5 — 47 recenzii
          </span>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold"
            style={{ color: '#B8860B' }}
          >
            Citește pe Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
