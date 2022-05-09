import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <h1>
        <FaTwitter />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaGithub /> 
      </h1>
    </div>
  );
}

export default Footer;
