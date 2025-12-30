import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import blogImage from '../assets/blog1.jpg';
import '../css/Blogs.css';

function Details() {
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

export default Details