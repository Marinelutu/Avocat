import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  { q: 'Cât costă o consultație inițială?', a: 'Prima consultație este complet gratuită și fără obligații. Analizăm împreună situația ta și îți ofer o evaluare sinceră a cazului, inclusiv estimarea costurilor și a duratei.' },
  { q: 'Cât durează un proces în medie?', a: 'Durata variază semnificativ în funcție de complexitatea cazului și de instanța competentă. Un proces civil simplu poate dura 6-12 luni, în timp ce un dosar penal complex poate necesita 1-3 ani. Voi fi transparent cu tine încă de la prima discuție.' },
  { q: 'Ce documente am nevoie pentru prima întâlnire?', a: 'Aduce orice documente relevante: contracte, corespondență, hotărâri anterioare, acte de identitate. Dacă nu ai toate documentele, nu-ți face griji — te voi ghida exact ce este necesar.' },
  { q: 'Cum funcționează plata onorariului?', a: 'Ofer flexibilitate: onorariu fix stabilit de la început, plata în rate sau, în anumite cazuri, onorariu de succes (plata la câștigarea cazului). Totul este transparent și stabilit printr-un contract clar.' },
  { q: 'Lucrezi și în afara Bucureștiului?', a: 'Da, reprezint clienți în instanțe din întreaga țară. De asemenea, ofer consultații online prin videoconferință pentru clienții din alte orașe sau din străinătate.' },
  { q: 'Pot fi reprezentat dacă nu sunt cetățean român?', a: 'Absolut. Am experiență cu clienți internaționali și pot comunica în engleză și franceză. Drepturile tale sunt protejate indiferent de cetățenie.' },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <h2 className={`text-reveal font-serif text-3xl md:text-5xl font-bold text-center mb-14 ${isVisible ? 'revealed' : ''}`}>
          Întrebări <span className="text-primary">Frecvente</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-border/30 rounded-lg overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-sans font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-5 px-5' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
