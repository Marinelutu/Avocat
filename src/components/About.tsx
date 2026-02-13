import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import OrnamentalDivider from './OrnamentalDivider';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

const badges = [
  { icon: BookOpen, value: '15+', label: 'Ani Experiență' },
  { icon: Award, value: '500+', label: 'Cazuri Finalizate' },
  { icon: Users, value: '95%', label: 'Clienți Recurenți' },
  { icon: TrendingUp, value: '98%', label: 'Rata de Succes' },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: portraitRef, offset } = useParallax(0.15);

  return (
    <section id="despre" className="py-20 md:py-28 marble-bg">
      <OrnamentalDivider />
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait placeholder */}
          <div ref={portraitRef} className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div
              className="aspect-[3/4] bg-secondary rounded-lg border border-border/30 relative overflow-hidden"
              style={{ transform: `translateY(${offset}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-16 h-0.5 bg-primary mb-4" />
                <p className="font-serif text-lg text-foreground">Av. Alexandru Popescu</p>
                <p className="font-sans text-sm text-muted-foreground">Baroul București</p>
              </div>
            </div>
            {/* Gold corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-lg" />
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-reveal font-serif text-3xl md:text-4xl font-bold mb-6">
              Un Avocat În Care Poți Avea <span className="text-primary">Încredere</span>
            </h2>
            <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-[15px]">
              <p>
                Cu o carieră de peste 15 ani în domeniul juridic, am reprezentat cu succes sute de clienți în cele mai diverse cauze. De la litigii civile complexe la apărare penală de înaltă miză, fiecare caz a fost tratat cu aceeași dedicare și rigurozitate.
              </p>
              <p>
                Am absolvit Facultatea de Drept a Universității din București și am urmat programe de specializare la nivel european. Sunt membru activ al Baroului București și particip constant la conferințe și seminarii de drept.
              </p>
              <p>
                Filosofia mea este simplă: fiecare client merită o apărare fără compromisuri. Nu accept mai multe cazuri decât pot gestiona la cel mai înalt standard, pentru că reputația mea se construiește pe rezultatele tale.
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {badges.map((b, i) => (
                <div key={i} className="text-center p-4 bg-secondary/50 rounded-lg border border-border/20">
                  <b.icon className="w-5 h-5 text-primary mx-auto mb-2 stroke-[1.5]" />
                  <div className="font-serif text-xl font-bold text-primary">{b.value}</div>
                  <div className="font-sans text-xs text-muted-foreground">{b.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-8 border-l-2 border-primary pl-6 py-2">
              <p className="font-serif italic text-primary/90 text-lg leading-relaxed">
                „Fiecare client merită cel mai bun apărător. Eu iau în serios această responsabilitate."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
