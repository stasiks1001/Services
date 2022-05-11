import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transpernt")};
  height: 80px;
  margin-top: -180px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: 768px) {
    transition: 0.8 all ease;
    display: flex;
    flex-direction: column;
   
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  
  
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 18px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  padding: 0 140px ;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size:20px;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 481px) {
    display: flex;
    font-size:10px;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -10px;
  }
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  
`;
export const NavBtn = styled.nav`
  display: flex;
  padding-left: 3rem;
  align-items: center;
 
  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 70%;
    justify-content: space-around;
    gap:10px;
  }
`;
export const NavBtnLink = styled(LinkR)`
  margin-right: 32px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
