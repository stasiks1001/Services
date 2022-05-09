import React from "react";
import {NavLink} from "react-router-dom";
import { useParams } from "react-router-dom";
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
} from "./ServiceElements";

const Service = () => {
  const {available} = useParams();
  console.log(available);
  return (
    <>
      <BackgroundRegister>
        <VideoBgRegister autoPlay loop muted src={VideoRegister} type="video/mp4" />
      </BackgroundRegister>
          <FormContentRegister>
            <FormRegister action="#">
              <FormH1Register>Services</FormH1Register>
             
                <FormButtonRegister1 >
                  <NavLink to="/services/helpers" >
                    Helpers
                  </NavLink>
                </FormButtonRegister1>
                
                <FormButtonRegister2 >
                  <NavLink to="/services/it-services">
                    IT-services
                  </NavLink>
                </FormButtonRegister2>
                
                <FormButtonRegister3 >
                  <NavLink to="/services/repair">
                    Repair
                  </NavLink>
                </FormButtonRegister3>

                <FormButtonRegister4 >
                  <NavLink to="/services/photography">
                    Photography
                  </NavLink>
                </FormButtonRegister4>

            </FormRegister>
          </FormContentRegister>
    </>
  );
};

export default Service;
