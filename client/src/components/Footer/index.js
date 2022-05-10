import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer id="contacts">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">how it works</FooterLink>
              <FooterLink to="/signin"> Testmonials </FooterLink>
              <FooterLink to="/signin"> Careers</FooterLink>
              <FooterLink to="/signin"> Investors </FooterLink>
              <FooterLink to="/signin"> Terms of Serives </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">how it works</FooterLink>
              <FooterLink to="/signin"> Testmonials </FooterLink>
              <FooterLink to="/signin"> Careers</FooterLink>
              <FooterLink to="/signin"> Investors </FooterLink>
              <FooterLink to="/signin"> Terms of Serives </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin"> Support </FooterLink>
              <FooterLink to="/signin"> Destinations</FooterLink>
              <FooterLink to="/signin"> Sponsorship </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              
           
          
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
                <FooterLink to="/signin" > Facebook </FooterLink>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
                <FooterLink to="/signin">Instagram</FooterLink>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
                <FooterLink to="/signin"> YouTube </FooterLink>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="twitter">
                <FaTwitter />
                <FooterLink to="/signin"> Twitter</FooterLink>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
                <FooterLink to="/signin"> LinkedIn </FooterLink>
              </SocialIconLink>
    
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <WebsiteRights>
              Helplia © {new Date().getFullYear()}
              All Rights Reserved
            </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
