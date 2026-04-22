import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

export default function NeonNavbar({ activeSection, isMenuOpen, scrolled, onToggleMenu, onNavigate }) {
  return (
    <header className={`nav-shell ${scrolled ? 'nav-shell--scrolled' : ''}`}>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" onClick={() => onNavigate('home')} className="brand-mark">
          {'<DO/>'}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = sectionId === activeSection;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => onNavigate(sectionId)}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mx-5 mb-4 rounded-xl border border-cyan-400/20 bg-slate-950/90 p-3 backdrop-blur-xl md:hidden">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => onNavigate(sectionId)}
                className="block rounded-md px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
