import { useState, useEffect, useCallback } from 'react';
import { Menu, Phone } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Acasa', href: '#acasa' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Despre Mine', href: '#despre' },
  { label: 'Cazuri Reale', href: '#cazuri' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#acasa');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setSheetOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''
        }`}
      style={{
        backgroundColor: scrolled ? '#ffffff' : '#ffffff',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
      }}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#acasa"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#acasa');
          }}
          className="font-serif text-lg md:text-xl tracking-wide"
          style={{ color: '#0A1628' }}
        >
          Av. Popescu |{' '}
          <span style={{ color: '#B8860B' }}>Cabinet de Avocatura</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-sm font-sans font-medium transition-colors duration-200 ${activeLink === link.href
                ? 'font-bold'
                : 'hover:opacity-80'
                }`}
              style={{
                color: activeLink === link.href ? '#B8860B' : '#4B5563',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="px-5 py-2.5 rounded text-sm font-sans font-semibold transition-colors"
            style={{
              backgroundColor: '#B8860B',
              color: '#ffffff',
            }}
          >
            Consultatie Gratuita →
          </a>
        </div>

        {/* Mobile hamburger with Sheet */}
        <div className="lg:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="p-2" style={{ color: '#0A1628' }} aria-label="Deschide meniul">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80"
              style={{ backgroundColor: '#ffffff' }}
            >
              <SheetTitle className="sr-only">Meniu navigare</SheetTitle>
              <div className="flex flex-col gap-2 pt-8">
                {/* Mobile logo */}
                <div className="px-2 pb-6 mb-4" style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <span className="font-serif text-lg" style={{ color: '#0A1628' }}>
                    Av. Popescu
                  </span>
                  <p className="text-xs mt-1 font-sans" style={{ color: '#6B7280' }}>
                    Cabinet de Avocatura
                  </p>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-lg text-base font-sans transition-colors ${activeLink === link.href
                      ? 'font-bold'
                      : ''
                      }`}
                    style={{
                      color: activeLink === link.href ? '#B8860B' : '#4B5563',
                      backgroundColor: activeLink === link.href ? 'rgba(184, 134, 11, 0.06)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile CTA */}
                <div className="mt-6 px-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded font-sans font-semibold text-base w-full"
                    style={{
                      backgroundColor: '#B8860B',
                      color: '#ffffff',
                    }}
                  >
                    Consultatie Gratuita →
                  </a>
                </div>

                {/* Mobile phone link */}
                <div className="mt-4 px-2">
                  <a
                    href="tel:+40700000000"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded font-sans text-sm w-full transition-colors"
                    style={{
                      border: '1px solid rgba(184, 134, 11, 0.3)',
                      color: '#B8860B',
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    +40 700 000 000
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
