import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import BusinessCard1 from "../components/Photography/Card1/index";
import BusinessCard2 from "../components/Photography/Card2/index";
import BusinessCard3 from "../components/Photography/Card3/index";


const PhotographyPage = () => {
  return (

    <div className="cards-helpers">
      <ScrollToTop/>
      <BusinessCard1 />
      <BusinessCard2 />
      <BusinessCard3 />
    </div>
  );
};

export default PhotographyPage;
