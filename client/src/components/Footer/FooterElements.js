import styled from "styled-components";
import { Link } from "react-router-dom";


export const FooterContainer = styled.footer`
  background-color: #101522;
  height: auto;
`;
export const FooterWrap = styled.div`
  padding: 120px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
/*   justify-content:center; */
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  justify-content: center;
  align-items:center;

  &:hover {
    color: #01bf71;
    transition: 0.3 ease-out;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 50px 0 0 0;
  font-size:20px;
`;

export const SocialIconLink = styled.a`
  text-decoration:none;
  color: #fff;
  font-size: 24px;
`;
