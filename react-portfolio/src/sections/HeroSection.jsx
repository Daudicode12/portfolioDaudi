import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { heroData } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-5">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-gradient" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200 md:text-sm"
          variants={itemVariants}
        >
          Portfolio 2026
        </motion.p>
        <motion.h1 className="hero-title" variants={itemVariants}>
          {heroData.name}
        </motion.h1>
        <motion.p className="hero-tagline" variants={itemVariants}>
          {heroData.tagline}
        </motion.p>
        <motion.p
          className="mt-5 max-w-2xl text-sm text-slate-300 md:text-lg"
          variants={itemVariants}
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div className="mt-10 flex items-center gap-3" variants={itemVariants}>
          <a className="social-orb" href="https://github.com/Daudicode12" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="social-orb" href="https://linkedin.com/in/daudislugger" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className="social-orb" href="mailto:davidonya2@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="mt-14 inline-flex items-center gap-2 text-cyan-200/90 transition hover:text-cyan-100"
          variants={itemVariants}
          whileHover={{ y: 4 }}
        >
          Explore
          <ChevronDown className="animate-bounce" size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
