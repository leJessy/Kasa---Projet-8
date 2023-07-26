import React, { useEffect, useState } from 'react';
import "../index.css";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import AppartementsDetails from '../Layout/AppartementsDetails';
import AppartementsBanner from '../components/AppartementsBanner';
import AppartementsSpec from '../components/AppartementsSpec';
import { useLocation } from "react-router-dom";

function Accomodations() {
  const location = useLocation();

  const [flat, setselectedFlat] = useState([]);
  useEffect(fetchApartmentData, [])

  function fetchApartmentData() {
  fetch ("logements.json")
  .then((res) => res.json())
  .then((flats) => {
    const flat = flats.find((flat) => flat.id === location.state.apartmentId);
    setselectedFlat(flat);
  })
  }

  return (
    <div>
        <Header />
        <AppartementsBanner image={flat.cover} />
        <AppartementsSpec 
        title={flat.title}
        location={flat.location}
        />
        <AppartementsDetails />
        <Footer />
    </div>
  )
}

export default Accomodations