import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          className="section-title"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card-neon"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <img src={project.image} alt={`${project.title} preview`} className="project-image" loading="lazy" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>

                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  variants={gridVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.stack.map((item) => (
                    <motion.span
                      key={item}
                      className="stack-pill"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="mt-5 flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    className="neon-btn"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live
                    <ExternalLink size={14} />
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    className="neon-btn neon-btn--ghost"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                    <Github size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
