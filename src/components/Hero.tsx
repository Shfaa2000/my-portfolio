import React from "react";
import hero from "../assets/hero.jpg";
import '../css/Hero.css';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="hero">
    <motion.h1
      className="hero-watermark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1.2 }}>Developer</motion.h1>
      <div className="hero-container">
        {/* Left Card */}
        <motion.div className="hero-card"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
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
        </motion.div>
        {/* Center Content */}
        <motion.div className="hero-content"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
          <h2>
            <p>Hey</p>
            I’m <span>Shfaa</span>, <br />
            Frontend Developer
          </h2>
          <p className="hero-desc">
            I craft clean, scalable web interfaces using React,
            and build intelligent solutions with Python and AI.
          </p>
          <motion.button className="hero-main-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>Let’s Talk</motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
