import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop floating button */}
      <a
        href="tel:+40700000000"
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-sans font-semibold text-sm animate-pulse-gold shadow-lg hover:scale-105 transition-transform"
      >
        <Phone className="w-4 h-4" />
        Sună Acum
      </a>

      {/* Mobile sticky bottom bar */}
      <a
        href="tel:+40700000000"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-sans font-bold text-base shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      >
        <Phone className="w-5 h-5" />
        Sună Acum →
      </a>
    </>
  );
};

export default FloatingCTA;
