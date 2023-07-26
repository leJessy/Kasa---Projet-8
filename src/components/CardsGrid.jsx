import React from 'react';
import AppartementsList from './AppartementsList.jsx';

function CardsGrid() {
  return (
    <div className='background'>
        <AppartementsList />
        <AppartementsList />
        <AppartementsList />
        <AppartementsList />
        <AppartementsList />
        <AppartementsList />   
    </div>
  )
}

export default CardsGrid