import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import blogImage from '../assets/blog1.jpg';
import '../css/Blogs.css';

function Blogs() {
  return (
    <section>
      <Header/>
      <section className="blogs-section">
      <div className="container">
        <h2 className="blogs-heading">Blogs</h2>
        <p className="blogs-text">
          My thoughts on technologies and business
        </p>
         <div className="blogs-actions">
          <button className="btn btn-primary" style={{ marginBottom: "40px" }}>
            Subscribe My Blogs
          </button>
        </div>
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
      </div>
    </section>
      <Footer/>
    </section>
  )
}

export default Blogs