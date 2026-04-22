import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          className="section-title"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill) => (
            <motion.article
              key={skill.name}
              className="glass-panel p-5"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-100">{skill.name}</h3>
                <span className="text-sm text-cyan-200">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-900/90">
                <motion.div
                  className="skill-progress"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, rgba(255,255,255,0.9))`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
