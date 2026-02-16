import { CheckCircle, Scale, Shield, Briefcase, Heart, Home } from 'lucide-react';

interface CaseStudy {
    icon: typeof Scale;
    category: string;
    title: string;
    description: string;
    outcome: string;
    highlight: string;
}

const cases: CaseStudy[] = [
    {
        icon: Shield,
        category: 'Drept Penal',
        title: 'Achitare completă în dosar de fraudă',
        description:
            'Clientul a fost acuzat de fraudă bancară cu un prejudiciu estimat la 200.000 EUR. Am demonstrat lipsa vinovăției prin analiza detaliată a tranzacțiilor și identificarea erorilor din rechizitoriu.',
        outcome: 'Achitare completă',
        highlight: '200.000 EUR prejudiciu contestat',
    },
    {
        icon: Scale,
        category: 'Drept Civil',
        title: 'Recuperare despăgubiri în litigiu civil',
        description:
            'Un client a suferit daune materiale semnificative în urma unui contract nerespectate. Am obținut despăgubiri integrale plus dobânzi legale, într-un termen record de 6 luni.',
        outcome: 'Despăgubiri integrale obținute',
        highlight: '150.000 EUR recuperați',
    },
    {
        icon: Briefcase,
        category: 'Drept Comercial',
        title: 'Apărarea unei companii într-un litigiu de concurență neloială',
        description:
            'O companie locală era amenințată cu pierderea contractelor majore din cauza practicilor neloiale ale unui competitor. Am obținut ordonanță președințială și daune compensatorii.',
        outcome: 'Câștig definitiv în instanță',
        highlight: 'Contracte protejate integral',
    },
    {
        icon: Heart,
        category: 'Dreptul Familiei',
        title: 'Custodie exclusivă obținută în favoarea mamei',
        description:
            'Într-un caz complex de divorț cu implicații internaționale, am reușit obținerea custodiei exclusive și stabilirea unui program de vizitare echitabil, protejând interesul superior al copiilor.',
        outcome: 'Custodie exclusivă acordată',
        highlight: 'Interesul copiilor protejat',
    },
    {
        icon: Home,
        category: 'Drept Imobiliar',
        title: 'Rezolvarea unui litigiu funciar vechi de 10 ani',
        description:
            'Moștenitorii unui teren de 5 hectare se aflau într-un conflict vechi de un deceniu. Am reușit medierea și soluția definitivă prin partaj judiciar, cu recunoașterea drepturilor tuturor părților.',
        outcome: 'Partaj definitiv realizat',
        highlight: '5 hectare de teren clarificate',
    },
];

const categoryColors: Record<string, string> = {
    'Drept Penal': '#DC2626',
    'Drept Civil': '#2563EB',
    'Drept Comercial': '#7C3AED',
    'Dreptul Familiei': '#DB2777',
    'Drept Imobiliar': '#059669',
};

const Cases = () => {
    return (
        <section id="cazuri" className="py-20 md:py-28" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="font-serif text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: '#0A1628' }}
                    >
                        Cazuri <span style={{ color: '#B8860B' }}>Reale</span>
                    </h2>

                    <div
                        className="mx-auto mb-5"
                        style={{ width: 60, height: 2, backgroundColor: '#B8860B' }}
                    />

                    <p
                        className="font-sans text-base md:text-lg max-w-2xl mx-auto"
                        style={{ color: '#6B7280' }}
                    >
                        Rezultate concrete obținute pentru clienții noștri. Fiecare caz reprezintă o poveste de succes și o dovadă a dedicării noastre.
                    </p>
                </div>

                {/* Cases grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {cases.map((c, i) => {
                        const Icon = c.icon;
                        const tagColor = categoryColors[c.category] || '#B8860B';

                        return (
                            <div
                                key={i}
                                className="rounded-xl flex flex-col overflow-hidden"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #E5E7EB',
                                }}
                            >
                                {/* Top accent bar */}
                                <div className="h-1" style={{ backgroundColor: tagColor }} />

                                <div className="p-7 flex flex-col flex-1">
                                    {/* Category + Icon */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                            style={{ backgroundColor: `${tagColor}10` }}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: tagColor }} />
                                        </div>
                                        <span
                                            className="font-sans text-xs font-bold uppercase tracking-wider"
                                            style={{ color: tagColor }}
                                        >
                                            {c.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="font-serif text-lg font-bold mb-3 leading-snug"
                                        style={{ color: '#0A1628' }}
                                    >
                                        {c.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="font-sans text-sm leading-relaxed mb-5 flex-1"
                                        style={{ color: '#6B7280' }}
                                    >
                                        {c.description}
                                    </p>

                                    {/* Outcome */}
                                    <div
                                        className="rounded-lg p-4 mt-auto"
                                        style={{ backgroundColor: '#F0FDF4', border: '1px solid #DCFCE7' }}
                                    >
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <CheckCircle className="w-4 h-4" style={{ color: '#16A34A' }} />
                                            <span
                                                className="font-sans text-sm font-bold"
                                                style={{ color: '#166534' }}
                                            >
                                                {c.outcome}
                                            </span>
                                        </div>
                                        <span
                                            className="font-sans text-xs font-medium"
                                            style={{ color: '#15803D' }}
                                        >
                                            {c.highlight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <p
                        className="font-sans text-base mb-6"
                        style={{ color: '#6B7280' }}
                    >
                        Ai o situație similară? Hai să discutăm.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded font-sans font-bold text-sm"
                        style={{ backgroundColor: '#B8860B', color: '#ffffff' }}
                    >
                        Solicită Consultație Gratuită →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cases;
