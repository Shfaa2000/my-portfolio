import React from 'react';
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">

        {/* Role */}
        <p className="developer">Developer</p>

        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-text">
            <p className="hero-subtitle">Hello, I’m</p>

            <h1 className="hero-title">
              Shfaa Nakour
            </h1>

            <p className="hero-description">
              Frontend Developer specialized in React,
              with experience in Artificial Intelligence
              and Python.
            </p>

            <div className="hero-actions">
              <button className="btn primary">View Projects</button>
              <button className="btn secondary">Contact Me</button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-image">
            <img src={hero} alt="Profile" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
