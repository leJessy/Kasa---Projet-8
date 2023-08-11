import React, { useState } from "react";

function AppartementsBanner({ appartment }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % appartment.pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? appartment.pictures.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="appartementsbanner">
      <div className="slideshow">
        <img src={appartment.pictures[currentSlide]} alt="Banner Appart" />
      </div>
      <div className="changeslide">
        <button onClick={prevSlide} className="btn-left"><i className="fa-solid fa-chevron-left iconslide"></i></button>
        <button onClick={nextSlide} className="btn-right"><i className="fa-solid fa-chevron-right iconslide"></i></button>
        <div className="slide-count">{currentSlide +1} / {appartment.pictures.length}</div>
      </div>
    </div>
  );
}

export default AppartementsBanner;