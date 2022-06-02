import React, { useState } from "react";
import { Link } from "react-scroll";

import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";

import { motion } from "framer-motion";

import logo from "../assets/static/logo.png";
import { CVE, CVS } from "../documents/certifications";
import Language from "./Language/Language";
import useQuery from "../hooks/useQuery";

const Header = ({ handleLanguage, language }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const size = useQuery();

  console.log("Size", size);

  return (
    <>
      <div
        className="flex flex-wrap items-center justify-between py-2.5 px-3 false undefined"
        style={{ backgroundColor: "rgba(0,0,0, 0.8)" }}
      >
        <NavbarContainer>
          <NavbarWrapper>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="presentation"
                smooth={true}
                duration={700}
                isDynamic={true}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "40px", cursor: "pointer" }}
                />
              </Link>
            </motion.div>

            {size === "sm" || size === "md" ? (
              <Language handleLanguage={handleLanguage} />
            ) : null}

            <NavbarToggler
              color="white"
              onClick={() => setOpenNavbar(!openNavbar)}
              ripple="light"
            />
          </NavbarWrapper>

          <NavbarCollapse open={openNavbar}>
            {size === "lg" || size === "xl" || size === "xxl" ? (
              <div style={{ marginLeft: "200px" }}>
                <Language handleLanguage={handleLanguage} />
              </div>
            ) : null}

            <Nav>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <Link
                  to="about-me"
                  smooth={true}
                  duration={700}
                  isDynamic={true}
                >
                  {language === "EN" ? (
                    <NavLink style={{ color: "#F7F7F7", cursor: "pointer" }}>
                      About me
                    </NavLink>
                  ) : (
                    <NavLink style={{ color: "#F7F7F7", cursor: "pointer" }}>
                      Sobre mí
                    </NavLink>
                  )}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <Link
                  to="credentials"
                  smooth={true}
                  duration={700}
                  isDynamic={true}
                >
                  {language === "EN" ? (
                    <NavLink style={{ color: "#F7F7F7", cursor: "pointer" }}>
                      Credentials
                    </NavLink>
                  ) : (
                    <NavLink style={{ color: "#F7F7F7", cursor: "pointer" }}>
                      Credenciales
                    </NavLink>
                  )}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  isDynamic={true}
                >
                  {language === "EN" ? (
                    <NavLink style={{ color: "#F7F7F7", cursor: "pointer" }}>
                      Contact me
                    </NavLink>
                  ) : (
                    <NavLink style={{ color: "#F7F7F7", cursor: "pointer" }}>
                      Contáctame
                    </NavLink>
                  )}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                {language === "EN" ? (
                  <NavLink
                    href={language === "ES" ? CVS : CVE}
                    style={{ color: "#F7F7F7", cursor: "pointer" }}
                  >
                    My CV
                  </NavLink>
                ) : (
                  <NavLink
                    href={language === "ES" ? CVS : CVE}
                    style={{ color: "#F7F7F7", cursor: "pointer" }}
                  >
                    Mi CV
                  </NavLink>
                )}
              </motion.div>
            </Nav>
          </NavbarCollapse>
        </NavbarContainer>
      </div>
    </>
  );
};

export default Header;
