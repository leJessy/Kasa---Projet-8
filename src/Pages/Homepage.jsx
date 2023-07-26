import React from 'react';
import "../index.css";
import Header from '../Layout/Header';
import Banner from "../components/Banner";
import CardsGrid from "../components/CardsGrid";
import Footer from '../Layout/Footer';



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <CardsGrid />
      <Footer />
    </div>
  )
}

export default App