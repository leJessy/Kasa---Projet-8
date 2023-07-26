import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src="logo.png" alt="Logo Kasa" />
      </div>
      <div className='navbar_text'>
        <Link to="/">
          Accueil
        </Link>
        <Link to="/about">
          A propos
        </Link>
      </div>
      
    </nav>
  )
}

export default Header