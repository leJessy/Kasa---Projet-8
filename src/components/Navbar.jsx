import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src="logo.png" alt="Logo Kasa" />
      </div>
      <div className='navbar_text'>
        <a>Accueil</a>
        <a>A propos</a>
      </div>
      
    </nav>
  )
}

export default Navbar