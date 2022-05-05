import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            
            <NavLogo to="/" onClick={toggleHome}>
              Logo
            </NavLogo>
            
            <NavMenu>
              
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="footer"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contacts
                </NavLinks>
              </NavItem>


            </NavMenu>
            
           {/*  <NavBtn>
              <NavBtnLink
                to="/city"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                City
              </NavBtnLink>
            </NavBtn>
 */}
            <NavBtn>
              <NavBtnLink
                to="/signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign Up
              </NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
