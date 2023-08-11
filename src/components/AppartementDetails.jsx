import React, { useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import AppartementsCollapse from "../Layout/AppartementsCollapse";
import AppartementsBanner from "./AppartementsSlide";
import AppartementsSpec from "./AppartementsSpec";
import appartments from "../database/logements.json";

function AppartementDetails() {
  const { id } = useParams();
  const appartment = appartments.find((appartment) => id === appartment.id);
  const navigate = useNavigate();

  useEffect(() => {
    if(!appartment) {
      navigate("/404");
    }
  }, [appartment]);

  return (
    <>
      {appartment && <>
      <AppartementsBanner appartment={appartment} />
      <AppartementsSpec appartment={appartment} />
      <AppartementsCollapse appartment={appartment} />
      </>
    }
    </>
  );
}

export default AppartementDetails;
