import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, School, Briefcase } from 'lucide-react';
import { useState } from 'react';

const academicData = [
  {
    period: '2023 - 2027',
    title: 'B.Tech Artificial Intelligence and Data Science',
    subtitle: 'UG',
    institution: 'R.M.K College of Engineering and Technology',
    description: 'Pursuing degree with focus on AI systems, machine learning, and data engineering.',
    icon: GraduationCap,
  },
  {
    period: '2019 - 2023',
    title: 'High School',
    subtitle: 'State Board',
    institution: '',
    description: 'Strong foundation in mathematics and sciences preparing for technology career.',
    icon: GraduationCap,
  },
  {
    period: '2013 - 2018',
    title: 'Middle School',
    subtitle: 'CBSE',
    institution: '',
    description: 'Built fundamental academic skills and discovered early interest in computers.',
    icon: School,
  },
];

const workData = [
  {
    period: 'Jul 2025',
    title: 'MERN Stack Developer Intern',
    subtitle: '',
    institution: 'Codec Technologies',
    description: 'Full-stack development using React, Node.js, MongoDB, and Express.',
    icon: Briefcase,
  },
  {
    period: 'Jun 2025',
    title: 'Graphic Design Intern',
    subtitle: '(Selected through Internshala)',
    institution: 'Coding Junior',
    description: 'UI/UX design and visual communication projects.',
    icon: Briefcase,
  },
  {
    period: 'May 2025 – Jun 2025',
    title: 'AI & Machine Learning Intern(Best performer)',
    subtitle: '',
    institution: 'Elevate Labs',
    description: 'Model development, training, and deployment pipelines.',
    icon: Briefcase,
  },
  {
    period: 'Dec 2024',
    title: 'Data Analytics & Visualization Intern',
    subtitle: '',
    institution: 'Accenture',
    description: 'Data processing, dashboard creation, and business intelligence.',
    icon: Briefcase,
  },
];

export const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('academic');

  const currentData = activeTab === 'academic' ? academicData : workData;
  const IconComponent = activeTab === 'academic' ? GraduationCap : Briefcase;

  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Academic & Professional Journey
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-6 mb-16">
          <button
            onClick={() => setActiveTab('academic')}
            className={`px-8 py-3 font-medium rounded-full transition-all duration-300 ${
              activeTab === 'academic'
                ? 'bg-primary text-background shadow-lg shadow-primary/20'
                : 'bg-background border border-border hover:border-primary hover:text-primary'
            }`}
          >
            Academic Journey
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`px-8 py-3 font-medium rounded-full transition-all duration-300 ${
              activeTab === 'work'
                ? 'bg-primary text-background shadow-lg shadow-primary/20'
                : 'bg-background border border-border hover:border-primary hover:text-primary'
            }`}
          >
            Work Experience
          </button>
        </div>

        {/* Timeline */}
        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <div 
              className={`absolute top-0 left-0 w-full bg-primary transition-all duration-1000 ease-smooth ${
                isVisible ? 'h-full' : 'h-0'
              }`}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {currentData.map((item, index) => {
              const Icon = item.icon || IconComponent;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Content */}
                  <div className={`flex-1 md:text-${isEven ? 'left' : 'right'} pl-12 md:pl-0`}>
                    <div className={`p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 ${
                      isEven ? 'md:mr-12' : 'md:ml-12'
                    }`}>
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-foreground font-medium">{item.subtitle}</p>
                      )}
                      {item.institution && (
                        <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                      )}
                      <p className="text-muted-foreground mt-3">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon node */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 md:-translate-x-1/2 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
