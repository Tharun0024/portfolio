import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Award, 
  ExternalLink, 
  Languages, 
  Code, 
  Brain, 
  Server, 
  Loader2, 
  GitBranch, 
  Package, 
  Cloud, 
  Globe2,
  BarChart3,
  Palette
} from 'lucide-react';
import { useState } from 'react';

const certificationsData = [
  {
    title: 'Oracle Cloud Infrastructure – Data Science Professional',
    issuer: 'Oracle',
    credential: 'End-to-end data science workflows on OCI platform',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    issuer: 'Google Cloud Skills Boost',
    credential: 'Infrastructure automation, CI/CD pipelines, container orchestration',
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Google Cloud Skills Boost',
    credential: 'ML model deployment, Vertex AI, AutoML pipelines',
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'AWS',
    credential: 'Core AWS services, serverless architecture, security best practices',
  },
  {
    title: 'IBM SkillsBuild – AI Fundamentals',
    issuer: 'IBM',
    credential: 'Generative AI, prompt engineering, ethical AI frameworks',
  },
  {
    title: 'Google Cloud Skills Boost – Cloud Infrastructure & DevOps',
    issuer: 'Google Cloud',
    credential: 'Advanced DevOps practices, Kubernetes, monitoring',
  },
];

const languagesData = [
  {
    language: 'English',
    level: 'Professional Proficiency',
    description: 'Fluent in technical documentation, client communication, and global collaboration',
  },
  {
    language: 'Tamil',
    level: 'Native Level',
    description: 'Mother tongue - perfect fluency in all contexts',
  },
  {
    language: 'Japanese',
    level: 'Speaking Proficiency',
    description: 'Conversational fluency with technical vocabulary exposure',
  },
];

const skillsData = [
  {
    name: 'Python',
    icon: Code,
    category: 'Core',
  },
  {
    name: 'JavaScript/TypeScript',
    icon: Code,
    category: 'Frontend/Backend',
  },
  {
    name: 'React',
    icon: Loader2,
    category: 'Frontend',
  },
  {
    name: 'FastAPI',
    icon: Server,
    category: 'Backend',
  },
  {
    name: 'PyTorch/TensorFlow',
    icon: Brain,
    category: 'Deep Learning',
  },
  {
    name: 'scikit-learn/XGBoost',
    icon: BarChart3,
    category: 'ML/Traditional',
  },
  {
    name: 'TailwindCSS',
    icon: Palette,
    category: 'Styling',
  },
  {
    name: 'Git/Docker',
    icon: GitBranch,
    category: 'DevOps',
  },
  {
    name: 'Google Cloud/AWS/Oracle Cloud',
    icon: Cloud,
    category: 'Cloud',
  },
];

export const TechnicalArsenalSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState('certifications');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'certifications':
        return certificationsData.map((cert, index) => (
          <div key={index} className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{cert.credential}</p>
            <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity glow-purple-sm" />
          </div>
        ));
      case 'languages':
        return languagesData.map((lang, index) => (
          <div key={index} className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {lang.language}
                </h4>
                <p className="text-sm text-muted-foreground mt-1 font-medium">{lang.level}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{lang.description}</p>
            <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity glow-purple-sm" />
          </div>
        ));
      case 'skills':
        return skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex items-center space-x-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 w-fit font-medium">
                  {skill.category}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity glow-purple-sm" />
            </div>
          );
        });
      default:
        return null;
    }
  };

  return (
    <section id="arsenal" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
              Technical Arsenal
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Production-grade stack spanning AI/ML, full-stack development, DevOps, and cloud infrastructure
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
            {[
              { id: 'certifications', label: 'Certifications', icon: Award },
              { id: 'languages', label: 'Languages', icon: Languages },
              { id: 'skills', label: 'Skills', icon: Code },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === id
                    ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/25 translate-y-1 ring-2 ring-primary/50'
                    : 'bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1'
                }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === id ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}`} />
                <span>{label}</span>
                {activeTab === id && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur opacity-75 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};
