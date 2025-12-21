import React from 'react';
import profile from '../assets/profile.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="container about-content">

        {/* Text */}
        <div className="about-text-wrapper">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I am a frontend developer focused on building clean and
            responsive interfaces using React. I also have experience
            with Artificial Intelligence and Python.
          </p>

          <p className="about-text">
            I enjoy turning ideas into real digital products and
            continuously improving my skills.
          </p>
        </div>

        {/* Profile Card */}
        <div className="about-card">
          <img src={profile} alt="Profile" />
          <a href="#" className="about-cv">Download CV</a>
        </div>

      </div>
    </section>
  )
}

export default About
