import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AppartementDetails from "../components/AppartementDetails";

function Accomodations() {
  return (
    <div>
      <Header />
      <AppartementDetails />
      <Footer />
    </div>
  );
}

export default Accomodations;
