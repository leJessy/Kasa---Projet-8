import React, { useEffect, useState } from 'react';
import AppartementsList from './AppartementsList.jsx';

function CardsGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, [])

  function fetchApartments() {
    fetch("logements.json")
    .then ((res) => res.json())
    .then ((res) => setApartments(res))
    .catch(console.error);
  }


  return (
    <div className='background'>
        {apartments.map((apartment) => (
          <AppartementsList key={apartment.id} title={apartment.title} image={apartment.cover} id={apartment.id} />
        ))} 
    </div>
  )
}

export default CardsGrid