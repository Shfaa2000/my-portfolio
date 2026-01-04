import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import "../css/Skills.css";

const Skills = () => {
  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
  return (
    <section className="skills">
      {/* Header */}
      <div className="skills-header">
        <HiOutlineCode className="skills-icon" />
        <motion.h2 className="skills-title"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}>Skills</motion.h2>
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
      <motion.div className="skills-icons"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
        <motion.div className="skill-item html" variants={itemVariants}>
          <div className="skill-circle">
            <FaHtml5 />
          </div>
          <span>HTML</span>
        </motion.div>

        <motion.div className="skill-item css" variants={itemVariants}>
          <div className="skill-circle">
            <FaCss3Alt />
          </div>
          <span>CSS</span>
        </motion.div>

        <motion.div className="skill-item python" variants={itemVariants}>
          <div className="skill-circle">
            <FaPython />
          </div>
          <span>PYTHON</span>
        </motion.div>

        <motion.div className="skill-item react" variants={itemVariants}>
          <div className="skill-circle">
            <FaReact />
          </div>
          <span>REACT</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;