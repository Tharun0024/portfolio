// src/components/sections/HeroSection.tsx - FULL CORRECTED CODE
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { AnimatedText } from '../AnimatedText';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Floating accent elements */}
      <div 
        className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />
      <div 
        className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div 
              className={`mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-full">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              <AnimatedText 
                text="Building the Future" 
                delay={200}
              />
              <br />
              <AnimatedText 
                text="with AI & Data" 
                delay={400}
                highlightWords={['AI', 'Data']}
              />
            </h1>

            {/* Subtitle */}
            <div 
              className={`max-w-2xl mb-12 transition-all duration-700 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                DevOps engineer | AI system Builder | 
                <span className="text-primary">Gen AI Engineer</span>
              </p>
            </div>

            {/* CTA Buttons - Updated navigation */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center transition-all duration-700 delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button 
                onClick={() => document.getElementById('technical-arsenal')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-foreground/10"
              >
                View My Work
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <Link 
                to="/contact"
                className="px-8 py-4 font-medium text-foreground border border-border rounded-full transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Portrait image */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative frames */}
              <div className="absolute inset-0 border border-border rounded-3xl rotate-3 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute inset-0 border border-primary/30 rounded-3xl -rotate-2 transition-transform duration-500 hover:-rotate-4" />
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                <img 
                  src="/images/P2.JPG" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-all duration-700 delay-1200 hover:text-primary cursor-pointer ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
      </button>
    </section>
  );
};
