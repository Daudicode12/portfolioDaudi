import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

// Profile image component with neon effects
const ProfileImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={imageRef}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleAboutClick}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
    >
      {/* Outer glowing ring (animated) */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'conic-gradient(from 0deg, #4de8ff, #a65dff, #4de8ff)',
          filter: 'blur(8px)',
        }}
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Static glow border ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderImage: 'linear-gradient(45deg, #4de8ff, #a65dff) 1',
          boxShadow: '0 0 20px rgba(77, 232, 255, 0.5), inset 0 0 20px rgba(166, 93, 255, 0.2)',
        }}
        animate={isHovered ? { boxShadow: '0 0 30px rgba(77, 232, 255, 0.8), inset 0 0 30px rgba(166, 93, 255, 0.3)' } : {}}
      />

      {/* Profile image container */}
      <motion.div
        className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-neon-cyan/60 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          boxShadow: isHovered
            ? '0 0 20px rgba(77, 232, 255, 0.8), 0 0 40px rgba(166, 93, 255, 0.5)'
            : '0 0 12px rgba(77, 232, 255, 0.5), 0 0 24px rgba(166, 93, 255, 0.2)',
        }}
      >
        <img
          src="/images/profile.jpeg"
          alt="David Onyango - Full Stack Developer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Status indicator (green dot) */}
      <motion.div
        className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple border border-slate-900"
        animate={isHovered ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
        style={{
          boxShadow: '0 0 8px rgba(0, 255, 128, 0.8)',
        }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-white text-sm font-semibold whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        David Onyango
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neon-cyan/50"
        />
      </motion.div>

      {/* Cursor glow effect */}
      {isHovered && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '40px',
            height: '40px',
            left: `${mousePosition.x - 20}px`,
            top: `${mousePosition.y - 20}px`,
            background: 'radial-gradient(circle, rgba(77, 232, 255, 0.3), transparent)',
            filter: 'blur(15px)',
          }}
        />
      )}
    </motion.div>
  );
};

export default function NeonNavbar({ activeSection, isMenuOpen, scrolled, onToggleMenu, onNavigate }) {
  return (
    <header className={`nav-shell ${scrolled ? 'nav-shell--scrolled' : ''}`}>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => onNavigate('home')}
          className="brand-mark"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {'<DO/>'}
        </motion.a>

        {/* Navigation links - Desktop */}
        <motion.div
          className="hidden items-center gap-7 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = sectionId === activeSection;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => onNavigate(sectionId)}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 150 }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Right side - Profile image and mobile menu button */}
        <div className="flex items-center gap-4">
          {/* Profile image */}
          <ProfileImage />

          {/* Mobile menu button */}
          <motion.button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 p-2 text-white md:hidden hover:border-neon-cyan/40 transition-colors duration-200"
            aria-label="Toggle menu"
            onClick={onToggleMenu}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="mx-5 mb-4 rounded-xl border border-cyan-400/20 bg-slate-950/90 p-3 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => onNavigate(sectionId)}
                className="block rounded-md px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: index * 0.05,
                }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
