const items = [
  'Membru al Baroului București',
  'Specializat în Drept Civil, Penal și Comercial',
  'Confidențialitate Garantată',
  'Consultații Online și în Cabinet',
  'Experiență în Instanțe Superioare',
];

const TrustBar = () => (
  <section
    id="trust"
    className="py-4"
    style={{
      backgroundColor: '#F9FAFB',
      borderTop: '1px solid #E5E7EB',
      borderBottom: '1px solid #E5E7EB',
    }}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center font-sans text-sm" style={{ color: '#6B7280' }}>
            <span className="w-1.5 h-1.5 rounded-full mr-3 shrink-0" style={{ backgroundColor: '#B8860B' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
