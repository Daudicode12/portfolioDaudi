import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const NavItem = ({ to, icon, label, onClick }) => (
    <div className="nav-item" onClick={onClick}>
      <i className={icon} aria-hidden></i>
      <NavLink to={to} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>
    </div>
  )

  return (
    <nav className="nav">
      <div className="brand">
        <img src="/images/logo.jpeg" alt="Logo" />
      </div>

      <button className={`hamburger ${open ? 'open' : ''}`} aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <NavItem to="/about" icon="fas fa-user" label="ABOUT" onClick={() => setOpen(false)} />
        <NavItem to="/" icon="fas fa-home" label="HOME" onClick={() => setOpen(false)} />
        <NavItem to="/projects" icon="fas fa-briefcase" label="PROJECTS" onClick={() => setOpen(false)} />
        <NavItem to="/contact" icon="fas fa-envelope" label="CONTACT" onClick={() => setOpen(false)} />
      </div>
    </nav>
  )
}
