import React from 'react'

export default function Home(){
  return (
    <div className="container intro">
      <div className="intro-text">
        <h1>Hello, I'm David Odipo</h1>
        <p>A passionate web developer specializing in creating dynamic and beautiful web pages. Welcome to my portfolio!</p>
        <a href="#" className="btn">View My Work</a>
      </div>
      <div className="intro-image">
        <img src="/images/developer.png" alt="Web Developer" />
      </div>
    </div>
  )
}
