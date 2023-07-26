import React from 'react';
import { Link } from "react-router-dom";

function AppartementsList() {
  return (
    <Link to="/appartements">
      <div className='cards_appart'>
          <img src="banner1alt.png" alt="Test" className='cards_appart_img'/>
          <p className='cards_appart_text'>Test du texte et sur deux lignes</p>
      </div>
    </Link>
  )
}

export default AppartementsList