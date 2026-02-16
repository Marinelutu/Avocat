import { useState } from 'react';
import { Phone, Mail, Send, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success('Mesajul tau a fost trimis! Te contactam in maxim 2 ore.', {
        duration: 5000,
      });
      setForm({ name: '', phone: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#0A1628' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: '#ffffff' }}
            >
              Drepturile Tale{' '}
              <span style={{ color: '#B8860B' }}>Nu Pot Astepta.</span>
            </h2>

            <p
              className="font-sans text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Primul pas este o conversatie. Consultatia initiala este gratuita
              &mdash; fara obligatii, fara costuri ascunse.
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10"
              style={{
                border: '1px solid rgba(184, 134, 11, 0.3)',
                backgroundColor: 'rgba(184, 134, 11, 0.06)',
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-sans text-sm" style={{ color: '#ffffff' }}>
                Disponibil astazi
              </span>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col gap-4 mb-10">
              <a
                href="tel:+40700000000"
                className="flex items-center gap-4 rounded-lg px-6 py-4 transition-colors"
                style={{
                  border: '1px solid rgba(184, 134, 11, 0.3)',
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ border: '1px solid rgba(184, 134, 11, 0.4)' }}
                >
                  <Phone className="h-5 w-5" style={{ color: '#B8860B' }} />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Suna Acum
                  </div>
                  <div className="font-sans text-lg font-semibold" style={{ color: '#ffffff' }}>
                    07XX XXX XXX
                  </div>
                </div>
              </a>

              <a
                href="mailto:avocat@cabinet.ro"
                className="flex items-center gap-4 rounded-lg px-6 py-4 transition-colors"
                style={{
                  border: '1px solid rgba(184, 134, 11, 0.3)',
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ border: '1px solid rgba(184, 134, 11, 0.4)' }}
                >
                  <Mail className="h-5 w-5" style={{ color: '#B8860B' }} />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Email
                  </div>
                  <div className="font-sans text-lg font-semibold" style={{ color: '#ffffff' }}>
                    avocat@cabinet.ro
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 rounded-lg px-6 py-4"
                style={{
                  border: '1px solid rgba(184, 134, 11, 0.3)',
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ border: '1px solid rgba(184, 134, 11, 0.4)' }}
                >
                  <MapPin className="h-5 w-5" style={{ color: '#B8860B' }} />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Adresa
                  </div>
                  <div className="font-sans text-lg font-semibold" style={{ color: '#ffffff' }}>
                    Str. Victoriei nr. 100, Bucuresti
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" style={{ color: 'rgba(184, 134, 11, 0.7)' }} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Raspundem in maxim 2 ore
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: 'rgba(184, 134, 11, 0.7)' }} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Confidentialitate totala garantata
                </span>
              </div>
            </div>
          </div>

          {/* Right side — Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-8 md:p-10"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
            }}
          >
            <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: '#0A1628' }}>
              Trimite un Mesaj
            </h3>
            <p className="font-sans text-sm mb-8" style={{ color: '#6B7280' }}>
              Completati formularul si va contactam rapid.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <label className="font-sans text-sm font-medium block mb-2" style={{ color: '#0A1628' }}>
                  Nume
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Numele dumneavoastra"
                  className="h-12"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #D1D5DB',
                    color: '#0A1628',
                  }}
                />
              </div>

              <div>
                <label className="font-sans text-sm font-medium block mb-2" style={{ color: '#0A1628' }}>
                  Telefon
                </label>
                <Input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="07XX XXX XXX"
                  className="h-12"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #D1D5DB',
                    color: '#0A1628',
                  }}
                />
              </div>

              <div>
                <label className="font-sans text-sm font-medium block mb-2" style={{ color: '#0A1628' }}>
                  Mesaj
                </label>
                <Textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Descrie pe scurt situatia..."
                  rows={4}
                  className="resize-none"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #D1D5DB',
                    color: '#0A1628',
                  }}
                />
              </div>
            </div>

            {sent && (
              <div className="mt-4 p-3 rounded-lg text-center" style={{ backgroundColor: '#F0FDF4', color: '#166534' }}>
                <p className="font-sans text-sm font-medium">✓ Mesajul a fost trimis cu succes!</p>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-8 py-4 rounded-lg font-sans font-bold text-base flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#B8860B',
                color: '#ffffff',
              }}
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
                  Trimite Mesajul →
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
