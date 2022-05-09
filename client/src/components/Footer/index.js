import React from "react";
import { animateScroll as scroll } from "react-scroll";
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
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollTop();
  };
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
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin"> Facebook </FooterLink>
              <FooterLink to="/signin"> Twitter</FooterLink>
              <FooterLink to="/signin"> YouTube </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            <WebsiteRights>
              Dolla © {new Date().getFullYear()}
              All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialLogo>
        </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
