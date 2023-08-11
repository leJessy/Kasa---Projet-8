import React from 'react';
import "../index.css";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import AboutDetails from '../Layout/AboutCollapse';

function About() {
  return (
    <div>
      <Header />
      <AboutDetails />
      <Footer />
    </div>
    
  )
}

export default About