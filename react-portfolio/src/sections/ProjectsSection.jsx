import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

// Custom hook for mouse position tracking (for interactive effects)
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;
    const updateMouse = (e) => {
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => {
      window.removeEventListener('mousemove', updateMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return mousePosition;
};

// Filter button component
const FilterButton = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
      border backdrop-blur-sm
      ${
        isActive
          ? 'border-neon-cyan/60 bg-gradient-to-r from-neon-cyan/25 to-neon-purple/25 text-neon-cyan shadow-lg shadow-neon-cyan/30'
          : 'border-slate-600/50 bg-slate-800/20 text-slate-300 hover:border-neon-blue/40 hover:text-slate-100'
      }
    `}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);

// Get unique categories from projects
const getProjectCategories = () => {
  const categories = new Set(projects.map(p => p.category));
  return ['All', ...Array.from(categories).sort()];
};

// Animated title component
const AnimatedTitle = () => (
  <motion.div className="relative mb-8">
    <div className="absolute inset-0 blur-2xl opacity-40">
      <div
        className="h-full w-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
        style={{
          animation: 'gradient-flow 6s ease-in-out infinite',
          backgroundSize: '200% 200%',
        }}
      />
    </div>

    <motion.h2
      className="relative text-4xl md:text-5xl font-bold text-center"
      style={{
        background: 'linear-gradient(110deg, #4de8ff, #a65dff, #ff4fd8)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 30px rgba(77, 232, 255, 0.3)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      Featured Projects
    </motion.h2>

    <motion.p
      className="text-center text-slate-400 mt-3 text-lg"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
    >
      Explore my most impactful work across web, fullstack, and IoT projects
    </motion.p>
  </motion.div>
);

// Background animation component
const BackgroundAnimation = () => {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Pulsing gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(77, 232, 255, 0.4), transparent)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(166, 93, 255, 0.4), transparent)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cursor glow effect */}
      <motion.div
        className="fixed w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(77, 232, 255, 0.15), transparent)',
          filter: 'blur(40px)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
      />
    </>
  );
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);
  const categories = getProjectCategories();

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  // Sort to put featured projects first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-wrap relative overflow-hidden"
    >
      <BackgroundAnimation />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Title */}
        <AnimatedTitle />

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  image={project.image}
                  codeUrl={project.codeUrl}
                  featured={project.featured}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-slate-400 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
        >
          {[
            { label: 'Projects', value: projects.length },
            { label: 'Categories', value: categories.length - 1 },
            { label: 'Featured', value: projects.filter(p => p.featured).length },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 rounded-xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm hover:border-neon-cyan/40 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <motion.p className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                {stat.value}
              </motion.p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
