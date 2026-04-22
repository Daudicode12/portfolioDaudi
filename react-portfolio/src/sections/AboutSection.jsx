import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutContent, aboutHighlights, stats } from '../data/portfolioData';

// Custom hook for mouse position tracking
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

// Typing animation component for intro
const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text]);

  return (
    <span>
      {displayedText}
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 inline-block w-1 bg-neon-cyan"
          />
        )}
      </AnimatePresence>
    </span>
  );
};

// Animated title component
const AnimatedTitle = () => (
  <motion.div className="relative mb-12 text-center">
    <div className="absolute inset-0 blur-3xl opacity-30">
      <div
        className="h-full w-full rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
        style={{
          animation: 'gradient-flow 8s ease-in-out infinite',
          backgroundSize: '200% 200%',
        }}
      />
    </div>

    <motion.h2
      className="relative text-5xl md:text-6xl font-bold"
      style={{
        background: 'linear-gradient(120deg, #3a7dff, #a65dff, #4de8ff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 40px rgba(77, 232, 255, 0.2)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      About Me
    </motion.h2>
  </motion.div>
);

// Background animation component
const BackgroundAnimation = () => {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Pulsing gradient orbs */}
      <motion.div
        className="absolute top-40 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(58, 125, 255, 0.4), transparent)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-40 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(166, 93, 255, 0.4), transparent)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cursor glow effect */}
      <motion.div
        className="fixed w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(77, 232, 255, 0.1), transparent)',
          filter: 'blur(60px)',
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
        transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
      />
    </>
  );
};

// Highlight card component
const HighlightCard = ({ highlight, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: index * 0.1,
    }}
    className="relative group"
  >
    <motion.div
      className={`
        relative p-6 rounded-xl border backdrop-blur-xl
        transition-all duration-300
        border-gradient bg-gradient-to-br
        ${
          index % 2 === 0
            ? 'border-neon-cyan/40 from-neon-cyan/10 to-transparent hover:from-neon-cyan/20 hover:border-neon-cyan/70'
            : 'border-neon-purple/40 from-neon-purple/10 to-transparent hover:from-neon-purple/20 hover:border-neon-purple/70'
        }
      `}
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
    >
      <motion.div
        className={`
          text-3xl mb-3 inline-block p-3 rounded-lg
          ${
            index % 2 === 0
              ? 'bg-neon-cyan/20'
              : 'bg-neon-purple/20'
          }
        `}
      >
        {highlight.icon}
      </motion.div>

      <h3 className="text-lg font-bold text-slate-100 mb-2">
        {highlight.title}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        {highlight.description}
      </p>

      {/* Glow effect on hover */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
          transition-opacity duration-300 pointer-events-none blur-xl
          ${
            index % 2 === 0
              ? 'bg-neon-cyan/20'
              : 'bg-neon-purple/20'
          }
        `}
      />
    </motion.div>
  </motion.div>
);

// Main component
export default function AboutSection() {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="section-wrap relative overflow-hidden">
      <BackgroundAnimation />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Title */}
        <AnimatedTitle />

        {/* Main content card */}
        <motion.div
          className="mb-16 rounded-2xl border border-slate-700/50 bg-slate-950/40 backdrop-blur-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          {/* Intro with typing animation */}
          <motion.p
            className="text-xl md:text-2xl font-semibold mb-8 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TypingText text={aboutContent.intro} />
          </motion.p>

          {/* Divider */}
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-purple mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Main description */}
          <motion.p
            className="text-lg text-slate-300 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          >
            {aboutContent.description}
          </motion.p>

          {/* Call to action */}
          <motion.p
            className="text-slate-400 italic text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
          >
            "{aboutContent.cta}"
          </motion.p>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 text-center"
            variants={itemVariants}
          >
            What I Bring to the Table
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutHighlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.title}
                highlight={highlight}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
            By The Numbers
          </h3>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl border border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/5 to-transparent hover:border-neon-cyan/60 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <motion.p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-2">
                  {stat.value}
                </motion.p>
                <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vertical timeline (optional visual element) */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Glowing vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {[
              { year: '2019-2021', title: 'Foundation', desc: 'Started with HTML, CSS, JavaScript fundamentals' },
              { year: '2021-2023', title: 'Growth', desc: 'Mastered React and backend development' },
              { year: '2023-Now', title: 'Innovation', desc: 'Building intelligent systems and scalable architectures' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.15,
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple border-2 border-slate-900 relative z-10"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 p-6 rounded-xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm hover:border-neon-cyan/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm font-semibold text-neon-cyan mb-1">{item.year}</p>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
