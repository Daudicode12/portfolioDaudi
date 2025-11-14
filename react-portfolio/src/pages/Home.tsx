import React from 'react'

export default function Home(): JSX.Element{
  return (
    <div className="container intro">
      <div className="intro-text">
        <h1>Hello, I'm David Odipo</h1>
        <p className="hero-sub">I design and build modern, accessible web applications — with a focus on performance, clarity, and delightful UI.</p>

        <div className="tech-list">
          <span className="tech">React</span>
          <span className="tech">Next.js</span>
          <span className="tech">JavaScript</span>
          <span className="tech">Node</span>
          <span className="tech">CSS</span>
        </div>

        <div style={{marginTop:18}}>
          <a href="/projects" className="btn">View Projects</a>
          <a href="/contact" className="btn secondary" style={{marginLeft:12}}>Contact Me</a>
        </div>
      </div>
      <div className="intro-image">
        <img src="/images/developer.png" alt="Web Developer" />
      </div>
    </div>
  )
}
