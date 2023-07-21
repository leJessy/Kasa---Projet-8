import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import CardsGrid from "./components/CardsGrid";



function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsGrid />
    </div>
  )
}

export default App