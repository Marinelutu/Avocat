import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend
    alert('Mulțumim! Vă vom contacta în cel mai scurt timp.');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-transparent to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 skew-x-[-6deg] translate-x-20 hidden lg:block" />

      <div className="relative container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-reveal font-serif text-3xl md:text-5xl font-bold mb-6">
              Drepturile Tale <span className="text-primary">Nu Pot Aștepta.</span>
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              Primul pas este o conversație. Consultația inițială este gratuită — fără obligații, fără costuri ascunse. Sună acum sau completează formularul alăturat.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+40700000000"
                className="flex items-center gap-3 font-sans text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Sună Acum</div>
                  <div className="font-semibold">07XX XXX XXX</div>
                </div>
              </a>
              <a
                href="mailto:avocat@cabinet.ro"
                className="flex items-center gap-3 font-sans text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold">avocat@cabinet.ro</div>
                </div>
              </a>
            </div>

            <p className="font-sans text-xs text-muted-foreground mt-8">
              Răspundem în maxim 2 ore în zilele lucrătoare. Confidențialitate totală garantată.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-card border border-border/30 rounded-lg p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Trimite un Mesaj</h3>

            <div className="space-y-5">
              <div>
                <label className="font-sans text-sm text-muted-foreground block mb-1.5">Nume</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border/40 focus:border-primary py-3 px-1 font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground/40"
                  placeholder="Numele dumneavoastră"
                />
              </div>
              <div>
                <label className="font-sans text-sm text-muted-foreground block mb-1.5">Telefon</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border/40 focus:border-primary py-3 px-1 font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground/40"
                  placeholder="07XX XXX XXX"
                />
              </div>
              <div>
                <label className="font-sans text-sm text-muted-foreground block mb-1.5">Mesaj Scurt</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-border/40 focus:border-primary py-3 px-1 font-sans text-foreground outline-none transition-colors resize-none placeholder:text-muted-foreground/40"
                  placeholder="Descrie pe scurt situația..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="gold-shimmer w-full mt-8 bg-primary text-primary-foreground py-4 rounded font-sans font-bold text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Send className="w-4 h-4" />
              Trimite Mesajul →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
