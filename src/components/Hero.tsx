import React from "react";
import hero from "../assets/hero.jpg";
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-watermark">Developer</h1>
      <div className="hero-container">
        {/* Left Card */}
        <div className="hero-card">
          <img src={hero} alt="Profile" className="card-avatar" />
          <h3>Shfaa</h3>
          <p className="card-role">Frontend Developer</p>
          <ul className="card-info">
          <li>📧 shfaa@email.com</li>
          <li>🌐 shfaa.dev</li>
          </ul>
          <div className="card-skills">
          <span>React</span>
          <span>Vite</span>
          <span>Python</span>
          </div>
          <button className="card-btn">Download CV</button>
        </div>
        {/* Center Content */}
        <div className="hero-content">
          <h2>
            <p>Hey</p>
            I’m <span>Shfaa</span>, <br />
            Frontend Developer
          </h2>
          <p className="hero-desc">
            I build modern web interfaces and smart systems using
            React and Python.
          </p>
          <button className="hero-main-btn">Let’s Talk</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
