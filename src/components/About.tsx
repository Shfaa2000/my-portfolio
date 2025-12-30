import React from 'react';
import profile from '../assets/profile.jpg';
import '../css/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        {/* Text */}
        <div className="about-text-wrapper">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            <h2>Hello</h2>
            I am a frontend developer focused on building clean and
            responsive interfaces using React. I also have experience
            with Artificial Intelligence and Python.
            I enjoy turning ideas into real digital products and
            continuously improving my skills.
          </p>
        </div>
        {/* Profile Card */}
        <div className="about-card">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default About
