import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import BusinessCardItServices1 from "../components/IT-services/Card1/index";
import BusinessCardItServices2 from "../components/IT-services/Card2/index";
import BusinessCardItServices3 from "../components/IT-services/Card3/index";


const ItServicesPage = () => {
  return (

    <div className="cards-helpers">
      <ScrollToTop/>
      <BusinessCardItServices1 />
      <BusinessCardItServices2 />
      <BusinessCardItServices3 />
    </div>
  );
};

export default ItServicesPage;
