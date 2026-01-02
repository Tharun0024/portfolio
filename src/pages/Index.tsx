// src/pages/Index.tsx - FULLY UPDATED WITH ALL SECTIONS + IDs
import  Navigation  from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { AspirationsSection } from '@/components/sections/AspirationsSection';
import { TechnicalArsenalSection } from '@/components/sections/TechnicalArsenalSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="aspirations">
          <AspirationsSection />
        </section>
        <section id="technical-arsenal">
          <TechnicalArsenalSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
