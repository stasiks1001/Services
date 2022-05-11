import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Card2/Footer";
import Main from "../Card2/Main";
import Navbar from "../Card2/Navbar";

import "../../styles.css";


const BusinessCard2 = () => {
  const {availableServices} = useParams();
  console.log(availableServices);
  return (
      
        <div className="card-helpers2">
          <Navbar />
          <Main />
          <Footer />
        </div>
      )
    

};

export default BusinessCard2;
