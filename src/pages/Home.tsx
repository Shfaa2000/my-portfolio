import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Blogs/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home