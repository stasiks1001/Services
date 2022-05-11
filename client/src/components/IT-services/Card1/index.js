import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Card1/Footer";
import Main from "../Card1/Main";
import Navbar from "../Card1/Navbar";

const BusinessCardItServices1 = () => {
  const {ItServices} = useParams();
  console.log(ItServices);
  return (
      
        <div className="card-helpers1">
            <Navbar />
            <Main />
            <Footer />
        </div>
      )
    

};

export default BusinessCardItServices1;
