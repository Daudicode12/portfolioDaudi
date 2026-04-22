import React, { useEffect, useState } from 'react';
import NeonNavbar from './components/NeonNavbar';
import ParticleBackground from './components/ParticleBackground';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -45% 0px',
      }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <ParticleBackground />
      <NeonNavbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
        onToggleMenu={() => setIsMenuOpen((previous) => !previous)}
        onNavigate={handleNavigate}
      />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-xs text-slate-400 md:text-sm">
        <p>Code. Design. Impact.</p>
        <p className="mt-2">© 2026 David Onyango</p>
      </footer>
    </div>
  );
}
