import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Open Threat Inspector – Intelligent IP Threat Analysis System',
    description: 'A real-time IP threat analysis tool that detects VPN/proxy activity and generates instant forensic intelligence.',
  },
  {
    title: 'AGEMODEL – Transformer-Based Facial Age Classification System',
    description: 'A ViT-powered facial age classification system that accurately predicts age groups using a structured, augmented dataset.',
  },
  {
    title: 'Custom Private Cloud Server – Self-Engineered Virtual Compute System',
    description: 'A self-engineered Linux-based personal server built from scratch to run applications, automation, and AI workloads efficiently.',
  },
];

const ProjectBlock = ({ project, index, isVisible }: { 
  project: any; 
  index: number; 
  isVisible: boolean; 
}) => (
  <div
    className={`transition-all duration-700 ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
      {project.title}
    </h3>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      {project.description}
    </p>
    <div className="h-px w-24 bg-primary mt-8" />
  </div>
);

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 inline-block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Hands-on practices
          </p>
        </div>

        {/* Projects list */}
        <div ref={ref} className="max-w-4xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <ProjectBlock
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
