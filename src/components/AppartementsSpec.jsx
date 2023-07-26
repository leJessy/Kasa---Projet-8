import React from "react";
import { useParams } from "react-router-dom";

function AppartementsSpec({ appartment }) {
  const [firstname, lastname] = appartment.host.name.split(" ");

  return (
    <div className="Spec-page">
      <div className="Spec-page__flats">
        <div className="Spec-page__title">
          <h1>{appartment.title}</h1>
          <h2>{appartment.location}</h2>
          <div className="tags">
            {appartment.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="Spec-page__details">
          <div className="Spec-page__owner">
            <h3>
              <span>{firstname}</span>
              <span>{lastname}</span>
            </h3>
            <img
              src={appartment.host.picture}
              alt={appartment.host.name}
              className="Spec-page__details__photo"
            />
          </div>
          <div className="Spec-page__details__ratings">
            {[1, 2, 3, 4, 5].map((index) => <span key={index} className={index <= appartment.rating ? "Full" : "Empty"}>★</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppartementsSpec;
