import React from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";

import backImage from "../assets/static/backImage.png";

const Home = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navPrincipal").style.top = "0";
    } else {
      document.getElementById("navPrincipal").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <div
        id="navPrincipal"
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "999",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          paddingTop: "100px",
          background: `url(${backImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Presentation />
        <About />
        <Credentials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
