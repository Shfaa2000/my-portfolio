import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import blogImage from '../assets/blog1.jpg';
import '../css/Blogs.css';

function BlogsPreview() {
  return (
    <section className="blogs-section">
      <div className="container">
        <motion.h2 className="blogs-heading"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}>Blogs</motion.h2>
        <p className="blogs-text">
          My thoughts on technologies and business
        </p>
        {/* Blog Card */}
        <div className="blogs-grid">
          <article className="blog-card">
            {/* Image */}
            <div className="blog-image">
              <img src={blogImage} alt="Web Developer" />
            </div>
            {/* Content */}
            <div className="blog-content">
              <h3 className="blog-title">
                What does it take to become a web developer?
              </h3>
              <p className="blog-description">
                Web development, also known as website development,
                encompasses a variety of tasks and processes involved
                in creating websites for the internet…
              </p>
              <Link to="/details" className="blog-read">
                Read more →
              </Link>
            </div>
          </article>
        </div>
        {/* Buttons */}
        <div className="blogs-actions">
          <Link to="/blogs" className="btn btn-outline">
            View More
          </Link>
          <button className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogsPreview
