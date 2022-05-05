import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

 

const HeroSection = () => {
 /*  const [hover, setHover] = useState(false); */

 
  return (
    <HeroContainer id="home">
      
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        
        <HeroH1>Where demand meets quality help</HeroH1>
        
        <HeroP>
          Sign up and find the help that you need 
        </HeroP>


            <NavBtn>
              <NavBtnLink
                to="/city"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Choose a city {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
              </NavBtnLink>
            </NavBtn>

      </HeroContent>

    </HeroContainer>

  );
};

export default HeroSection;
