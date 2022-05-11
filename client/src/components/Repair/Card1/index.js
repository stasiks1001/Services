import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Card1/Footer";
import Main from "../Card1/Main";
import Navbar from "../Card1/Navbar";

import "../../styles.css";


const BusinessCard1 = () => {
  const {availableServices} = useParams();
  console.log(availableServices);
  return (
      
        <div className="card-helpers1">
            <Navbar />
            <Main />
            <Footer />
        </div>
      )
    

};

export default BusinessCard1;
