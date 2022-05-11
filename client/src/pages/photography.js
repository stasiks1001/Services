import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import BusinessCard1 from "../components/Photography/Card1/index";
import BusinessCard2 from "../components/Photography/Card2/index";
import BusinessCard3 from "../components/Photography/Card3/index";
import Video from "../videos/video.mp4";
import {HeroBg,VideoBg } from "../components/HeroSection/HeroElements";

const PhotographyPage = () => {
  return (

    <div className="cards-helpers">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
     
      <div className="business-cards">
        <ScrollToTop/>
        <BusinessCard1 />
        <BusinessCard2 />
        <BusinessCard3 />
      </div>
    </div>
  );
};

export default PhotographyPage;
