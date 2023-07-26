import React from "react";
import { redirect, useParams } from "react-router-dom";
import AppartementsDetails from "../Layout/AppartementsDetails";
import AppartementsBanner from "./AppartementsBanner";
import AppartementsSpec from "./AppartementsSpec";
import appartments from "../database/logements.json"

function AppartementDetails() {
  const { id } = useParams();
  const appartment = appartments.find((appartment) => id === appartment.id)

  if (!appartment) {
    redirect('/404')
  }

  return (
    <>
      <AppartementsBanner appartment={appartment} />
      <AppartementsSpec appartment={appartment} />
      <AppartementsDetails appartment={appartment} />
    </>
  );
}

export default AppartementDetails;
