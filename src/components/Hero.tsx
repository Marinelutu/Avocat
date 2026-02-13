import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import GoldParticles from './GoldParticles';
import { useCountUp, useParallax } from '@/hooks/useScrollAnimation';

const words = ['Apărarea', 'Drepturilor', 'Tale', 'Este', 'Misiunea', 'Noastră.'];

const stats = [
  { value: 98, suffix: '%', label: 'Cazuri Câștigate' },
  { value: 500, suffix: '+', label: 'Clienți Mulțumiți' },
  { value: 15, suffix: '+', label: 'Ani Experiență' },
];

const Hero = () => {
  const [loadedWords, setLoadedWords] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const { ref: parallaxRef, offset } = useParallax(0.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadedWords((prev) => {
        if (prev >= words.length) {
          clearInterval(timer);
          setTimeout(() => setStatsVisible(true), 300);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const stat1 = useCountUp(stats[0].value, 2000, statsVisible);
  const stat2 = useCountUp(stats[1].value, 2000, statsVisible);
  const stat3 = useCountUp(stats[2].value, 2000, statsVisible);
  const countValues = [stat1, stat2, stat3];

  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={parallaxRef}>
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsla(43,52%,54%,0.05)_0%,transparent_60%)]" />

      <GoldParticles />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-3 md:mr-4 transition-all duration-500 ${
                i < loadedWords
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${i === words.length - 1 ? 'text-primary' : 'text-foreground'}`}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className={`font-sans text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-700 delay-700 ${loadedWords >= words.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Cu peste 15 ani de experiență, te reprezint cu determinare, strategie și rezultate dovedite.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-1000 ${loadedWords >= words.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#contact"
            className="gold-shimmer bg-primary text-primary-foreground px-8 py-4 rounded font-sans font-bold text-base hover:scale-105 transition-transform"
          >
            Solicită Consultație Gratuită
          </a>
          <a
            href="#servicii"
            className="border border-primary/40 text-primary px-8 py-4 rounded font-sans font-semibold text-base hover:bg-primary/10 transition-colors"
          >
            Vezi Serviciile
          </a>
        </div>

        {/* Stats */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 transition-all duration-700 delay-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-primary/30 mx-8" />}
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  {countValues[i]}{stat.suffix}
                </div>
                <div className="font-sans text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </a>
    </section>
  );
};

export default Hero;
