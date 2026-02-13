import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Acasă', href: '#acasa' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Despre Mine', href: '#despre' },
  { label: 'Cazuri', href: '#cazuri' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#acasa" className="font-serif text-lg md:text-xl text-foreground tracking-wide">
          Av. Popescu | <span className="text-primary">Cabinet de Avocatură</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-shimmer bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-sans font-semibold animate-pulse-gold hover:scale-105 transition-transform"
          >
            Consultație Gratuită →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-sans text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-primary-foreground px-8 py-3 rounded font-sans font-semibold mt-4"
          >
            Consultație Gratuită →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
