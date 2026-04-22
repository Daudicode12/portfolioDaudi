import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:davidonya2@gmail.com?subject=${subject}&body=${body}`;
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-wrap pb-28">
      <div className="mx-auto w-full max-w-4xl">
        <motion.h2
          className="section-title"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="glass-panel p-6 md:p-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.form
            className="grid gap-4"
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.input
              className="neon-input"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              className="neon-input"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              className="neon-input min-h-32"
              name="message"
              placeholder="Tell me about your project"
              value={form.message}
              onChange={handleChange}
              required
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              className="neon-btn w-fit"
              type="submit"
              variants={inputVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Mail size={14} />
            </motion.button>
          </motion.form>

          <motion.div
            className="mt-8 flex items-center gap-3"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              className="social-orb"
              href="https://github.com/Daudicode12"
              aria-label="GitHub"
              variants={inputVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              className="social-orb"
              href="https://linkedin.com/in/daudislugger"
              aria-label="LinkedIn"
              variants={inputVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              className="social-orb"
              href="mailto:davidonya2@gmail.com"
              aria-label="Email"
              variants={inputVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
