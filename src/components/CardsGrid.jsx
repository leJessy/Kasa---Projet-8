import React from "react";
import AppartementsList from "./AppartementsList.jsx";
import appartments from "../database/logements.json"

function CardsGrid() {
  
  return (
    <div className="background">
      {appartments.map((appartment) => { return <AppartementsList key={appartment.id} appartment={appartment} />})}
    </div>
  );
}

export default CardsGrid;
