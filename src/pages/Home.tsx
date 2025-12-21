import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
// import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home