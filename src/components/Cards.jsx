import React from "react";
import { Link } from "react-router-dom";

function AppartementsList({ appartment }) {
  return (
    <Link to={`/appartements/${appartment.id}`}>
      <div className="cards_appart">
        <img
          src={appartment.cover}
          alt={appartment.title}
          className="cards_appart_img"
        />
        <p className="cards_appart_text">{appartment.title}</p>
      </div>
    </Link>
  );
}

export default AppartementsList;
