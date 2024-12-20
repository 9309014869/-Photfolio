import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsPreview from '../components/SkillsPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <SkillsPreview />
      <ProjectsPreview />
      <ContactSection />
    </main>
  );
};

export default Home;