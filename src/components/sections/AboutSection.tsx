import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <span className="text-sm font-medium text-primary tracking-wider uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Passionate about solving
                <span className="text-primary"> complex problems</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m an <span className="text-foreground font-medium">AI Systems Engineer</span> with a strong foundation in
                <span className="text-foreground font-medium"> full-stack development</span>, focused on building intelligent,
                production-ready systems rather than isolated models. My work spans
                <span className="text-primary font-medium"> transformer-based vision models</span>,
                <span className="text-primary font-medium"> AI-driven threat detection</span>, and
                <span className="text-foreground font-medium"> self-engineered cloud infrastructure</span>, allowing me to
                operate across the entire stack—from data and model design to deployment and
                automation. I’m particularly interested in
                <span className="text-primary font-medium"> GenAI</span> and
                <span className="text-primary font-medium"> agentic workflows</span> that enable systems to reason, adapt,
                and scale in real-world environments. I believe impactful AI is defined not just by
                accuracy, but by <span className="text-foreground font-medium">reliability</span>,
                <span className="text-foreground font-medium"> usability</span>, and
                <span className="text-foreground font-medium"> meaningful integration</span>, and every project I build
                reflects this <span className="text-primary font-medium">systems-first mindset</span>.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <span className="block text-3xl font-bold text-foreground">3+</span>
                <span className="text-sm text-muted-foreground">Years Learning</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-foreground">10+</span>
                <span className="text-sm text-muted-foreground">Projects Built</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">∞</span>
                <span className="text-sm text-muted-foreground">Curiosity</span>
              </div>
            </div>
          </div>

          {/* Landscape image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              {/* Decorative frames */}
              <div className="absolute inset-0 border border-border rounded-3xl rotate-2 transition-transform duration-500 hover:rotate-4" />
              <div className="absolute inset-0 border border-primary/30 rounded-3xl -rotate-1 transition-transform duration-500 hover:-rotate-2" />
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                <img
                  src="/images/P1.JPG"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" />
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
