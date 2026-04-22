import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Star, Info } from 'lucide-react';

export default function ProjectCard({ 
  id,
  title, 
  description, 
  fullDescription,
  stack = [], 
  image, 
  codeUrl, 
  featured = false,
  category = [],
  rating = 0,
  index = 0,
  onOpenModal = () => {}
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef(null);

  // Ensure category is an array
  const categories = Array.isArray(category) ? category : [category];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      },
    },
  };

  const stackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2 + index * 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`relative h-full ${featured ? 'lg:col-span-1 lg:row-span-2' : ''}`}
    >
      {/* Featured badge */}
      {featured && (
        <motion.div
          className="absolute -top-3 -right-3 z-20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple border border-neon-cyan/50 shadow-lg shadow-neon-cyan/30">
            <Star size={12} className="fill-current" />
            <span className="text-xs font-bold text-white">Featured</span>
          </div>
        </motion.div>
      )}

      <motion.article
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: featured ? -16 : -12, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={`
          group relative overflow-hidden rounded-2xl h-full
          border transition-all duration-300 flex flex-col
          backdrop-blur-xl cursor-pointer
          ${
            featured
              ? 'border-neon-cyan/60 bg-gradient-to-br from-neon-cyan/10 via-slate-900/60 to-neon-purple/10 shadow-2xl shadow-neon-cyan/20'
              : 'border-slate-700/50 bg-slate-950/40 hover:border-neon-cyan/40 hover:shadow-2xl hover:shadow-neon-cyan/15'
          }
        `}
      >
        {/* Image container */}
        <div className={`relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 ${featured ? 'h-72' : 'h-56'}`}>
          {!imageError ? (
            <motion.img
              src={image}
              alt={title}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-xs text-slate-400">Image unavailable</p>
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          <div
            className={`
              absolute inset-0 transition-opacity duration-300
              ${featured 
                ? 'bg-gradient-to-t from-neon-purple/40 via-transparent to-transparent' 
                : 'bg-gradient-to-t from-slate-950/60 via-transparent to-transparent'
              }
            `}
          />

          {/* Hover glow effect */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`
                absolute inset-0 pointer-events-none
                ${featured 
                  ? 'bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20' 
                  : 'bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10'
                }
              `}
            />
          )}
        </div>

        {/* Content */}
        <div className="relative p-6 flex-1 flex flex-col">
          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Star
                    size={14}
                    className={i < Math.round(rating) ? 'fill-neon-cyan text-neon-cyan' : 'text-slate-600'}
                  />
                </motion.div>
              ))}
              <span className="text-xs text-slate-400 ml-1">{rating.toFixed(1)}</span>
            </div>
          )}

          {/* Title */}
          <motion.h3
            className={`
              text-xl font-bold mb-2 leading-tight
              ${
                featured
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent'
                  : 'text-slate-100'
              }
            `}
            style={{
              textShadow: featured
                ? '0 0 20px rgba(77, 232, 255, 0.3)'
                : 'none',
            }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className={`text-sm text-slate-300 mb-4 flex-grow ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {description}
          </p>

          {/* Category tags */}
          {categories.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05 }}
            >
              {categories.map((cat) => (
                <motion.span
                  key={cat}
                  variants={badgeVariants}
                  className="text-xs px-2 py-1 rounded-full font-semibold border"
                  style={{
                    borderColor: featured ? 'rgba(77, 232, 255, 0.5)' : 'rgba(148, 163, 184, 0.5)',
                    backgroundColor: featured ? 'rgba(77, 232, 255, 0.1)' : 'rgba(148, 163, 184, 0.1)',
                    color: featured ? '#4de8ff' : '#cbd5e1',
                  }}
                >
                  {cat}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Tech stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            variants={stackVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stack.map((tech) => (
              <motion.span
                key={tech}
                variants={badgeVariants}
                className={`
                  text-xs px-3 py-1 rounded-full font-medium
                  border backdrop-blur-sm transition-all duration-200
                  ${
                    featured
                      ? 'border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/20 shadow-sm shadow-neon-cyan/20'
                      : 'border-slate-600/60 bg-slate-700/30 text-slate-200 hover:border-neon-blue/60 hover:bg-slate-600/40 hover:text-neon-blue'
                  }
                `}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            {codeUrl && (
              <motion.a
                href={codeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-2.5 rounded-lg font-semibold text-sm
                  transition-all duration-200 border
                  ${
                    featured
                      ? 'border-neon-cyan/60 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan hover:from-neon-cyan/30 hover:to-neon-purple/30 hover:shadow-lg hover:shadow-neon-cyan/30'
                      : 'border-neon-blue/40 bg-neon-blue/10 text-neon-blue hover:border-neon-blue/70 hover:bg-neon-blue/20 hover:shadow-lg hover:shadow-neon-blue/25'
                  }
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>Code</span>
              </motion.a>
            )}

            {fullDescription && (
              <motion.button
                onClick={() => onOpenModal(id)}
                className={`
                  flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-2.5 rounded-lg font-semibold text-sm
                  transition-all duration-200 border
                  ${
                    featured
                      ? 'border-neon-purple/60 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-purple hover:from-neon-purple/30 hover:to-neon-cyan/30 hover:shadow-lg hover:shadow-neon-purple/30'
                      : 'border-neon-purple/40 bg-neon-purple/10 text-neon-purple hover:border-neon-purple/70 hover:bg-neon-purple/20 hover:shadow-lg hover:shadow-neon-purple/25'
                  }
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Info size={16} />
                <span>Details</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* Animated border for featured */}
        {featured && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(rgba(77, 232, 255, 0.8), rgba(166, 93, 255, 0.8))',
              backgroundClip: 'padding-box',
              animation: isHovered ? 'border-glow 2s ease-in-out infinite' : 'none',
            }}
          />
        )}
      </motion.article>
    </motion.div>
  );
}
