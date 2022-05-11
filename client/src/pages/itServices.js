import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import BusinessCardItServices1 from "../components/IT-services/Card1/index";
import BusinessCardItServices2 from "../components/IT-services/Card2/index";
import BusinessCardItServices3 from "../components/IT-services/Card3/index";
import Video from "../videos/video.mp4";
import {HeroBg,VideoBg } from "../components/HeroSection/HeroElements";

const ItServicesPage = () => {
  return (

    <div className="cards-helpers">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <div className="business-cards">
        <ScrollToTop/>
        <BusinessCardItServices1 />
        <BusinessCardItServices2 />
        <BusinessCardItServices3 />
      </div>
    </div>
  );
};

export default ItServicesPage;
