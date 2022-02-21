import React, { useState } from "react";

import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";

import { motion } from "framer-motion";

import logo from "../assets/static/logo.png";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
      <div
        className="flex flex-wrap items-center justify-between py-2.5 px-3 false undefined"
        style={{ backgroundColor: "rgba(0,0,0, 0.8)" }}
      >
        <NavbarContainer>
          <NavbarWrapper>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src={logo}
                alt="logo"
                style={{ width: "40px", cursor: "pointer" }}
              />
            </motion.div>
            <NavbarToggler
              color="white"
              onClick={() => setOpenNavbar(!openNavbar)}
              ripple="light"
            />
          </NavbarWrapper>

          <NavbarCollapse open={openNavbar}>
            <Nav>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <NavLink href="#about-me" style={{ color: "#F7F7F7" }}>
                  Sobre mí
                </NavLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <NavLink href="#credentials" style={{ color: "#F7F7F7" }}>
                  Credenciales
                </NavLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <NavLink href="#contact" style={{ color: "#F7F7F7" }}>
                  Contáctame
                </NavLink>
              </motion.div>
            </Nav>
          </NavbarCollapse>
        </NavbarContainer>
      </div>
    </>
  );
};

export default Header;
