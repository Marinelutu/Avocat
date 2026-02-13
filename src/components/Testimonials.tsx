import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import OrnamentalDivider from './OrnamentalDivider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  { text: 'Domnul Popescu mi-a salvat afacerea. Profesionalism desăvârșit și o dedicare pe care nu am întâlnit-o la alți avocați.', name: 'Andrei M.', type: 'Drept Comercial' },
  { text: 'Am fost achitat complet datorită strategiei sale impecabile. Nu am cuvinte să-i mulțumesc suficient.', name: 'Mihai D.', type: 'Drept Penal' },
  { text: 'Procesul de divorț a fost gestionat cu o sensibilitate și eficiență remarcabilă. Custodia copiilor a fost rezolvată în favoarea mea.', name: 'Elena R.', type: 'Drept Familiei' },
  { text: 'Recuperarea prejudiciului de 150.000€ părea imposibilă. Avocatul Popescu a reușit în doar 6 luni.', name: 'Cristian P.', type: 'Drept Civil' },
  { text: 'Recomand cu cea mai mare încredere. Comunicare excelentă, mereu disponibil și rezultate peste așteptări.', name: 'Ioana S.', type: 'Drept Imobiliar' },
];

const featured = testimonials[0];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimoniale" className="py-20 md:py-28 bg-secondary">
      <OrnamentalDivider />
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-reveal font-serif text-3xl md:text-5xl font-bold text-center mb-14 ${isVisible ? 'revealed' : ''}`}>
          Ce Spun <span className="text-primary">Clienții</span>
        </h2>

        {/* Featured testimonial */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
          <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed mb-4">
            „{featured.text}"
          </p>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
          </div>
          <p className="font-sans text-sm text-muted-foreground">{featured.name} — {featured.type}</p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="bg-card border border-border/30 rounded-lg p-8 text-center">
                  <Quote className="w-6 h-6 text-primary/30 mx-auto mb-3" />
                  <p className="font-sans text-foreground leading-relaxed mb-4">„{t.text}"</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-primary text-primary" />)}
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">{t.name} — {t.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-primary w-6' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
