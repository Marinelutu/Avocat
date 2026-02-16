import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Acasa', href: '#acasa' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Despre Mine', href: '#despre' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0A1628' }}>
      {/* Top border */}
      <div className="h-px w-full" style={{ backgroundColor: 'rgba(184, 134, 11, 0.3)' }} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + tagline */}
          <div>
            <p className="font-serif text-xl mb-1" style={{ color: '#ffffff' }}>
              Av. Popescu
            </p>
            <p className="font-serif text-sm mb-4" style={{ color: '#B8860B' }}>
              Cabinet de Avocatura
            </p>
            <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Apararea drepturilor tale cu profesionalism, dedicare si rezultate
              dovedite din 2009.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#ffffff' }}>
              Navigare
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-sm transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#ffffff' }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'rgba(184, 134, 11, 0.7)' }} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Str. Victoriei nr. 100, Bucuresti
                </span>
              </div>
              <a
                href="tel:+40700000000"
                className="flex items-start gap-3"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'rgba(184, 134, 11, 0.7)' }} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  07XX XXX XXX
                </span>
              </a>
              <a
                href="mailto:avocat@cabinet.ro"
                className="flex items-start gap-3"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'rgba(184, 134, 11, 0.7)' }} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  avocat@cabinet.ro
                </span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'rgba(184, 134, 11, 0.7)' }} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  L-V: 09:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs text-center" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
            © 2025 Cabinet de Avocatura. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
