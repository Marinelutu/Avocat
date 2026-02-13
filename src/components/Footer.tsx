import OrnamentalDivider from './OrnamentalDivider';

const Footer = () => (
  <footer className="border-t border-primary/20 bg-secondary">
    <OrnamentalDivider className="py-4" />
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + tagline */}
        <div>
          <p className="font-serif text-lg text-foreground mb-3">
            Av. Popescu | <span className="text-primary">Cabinet de Avocatură</span>
          </p>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            Apărarea drepturilor tale cu profesionalism, dedicare și rezultate dovedite din 2009.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigare</h4>
          <div className="space-y-2">
            {['Acasă', 'Servicii', 'Despre Mine', 'Cazuri', 'Testimoniale', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '')}`}
                className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="font-sans text-sm text-muted-foreground space-y-2">
            <p>Str. Victoriei nr. 100, București</p>
            <p>Tel: 07XX XXX XXX</p>
            <p>Email: avocat@cabinet.ro</p>
            <p>L-V: 09:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-border/20 py-6">
      <div className="container mx-auto px-4">
        <p className="font-sans text-xs text-muted-foreground text-center">
          © 2025 Cabinet de Avocatură Popescu. Toate drepturile rezervate. | Politică de Confidențialitate
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
