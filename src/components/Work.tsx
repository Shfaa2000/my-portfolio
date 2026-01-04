import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/Work.css";
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';


const Works = () => {
  return (
    <section className="works">
      {/* Header */}
      <div className="works-header">
        <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}>Works</motion.h2>
        <p>I had the pleasure of working with these awesome projects</p>
      </div>
      {/* Slider */}
      <div className="works-slider">
        <button className="arrow left">
          <FaChevronLeft />
        </button>
        <div className="works-content">
          <div className="work-item dark">
            <img
              src={work1}
              alt=""
            />
          </div>
          <div className="work-item light">
            <img
              src={work2}
              alt=""
            />
            <a href="#" className="view-link">
              View Website →
            </a>
          </div>
        </div>
        <button className="arrow right">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Works;
