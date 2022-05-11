import React from "react";
import { NavLink } from "react-router-dom";
import VideoRegister from "../../videos/video.mp4";
import {
  BackgroundRegister,
  VideoBgRegister,
  FormContentRegister,
  FormRegister,
  FormH1Register,
  FormButtonRegister1,
  FormButtonRegister2,
  FormButtonRegister3,
  FormButtonRegister4,
} from "./CityElements";

const City = () => {
  return (
    <>
      <BackgroundRegister>
        <VideoBgRegister autoPlay loop muted src={VideoRegister} type="video/mp4" />
      </BackgroundRegister>
          <FormContentRegister>
            <FormRegister action="#">
              <FormH1Register>Cities</FormH1Register>
             
                <FormButtonRegister1 >
                  <NavLink to="/city/leipzig">
                    Leipzig
                  </NavLink>
                </FormButtonRegister1>
                  
                <FormButtonRegister2 >
                  <NavLink to="/city/munich">
                    Munich
                  </NavLink>
                </FormButtonRegister2>
                
                <FormButtonRegister3 >
                  <NavLink to="/city/bayern">
                    Bayern
                  </NavLink>
                </FormButtonRegister3>

                <FormButtonRegister4 >
                  <NavLink to="/city/hamburg">
                    Hamburg
                  </NavLink>
                </FormButtonRegister4>

            </FormRegister>
          </FormContentRegister>
    </>
  );
};

export default City;
