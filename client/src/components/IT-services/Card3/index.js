import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Card3/Footer";
import Main from "../Card3/Main";
import Navbar from "../Card3/Navbar";

import "../styles.css";


const BusinessCardItServices3 = () => {
  const {availableServices} = useParams();
  console.log(availableServices);
  return (
      
        <div className="card-helpers3">
          <Navbar />
          <Main />
          <Footer />
        </div>
      )
    

};

export default BusinessCardItServices3;
