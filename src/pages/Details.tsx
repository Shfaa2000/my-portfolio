import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import blogImage from '../assets/blog1.jpg';
import '../css/Blogs.css';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

function Details() {
  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
  return (
    <section>
      <Header/>
      <section className="blogs-section">
      <div className="container">
        <div>
          <div className="details-head">
            <h3 className="blog-title">
                What does it take to become a web developer?
              </h3>
            <div className="details-image">
              <img src={blogImage} alt="Web Developer" />
            </div>
            <h5>Frontedend</h5>
              <p className="blog-description">
                Web development, also known as website development,
                encompasses a variety of tasks and processes involved
                in creating websites for the internet…
              </p>
              <h5>Frontedend</h5>
              <p className="blog-description">
                Web development, also known as website development,
                encompasses a variety of tasks and processes involved
                in creating websites for the internet…
              </p>
              <h5>Frontedend</h5>
              <p className="blog-description">
                Web development, also known as website development,
                encompasses a variety of tasks and processes involved
                in creating websites for the internet…
              </p>
              <h5>Frontedend</h5>
              <p className="blog-description">
                Web development, also known as website development,
                encompasses a variety of tasks and processes involved
                in creating websites for the internet…
              </p>
              <button className="btn btn-primary" style={{ marginBottom: "40px" }}>
            Subscribe My Blogs
          </button>
        </div>
          <h2 className='details-heading'>You Might also like</h2>
        </div>
        {/* Blog Card */}
         <motion.div
  className="blogs-grid"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {[1, 2, 3, 4, 5].map((_, index) => (
    <motion.article
      key={index}
      className="blog-card"
      variants={itemVariants}
    >
      <div className="blog-image">
        <img src={blogImage} alt="Web Developer" />
      </div>

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
    </motion.article>
  ))}
</motion.div>
      </div>
    </section>
      <Footer/>
    </section>
  )
}

export default Details