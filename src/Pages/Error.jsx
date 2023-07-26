import React from 'react';
import "../index.css";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className='Error'>
        <Header />
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className='Error_redirect'>Retourner sur la page d'accueil</Link>
        <Footer />
    </div>
  )
}

export default Error