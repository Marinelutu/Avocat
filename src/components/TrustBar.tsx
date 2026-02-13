const items = [
  'Membru al Baroului București',
  'Specializat în Drept Civil, Penal și Comercial',
  'Confidențialitate Garantată',
  'Consultații Online și în Cabinet',
  'Experiență în Instanțe Superioare',
];

const TrustBar = () => (
  <section id="trust" className="bg-secondary border-y border-border/20 py-4 overflow-hidden">
    <div className="animate-marquee flex whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="inline-flex items-center mx-6 font-sans text-sm text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4 shrink-0" />
          {item}
        </span>
      ))}
    </div>
  </section>
);

export default TrustBar;
