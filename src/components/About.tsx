import profile from '../assets/profile.jpg';
import '../css/About.css';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}>
      <div className="container about-content">
        {/* Text */}
        <div className="about-text-wrapper">
          <motion.h2 className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}>Who I Am</motion.h2>
          <p className="about-text">
            <h2>Hello</h2>
            I’m a Frontend Developer specialized in building modern, responsive web interfaces using React.
            I also work with Python and have a strong interest in Artificial Intelligence and smart systems.
            I enjoy continuous learning, improving my technical skills, and growing into a leadership role
            where I can create impact through technology.
          </p>
        </div>
        {/* Profile Card */}
        <div className="about-card">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </motion.section>
  )
}

export default About
