import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

// Utility function to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};

// Custom hook for mouse tracking
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const filterVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' },
  },
};

const categoryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const categoryCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
};

const skillHoverVariants = {
  hover: {
    scale: 1.08,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
};

// Skill Badge Component
const SkillBadge = ({ skill, color }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const badgeRef = useRef(null);
  const [badgePosition, setBadgePosition] = useState({ x: 0, y: 0 });
  const mousePos = useMousePosition();

  useEffect(() => {
    if (!badgeRef.current || !isHovered) return;

    const badge = badgeRef.current;
    const rect = badge.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle from badge center to cursor
    const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
    const distance = 15; // Distance of glow from center

    setBadgePosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
  }, [mousePos, isHovered]);

  return (
    <motion.div
      ref={badgeRef}
      className="relative group"
      variants={skillBadgeVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      onMouseEnter={() => {
        setShowTooltip(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        setIsHovered(false);
      }}
    >
      {/* Animated gradient border glow (cursor tracking) */}
      {isHovered && (
        <motion.div
          className="absolute -inset-1 rounded-full blur-md opacity-75 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + badgePosition.x}% ${50 + badgePosition.y}%, ${color}, transparent 70%)`,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <motion.div
        className="relative px-4 py-3 rounded-full border-2 backdrop-blur-md transition-all duration-300 overflow-hidden"
        style={{
          borderColor: color,
          background: `linear-gradient(135deg, rgba(${hexToRgb(color).join(',')}, 0.15) 0%, rgba(${hexToRgb(color).join(',')}, 0.08) 100%)`,
        }}
        whileHover={{
          boxShadow: `0 0 25px ${color}, 0 0 50px ${color}50, inset 0 0 25px ${color}25`,
        }}
        variants={skillHoverVariants}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: `conic-gradient(from 0deg, ${color}, rgba(255,255,255,0), ${color})`,
              opacity: 0.3,
            }}
          />
        </div>

        <div className="relative flex items-center gap-2 whitespace-nowrap z-10">
          <motion.span
            className="text-lg"
            animate={isHovered ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
          >
            {skill.icon}
          </motion.span>
          <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            {skill.name}
          </span>
        </div>

        {/* Animated Progress Circle with pulse */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full border border-current text-white/30 flex items-center justify-center text-xs font-bold"
          animate={{ 
            borderColor: color,
            scale: isHovered ? [1, 1.15, 1] : 1,
          }}
          transition={{ scale: { duration: 0.5, repeat: isHovered ? Infinity : 0 } }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ borderColor: color }}
            animate={{
              boxShadow: [`0 0 8px ${color}`, `0 0 12px ${color}`, `0 0 8px ${color}`],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg whitespace-nowrap text-xs font-medium text-white z-50 pointer-events-none"
          >
            Proficiency: {skill.level}%
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Category Card Component
const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const mousePos = useMousePosition();

  useEffect(() => {
    if (!cardRef.current || !isHovered) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from card center to cursor
    const distX = ((mousePos.x - centerX) / rect.width) * 100;
    const distY = ((mousePos.y - centerY) / rect.height) * 100;

    setCardPosition({
      x: distX,
      y: distY,
    });
  }, [mousePos, isHovered]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      variants={categoryCardVariants}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border glow (cursor tracking) */}
      {isHovered && (
        <motion.div
          className="absolute -inset-0.5 rounded-2xl blur-xl opacity-60 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${cardPosition.x}% ${cardPosition.y}%, ${category.color}, rgba(${hexToRgb(category.color).join(',')}, 0.2) 40%, transparent 70%)`,
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Border glow */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${category.color}, #ff00ff)` }}
        animate={isHovered ? { opacity: 0.5 } : { opacity: 0 }}
      />

      {/* Card Container */}
      <motion.div
        className="relative p-6 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 z-10 overflow-hidden"
        style={{
          borderColor: isHovered ? category.color : `${category.color}40`,
          background: `linear-gradient(135deg, rgba(${hexToRgb(category.color).join(',')}, 0.12) 0%, rgba(${hexToRgb(category.color).join(',')}, 0.05) 100%), 
                       linear-gradient(to bottom, rgba(255,255,255, 0.08), rgba(0,0,0, 0.15))`,
          boxShadow: isHovered
            ? `0 0 40px ${category.color}70, inset 0 1px 0 rgba(255,255,255,0.15)`
            : `0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
        }}
        animate={
          isHovered
            ? { borderColor: category.color }
            : { borderColor: `${category.color}40` }
        }
      >
        {/* Animated gradient overlay on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${cardPosition.x}% ${cardPosition.y}%, ${category.color}, transparent 80%)`,
            }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        )}

        {/* Header */}
        <div className="mb-6 flex items-start justify-between relative z-20">
          <div className="flex-1">
            <motion.div
              className="flex items-center gap-3 mb-2"
              animate={isHovered ? { x: 8 } : { x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <motion.span 
                className="text-3xl"
                animate={isHovered ? { rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {category.icon}
              </motion.span>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                {category.name}
              </h3>
            </motion.div>

            {/* Category Label with Glow */}
            <motion.div
              className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-black/30 border border-white/10 text-white/70 mt-1"
              style={{
                boxShadow: isHovered ? `0 0 15px ${category.color}60` : 'none',
              }}
              animate={isHovered ? { boxShadow: `0 0 20px ${category.color}80` } : {}}
            >
              {category.skills.length} skills
            </motion.div>
          </div>

          {/* Skill Count Badge with Animation */}
          <motion.div
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-bold relative"
            style={{
              borderColor: category.color,
              background: `rgba(${hexToRgb(category.color).join(',')}, 0.15)`,
              color: category.color,
              boxShadow: isHovered ? `0 0 20px ${category.color}80, inset 0 0 10px ${category.color}40` : `0 0 10px ${category.color}40`,
            }}
            animate={
              isHovered
                ? { scale: 1.15, rotate: 360 }
                : { scale: 1, rotate: 0 }
            }
            transition={{ rotate: { duration: 1.5, repeat: isHovered ? Infinity : 0 } }}
          >
            {category.skills.length}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        >
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} color={category.color} />
          ))}
        </motion.div>

        {/* Animated decorative line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r rounded-full"
          style={{ background: `linear-gradient(to right, ${category.color}, transparent)` }}
          initial={{ width: 0 }}
          animate={isHovered ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Filter Button Component
const FilterButton = ({ category, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden border"
      style={{
        borderColor: isActive ? category.color : 'rgba(255,255,255,0.2)',
        background: isActive
          ? `linear-gradient(135deg, rgba(${hexToRgb(category.color).join(',')}, 0.3), rgba(${hexToRgb(category.color).join(',')}, 0.1))`
          : 'rgba(255,255,255,0.05)',
        color: isActive ? category.color : 'rgba(255,255,255,0.7)',
        boxShadow: isActive ? `0 0 15px ${category.color}40` : 'none',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px ${category.color}60`,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="flex items-center gap-2 relative z-10"
        animate={isActive ? { x: 2 } : { x: 0 }}
      >
        <span>{category.icon}</span>
        {category.name}
      </motion.span>

      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${category.color}20, transparent)`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

// Main Component
export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);
  const mousePos = useMousePosition();
  const [cursorGlowPos, setCursorGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    if (
      mousePos.x >= rect.left &&
      mousePos.x <= rect.right &&
      mousePos.y >= rect.top &&
      mousePos.y <= rect.bottom
    ) {
      setCursorGlowPos({
        x: mousePos.x - rect.left,
        y: mousePos.y - rect.top,
      });
    }
  }, [mousePos]);

  const filteredCategories = activeFilter
    ? skillsCategories.filter((cat) => cat.id === activeFilter)
    : skillsCategories;

  return (
    <section id="skills" className="section-wrap relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements with enhanced effects */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl opacity-40 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl opacity-40 pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Dynamic cursor tracking glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%)',
          left: cursorGlowPos.x - 192,
          top: cursorGlowPos.y - 192,
        }}
        animate={{
          opacity: 0.4,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(0,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid-pattern)"
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with enhanced animations */}
        <motion.div
          className="text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            variants={titleVariants}
          >
            <motion.span 
              className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Professional Skills
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.1 }}
          >
            Expert-level proficiency across modern technologies and frameworks
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2"
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.button
            onClick={() => setActiveFilter(null)}
            className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden border"
            style={{
              borderColor: !activeFilter ? '#00ffff' : 'rgba(255,255,255,0.2)',
              background: !activeFilter
                ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 255, 255, 0.1))'
                : 'rgba(255,255,255,0.05)',
              color: !activeFilter ? '#00ffff' : 'rgba(255,255,255,0.7)',
              boxShadow: !activeFilter ? '0 0 15px rgba(0,255,255,0.4)' : 'none',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,255,0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>

          {skillsCategories.map((category) => (
            <FilterButton
              key={category.id}
              category={category}
              isActive={activeFilter === category.id}
              onClick={() => setActiveFilter(activeFilter === category.id ? null : category.id)}
            />
          ))}
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={categoryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-12 border-t border-white/10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Skill Categories', value: skillsCategories.length },
            { label: 'Total Skills', value: skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0) },
            { label: 'Avg Proficiency', value: '85%' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-4 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,255,255,0.5)' }}
            >
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-300 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
