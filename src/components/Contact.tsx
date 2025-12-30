import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact</h2>
        <p className="contact-text">
          I'm currently available for freelance work
        </p>
        <div><h3 className="message-heading">Send Me A Message</h3></div>
            <form className="message-form">
                <div className='row'>
                  <div className="field-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
              </div>
              <div className="field-group">
                <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
              </div>
                </div>
            <div className="field-group">
              <label htmlFor="message">Your Message</label>
              <input
                id="message"
                placeholder="Enter your needs"
                
              ></input>
            </div>
          </form>
          <div>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </div>
      </div>
    </section>
  )
}

export default Contact
