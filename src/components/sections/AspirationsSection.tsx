import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles, Rocket, Brain, Target } from 'lucide-react';

const aspirations = [
  {
    icon: Brain,
    title: 'AI Systems Engineer',
    description: 'Designing end-to-end AI systems that power intelligent applications at scale.',
  },
  {
    icon: Sparkles,
    title: 'GenAI Architect',
    description: 'Building the next generation of generative AI products that augment human creativity.',
  },
  {
    icon: Target,
    title: 'DevOps Specialist',
    description: 'Building scalable infrastructure and automating deployment pipelines.',
  },
  {
    icon: Rocket,
    title: 'Tech Leader',
    description: 'Leading teams to build products that make a meaningful impact on millions.',
  },
];

export const AspirationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Aspiring to Be
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A roadmap of where I'm heading—building towards roles that create lasting impact
          </p>
        </div>

        {/* Aspirations grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {aspirations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl border border-border bg-background transition-all duration-700 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Index number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Future indicator */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground font-medium">Currently building towards these goals</span>
          </div>
        </div>
      </div>
    </section>
  );
};
