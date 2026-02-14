import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Acasa', href: '#acasa' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Despre Mine', href: '#despre' },
  { label: 'Cazuri', href: '#cazuri' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Gold top border with glow */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(43 52% 54%) 30%, hsl(43 52% 54%) 70%, transparent 100%)',
          boxShadow: '0 0 15px 3px hsla(43,52%,54%,0.25), 0 0 40px 8px hsla(43,52%,54%,0.1)',
        }}
      />

      {/* Dark city-night background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, hsl(216 60% 7%) 0%, hsl(216 65% 5%) 50%, hsl(216 70% 4%) 100%)',
        }}
      />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 80%, hsla(43,52%,54%,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsla(216,40%,20%,0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + tagline + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-xl text-foreground mb-1">
              Av. Popescu
            </p>
            <p className="font-serif text-sm text-primary mb-4">
              Cabinet de Avocatura
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
              Apararea drepturilor tale cu profesionalism, dedicare si rezultate
              dovedite din 2009.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Navigare
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span
                    className="inline-block h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
                  />
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-muted-foreground">
                  Str. Victoriei nr. 100, Bucuresti
                </span>
              </div>
              <a
                href="tel:+40700000000"
                className="flex items-start gap-3 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  07XX XXX XXX
                </span>
              </a>
              <a
                href="mailto:avocat@cabinet.ro"
                className="flex items-start gap-3 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  avocat@cabinet.ro
                </span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-muted-foreground">
                  L-V: 09:00 - 18:00
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative border-t border-border/10 py-6"
      >
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs text-muted-foreground/60 text-center">
            {'\u00A9'} 2025 Cabinet de Avocatura. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
