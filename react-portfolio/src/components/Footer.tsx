import React from 'react'

export default function Footer(): JSX.Element{
  return (
    <footer className="site-footer">
      <div>&copy; 2024 David Odipo. All rights reserved.</div>
      <div style={{display:'flex',gap:18,alignItems:'center'}}>
        <nav style={{display:'flex',gap:12}}>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="social">
          <a href="https://github.com/Daudicode12" aria-label="GitHub"><i className="fab fa-github" aria-hidden></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden></i></a>
        </div>
      </div>
    </footer>
  )
}
