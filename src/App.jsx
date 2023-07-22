import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import CardsGrid from "./components/CardsGrid";
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsGrid />
      <Footer />
    </div>
  )
}

export default App