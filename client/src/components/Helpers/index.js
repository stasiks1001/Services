import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Helpers/Footer";
import About from "../Helpers/About";
import Interests from "../Helpers/Interests";
import Main from "../Helpers/Main";
import Navbar from "../Helpers/Navbar";

import "../styles.css";


const BusinessCard = () => {
  const {availableServices} = useParams();
  console.log(availableServices);
  return (
      
        <>
           
            <About />
            <Interests />
            <Main />
            <Navbar />
            <Footer />
        </>
      )
    

};

export default BusinessCard;
