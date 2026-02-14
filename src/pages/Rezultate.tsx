import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shield, Trophy, Check, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

// Case Data
const CASES = [
    {
        id: 1,
        category: 'Drept Penal',
        year: '2019',
        result: 'Câștigat',
        situation: "Un antreprenor din București a fost acuzat de evaziune fiscală în valoare de 2,3 milioane de lei, risc real de condamnare la 7 ani de închisoare. Dosarul părea irecuperabil — probele acuzării erau considerate solide de toată lumea.",
        strategy: "Av. Covas a identificat o neregularitate procedurală în modul în care probele digitale au fost obținute de autorități, incompatibilă cu dispozițiile Codului de Procedură Penală. A construit o apărare completă bazată pe nulitatea administrării probelor și a solicitat refacerea urmăririi penale.",
        outcome: "Dosarul a fost clasat. Clientul nu a executat nicio zi de detenție. Prejudiciul fiscal a fost redus cu 89% în urma negocierilor ulterioare cu ANAF.",
        quote: "Credeam că totul s-a terminat. Av. Covas a văzut ceea ce nimeni altcineva nu a văzut.",
        author: "M.P., antreprenor, București"
    },
    {
        id: 2,
        category: 'Drept Civil',
        year: '2021',
        result: 'Câștigat',
        situation: "O familie din Iași a pierdut dreptul de proprietate asupra unui imobil de 180.000 EUR în urma unui contract de vânzare-cumpărare contestat de moștenitorii vânzătorului decedat. Procesul durase deja 4 ani cu doi avocați anteriori, fără niciun progres.",
        strategy: "Av. Covas a preluat dosarul și a reformulat complet strategia procesului. A introdus o acțiune în constatarea nulității absolute a pretențiilor moștenitorilor, bazată pe un viciu de formă în actul de succesiune, și a cerut suspendarea provizorie a oricăror acțiuni asupra imobilului.",
        outcome: "Familia și-a recuperat integral proprietatea în 11 luni de la preluarea dosarului. Moștenitorii au fost obligați să suporte cheltuielile de judecată.",
        quote: "Patru ani de coșmar s-au terminat în mai puțin de un an. Nu mai speram.",
        author: "Familia D., Iași"
    },
    {
        id: 3,
        category: 'Drept Administrativ',
        year: '2018',
        result: 'Câștigat',
        situation: "Un medic specialist cu 20 de ani de experiență a primit decizie de revocare din funcție de conducere a unui spital public, printr-o procedură administrativă despre care considera că a fost viciată politic. Reputația și cariera sa erau în joc.",
        strategy: "Av. Covas a atacat decizia administrativă la Curtea de Apel, demonstrând că procedura de revocare a încălcat atât regulamentul intern al instituției cât și principiile dreptului administrativ privind motivarea actelor. A cerut în paralel o ordonanță președințială de suspendare a executării deciziei.",
        outcome: "Decizia de revocare a fost anulată. Medicul a fost reinstalat în funcție cu plata integrală a drepturilor salariale pe toată perioada suspendării. Instituția a achitat și daunele morale.",
        quote: "Av. Covas nu apără doar un dosar. Apără un om.",
        author: "Dr. C.M., medic primar"
    },
    {
        id: 4,
        category: 'Drept Penal',
        year: '2016',
        result: 'Câștigat',
        situation: "Un tânăr de 24 de ani a fost reținut și trimis în judecată pentru tâlhărie calificată, pe baza declarației unui singur martor ocular. Riscul era o pedeapsă de până la 10 ani. Familia nu avea resurse și nu știa unde să apeleze.",
        strategy: "Av. Covas a acceptat dosarul și a demarat o anchetă proprie paralelă. A identificat contradicții majore în declarațiile martorului și a obținut înregistrări video din zonă care plasau clientul în altă locație la momentul faptei. A prezentat probele în contradictoriu și a solicitat achitarea.",
        outcome: "Achitare completă. Tânărul nu figurează în niciun cazier. Martorul a fost ulterior cercetat pentru mărturie mincinoasă.",
        quote: "Fiul meu ar fi distrus pentru ceva ce nu a făcut. Av. Covas i-a dat înapoi viața.",
        author: "Mama clientului"
    },
    {
        id: 5,
        category: 'Drept Civil',
        year: '2022',
        result: 'Câștigat',
        situation: "O femeie de 58 de ani a descoperit că, fără știrea ei, un document semnat cu ani în urmă fusese folosit pentru a transfera în mod fraudulos dreptul de uzufruct al casei părintești către o terță persoană.",
        strategy: "Av. Covas a acționat pe două fronturi simultan: o plângere penală pentru fals în înscrisuri și uz de fals, și o acțiune civilă în anularea actului juridic fraudulos. A solicitat și obținut în regim de urgență instituirea unui sechestru asigurător pe imobil.",
        outcome: "Actul fraudulos a fost anulat de instanță. Casa a rămas în proprietatea clientei. Persoana care a comis frauda a primit condamnare penală cu suspendare și a fost obligată la daune.",
        quote: "Casa bunicilor mei a rămas în familie. Fără Av. Covas, nu știu ce s-ar fi întâmplat.",
        author: "E.T., pensionară"
    }
];

const FILTER_OPTIONS = ['Toate Cazurile', 'Drept Penal', 'Drept Civil', 'Drept Administrativ'];

const Rezultate = () => {
    const [activeFilter, setActiveFilter] = useState('Toate Cazurile');
    const [filteredCases, setFilteredCases] = useState(CASES);

    useEffect(() => {
        if (activeFilter === 'Toate Cazurile') {
            setFilteredCases(CASES);
        } else {
            setFilteredCases(CASES.filter(c => c.category === activeFilter));
        }
    }, [activeFilter]);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-gold selection:text-background pb-20">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 px-4 md:px-8 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-5 pointer-events-none mix-blend-overlay"></div>
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4"
                    >
                        Dosare & <span className="text-gold relative inline-block">
                            Rezultate
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-0 left-0 h-1 bg-gold rounded-full"
                            ></motion.span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Peste 1.000 de cazuri soluționate în 30 de ani de practică. Fiecare dosar, o responsabilitate personală.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5 text-gold text-sm font-semibold">
                            <Trophy className="w-4 h-4" /> 1.000+ Cazuri
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5 text-gold text-sm font-semibold">
                            <Shield className="w-4 h-4" /> 30 Ani Experiență
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5 text-gold text-sm font-semibold">
                            <Check className="w-4 h-4" /> Drept Penal · Civil · Administrativ
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-xs text-muted-foreground/60 italic"
                    >
                        Detaliile de mai jos sunt prezentate cu acordul clienților și cu protejarea datelor cu caracter personal, conform GDPR.
                    </motion.p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-y border-white/5 py-4 mb-12">
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
                    {FILTER_OPTIONS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                                ? 'bg-gold text-background shadow-[0_0_15px_rgba(201,168,76,0.4)]'
                                : 'bg-transparent border border-gold/30 text-gold hover:bg-gold/10'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* Cases List */}
            <section className="container mx-auto px-4 pb-20">
                <div className="max-w-[860px] mx-auto space-y-8">
                    <AnimatePresence mode="popLayout">
                        {filteredCases.map((c, index) => (
                            <motion.div
                                key={c.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-card border border-white/5 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Gold Accent Left Border */}
                                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gold group-hover:shadow-[0_0_10px_#C9A84C] transition-shadow duration-300"></div>

                                <div className="p-6 md:p-8 ml-[3px]">
                                    {/* Card Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-bold rounded-full uppercase tracking-wider">{c.category}</span>
                                            <span className="text-muted-foreground text-sm font-mono border-l border-white/10 pl-3">{c.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-400 font-bold text-sm bg-green-900/20 px-3 py-1 rounded-full border border-green-500/20">
                                            <Check className="w-4 h-4" /> {c.result}
                                        </div>
                                    </div>

                                    {/* 3-Column Content */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                        {/* Situation */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-gold font-serif font-bold text-lg mb-2">
                                                <AlertTriangle className="w-5 h-5" /> Situație
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{c.situation}</p>
                                        </div>

                                        {/* Strategy */}
                                        <div className="space-y-3 md:border-l md:border-white/10 md:pl-8 relative">
                                            {/* Mobile divider */}
                                            <div className="md:hidden h-px w-full bg-white/10 my-4"></div>
                                            <div className="flex items-center gap-2 text-gold font-serif font-bold text-lg mb-2">
                                                <Shield className="w-5 h-5" /> Strategie
                                            </div>
                                            <p className="text-foreground/90 text-sm leading-relaxed">{c.strategy}</p>
                                        </div>

                                        {/* Result */}
                                        <div className="space-y-3 md:border-l md:border-white/10 md:pl-8 relative">
                                            {/* Mobile divider */}
                                            <div className="md:hidden h-px w-full bg-white/10 my-4"></div>
                                            <div className="flex items-center gap-2 text-gold font-serif font-bold text-lg mb-2">
                                                <Trophy className="w-5 h-5" /> Rezultat
                                            </div>
                                            <p className="text-white font-medium text-sm leading-relaxed">{c.outcome}</p>
                                        </div>
                                    </div>

                                    {/* Client Quote */}
                                    <blockquote className="border-l-2 border-gold/50 pl-4 italic text-muted-foreground relative">
                                        <p className="mb-2">"{c.quote}"</p>
                                        <footer className="text-xs text-gold font-medium not-italic">— {c.author}</footer>
                                    </blockquote>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 pb-20">
                <div className="max-w-[860px] mx-auto bg-card border border-gold rounded-xl p-8 md:p-12 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Cazul Tău Urmează.</h2>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                        Av. Valeriu Covas analizează personal fiecare situație. Consultația inițială este gratuită și confidențială.
                    </p>

                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.6)] transform hover:-translate-y-1"
                    >
                        Solicită o Consultație <ArrowRight className="w-5 h-5" />
                    </a>

                    <p className="mt-6 text-xs text-muted-foreground/50">
                        Av. Covas acceptă un număr limitat de cazuri noi pe lună, pentru a garanta atenție completă fiecărui client.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Rezultate;
