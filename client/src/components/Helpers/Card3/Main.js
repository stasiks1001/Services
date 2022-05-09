import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import About from "./About";
import Interests from "./Interests";


function Main(){
    return(
        <div className="main">
            <div className="container1">
                <h1>Johana Jens</h1>
                <h4>Babysiter</h4>
                <h5>laurasmith.website</h5>
            </div>
            <div className="container2">
                <p><FaEnvelope />Email</p>
                <p><FaLinkedin />LinkedIn</p>
            </div>
            <div className="about">
                <About />
            </div>
            <div className="interests">
                <Interests />
            </div>
          
           
        </div>
    )
}

export default Main;