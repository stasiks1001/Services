import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import BusinessCard1 from "../components/Helpers/Card1/index";
import BusinessCard2 from "../components/Helpers/Card2/index";
import BusinessCard3 from "../components/Helpers/Card3/index";


const HelpersPage = () => {
  return (

    <div className="cards-helpers">
      <ScrollToTop/>
      <BusinessCard1 />
      <BusinessCard2 />
      <BusinessCard3 />
    </div>
  );
};

export default HelpersPage;
