import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import BusinessCard1 from "../components/Repair/Card1/index";
import BusinessCard2 from "../components/Repair/Card2/index";
import BusinessCard3 from "../components/Repair/Card3/index";


const RepairPage = () => {
  return (

    <div className="cards-helpers">
      <ScrollToTop/>
      <BusinessCard1 />
      <BusinessCard2 />
      <BusinessCard3 />
    </div>
  );
};

export default RepairPage;
