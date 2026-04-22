import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Rocket } from 'lucide-react';
import { aboutHighlights, stats } from '../data/portfolioData';

const iconMap = [Cpu, Sparkles, Rocket];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          className="section-title"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          About
        </motion.h2>
        <motion.div
          className="glass-panel grid gap-8 p-6 md:grid-cols-2 md:p-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div>
            <p className="text-slate-200">
              I design and build user-focused web experiences with a strong bias for clean interfaces,
              scalable frontend architecture, and high-impact performance.
            </p>
            <motion.div
              className="mt-6 space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutHighlights.map((highlight, index) => {
                const Icon = iconMap[index] ?? Cpu;

                return (
                  <motion.div
                    key={highlight}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                    variants={itemVariants}
                  >
                    <Icon className="text-cyan-300 neon-icon" size={18} />
                    <span className="text-sm text-slate-200 md:text-base">{highlight}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-xl border border-white/15 bg-slate-900/60 p-4 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: 'rgba(77, 232, 255, 0.7)' }}
              >
                <p className="text-3xl font-bold text-cyan-300 neon-text-soft">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-300">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
