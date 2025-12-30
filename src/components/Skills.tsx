import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import "../css/Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      {/* Header */}
      <div className="skills-header">
        <HiOutlineCode className="skills-icon" />
        <h2>Skills</h2>
        <p>I am striving to never stop learning and improving</p>
      </div>

      {/* Cards */}
      <div className="skills-cards">
        <div className="skill-card">
          <h3>Web Development</h3>
          <p>HTML • CSS • React</p>
        </div>

        <div className="skill-card">
          <h3>AI & Backend</h3>
          <p>Python • AI</p>
        </div>
      </div>

      {/* Icons */}
      <div className="skills-icons">
        <div className="skill-item html">
          <div className="skill-circle">
            <FaHtml5 />
          </div>
          <span>HTML</span>
        </div>

        <div className="skill-item css">
          <div className="skill-circle">
            <FaCss3Alt />
          </div>
          <span>CSS</span>
        </div>

        <div className="skill-item python">
          <div className="skill-circle">
            <FaPython />
          </div>
          <span>PYTHON</span>
        </div>

        <div className="skill-item react">
          <div className="skill-circle">
            <FaReact />
          </div>
          <span>REACT</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;