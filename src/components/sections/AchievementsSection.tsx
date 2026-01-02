import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const achievements = [
  { value: 15, suffix: '+', label: 'Projects Completed', description: 'AI/ML & Data Science' },
  { value: 5, suffix: '+', label: 'Hackathons', description: 'Participated & won' },
  { value: 1000, suffix: '+', label: 'Hours Coding', description: 'Building & learning' },
];

const AchievementCard = ({
  achievement,
  isVisible,
  delay,
}: {
  achievement: string;
  isVisible: boolean;
  delay: number;
}) => {
  return (
    <div
      className={`group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
        <span className="text-foreground font-medium leading-relaxed">{achievement}</span>
      </div>
      <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity glow-purple-sm" />
    </div>
  );
};

const AchievementCounter = ({
  value,
  suffix,
  label,
  description,
  isVisible,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  isVisible: boolean;
  delay: number;
}) => {
  const count = useCountUp({ end: value, isVisible, delay, duration: 2000 });

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-2">
        <span>{count}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-foreground font-medium">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
};

export const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const achievementList = [
    'Prompt Quest – First Prize',
    'Game of Thrones (Prompt Engineering) – First Prize',
    'Tech Titans (Software Engineering) – Second Prize',
    'IIC Idea Hackathon – Second Prize',
    'CODECRAFT (24hrs Hackathon) – Best Novelty Prize',
    'GEMINI PROMPTCRAFT 25 – Winner',
  ];

  return (
    <section className="py-32 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Achievements
          </h2>
        </div>

        {/* Stats grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16"
        >
          {achievements.map((item, index) => (
            <AchievementCounter
              key={index}
              {...item}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Animated achievement cards grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {achievementList.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              isVisible={isVisible}
              delay={600 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
