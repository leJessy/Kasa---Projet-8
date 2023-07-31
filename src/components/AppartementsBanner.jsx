import React from "react";

function AppartementsBanner({ appartment }) {
  return (
    <div className="appartementsbanner">
      <img src={appartment.pictures[0]} alt="Banner Appart" />
    </div>
  );
}

export default AppartementsBanner;

