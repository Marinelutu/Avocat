import { Star, Quote } from 'lucide-react';

const testimonials = [
  { text: 'Domnul Popescu mi-a salvat afacerea. Profesionalism desavarsit si o dedicare pe care nu am intalnit-o la alti avocati.', name: 'Andrei M.', type: 'Drept Comercial' },
  { text: 'Am fost achitat complet datorita strategiei sale impecabile. Nu am cuvinte sa-i multumesc suficient.', name: 'Mihai D.', type: 'Drept Penal' },
  { text: 'Procesul de divort a fost gestionat cu o sensibilitate si eficienta remarcabila. Custodia copiilor a fost rezolvata in favoarea mea.', name: 'Elena R.', type: 'Drept Familiei' },
];

const StarRating = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#B8860B' }} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimoniale" className="py-20 md:py-28" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: '#0A1628' }}
        >
          Ce Spun <span style={{ color: '#B8860B' }}>Clientii</span>
        </h2>

        {/* Testimonial cards - static layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg p-8"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
              }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: 'rgba(184, 134, 11, 0.3)' }} />
              <p
                className="font-sans leading-relaxed text-base mb-6"
                style={{ color: '#374151' }}
              >
                &bdquo;{t.text}&rdquo;
              </p>
              <StarRating />
              <p className="font-sans text-sm mt-3" style={{ color: '#6B7280' }}>
                {t.name} — {t.type}
              </p>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <p
            className="font-serif text-xl md:text-2xl mb-6 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#0A1628' }}
          >
            Alatura-te celor peste 500 de clienti care si-au castigat cazul.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-sans font-bold text-sm tracking-wide"
            style={{ backgroundColor: '#B8860B', color: '#ffffff' }}
          >
            Incepe Azi — Consultatie Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
