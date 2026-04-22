import React, { useMemo } from 'react';

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 3,
        delay: `${Math.random() * 6}s`,
        duration: `${8 + Math.random() * 10}s`,
      })),
    []
  );

  return (
    <div className="particle-layer" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-dot"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
