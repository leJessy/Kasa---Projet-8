import React from 'react';
import { Link } from "react-router-dom";

function AppartementsList(props) {

  return (
    <Link to="/appartements" 
    state={{
      apartmentId: props.id
    }}
    >
      <div className='cards_appart'>
          <img src={props.image} alt="Test" className='cards_appart_img'/>
          <p className='cards_appart_text'>{props.title}</p>
      </div>
    </Link>
  )
}

export default AppartementsList