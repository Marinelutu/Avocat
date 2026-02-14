import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Send, Clock, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Mesajul tau a fost trimis! Te contactam in maxim 2 ore.', {
        duration: 5000,
      });
      setForm({ name: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)',
          background: 'linear-gradient(135deg, hsl(216 55% 12%) 0%, hsl(216 60% 9%) 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)',
          background: 'linear-gradient(180deg, hsla(216,40%,16%,0.6) 0%, hsla(216,55%,12%,0.3) 100%)',
        }}
      />

      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent, transparent 40px, hsla(43,52%,54%,0.02) 40px, hsla(43,52%,54%,0.02) 41px)',
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Drepturile Tale{' '}
              <span className="text-primary">Nu Pot Astepta.</span>
            </h2>

            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10">
              Primul pas este o conversatie. Consultatia initiala este gratuita
              &mdash; fara obligatii, fara costuri ascunse.
            </p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/60 px-4 py-2 mb-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-sans text-sm text-foreground">
                Disponibil astazi
              </span>
            </motion.div>

            {/* Gold ghost buttons */}
            <div className="flex flex-col gap-4 mb-10">
              <motion.a
                href="tel:+40700000000"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="group flex items-center gap-4 rounded-lg border border-primary/30 px-6 py-4 transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 transition-colors group-hover:bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    Suna Acum
                  </div>
                  <div className="font-sans text-lg font-semibold text-foreground">
                    07XX XXX XXX
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:avocat@cabinet.ro"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="group flex items-center gap-4 rounded-lg border border-primary/30 px-6 py-4 transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 transition-colors group-hover:bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="font-sans text-lg font-semibold text-foreground">
                    avocat@cabinet.ro
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary/70" />
                <span className="font-sans text-sm">
                  Raspundem in maxim 2 ore
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary/70" />
                <span className="font-sans text-sm">
                  Confidentialitate totala garantata
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="rounded-xl border border-border/30 bg-card/80 p-8 md:p-10 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 40px hsla(43,52%,54%,0.05)',
            }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Trimite un Mesaj
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-8">
              Completati formularul si va contactam rapid.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">
                  Nume
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Numele dumneavoastra"
                  className="bg-secondary/50 border-border/40 focus:border-primary h-12 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">
                  Telefon
                </label>
                <Input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="07XX XXX XXX"
                  className="bg-secondary/50 border-border/40 focus:border-primary h-12 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">
                  Mesaj
                </label>
                <Textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Descrie pe scurt situatia..."
                  rows={4}
                  className="bg-secondary/50 border-border/40 focus:border-primary text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="gold-shimmer w-full mt-8 bg-primary text-primary-foreground py-4 rounded-lg font-sans font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_hsla(43,52%,54%,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Se trimite...
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {'Trimite Mesajul \u2192'}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
